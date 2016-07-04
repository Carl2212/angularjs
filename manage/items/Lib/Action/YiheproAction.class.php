<?php
// 本文档自动生成，仅供测试运行
class YiheproAction extends Action
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
		$this->prodir = M('prodir')->find($_GET['pid']);
		if(!$this->prodir)A('Impot')->error('参数错误');	
		$this->group=A('Impot')->IssetGroup($this->prodir['groupid']);
		import("@.ORG.Prodir");
		$new=new Prodir();
		$this->Title=$new->Title($this->prodir['pid']);
		$this->prolist=$new->option($this->group['guid'],'0','0',$this->prodir['guid']);
		
		$p=(isset($_GET["p"]))?$_GET["p"]-1:0;
		$page=20;
		$start=$p*$page;
		
		if (isset($_GET['styleid'])) {
			$this->styleid = $_GET['styleid'];
		}else{
			$this->styleid = '0';
		}
		if (isset($_GET['functionid'])) {
			$this->functionid = $_GET['functionid'];
		}else{
			$this->functionid = '0';
		}
		if (isset($_GET['spacestyleid'])) {
			$this->spacestyleid = $_GET['spacestyleid'];
		}else{
			$this->spacestyleid = '0';
		}

		if ($this->styleid=='0' && $this->spacestyleid == '0' && $this->functionid == '0') {
			$this->lists=M("pro")->where('groupid="'.$this->group['guid'].'" and pid="'.$_GET['pid'].'"')->order("sort,time desc")->limit($start.",".$page)->select();  
			$count=M("pro")->where('groupid="'.$this->group['guid'].'" and pid="'.$_GET['pid'].'"')->count();
		}else if ($this->styleid=='0' && $this->spacestyleid == '0' && $this->functionid != '0') {
			$this->lists=M("pro")->where('groupid="'.$this->group['guid'].'" and functionid="'.$this->functionid.'" and pid="'.$_GET['pid'].'"')->order("sort,time desc")->limit($start.",".$page)->select();  
			$count=M("pro")->where('groupid="'.$this->group['guid'].'" and functionid="'.$this->functionid.'" and pid="'.$_GET['pid'].'"')->count();
		}else if ($this->styleid!='0' && $this->spacestyleid == '0' && $this->functionid == '0') {
			$this->lists=M("pro")->where('groupid="'.$this->group['guid'].'" and styleid="'.$this->styleid.'" and pid="'.$_GET['pid'].'"')->order("sort,time desc")->limit($start.",".$page)->select();  
			$count=M("pro")->where('groupid="'.$this->group['guid'].'" and styleid="'.$this->styleid.'" and pid="'.$_GET['pid'].'"')->count();
		}else if ($this->styleid=='0' && $this->spacestyleid != '0' && $this->functionid == '0') {
			$this->lists=M("pro")->where('groupid="'.$this->group['guid'].'" and spacestyleid="'.$this->spacestyleid.'" and pid="'.$_GET['pid'].'"')->order("sort,time desc")->limit($start.",".$page)->select();  
			$count=M("pro")->where('groupid="'.$this->group['guid'].'" and spacestyleid="'.$this->spacestyleid.'" and pid="'.$_GET['pid'].'"')->count();
		}else if ($this->styleid!='0' && $this->spacestyleid != '0' && $this->functionid == '0') {
			$this->lists=M("pro")->where('groupid="'.$this->group['guid'].'" and styleid="'.$this->styleid.'" and spacestyleid="'.$this->spacestyleid.'" and pid="'.$_GET['pid'].'"')->order("sort,time desc")->limit($start.",".$page)->select();  
			$count=M("pro")->where('groupid="'.$this->group['guid'].'" and styleid="'.$this->styleid.'" and spacestyleid="'.$this->spacestyleid.'" and pid="'.$_GET['pid'].'"')->count();
		}else if ($this->styleid!='0' && $this->spacestyleid == '0' && $this->functionid != '0') {
			$this->lists=M("pro")->where('groupid="'.$this->group['guid'].'" and styleid="'.$this->styleid.'" and functionid="'.$this->functionid.'" and pid="'.$_GET['pid'].'"')->order("sort,time desc")->limit($start.",".$page)->select();  
			$count=M("pro")->where('groupid="'.$this->group['guid'].'" and styleid="'.$this->styleid.'" and functionid="'.$this->functionid.'" and pid="'.$_GET['pid'].'"')->count();
		}else if ($this->styleid=='0' && $this->spacestyleid != '0' && $this->functionid != '0') {
			$this->lists=M("pro")->where('groupid="'.$this->group['guid'].'" and spacestyleid="'.$this->spacestyleid.'" and functionid="'.$this->functionid.'" and pid="'.$_GET['pid'].'"')->order("sort,time desc")->limit($start.",".$page)->select();  
			$count=M("pro")->where('groupid="'.$this->group['guid'].'" and spacestyleid="'.$this->spacestyleid.'" and functionid="'.$this->functionid.'" and pid="'.$_GET['pid'].'"')->count();
		}else{
			$this->lists=M("pro")->where('groupid="'.$this->group['guid'].'" and styleid="'.$this->styleid.'" and spacestyleid="'.$this->spacestyleid.'" and functionid="'.$this->functionid.'" and pid="'.$_GET['pid'].'"')->order("sort,time desc")->limit($start.",".$page)->select();  
			$count=M("pro")->where('groupid="'.$this->group['guid'].'" and styleid="'.$this->styleid.'" and spacestyleid="'.$this->spacestyleid.'" and functionid="'.$this->functionid.'" and pid="'.$_GET['pid'].'"')->count();
		}

		import("@.ORG.Page");
		$Page=new Page($count,$page,'pid/'.$_GET['pid']);
		$this->page=$Page->show();
		session('url',$_SERVER['REQUEST_URI']);
		$this->protype=M("protype")->where('groupid="'.$this->group['guid'].'" and pid="'.$_GET['pid'].'"')->order("sort,time desc")->select();
		$this->display(A('Impot')->model($this->group['guid']).'/Yihepro/index');
    }
	
	
	/**
    * 排序
    */
	public function sort(){
		foreach($_POST["sort"] as $key=>$value) {
			$pro = M('pro')->find($key);
			A('Impot')->IssetGroup($pro['groupid']);
			M("pro")->save(array("sort"=>$value,'guid'=>$key));
		}
		A('Impot')->error('排序成功');
    }
	
	public function statusshow(){
		foreach($_POST["select"] as $value) {
			$pro = M('pro')->find($value);
			A('Impot')->IssetGroup($pro['groupid']);
			M("pro")->save(array('status'=>'0','guid'=>$value));
		}
		A('Impot')->error("显示成功");
    }

    public function statushidden(){
		foreach($_POST["select"] as $value) {
			$pro = M('pro')->find($value);
			A('Impot')->IssetGroup($pro['groupid']);
			M("pro")->save(array('status'=>'1','guid'=>$value));
		}
		A('Impot')->error("隐藏成功");
    }
	/**
    * 移动
    */
	public function move(){
		$prodir = M('prodir')->find($_POST['pid']);
		if(!$prodir)A('Impot')->error('参数错误');	
		A('Impot')->IssetGroup($prodir['groupid']);
		
		foreach($_POST["select"] as $value) {
			$pro = M('pro')->find($value);
			A('Impot')->IssetGroup($pro['groupid']);
			M("pro")->save(array("pid"=>$_POST['pid'],'guid'=>$value));
		}
		A('Impot')->error('移动成功');
    }
	
	/**
    * 显示添加内容模版
    */
    public function add()
    {
		$this->prodir = M('prodir')->find($_GET['pid']);
		if(!$this->prodir)A('Impot')->error('参数错误');
		$this->group=A('Impot')->IssetGroup($this->prodir['groupid']);
		import("@.ORG.Prodir");
		$new=new Prodir();
		$this->Title=$new->Title($this->prodir['pid']);
		$this->protype=M("protype")->where('groupid="'.$this->group['guid'].'" and pid="'.$_GET['pid'].'"')->order("sort,time desc")->select();
		$this->display(A('Impot')->model($this->group['guid']).'/Yihepro/add');
    }
	
	/**
    * 显示修改内容模版
    */
    public function edit()
    {
		$this->pro=M("pro")->find($_GET['guid']);
		if(!$this->pro)A('Impot')->error('参数错误');
		$this->prodir=M("prodir")->find($this->pro['pid']);
		if(!$this->prodir)A('Impot')->error('参数错误');
		$this->group=A('Impot')->IssetGroup($this->prodir['groupid']);
		import("@.ORG.Prodir");
		$new=new Prodir();
		$this->Title=$new->Title($this->prodir["pid"]);
		$this->protype=M("protype")->where('groupid="'.$this->group['guid'].'" and pid="'.$this->pro['pid'].'"')->order("sort,time desc")->select();
		$this->display(A('Impot')->model($this->group['guid']).'/Yihepro/edit');
    }	
	
	/**
	* 提交添加内容处理
    */
	public function submit_add(){
		$prodir=M("prodir")->find($_POST['pid']);
		if(!$prodir)A('Impot')->error('参数错误');
		A('Impot')->IssetGroup($prodir['groupid']);
		import("@.ORG.UnsetPost");
		new UnsetPost(array('title','bancai','chicun','suoju','lashou','xilie','pid','oneimg','twoimg','threeimg','protypeid','price'));
		$_POST['guid'] = A('Impot')->guid();
		$_POST['time'] = time();
		$_POST['groupid'] = $prodir['groupid'];
		$_POST['uid'] = session('uid');
		M("pro")->add($_POST);
		A('Impot')->error('添加成功');
	}
	
	
	/**
	* 提交修改内容处理
    */
	public function submit_edit(){
		$pro=M("pro")->find($_POST["guid"]);
		if(!$pro)A('Impot')->error('参数错误');
		$prodir=M("prodir")->find($pro["pid"]);
		if(!$prodir)A('Impot')->error('参数错误');
		A('Impot')->IssetGroup($prodir['groupid']);
		if($pro['oneimg']!=$_POST["oneimg"]&&$pro['oneimg']!=''){
			@unlink('../'.$pro["oneimg"]);
		}
		if($pro['twoimg']!=$_POST["twoimg"]&&$pro['twoimg']!=''){
			@unlink('../'.$pro["twoimg"]);
		}
		if($pro['threeimg']!=$_POST["threeimg"]&&$pro['threeimg']!=''){
			@unlink('../'.$pro["threeimg"]);
		}
		import("@.ORG.UnsetPost");
		new UnsetPost(array('title','bancai','chicun','suoju','lashou','xilie','guid','oneimg','twoimg','threeimg','protypeid','price'));
		M("pro")->save($_POST);
		A('Impot')->error('修改成功');
	}
	
	
	/**
	* 删除内容
    */
	public function delete(){
		foreach($_POST["select"] as $value) {
			$pro=M("pro")->find($value);
			A('Impot')->IssetGroup($pro['groupid']);
			if($pro['oneimg']!=$_POST["oneimg"]&&$pro['oneimg']!=''){
				@unlink('../'.$pro["oneimg"]);
			}
			if($pro['twoimg']!=$_POST["twoimg"]&&$pro['twoimg']!=''){
				@unlink('../'.$pro["twoimg"]);
			}
			if($pro['threeimg']!=$_POST["threeimg"]&&$pro['threeimg']!=''){
				@unlink('../'.$pro["threeimg"]);
			}
			M("pro")->delete($value);
			$this->deleteimg($value);
		}
		A('Impot')->error('删除成功');
	}
	
	//删除效果图和配件
	public function deleteimg($pid){
		$list = M('xiaoguo')->where('pid="'.$pid.'"')->select();
		foreach($list as $value) {
			if($value['oneimg']!=''){
				@unlink('../'.$value["oneimg"]);
			}
			if($value['twoimg']!=''){
				@unlink('../'.$value["twoimg"]);
			}
			M("xiaoguo")->delete($value['guid']);
		}
		$list = M('peijian')->where('pid="'.$pid.'"')->select();
		foreach($list as $value) {
			if($value['oneimg']!=''){
				@unlink('../'.$value["oneimg"]);
			}
			if($value['twoimg']!=''){
				@unlink('../'.$value["twoimg"]);
			}
			M("peijian")->delete($value['guid']);
		}
	}
}
?>