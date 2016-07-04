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

<script type="text/javascript">
 $(function(){
  $('#functionid,#styleid,#spacestyleid').change(function(){
    window.location.href='__URL__/index/pid/<?php echo ($_GET['pid']); ?>/styleid/'+$('#styleid').val()+'/functionid/'+$('#functionid').val()+'/spacestyleid/'+$('#spacestyleid').val();
  })
 })
</script>
<div id="content">
  <div id="content-header">
    <h1>产品中心</h1>
  </div>
  <div id="breadcrumb"> <a href="__APP__/Index/index>"><i class="icon-home"></i><?php echo ($group["title"]); ?></a> <a href="__APP__/Prodir/index>" class="current">产品系列</a>
      <select name="styleid" class="span11">
        <option value="0">无</option>
        <?php if(is_array($style)): $i = 0; $__LIST__ = $style;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$value): $mod = ($i % 2 );++$i;?><option value="<?php echo ($value["guid"]); ?>" ><?php echo ($value["title"]); ?></option><?php endforeach; endif; else: echo "" ;endif; ?>
      </select>
      <select name="functionid" class="span11">
        <option value="0">无</option>
        <?php if(is_array($function)): $i = 0; $__LIST__ = $function;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$value): $mod = ($i % 2 );++$i;?><option value="<?php echo ($value["guid"]); ?>"><?php echo ($value["title"]); ?></option><?php endforeach; endif; else: echo "" ;endif; ?>
      </select>
  </div>
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
                  <th width="40">排序</th>
                  <th>名称</th>
                  <th>类型</th>
                  <th>风格</th>
                  <th>产品价格</th>
                  <th>浏览量</th>
                  <th width="90">是否隐藏</th>
                  <th width="300">操作</th>
                </tr>
              </thead>
              <tbody role="alert" aria-live="polite" aria-relevant="all">
                <?php if(is_array($lists)): $i = 0; $__LIST__ = $lists;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$value): $mod = ($i % 2 );++$i;?><tr align="center">
                    <td width="25"><input type="checkbox" name="select[]" value="<?php echo ($value["guid"]); ?>"></td>
                    <td width="40"><input type="text" class="inputtext" name="sort[<?php echo ($value["guid"]); ?>]" value="<?php echo ($value["sort"]); ?>"></td>
                    <td><?php echo ($value["title"]); ?></td>
                    <?php $find=M('function')->where('guid="'.$value['functionid'].'"')->find();?>
                    <td style="text-align:center;"><?php echo ($find["title"]); ?></td>
                    <?php $find=M('style')->where('guid="'.$value['styleid'].'"')->find();?>
                    <td style="text-align:center;"><?php echo ($find["title"]); ?></td>
                    <td><?php echo ($value["price"]); ?></td>
                    <td><?php echo ($value["hot"]); ?></td>
                    <td><?php if($value['status'] == 0): ?>否<?php else: ?><font style="color:#f00;">是</font><?php endif; ?></td>
                    <td style="text-align:center;"><a class="hrefa" href="__URL__/edit/guid/<?php echo ($value["guid"]); ?>">修改</a></td>
                  </tr><?php endforeach; endif; else: echo "" ;endif; ?>
              </tbody>
            </table>
            <div class="ui-widget-header">
              <div class="dataTables_filter">
              <span>系列:</span>
                <select name="styleid" class="span11">
                  <option value="0">无</option>
                  <?php if(is_array($style)): $i = 0; $__LIST__ = $style;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$value): $mod = ($i % 2 );++$i;?><option value="<?php echo ($value["guid"]); ?>" ><?php echo ($value["title"]); ?></option><?php endforeach; endif; else: echo "" ;endif; ?>
                </select>
                <select name="functionid" class="span11">
                  <option value="0">无</option>
                  <?php if(is_array($function)): $i = 0; $__LIST__ = $function;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$value): $mod = ($i % 2 );++$i;?><option value="<?php echo ($value["guid"]); ?>"><?php echo ($value["title"]); ?></option><?php endforeach; endif; else: echo "" ;endif; ?>
                </select>
              <a href="__URL__/add/pid/<?php echo ($prodir["guid"]); ?>">添加产品</a>
              <input type="button" value="显示" name="delete" onclick="if(getSelect(this.form)){this.form.action='__URL__/statusshow';this.form.submit();}" class="btn">
              <input type="button" value="隐藏" name="delete" onclick="if(getSelect(this.form)){this.form.action='__URL__/statushidden';this.form.submit();}" class="btn">
                <input type="button" value="排序" name="delete" onclick="if(getSelect(this.form)){this.form.action='__URL__/sort';this.form.submit();}" class="btn">
                <input type="button" value="彻底删除" name="delete" onclick="if(getSelect(this.form) && confirm('确实要删除吗?')){this.form.action='__URL__/delete';this.form.submit();}" class="btn">
              </div>
              <div class="dataTables_paginate"><?php echo ($page); ?></div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</body></html>