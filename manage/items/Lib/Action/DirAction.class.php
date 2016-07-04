<?php
// 本文档自动生成，仅供测试运行
class DirAction extends Action
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
		if(isset($_GET['pid'])){
			$this->dir = M('dir')->find($_GET['pid']);
			if(!$this->dir)A('Impot')->error('参数错误');
			if($this->dir['isadd']!='0' && session('uid')!='1')A('Impot')->error('权限不足');
			$this->pid=$this->dir['guid'];
			$this->groupid=$this->dir['groupid'];
		}else if(isset($_GET['groupid'])){
			A('Impot')->CodeSuperAdmin();
			$this->pid='0';
			$this->groupid=$_GET['groupid'];
		}else{
			A('Impot')->error('参数错误');
		}
		$this->group=A('Impot')->IssetGroup($this->groupid);
		import("@.ORG.Dir");
		$new=new Dir();
		$this->Title=$new->Title($this->pid);		
		if (session('uid')!='1') {
			$this->lists=M("dir")->where('groupid="'.$this->group['guid'].'" and locked="0" and pid="'.$this->pid.'"')->order("sort,time desc")->select();
		}else{
			$this->lists=M("dir")->where('groupid="'.$this->group['guid'].'" and pid="'.$this->pid.'"')->order("sort,time desc")->select();
		}
		session('url',$_SERVER['REQUEST_URI']);
		if ($this->pid == '0' || session('uid')=='1') {
			$this->display(A('Impot')->model($this->group['guid']).'/Dir/index');
		}else{
			$this->display(A('Impot')->model($this->group['guid']).'/Dir/'.str_replace('.html', '', $this->dir['show_model']));
		}
    }
	
	
	/**
    * 排序
    */
	public function sort(){
		foreach($_POST["sort"] as $key=>$value) {
			$dir = M('dir')->find($key);
			A('Impot')->IssetGroup($dir['groupid']);
			if($dir['locked']=='1')A('Impot')->CodeSuperAdmin();
			M("dir")->save(array("sort"=>$value,'guid'=>$key));
		}
		A('Impot')->error('排序成功');
    }
	
	public function statusshow(){
		foreach($_POST["select"] as $value) {
			$dir = M('dir')->find($value);
			A('Impot')->IssetGroup($dir['groupid']);
			M("dir")->save(array('status'=>'0','guid'=>$value));
		}
		A('Impot')->error("显示成功");
    }

    public function statushidden(){
		foreach($_POST["select"] as $value) {
			$dir = M('dir')->find($value);
			A('Impot')->IssetGroup($dir['groupid']);
			M("dir")->save(array('status'=>'1','guid'=>$value));
		}
		A('Impot')->error("隐藏成功");
    }

	/**
    * 显示添加内容模版
    */
    public function add()
    {
		if(isset($_GET['pid'])){
			$this->dir = M('dir')->find($_GET['pid']);
			if(!$this->dir)A('Impot')->error('参数错误');
			if($this->dir['isadd']!='0' && session('uid')!='1')A('Impot')->error('权限不足');
			$this->pid=$this->dir['guid'];
			$this->groupid=$this->dir['groupid'];
		}else if(isset($_GET['groupid'])){
			A('Impot')->CodeSuperAdmin();
			$this->pid='0';
			$this->groupid=$_GET['groupid'];
		}else{
			A('Impot')->error('参数错误');
		}
		$this->group=A('Impot')->IssetGroup($this->groupid);

		import("@.ORG.Inc");
		$new=new Inc();
		//显示的模版
		$this->show_model=$new->getfile('Tpl/'.A('Impot')->model($this->group['guid']).'/Dir/','');
		//添加的模版
		$this->add_model=$new->getfile('Tpl/'.A('Impot')->model($this->group['guid']).'/Dir/','');
		//修改的模版
		$this->edit_model=$new->getfile('Tpl/'.A('Impot')->model($this->group['guid']).'/Dir/','');
				
		//绑定内容模版
		$this->model=M("model")->where('groupid="'.$this->group['guid'].'"')->order('sort,time desc')->select();
		import("@.ORG.Dir");
		$new=new Dir();
		$this->dirlist=$new->option($this->groupid,'0',$this->pid,'0');
		$this->Title=$new->Title($this->pid);

		if ($this->pid == '0' || session('uid')=='1') {
			$this->display(A('Impot')->model($this->group['guid']).'/Dir/add');
		}else{
			$this->display(A('Impot')->model($this->group['guid']).'/Dir/'.str_replace('.html', '', $this->dir['add_model']));
		}
    }
	
	/**
    * 显示修改内容模版
    */
    public function edit()
    {
		$this->dir=M("dir")->find($_GET['guid']);
		if(!$this->dir)A('Impot')->error('参数错误');
		$this->group=A('Impot')->IssetGroup($this->dir['groupid']);
		if ($this->dir['locked']=='1')A('Impot')->CodeSuperAdmin();
		
		import("@.ORG.Inc");
		$new=new Inc();
		//显示的模版
		$this->show_model=$new->getfile('Tpl/'.A('Impot')->model($this->group['guid']).'/Dir/',$this->dir['show_model']);
		//添加的模版
		$this->add_model=$new->getfile('Tpl/'.A('Impot')->model($this->group['guid']).'/Dir/',$this->dir['add_model']);
		//修改的模版
		$this->edit_model=$new->getfile('Tpl/'.A('Impot')->model($this->group['guid']).'/Dir/',$this->dir['edit_model']);
				
		//绑定内容模版
		$this->model=M("model")->where('groupid="'.$this->group['guid'].'"')->order('sort,time desc')->select();
		import("@.ORG.Dir");
		$new=new Dir();
		$this->dirlist=$new->option($this->group['guid'],'0','0',$this->dir["guid"]);
		$this->Title=$new->Title($this->dir['guid']);

		if ($this->dir['guid'] == '0' || session('uid')=='1') {
			$this->display(A('Impot')->model($this->group['guid']).'/Dir/edit');
		}else{
			$this->display(A('Impot')->model($this->group['guid']).'/Dir/'.str_replace('.html', '', $this->dir['edit_model']));
		}
    }	
	
	/**
	* 提交添加内容处理
    */
	public function submit_add(){
		if ($_POST['pid']=='0') {
			A('Impot')->CodeSuperAdmin();
		}else{
			$dir=M("dir")->find($_POST['pid']);
			if(!$dir)A('Impot')->error('参数错误');
			if ($dir['isadd']=='1')A('Impot')->CodeSuperAdmin();
		}
	    A('Impot')->IssetGroup($_POST['groupid']);
		import("@.ORG.UnsetPost");
		new UnsetPost(array('title','summary','content','pid','show_model','add_model','edit_model','mid','locked','isadd','isaddc','twoimg','oneimg','groupid'));
		$_POST['guid'] = A('Impot')->guid();
		if (session('uid')!='1') {
			unset($_POST["locked"]);
			unset($_POST["isadd"]);
		}
		$_POST['time'] = time();
		$_POST['uid'] = session('uid');
		M("dir")->add($_POST);
		A('Impot')->error('添加成功');
	}
	
	
	/**
	* 提交修改内容处理
    */
	public function submit_edit(){
		$dir=M("dir")->find($_POST["guid"]);
		if(!$dir)A('Impot')->error('参数错误');
		A('Impot')->IssetGroup($dir['groupid']);
		if ($_POST['pid']=='0' || $dir['locked']=='1') {
			A('Impot')->CodeSuperAdmin();
		}
		if($dir['oneimg']!=$_POST["oneimg"]&&$dir['oneimg']!=''){
			@unlink('../'.$dir["oneimg"]);
		}
		if($dir['twoimg']!=$_POST["twoimg"]&&$dir['twoimg']!=''){
			@unlink('../'.$dir["twoimg"]);
		}
		//判断下级
		if($_POST["pid"]==$_POST["guid"] || session('uid')!='1'){
			unset($_POST["pid"]);
		}
		import("@.ORG.UnsetPost");
		new UnsetPost(array('title','summary','content','pid','show_model','add_model','edit_model','mid','locked','isadd','isaddc','twoimg','oneimg','guid'));
		if (session('uid')!='1') {
			unset($_POST["locked"]);
			unset($_POST["isadd"]);
		}
		M("dir")->save($_POST);
		A('Impot')->error('修改成功');
	}
	
	
	/**
	* 删除内容
    */
	public function delete(){
		foreach($_POST["select"] as $value) {
			$dir = M('dir')->find($value);
			A('Impot')->IssetGroup($dir['groupid']);
			if($dir['locked']=='1')A('Impot')->CodeSuperAdmin();
			$this->deleteTotal($value);
		}
		A('Impot')->error('删除成功');
	}
	
	public function deleteTotal($guid){
		$list = M('dir')->where('pid="'.$guid.'"')->select();
		foreach($list as $value){
			$count = M('dir')->where('pid="'.$value['guid'].'"')->count();
			if($count > 0){
				$this->deleteTotal($value['guid']);
			}else{
				if($value['oneimg']!=''){
					@unlink('../'.$value["oneimg"]);
				}
				if($value['twoimg']!=''){
					@unlink('../'.$value["twoimg"]);
				}
				M("dir")->delete($value['guid']);
				$this->deletecontent($value['guid']);
			}
		}
		$dir = M('dir')->find($guid);
		if($dir['oneimg']!=''){
			@unlink('../'.$dir["oneimg"]);
		}
		if($dir['twoimg']!=''){
			@unlink('../'.$dir["twoimg"]);
		}
		M("dir")->delete($guid);
		$this->deletecontent($guid);
	}

	/**
    * 删除内容
    */
	public function deletecontent($guid){
		$list = M('content')->where('pid="'.$guid.'"')->select();
		foreach($list as $value){
			if($value['oneimg']!=''){
				@unlink('../'.$value["oneimg"]);
			}
			if($value['twoimg']!=''){
				@unlink('../'.$value["twoimg"]);
			}
			if($value['threeimg']!=''){
				@unlink('../'.$value["threeimg"]);
			}
			if($value['file']!=''){
				@unlink('../'.$value["file"]);
			}
			$additional = M('additional')->where('pid="'.$value['guid'].'"')->select();
			foreach ($additional as $valuec) {
				M('additional')->delete($valuec['guid']);
				@unlink('../'.$valuec["oneimg"]);
			}
			M("content")->delete($value['guid']);
		}
    }
}
?>