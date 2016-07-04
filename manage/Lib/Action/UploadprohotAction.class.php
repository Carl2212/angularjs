<?php
// 本文档自动生成，仅供测试运行
class UploadprohotAction extends Action
{	
    public function index()
    {
    	$shp = str_replace('\"', '"', $_POST['Array']);
    	$Array = json_decode($shp);
    	for($i = 0; $i < count($Array); $i++){
    		$pro = M('pro')->where('guid="'.$Array[$i][0].'"')->find();
    		if($pro){
    			M('pro')->save(
    				array(
    				'guid'=>$Array[$i][0],
    				'hot'=>($pro['hot']+$Array[$i][1])
    				)
    			);
    		}
    	}
    	die('ok');
    }
}
?>