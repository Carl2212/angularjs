<?php
// 本类由系统自动生成，仅供测试用途
class MemberAction extends Action {
	//空操作
	public function _empty(){
		redirect(session('url')); 
    }
		
    /**
    * 默认操作
    */
    public function index()
    {
		A('Impot')->CodeAdmin();
		$this->group=A('Impot')->IssetGroup($_GET['groupid']);
		$this->lists=M("member")->where('groupid="'.$this->group['guid'].'"')->order("time desc")->select();
		session('url',$_SERVER['REQUEST_URI']);
		$this->display();
    }
	
	/**
    * 锁定
    */
	public function lock(){
		A('Impot')->CodeAdmin();
		A('Impot')->IssetGroup($_POST["groupid"]);
		foreach($_POST["select"] as $value) {
			M("member")->save(array("locked"=>1,'guid'=>$value));
		}
		A('Impot')->error("锁定成功");
    }
	
	/**
    * 解锁
    */
	public function unlock(){
		A('Impot')->CodeAdmin();
		A('Impot')->IssetGroup($_POST["groupid"]);
		foreach($_POST["select"] as $value) {
			M("member")->save(array("locked"=>0,'guid'=>$value));
		}
		A('Impot')->error("解锁成功");
    }
		
	/**
    * 添加
    */
    public function add()
    {
		A('Impot')->CodeAdmin();
		$this->group=A('Impot')->IssetGroup($_GET['groupid']);
		$this->display();
    }
	
	/**
    * 提交添加
    */
    public function submit_add()
    {
		A('Impot')->CodeAdmin();
		A('Impot')->IssetGroup($_POST['groupid']);
		
		$validate = array(
		array('username','','添加失败!账户名已存在!！',0,'unique',1),
		array('username','5,12','用户名只能输入5-12个字母或数字!',0,'length'),
		array('password','6,15','密码只能输入6-15个字母或数字!',0,'length'),
		);
		if (!D("admin")->validate($validate)->create()){
			A('Impot')->error(D("admin")->getError());
		}
		if (!D("member")->validate($validate)->create()){
			A('Impot')->error(D("member")->getError());
		}
		import("@.ORG.UnsetPost");
		new UnsetPost(array('username','nickname','password','groupid'));
		
		$_POST["guid"]=A('Impot')->guid();
		$_POST["password"]=md5($_POST["password"]);
		$_POST["uid"]=session('uid');
		$_POST["time"]=time();
		
		M("member")->add($_POST);
		A('Impot')->error('添加成功');
    }
	
	/**
    * 修改
    */
    public function edit()
    {
		A('Impot')->CodeAdmin();
		$this->member=M("member")->find($_GET['guid']);
		if(!$this->member)A('Impot')->error('参数错误');
		$this->group=A('Impot')->IssetGroup($this->member['groupid']);
		$this->display();
    }
	
	/**
    * 提交修改
    */
    public function submit_edit()
    {
		A('Impot')->CodeAdmin();
		$member=M("member")->find($_POST["guid"]);
		if(!$member)A('Impot')->error('参数错误');
		A('Impot')->CodeLock($member['groupid']);
		
		import("@.ORG.UnsetPost");
		new UnsetPost(array('nickname','password','guid'));
		
		if($_POST["password"]!=''){
			$validate = array(
			array('password','6,15','密码只能输入6-15个字母或数字!',0,'length'),
			);
			if (!D("member")->validate($validate)->create()){
				A('Impot')->error(D("member")->getError());
			}
			$_POST["password"]=md5($_POST["password"]);
		}else{
			unset($_POST["password"]);
		}
		M("member")->save($_POST);
		A('Impot')->error('修改成功');
    }
	
	/**
    * 删除
    */
    public function delete()
    {
		A('Impot')->CodeAdmin();
		A('Impot')->IssetGroup($_POST["groupid"]);
		foreach($_POST["select"] as $value) {
			$member=M("member")->find($value);
			M("member")->delete($value);
		}
		A('Impot')->error('删除成功');
    }
}