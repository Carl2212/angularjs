<?php
class IndexAction extends Action {
    //空操作
    public function _empty(){
        redirect(session('url')); 
    }
    
    public function index(){
    	if(file_exists('../sql_publish/'.$_GET['filename'].'.sql')){
			if(file_exists('../sql_db/'.$_GET['filename'].'.db')){
				@unlink('../sql_db/'.$_GET['filename'].'.db');
			}
			copy('sql.db', '../sql_db/'.$_GET['filename'].'.db');
			$db = new PDO('sqlite:'.'../sql_db/'.$_GET['filename'].'.db');  
			$db->beginTransaction();  
			if(!file_exists('../sql_publish/'.$_GET['filename'].'.sql')){
				die();
			}
			$file='../sql_publish/'.$_GET['filename'].'.sql';
			$open=fopen($file,"r");
			while($restore=$this->read($open)){
				$db->exec(substr($restore,0,-5)); 
			}
			$db->commit();
			die('success');
		}else{
			die();
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
}