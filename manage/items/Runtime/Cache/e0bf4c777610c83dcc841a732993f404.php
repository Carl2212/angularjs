<?php if (!defined('THINK_PATH')) exit(); if(!session('?username')){ redirect(C('BASE_URL')); } ?>
<!DOCTYPE html>
<html lang="en">
<head>
<title>后台管理系统</title>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" href="<?php echo (C("BASE_URL")); ?>Public/Style/style.css" />
<script type="text/javascript" src="<?php echo (C("BASE_URL")); ?>Public/Script/jquery.min.js"></script>
<script type="text/javascript" src="<?php echo (C("BASE_URL")); ?>Public/Script/script.js"></script>
<script type="text/javascript" src='<?php echo (C("BASE_URL")); ?>Public/Script/ajaxfileupload.js'></script>
<script type="text/javascript" src='<?php echo (C("BASE_URL")); ?>Public/Script/upload.js'></script>  
<script type="text/javascript" src='<?php echo (C("BASE_URL")); ?>Public/Script/jquery.cookie.js'></script> 
<script type="text/javascript" src="<?php echo (C("BASE_URL")); ?>fancybox/jquery.fancybox-1.3.1.js"></script>
<link rel="stylesheet" type="text/css" href="<?php echo (C("BASE_URL")); ?>fancybox/jquery.fancybox-1.3.1.css" />
<!--时间控件-->
<link rel="stylesheet" href="<?php echo (C("BASE_URL")); ?>Public/jQuery_calendar/css/datepicker.css" type="text/css" />
<script type="text/javascript" src="<?php echo (C("BASE_URL")); ?>Public/jQuery_calendar/js/datepicker.js"></script>
<script type="text/javascript" src="<?php echo (C("BASE_URL")); ?>Public/jQuery_calendar/js/eye.js"></script>
<script type="text/javascript" src="<?php echo (C("BASE_URL")); ?>Public/jQuery_calendar/js/utils.js"></script>
<script type="text/javascript" src="<?php echo (C("BASE_URL")); ?>Public/jQuery_calendar/js/layout.js?ver=1.0.2"></script>
   
<!--区域控件--> 
<link rel="stylesheet" href="<?php echo (C("BASE_URL")); ?>Public/Style/jquery.Jcrop.css" type="text/css" />
<script src="<?php echo (C("BASE_URL")); ?>Public/script/jquery.Jcrop.js" type="text/javascript"></script>

<script type="text/javascript">
var groupfile = '<?php echo ($group["guid"]); ?>';
$(function(){
	$('#oneimg,#twoimg,#threeimg,#fourimg').click(function(){
		$(this).attr('href','<?php echo (C("BASE_URL")); ?>'+$("#"+$(this).attr('id')+"_value").val());
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
<div id="header"><a href="__APP__" style="top:0;"><img src="<?php echo (C("BASE_URL")); ?>Public/Image/dongya.png"></a> </div>
<div id="user-nav">
  <ul class="nav">
    <li class=""><a href="<?php echo (C("BASE_URL")); ?>index.php/Index/outlogin"><i class="icon-share-alt"></i><span>退出系统</span></a></li>
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
<script type="text/javascript">
 $(function(){
  $('#functionid,#styleid,#spacestyleid').change(function(){
    window.location.href='__URL__/index/groupid/<?php echo ($group["guid"]); ?>/pid/<?php echo ($_GET['pid']); ?>/styleid/'+$('#styleid').val()+'/functionid/'+$('#functionid').val()+'/spacestyleid/'+$('#spacestyleid').val();
  })
 })
</script>
<div id="content">
  <div id="content-header">
    <h1>产品中心</h1>
  </div>
  <div id="breadcrumb"> <a href="__APP__/Index/index/groupid/<?php echo ($group["guid"]); ?>"><i class="icon-home"></i><?php echo ($group["title"]); ?></a> <a href="__APP__/Prodir/index/groupid/<?php echo ($group["guid"]); ?>" class="current">产品系列</a> <?php echo ($Title); ?> <a href="__URL__/index/pid/<?php echo ($prodir["guid"]); ?>" class="current"><?php echo ($prodir["title"]); ?></a>
  <select name="styleid" id="styleid">
  <option value="0">全部</option>
  <?php if(is_array($style)): $i = 0; $__LIST__ = $style;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$value): $mod = ($i % 2 );++$i;?><option value="<?php echo ($value["guid"]); ?>" <?php if($value['guid'] == $styleid): ?>selected="selected"<?php endif; ?>><?php echo ($value["title"]); ?></option><?php endforeach; endif; else: echo "" ;endif; ?>
  </select>

  <select name="functionid" id="functionid">
  <option value="0">全部</option>
  <?php if(is_array($function)): $i = 0; $__LIST__ = $function;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$value): $mod = ($i % 2 );++$i;?><option value="<?php echo ($value["guid"]); ?>" <?php if($value['guid'] == $functionid): ?>selected="selected"<?php endif; ?>><?php echo ($value["title"]); ?></option><?php endforeach; endif; else: echo "" ;endif; ?>
  </select>

  <select name="spacestyleid" id="spacestyleid">
  <option value="0">全部</option>
  <?php if(is_array($spacestyle)): $i = 0; $__LIST__ = $spacestyle;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$value): $mod = ($i % 2 );++$i;?><option value="<?php echo ($value["guid"]); ?>" <?php if($value['guid'] == $spacestyleid): ?>selected="selected"<?php endif; ?>><?php echo ($value["title"]); ?></option><?php endforeach; endif; else: echo "" ;endif; ?>
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
                  <th>材质</th>
                  <th>厚度</th>
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
                    <?php $find=M('style')->where('guid="'.$value['styleid'].'"')->find();?>
                    <td style="text-align:center;"><?php echo ($find["title"]); ?></td>
                    <?php $find=M('function')->where('guid="'.$value['functionid'].'"')->find();?>
                    <td style="text-align:center;"><?php echo ($find["title"]); ?></td>
                    <?php $find=M('spacestyle')->where('guid="'.$value['spacestyleid'].'"')->find();?>
                    <td style="text-align:center;"><?php echo ($find["title"]); ?></td>
                    <td><?php echo ($value["hot"]); ?></td>
                    <td><?php if($value['status'] == 0): ?>否<?php else: ?><font style="color:#f00;">是</font><?php endif; ?></td>
                    <td style="text-align:center;"><a class="hrefa" href="__URL__/edit/guid/<?php echo ($value["guid"]); ?>">修改</a></td>
                  </tr><?php endforeach; endif; else: echo "" ;endif; ?>
              </tbody>
            </table>
            <div class="ui-widget-header">
              <div class="dataTables_filter">
              <span>系列:</span>
              <select name="pid"><?php echo ($prolist); ?></select>
              <a href="__URL__/add/pid/<?php echo ($prodir["guid"]); ?>">添加产品</a>
              <input type="button" value="显示" name="delete" onclick="if(getSelect(this.form)){this.form.action='__URL__/statusshow';this.form.submit();}" class="btn">
              <input type="button" value="隐藏" name="delete" onclick="if(getSelect(this.form)){this.form.action='__URL__/statushidden';this.form.submit();}" class="btn">
                <input type="button" value="排序" name="delete" onclick="if(getSelect(this.form)){this.form.action='__URL__/sort';this.form.submit();}" class="btn">
                <input type="button" value="移动" name="move" onclick="if(getSelect(this.form) && confirm('确实要移动到其他系列吗?')){this.form.action='__URL__/move';this.form.submit();}" class="btn">
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