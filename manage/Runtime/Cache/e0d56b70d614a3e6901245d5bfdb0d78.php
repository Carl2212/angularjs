<?php if (!defined('THINK_PATH')) exit(); if(!session('isadmin')){ redirect(C('BASE_URL')); } ?>
<!DOCTYPE html>
<html lang="en">
<head>
<title>后台管理系统</title>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" href="/manage/Public/Style/style.css" />
<script type="text/javascript" src="/manage/Public/Script/jquery.min.js"></script>
<script type="text/javascript" src="/manage/Public/Script/script.js"></script>
<script type="text/javascript" src='/manage/Public/Script/jquery.cookie.js'></script>
<script type="text/javascript">
$(function(){
	$('.alert .close').click(function(){
		$(this).parent().slideUp();
		$.ajax({url:"__APP__/Index/unseterror",async:false});
	});
	setTimeout('removeerror()',2500);
});
</script>
</head>
<body>
<div id="header"><a href="__APP__"><img src="/manage/Public/Image/logo.png" width="185"></a> </div>
<div id="user-nav">
  <ul class="nav">
    <li class=""><a href="__APP__/Index/outlogin"><i class="icon-share-alt"></i><span>退出系统</span></a></li>
  </ul>
</div>
<div id="sidebar">
  <ul>
    <li class="nav-li submenu"> <a href="#"><span class="icon-chevron-down"></span><span>全局管理</span></a>
      <ul>
        <li><a href="__APP__/Admin">超级管理员</a></li>
      </ul>
    </li>
  </ul>
</div>

<script type="text/javascript">
$(function(){

})
</script>
<div id="content">
  <div id="content-header">
    <h1>超级管理员</h1>
  </div>
  <div id="breadcrumb"> <a href="__APP__/Index/"><i class="icon-home"></i>超级管理员</a> <a href="#" class="current">管理员添加</a> </div>
  <div class="container-fluid">
    <div class="row-fluid">
      <?php if($_SESSION['error']!= ''): ?><div class="alert alert-block"> <a class="close" data-dismiss="alert" href="#">×</a><?php echo (session('error')); ?></div><?php endif; ?>
      <div class="widget-box">
        <div class="widget-title"> <span class="icon"> <i class="icon-align-justify"></i> </span>
          <h5>管理员添加</h5>
        </div>
        <form action="__URL__/submit_add" name="form" method="post" enctype="application/x-www-form-urlencoded" class="form-horizontal">
          <div class="widget-content nopadding">
            <div class="control-group">
              <label class="control-label">帐号名:</label>
              <div class="controls">
                <input name="username" type="text" value=""  class="span11"  size="40" maxlength="12" onblur="this.value=this.value.replace(/[\W]/g,'')"/>
                <span class="help-block" style="color:#f00;">(注:用户名只能输入5-12个字母或数字)</span> </div>
            </div>
            <div class="control-group">
              <label class="control-label">昵称:</label>
              <div class="controls">
                <input name="nickname" type="text" value=""  class="span11"  size="40" maxlength="12" onblur="this.value=this.value.replace(/[\W]/g,'')"/>
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">密码:</label>
              <div class="controls">
                <input type="text" name="password" class="span11" size="40" maxlength="15" onblur="this.value=this.value.replace(/[\W]/g,'')"/>
                <span class="help-block" style="color:#f00;">密码只能输入6-15个字母或数字</span> </div>
            </div>
            <div class="form-actions">
              <input type="hidden" name="groupid" value="<?php echo ($group["id"]); ?>">
              <button type="submit" class="btn btn-success">保存</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</body></html>