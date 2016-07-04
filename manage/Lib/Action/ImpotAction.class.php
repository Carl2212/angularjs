<?php 
class ImpotAction extends Action{
	//判断是否超级管理员
    public function CodeAdmin()
    {
		if(!session('?isadmin')){
			$this->error("添加失败!权限不足!");
		}
    }
	
	//验证项目存在
    public function IssetGroup($groupid)
    {
		if(!isset($groupid))
		$this->error("项目ID不存在!");
		if(!$group=M("group")->find($groupid))
		$this->error("项目不存在!");
		$this->CodeLock($group['guid']);
		return $group;
    }
	
	//验证项目是否被锁
    public function CodeLock($groupid)
    {
		$group=M("group")->find($groupid);
		if(session('uid')!=1 && $group['locked']!=0){
			session("url",C('BASE_URL'));
			$this->error('该项目已被锁');
		}
    }
	
	//输出错误
	public function error($name){
		if(!session('?url'))redirect(C('BASE_URL'));
		session('error',$name);
		redirect(session('url'));
		die();
    }
	
	//获取GUID
	public function guid(){
		if (function_exists('com_create_guid')){
			return str_replace(array('{','}','-'),'',com_create_guid());
		}else{
			mt_srand((double)microtime()*10000);
			$charid = strtoupper(md5(uniqid(rand(), true)));
			$hyphen = chr(45);
			$uuid = chr(123)
                .substr($charid, 0, 8).$hyphen
                .substr($charid, 8, 4).$hyphen
                .substr($charid,12, 4).$hyphen
                .substr($charid,16, 4).$hyphen
                .substr($charid,20,12)
                .chr(125);
				return str_replace(array('{','}','-'),'',$uuid);
			}
		}
	}
?>
