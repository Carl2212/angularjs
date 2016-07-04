<?php
// 本文档自动生成，仅供测试运行
class ModelAction extends Action
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
    	A('Impot')->CodeSuperAdmin();
    	$this->group=A('Impot')->IssetGroup($_GET['groupid']);
		$this->lists=M("model")->where('groupid="'.$this->group['guid'].'"')->order("sort,time desc")->select();  
		session('url',$_SERVER['REQUEST_URI']);
		$this->display(A('Impot')->model($this->group['guid']).'/Model/index');
    }
	
	/**
    * 排序
    */
	public function sort(){
		A('Impot')->CodeSuperAdmin();
		foreach($_POST["sort"] as $key=>$value) {
			M("model")->save(array("sort"=>$value,'guid'=>$key));
		}
		A('Impot')->error('排序成功');
    }
	
	/**
    * 显示添加内容模版
    */
    public function add()
    {
    	A('Impot')->CodeSuperAdmin();
    	$this->group=A('Impot')->IssetGroup($_GET['groupid']);
		import("@.ORG.Inc");
		$new=new Inc();
		//显示的模版
		$this->show_model=$this->add_model=$this->edit_model=$new->getfile('Tpl/'.A('Impot')->model($this->group['guid']).'/Content/','');
		$this->display(A('Impot')->model($this->group['guid']).'/Model/add');
    }
	
	/**
    * 显示修改内容模版
    */
    public function edit()
    {
    	A('Impot')->CodeSuperAdmin();
		$this->model=M("model")->find($_GET['id']);  
		if(!$this->model)A('Impot')->error('参数错误');
		$this->group=A('Impot')->IssetGroup($this->model['groupid']);
		import("@.ORG.Inc");
		$new=new Inc();
		$this->show_model=$new->getfile('Tpl/'.A('Impot')->model($this->group['guid']).'/Content/',$this->model['show_model']);
		$this->add_model=$new->getfile('Tpl/'.A('Impot')->model($this->group['guid']).'/Content/',$this->model['add_model']);
		$this->edit_model=$new->getfile('Tpl/'.A('Impot')->model($this->group['guid']).'/Content/',$this->model['edit_model']);
		$this->display(A('Impot')->model($this->group['guid']).'/Model/edit');
    }	
	
	/**
	* 提交添加内容处理
    */
	public function submit_add(){
		A('Impot')->CodeSuperAdmin();
		import("@.ORG.UnsetPost");
		new UnsetPost(array('title','show_model','add_model','edit_model','groupid'));
		$_POST['guid'] = A('Impot')->guid();
		$_POST['uid'] = session('uid');
		$_POST['time'] = time();
		M("model")->add($_POST);
		A('Impot')->error('添加成功');
	}
	
	
	/**
	* 提交修改内容处理
    */
	public function submit_edit(){
		A('Impot')->CodeSuperAdmin();
		$model=M("model")->find($_POST["guid"]);
		if(!$model)A('Impot')->error('参数错误');
		import("@.ORG.UnsetPost");
		new UnsetPost(array('title','show_model','add_model','edit_model','guid'));
		M("model")->save($_POST);
		A('Impot')->error('修改成功');
	}
	
	
	/**
	* 删除内容
    */
	public function delete(){
		A('Impot')->CodeSuperAdmin();
		foreach($_POST["select"] as $value) {
			M("model")->delete($value);
		}
		A('Impot')->error('删除成功');
	}
	
}
?>