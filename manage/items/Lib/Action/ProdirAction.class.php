<?php
// 本文档自动生成，仅供测试运行
class ProdirAction extends Action
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
			$this->prodir = M('prodir')->find($_GET['pid']);
			if(!$this->prodir)A('Impot')->error('参数错误');
			$this->pid=$this->prodir['guid'];
			$this->groupid=$this->prodir['groupid'];
		}else if(isset($_GET['groupid'])){
			$this->pid='0';
			$this->groupid=$_GET['groupid'];
		}else{
			A('Impot')->error('参数错误');
		}
		$this->group=A('Impot')->IssetGroup($this->groupid);
		import("@.ORG.Prodir");
		$new=new Prodir();
		$this->Title=$new->Title($this->pid);		
		$this->lists=M("prodir")->where('groupid="'.$this->group['guid'].'" and pid="'.$this->pid.'"')->order("sort,time desc")->select();  

		session('url',$_SERVER['REQUEST_URI']);
		$this->display(A('Impot')->model($this->group['guid']).'/Prodir/index');
    }
	
	
	/**
    * 排序
    */
	public function sort(){
		foreach($_POST["sort"] as $key=>$value) {
			$prodir = M('prodir')->find($key);
			A('Impot')->IssetGroup($prodir['groupid']);
			M("prodir")->save(array("sort"=>$value,'guid'=>$key));
		}
		A('Impot')->error('排序成功');
    }
	
	public function statusshow(){
		foreach($_POST["select"] as $value) {
			$prodir = M('prodir')->find($value);
			A('Impot')->IssetGroup($prodir['groupid']);
			M("prodir")->save(array('status'=>'0','guid'=>$value));
		}
		A('Impot')->error("显示成功");
    }

    public function statushidden(){
		foreach($_POST["select"] as $value) {
			$prodir = M('prodir')->find($value);
			A('Impot')->IssetGroup($prodir['groupid']);
			M("prodir")->save(array('status'=>'1','guid'=>$value));
		}
		A('Impot')->error("隐藏成功");
    }
    
	/**
    * 显示添加内容模版
    */
    public function add()
    {
		if(isset($_GET['pid'])){
			$this->prodir = M('prodir')->find($_GET['pid']);
			if(!$this->prodir)A('Impot')->error('参数错误');
			$this->pid=$this->prodir['guid'];
			$this->groupid=$this->prodir['groupid'];
		}else if(isset($_GET['groupid'])){
			$this->pid='0';
			$this->groupid=$_GET['groupid'];
		}else{
			A('Impot')->error('参数错误');
		}
		import("@.ORG.Prodir");
		$new=new Prodir();
		$this->prolist=$new->option($this->groupid,'0',$this->pid,'0');
		$this->Title=$new->Title($this->pid);
		$this->group=A('Impot')->IssetGroup($this->groupid);
		$this->display(A('Impot')->model($this->group['guid']).'/Prodir/add');
    }
	
	/**
    * 显示修改内容模版
    */
    public function edit()
    {
		$this->prodir=M("prodir")->find($_GET['guid']);
		if(!$this->prodir)A('Impot')->error('参数错误');
		$this->group=A('Impot')->IssetGroup($this->prodir['groupid']);
		import("@.ORG.Prodir");
		$new=new Prodir();
		$this->prolist=$new->option($this->group['guid'],'0','0',$this->prodir["guid"]);
		$this->Title=$new->Title($this->prodir["pid"]);
		$this->display(A('Impot')->model($this->group['guid']).'/Prodir/edit');
    }	
	
	/**
	* 提交添加内容处理
    */
	public function submit_add(){
		if($_POST['pid']!='0')
		if(!M("prodir")->find($_POST['pid']))A('Impot')->error('参数错误');
	    A('Impot')->IssetGroup($_POST['groupid']);
		import("@.ORG.UnsetPost");
		new UnsetPost(array('title','entitle','pid','oneimg','twoimg','groupid'));
		$_POST['guid'] = A('Impot')->guid();
		$_POST['time'] = time();
		$_POST['uid'] = session('uid');
		M("prodir")->add($_POST);
		A('Impot')->error('添加成功');
	}
	
	
	/**
	* 提交修改内容处理
    */
	public function submit_edit(){
		$prodir=M("prodir")->find($_POST["guid"]);
		if(!$prodir)A('Impot')->error('参数错误');
		A('Impot')->IssetGroup($prodir['groupid']);
		if($prodir['oneimg']!=$_POST["oneimg"]&&$prodir['oneimg']!=''){
			@unlink('../'.$prodir["oneimg"]);
		}
		if($prodir['twoimg']!=$_POST["twoimg"]&&$prodir['twoimg']!=''){
			@unlink('../'.$prodir["twoimg"]);
		}
		//判断下级
		if($_POST["pid"]==$_POST["guid"]){
			unset($_POST["pid"]);
		}
		import("@.ORG.UnsetPost");
		new UnsetPost(array('title','entitle','pid','oneimg','twoimg','guid'));
		M("prodir")->save($_POST);
		A('Impot')->error('修改成功');
	}
	
	
	/**
	* 删除内容
    */
	public function delete(){
		foreach($_POST["select"] as $value) {
			$prodir = M('prodir')->find($value);
			A('Impot')->IssetGroup($prodir['groupid']);
			$this->deleteTotal($value);
		}
		A('Impot')->error('删除成功');
	}
	
	public function deleteTotal($guid){
		$list = M('prodir')->where('pid="'.$guid.'"')->select();
		foreach($list as $value){
			$count = M('prodir')->where('pid="'.$value['guid'].'"')->count();
			if($count > 0){
				$this->deleteTotal($value['guid']);
			}else{
				if($value['oneimg']!=''){
					@unlink('../'.$value["oneimg"]);
				}
				if($value['twoimg']!=''){
					@unlink('../'.$value["twoimg"]);
				}
				M("prodir")->delete($value['guid']);
				$this->deletepro($value['guid']);
			}
		}
		$prodir = M('prodir')->find($guid);
		if($prodir['oneimg']!=''){
			@unlink('../'.$prodir["oneimg"]);
		}
		if($prodir['twoimg']!=''){
			@unlink('../'.$prodir["twoimg"]);
		}
		M("prodir")->delete($guid);
		$this->deletepro($guid);
	}

	//删除效果图和配件
	public function deletepro($pid){
		$list = M('pro')->where('pid="'.$pid.'"')->select();
		foreach($list as $value) {
			if($value['oneimg']!=''){
				@unlink('../'.$value["oneimg"]);
			}
			if($value['twoimg']!=''){
				@unlink('../'.$value["twoimg"]);
			}
			M("pro")->delete($value['guid']);
			$this->deleteimg($value['guid']);
		}
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