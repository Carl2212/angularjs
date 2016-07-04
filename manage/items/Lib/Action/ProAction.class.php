<?php
// 本文档自动生成，仅供测试运行
class ProAction extends Action
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
		
		$this->lists=M("pro")->where('groupid="'.$this->group['guid'].'" and pid="'.$this->prodir['guid'].'"')->order("sort,time desc")->limit($start.",".$page)->select();  
		$count=M("pro")->where('groupid="'.$this->group['guid'].'" and pid="'.$this->prodir['guid'].'"')->count();
		import("@.ORG.Page");
		$Page=new Page($count,$page,'pid/'.$_GET['pid']);
		$this->page=$Page->show();
		session('url',$_SERVER['REQUEST_URI']);
		$this->display(A('Impot')->model($this->group['guid']).'/Pro/index');
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
		$this->display(A('Impot')->model($this->group['guid']).'/Pro/add');
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
		$this->display(A('Impot')->model($this->group['guid']).'/Pro/edit');
    }	
	
	/**
    *提交添加内容处理
	*/
	public function submit_add(){
		$prodir=M("prodir")->find($_POST['pid']);
		if(!$prodir)A('Impot')->error('参数错误');
		A('Impot')->IssetGroup($prodir['groupid']);
		import("@.ORG.UnsetPost");
		new UnsetPost(array('title','entitle','threetitle','size','content','pid','oneimg','twoimg','threeimg','level','bzgg','mshd','mkld','msld','jiaolian','suoju','suoxin','lashou','mmgy','mmks','tcw','menjing','mft','remarks'));
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
		new UnsetPost(array('title','entitle','threetitle','size','content','guid','oneimg','twoimg','threeimg','level','bzgg','mshd','mkld','msld','jiaolian','suoju','suoxin','lashou','mmgy','mmks','tcw','menjing','mft','remarks'));
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