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
    <li class="nav-li submenu"> <a href="#"><span class="icon-chevron-down"></span><span>设置</span></a>
      <ul>
        <?php if(session('?isadmin') && session('uid')=='1'){ ?>
          <li><a href="__APP__/Dir/index/groupid/<?php echo ($group["guid"]); ?>">栏目设置</a></li>
          <li><a href="__APP__/Model/index/groupid/<?php echo ($group["guid"]); ?>">首页视频上传</a></li>
        <?php }?>
      </ul>
    </li>
    <li class="nav-li submenu"> <a href="__APP__/Code/index/groupid/<?php echo ($group["guid"]); ?>"><span class="icon-chevron-down"></span><span>账号管理</span></a>
    <li class="nav-li submenu"> <a href="#"><span class="icon-chevron-down"></span><span>栏目素材管理</span></a>
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
      <div class="widget-box">
        <div class="widget-title"> <span class="icon"> <i class="icon-align-justify"></i> </span>
          <h5>添加栏目</h5>
        </div>
        <form action="__URL__/submit_add" name="form" method="post" enctype="application/x-www-form-urlencoded" class="form-horizontal">
          <div class="widget-content nopadding">
            <div class="control-group">
              <label class="control-label">标题:</label>
              <div class="controls">
                <input type="text" class="span11" size="200" placeholder="标题" name="title">
              </div>
            </div>
            <?php if(session('uid')=='1'){?>
            <div class="control-group">
            <label class="control-label">所属栏目:</label>
            <div class="controls">
            <select name="pid" class="span11">
            <option value="0">请选择</option>
            <?php echo ($dirlist); ?>
            </select>
            </div>
            </div>
            <div class="control-group">
              <label class="control-label">是否锁定:</label>
              <div class="controls">
                <input name="locked" type="radio" value="0" checked="checked">否
                <input name="locked" type="radio" value="1">是
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">能否添加子栏目:</label>
              <div class="controls">
                <input name="isadd" type="radio" value="0" checked="checked">能
                <input name="isadd" type="radio" value="1">不能
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">能否添加内容:</label>
              <div class="controls">
                <input name="isaddc" type="radio" value="0" checked="checked">能
                <input name="isaddc" type="radio" value="1">不能
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">显示模版:</label>
              <div class="controls">
                <select name="show_model" class="span11">
                  <?php echo ($show_model); ?>
                </select>
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">添加模版:</label>
              <div class="controls">
                <select name="add_model" class="span11">
                  <?php echo ($add_model); ?>
                </select>
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">修改模版:</label>
              <div class="controls">
                <select name="edit_model" class="span11">
                  <?php echo ($edit_model); ?>
                </select>
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">绑定内容模版:</label>
              <div class="controls">
                <select name="mid" class="span11">
                  <?php if(is_array($model)): $i = 0; $__LIST__ = $model;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$value): $mod = ($i % 2 );++$i;?><option value="<?php echo ($value["guid"]); ?>"><?php echo ($value["title"]); ?></option><?php endforeach; endif; else: echo "" ;endif; ?>
                </select>
              </div>
            </div>
            <?php }else{?>
            <input type="hidden" name="pid" value="<?php echo ($pid); ?>">
            <input type="hidden" name="show_model" value="<?php echo ($pid); ?>">
            <input type="hidden" name="add_model" value="<?php echo ($pid); ?>">
            <input type="hidden" name="edit_model" value="<?php echo ($pid); ?>">
            <input type="hidden" name="mid" value="<?php echo ($pid); ?>">
            <?php }?>
            <div class="control-group">
              <label class="control-label">大图:</label>
              <div class="controls">
                <input type="text" class="span11" id="oneimg_value" size="70" name="oneimg">
                <a id="oneimg" href="#" class="btn btn-success">预览</a>
                <input id="oneimg_upload" type="file" class="span11" size="30" name="oneimg_upload">
                <input type="button" name="submit" class="btn btn-success" value=" 上传 " onclick="return ajaxFileUpload('__APP__/Index/upload/name/oneimg/file/oneimg_upload/groupid/<?php echo ($group["guid"]); ?>','oneimg','oneimg_upload');">
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">小图:</label>
              <div class="controls">
                <input type="text" class="span11" id="twoimg_value" size="70" name="twoimg">
                <a id="twoimg" href="#" class="btn btn-success">预览</a>
                <input id="twoimg_upload" type="file" class="span11" size="30" name="twoimg_upload">
                <input type="button" name="submit" class="btn btn-success" value=" 上传 " onclick="return ajaxFileUpload('__APP__/Index/upload/name/twoimg/file/twoimg_upload/groupid/<?php echo ($group["guid"]); ?>','twoimg','twoimg_upload');">
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">摘要:</label>
              <div class="controls">
                <textarea class="span11" rows="5" cols="100" name="content"></textarea>
              </div>
            </div>
            <div class="form-actions">
              <input type="hidden" name="groupid" value="<?php echo ($group["guid"]); ?>">
              <button type="submit" class="btn btn-success">保存</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</body></html>