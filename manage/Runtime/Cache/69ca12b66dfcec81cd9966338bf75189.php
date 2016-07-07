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
  <div id="breadcrumb"> <a href="__APP__/Index/"><i class="icon-home"></i>项目管理</a></div>
  <div class="container-fluid">
    <div class="row-fluid">
      <?php if($_SESSION['error']!= ''): ?><div class="alert alert-block"> <a class="close" data-dismiss="alert" href="#">×</a><?php echo (session('error')); ?></div><?php endif; ?>
      <form action="" name="form" method="post" enctype="application/x-www-form-urlencoded" class="form-horizontal">
        <div class="widget-box">
          <div class="widget-content">
            <table>
              <thead>
                <tr role="row">
                  <th>项目名称</th>
                  <th>模版</th>
                  <th>会员数量</th>
                  <th>验证码数量</th>
                  <th>是否锁定</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody role="alert" aria-live="polite" aria-relevant="all">
                <?php if(is_array($lists)): $i = 0; $__LIST__ = $lists;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$value): $mod = ($i % 2 );++$i;?><tr align="center">
                    <td><?php echo ($value["title"]); ?></td>
                    <td><?php echo ($value["model"]); ?></td>
                    <td><?php echo M('member')->where('groupid="'.$value['guid'].'"')->count();?></td>
                    <td><?php echo M('code')->where('groupid="'.$value['guid'].'"')->count();?></td>
                    <td><?php if($value['locked'] == 0): ?>否<?php else: ?><font style="color:#f00;">是</font><?php endif; ?></td>
                    <td>
                    <?php if($_SESSION['uid']== 1 || $value['locked'] != 1): if($_SESSION['uid']== 1): ?><a class="hrefa" href="__URL__/backup/guid/<?php echo ($value["guid"]); ?>">备份项目</a>
                    <a class="hrefa" href="__URL__/edit/guid/<?php echo ($value["guid"]); ?>">修改</a>
                    <a class="hrefa" onclick="return confirm('确实要删除吗?')" href="__URL__/delete/guid/<?php echo ($value["guid"]); ?>">删除</a>
                    <?php if($value['locked'] == 0): ?><a class="hrefa" href="__URL__/lock/guid/<?php echo ($value["guid"]); ?>" onclick="return confirm('确实要锁定吗?')" >锁定</a>
                    <?php else: ?>
                    <a class="hrefa" href="__URL__/unlock/guid/<?php echo ($value["guid"]); ?>" onclick="return confirm('确实要解锁吗?')" >解锁</a><?php endif; ?>
                    <a class="hrefa" href="/items/index.php/Index/index/groupid/<?php echo ($value["guid"]); ?>" target="_break">进入项目管理</a><?php endif; ?>
                    <a class="hrefa" href="__APP__/Code/index/groupid/<?php echo ($value["guid"]); ?>">验证码管理</a>
                    <a class="hrefa" href="__APP__/Member/index/groupid/<?php echo ($value["guid"]); ?>">会员管理</a><?php endif; ?>
                    </td>
                  </tr><?php endforeach; endif; else: echo "" ;endif; ?>
              </tbody>
            </table>
            <?php if($_SESSION['uid']== 1): ?><div class="ui-widget-header">
              <div class="dataTables_filter">
                <a href="__URL__/add/">添加</a>
              </div>
            </div><?php endif; ?>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</body></html>