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
    <h1>超级管理员</h1>
  </div>
  <div id="breadcrumb"> <a href="__APP__/Index/"><i class="icon-home"></i>超级管理员</a></div>
  <div class="container-fluid">
    <div class="row-fluid">
      <?php if($_SESSION['error']!= ''): ?><div class="alert alert-block"> <a class="close" data-dismiss="alert" href="#">×</a><?php echo (session('error')); ?></div><?php endif; ?>
      <form action="" name="form" method="post" enctype="application/x-www-form-urlencoded" class="form-horizontal">
        <div class="widget-box">
          <div class="widget-content">
            <table>
              <thead>
                <tr role="row">
                  <th width="25"><input type="checkbox" id="title-checkbox" name="chkall" onclick="CheckAll(this.form)"></th>
                  <th>帐号名</th>
                  <th>昵称</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody role="alert" aria-live="polite" aria-relevant="all">
                <?php if(is_array($lists)): $i = 0; $__LIST__ = $lists;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$value): $mod = ($i % 2 );++$i;?><tr align="center">
                    <td><?php if($value["id"] != 1): ?><input type="checkbox" name="select[]" value="<?php echo ($value["id"]); ?>"><?php endif; ?></td>
                    <td><?php echo ($value["username"]); ?></td>
                    <td><?php echo ($value["nickname"]); ?></td>
                    <td><a class="hrefa" href="__URL__/edit/id/<?php echo ($value["id"]); ?>">修改</a></td>
                  </tr><?php endforeach; endif; else: echo "" ;endif; ?>
              </tbody>
            </table>
            <?php if($_SESSION['uid']== 1): ?><div class="ui-widget-header">
              <div class="dataTables_filter">
                <a href="__URL__/add/">添加</a>
                <input type="button" value="彻底删除" name="delete" onclick="if(getSelect(this.form) && confirm('确实要删除吗?')){this.form.action='__URL__/delete/>';this.form.submit();}" class="btn">
              </div>
            </div><?php endif; ?>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</body></html>