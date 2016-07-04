<?php
// 本文档自动生成，仅供测试运行
class HotAction extends Action
{
	//空操作
	public function _empty(){
		redirect(session('url')); 
    }
    
    /**
    * 显示模版列表
    */
    public function index()
    {
		$this->group=A('Impot')->IssetGroup($_GET['groupid']);
		
		$p=(isset($_GET["p"]))?$_GET["p"]-1:0;
		$page=20;
		$start=$p*$page;
		
		$this->lists=M("pro")->where('groupid="'.$this->group['guid'].'" and hot > 0')->order("hot desc")->limit($start.",".$page)->select();  
		$count=M("pro")->where('groupid="'.$this->group['guid'].'" and hot > 0')->count();


		import("@.ORG.Page");
		$Page=new Page($count,$page);
		$this->page=$Page->show();
		session('url',$_SERVER['REQUEST_URI']);
		$this->display(A('Impot')->model($this->group['guid']).'/Hot/index');
    }

    public function daochu()
    {
    	$file=time().'.csv';
    	$select=M("pro")->where('groupid="'.$_GET['groupid'].'" and hot > 0')->order("hot desc")->select();

    	$csv=iconv("UTF-8","GBK","产品名称,类型,材质,厚度,板材,锁具,拉手,尺寸,系列,浏览量\n");
		foreach($select as $value){
			$style=M('style')->where('guid="'.$value['styleid'].'"')->find();
            $function=M('function')->where('guid="'.$value['functionid'].'"')->find();
            $spacestyle=M('spacestyle')->where('guid="'.$value['spacestyleid'].'"')->find();

			$csv.=iconv("UTF-8","GBK",$value['title'].",".$style['title'].",".$function['title'].",".$spacestyle['title'].",".$value['bancai'].",".$value['suoju'].",".$value['lashou'].",".$value['chicun'].",".$value['xilie'].",".$value['hot']."\n");
		}
		$dir='csv/';
		if(!file_exists($dir)) {
			mkdir($dir);
		}
		$open=fopen($dir.$file,'w+');
		$write=fwrite($open,$csv);
		fclose($open);
		
		header("Content-Type:text/plain");   
		header("Accept-Ranges:bytes"); 
		header('Content-Disposition: attachment; filename="'.$file.'"');   //下载文件名称
		readfile($dir.$file);  
    }
}
?>