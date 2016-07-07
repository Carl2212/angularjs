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
        <li><a href="__APP__/Group">项目列表</a></li>
      </ul>
    </li>
  </ul>
</div>

<div id="content">
  <div id="content-header">
    <h1>项目管理</h1>
  </div>
  <div id="breadcrumb"> <a href="__APP__/Index/"><i class="icon-home"></i>项目管理</a> <a href="#" class="current">项目添加</a> </div>
  <div class="container-fluid">
    <div class="row-fluid">
      <?php if($_SESSION['error']!= ''): ?><div class="alert alert-block"> <a class="close" data-dismiss="alert" href="#">×</a><?php echo (session('error')); ?></div><?php endif; ?>
      <div class="widget-box">
        <div class="widget-title"> <span class="icon"> <i class="icon-align-justify"></i> </span>
          <h5>项目添加</h5>
        </div>
        <form action="__URL__/submit_add" name="form" method="post" enctype="application/x-www-form-urlencoded" class="form-horizontal">
          <div class="widget-content nopadding">
          <div class="control-group">
            <label class="control-label">项目名称:</label>
            <div class="controls">
              <input name="title" type="text" value=""  class="span11"  size="40" maxlength="12"/>
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">模版:</label>
            <div class="controls">
              <input type="text" name="model" class="span11" size="40" value="Default" maxlength="20" />
            </div>
          </div>
          <div class="form-actions">
            <button type="submit" class="btn btn-success">保存</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</body></html>