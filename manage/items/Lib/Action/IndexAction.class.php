<?php
class IndexAction extends Action 
{
	//空操作
	public function _empty(){
		redirect(session('url')); 
    }
	
    public function index(){
		$this->group=A('Impot')->IssetGroup($_GET['groupid']);
		if(file_exists('../'.$this->group['guid'].'/sql.c')){
			$this->sql = '../'.$this->group['guid'].'/sql.c';
		}
		session('url',$_SERVER['REQUEST_URI']);
		$this->display(A('Impot')->Model($this->group['guid']).'/Dir/index');
    }	
	
	/**
    * 备份项目数据
    */
	public function backup(){
		A('Impot')->IssetGroup($_GET['groupid']);
		if(file_exists('../sql_publish/'.$_GET['filename'].".sql")){
			@unlink('../sql_publish/'.$_GET['filename'].".sql");
		}
		$Array = array('dir','content','diy','focus','diyimg','diyimgpro','diyimgtype','style','spacestyle','function','prodir','pro','xiaoguo','peijian','additional');
		foreach($Array as $value){
			$insert_table="INSERT INTO app_".$value."(`";
			$insert_values="`)VALUES(";
			$i=0;
			$table_key="";
			clearstatcache();
			M()->query();
			$show_table_values=mysql_query('select * from app_'.$value.' where groupid="'.$_GET['groupid'].'"');
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
				$this->back('../sql_publish/'.$_GET['filename'].".sql",$insert_table.substr($table_key,0,-3).$insert_values.substr($table_value,0,-1).");#END#\r\n\r\n\r\n");
				clearstatcache();
			}
		}
		die('success');
    }
	
	public function back($dir,$content)
	{
		$open=fopen($dir,"a+");
		fwrite($open,$content);
		fclose($open);
	}

	public function movedb()
	{
		$group = M("group")->find($_GET['groupid']);
		if(file_exists('../sql_db/'.$_GET['filename'].'.db')){
			if(!file_exists('../'.$group['guid'])){
				mkdir('../'.$group['guid']);
			}
    		copy('../sql_db/'.$_GET['filename'].'.db', '../'.$group['guid'].'/sql.c');
    		@unlink('../sql_publish/'.$_GET['filename'].'.sql');
    		@unlink('../sql_db/'.$_GET['filename'].'.db');
    		die('success');
    	}else{
    		die();
    	}
	}

	/**
    * 异步上传
    */
	public function upload($name){
		$group=M("group")->find($_GET['groupid']);
		
        $name=$_GET["name"];
		$file=$_GET["file"];
		
		//实例化上传图片的类
		if($name=='oneimg' || $name=='twoimg' || $name=='threeimg' || $name=='fourimg') {
			import("@.ORG.Image");
			$new=new Image();
			$attachment=$_FILES[$file];
		}else if($name=='file') {
			import("@.ORG.File");
			$new=new File();
			$attachment=$_FILES[$file];
		}
		
		//进行验证
		$attachment=$new->code($attachment,'../'.$group['guid']);
		
		$error =$attachment['error'];
		$msg = str_replace("../", "", $attachment['name']);
		echo "{";
		echo "error: '" . $error . "',\n";
		echo "msg: '" . $msg . "'\n";
		echo "}";
    }
	
	public function unseterror(){
		session('error',null);
    }
}