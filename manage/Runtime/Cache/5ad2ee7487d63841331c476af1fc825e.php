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
  <div id="breadcrumb"> <a href="__APP__/Index/index>"><i class="icon-home"></i>属性:</a> </div>
  <div class="container-fluid">
    <div class="row-fluid">
      <?php if($_SESSION['error']!= ''): ?><div class="alert alert-block"> <a class="close" data-dismiss="alert" href="#">×</a><?php echo (session('error')); ?></div><?php endif; ?>
      <div class="widget-box">
        <div class="widget-title"> <span class="icon"> <i class="icon-align-justify"></i> </span>
          <h5>添加</h5>
        </div>
        <form action="__URL__/submit_add" name="form" method="post" enctype="application/x-www-form-urlencoded" class="form-horizontal">
          <div class="control-group attr-box">
            <label class="control-label" ></label>
            <div class="controls">
              <select name="type" class="span11" ng-model="selected">
                <option value="">---请选择---</option>
                <option value="Overview">Overview</option>
                <option value="Specifications">Specifications</option>
                <option value="A & E Specs">A & E Specs</option>
                <option value="A & E Specs">Drawing</option>
                <option value="Datasheet">Datasheet</option>
                <option value="Manual">Manual</option>
                <option value="Firmware">Firmware</option>
                <option value="Access List">Access List</option>
              </select>
            </div>
            <div class="controls">
              <script type="text/html" style="width:95%;height:240px;" ng-model="attr_content" meta-umeditor meta-umeditor-config='config' meta-umeditor-placeholder="编辑多样式html内容">
              </script>
            </div>
          </div>
          <div class="form-actions">
            <input type="hidden"  name="pid" value="<?php echo ($prodir["guid"]); ?>">
            <button type="submit" class="btn btn-success">保存</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</body></html>