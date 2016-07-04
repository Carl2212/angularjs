<?php
class File
{
	private $type_array=array("rar","zip",'mp4','pdf');    
    private $upload_dir;                      //上传图片目录
	private $name;                          //重命名图片名称
	private $filearray;
	private $file_size=200000000;
	private $attachment_dir="";
	
	function code($img,$filedir) {
		$this->attachment_dir = $filedir.'/';	
		$this->filearray["error"]='';
		$this->filearray["name"]='';
		$rand=rand(0,9).rand(0,9).rand(0,9).rand(0,9).rand(0,9).rand(0,9);
		
		$img_array=$img;
		
		//判断大图是否存在
		if(!is_uploaded_file($img_array["tmp_name"])){
			$this->filearray["error"]='请选择要上传文件';
		}
				
		//判断是否格式正确
		elseif(!in_array(substr($img_array["name"],strrpos($img_array["name"],".")+1),$this->type_array)){
			$this->filearray["error"]='上传文件格式只支持RAR、ZIP、mp4';
		}
		
		else{
			//文件名称
			$this->name=$this->guid().substr($img_array["name"],strrpos($img_array["name"],"."));
						
			//检测存储图片的目录是否存在则新建一个
			if(!file_exists($this->attachment_dir)){
				mkdir($this->attachment_dir);
			}
			
			//图片上传位置
			$this->upload_dir=$this->attachment_dir.$this->name;
				
			if(!move_uploaded_file($img_array["tmp_name"],$this->upload_dir)) {
				$this->filearray["error"]='移动文件时发生错误';
			}
			$this->filearray["name"]=$this->upload_dir;
		}	
		return $this->filearray;
	}
	
	function guid(){
		if (function_exists('com_create_guid')){
			return str_replace(array('{','}','-'),'',com_create_guid());
		}else{
			mt_srand((double)microtime()*10000);
			$charid = strtoupper(md5(uniqid(rand(), true)));
			$hyphen = chr(45);
			$uuid = chr(123)
                .substr($charid, 0, 8).$hyphen
                .substr($charid, 8, 4).$hyphen
                .substr($charid,12, 4).$hyphen
                .substr($charid,16, 4).$hyphen
                .substr($charid,20,12)
                .chr(125);
				return str_replace(array('{','}','-'),'',$uuid);
		}
	}
}
?>