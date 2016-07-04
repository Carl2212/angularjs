<?php
// 本文档自动生成，仅供测试运行
class ContentAction extends Action
{
	//空操作
	public function _empty(){
		redirect(session('url')); 
    }

    /**
    * 默认操作
    */
    public function index()
    {
		$this->dir = M('dir')->find($_GET['pid']);
//		var_dump($this->dir);exit;
		if(!$this->dir || ($this->dir['isaddc']=='1' && session('uid')!='1'))A('Impot')->error('权限不足');
		$this->group=A('Impot')->IssetGroup($this->dir['groupid']);
		import("@.ORG.Dir");
		$new=new Dir();
		$this->Title=$new->Title($this->dir['pid']);
		$this->dirlist=$new->option($this->dir['groupid'],'0','0',$this->dir['guid']);

		$p=(isset($_GET["p"]))?$_GET["p"]-1:0;
		$page=20;
		$start=$p*$page;
		
		$this->lists=M("content")->where("pid='".$this->dir['guid']."' and groupid='".$this->dir['groupid']."'")->order("sort,time desc")->limit($start.",".$page)->select();
		$count=M("content")->where("pid='".$this->dir['guid']."' and groupid='".$this->dir['groupid']."'")->count();
		$model=M('model')->find($this->dir['mid']);
		//输出分页
		import("@.ORG.Page");
		$Page=new Page($count,$page,'pid/'.$this->dir['guid']);
		$this->page=$Page->show();
		session('url',$_SERVER['REQUEST_URI']);
		$this->display(A('Impot')->model($this->group['guid']).'/Content/'.str_replace('.html', '', $model['show_model']));
    }
	
	/**
    * 排序
    */
	public function sort(){
		foreach($_POST["sort"] as $key=>$value) {
			$content = M('content')->find($key);
			if(!$content)A('Impot')->error('参数错误');
			$dir = M('dir')->find($content['pid']);
			if(!$dir || ($dir['isaddc']=='1' && session('uid')!='1'))A('Impot')->error('权限不足');
			A('Impot')->IssetGroup($dir['groupid']);
			M("content")->save(array("sort"=>$value,'guid'=>$key));
		}
		A('Impot')->error("排序成功");
    }

    public function statusshow(){
		foreach($_POST["select"] as $value) {
			$content = M('content')->find($key);
			if(!$content)A('Impot')->error('参数错误');
			$dir = M('dir')->find($content['pid']);
			A('Impot')->IssetGroup($dir['groupid']);
			M("content")->save(array('status'=>'0','guid'=>$value));
		}
		A('Impot')->error("显示成功");
    }

    public function statushidden(){
		foreach($_POST["select"] as $value) {
			$content = M('content')->find($key);
			if(!$content)A('Impot')->error('参数错误');
			$dir = M('dir')->find($content['pid']);
			A('Impot')->IssetGroup($dir['groupid']);
			M("content")->save(array('status'=>'1','guid'=>$value));
		}
		A('Impot')->error("隐藏成功");
    }

	/**
    * 移动
    */
	public function move(){
		$dir = M('dir')->find($_POST['pid']);
		if(!$dir || ($dir['isaddc']=='1' && session('uid')!='1'))A('Impot')->error('参数错误');	
		A('Impot')->IssetGroup($dir['groupid']);

		foreach($_POST["select"] as $value) {
			$content = M('content')->find($key);
			if(!$content)A('Impot')->error('参数错误');
			$dir = M('dir')->find($content['pid']);
			if(!$dir || ($dir['isaddc']=='1' && session('uid')!='1'))A('Impot')->error('权限不足');
			A('Impot')->IssetGroup($dir['groupid']);
			M("content")->save(array("pid"=>$_POST['pid'],'guid'=>$value));
		}
		A('Impot')->error("移动成功");
    }
		
	/**
    * 删除
    */
	public function delete(){
		foreach($_POST['select'] as $value) {
			$content=M("content")->find($value);
			A('Impot')->IssetGroup($content['groupid']);
			if($content['oneimg']!=''){
				@unlink('../'.$content['oneimg']);
			}
			if($content['twoimg']!=''){
				@unlink('../'.$content['twoimg']);
			}
			if($content['threeimg']!=''){
				@unlink('../'.$content['threeimg']);
			}
			if($content['file']!=''){
				@unlink('../'.$content['file']);
			}
			$additional = M('additional')->where('pid="'.$content['guid'].'"')->select();
			foreach ($additional as $valuec) {
				M('additional')->delete($valuec['guid']);
				@unlink('../'.$valuec["oneimg"]);
			}
			M("content")->delete($value);		
		}
		A('Impot')->error("删除成功");
    }
	
	/**
    * 添加
    */
	public function add(){
		$this->dir = M('dir')->find($_GET['pid']);
		if(!$this->dir || ($this->dir['isaddc']=='1' && session('uid')!='1'))A('Impot')->error('参数错误');
		$this->group=A('Impot')->IssetGroup($this->dir['groupid']);
		import("@.ORG.Dir");
		$new=new Dir();
		$this->Title=$new->Title($this->dir['pid']);
		$model=M('model')->find($this->dir['mid']);
		$this->display(A('Impot')->model($this->group['guid']).'/Content/'.str_replace('.html', '', $model['add_model']));
    }
	
	/**
    * 提交添加
    */
	public function submit_add(){
		$dir=M("dir")->find($_POST['pid']);
		if(!$dir || ($dir['isaddc']=='1' && session('uid')!='1'))A('Impot')->error('参数错误');
		A('Impot')->IssetGroup($dir['groupid']);
		import("@.ORG.UnsetPost");
		new UnsetPost(array('title','summary','content','keyword','oneimg','twoimg','threeimg','file','pid'));
		$_POST['guid'] = A('Impot')->guid();
		$_POST['time'] = time();
		$_POST['groupid'] = $dir['groupid'];
		$_POST['uid'] = session('uid');
		$_POST['content'] = str_replace(array("http://","width='0'","height='0'",'width="0"','height="0"'), "", $_POST['content']);

		preg_match_all("/\<img.*?src\=\"(.*?)\"[^>]*>/i", $_POST['content'], $match); 

		foreach ($match[1] as $value) {
			if (strpos($value,$_POST['groupid']) > 0) {
				if(!M('additional')->where('oneimg="'.$value.'"')->find() && file_exists($_SERVER['DOCUMENT_ROOT'].$value)){
					M('additional')->add(array('pid'=>$_POST['guid'],'oneimg'=>$value,'groupid'=>$_POST['groupid'],'uid'=>$_POST['uid'],'guid'=>A('Impot')->guid()));
				}
			}
		}

		M("content")->add($_POST);
		A('Impot')->error('添加成功');
    }
	
	/**
    * 修改
    */
	public function edit(){
		$this->content=M("content")->find($_GET['guid']);
		if(!$this->content)A('Impot')->error('参数错误');
		$this->dir=M("dir")->find($this->content['pid']);
		if(!$this->dir || ($this->dir['isaddc']=='1' && session('uid')!='1'))A('Impot')->error('参数错误');
		$this->group=A('Impot')->IssetGroup($this->dir['groupid']);
		import("@.ORG.Dir");
		$new=new Dir();
		$this->Title=$new->Title($this->dir['pid']);
		$model=M('model')->find($this->dir['mid']);
		$this->display(A('Impot')->model($this->group['guid']).'/Content/'.str_replace('.html', '', $model['edit_model']));
    }
	
	/**
    * 提交修改
    */
	public function submit_edit(){
		$content=M("content")->find($_POST["guid"]);
		if(!$content)A('Impot')->error('参数错误');
		$dir=M("dir")->find($content['pid']);
		if(!$dir || ($dir['isaddc']=='1' && session('uid')!='1'))A('Impot')->error('参数错误');
		A('Impot')->IssetGroup($dir['groupid']);
		if($content['oneimg']!=$_POST["oneimg"]&&$content['oneimg']!=''){
			@unlink('../'.$content["oneimg"]);
		}
		if($content['twoimg']!=$_POST["twoimg"]&&$content['twoimg']!=''){
			@unlink('../'.$content["twoimg"]);
		}
		if($content['threeimg']!=$_POST["threeimg"]&&$content['threeimg']!=''){
			@unlink('../'.$content["threeimg"]);
		}
		if($content['file']!=$_POST["file"]&&$content['file']!=''){
			@unlink('../'.$content["file"]);
		}
		import("@.ORG.UnsetPost");
		new UnsetPost(array('title','summary','content','keyword','oneimg','twoimg','threeimg','file','guid'));
		$_POST['content'] = str_replace(array("http://","width='0'","height='0'",'width="0"','height="0"'), "", $_POST['content']);

		preg_match_all("/\<img.*?src\=\"(.*?)\"[^>]*>/i", $_POST['content'], $match); 
		foreach ($match[1] as $value) {
			if (strpos($value,$content['groupid']) > 0) {
				if(!M('additional')->where('oneimg="'.$value.'"')->find() && file_exists($_SERVER['DOCUMENT_ROOT'].$value)){
					M('additional')->add(array('pid'=>$content['guid'],'oneimg'=>$value,'groupid'=>$content['groupid'],'uid'=>$content['uid'],'guid'=>A('Impot')->guid()));
				}
			}
		}
		$additional = M('additional')->where('pid="'.$content['guid'].'"')->select();
		foreach ($additional as $value) {
			if (!in_array($value['oneimg'], $match[1])) {
				M('additional')->delete($value['guid']);
				@unlink('../'.$value["oneimg"]);
			}
		}
		M("content")->save($_POST);
		A('Impot')->error('修改成功');
    }

}
?>