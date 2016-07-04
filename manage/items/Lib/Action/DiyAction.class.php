<?php
// 本文档自动生成，仅供测试运行
class DiyAction extends Action
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
			$this->lists=M("diy")->where('groupid="'.$this->group['guid'].'"')->order("sort,time desc")->limit($start.",".$page)->select();  
			$count=M("diy")->where('groupid="'.$this->group['guid'].'"')->count();
		}else if ($this->styleid=='0' && $this->spacestyleid == '0' && $this->functionid != '0') {
			$this->lists=M("diy")->where('groupid="'.$this->group['guid'].'" and functionid="'.$this->functionid.'"')->order("sort,time desc")->limit($start.",".$page)->select();  
			$count=M("diy")->where('groupid="'.$this->group['guid'].'" and functionid="'.$this->functionid.'"')->count();
		}else if ($this->styleid!='0' && $this->spacestyleid == '0' && $this->functionid == '0') {
			$this->lists=M("diy")->where('groupid="'.$this->group['guid'].'" and styleid="'.$this->styleid.'"')->order("sort,time desc")->limit($start.",".$page)->select();  
			$count=M("diy")->where('groupid="'.$this->group['guid'].'" and styleid="'.$this->styleid.'"')->count();
		}else if ($this->styleid=='0' && $this->spacestyleid != '0' && $this->functionid == '0') {
			$this->lists=M("diy")->where('groupid="'.$this->group['guid'].'" and spacestyleid="'.$this->spacestyleid.'"')->order("sort,time desc")->limit($start.",".$page)->select();  
			$count=M("diy")->where('groupid="'.$this->group['guid'].'" and spacestyleid="'.$this->spacestyleid.'"')->count();
		}else if ($this->styleid!='0' && $this->spacestyleid != '0' && $this->functionid == '0') {
			$this->lists=M("diy")->where('groupid="'.$this->group['guid'].'" and styleid="'.$this->styleid.'" and spacestyleid="'.$this->spacestyleid.'"')->order("sort,time desc")->limit($start.",".$page)->select();  
			$count=M("diy")->where('groupid="'.$this->group['guid'].'" and styleid="'.$this->styleid.'" and spacestyleid="'.$this->spacestyleid.'"')->count();
		}else if ($this->styleid!='0' && $this->spacestyleid == '0' && $this->functionid != '0') {
			$this->lists=M("diy")->where('groupid="'.$this->group['guid'].'" and styleid="'.$this->styleid.'" and functionid="'.$this->functionid.'"')->order("sort,time desc")->limit($start.",".$page)->select();  
			$count=M("diy")->where('groupid="'.$this->group['guid'].'" and styleid="'.$this->styleid.'" and functionid="'.$this->functionid.'"')->count();
		}else if ($this->styleid=='0' && $this->spacestyleid != '0' && $this->functionid != '0') {
			$this->lists=M("diy")->where('groupid="'.$this->group['guid'].'" and spacestyleid="'.$this->spacestyleid.'" and functionid="'.$this->functionid.'"')->order("sort,time desc")->limit($start.",".$page)->select();  
			$count=M("diy")->where('groupid="'.$this->group['guid'].'" and spacestyleid="'.$this->spacestyleid.'" and functionid="'.$this->functionid.'"')->count();
		}else{
			$this->lists=M("diy")->where('groupid="'.$this->group['guid'].'" and styleid="'.$this->styleid.'" and spacestyleid="'.$this->spacestyleid.'" and functionid="'.$this->functionid.'"')->order("sort,time desc")->limit($start.",".$page)->select();  
			$count=M("diy")->where('groupid="'.$this->group['guid'].'" and styleid="'.$this->styleid.'" and spacestyleid="'.$this->spacestyleid.'" and functionid="'.$this->functionid.'"')->count();
		}

		$this->style=M("style")->where('groupid="'.$this->group['guid'].'"')->order("sort,time desc")->select();  
		$this->spacestyle=M("spacestyle")->where('groupid="'.$this->group['guid'].'"')->order("sort,time desc")->select();  
		$this->function=M("function")->where('groupid="'.$this->group['guid'].'"')->order("sort,time desc")->select();  

		import("@.ORG.Page");
		$Page=new Page($count,$page,'groupid/'.$_GET['groupid'].'/styleid/'.$this->styleid.'/functionid/'.$this->functionid.'/spacestyleid/'.$this->spacestyleid);
		$this->page=$Page->show();
		session('url',$_SERVER['REQUEST_URI']);
		$this->display(A('Impot')->model($this->group['guid']).'/Diy/index');
    }
	
	
	/**
    * 排序
    */
	public function sort(){
		foreach($_POST["sort"] as $key=>$value) {
			$diy = M('diy')->find($key);
			A('Impot')->IssetGroup($diy['groupid']);
			M("diy")->save(array("sort"=>$value,'guid'=>$key));
		}
		A('Impot')->error('排序成功');
    }
	
	public function statusshow(){
		foreach($_POST["select"] as $value) {
			$diy = M('diy')->find($value);
			A('Impot')->IssetGroup($diy['groupid']);
			M("diy")->save(array('status'=>'0','guid'=>$value));
		}
		A('Impot')->error("显示成功");
    }

    public function statushidden(){
		foreach($_POST["select"] as $value) {
			$diy = M('diy')->find($value);
			A('Impot')->IssetGroup($diy['groupid']);
			M("diy")->save(array('status'=>'1','guid'=>$value));
		}
		A('Impot')->error("隐藏成功");
    }

	/**
    * 显示添加内容模版
    */
    public function add()
    {
		$this->group=A('Impot')->IssetGroup($_GET['groupid']);
		$this->style=M("style")->where('groupid="'.$this->group['guid'].'"')->order("sort,time desc")->select();  
		$this->spacestyle=M("spacestyle")->where('groupid="'.$this->group['guid'].'"')->order("sort,time desc")->select();  
		$this->function=M("function")->where('groupid="'.$this->group['guid'].'"')->order("sort,time desc")->select();  
		$this->display(A('Impot')->model($this->group['guid']).'/Diy/add');
    }
	
	/**
    * 显示修改内容模版
    */
    public function edit()
    {
		$this->diy=M("diy")->find($_GET['guid']);
		if(!$this->diy)A('Impot')->error('参数错误');
		$this->group=A('Impot')->IssetGroup($this->diy['groupid']);
		$this->style=M("style")->where('groupid="'.$this->group['guid'].'"')->order("sort,time desc")->select();  
		$this->spacestyle=M("spacestyle")->where('groupid="'.$this->group['guid'].'"')->order("sort,time desc")->select();  
		$this->function=M("function")->where('groupid="'.$this->group['guid'].'"')->order("sort,time desc")->select();  
		$this->display(A('Impot')->model($this->group['guid']).'/Diy/edit');
    }	
	
	/**
	* 提交添加内容处理
    */
	public function submit_add(){
		A('Impot')->IssetGroup($_POST['groupid']);
		import("@.ORG.UnsetPost");
		new UnsetPost(array('title','oneimg','twoimg','threeimg','fourimg','isdiy','styleid','spacestyleid','functionid','groupid','coordinate'));
		$_POST['guid'] = A('Impot')->guid();
		$_POST['time'] = time();
		$_POST['uid'] = session('uid');
		M("diy")->add($_POST);
		A('Impot')->error('添加成功');
	}
	
	
	/**
	* 提交修改内容处理
    */
	public function submit_edit(){
		$diy=M("diy")->find($_POST["guid"]);
		if(!$diy)A('Impot')->error('参数错误');
		A('Impot')->IssetGroup($diy['groupid']);
		if($diy['oneimg']!=$_POST["oneimg"]&&$diy['oneimg']!=''){
			@unlink('../'.$diy["oneimg"]);
		}
		if($diy['twoimg']!=$_POST["twoimg"]&&$diy['twoimg']!=''){
			@unlink('../'.$diy["twoimg"]);
		}
		if($diy['threeimg']!=$_POST["threeimg"]&&$diy['threeimg']!=''){
			@unlink('../'.$diy["threeimg"]);
		}
		if($diy['fourimg']!=$_POST["fourimg"]&&$diy['fourimg']!=''){
			@unlink('../'.$diy["fourimg"]);
		}
		import("@.ORG.UnsetPost");
		new UnsetPost(array('title','oneimg','twoimg','threeimg','fourimg','isdiy','styleid','spacestyleid','functionid','guid','coordinate'));
		M("diy")->save($_POST);
		A('Impot')->error('修改成功');
	}
	
	
	/**
	* 删除内容
    */
	public function delete(){
		foreach($_POST["select"] as $value) {
			$style=M("diy")->find($value);
			A('Impot')->IssetGroup($style['groupid']);
			if($style['oneimg']!=''){
				@unlink('../'.$style["oneimg"]);
			}
			if($style['twoimg']!=''){
				@unlink('../'.$style["twoimg"]);
			}
			if($style['threeimg']!=''){
				@unlink('../'.$style["threeimg"]);
			}
			if($style['fourimg']!=''){
				@unlink('../'.$style["fourimg"]);
			}
			M("diy")->delete($value);
			$this->deletefocus($value);
		}
		A('Impot')->error('删除成功');
	}
	//删除区域
	public function deletefocus($diyid){
		$list = M('focus')->where('diyid="'.$diyid.'"')->select();
		foreach($list as $value) {
			$this->deletediyimg($value['guid']);
			M("focus")->delete($value['guid']);
		}
	}
	
	//删除换装图
	public function deletediyimg($focusid){
		$list = M('diyimg')->where('focusid="'.$focusid.'"')->select();
		foreach($list as $value) {
			if($value['oneimg']!=''){
				@unlink('../'.$value["oneimg"]);
			}
			if($value['twoimg']!=''){
				@unlink('../'.$value["twoimg"]);
			}
			if($value['threeimg']!=''){
				@unlink('../'.$value["threeimg"]);
			}
			$this->deletediyimgtype($value['guid']);
			M("diyimg")->delete($value['guid']);
		}
	}

	//删除换装图分组
	public function deletediyimgtype($diyimgid){
		$list = M('diyimgtype')->where('diyimgid="'.$diyimgid.'"')->select();
		foreach($list as $value) {

			$this->deletediyimgpro($value['guid']);
			M("diyimgtype")->delete($value['guid']);
		}
	}

	//删除关联产品
	public function deletediyimgpro($diyimgtypeid){
		$list = M('diyimgpro')->where('diyimgtypeid="'.$diyimgtypeid.'"')->select();
		foreach($list as $value) {
			if($value['oneimg']!=''){
				@unlink('../'.$value["oneimg"]);
			}
			if($value['twoimg']!=''){
				@unlink('../'.$value["twoimg"]);
			}
			M("diyimgpro")->delete($value['guid']);
		}
	}
}
?>