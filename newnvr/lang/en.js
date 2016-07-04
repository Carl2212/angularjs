//英文
if($.timepicker){
	(function($) {
		$.timepicker.regional['zh-CN'] = {
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
			prevText: '←',
			nextText: '→',
			isRTL: false
		};
		$.datepicker.setDefaults($.datepicker.regional['zh-CN']);
	})(jQuery);
}

var lang={
	'labOpensound':'Open Sound Off',
	'isoLab':'ISO mode',
	'iso0':'Normal',
	'iso1':'ISO+',
		
	'setSlideTips2':'Set the value between 0-100',
	'sound':'Audio',
	'soundOption':'Audio Configuration',
	'openSound':'Audio Configuration',
	'inSound':'Audio Input',
	'inSound0':'Mic Input',
	'inCount':'Input Level',
		
	'p2pState':'Connection Status',
	'p2pSuccess':'The connection is successful',
	'p2pFailure':'Connection Failed',
		
	'tipsLog':'Anmelden Export',
	'logPaht':'Log Export save path',
		
	'sensorLinear0':'Shut down',
	'sensorLinear1':'Automatic',
	'sensorLinear2':'Weak',
	'sensorLinear3':'Moderate',
	'sensorLinear4':'Strong',
	'sensorLinear5':'Super',
		
	'emptyTips':'Items can not be set null',
	'osdTextTips':'',
	'portTips':'Port can only be set between 0-65535',
	'vedioFileBag':'Video package size',
	'inTips':'at',
	'formatErr':'Malformed',
	'optionsLoading':'Configuration, please wait',
		
	//登录页面
	'login':'Login',
	'userName':'User Name',
	'pwd':'Password',
	'setLang':'Language',
	'remenberPwd':'Remember Me',
	'loginBtn':'Login',
	'alertLoginErr':'Login failed,Please make sure the user name or password',
	
	//框架页面
	'realTime':'Live Video',
	'logSearch':'Log Search',
	'options':'Config',
	'exit':'Logout',
	'exitTips':'Log out?',
	
	//实时预览
	'setPic':'Screenshot',
	'fd':'Enlarge',
	'play':'Play',
	'stop':'Stop',
	'starRecord':'Start recording',
	'endRecord':'End recording',
	'mainStream':'Main Stream',
	'childStream':'Sub Stream',
	
	//日志查询页面
	'logNum':'ID',
	'logTime':'Time',
	'logDetail':'Detail',
	'beginTime':'Start Time',
	'endTime':'End Time',
	'search':'Search',
	'setEmpty':'Clear',
	'setTimeTips1':'Please select the beginning and end of the query time',
	'setTimeTips2':'The end time must be greater than the start time',
	
	//配置   菜单
	'localOptions':'Local Configuration',
	'baseOptions':'Basic Setup',
	'system':'System',
	'systemOptions':'System Configuration',
	'localNet':'Network',
	'vedio':'Video',
	'image':'Camera',
	'safety':'Security',
	'advanced':'Advance Setup',
	'event':'Events',
	
	
	
	//本地配置-本地配置
	'playParam':'Live View Parameters',
	'protocolType':'Protocol',
	'playProperty':'Live View Performance',
	'propertyFirst':'Shortest Delay',
	'realFirst':'Real Time',
	'blance':'Balanced',
	'speedFirst':'Fluency',
	'imageType':'Image Format',
	'vedioFiles':'Record File Settings',
	'bagSizes':'Record File Size',
	'vedioPath':'Save record files to',
	'playbackPath':'Save downloaded files to',
	'imgAndClip':'Picture and Clip Settings',
	'previewImgPath':'Save snapshots in live view to',
	'playbackImgPath':'Save snapshots when playback to',
	'playbackClipPath':'Save clips to',
	
	
	//基本配置－系统
	'deviceInfo':'Device Information',
	'timeOption':'Set Time',
	'systemSet':'Maintenance',
	
	'baseInfo':'Basic Information',
	'deviceName':'Device Name',
	'hardwareVer':'Firmware Version',
	'softwareVer':'Software Version',
	'channel':'Channel',
	
	'timeZone':'Time Zone',
	'checkTime':'Time Sync.',
	'deviceTime':'Time in Camera',
	'NTPCheckTime':'NTP',
	'SNTPServer':'SNTP Server',
	'handCheck':'Set Manually',
	'setTime':'Set Time',
	'sameOfPC':'Synchronize with computer time',
	'PCTime':'Computer time',
	'checNvr':'NVR prohibit modification IPC Time',
	
	'deviceRestart':'Reboot System',
	'restartDevice':'Reboot',
	'setDefaultTips':'Restore Factory Settings',
	'setDefaultTips1':'Fully restore the device parameters to the factory settings',
	'upgrade':'Upgrade',
	'upgradeFile':'Firmware',
	'upgradeProgress':'Connection status',
	'explain':'Note',
	'explainTips':'The upgrading process will be 1 to 10 minutes, please don\'t disconnect power to the device during the process. The device reboots automatically after upgrading.',
	
	'confirmRestart':'Are you sure reboot the device?',
	'confirmSetDefault':'Are you sure restore factory settings?',
	'upgradeTips':'Will have a progress bar tip equipment upgrades, and did not prompt to upgrade is complete, please don\'t do any action. Whether to confirm upgrade?',
	'upgradeError1':'Please Select File',
	'upgradeError2':'Update failed!',
	'upgradeError3':'Upgrade failed, error:',
	'confirmCheckTime':'Confirm the correction time?',
	'setDate':'Please set the date',
	'setSNTPTips':'Please select the SNTP server',
	
	
	
	//基本配置本地-网络
	'port':'Port',
	'networkSet':'NIC Settings',
	'enableDHCP':'EnableDhcp',
	'IPAddr':'IP Address',
	'subnetMask':'Netmask',
	'gateway':'Default Gateway',
	'DNSServerOpt':'DNS Server',
	'defaultDNS':'Preferred DNS Server',
	'HTTPport':'HTTP Port',
	'portError':'the effective value of HTTP port is 80 or from 1025 to 65534',
	
	
	//基本配置本地-视频
	'veido':'Video',
	'streamType':'StreamType',
	'oneCodeStream':'Single',
	'twoCodeStream':'Dual',
	'codeType':'Codec',
	'codeStream':'stream',
	'frame':'Framerate',
	'bit':'Bit Rate',
	'bitrateType':'Rate Control',
	'bitrateType0':'VBR',
	'bitrateType1':'CBR',
	'iFrame':'I frame interval',
	'noSetCn':'No input Chinese',
	'deviceNameTips':'Device name up to 31 characters, and can only consist of Numbers, letters, and underscores',
	'bitTips':'BitRate1 Should range from 64-12000',
	
	
	//基本配置本地-显示设置
	'displayOptions':'Display Setting',
	'imgSet':'Image Adjustment',
	'brightness':'Brightness',
	'contrast':'Contrast',
	'saturtion':'Saturation',
	'sharpness':'Sharpness',
	
	'ircutFilterTime':'Ircut Filter Time',
	'ircutMode':'Ircut Mode',
	'ircutMode0':'LDR Auto',
	'ircutMode1':'Video Auto',
	'ircutMode2':'Color',
	'ircutMode3':'B/W',
	
	'ae':'Exposure Settings',
	'aeMode':'Exposure Settings',
	'auto':'Auto',
	'hand':'Manual',
	'shutter':'Shutter',
	
	'backlight':'BackLight Settings',
	'backlightIn':'Back Light Compensation',
	'close':'Off',
	'open':'On',
	'backlightNum':'BackLight',
	'small':'Min',
	'middle':'Mid',
	'big':'Max',
	'gainControl':'Gain Control',
	
	'whiteBalance':'White Balance',
	'redGain':'Red Gain',
	'greenGain':'Green Gain',
	'blueGain':'Blue Gain',
	
	'vedioSet':'Video to adjust',
	'dnrModel':'DNR Model',
	'dnrModel0':'OFF',
	'dnrModel1':'2D DNR',
	'dnrModel2':'3D DNR',
	'dnrModel3':'Fully open',
	
	'imgAdd':'Image Enhancement',
	'flickerControl':'Flicker Control',
	'flickerControl0':'Indoor NTSC',
	'flickerControl1':'Indoor PAL',
	'flickerControl2':'Outdoor',
	'sensorLinear':'Sensor Linear WDR',
	
	'defog':'Defog Model',
	'defogModel':'Defog Model',
	'defogNum':'Defog Strength',
	'setSlideTips':'Please set the value between 0-255',
	
	
	
	//基本配置本地-安全
	'userControl':'User',
	'user':'User Name',
	'right':'Authority',
	'eidt':'Edit',
	'del':'Delete',
	'adduser':'Add User',
	'admin':'Admin',
	'handler':'Operator',
	'userEdit':'Edit',
	'userType':'User Type',
	'confirmPwd':'Confirm Password',
	'pwdTips0':'Password should have minimum of 1 characters and maximum of 31 characters',
	'pwdTips1':'Password mismatch',
	'usertips0':'User limit is reached!',
	'usertips1':'User Name Should have minnum of 1 characters and maxnum of 31 characters',
	'usertips2':'Complete the new users to add',
	'usertips3':'The user already exists',
	'error':'Error',
	
	
	
	
	//高级配置-系统
	'setTimeRestart':'Scheduled Reboot',
	'notSet':'Never',
	'weekDay0':'Mon',
	'weekDay1':'Tue',
	'weekDay2':'Wed',
	'weekDay3':'Thu',
	'weekDay4':'Fri',
	'weekDay5':'Sat',
	'weekDay6':'Sun',
	'weekDay7':'Every',
	'weekDay8':'Weekly',
	'weekDay9':'Monthly',
		'weekDay10':'Day',
	'weekDay11':'Hour',
	'weekDay12':'Second',

	
	
	//高级配置-本地网络
	'other':'Other',
	'ddnsType':'DDNS Type',
	'peanutShells':'Oray',
	'domain':'Site Name',
	'ddnsUser':'DDNS Account',
	'ddnsPwd':'DDNS Password',
	'ddnsState':'Connection status',
	'landSuccess':'Login Successful',
	'serverType':'Service Type',
	'serverTypeName':'Ordinary user',
	'serverLink':'Links to service providers',
	
	'ftpServer':'FTP Server',
	'savePath':'FileUpload',
	
	'sendUser':'Sender',
	'sendAddr':'Sender',
	'smtpServer':'SMTP Server',
	'checkInfo':'My Server Requires Authentication',
	'reviewUser':'Reciver',
	'reviewAddr':'Email',
	'vedioCheckPwd':'Video password authentication',
	'loginFailed':'Login failed',
	'loginSuccess':'Login successful',
	'logining':'Log in',
	
	'cloudstoragetype':'Cloud Storage Type',
	'web':'Web',
	'authcode':'Auth Code',
	'totalcapacity':'Total Capacity',
	'usedcapacity':'Used Capacity',
	'bound':'Bound',
	'unbound':'Unbound',
	'binding':'Bind',
	'unbind':'Unbind',
	
	
	//高级配置-图像
	'osdOpt':'Overlay Setting',
	'showTime':'Time',
	'showText':'Text',
	'dateFormat':'Date Format',
	'date0':'DD/MM/YYYY',
	'date1':'MM/DD/YYYY',
	'date2':'YYYY/MM/DD',
	'osdPosition':'OSD Position',
	'pos0':'Top_Left',
	'pos1':'Bottom_Left',
	'osdText':'Text',
	'mirror':'Mirror',
	'mirror1':'VERTICAL',
	'mirror2':'HORIZONTAL',
	'mirror3':'BOTH',
	'aisleMode':'Corridor pattern',
	'setOn':'Open',
	'RotateAngle90':'90 degrees',
	'RotateAngle270':'270 degrees',
	'osdTips':'OSD text cannot be set to null',
	
	
	
	//高级配置-事件
	'motionDetecting':'Motion Detection',
	'privacyMasking':'Privacy',
	'alarmSet':'Alarm',
	
	'optMode':'Configuration mode',
	'sensitivity':'Sensitivity',
	'selAll':'Select All',
	'clearAll':'Clear All',
	
	'maskTips':'Tip:Privacy can only draw the three regions',
	'area1':'Region1',
	'area2':'Region2',
	'area3':'Region3',
	'NoRoiArea':'Non-ROI region frame rate',
	'QpRelative':'Relative QP value',
	'QpAbsolute':'QP absolute value',
	
	'openAlarm':'Enable Alarm',
	'tillTime':'Alarm Duration',
	'tillTime0':'10 seconds',
	'tillTime1':'30 seconds',
	'tillTime2':'1 minute',
	'tillTime3':'5 minutes',
	'tillTime4':'10 minutes',
	'tillTime5':'Non-Stop',
	
	'triggerAlarm':'Alarm Trigger',
	'alarmAction':'On Alarm',
	'uploadFtp':'Upload Via FTP',
	'fileType':'File Format',
	'uploadSmtp':'Upload Via SMTP',
	'uploadCloud':'Upload Via Cloud',
	
	
	
	//时区表
	'GMT0':'GMT-12 Eniwetok, Kwajalein',
	'GMT1':'GMT-11.5',
	'GMT2':'GMT-11 Midway Island, Samoa',
	'GMT3':'GMT-10.5',
	'GMT4':'GMT-10 Hawaii',
	'GMT5':'GMT-9.5',
	'GMT6':'GMT-09 Alaska',
	'GMT7':'GMT-8.5',
	'GMT8':'GMT-08 Pacific Time (US & Canada), Tijuana',
	'GMT9':'GMT-7.5',
	'GMT10':'GMT-07 Mountain Time (US & Canada), Arizona',
	'GMT11':'GMT-6.5',
	'GMT12':'GMT-06 Central Time (US & Canada), Mexico City, Tegucigalpa, Saskatchewan',
	'GMT13':'GMT-5.5',
	'GMT14':'GMT-05 Eastern Time (US & Canada), Indiana(East), Bogota, Lima',
	'GMT15':'GMT-4.5',
	'GMT16':'GMT-04 Atlantic Time (Canada), Caracas, La Paz',
	'GMT17':'GMT-3.5',
	'GMT18':'GMT-03 Brasilia, Buenos Aires, Georgetown',
	'GMT19':'GMT-2.5',
	'GMT20':'GMT-02 Mid-Atlantic',
	'GMT21':'GMT-1.5',
	'GMT22':'GMT-01 Azores, Cape Verdes Is.',
	'GMT23':'GMT-0.5',
	'GMT24':'GMT+00 Dublin, Edinburgh, London, Lisbon, Monrovia, Casablanca',
	'GMT25':'GMT+0.5',
	'GMT26':'GMT+01 Berlin, Stockholm, Rome, Bern, Brussels, Vienna, Paris, Madrid, Amsterdam, Prague, Warsaw, Budapest',
	'GMT27':'GMT+1.5',
	'GMT28':'GMT+02 Athens, Helsinki, Istanbul, Cairo, Eastern Europe, Harare, Pretoria, Israel',
	'GMT29':'GMT+2.5',
	'GMT30':'GMT+03 Baghdad, Kuwait, Nairobi, Riyadh, Moscow, St. Petersburg, Kazan, Volgograd',
	'GMT31':'GMT+3.5',
	'GMT32':'GMT+04 Abu Dhabi, Muscat, Tbilisi',
	'GMT33':'GMT+4.5',
	'GMT34':'GMT+05 Islamabad, Karachi, Ekaterinburg, Tashkent',
	'GMT35':'GMT+5.5',
	'GMT36':'GMT+06 Alma Ata, Dhaka',
	'GMT37':'GMT+6.5',
	'GMT38':'GMT+07 Bangkok, Jakarta, Hanoi',
	'GMT39':'GMT+7.5',
	'GMT40':'GMT+08 Taipei, Beijing, Chongqing, Urumqi, Hong Kong, Perth, Singapore',
	'GMT41':'GMT+8.5',
	'GMT42':'GMT+09 Tokyo, Osaka, Sapporo, Seoul, Yakutsk',
	'GMT43':'GMT+9.5',
	'GMT44':'GMT+10 Brisbane, Melbourne, Sydney, Guam, Port Moresby, Vladivostok, Hobart',
	'GMT45':'GMT+10.5',
	'GMT46':'GMT+11 Magadan, Solomon Is., New Caledonia',
	'GMT47':'GMT+11.5',
	'GMT48':'GMT+12 Fiji, Kamchatka, Marshall Is., Wellington, Auckland',
		
	//一些通用按钮与提示
	'save':'Save',
	'browse':'Scan',
	'saved':'Save Successful!',
	'savedfail':'Save Fail!',
	'confirmSave':'Confirm to save?',
	'confirmDel':'Confirm to delete?',
	'setDefault':'Default',
	'confirm':'Ok',
	'cancel':'Cancel',


	'playback':'PlayBack',
};













