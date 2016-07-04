<?php
// 本文档自动生成，仅供测试运行
class DiyimgAction extends Action
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
		$this->focus=M('focus')->find($_GET['focusid']);
		if(!$this->focus)A('Impot')->error('区域不存在');
		$this->diy=M('diy')->find($this->focus['diyid']);
		if(!$this->diy)A('Impot')->error('空间不存在');
		$this->group=A('Impot')->IssetGroup($this->diy['groupid']);
		$this->lists=M("diyimg")->where('focusid="'.$this->focus['guid'].'"')->order("sort,time desc")->select();  
		session('url',$_SERVER['REQUEST_URI']);
		$this->display(A('Impot')->model($this->group['guid']).'/Diyimg/index');
    }
	
	
	/**
    * 排序
    */
	public function sort(){
		foreach($_POST["sort"] as $key=>$value) {
			$diyimg = M('diyimg')->find($key);
			A('Impot')->IssetGroup($diyimg['groupid']);
			M("diyimg")->save(array("sort"=>$value,'guid'=>$key));
		}
		A('Impot')->error('排序成功');
    }
	
	public function statusshow(){
		foreach($_POST["select"] as $value) {
			$diyimg = M('diyimg')->find($value);
			A('Impot')->IssetGroup($diyimg['groupid']);
			M("diyimg")->save(array('status'=>'0','guid'=>$value));
		}
		A('Impot')->error("显示成功");
    }

    public function statushidden(){
		foreach($_POST["select"] as $value) {
			$diyimg = M('diyimg')->find($value);
			A('Impot')->IssetGroup($diyimg['groupid']);
			M("diyimg")->save(array('status'=>'1','guid'=>$value));
		}
		A('Impot')->error("隐藏成功");
    }

	/**
    * 显示添加内容模版
    */
    public function add()
    {
		$this->focus=M('focus')->find($_GET['focusid']);
		if(!$this->focus)A('Impot')->error('区域不存在');
		$this->diy=M('diy')->find($this->focus['diyid']);
		if(!$this->diy)A('Impot')->error('空间不存在');
		$this->group=A('Impot')->IssetGroup($this->diy['groupid']);
		$this->display(A('Impot')->model($this->group['guid']).'/Diyimg/add');
    }
	
	/**
    * 显示修改内容模版
    */
    public function edit()
    {
		$this->diyimg=M('diyimg')->find($_GET['guid']);
		if(!$this->diyimg)A('Impot')->error('换装图不存在');
		$this->focus=M('focus')->find($this->diyimg['focusid']);
		if(!$this->focus)A('Impot')->error('区域不存在');
		$this->diy=M('diy')->find($this->focus['diyid']);
		if(!$this->diy)A('Impot')->error('空间不存在');
		$this->group=A('Impot')->IssetGroup($this->diy['groupid']);
		$this->display(A('Impot')->model($this->group['guid']).'/Diyimg/edit');
    }	
	
	/**
	* 提交添加内容处理
    */
	public function submit_add(){
		$focus=M('focus')->find($_POST['focusid']);
		if(!$focus)A('Impot')->error('区域不存在');
		$diy=M('diy')->find($focus['diyid']);
		if(!$diy)A('Impot')->error('空间不存在');
		A('Impot')->IssetGroup($diy['groupid']);
		
		import("@.ORG.UnsetPost");
		new UnsetPost(array('title','size','oneimg','twoimg','threeimg','focusid','coordinate'));
		$_POST['guid'] = A('Impot')->guid();
		$_POST['time'] = time();
		$_POST['groupid'] = $diy['groupid'];
		$_POST['uid'] = session('uid');
		M("diyimg")->add($_POST);

		if($focus['guid'] == '04487A1C5E8E1C5D6FA65522EEACA900' || $focus['guid'] == 'F5CA22B78EBD1E73723BA50E7045EAE1' || $focus['guid'] == '5370230A3654F65050F7071EC6E8A75F' || $focus['guid'] == 'A01550D720BE3BD8F746B1CA2896CA98' || $focus['guid'] == '973AEB208BC291F8259DF3469B2B0202'){
			M('diyimgtype')->add(array(
				'guid'=>A('Impot')->guid(),
				'title'=>'色板',
				'diyimgid'=>$_POST['guid'],
				'groupid'=>$diy['groupid'],
				'time'=>time()
				));
		}
		A('Impot')->error('添加成功');
	}
	
	
	/**
	* 提交修改内容处理
    */
	public function submit_edit(){
		$diyimg=M("diyimg")->find($_POST["guid"]);
		if(!$diyimg)A('Impot')->error('换装图不存在');
		A('Impot')->IssetGroup($diyimg['groupid']);
		
		if($diyimg['oneimg']!=$_POST["oneimg"]&&$diyimg['oneimg']!=''){
			@unlink('../'.$diyimg["oneimg"]);
		}
		if($diyimg['twoimg']!=$_POST["twoimg"]&&$diyimg['twoimg']!=''){
			@unlink('../'.$diyimg["twoimg"]);
		}
		if($diyimg['threeimg']!=$_POST["threeimg"]&&$diyimg['threeimg']!=''){
			@unlink('../'.$diyimg["threeimg"]);
		}
		import("@.ORG.UnsetPost");
		new UnsetPost(array('title','size','oneimg','twoimg','threeimg','guid','coordinate'));
		M("diyimg")->save($_POST);
		A('Impot')->error('修改成功');
	}
	
	
	/**
	* 删除内容
    */
	public function delete(){
		foreach($_POST["select"] as $value) {
			$diyimg=M("diyimg")->find($value);
			A('Impot')->IssetGroup($diyimg['groupid']);
			if($diyimg['oneimg']!=''){
				@unlink('../'.$diyimg["oneimg"]);
			}
			if($diyimg['twoimg']!=''){
				@unlink('../'.$diyimg["twoimg"]);
			}
			if($diyimg['threeimg']!=''){
				@unlink('../'.$diyimg["threeimg"]);
			}
			$this->deletediyimgtype($value);
			M("diyimg")->delete($value);
		}
		A('Impot')->error('删除成功');
	}

	//删除关联产品
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