<?php if (!defined('THINK_PATH')) exit(); if(!session('?username')){ redirect(C('BASE_URL')); } ?>
<!DOCTYPE html>
<html lang="en">
<head>
<title>后台管理系统</title>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" href="/Public/Style/style.css" />
<script type="text/javascript" src="/Public/Script/jquery.min.js"></script>
<script type="text/javascript" src="/Public/Script/script.js"></script>
<script type="text/javascript" src='/Public/Script/ajaxfileupload.js'></script>
<script type="text/javascript" src='/Public/Script/upload.js'></script>  
<script type="text/javascript" src='/Public/Script/jquery.cookie.js'></script> 
<script type="text/javascript" src="/fancybox/jquery.fancybox-1.3.1.js"></script>
<link rel="stylesheet" type="text/css" href="/fancybox/jquery.fancybox-1.3.1.css" />
<!--时间控件-->
<link rel="stylesheet" href="/Public/jQuery_calendar/css/datepicker.css" type="text/css" />
<script type="text/javascript" src="/Public/jQuery_calendar/js/datepicker.js"></script>
<script type="text/javascript" src="/Public/jQuery_calendar/js/eye.js"></script>
<script type="text/javascript" src="/Public/jQuery_calendar/js/utils.js"></script>
<script type="text/javascript" src="/Public/jQuery_calendar/js/layout.js?ver=1.0.2"></script>
   
<!--区域控件--> 
<link rel="stylesheet" href="/Public/Style/jquery.Jcrop.css" type="text/css" />
<script src="/Public/script/jquery.Jcrop.js" type="text/javascript"></script>

<script type="text/javascript">
var groupfile = '<?php echo ($group["guid"]); ?>';
$(function(){
	$('#oneimg,#twoimg,#threeimg,#fourimg').click(function(){
		$(this).attr('href','/'+$("#"+$(this).attr('id')+"_value").val());
	});
	$('#oneimg,#twoimg,#threeimg,#fourimg').fancybox();
	
	$('.alert .close').click(function(){
		$(this).parent().slideUp();
		$.ajax({url:"__APP__/Index/unseterror",async:false});
	});
	setTimeout('removeerror()',2500);
});
</script>
</head>
<body>
<div id="header"><a href="__APP__" style="top:0;"><img src="/Public/Image/dongya.png"></a> </div>
<div id="user-nav">
  <ul class="nav">
    <li class=""><a href="/index.php/Index/outlogin"><i class="icon-share-alt"></i><span>退出系统</span></a></li>
  </ul>
</div>
<div id="sidebar">
  <ul>
    <li class="nav-li submenu"> <a href="#"><span class="icon-chevron-down"></span><span>设置</span></a>
      <ul>
        <li><a href="__APP__/Index/index/groupid/<?php echo ($group["guid"]); ?>">版本发布</a></li>
        <?php if(session('?isadmin') && session('uid')=='1'){ ?>
          <li><a href="__APP__/Model/index/groupid/<?php echo ($group["guid"]); ?>">模版</a></li>
          <li><a href="__APP__/Dir/index/groupid/<?php echo ($group["guid"]); ?>">栏目</a></li>
          <li><a href="__APP__/Diy/index/groupid/<?php echo ($group["guid"]); ?>">DIY列表</a></li>
        <?php }?>
      </ul>
    </li>
    <li class="nav-li submenu"> <a href="__APP__/Code/index/groupid/<?php echo ($group["guid"]); ?>"><span class="icon-chevron-down"></span><span>账号管理</span></a>
    <li class="nav-li submenu"> <a href="#"><span class="icon-chevron-down"></span><span>企业品牌</span></a>
      <ul>
        <li><a href="__APP__/Content/index/pid/6EB3AA74B83AE1208D22263E2A2A3672">企业梦</a></li>
        <li><a href="__APP__/Content/index/pid/096C17930C3A32BEA3FC8A451008395B">企业荣誉</a></li>
        <li><a href="__APP__/Content/index/pid/893FA0DC5E991B28FF888FE3527F126A">发家史</a></li>
        <li><a href="__APP__/Dir/index/pid/AC87C1658572CEFF3F9542D11ADD75E2">团队秀</a></li>
        <li><a href="__APP__/Dir/index/pid/E4BEE8FCD79979F5DE99B60F5E1DA2D7">赚钱户</a></li>
        <li><a href="__APP__/Dir/index/pid/96B67DCBBE31D5B3E960B3453063927D">门品美</a></li>
        <li><a href="__APP__/Dir/index/pid/34BFB98606D2346CF83339AF82346B74">店面豪</a></li>
      </ul>
    </li>
    <li class="nav-li submenu"> <a href="#"><span class="icon-chevron-down"></span><span>产品模块</span></a>
      <ul>
        <li><a href="__APP__/Style/index/groupid/<?php echo ($group["guid"]); ?>">类型分类</a></li>
        <li><a href="__APP__/Function/index/groupid/<?php echo ($group["guid"]); ?>">材质分类</a></li>
        <li><a href="__APP__/Spacestyle/index/groupid/<?php echo ($group["guid"]); ?>">厚度分类</a></li>
        <li><a href="__APP__/Prodir/index/groupid/<?php echo ($group["guid"]); ?>">产品系列</a></li>
        <li><a href="__APP__/Hot/index/groupid/<?php echo ($group["guid"]); ?>">浏览量排行</a></li>
      </ul>
    </li>
  </ul>
</div>
<div id="content">
  <div id="content-header">
    <h1><?php echo ($group["title"]); ?></h1>
  </div>
  <div id="breadcrumb"><a href="#" class="current"><i class="icon-home"></i><?php echo ($group["title"]); ?></a> <a href="#" class="current">账号管理</a> </div>
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
                  <th>用户名</th>
                  <th>密码</th>
                  <th>姓名</th>
                  <th>电话</th>
                  <th>地区</th>
                  <th>是否锁定</th>
                  <th>是否锁定更新</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody role="alert" aria-live="polite" aria-relevant="all">
                <?php if(is_array($lists)): $i = 0; $__LIST__ = $lists;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$value): $mod = ($i % 2 );++$i;?><tr align="center">
                    <td><input type="checkbox" name="select[]" value="<?php echo ($value["guid"]); ?>"></td>
                    <td><?php echo ($value["username"]); ?></td>
                    <td><?php echo ($value["password"]); ?></td>
                    <td><?php echo ($value["nickname"]); ?></td>
                    <td><?php echo ($value["phone"]); ?></td>
                    <td><?php echo ($value["address"]); ?></td>
                    <td><?php if($value['locked'] == 0): ?>否<?php else: ?><font style="color:#f00;">是</font><?php endif; ?></td>
                    <td><?php if($value['noupdata'] == 0): ?>否<?php else: ?><font style="color:#f00;">是</font><?php endif; ?></td>
                    <td><a class="hrefa" href="__URL__/edit/guid/<?php echo ($value["guid"]); ?>">修改</a></td>
                  </tr><?php endforeach; endif; else: echo "" ;endif; ?>
              </tbody>
            </table>
            <div class="ui-widget-header">
              <div class="dataTables_filter">
                <a href="__URL__/add/groupid/<?php echo ($group["guid"]); ?>">添加</a>
                <input type="hidden" name="groupid" value="<?php echo ($group["guid"]); ?>">
                <input type="button" value="锁定" name="lock" onclick="if(getSelect(this.form) && confirm('确实要锁定吗?')){this.form.action='__URL__/lock/';this.form.submit();}" class="btn">
                <input type="button" value="解锁" name="unlock" onclick="if(getSelect(this.form) && confirm('确实要解锁吗?')){this.form.action='__URL__/unlock/';this.form.submit();}" class="btn">
                <input type="button" value="锁定更新" name="lockupdata" onclick="if(getSelect(this.form) && confirm('确实要锁定吗?')){this.form.action='__URL__/lockupdata/';this.form.submit();}" class="btn">
                <input type="button" value="解锁更新" name="unlockupdata" onclick="if(getSelect(this.form) && confirm('确实要解锁吗?')){this.form.action='__URL__/unlockupdata/';this.form.submit();}" class="btn">
                <input type="button" value="彻底删除" name="delete" onclick="if(getSelect(this.form) && confirm('确实要删除吗?')){this.form.action='__URL__/delete/';this.form.submit();}" class="btn">
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