<?php
//$config = require("config.php");
return $array = array(
    'DB_HOST'    => 'localhost',
    'DB_NAME'    => 'csdz',	    //数据库名
    'DB_USER'    => 'root',	    //访问数据库账号
    'DB_PWD'     => '',       //访问数据库密码
    'DB_PREFIX'  => 'app_',	    //表前缀
    'SET'  =>'utf8',
    'DEFAULT_MODULE'     => 'Index', //默认模块
    'URL_MODEL'          => '1', //URL模式
    'URL_CASE_INSENSITIVE'  => true,   // 默认false 表示URL区分大小写 true则表示不区分大小写
    'SESSION_AUTO_START' => true, //是否开启session
    'TMPL_L_DELIM'=>'<{',
    'TMPL_R_DELIM'=>'}>',
    'URL_HTML_SUFFIX'=>'.html',
    'BASE_URL'  =>'http://module.com/manage/',//网站WEB地址
    'NBASE_URL' => 'http://module.com/',
);
//return array_merge($config,$array);
?>