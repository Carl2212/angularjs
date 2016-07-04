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
<div id="header"><a href="__APP__" style="top:0;"><img src="/Public/Image/Yihe.png"></a> </div>
<div id="user-nav">
  <ul class="nav">
    <li class=""><a href="/index.php/Index/outlogin"><i class="icon-share-alt"></i><span>退出系统</span></a></li>
  </ul>
</div>
<div id="sidebar">
  <ul>
    <li class="nav-li submenu"> <a href="__APP__/Code/index/groupid/<?php echo ($group["guid"]); ?>"><span class="icon-chevron-down"></span><span>账号管理</span></a>
    <li class="nav-li submenu"> <a href="#"><span class="icon-chevron-down"></span><span>关于艺和</span></a>
      <ul>
        <li><a href="__APP__/Content/index/pid/8FF888FE3527F126A893FA0DC5E991B2">公司简介</a></li>
        <li><a href="__APP__/Content/index/pid/3F9542D11ADD75E2AC87C1658572CEFF">企业荣耀</a></li>
        <li><a href="__APP__/Content/index/pid/5DE99B60F5E1DA2D7E4BEE8FCD79979F">联系我们</a></li>
        <li><a href="__APP__/Content/index/pid/3E960B3453063927D96B67DCBBE31D5B">生产基地</a></li>
        <li><a href="__APP__/Content/index/pid/CF83339AF82346B7434BFB98606D2346">董事长致词</a></li>
        <li><a href="__APP__/Content/index/pid/5DE99B60F5E1DA2D7E4BEE8FCD79979F">专卖店展示</a></li>
        <li><a href="__APP__/Content/index/pid/3E960B3453063927D96B67DCBBE31D5B">品牌理念</a></li>
        <li><a href="__APP__/Content/index/pid/CF83339AF82346B7434BFB98606D2346">艺和形象</a></li>
      </ul>
    </li>
    <li class="nav-li submenu"> <a href="#"><span class="icon-chevron-down"></span><span>服务中心</span></a>
      <ul>
        <li><a href="__APP__/Content/index/pid/208D22263E2A2A36726EB3AA74B83AE1">品牌优势</a></li>
        <li><a href="__APP__/Content/index/pid/BEA3FC8A451008395B096C17930C3A32">加盟条件</a></li>
        <li><a href="__APP__/Content/index/pid/8FF888FE3527F126A893FA0DC5E991B2">加盟流程</a></li>
      </ul>
    </li>
    <li class="nav-li submenu"> <a href="#"><span class="icon-chevron-down"></span><span>首页素材</span></a>
      <ul>

        <li><a href="__APP__/Content/index/pid/5DE99B60F5E1DA2D7E4BEE8FCD79979F">热卖产品</a></li>
        <li><a href="__APP__/Content/index/pid/3E960B3453063927D96B67DCBBE31D5B">畅销广告</a></li>
        <li><a href="__APP__/Content/index/pid/CF83339AF82346B7434BFB98606D2346">首页视频</a></li>
      </ul>
    </li>
    <li class="nav-li submenu"> <a href="#"><span class="icon-chevron-down"></span><span>三维素材</span></a>
      <ul>
        <li><a href="__APP__/Content/index/pid/8FF888FE3527F126A893FA0DC5E991B2">三维产品</a></li>
        <li><a href="__APP__/Content/index/pid/3F9542D11ADD75E2AC87C1658572CEFF">三维空间</a></li>
      </ul>
    </li>
    <li class="nav-li submenu"> <a href="#"><span class="icon-chevron-down"></span><span>产品模块</span></a>
      <ul>
        <li><a href="__APP__/Protype/index/groupid/<?php echo ($group["guid"]); ?>">产品属性分类</a></li>
        <li><a href="__APP__/Prodir/index/groupid/<?php echo ($group["guid"]); ?>">产品系列</a></li>
        <li><a href="__APP__/Order/index/groupid/<?php echo ($group["guid"]); ?>">订单列表</a></li>
      </ul>
    </li>
    <li class="nav-li submenu"> <a href="#"><span class="icon-chevron-down"></span><span>DIY列表</span></a>
      <ul>
        <li><a href="__APP__/Diy/index/groupid/<?php echo ($group["guid"]); ?>">DIY</a></li>
      </ul>
    </li>
  </ul>
</div>
<div id="content">
  <div id="content-header">
    <h1>栏目管理</h1>
  </div>
  <div id="breadcrumb"> <a href="__APP__/Index/index/groupid/<?php echo ($group["guid"]); ?>"><i class="icon-home"></i><?php echo ($group["title"]); ?></a> <?php if(session('uid')=='1'){?><a href="__URL__/index/groupid/<?php echo ($group["guid"]); ?>" class="current">栏目</a><?php }?> <?php echo ($Title); ?></div>
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
                  <th>标题</th>
                  <th>内容数</th>
                  <th width="90">是否隐藏</th>
                  <th width="100">录入时间</th>
                  <th width="350">操作</th>
                </tr>
              </thead>
              <tbody role="alert" aria-live="polite" aria-relevant="all">
                <?php if(is_array($lists)): $i = 0; $__LIST__ = $lists;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$value): $mod = ($i % 2 );++$i;?><tr align="center">
                    <td><input type="checkbox" name="select[]" value="<?php echo ($value["guid"]); ?>"></td>
                    <td><input type="text" class="inputtext" name="sort[<?php echo ($value["guid"]); ?>]" value="<?php echo ($value["sort"]); ?>"></td>
                    <td><?php echo ($value["title"]); ?></td>
                    <?php $count = M('content')->where('pid="'.$value['guid'].'"')->count();?>
                    <td><?php echo ($count); ?></td>
                    <td><?php if($value['status'] == 0): ?>否<?php else: ?><font style="color:#f00;">是</font><?php endif; ?></td>
                    <td><?php echo (date("Y-m-d",$value["time"])); ?></td>
                    <td>
                    <a class="hrefa" href="__URL__/add/pid/<?php echo ($value["guid"]); ?>">添加子栏目</a> 
                    <a class="hrefa" href="__URL__/edit/guid/<?php echo ($value["guid"]); ?>">修改</a> 
                    <?php $count = M('dir')->where('pid="'.$value['guid'].'"')->count();?>
                    <?php if(($count) != "0"): ?><a class="hrefa" href="__URL__/index/pid/<?php echo ($value["guid"]); ?>">子栏目</a><?php endif; ?>
                    <a class="hrefa" href="__APP__/Content/index/pid/<?php echo ($value["guid"]); ?>">管理内容</a>
                    </td>
                  </tr><?php endforeach; endif; else: echo "" ;endif; ?>
              </tbody>
            </table>
            <div class="ui-widget-header">
              <div class="dataTables_filter">
              <?php if($pid == '0'): ?><a href="__URL__/add/groupid/<?php echo ($group["guid"]); ?>">添加栏目</a><?php else: ?>
              <a href="__URL__/add/pid/<?php echo ($pid); ?>">添加子栏目</a><?php endif; ?>
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