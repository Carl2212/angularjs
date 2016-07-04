<?php
// 本文档自动生成，仅供测试运行
class DiyimgtypeAction extends Action
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
    	$this->diyimg=M('diyimg')->find($_GET['diyimgid']);
		if(!$this->diyimg)A('Impot')->error('换装图不存在');
		$this->focus=M('focus')->find($this->diyimg['focusid']);
		if(!$this->focus)A('Impot')->error('区域不存在');
		$this->diy=M('diy')->find($this->focus['diyid']);
		if(!$this->diy)A('Impot')->error('空间不存在');
		$this->group=A('Impot')->IssetGroup($this->diy['groupid']);
		$this->lists=M("diyimgtype")->where('diyimgid="'.$this->diyimg['guid'].'"')->order("sort,time desc")->select();  
		session('url',$_SERVER['REQUEST_URI']);
		$this->display(A('Impot')->model($this->group['guid']).'/Diyimgtype/index');
    }
	
	
	/**
    * 排序
    */
	public function sort(){
		foreach($_POST["sort"] as $key=>$value) {
			$diyimgtype = M('diyimgtype')->find($key);
			A('Impot')->IssetGroup($diyimgtype['groupid']);
			M("diyimgtype")->save(array("sort"=>$value,'guid'=>$key));
		}
		A('Impot')->error('排序成功');
    }
	
	public function statusshow(){
		foreach($_POST["select"] as $value) {
			$diyimgtype = M('diyimgtype')->find($value);
			A('Impot')->IssetGroup($diyimgtype['groupid']);
			M("diyimgtype")->save(array('status'=>'0','guid'=>$value));
		}
		A('Impot')->error("显示成功");
    }

    public function statushidden(){
		foreach($_POST["select"] as $value) {
			$diyimgtype = M('diyimgtype')->find($value);
			A('Impot')->IssetGroup($diyimgtype['groupid']);
			M("diyimgtype")->save(array('status'=>'1','guid'=>$value));
		}
		A('Impot')->error("隐藏成功");
    }

	/**
    * 显示添加内容模版
    */
    public function add()
    {
		$this->diyimg=M('diyimg')->find($_GET['diyimgid']);
		if(!$this->diyimg)A('Impot')->error('换装图不存在');
		$this->focus=M('focus')->find($this->diyimg['focusid']);
		if(!$this->focus)A('Impot')->error('区域不存在');
		$this->diy=M('diy')->find($this->focus['diyid']);
		if(!$this->diy)A('Impot')->error('空间不存在');
		$this->group=A('Impot')->IssetGroup($this->diy['groupid']);
		$this->display(A('Impot')->model($this->group['guid']).'/Diyimgtype/add');
    }
	
	/**
    * 显示修改内容模版
    */
    public function edit()
    {
    	$this->diyimgtype=M('diyimgtype')->find($_GET['guid']);
		if(!$this->diyimgtype)A('Impot')->error('关联产品不存在');
		$this->diyimg=M('diyimg')->find($this->diyimgtype['diyimgid']);
		if(!$this->diyimg)A('Impot')->error('换装图不存在');
		$this->focus=M('focus')->find($this->diyimg['focusid']);
		if(!$this->focus)A('Impot')->error('区域不存在');
		$this->diy=M('diy')->find($this->focus['diyid']);
		if(!$this->diy)A('Impot')->error('空间不存在');
		$this->group=A('Impot')->IssetGroup($this->diy['groupid']);
		$this->display(A('Impot')->model($this->group['guid']).'/Diyimgtype/edit');
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
		M("diyimgtype")->add($_POST);
		A('Impot')->error('添加成功');
	}
	
	
	/**
	* 提交修改内容处理
    */
	public function submit_edit(){
		$diyimgtype=M("diyimgtype")->find($_POST["guid"]);
		if(!$diyimgtype)A('Impot')->error('换装图不存在');
		A('Impot')->IssetGroup($diyimgtype['groupid']);
		
		if($diyimgtype['oneimg']!=$_POST["oneimg"]&&$diyimgtype['oneimg']!=''){
			@unlink('../'.$diyimgtype["oneimg"]);
		}
		if($diyimgtype['twoimg']!=$_POST["twoimg"]&&$diyimgtype['twoimg']!=''){
			@unlink('../'.$diyimgtype["twoimg"]);
		}
		import("@.ORG.UnsetPost");
		new UnsetPost(array('title','size','oneimg','twoimg','guid'));
		M("diyimgtype")->save($_POST);
		A('Impot')->error('修改成功');
	}
	
	
	/**
	* 删除内容
    */
	public function delete(){
		foreach($_POST["select"] as $value) {
			$diyimgtype=M("diyimgtype")->find($value);
			A('Impot')->IssetGroup($diyimgtype['groupid']);
			if($diyimgtype['oneimg']!=''){
				@unlink('../'.$diyimgtype["oneimg"]);
			}
			if($diyimgtype['twoimg']!=''){
				@unlink('../'.$diyimgtype["twoimg"]);
			}
			$this->deletediyimgpro($value);
			M("diyimgtype")->delete($value);
		}
		A('Impot')->error('删除成功');
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