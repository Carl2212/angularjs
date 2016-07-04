<?php
// 本文档自动生成，仅供测试运行
class ProtypeAction extends Action
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
		$this->lists=M("protype")->where('groupid="'.$this->group['guid'].'"')->order("sort,time desc")->select();
		session('url',$_SERVER['REQUEST_URI']);
		$this->display(A('Impot')->model($this->group['guid']).'/Protype/index');
    }
	
	
	/**
    * 排序
    */
	public function sort(){
		foreach($_POST["sort"] as $key=>$value) {
			$protype = M('protype')->find($key);
			A('Impot')->IssetGroup($protype['groupid']);
			M("protype")->save(array("sort"=>$value,'guid'=>$key));
		}
		A('Impot')->error('排序成功');
    }
	
	public function statusshow(){
		foreach($_POST["select"] as $value) {
			$style = M('style')->find($value);
			A('Impot')->IssetGroup($style['groupid']);
			M("style")->save(array('status'=>'0','guid'=>$value));
		}
		A('Impot')->error("显示成功");
    }

    public function statushidden(){
		foreach($_POST["select"] as $value) {
			$style = M('style')->find($value);
			A('Impot')->IssetGroup($style['groupid']);
			M("style")->save(array('status'=>'1','guid'=>$value));
		}
		A('Impot')->error("隐藏成功");
    }
	/**
    * 显示添加内容模版
    */
    public function add()
    {

		$this->group=A('Impot')->IssetGroup($_GET['groupid']);
		$this->prodir = M("prodir")->where('groupid="'.$_GET['groupid'].'"')->order("sort,time desc")->select();
//		var_dump($this->prodir);exit;
		$this->display(A('Impot')->model($this->group['guid']).'/Protype/add');
    }
	
	/**
    * 显示修改内容模版
    */
    public function edit()
    {
		$this->protype=M("protype")->find($_GET['guid']);
		if(!$this->protype)A('Impot')->error('参数错误');
		$this->prodir = M("prodir")->where('groupid="'.$this->protype['groupid'].'"')->order("sort,time desc")->select();
		$this->group=A('Impot')->IssetGroup($this->protype['groupid']);
		$this->display(A('Impot')->model($this->group['guid']).'/Protype/edit');
    }	
	
	/**
	* 提交添加内容处理
    */
	public function submit_add(){
		A('Impot')->IssetGroup($_POST['groupid']);
		import("@.ORG.UnsetPost");
		new UnsetPost(array('title','entitle','oneimg','twoimg','groupid',"pid"));
		$_POST['guid'] = A('Impot')->guid();
		$_POST['time'] = time();
		$_POST['uid'] = session('uid');
		M("protype")->add($_POST);
		A('Impot')->error('添加成功');
	}
	
	
	/**
	* 提交修改内容处理
    */
	public function submit_edit(){
		$protype=M("protype")->find($_POST["guid"]);
		if(!$protype)A('Impot')->error('参数错误');
		A('Impot')->IssetGroup($protype['groupid']);
		if($protype['oneimg']!=$_POST["oneimg"]&&$protype['oneimg']!=''){
			@unlink('../'.$protype["oneimg"]);
		}
		if($protype['twoimg']!=$_POST["twoimg"]&&$protype['twoimg']!=''){
			@unlink('../'.$protype["twoimg"]);
		}
		import("@.ORG.UnsetPost");
		new UnsetPost(array('title','entitle','oneimg','twoimg','guid',"pid"));
		M("protype")->save($_POST);
		A('Impot')->error('修改成功');
	}
	
	
	/**
	* 删除内容
    */
	public function delete(){
		foreach($_POST["select"] as $value) {
			$style=M("style")->find($value);
			A('Impot')->IssetGroup($style['groupid']);
			if($style['oneimg']!=''){
				@unlink('../'.$style["oneimg"]);
			}
			if($style['twoimg']!=''){
				@unlink('../'.$style["twoimg"]);
			}
			M("style")->delete($value);
		}
		A('Impot')->error('删除成功');
	}
}
?>