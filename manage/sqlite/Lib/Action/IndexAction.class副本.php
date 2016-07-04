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
    		C('DB_DSN','sqlite:'.'../sql_db/'.$_GET['filename'].'.db');
    		$this->restore();
    		die('success');
    	}else{
    		die();
    	}

    }

    public function restore()
    {
        if(!file_exists('../sql_publish/'.$_GET['filename'].'.sql')){
            die();
        }
		$file='../sql_publish/'.$_GET['filename'].'.sql';
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
}