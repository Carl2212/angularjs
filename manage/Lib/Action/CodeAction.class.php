<?php
// 本类由系统自动生成，仅供测试用途
class CodeAction extends Action {
	//空操作
	public function _empty(){
		redirect(session('url')); 
    }
	
    public function index()
    {
		A('Impot')->CodeAdmin();
		$this->group = A('Impot')->IssetGroup($_GET['groupid']);

		$p=(isset($_GET["p"]))?$_GET["p"]-1:0;
		$page=20;
		$start=$p*$page;
		
		$this->lists=M("code")->where("groupid='".$this->group['guid']."'")->order("time desc")->limit($start.",".$page)->select();
		$count=M("code")->where("groupid='".$this->group['guid']."'")->count();

		//输出分页
		import("@.ORG.Page");
		$Page=new Page($count,$page,'groupid/'.$this->group['guid']);
		$this->page=$Page->show();

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
			M("code")->save(array("locked"=>1,'guid'=>$value));
		}
		A('Impot')->error('锁定成功');
    }

    /**
    * 解锁
    */
	public function unlock(){
		A('Impot')->CodeAdmin();
		A('Impot')->IssetGroup($_POST["groupid"]);
		foreach($_POST["select"] as $value) {
			M("code")->save(array("locked"=>0,'guid'=>$value));
		}
		A('Impot')->error("解锁成功");
    }

    /**
    * 锁定更新
    */
	public function lockupdata(){
		A('Impot')->CodeAdmin();
		A('Impot')->IssetGroup($_POST["groupid"]);
		foreach($_POST["select"] as $value) {
			M("code")->save(array("noupdata"=>1,'guid'=>$value));
		}
		A('Impot')->error('锁定成功');
    }

    /**
    * 解锁更新
    */
	public function unlockupdata(){
		A('Impot')->CodeAdmin();
		A('Impot')->IssetGroup($_POST["groupid"]);
		foreach($_POST["select"] as $value) {
			M("code")->save(array("noupdata"=>0,'guid'=>$value));
		}
		A('Impot')->error("解锁成功");
    }
    /**
    * 解绑
    */
	public function unbinding(){
		A('Impot')->CodeAdmin();
		A('Impot')->IssetGroup($_POST["groupid"]);
		foreach($_POST["select"] as $value) {
			M("code")->save(array("binding"=>0,'uuid'=>'','guid'=>$value));
		}
		A('Impot')->error('解除绑定成功');
    }
	
	

    
	
	/**
    * 添加
    */
    public function add()
    {
		A('Impot')->CodeAdmin();
		$this->group = A('Impot')->IssetGroup($_GET['groupid']);
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
		if (!D("code")->validate($validate)->create()){
			A('Impot')->error(D("code")->getError());
		}
		import("@.ORG.UnsetPost");
		new UnsetPost(array('username','password','nickname','phone','address','groupid'));
		
		$_POST["guid"]=A('Impot')->guid();
		$_POST["uid"]=session('uid');
		$_POST["time"]=time();
		
		M("code")->add($_POST);
		A('Impot')->error('添加成功');
    }
	
	/**
    * 修改
    */
    public function edit()
    {
		A('Impot')->CodeAdmin();
		$this->code=M("code")->find($_GET['guid']);
		if(!$this->code)A('Impot')->error('参数错误');
		$this->group = A('Impot')->IssetGroup($this->code['groupid']);
		$this->display();
    }
	
	/**
    * 提交修改
    */
    public function submit_edit()
    {
		A('Impot')->CodeAdmin();
		$code=M("code")->find($_POST["guid"]);
		if(!$code)A('Impot')->error('参数错误');
		A('Impot')->CodeLock($code['groupid']);
		
		import("@.ORG.UnsetPost");
		new UnsetPost(array('username','password','nickname','phone','address','guid'));
		if($_POST["password"]!=''){
			$validate = array(
				array('username','','添加失败!账户名已存在!！',0,'unique',1),
				array('username','5,12','用户名只能输入5-12个字母或数字!',0,'length'),
				array('password','6,15','密码只能输入6-15个字母或数字!',0,'length'),
			);
			if (!D("member")->validate($validate)->create()){
				A('Impot')->error(D("member")->getError());
			}
		}else{
			unset($_POST["password"]);
		}

		M("code")->save($_POST);
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
			M("code")->delete($value);
		}
		A('Impot')->error('删除成功');
    }
	
	
}