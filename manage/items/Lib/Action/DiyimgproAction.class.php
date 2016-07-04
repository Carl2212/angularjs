<?php
// 本文档自动生成，仅供测试运行
class DiyimgproAction extends Action
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
    	$this->diyimgtype=M('diyimgtype')->find($_GET['diyimgtypeid']);
		if(!$this->diyimgtype)A('Impot')->error('分组不存在');
    	$this->diyimg=M('diyimg')->find($_GET['diyimgid']);
		if(!$this->diyimg)A('Impot')->error('换装图不存在');
		$this->focus=M('focus')->find($this->diyimg['focusid']);
		if(!$this->focus)A('Impot')->error('区域不存在');
		$this->diy=M('diy')->find($this->focus['diyid']);
		if(!$this->diy)A('Impot')->error('空间不存在');
		$this->group=A('Impot')->IssetGroup($this->diy['groupid']);
		$this->lists=M("diyimgpro")->where('diyimgid="'.$this->diyimg['guid'].'" and diyimgtypeid="'.$this->diyimgtype['guid'].'"')->order("sort,time desc")->select();  
		session('url',$_SERVER['REQUEST_URI']);
		$this->display(A('Impot')->model($this->group['guid']).'/Diyimgpro/index');
    }
	
	
	/**
    * 排序
    */
	public function sort(){
		foreach($_POST["sort"] as $key=>$value) {
			$diyimgpro = M('diyimgpro')->find($key);
			A('Impot')->IssetGroup($diyimgpro['groupid']);
			M("diyimgpro")->save(array("sort"=>$value,'guid'=>$key));
		}
		A('Impot')->error('排序成功');
    }
	
	public function statusshow(){
		foreach($_POST["select"] as $value) {
			$diyimgpro = M('diyimgpro')->find($value);
			A('Impot')->IssetGroup($diyimgpro['groupid']);
			M("diyimgpro")->save(array('status'=>'0','guid'=>$value));
		}
		A('Impot')->error("显示成功");
    }

    public function statushidden(){
		foreach($_POST["select"] as $value) {
			$diyimgpro = M('diyimgpro')->find($value);
			A('Impot')->IssetGroup($diyimgpro['groupid']);
			M("diyimgpro")->save(array('status'=>'1','guid'=>$value));
		}
		A('Impot')->error("隐藏成功");
    }

	/**
    * 显示添加内容模版
    */
    public function add()
    {
    	$this->diyimgtype=M('diyimgtype')->find($_GET['diyimgtypeid']);
		if(!$this->diyimgtype)A('Impot')->error('分组不存在');
		$this->diyimg=M('diyimg')->find($_GET['diyimgid']);
		if(!$this->diyimg)A('Impot')->error('换装图不存在');
		$this->focus=M('focus')->find($this->diyimg['focusid']);
		if(!$this->focus)A('Impot')->error('区域不存在');
		$this->diy=M('diy')->find($this->focus['diyid']);
		if(!$this->diy)A('Impot')->error('空间不存在');
		$this->group=A('Impot')->IssetGroup($this->diy['groupid']);
		$this->display(A('Impot')->model($this->group['guid']).'/Diyimgpro/add');
    }
	
	/**
    * 显示修改内容模版
    */
    public function edit()
    {
    	$this->diyimgpro=M('diyimgpro')->find($_GET['guid']);
		if(!$this->diyimgpro)A('Impot')->error('关联产品不存在');
		$this->diyimgtype=M('diyimgtype')->find($this->diyimgpro['diyimgtypeid']);
		if(!$this->diyimgtype)A('Impot')->error('分组不存在');
		$this->diyimg=M('diyimg')->find($this->diyimgpro['diyimgid']);
		if(!$this->diyimg)A('Impot')->error('换装图不存在');
		$this->focus=M('focus')->find($this->diyimg['focusid']);
		if(!$this->focus)A('Impot')->error('区域不存在');
		$this->diy=M('diy')->find($this->focus['diyid']);
		if(!$this->diy)A('Impot')->error('空间不存在');
		$this->group=A('Impot')->IssetGroup($this->diy['groupid']);
		$this->display(A('Impot')->model($this->group['guid']).'/Diyimgpro/edit');
    }	
	
	/**
	* 提交添加内容处理
    */
	public function submit_add(){
		$diyimg=M('diyimg')->find($_POST['diyimgid']);
		if(!$diyimg)A('Impot')->error('换装图不存在');
		$focus=M('focus')->find($diyimg['focusid']);
		if(!$focus)A('Impot')->error('区域不存在');
		$diy=M('diy')->find($focus['diyid']);
		if(!$diy)A('Impot')->error('空间不存在');
		A('Impot')->IssetGroup($diy['groupid']);
		
		import("@.ORG.UnsetPost");
		new UnsetPost(array('title','size','oneimg','twoimg','diyimgid','diyimgtypeid'));
		$_POST['guid'] = A('Impot')->guid();
		$_POST['time'] = time();
		$_POST['groupid'] = $diy['groupid'];
		$_POST['uid'] = session('uid');
		M("diyimgpro")->add($_POST);
		A('Impot')->error('添加成功');
	}
	
	
	/**
	* 提交修改内容处理
    */
	public function submit_edit(){
		$diyimgpro=M("diyimgpro")->find($_POST["guid"]);
		if(!$diyimgpro)A('Impot')->error('换装图不存在');
		A('Impot')->IssetGroup($diyimgpro['groupid']);
		
		if($diyimgpro['oneimg']!=$_POST["oneimg"]&&$diyimgpro['oneimg']!=''){
			@unlink('../'.$diyimgpro["oneimg"]);
		}
		if($diyimgpro['twoimg']!=$_POST["twoimg"]&&$diyimgpro['twoimg']!=''){
			@unlink('../'.$diyimgpro["twoimg"]);
		}
		import("@.ORG.UnsetPost");
		new UnsetPost(array('title','size','oneimg','twoimg','guid'));
		M("diyimgpro")->save($_POST);
		A('Impot')->error('修改成功');
	}
	
	
	/**
	* 删除内容
    */
	public function delete(){
		foreach($_POST["select"] as $value) {
			$diyimgpro=M("diyimgpro")->find($value);
			A('Impot')->IssetGroup($diyimgpro['groupid']);
			if($diyimgpro['oneimg']!=''){
				@unlink('../'.$diyimgpro["oneimg"]);
			}
			if($diyimgpro['twoimg']!=''){
				@unlink('../'.$diyimgpro["twoimg"]);
			}
			M("diyimgpro")->delete($value);
		}
		A('Impot')->error('删除成功');
	}
}
?>