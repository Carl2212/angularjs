<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
<title>后台管理系统</title>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" href="/Public/Style/login.css" />
</head>
<body>
<script type="text/javascript" src="/Public/Script/jquery.min.js"></script>
<div id="logo"><img src="/Public/image/logo.png"></div>
<div id="loginbox">
  <form id="loginform" class="form-vertical" action="" />
  <p></p>
  <div class="control-group">
    <div class="controls">
      <div class="input-prepend"> <span class="icon-user"></span>
        <input type="text" name="username" placeholder="帐号" />
      </div>
    </div>
  </div>
  <div class="control-group">
    <div class="controls">
      <div class="input-prepend"> <span class="icon-lock"></span>
        <input type="password" name="password" placeholder="密码" />
      </div>
    </div>
  </div>
  <div class="form-actions"> <span class="pull-right">
    <input type="submit" class="btn btn-inverse" value="登录" />
    </span> </div>
  </form>
</div>
<script type="text/javascript">
$(function(){
	$("#loginform").submit(function(){
		if($(this).find('input[name=username]').val().length<1){
			$("#loginbox p").html('请填写帐号!');
			return false;
		}else if($(this).find('input[name=password]').val().length<1){
			$("#loginbox p").html('请填写密码!');
			return false;
		}else{
			$.ajax({
				url: '__URL__/code_login',
				data: $('#loginform').serialize(),
				type: "post",
				success: function(data) {
					if(data!='error')
					window.location.href=data;
					else
					$("#loginbox p").html('请填写正确的帐号和密码!');
				}
			});
			return false;
		}
	})
})
</script>
</body>
</html>