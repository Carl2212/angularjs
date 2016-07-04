<?php
// 本类由系统自动生成，仅供测试用途
class AdminAction extends Action {
	
	//空操作
	public function _empty(){
		redirect(session('url')); 
    }
	
	//列表
    public function index()
    {
		A('Impot')->CodeAdmin();
		if(session('uid')!=1){
			$this->lists=M("admin")->where('id='.session('uid'))->order('id desc')->select();
		}else{
			$this->lists=M("admin")->order('id desc')->select();
		}
		session('url',$_SERVER['REQUEST_URI']);
		$this->display();
    }
	
	/**
    * 显示添加
    */
    public function add()
    {
		A('Impot')->CodeAdmin();
		if(session('uid')!=1)A('Impot')->error('权限不足');
		$this->display();
    }
	 
	/**
    * 提交添加
    */
    public function submit_add()
    {
		A('Impot')->CodeAdmin();
		if(session('uid')!=1)A('Impot')->error('权限不足');
		$validate = array(
		array('username','','添加失败!账户名已存在!',0,'unique',1),
		array('username','5,12','用户名只能输入5-12个字母或数字!',0,'length'),
		array('password','6,15','密码只能输入6-15个字母或数字!',0,'length'),
		);
		if (!D("member")->validate($validate)->create()){
			A('Impot')->error(D("member")->getError());
		}
		if (!D("admin")->validate($validate)->create()){
			A('Impot')->error(D("admin")->getError());
		}
		import("@.ORG.UnsetPost");
		new UnsetPost(array('username','nickname','password'));

		$_POST["id"]=M("admin")->max('id')+1;
		$_POST["password"]=md5($_POST["password"]);
		$_POST["uid"]=session('uid');
		$_POST["time"]=time();
		
		M("admin")->add($_POST);
		A('Impot')->error('添加成功');
    }
	/**
    * 修改
    */
    public function edit()
    {
		A('Impot')->CodeAdmin();
		if((int)$_GET['id']=='' || (session('uid')!=1 && (int)$_GET['id']!=session('uid')))A('Impot')->error('参数错误');
		$this->admin=M("admin")->find((int)$_GET['id']);
		if(!$this->admin)A('Impot')->error('参数错误');
		$this->display();
    }
	
	/**
    * 提交修改
    */
    public function submit_edit()
    {
		A('Impot')->CodeAdmin();
		if($_POST['id']=='' || (session('uid')!=1 && $_POST['id']!=session('uid')))A('Impot')->error('参数错误');
		
		$admin=M("admin")->find($_POST["id"]);
		if(!$admin)A('Impot')->error('参数错误');
		
		import("@.ORG.UnsetPost");
		new UnsetPost(array('nickname','password','id'));
		
		if($_POST["password"]!=''){
			$validate = array(
			array('password','6,15','密码只能输入6-15个字母或数字!',0,'length'),
			);
			if (!D("admin")->validate($validate)->create()){
				A('Impot')->error(D("admin")->getError());
			}
			$_POST["password"]=md5($_POST["password"]);
		}else{
			unset($_POST["password"]);
		}
		M("admin")->save($_POST);
		A('Impot')->error('修改成功');
    }
	
	/**
    * 删除
    */
    public function delete()
    {
		A('Impot')->CodeAdmin();
		if(session('uid')!=1)A('Impot')->error('权限不足');
		foreach($_POST["select"] as $value) {
			if($value != 1)
			M("admin")->delete($value);
		}
		A('Impot')->error('删除成功');
    }
	
}