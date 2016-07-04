<?php
class Image
{
	private $type_array=array(1,2,3,6);    //getimagesize图片格式数字1:gif,2:jpg,3:png,6:bmp
	private $type_hx=array(1=>"gif",2=>"jpg",3=>"png",6=>"bmp");  //图片格式
	private $upload_dir;                //上传图片目录
	private $name;                          //重命名图片名称
	private $filearray;
	private $attachment_dir="";
	
	function code($img,$filedir) {
		$this->attachment_dir = $filedir.'/';	
		$this->filearray["error"]='';
		$this->filearray["name"]='';
		$rand=rand(0,9).rand(0,9).rand(0,9).rand(0,9).rand(0,9).rand(0,9);
		$img_array=$img;
		
		//获取图片getimagesize格式值
		$this->type=getimagesize($img_array["tmp_name"]);   
		
		//判断大图是否存在
		if(!is_uploaded_file($img_array["tmp_name"])){
			$this->filearray["error"]='请选择要上传文件';
		}
		//判断图片尺寸
		elseif($this->type[0] > 5000 || $this->type[1] > 5000){
			$this->filearray["error"]='图片尺寸最大只支持5000*5000';
		}
		//判断图片格式是否正确
		elseif(!in_array($this->type[2],$this->type_array)){
			$this->filearray["error"]='上传文件格式只支持GIF、JPG、PNG、BMP';
		}
		else{
			//图片名称
			$this->name=$this->guid().".".$this->type_hx[$this->type[2]];
							
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