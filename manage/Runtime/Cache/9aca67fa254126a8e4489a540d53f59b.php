<?php if (!defined('THINK_PATH')) exit(); if(!session('isadmin')){ redirect(C('BASE_URL')); } ?>
<!DOCTYPE html>
<html lang="en" ng-app="managepro">
<head>
<title>后台管理系统</title>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" href="/manage/Public/Style/style.css" />
<script type="text/javascript" src="/manage/Public/Script/jquery.min.js"></script>
<script type="text/javascript" src='/source/js/angular.js'></script>
<script type="text/javascript" src='/source/js/angular-route.min.js'></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.7/angular-resource.min.js"></script>
<script type="text/javascript" src="/manage/Public/Script/script.js"></script>
<script type="text/javascript" src='/manage/Public/Script/jquery.cookie.js'></script>
  <link href="/manage/Public/umeditor/lib/umeditor/dist/utf8-php/themes/default/css/umeditor.css" type="text/css" rel="stylesheet">
  <script type="text/javascript" charset="utf-8" src="/manage/Public/umeditor/lib/umeditor/dist/utf8-php/umeditor.config.js"></script>
  <script type="text/javascript" charset="utf-8" src="/manage/Public/umeditor/lib/umeditor/dist/utf8-php/umeditor.min.js"></script>
  <script type="text/javascript" charset="utf-8" src="/manage/Public/umeditor/src/meta.umeditor.js"></script>
  <script type="text/javascript" src='/manage/Public/jQuery_calendar/js/manage.js'></script>
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
<div id="sidebar" >
  <ul>
    <li class="nav-li submenu"> <a href="#"><span class="icon-chevron-down"></span><span>全局管理</span></a>
      <ul>
        <li><a href="__APP__/Admin">超级管理员</a></li>
      </ul>
    </li>
    <li class="nav-li submenu"> <a href="#"><span class="icon-chevron-down"></span><span>产品分类</span></a>
      <ul ng-controller="protypelistCtrl">
        <li ng-repeat="type in protype track by $index" ><a href="__APP__/pro/typeid/type.name">{{type.name}}</a>
        </li>
      </ul>
    </li>
    <li class="nav-li submenu"> <a href="__APP__/pro"><span class="icon-chevron-down"></span><span>产品列表</span></a>
    </li>
  </ul>
</div>

<div id="content">
  <div id="content-header">
    <h1>产品中心</h1>
  </div>
  <div id="breadcrumb"> <a href="__APP__/Index/index>"><i class="icon-home"></i><?php echo ($group["title"]); ?></a> </div>
  <div class="container-fluid">
    <div class="row-fluid">
      <?php if($_SESSION['error']!= ''): ?><div class="alert alert-block"> <a class="close" data-dismiss="alert" href="#">×</a><?php echo (session('error')); ?></div><?php endif; ?>
      <div class="widget-box">
        <div class="widget-title"> <span class="icon"> <i class="icon-align-justify"></i> </span>
          <h5>添加</h5>
        </div>
        <form action="__URL__/submit_add" name="form" method="post" enctype="application/x-www-form-urlencoded" class="form-horizontal">
          <div class="widget-content nopadding">
            <div class="control-group">
              <label class="control-label">名称:</label>
              <div class="controls">
                <input type="text" class="span11" size="100" name="name" placeholder="名称">
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">简介:</label>
              <div class="controls">
                <input type="text" class="span11" size="100" name="brief" placeholder="简介" value="">
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">详情:</label>
              <div class="controls">
                <textarea class="span11" cols="100" rows="5" name="detail"></textarea>
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">是否新品:</label>
              <div class="controls">
                <input type="checkbox" name="new">
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">是否折扣:</label>
              <div class="controls">
                <input type="checkbox" name="discount">
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">所属类别:</label>
              <div class="controls">
                <select name="type" class="span11">
                  <option value="guid">Security Cameras</option>
                </select>
              </div>
            </div>
            <div class="form-actions">
              <button type="submit" class="btn btn-success">保存</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</body></html>