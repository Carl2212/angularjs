//简体中文
if($.timepicker){
	(function($) {
		$.timepicker.regional['zh-CN'] = {
			timeOnlyTitle: '选择时间',
			timeText: '时间',
			hourText: '小时',
			minuteText: '分钟',
			secondText: '秒钟',
			currentText: '现在时间',
			closeText: '关闭',
			timeFormat: 'HH:mm',
			amNames: ['AM', 'A'],
			pmNames: ['PM', 'P'],
			monthNames: ['一月','二月','三月','四月','五月','六月', '七月','八月','九月','十月','十一月','十二月'],
			dayNamesMin: ['日','一','二','三','四','五','六'], 
			prevText: '←',
			nextText: '→', 
			isRTL: false
		};
		$.timepicker.setDefaults($.timepicker.regional['zh-CN']);
	})(jQuery);
}

if($.datepicker){
	(function($) {
		$.datepicker.regional['zh-CN'] = {
			timeOnlyTitle: '选择时间',
			timeText: '时间',
			hourText: '小时',
			minuteText: '分钟',
			secondText: '秒钟',
			currentText: '现在时间',
			closeText: '关闭',
			timeFormat: 'HH:mm',
			amNames: ['AM', 'A'],
			pmNames: ['PM', 'P'],
			monthNames: ['一月','二月','三月','四月','五月','六月', '七月','八月','九月','十月','十一月','十二月'],
			dayNamesMin: ['日','一','二','三','四','五','六'], 
			prevText: '←',
			nextText: '→', 
			isRTL: false
		};
		$.datepicker.setDefaults($.datepicker.regional['zh-CN']);
	})(jQuery);
}


var lang={
	'labOpensound':'打开关闭声音',
	'isoLab':'ISO模式',
	'iso0':'正常',
	'iso1':'增强',
		
	'setSlideTips2':'请将值设置在0-100之间。',
	'sound':'音频',
	'soundOption':'音频配置',
	'openSound':'打开音频',
	'inSound':'音频输入',
	'inSound0':'Mic输入',
	'inCount':'输入音量',
		
	'p2pState':'是否在线',
	'p2pSuccess':'在线',
	'p2pFailure':'离线',
		
	'tipsLog':'日志导出',
	'logPaht':'日志导出保存路径',
		
	'sensorLinear0':'关闭',
	'sensorLinear1':'自动',
	'sensorLinear2':'弱',
	'sensorLinear3':'适中',
	'sensorLinear4':'强',
	'sensorLinear5':'超强',
		
	'emptyTips':'数据项不能设置空值!设置失败。',
	'osdTextTips':'中文只能输入15个字符',
	'portTips':'端口只能设置在0-65535之间',
	'vedioFileBag':'录像打包大小',
	'inTips':'在',
	'formatErr':'格式错误',
	'optionsLoading':'配置中，请稍等',
		
	//登录页面
	'login':'登录',
	'userName':'用户名',
	'pwd':'密码',
	'setLang':'语言选择',
	'remenberPwd':'记住密码',
	'loginBtn':'登录',
	'alertLoginErr':'登录失败，检查你的账户与密码是否出错。',
	
	//框架页面
	'realTime':'实时预览',
	'options':'配置',
	'exit':'注销',
	'exitTips':'是否注销?',
	'help' : '帮助',
	
	//实时预览
	'setPic':'截图',
	'fd':'放大',
	'play':'播放',
	'stop':'停止',
	'starRecord':'开始录像',
	'endRecord':'结束录像',
	'mainStream':'主码流',
	'childStream':'子码流',
	
	//日志查询页面
	'logNum':'序号',
	'logTime':'时间',
	'logDetail':'详细信息',
	'beginTime':'开始时间',
	'endTime':'结束时间',
	'search':'查找',
	'setEmpty':'清空',
	'setTimeTips1':'请选择查询的开始和结束时间！',
	//'setTimeTips2':'结束时间必须大于开始时间！',
	'setTimeTips2':'时间格式错误！',
	
	//配置   菜单
	'system':'系统',
	'channel':'通道',
	'video':'录像',
	'systemSet':'维护',

	//系统子项
	'baseOptions':'普通设置',
	'localNet':'网络设置',
	'userControl':'用户管理',
	'default_email' : 'SMTP设置',
	'default_ftp' : 'FTP',
	'default_ddns' : 'DDNS设置',
	'default_p2p' : 'P2P设置',
	'default_upnp' :'Upnp',
	'default_cloud' : '云存储',
	'default_pppoe' :'PPPOE',


	//通道子项
	'channel_setting':'通道设置',
	'default_encode':'编码设置',
	'motionDetecting':'移动侦测',

	//录像
	'playback':'录像回放',
	'default_record':'录像设置',


	//维护
	'optiondefault':'恢复默认',
	'default_disk' :'磁盘管理',
	'default_device':'设备管理',
	'setTimeRestart':'自动维护',
	'optionstorage':'存储',
	'optionexception':'异常',
	'optionverinfo':'版本',
	'optionloginfo':'日志查询',



	'default_common':'常规设置',
	'default_net':'网络设置',
	'default_motion':'视频检测',
	'default_display':'显示设置',
	'default_liveview':'预览配置',



	'localOptions':'本地配置',


	'image':'图像',
	'safety':'安全',
	'advanced':'高级配置',
	'event':'事件',

	//本地配置-本地配置
	'playParam':'播放参数',
	'protocolType':'协议类型',
	'playProperty':'播放性能',
	'propertyFirst':'性能优先',
	'realFirst':'实时性好',
	'blance':'匀衡',
	'speedFirst':'流畅性好',
	'imageType':'抓图文件格式',
	'vedioFiles':'录像文件',
	'bagSizes':'录像文件打包大小',
	'vedioPath':'录像文件保存路径',
	'playbackPath':'回放剪辑和下载保存路径',
	'imgAndClip':'抓图和剪辑',
	'previewImgPath':'预览抓图保存路径',
	'playbackImgPath':'回放抓图保存路径',
	'playbackClipPath':'回放剪辑保存路径',
	



	//基本配置－系统

	'deviceInfo':'设备信息',
	'timeOption':'时间设置',
	
	'baseInfo':'基本信息',
	'deviceName':'设备名称',
	'hardwareVer':'硬件版本',
	'softwareVer':'软件版本',

	
	'timeZone':'时区',
	'checkTime':'校时',
	'deviceTime':'设备时间',
	'NTPCheckTime':'从ntp接收日期/时间',
	'SNTPServer':'NTP服务器',
	'handCheck':'手动设置日期/时间',
	'setTime':'设置时间',
	'sameOfPC':'与计算机同步',
	'PCTime':'计算机时间',
	'checNvr':'禁止NVR修改IPC时间',
	
	'deviceRestart':'重启',
	'restartDevice':'重启设备',
	'setDefaultTips':'恢复出厂设置',
	'setDefaultTips1':' 完全恢复设备参数到出厂设置。',
	'upgrade':'升级',
	'upgradeFile':'升级文件',
	'upgradeProgress':'升级进度',
	'explain':'说明',
	'explainTips':'升级过程需要1-10分钟，请不要关闭电源，完成升级后将自动重启',
	
	'confirmRestart':'确认重启设备?',
	'confirmSetDefault':'确认恢复出厂设置?',
	'upgradeTips':'设备升级时会有进度条提示，在未提示升级完成时，请不要做任何操作。是否确认升级？',
	'upgradeError1':'没有选择升级包，升级中断。',
	'upgradeError2':'升级失败!',
	'upgradeError3':'升级失败,错误：',
	'confirmCheckTime':'确认校正时间?',
	'setDate':'请设置日期。',
	'setSNTPTips':'请选择SNTP服务器。',
	
	
	
	//基本配置本地-网络
	'port':'端口',
	'networkSet':'网卡参数配置',
	'enableDHCP':'开启DHCP',
	'IPAddr':'IP地址',
	'subnetMask':'子网掩码',
	'gateway':'网关',
	'DNSServerOpt':'DNS服务器配置',
	'defaultDNS':'首选DNS',
	'HTTPport':'HTTP端口',
	'portError':'HTTP端口有效值为80或1025至65534。',


	
	
	//基本配置本地-视频
	'veido':'视频',
	'streamType':'码流类型',
	'oneCodeStream':'单码流',
	'twoCodeStream':'双码流',
	'codeType':'编码模式',
	'codeStream':'码流',
	'frame':'帧率',
	'bit':'比特率',
	'bitrateType':'码率',
	'bitrateType0':'定码率',
	'bitrateType1':'变码率',
	'iFrame':'i帧间隔',
	'noSetCn':'禁止输入中文!',
	'deviceNameTips':'设备名称最多31个字符,且只能由数字、字母和下划线组成!',
	'bitTips':'比特率范围为64-12000!',
	
	
	//基本配置本地-显示设置
	'displayOptions':'显示设置',
	'imgSet':'图像调节',
	'brightness':'亮度',
	'contrast':'对比度',
	'saturtion':'饱和度',
	'sharpness':'锐度',
	
	'ircutFilterTime':'Ircut转换时间',
	'ircutMode':'Ircut模式',
	'ircutMode0':'LDR自动',
	'ircutMode1':'视频自动',
	'ircutMode2':'彩色模式',
	'ircutMode3':'黑白模式',
	
	'ae':'曝光',
	'aeMode':'曝光模式',
	'auto':'自动',
	'hand':'手动',
	'shutter':'电子快门',
	
	'backlight':'背光',
	'backlightIn':'背光补偿',
	'close':'关',
	'open':'开',
	'backlightNum':'背光量',
	'small':'最小',
	'middle':'中等',
	'big':'最大',
	'gainControl':'增益调节',
	
	'whiteBalance':'白平衡',
	'redGain':'红色增益',
	'greenGain':'绿色增益',
	'blueGain':'蓝色增益',
	
	'vedioSet':'视频调节',
	'dnrModel':'数字降噪',
	'dnrModel0':'关闭',
	'dnrModel1':'数字降噪(2D)',
	'dnrModel2':'数字降噪(3D)',
	'dnrModel3':'全开',
	
	'imgAdd':'图像增强',
	'flickerControl':'闪烁控制',
	'flickerControl0':'室内NTSC',
	'flickerControl1':'室内PAL',
	'flickerControl2':'室外',
	'sensorLinear':'宽动态开关',
	
	'defog':'去雾',
	'defogModel':'去雾模式',
	'defogNum':'去雾强度',
	'setSlideTips':'请将值设置在0-255之间。',
	
	
	
	//基本配置本地-安全
	'user':'用户',
	'right':'权限',
	'eidt':'编辑',
	'del':'删除',
	'adduser':'用户添加',
	'admin':'管理员',
	'handler':'操作者',
	'userEdit':'用户编辑',
	'userType':'用户类型',
	'confirmPwd':'确认密码',
	'pwdTips0':'密码最少为1个字符，最多31个字符,且只能由数字、字母和下划线组成!',
	'pwdTips1':'两次密码不一致!',
	'usertips0':'用户达到上限，不能再添加!',
	'usertips1':'用户名最少为1个字符，最多31个字符,且只能由数字、字母和下划线组成!',
	'usertips2':'完成新用户添加。',
	'usertips3':'该用户已存在!',
	'error':'错误',
	
	
	
	
	//高级配置-系统
	'notSet':'从不',
	'weekDay0':'周一',
	'weekDay1':'周二',
	'weekDay2':'周三',
	'weekDay3':'周四',
	'weekDay4':'周五',
	'weekDay5':'周六',
	'weekDay6':'周日',
	'weekDay7':'每天',
	'weekDay8':'每周',
	'weekDay9':'每月',
	'weekDay10':'日',
	'weekDay11':'时',
	'weekDay12':'分',

	
	
	
	
	//高级配置-本地网络
	'other':'其它',
	'ddnsType':'DDNS类型',
	'peanutShells':'花生壳',
	'domain':'域名',
	'ddnsUser':'DDNS用户',
	'ddnsPwd':'DDNS密码',
	'ddnsState':'DDNS状态',
	'landSuccess':'登录成功',
	'serverType':'服务类型',
	'serverTypeName':'普通用户',
	'serverLink':'服务商链接',
	
	'ftpServer':'FTP服务器',
	'savePath':'存储路径',
	
	'sendUser':'发件人',
	'sendAddr':'发件地址',
	'smtpServer':'SMTP服务器',
	'checkInfo':'开启邮件报警通知',
	'reviewUser':'收件人',
	'reviewAddr':'收件地址',
	'vedioCheckPwd':'视频密码认证使能',
	'loginFailed':'登录失败',
	'loginSuccess':'登录成功',
	'logining':'登录中',


	//云存储
	'cloudstoragetype':'云存储类型',
	'web':'云网站',
	'authcode':'验证码',
	'totalcapacity':'总容量',
	'usedcapacity':'已使用',
	'bound':'已绑定',
	'unbound':'未绑定',
	'binding':'绑定',
	'unbind':'解绑',
	'cloudtest' :'测试',
	'uploadpath' : '上传目录',
	
	
	//高级配置-图像
	'osdOpt':'OSD设置',
	'showTime':'显示时间',
	'showText':'显示文本',
	'dateFormat':'日期格式',
	'date0':'日/月/年',
	'date1':'月/日/年',
	'date2':'年/月/日',
	'osdPosition':'OSD位置',
	'pos0':'左上',
	'pos1':'左下',
	'osdText':'OSD文本',
	'mirror':'镜像',
	'mirror1':'垂直',
	'mirror2':'水平',
	'mirror3':'水平和垂直',
	'aisleMode':'走廊模式',
	'setOn':'开启',
	'RotateAngle90':'旋转90度',
	'RotateAngle270':'旋转270度',
	'osdTips':'"OSD文本"不能设置为空!!',
	
	
	
	//高级配置-事件
	'privacyMasking':'隐私遮挡',
	'alarmSet':'报警设置',
	
	'optMode':'配置模式',
	'sensitivity':'灵敏度',
	'selAll':'选择所有',
	'clearAll':'清除所有',
	
	'maskTips':'提示：最多只能绘制3个区域',
	'area1':'区域1',
	'area2':'区域2',
	'area3':'区域3',
	'NoRoiArea':'非ROI区域帧率',
	'QpRelative':'相对QP值',
	'QpAbsolute':'绝对QP值',
	
	'openAlarm':'开启报警',
	'tillTime':'持续时间',
	'tillTime0':'10秒',
	'tillTime1':'30秒',
	'tillTime2':'1分钟',
	'tillTime3':'5分钟',
	'tillTime4':'10分钟',
	'tillTime5':'一直有效',
	
	'triggerAlarm':'报警触发',
	'alarmAction':'报警联动',
	'uploadFtp':'上传FTP',
	'fileType':'文件格式',
	'uploadSmtp':'上传SMTP',
	'uploadCloud':'上传云端',
	
	
	
	//时区表
	'GMT0':'GMT-12 埃尼威托克岛,夸贾林环礁',
	'GMT1':'GMT-11.5',
	'GMT2':'GMT-11 中途岛, 萨摩亚',
	'GMT3':'GMT-10.5',
	'GMT4':'GMT-10 夏威夷',
	'GMT5':'GMT-9.5',
	'GMT6':'GMT-09 阿拉斯加',
	'GMT7':'GMT-8.5',
	'GMT8':'GMT-08 太平洋时间(美国和加拿大),蒂华纳',
	'GMT9':'GMT-7.5',
	'GMT10':'GMT-07 山地时间(美国和加拿大),亚利桑那州',
	'GMT11':'GMT-6.5',
	'GMT12':'GMT-06 中部时间(美国和加拿大), 墨西哥城,特古西加尔巴,萨斯喀彻温',
	'GMT13':'GMT-5.5',
	'GMT14':'GMT-05 东部时间(美国和加拿大),印第安纳(东部),波哥大,利马',
	'GMT15':'GMT-4.5',
	'GMT16':'GMT-04 大西洋时间(加拿大),加拉加斯,拉巴斯',
	'GMT17':'GMT-3.5',
	'GMT18':'GMT-03 巴西利亚,布宜诺斯艾利斯,乔治敦',
	'GMT19':'GMT-2.5',
	'GMT20':'GMT-02 中大西洋',
	'GMT21':'GMT-1.5',
	'GMT22':'GMT-01 亚速尔群岛,佛得角群岛',
	'GMT23':'GMT-0.5',
	'GMT24':'GMT+00 都柏林,爱丁堡,伦敦,里斯本,蒙罗维亚,卡萨布兰卡',
	'GMT25':'GMT+0.5',
	'GMT26':'GMT+01 柏林,斯德哥尔摩,罗马,伯尔尼,布鲁塞尔,维也纳,巴黎,马德里,阿姆斯特丹,布拉格,华沙,布达佩斯',
	'GMT27':'GMT+1.5',
	'GMT28':'GMT+02 雅典,赫尔辛基,伊斯坦布尔,开罗,东欧,哈拉雷,比勒陀利亚,以色列',
	'GMT29':'GMT+2.5',
	'GMT30':'GMT+03 巴格达,科威特,内罗毕,利雅得,莫斯科,圣彼得堡,喀山,伏尔加格勒',
	'GMT31':'GMT+3.5',
	'GMT32':'GMT+04 阿布扎比,马斯喀特,第比利斯',
	'GMT33':'GMT+4.5',
	'GMT34':'GMT+05 伊斯兰堡,卡拉奇,叶卡捷琳堡,塔什干',
	'GMT35':'GMT+5.5',
	'GMT36':'GMT+06 阿拉木图,达卡',
	'GMT37':'GMT+6.5',
	'GMT38':'GMT+07 曼谷,雅加达,河内',
	'GMT39':'GMT+7.5',
	'GMT40':'GMT+08 台北,北京,重庆,乌鲁木齐,香港,珀斯,新加坡',
	'GMT41':'GMT+8.5',
	'GMT42':'GMT+09 东京,大阪,札幌,汉城,雅库茨克',
	'GMT43':'GMT+9.5',
	'GMT44':'GMT+10 布里斯班,墨尔本,悉尼,关岛,莫尔兹比港,符拉迪沃斯托克,霍巴特',
	'GMT45':'GMT+10.5',
	'GMT46':'GMT+11 马加丹,所罗门群岛,新喀里多尼亚',
	'GMT47':'GMT+11.5',
	'GMT48':'GMT+12 斐济,堪察加半岛,马绍尔群岛,惠灵顿,奥克兰',
		
	//一些通用按钮与提示
	'save':'保存',
	'browse':'浏览',
	'saved':'已保存。',
	'savedfail':'保存失败!',
	'confirmSave':'确认保存?',
	'confirmDel':'确认删除?',
	'setDefault':'恢复默认值',
	'confirm':'确认',
	'cancel':'取消',

	//add [20151218]

	'logtype':'类型',
	'logall':'全部日志',
	'systemlog':'系统管理',
	'userlog':'用户管理',
	'paramconfiglog':'参数配置',
	'fileoperlog':'文件操作',
	'statusproplog':'状态提示',
	'alarmEventlog':'报警事件',
	'lognologtip':'此时间段无日志',
	'logPath':'日志保存路径',

	//系统管理
	'logopendevie':'开机',
	'logclosedevice':'关机',
	'logrestartdevice':'重启',
	'logsystemypdate':'系统升级',
	'logrestore':'恢复出厂设置',

	//用户管理
	'loglogin':'登录',
	'loglogout':'注销',
	'logadduer':'添加用户',
	'logdeleteuer':'删除用户',
	'logmodifyuser':'修改用户',
	'logadduergroup':'添加用户组',
	'logdeleteusergroup':'删除用户组',
	'logmodifyusergrop':'修改用户组',

	//参数配置
	'logcommcfg':'保存普通配置',
	'logrescom':'普通配置恢复默认',
	'logencode':'保存编码配置',
	'logresencode':'编码配置恢复默认',
	'logrecordvideo':'保存录像配置',
	'logresrecord':'录像配置恢复默认',
	'lognet':'保存网络配置',
	'logresnet':'网络配置恢复默认',
	'logalarm':'保存报警配置',
	'logresalarm':'报警配置默认',
	'logmotiondet':'保存配置移动侦测',
	'logresmotiondet':'移动侦测',
	'logcruise':'保存巡航配置',
	'logrescruise':'巡航配置恢复默认',
	'logoutputmode':'保存配置输出模式',
	'logresoutputmode':'输出模式恢复默认',
	'logchannel':'保存通道配置',
	'logreschannel':'通道配置恢复默认',
	'logimagecol':'保存图像颜色配置',
	'logresimagecol':'图像颜色恢复默认',
	'logpreview':'保存预览配置',
	'logrespreview':'预览配置恢复默认',
	'logresusercfg':'用户配置恢复默认',
	'logsen':'保存传感器配置',
	'logressen':'传感器配置恢复默认',
	'logddns':'保存DDNS配置',
	'logsmtp':'保存SMTP配置',
	'logcloud':'保存云端配置',
	'logupnp':'保存UPNP配置',
	'logserial':'串口参数恢复默认',

	//文件操作
	'logup':'文件上传',
	'logdown':'文件下载',
	'logdiskformat':'格式化硬盘',
	'logdiskread':'修改硬盘为可读写',
	'logdiskwrite':'修改硬盘为只读',
	'logvideobackup':'录像备份',

	//状态提示
	'logntp':'NTP同步',
	'logopendefend':'开启自动维护',
	'logclosedefend':'关闭自动维护',
	'logopenvidereca':'开启录像',
	'logclosevideoreca':'关闭录像',
	'logopenvideorecm':'开启录像',
	'logclosevideorecm':'关闭录像',
	'logopenvideoreco':'开启全天录像',
	'logclosevideoreco':'关闭全天录像',
	'logopendhcp':'开启DHCP',
	'logmcfgnet':'手动设置网络',
	'logomovedec':'开启移动侦测',
	'logcmovedec':'关闭移动侦测',
	'logobuzzer':'联动蜂鸣器',
	'logcbuzzer':'取消联动蜂鸣器',
	'logolinkagerrec':'联动录像通道',
	'logclinkagerec':'取消联动录像通道',
	'logosenalarm':'开启传感器告警',
	'logcsenalarm':'关闭传感器告警',
	'logoruise':'开启通道巡航',
	'logcruise':'关闭通道巡航',
	"logaddcruise":'添加巡航点',
	'logdelcruise':'删除巡航点',
	'logoscan':'开启自动扫描',
	'logcscan':'关闭自动扫描',
	'logoddns':'开启DDNS',
	'logoupnp':'开启UPNP',
	'logcupnp':'关闭UPNP',
	'logop2p':'开启P2P',
	'logcp2p':'关闭P2P',
	'logosmtp':'开启SMTP',
	'logcsmtp':'关闭SMTP',
	'logosound':'开启声音',
	'logcsound':'静音',

	//告警事件
	'lognodisk':'无硬盘',
	'logdiskfmtfail':'硬盘格式化失败',
	'logdiskfmfok':'硬盘格式化成功',
	'logdiskexc':'硬盘异常',
	'logdiskspace':'硬盘空间不足',
	'loggetencodefail':'编码参数获取失败',
	'logsaveencodefail':'编码参数保存失败',
	'logencodeexc':'编码参数异常',
	'logdelalllog':'删除全部日志',
	'logrecerdexc':'录像文件异常',
	'logdisconnect':'网络连接断开',
	'logconnetok':'网络连接正常',
	'logipclash':'IP地址冲突',
	'logmacclash':'MAC地址冲突',
	'logddnsfail':'DDNS连接失败',
	'logddnsok':'DDNS连接成功',
	'logntpupdatefail':'NTP更新失败',
	'logntpupdateok':'NTP更新成功',
	'logupnpfail':'UPNP映射失败',
	'logupnpok':'UPNP映射成功',
	'logemailsendfail':'邮件发送失败',
	'logemailsendok':'邮件发送成功',
	'logp2pconnectfail':'P2P连接失败',
	'logp2pconnectok':'P2P连接正常',
	'logfileupfail':'文件上传失败',
	'logfileupok':'文件上传成功',
	'logfiledownfail':'文件下载失败',
	'logfiledownok':'文件下载成功',
	'logsenalarm':'传感器告警',
	'logvideolost':'视频丢失',
	'logfilebackupfail':'文件备份失败',
	'logunfinddev':'未发现远程设备',
	'lognoptz':'无云台设备',

	'datetime':'Date/Time',
	'ntppoty':'NTP端口',
	'ntpgengxin':'NTP更新间隔(Min)',
	'ntpdateformart':'日期格式',
	'ntpsplit':'日期分隔符',
	'ntptimeformat':'时间格式',
	'ntpdate0':'年 月 日',
	'ntpdate1':'月 日 年',
	'ntpdate2':'日 月 年',
	'ntphour':'小时',

	'language':'默认语言',
	'recmode':'录像模式',
	'recoverwrite':'覆盖',
	'recdays':'录像天数',
	'recnolimit':'无限制',
	'videostandard':'视频标准',
	'standytime':'待机时间',


	'ddnsenable':'开启DDNS',
	'refreshtime':'刷新时间(sec)',


	'smtpport':'SMTP端口',
	'smtptheme':'主题',
	'smtpinterval':'发送间隔（分）',
	'smtpenctype':'加密类型',
	'smtpfileen':'附件',
	'smtptest':'邮件测试',

	'dns2':'备用DNS',
	'broadcast':'广播地址',
	'MACaddr':"MAC地址",
	'TCPPort':'TCP端口',
	'RTSPPort':'RTSP端口',

	'eventtype':'事件类型',
	'nodisk':'无磁盘',
	'diskerror':'磁盘错误',
	'netnolick':'网络断开',
	'iperror':'IP冲突',
	'exceptionenable':'启动',
	'exdisplay':'屏幕显示',
	'sendemali':'发送邮件',
	'buzzeralarm':'蜂鸣报警',
	'noconnectdisk':'未连接磁盘',


	'default_all':'全部选择',


	'ftpprot':'FTP端口',
	'uploadfile':'文件上传',
	'ftpweek':'星期',
	'ftpallweek':'所有星期',
	'timeschdele':'时间段',
	'recinvalidsce':'时间表无效',

	'buzzeron':'蜂鸣器',
	'buzzertime':'蜂鸣时长（sec）',
	'recchannel':'录像通道',
	'rectime':'录像时长（sec）',
	'motionhighest':'最高',
	'motionhigher':'较高',
	'motionhigh':'高',
	'motionmid':'中',
	'motionlow':'低',
	'motionlower':'较低',
	'motionlowest':'最低',

	'ptzprotocol':'协议',
	'ptzserialnaddr':'地址',
	'ptzserialnbaudrate':'波特率',
	'ptzserialndatabit':'数据位',
	'ptzserialnstopbit':'停止位',
	'ptzserialnchecktype':'校验位',

	'getdevicetype':'产品型号',
	'getsoftwareversion':'版本号',
	'getsoftwaredate':'发布日期',

	'emailtestok':'邮件发送成功',
	'emailtestfail':'邮件发送失败',
	'ftptestok':'FTP发送成功',
	'ftptestfail':'FTP发送失败',

	'openp2p':'开启P2P',

	'playback':'远程回放',

	'diskno':'盘号',
	'diskstatus':'状态',
	'disktotal':'总容量',
	'diskfree':'剩余容量',
	'disktyep':'设备类型',
	'disktip':'注意：格式化后，重启生效',
	'diskformat':'格式化',
	'diskunmount':'未挂载',
	'disknormal':'正常',
	'diskused':'正在使用',
	'diskformattip':'格式化将导致所选中的磁盘中的录像数据丢失，确定要继续吗',

	'remotedel':'删除',
	'remotecfg':'配置',
	'remoteprotol':'协议',

	'deladdedeable':'开启',
	'liveviewstream':'预览码流',
	'allchannel':'全部',

	'recschdule':'录像计划',
	'rectip':'当前设置星期：',
	'recnormal':'普通录像',
	'recmotion':'动态检测',
	'recsun':'星期天',
	"recmon":'星期一',
	"recfeb":'星期二',
	"recwen":'星期三',
	"recthe":'星期四',
	"recfri":'星期五',
	"recsat":'星期六',
	'recyingyong':'应用到：',

	'auvideo':'音视频',
	'resultion':'分辨率',
	'shuaixuan':'筛选',

	'optiondefault':'恢复默认',//恢复默认
	'optionupgrade':'设备升级',//设备升级
	'optionchanconfig':'通道配置',//通道配置
	'optionptzset':'云台设置',//云台设置
	'optionstorage':'存储',//存储
	'optionrecset':'录像设置',//录像设置
	'optiondiskmanage':'硬盘管理',//硬盘管理
	'optionexception':'异常',//异常
	'optioncloud':'云存储',//云存储
	'optionemail':'邮件设置',//邮件设置
	'optionecamera':'摄像头',//异常
	'optionremote':'远程设备',//云存储
	'optionencodeparam':'编码参数',//邮件设置

	'optioninfo':'信息',//邮件设置
	'optionestreaminfo':'码流信息',//异常
	'optionverinfo':'版本信息',//云存储
	'optionloginfo':'日志信息',//邮件设置

	'allplay':'全部开始预览',
	'allstop':'全部停止预览',
	'allrec' :'全部开始录像',

	'ptzcurise':'巡航设置',
	'ptzpath':'路径',//add 2016.06.24
	'ptzpreset':'预置点号',
	'ptzcurisedt':'停留时间',
	'ptcuisesp':'巡航速度',
	'ptzleftup':'左上',

	'ptzup':'上',
	'ptzrightup':'右上',
	'ptzleft':'左',
	'ptzright':'右',
	'ptzleftdown':'左下',
	'ptzdown':'下',
	'ptzrightdown':'右下',

	'ptzzoom':'变倍',
	'ptzfocus':'聚焦',
	'ptziris':'光圈',
	'ptzspeed':'速度',
	'ptzpresetdot':'预置点',
	'ptzcuriseset':'巡航设置',

	'ptzindex':'序号',
	'ptzname':'名称',
	'ptzset':'设置',
	'ptzcall':'调用',
	'ptzdel':'删除',
	'ptzcurisecurise':'巡航',
	'ptzstay':'停留时间',

	'upnpconnected':'已连接',
	'upnpconnectting':'连接中...',
	'upnpportinfo':'端口信息',
	'upnpservername':'服务名',
	'upnpprotocol':'协议',
	'upnpinput':'内部端口',
	'upnpoutput':'外部端口',
	'upnptip1':'不能有相同的内部端口或外部端口',
	'upnptip2':'服务名不能为空',
	'upnptip3':'内部端口和外部端口都不能为零',
	'upnptip4':'内部端口和外部端口都不能为空',
	'upnpinputip':'路由内网IP',
	'upnpoutputip':'外网IP',
	'upnpportmap':'端口映射表',


	//用户管理
	'username' : '用户名',
	'groupname':'组名',
	'remark':'备注',
	'emailopen' :'邮件开启',
	'ftptest' :'测试',
	'upnp_add' :'添加',


	//恢复默认
	'factory_color':'色彩纠正',
	'factory_imgcol':'图像颜色',
	'factory_event':'事件设置',
	'factory_ptz':'ptz设置',
	'factory_autoptz' :'自动巡航',
	'factory_ptzpath' :'巡航线路',
	'factory_datetime' :'日期设置',
	'factory_channel' :'通道设置',
	'factory_user' :'用户设置',



	'uploadfilepath' : '升级文件路径',


	'diskexception' :'磁盘异常',
	'netexception' :'网络异常',




}












