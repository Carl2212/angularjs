<?php
class Dir{
	
	private $listcontent='';              //存在栏目内容
	private $listfj="";                 //子栏目前空格
	private $Titlec="";                 //子栏目前空格
	
	//该id的下级系列
	//上级id
	//自身id
	function option($groupid,$cid,$pid,$guid='0'){
		$list=M("dir")->where("pid='".$cid."' and groupid='".$groupid."'")->order("sort,time desc")->select();
		if($list){
			foreach($list as $value){
				if($value['guid']==$pid){
					$this->listcontent.='<option value="'.$value['guid'].'" selected="selected">'.$this->listfj."┣".$value['title'].'</option>';					
				}
				else if($pid=='0'){
					if($value['guid']==$guid){
						$this->listcontent.='<option value="'.$value['guid'].'" selected="selected">'.$this->listfj."┣".$value['title'].'</option>';	
					}
					else{
						$this->listcontent.='<option value="'.$value['guid'].'">'.$this->listfj."┣".$value['title'].'</option>';
					}
				}
				else{
					$this->listcontent.='<option value="'.$value['guid'].'">'.$this->listfj."┣".$value['title'].'</option>';
				}
				$z_value=M("dir")->where("pid='".$value['guid']."' and groupid='".$groupid."'")->select();
				
				if($z_value){
					$this->listfj.="┇";
					$this->option($groupid,$value['guid'],$pid,$guid);
				}
			}
			$this->listfj=substr($this->listfj,0,-3);
		}
		return $this->listcontent;
	}
	
	function Title($pid){
		$find=M("dir")->where("guid='".$pid."'")->find();
		if(!$find || ($find['isadd']=='1' && session('uid')!='1')){
			return '';
		}
		if($find['pid']!='0'){
			$this->Title($find['pid']);
		}
		$this->Titlec.= '<a href="__APP__/dir/index/pid/'.$find['guid'].'" class="current">'.$find['title'].'</a>';
		return $this->Titlec;
	}
		
}
?>