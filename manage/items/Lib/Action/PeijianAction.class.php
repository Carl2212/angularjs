<?php
// 本文档自动生成，仅供测试运行
class PeijianAction extends Action
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
		$this->pro=M('pro')->find($_GET['pid']);
		if(!$this->pro)A('Impot')->error('产品不存在');
		$this->group=A('Impot')->IssetGroup($this->pro['groupid']);		
		$this->lists=M("peijian")->where('pid="'.$this->pro['guid'].'"')->order("sort,time desc")->select();  
		session('url',$_SERVER['REQUEST_URI']);
		$this->display(A('Impot')->model($this->group['guid']).'/Peijian/index');
    }
	
	
	/**
    * 排序
    */
	public function sort(){
		foreach($_POST["sort"] as $key=>$value) {
			$peijian = M('peijian')->find($key);
			A('Impot')->IssetGroup($peijian['groupid']);
			M("peijian")->save(array("sort"=>$value,'guid'=>$key));
		}
		A('Impot')->error('排序成功');
    }
    
	public function statusshow(){
		foreach($_POST["select"] as $value) {
			$peijian = M('peijian')->find($value);
			A('Impot')->IssetGroup($peijian['groupid']);
			M("peijian")->save(array('status'=>'0','guid'=>$value));
		}
		A('Impot')->error("显示成功");
    }

    public function statushidden(){
		foreach($_POST["select"] as $value) {
			$peijian = M('peijian')->find($value);
			A('Impot')->IssetGroup($peijian['groupid']);
			M("peijian")->save(array('status'=>'1','guid'=>$value));
		}
		A('Impot')->error("隐藏成功");
    }
	/**
    * 显示添加内容模版
    */
    public function add()
    {
		$this->pro=M('pro')->find($_GET['pid']);
		if(!$this->pro)A('Impot')->error('产品不存在');
		$this->group=A('Impot')->IssetGroup($this->pro['groupid']);
		$this->display(A('Impot')->model($this->group['guid']).'/Peijian/add');
    }
	
	/**
    * 显示修改内容模版
    */
    public function edit()
    {
		$this->peijian=M('peijian')->find($_GET['guid']);
		if(!$this->peijian)A('Impot')->error('产品不存在');
		$this->pro=M('pro')->find($this->peijian['pid']);
		if(!$this->pro)A('Impot')->error('产品不存在');
		$this->group=A('Impot')->IssetGroup($this->pro['groupid']);
		$this->display(A('Impot')->model($this->group['guid']).'/Peijian/edit');
    }	
	
	/**
	* 提交添加内容处理
    */
	public function submit_add(){
		$pro=M('pro')->find($_POST['pid']);
		if(!$pro)A('Impot')->error('产品不存在');
		A('Impot')->IssetGroup($pro['groupid']);
		import("@.ORG.UnsetPost");
		new UnsetPost(array('title','entitle','size','oneimg','twoimg','pid'));
		$_POST['guid'] = A('Impot')->guid();
		$_POST['time'] = time();
		$_POST['groupid'] = $pro['groupid'];
		$_POST['uid'] = session('uid');
		M("peijian")->add($_POST);
		A('Impot')->error('添加成功');
	}
	
	
	/**
	* 提交修改内容处理
    */
	public function submit_edit(){
		$peijian=M("peijian")->find($_POST["guid"]);
		A('Impot')->IssetGroup($peijian['groupid']);
		
		if($peijian['oneimg']!=$_POST["oneimg"]&&$peijian['oneimg']!=''){
			@unlink('../'.$peijian["oneimg"]);
		}
		if($peijian['twoimg']!=$_POST["twoimg"]&&$peijian['twoimg']!=''){
			@unlink('../'.$peijian["twoimg"]);
		}
		import("@.ORG.UnsetPost");
		new UnsetPost(array('title','entitle','size','oneimg','twoimg','guid'));
		M("peijian")->save($_POST);
		A('Impot')->error('修改成功');
	}
	
	
	/**
	* 删除内容
    */
	public function delete(){
		foreach($_POST["select"] as $value) {
			$peijian=M("peijian")->find($value);
			A('Impot')->IssetGroup($peijian['groupid']);
			if($peijian['oneimg']!=''){
				@unlink('../'.$peijian["oneimg"]);
			}
			if($peijian['twoimg']!=''){
				@unlink('../'.$peijian["twoimg"]);
			}
			M("peijian")->delete($value);
		}
		A('Impot')->error('删除成功');
	}
}
?>