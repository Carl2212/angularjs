<?php
// 本文档自动生成，仅供测试运行
class FocusAction extends Action
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
		$this->diy=M('diy')->find($_GET['diyid']);
		if(!$this->diy)A('Impot')->error('空间不存在!');
		$this->group=A('Impot')->IssetGroup($this->diy['groupid']);
		$this->lists=M("focus")->where('diyid="'.$this->diy['guid'].'"')->order("sort,time desc")->select();  
		session('url',$_SERVER['REQUEST_URI']);
		$this->display(A('Impot')->model($this->group['guid']).'/Focus/index');
    }
	
	
	/**
    * 排序
    */
	public function sort(){
		foreach($_POST["sort"] as $key=>$value) {
			$focus = M('focus')->find($key);
			A('Impot')->IssetGroup($focus['groupid']);
			M("focus")->save(array("sort"=>$value,'guid'=>$key));
		}
		A('Impot')->error('排序成功');
    }
	
	public function statusshow(){
		foreach($_POST["select"] as $value) {
			$focus = M('focus')->find($value);
			A('Impot')->IssetGroup($focus['groupid']);
			M("focus")->save(array('status'=>'0','guid'=>$value));
		}
		A('Impot')->error("显示成功");
    }

    public function statushidden(){
		foreach($_POST["select"] as $value) {
			$focus = M('focus')->find($value);
			A('Impot')->IssetGroup($focus['groupid']);
			M("focus")->save(array('status'=>'1','guid'=>$value));
		}
		A('Impot')->error("隐藏成功");
    }

	/**
    * 显示添加内容模版
    */
    public function add()
    {
		$this->diy=M('diy')->find($_GET['diyid']);
		if(!$this->diy)A('Impot')->error('空间不存在!');
		$this->group=A('Impot')->IssetGroup($this->diy['groupid']);
		$this->display(A('Impot')->model($this->group['guid']).'/Focus/add');
    }
	
	/**
    * 显示修改内容模版
    */
    public function edit()
    {
		$this->focus=M("focus")->find($_GET['guid']);
		if(!$this->focus)A('Impot')->error('区域不存在');
		$this->diy=M("diy")->find($this->focus['diyid']);
		if(!$this->diy)A('Impot')->error('区域不存在');
		$this->group=A('Impot')->IssetGroup($this->diy['groupid']);
		$this->display(A('Impot')->model($this->group['guid']).'/Focus/edit');
    }	
	
	/**
	* 提交添加内容处理
    */
	public function submit_add(){
		$diy=M('diy')->find($_POST['diyid']);
		if(!$diy)A('Impot')->error('空间不存在');
		A('Impot')->IssetGroup($diy['groupid']);
		import("@.ORG.UnsetPost");
		new UnsetPost(array('title','diyid','coordinate','type'));
		$_POST['guid'] = A('Impot')->guid();
		$_POST['time'] = time();
		$_POST['groupid'] = $diy['groupid'];
		$_POST['uid'] = session('uid');
		M("focus")->add($_POST);
		A('Impot')->error('添加成功');
	}
	
	
	/**
	* 提交修改内容处理
    */
	public function submit_edit(){
		$focus=M('focus')->find($_POST['guid']);
		if(!$focus)A('Impot')->error('区域不存在');
		A('Impot')->IssetGroup($focus['groupid']);
		import("@.ORG.UnsetPost");
		new UnsetPost(array('title','guid','coordinate','type'));
		M("focus")->save($_POST);
		A('Impot')->error('修改成功');
	}
	
	
	/**
	* 删除内容
    */
	public function delete(){
		foreach($_POST["select"] as $value) {
			$focus = M('focus')->find($value);
			A('Impot')->IssetGroup($focus['groupid']);
			M("focus")->delete($value);
			$this->deletediyimg($value);
		}
		A('Impot')->error('删除成功');
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