<?php
class Inc extends Think
{
	private $file="";
	private $dirname='';
	
	//获取目录文件放入数组内
	function getfile($dir,$model){
		$this->file='';
		if($open=opendir($dir)){
			while($read=readdir($open)){
				if($read!="."&&$read!=".."&&!is_dir($read)){
					if($read==$model){
						$this->file.='<option value="'.$read.'" selected="selected">'.$read.'</option>';
					}
					else {
						$this->file.='<option value="'.$read.'">'.$read.'</option>';
					}
				}				
			}
		}
		return $this->file;
	}
	
	//获取当前栏目的文件夹路径
	function whilemkdir($id,$s=''){
		$dir=M('dir')->find($id);
		if($dir['parentid']!=0){
			$parentdir=M('dir')->find($dir['parentid']);
			if($parentdir['folder']!=''){
				$this->dirname=$parentdir['folder']."/".$this->dirname; 
			}
			$this->whilemkdir($parentdir['id'],$this->dirname);
		}
		return $this->dirname;
	}
	
}
?>