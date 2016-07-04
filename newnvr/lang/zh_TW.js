//中文繁体
if($.timepicker){
	(function($) {
		$.timepicker.regional['zh-CN'] = {
			timeOnlyTitle: '選擇時間',
			timeText: '時間',
			hourText: '小時',
			minuteText: '分鐘',
			secondText: '秒鐘',
			currentText: '現在時間',
			closeText: '關閉',
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
				timeOnlyTitle: '選擇時間',
				timeText: '時間',
				hourText: '小時',
				minuteText: '分鐘',
				secondText: '秒鐘',
				currentText: '現在時間',
				closeText: '關閉',
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
	'labOpensound':'打開關閉聲音',
	'isoLab':'ISO模式',
	'iso0':'正常',
	'iso1':'增強',
		
	'setSlideTips2':'請將值設置在0-100之間',
	'sound':'音頻',
	'soundOption':'音頻配置',
	'openSound':'打開音頻',
	'inSound':'音頻輸入',
	'inSound0':'Mic輸入',
	'inCount':'輸入音量',
		
	'p2pState':'連接狀態',
	'p2pSuccess':'連接成功',
	'p2pFailure':'連接失敗',
		
	'tipsLog':'日誌導出',
	'logPaht':'日誌導出保存路徑',
		
	'sensorLinear0':'關閉',
	'sensorLinear1':'自動',
	'sensorLinear2':'弱',
	'sensorLinear3':'適中',
	'sensorLinear4':'強',
	'sensorLinear5':'超強',
		
	'emptyTips':'數據項不能設置空值',
	'osdTextTips':'中文只能輸入15個字符',
	'portTips':'端口只能設置在0-65535之間',
	'vedioFileBag':'錄像打包大小',
	'inTips':'在',
	'formatErr':'格式錯誤',
	'optionsLoading':'配置中，請稍等',
		
	//登录页面
	'login':'登錄',
	'userName':'用戶名',
	'pwd':'密碼',
	'setLang':'語言選擇',
	'remenberPwd':'記住密碼',
	'loginBtn':'登錄',
	'alertLoginErr':'登錄失敗,請確認用戶名或密碼',
	
	//框架页面
	'realTime':'即時預覽',
	'logSearch':'日誌查詢',
	'options':'配置',
	'exit':'退出',
	'exitTips':'確認退出?',
	
	//实时预览
	'setPic':'截圖',
	'fd':'放大',
	'play':'播放',
	'stop':'停止',
	'starRecord':'開始錄像',
	'endRecord':'結束錄像',
	'mainStream':'主碼流',
	'childStream':'子碼流',
	
	//日志查询页面
	'logNum':'编号',
	'logTime':'时间',
	'logDetail':'详细信息',
	'beginTime':'开始时间',
	'endTime':'结束时间',
	'search':'查找',
	'setEmpty':'清空',
	'setTimeTips1':'請選擇查詢的開始和結束時間！',
	'setTimeTips2':'結束時間必須大於開始時間！',
	
	//配置   菜单
	'localOptions':'本機設定',
	'baseOptions':'基本配置',
	'system':'系統',
	'systemOptions':'系統配置',
	'localNet':'本地網路',
	'vedio':'視頻',
	'image':'圖像',
	'safety':'安全',
	'advanced':'高級配置',
	'event':'事件',
	
	
	
	//本地配置-本地配置
	'playParam':'播放參數',
	'protocolType':'協定類型',
	'playProperty':'播放效能',
	'propertyFirst':'最短延遲',
	'realFirst':'即時性佳',
	'blance':'均衡',
	'speedFirst':'流暢性佳',
	'imageType':'圖像格式',
	'vedioFiles':'錄影檔案',
	'bagSizes':'錄影檔案大小',
	'vedioPath':'錄影檔案儲存路徑',
	'playbackPath':'回放下載儲存路徑',
	'imgAndClip':'截圖和編輯',
	'previewImgPath':'預覽截圖儲存路徑',
	'playbackImgPath':'回放截圖儲存路徑',
	'playbackClipPath':'回放剪輯儲存路徑',
	
	
	//基本配置－系统
	'deviceInfo':'基本資訊',
	'timeOption':'時間設置',
	'systemSet':'系統維',
	
	'baseInfo':'基本資訊',
	'deviceName':'設備名稱',
	'hardwareVer':'韌體版本',
	'softwareVer':'編碼版本',
	'channel':'頻道數量',
	
	'timeZone':'時區',
	'checkTime':'校時',
	'deviceTime':'設備時間',
	'NTPCheckTime':'NTP校時',
	'SNTPServer':'SNTP服務器',
	'handCheck':'手動設置',
	'setTime':'設定時間',
	'sameOfPC':'與電腦的時間同步',
	'PCTime':'計算機時間',
	'checNvr':'禁止NVR修改IPC時間',
	
	'deviceRestart':'設備重啟',
	'restartDevice':'重新啟動設備',
	'setDefaultTips':'恢復出廠設置',
	'setDefaultTips1':'完全恢復設備參數到出廠設置',
	'upgrade':'升級',
	'upgradeFile':'韌體',
	'upgradeProgress':'狀態:',
	'explain':'說明',
	'explainTips':'更新過程需要1-10分鐘，請不要關閉電源，更新完成後將自動重新啟動。',
	
	'confirmRestart':'確認重啟設備?',
	'confirmSetDefault':'確認恢復出廠設置?',
	'upgradeTips':'设备升级时会有进度条提示，在未提示升级完成时，请不要做任何操作。是否确认升级？',
	'upgradeError1':'沒有選擇升級包，升級中斷。',
	'upgradeError2':'升級失敗!',
	'upgradeError3':'升級失敗,錯誤：',
	'confirmCheckTime':'確認校正時間?',
	'setDate':'請設置日期',
	'setSNTPTips':'請選擇SNTP服務器。',
	
	
	
	//基本配置本地-网络
	'port':'端口',
	'networkSet':'網卡參數設定',
	'enableDHCP':'啟用DHCP',
	'IPAddr':'IP 地址',
	'subnetMask':'子網掩碼',
	'gateway':'默認網關',
	'DNSServerOpt':'DNS伺服器設定',
	'defaultDNS':'主要DNS伺服器',
	'HTTPport':'HTTP端口',
	'portError':'HTTP外部端口有效值為80或1025-65534',
	
	
	//基本配置本地-视频
	'veido':'視頻參數',
	'streamType':'碼流類型',
	'oneCodeStream':'單碼流',
	'twoCodeStream':'雙碼流',
	'codeType':'編碼方式',
	'codeStream':'碼流',
	'frame':'幀率',
	'bit':'比特率',
	'bitrateType':'變(定)碼率',
	'bitrateType0':'定碼率',
	'bitrateType1':'變碼率',
	'iFrame':'幀間隔',
	'noSetCn':'禁止輸入中文!',
	'deviceNameTips':'设备名称最多31个字符,且只能由数字、字母和下划线组成!',
	'bitTips':'比特率範圍為64-12000!',
	
	
	//基本配置本地-显示设置
	'displayOptions':'顯示設定',
	'imgSet':'圖像調整',
	'brightness':'亮度',
	'contrast':'對比度',
	'saturtion':'飽和度',
	'sharpness':'銳度',
	
	'ircutFilterTime':'Ircut轉換時間',
	'ircutMode':'Ircut模式',
	'ircutMode0':'LDR自動',
	'ircutMode1':'視頻自動',
	'ircutMode2':'彩色模式',
	'ircutMode3':'黑白模式',
	
	'ae':'曝光設置',
	'aeMode':'曝光模式',
	'auto':'自動',
	'hand':'手動',
	'shutter':'電子快門',
	
	'backlight':'背光設置',
	'backlightIn':'背光補償',
	'close':'關閉',
	'open':'打開',
	'backlightNum':'背光量',
	'small':'最小',
	'middle':'中等',
	'big':'最大',
	'gainControl':'增益調節',
	
	'whiteBalance':'白平衡',
	'redGain':'紅色增益',
	'greenGain':'綠色增益',
	'blueGain':'藍色增益',
	
	'vedioSet':'視頻調整',
	'dnrModel':'數字降噪',
	'dnrModel0':'關閉',
	'dnrModel1':'2D 數字降噪',
	'dnrModel2':'3D 數字降噪',
	'dnrModel3':'全开',
	
	'imgAdd':'圖像增強',
	'flickerControl':'閃爍控制',
	'flickerControl0':'室內NTSC',
	'flickerControl1':'室內PAL',
	'flickerControl2':'室外',
	'sensorLinear':'寬動態',
	
	'defog':'去霧',
	'defogModel':'去霧模式',
	'defogNum':'去霧強度',
	'setSlideTips':'請將值設置在0-255之間。',
	
	
	
	//基本配置本地-安全
	'userControl':'用戶管理',
	'user':'用戶名',
	'right':'權限',
	'eidt':'編輯',
	'del':'刪除',
	'adduser':'新增帳號',
	'admin':'管理員',
	'handler':'普通用戶',
	'userEdit':'修改帳號',
	'userType':'使用者等級',
	'confirmPwd':'確認密碼',
	'pwdTips0':'密碼最少为1个字符，最多31个字符,且只能由数字、字母和下划线组成!',
	'pwdTips1':'兩次密碼不一樣!',
	'usertips0':'用戶達到上限，不能再添加!',
	'usertips1':'用户名最少为1个字符，最多31个字符,且只能由数字、字母和下划线组成!',
	'usertips2':'完成新用戶添加',
	'usertips3':'該用戶名已存在!',
	'error':'錯誤',
	
	
	
	
	//高级配置-系统
	'setTimeRestart':'定時重啟',
	'notSet':'从不',
	'weekDay0':'周一',
	'weekDay1':'周二',
	'weekDay2':'周三',
	'weekDay3':'周四',
	'weekDay4':'周五',
	'weekDay5':'周六',
	'weekDay6':'周日',
	'weekDay7':'每天',
	'weekDay8':'每週',
	'weekDay9':'每月',
		'weekDay10':'日',
	'weekDay11':'時',
	'weekDay12':'秒',

	
	
	//高级配置-本地网络
	'other':'其他',
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
	
	'ftpServer':'FTP服務器',
	'savePath':'存儲路徑',
	
	'sendUser':'寄件人',
	'sendAddr':'發件地址',
	'smtpServer':'SMTP服務器',
	'checkInfo':'服務器需要驗證',
	'reviewUser':'收件人',
	'reviewAddr':'收件地址',
	'vedioCheckPwd':'視頻密碼認證使能',
	'loginFailed':'登錄失敗',
	'loginSuccess':'登錄成功',
	'logining':'登錄中',
	
	'cloudstoragetype':'雲存儲類型',
	'web':'云網站',
	'authcode':'驗證碼',
	'totalcapacity':'總容量',
	'usedcapacity':'已使用',
	'bound':'已綁定',
	'unbound':'未綁定',
	'binding':'綁定',
	'unbind':'解綁',
	
	//高级配置-图像
	'osdOpt':'OSD 設置',
	'showTime':'顯示時間',
	'showText':'OSD 文本',
	'dateFormat':'日期格式',
	'date0':'日/月/年',
	'date1':'月/日/年',
	'date2':'年/月/日',
	'osdPosition':'OSD位置',
	'pos0':'左上',
	'pos1':'左下',
	'osdText':'OSD文本',
	'mirror':'鏡像',
	'mirror1':'垂直',
	'mirror2':'水準',
	'mirror3':'水準和垂直',
	'aisleMode':'走廊模式',
	'setOn':'開啟',
	'RotateAngle90':'旋轉90度',
	'RotateAngle270':'旋轉270度',
	'osdTips':'"OSD文本“不能設置為空!!',
	
	
	
	//高级配置-事件
	'motionDetecting':'移動偵測',
	'privacyMasking':'隱私遮蔽',
	'alarmSet':'報警配置',
	
	'optMode':'區域設定',
	'sensitivity':'靈敏度',
	'selAll':'選擇所有',
	'clearAll':'清除所有',
	
	'maskTips':'提示：最多只能繪製3個隱私區域',
	'area1':'區域壹',
	'area2':'區域二',
	'area3':'區域三',
	'NoRoiArea':'非ROI區域幀率',
	'QpRelative':'相對QP值',
	'QpAbsolute':'絕對QP值',
	
	'openAlarm':'開啟報警',
	'tillTime':'報警持續時間',
	'tillTime0':'10秒',
	'tillTime1':'30秒',
	'tillTime2':'1分鐘',
	'tillTime3':'5分鐘',
	'tillTime4':'10分鐘',
	'tillTime5':'一直有效',
	
	'triggerAlarm':'報警觸發',
	'alarmAction':'報警聯動',
	'uploadFtp':'上傳FTP',
	'fileType':'文件格式',
	'uploadSmtp':'上傳SMTP',
	'uploadCloud':'上傳云端',
	
	
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
	'GMT22':'GMT-01 Azores, Cape Verdes Is',
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
	'save':'保存',
	'browse':'瀏覽',
	'saved':'已保存！',
	'savedfail':'保存失敗!',
	'confirmSave':'確認保存?',
	'confirmDel':'確認刪除?',
	'setDefault':'恢復默認值',
	'confirm':'確認',
	'cancel':'取消'
	
};













