<?php
// 本类由系统自动生成，仅供测试用途
class GroupAction extends Action {
	//空操作
	public function _empty(){
		redirect(session('url')); 
    }
	
	/**
    * 锁定
    */
	public function lock(){
		A('Impot')->CodeAdmin();
		if(session('uid')!=1)A('Impot')->error('权限不足');
		M("group")->save(array("locked"=>1,'guid'=>$_GET['guid']));
		A('Impot')->error("锁定成功");
    }
	
	/**
    * 解锁
    */
	public function unlock(){
		A('Impot')->CodeAdmin();
		if(session('uid')!=1)A('Impot')->error('权限不足');
		M("group")->save(array("locked"=>0,'guid'=>$_GET['guid']));
		A('Impot')->error("解锁成功");
    }

    /**
    * 备份项目数据
    */
	public function backup(){
		$time = time();
		A('Impot')->CodeAdmin();
		$Array = array('group','member','code','model','dir','content','diy','focus','diyimg','diyimgpro','diyimgtype','style','function','spacestyle','prodir','pro','xiaoguo','peijian','additional');
		foreach($Array as $value){
			$insert_table="INSERT INTO app_".$value."(`";
			$insert_values="`)VALUES(";
			$i=0;
			$table_key="";
			clearstatcache();
			$list = M()->query();

			if($value=='group'){
				$show_table_values=mysql_query('select * from app_'.$value.' where guid="'.$_GET['guid'].'"');
			}else{
				$show_table_values=mysql_query('select * from app_'.$value.' where groupid="'.$_GET['guid'].'"');
			}
			while($insert=mysql_fetch_assoc($show_table_values)){
				$table_value="";
				foreach($insert as $key=>$value){
					if($i==0){
						$table_key.=$key."`,`";
					}
					$value=str_replace("'","\'",$value);
					$table_value.="'".$value."',";
				}
				$i++;
				$this->back('sql_group/'.$_GET['guid'].'_'.$time.".sql",$insert_table.substr($table_key,0,-3).$insert_values.substr($table_value,0,-1).");#END#\r\n\r\n\r\n");
				clearstatcache();
			}
		}
		A('Impot')->error("备份成功");
    }
	
	public function back($dir,$content)
	{
		$open=fopen($dir,"a+");
		fwrite($open,$content);
		fclose($open);
	}

    /**
    * 默认操作
    */
    public function index()
    {
		A('Impot')->CodeAdmin();
		$this->lists=M("group")->order('time desc')->select();
		session('url',$_SERVER['REQUEST_URI']);
		$this->display();
    }
	
	/**
    * 添加
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
		array('title','require','添加失败!请填写项目名称!',0,''),
		);
		if (!D("group")->validate($validate)->create()){
			A('Impot')->error(D("group")->getError());
		}
		
		import("@.ORG.UnsetPost");
		new UnsetPost(array('title','model'));
		
		$_POST["guid"]=A('Impot')->guid();
		$_POST["uid"]=session('uid');
		$_POST["time"]=time();
		
		M("group")->add($_POST);
		A('Impot')->error('添加成功');
    }
	
	/**
    * 修改
    */
    public function edit()
    {
		A('Impot')->CodeAdmin();
		if(session('uid')!=1)A('Impot')->error('权限不足');
		$this->group=M("group")->find($_GET['guid']);
		if(!$this->group)A('Impot')->error('参数错误');
		$this->display();
    }
	
	/**
    * 提交修改
    */
    public function submit_edit()
    {
		A('Impot')->CodeAdmin();
		if(session('uid')!=1)A('Impot')->error('权限不足');
		$validate = array(
		array('title','require','修改失败!请填写项目名称!',0,''),
		);
		$group=M("group")->find($_POST['guid']);
		if(!$group)A('Impot')->error('参数错误');

		if (!D("group")->setProperty($validate)->create()){
			A('Impot')->error(D("group")->getError());
		}
		
		import("@.ORG.UnsetPost");
		new UnsetPost(array('title','guid','model'));
		
		M("group")->save($_POST);
		A('Impot')->error('修改成功');
    }
	
	/**
    * 删除
    */
    public function delete()
    {
		A('Impot')->CodeAdmin();
		if(session('uid')!=1)A('Impot')->error('权限不足');
		if(M('code')->where('groupid="'.$_GET['guid'].'"')->count() != 0){
			A('Impot')->error('该项目还存在验证码数据,暂不能删除!');
		}else if(M('member')->where('groupid="'.$_GET['guid'].'"')->count() != 0){
			A('Impot')->error('该项目还存在会员数据,暂不能删除!');
		}
		M('group')->delete($_GET['guid']);
		A('Impot')->error('删除成功');
    }
	
}