<?php
class UnsetPost extends Think
{
	//过滤非范围字段
	function __construct($array){
		foreach($_POST as $key=>$value){
			if(!in_array($key,$array)){
				unset($_POST[$key]);
			}
		}
	}
	
}
?>