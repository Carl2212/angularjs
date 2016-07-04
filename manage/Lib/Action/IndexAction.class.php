<?php
// 本类由系统自动生成，仅供测试用途
class IndexAction extends Action {
	//空操作
	public function _empty(){
		redirect(session('url')); 
    }

    public function index(){
		if(!session('?username')){
			var_dump(md5('wxh123'));
			$this->display('login');
		}else{
			if(session('?isadmin')){
				redirect(C('BASE_URL').'index.php/Admin');
			}else{
				redirect(C('BASE_URL').'items/index.php/Index/index/groupid/'.session('groupid'));
			}
		}
    }
	public function login()
    {

        $this->display();
    }
	
	public function code_login()
    {
		session('username',null);
		session('isadmin',null);
		session('groupid',null);
		$member=M("member")->where('username="'.$_POST["username"].'" and password="'.md5($_POST['password']).'"')->find();
		$admin=M("admin")->where('username="'.$_POST["username"].'" and password="'.md5($_POST['password']).'"')->find();
		if(!$member && !$admin){
			die("error");
		}else if($admin && !$member){
			session('username',$admin['username']);
			session('uid',$admin['id']);
			session('isadmin',true);
			die(dirname(__URL__)."/Index/");
		}else{
			$group=M('group')->find($member['groupid']);
			if($group['locked']!=0)die("error");
			session('username',$member['username']);
			session('groupid',$member['groupid']);
			session('uid',$member['guid']);
			die(dirname(__URL__)."/Index/");
		}
	}
	public function outlogin()
    {
		session('username',null);
		session('isadmin',null);
		session('groupid',null);
		$this->success('退出成功',dirname(__URL__));
    }

    public function iscode(){
    	$code = M('code')->where('username="'.$_GET['username'].'" and password="'.$_GET['password'].'" and groupid="'.$_GET['groupid'].'"')->find();
    	$group = M('group')->find($code['groupid']);
    	if (!$code) {
    		die('0');
    	}else if ($code['locked']=='1') {
    		die('1');
    	}else if ($code['binding']=='1' && $_GET['uuid']!=$code['uuid']) {
    		die('2');
    	}else if($_GET['uuid']==''){
    		die('3');
    	}else if ($group['locked']=='1') {
    		die('4');
    	}else{
    		if ($code['uuid']=='' || $code['binding']=='0') {
    			M('code')->save(array('guid'=>$code['guid'],'uuid'=>$_GET['uuid'],'binding'=>'0'));
    		}
    		if ($_GET['type'] == 'updata') {
    			if ($code['noupdata'] != 0) {
    				die('5');
    			}
    		}
    		die('ok|'.$code['guid']);
    	}
    }	
	public function jiechu(){
        $code = M('code')->where('username="'.$_GET['username'].'" and password="'.$_GET['password'].'" and groupid="'.$_GET['groupid'].'"')->find();
        $group = M('group')->find($code['groupid']);
        if (!$code) {
            die('0');
        }else{
            if ($code['binding']=='1' && $_GET['uuid']!=$code['uuid']) {
                die('1');
            }else if($code['binding']=='0'){
                die('2');
            }else if ($code['locked']=='1') {
                die('3');
            }else if ($group['locked']=='1') {
                die('4');
            }else{
                M('code')->save(array('guid'=>$code['guid'],'uuid'=>'','binding'=>'0'));
                die('ok');
            }
        }
    }
	public function restore()
    {
    	A('Impot')->CodeAdmin();
		$file='sql.sql';
		$open=fopen($file,"r");
		while($restore=$this->read($open)){
			M()->query(substr($restore,0,-5));
		}
    }

    public function read($open){
		$read="";
		while($fgets=fgets($open)){
			$fgets=trim($fgets);
			$read.=$fgets;
			if(substr($read,-5)=="#END#"){
				break;
			}
		}
		return($read);
    }

	public function unseterror(){
		session('error',null);
    }
}