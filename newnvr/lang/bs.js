//波斯语
if($.timepicker){
	(function($) {
		$.timepicker.regional['zh-CN'] = {
			timeOnlyTitle: 'انتخاب زمان',
			timeText: 'زمان',
			hourText: 'ساعت',
			minuteText: 'دقیقه',
			secondText: 'ثانیه',
			currentText: 'ساعت هم اکنون',
			closeText: 'تعطیل کردن',
			timeFormat: 'HH:mm',
			amNames: ['AM', 'A'],
			pmNames: ['PM', 'P'],
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
				timeOnlyTitle: 'انتخاب زمان',
				timeText: 'زمان',
				hourText: 'ساعت',
				minuteText: 'دقیقه',
				secondText: 'ثانیه',
				currentText: 'ساعت هم اکنون',
				closeText: 'تعطیل کردن',
				timeFormat: 'HH:mm',
				amNames: ['AM', 'A'],
				pmNames: ['PM', 'P'],
				prevText: '←',
				nextText: '→',
				isRTL: false
		};
		$.datepicker.setDefaults($.datepicker.regional['zh-CN']);
	})(jQuery);
}

var lang={
	'labOpensound':'گسترش صدا فعال',
	'isoLab':'حالت ISO',
	'iso0':'طبیعی',
	'iso1':'ISO+',
		
	'setSlideTips2':'مجموعه ای از ارزش بین 0-100',
	'sound':'بسامد سمعی',
	'soundOption':'تنظیمات صوتی',
	'openSound':'گسترش صوتی',
	'inSound':'ورودی صوتی',
	'inSound0':'ورودی میکروفن',
	'inCount':'سطح ورودی',
		
	'p2pState':'وضعیت اتصال',
	'p2pSuccess':'اتصال موفقیت آمیز است',
	'p2pFailure':'ارتباط ناموفق بود',
		
	'tipsLog':'ورود صادرات',
	'logPaht':'ورود به سیستم ذخیره مسیر صادرات',
		
	'sensorLinear0':'تعطیل کردن',
	'sensorLinear1':'اتوماتیک',
	'sensorLinear2':'ضعیف',
	'sensorLinear3':'معتدل',
	'sensorLinear4':'قوی',
	'sensorLinear5':'عالی',
		
	'emptyTips':'موارد نمی تواند تنظیم شود پوچ',
	'osdTextTips':'',
	'portTips':'بندر تنها می تواند بین 0-65535 تنظیم',
	'vedioFileBag':'اندازه بسته ویدئو',
	'inTips':'به',
	'formatErr':'ناقص',
	'optionsLoading':'پیکربندی، لطفا صبر کنید',
		
	//登录页面
	'login':'ورود',
	'userName':'نام کاربر',
	'pwd':'رمز عبور',
	'setLang':'انتخاب زبان',
	'remenberPwd':'به یاد داشته باشید رمز عبور',
	'loginBtn':'ورود',
	'alertLoginErr':'ورود ناموفق، بررسی حساب و رمز عبور شما اشتباه می باشد。',
	
	//框架页面
	'realTime':'پیش نمایش زنده',
	'logSearch':'ورود پرس و جو',
	'options':'پیکر بندی',
	'exit':'رها کردن',
	'exitTips':'تایید خروج?',
	
	//实时预览
	'setPic':'عکس',
	'fd':'بزرگ کردن',
	'play':'پخش',
	'stop':'توقف',
	'starRecord':'شروع به ضبط',
	'endRecord':'ضبط پایان',
	'mainStream':'جریان اصلی',
	'childStream':'زیر جریان',
	
	//日志查询页面
	'logNum':'شماره سریال',
	'logTime':'زمان',
	'logDetail':'برای اطلاعات بیشتر',
	'beginTime':'زمان شروع',
	'endTime':'پایان زمان',
	'search':'پیدا کردن',
	'setEmpty':'واضح',
	'setTimeTips1':'لطفا انتخاب کنید نمایش داده شد شروع و پایان زمان！',
	'setTimeTips2':'زمان پایان باید بیشتر از زمان شروع می شود！',
	
	//配置   菜单
	'localOptions':'پیکربندی محلی',
	'baseOptions':'پیکربندی عمومی',
	'system':'سیستم',
	'systemOptions':'پیکربندیس سیستم ',
	'localNet':'شبکه محلی',
	'vedio':'تصویری',
	'image':'تصویر',
	'safety':'امنیت',
	'advanced':'پیکربندی پیشرفته',
	'event':'واقعه',
	
	
	
	//本地配置-本地配置
	'playParam':'پارامترهای پخش',
	'protocolType':'نوع پروتکل',
	'playProperty':'عملکرد پخش',
	'propertyFirst':'عملکرد اولویت',
	'realFirst':'رئال خوب',
	'blance':'به طور مساوی و متعادل',
	'speedFirst':'روانی',
	'imageType':'فرمت فایل ضبط',
	'vedioFiles':'فایل های ویدئویی',
	'bagSizes':'ویدئو اندازه بسته بندی فایل',
	'vedioPath':'مسیر فایل های ویدئویی',
	'playbackPath':'دانلود پخش ذخیره مسیر',
	'imgAndClip':'ضبط و ویرایش',
	'previewImgPath':'پیشنمایش عکس ذخیره مسیر',
	'playbackImgPath':'پخش تصویر ذخیره مسیر',
	'playbackClipPath':'پخش کلیپ ذخیره مسیر',
	
	
	//基本配置－系统
	'deviceInfo':'اطلاعات دستگاه',
	'timeOption':'تنظیمات زمان',
	'systemSet':'تعمیر و نگهداری سیستم',
	
	'baseInfo':'اطلاعات پایه',
	'deviceName':'نام دستگاه',
	'hardwareVer':'نسخه سخت افزار',
	'softwareVer':'نسخه نرم افزار',
	'channel':'تعداد کانال',
	
	'timeZone':'منطقه زمانی',
	'checkTime':'تنظیم وقت',
	'deviceTime':'تجهیزات',
	'NTPCheckTime':'NTP زمان ',
	'SNTPServer':'SNTP سرور',
	'handCheck':'اصلاح دستی',
	'setTime':'زمان تنظیم',
	'sameOfPC':'همگام سازی با کامپیوتر شما',
	'PCTime':'وقت کامپیوتر',
	'checNvr':'NVR را ممنوع اصلاح IPC زمان',
	
	'deviceRestart':'راه اندازی مجدد دستگاه',
	'restartDevice':'راه اندازی مجدد',
	'setDefaultTips':'بازیابی تنظیمات کارخانه',
	'setDefaultTips1':' به طور کامل بازگرداندن پارامترهای دستگاه را به تنظیمات کارخانه',
	'upgrade':'ارتقا',
	'upgradeFile':'فایل ارتقا',
	'upgradeProgress':'ارتقا پیشرفت',
	'explain':'توضیح',
	'explainTips':'ارتقاء دقیقه طول می کشد 1-10، آیا روشن نمی کردن قدرت، تکمیل اتوماتیک راه اندازی مجدد بعد از ارتقا',
	
	'confirmRestart':'تکرار راه اندازی مجدد?',
	'confirmSetDefault':'تأیید بازیابی تنظیمات کارخانه?',
	'upgradeTips':'هنگامی که تجهیزات نوار پیشرفت ارتقاء پیشنهاد خواهد شد که باعث نمی ارتقاء کامل است، هیچ چیز را نمی کنند. آیا مطمئن هستید که ارتقا？',
	'upgradeError1':'آیا بسته ارتقا را انتخاب نیست، ارتقاء وقفه。',
	'upgradeError2':'ارتقاء با شکست مواجه!',
	'upgradeError3':'ارتقا شکست خورده با خطا:',
	'confirmCheckTime':'تکرار زمان اصلاح?',
	'setDate':'لطفا تاریخ را تنظیم کنید.',
	'setSNTPTips':'لطفا سرور SNTP را انتخاب کنید.',
	
	
	
	//基本配置本地-网络
	'port':'بندر',
	'networkSet':'NIC پارامترهای پیکربندی ',
	'enableDHCP':'آیا HDCP فعال',
	'IPAddr':'IP آدرس ',
	'subnetMask':'پوشش زیر شبکه',
	'gateway':'دروازه پیش فرض',
	'DNSServerOpt':'DNS پیکربندی سرور',
	'defaultDNS':'ترجیح سرور DNS',
	'HTTPport':'HTTP پورت',
	'portError':'راه اندازی می افتد، شماره پورت تنها می تواند بین 1024-65535 مجموعه。',
	
	
	//基本配置本地-视频
	'veido':'تصویری',
	'streamType':'نوع جریان',
	'oneCodeStream':'تنها جریان',
	'twoCodeStream':'دو جریان',
	'codeType':'رمز گذاری',
	'codeStream':'جریان',
	'frame':'نرخ فریم',
	'bit':'سرعت ذره ای',
	'bitrateType':'متغیر (ثابت) نرخ',
	'bitrateType0':'نرخ ثابت',
	'bitrateType1':'VBR',
	'iFrame':'من فریم فاصله',
	'noSetCn':'منع واردات چینی!',
	'deviceNameTips':'نام دستگاه حداقل یکی از شخصیت ها، تا 31 حرف، فقط و فقط اعداد، حروف و زیرین!',
	'bitTips':'نرخ بیت در محدوده12000-64!',
	
	
	//基本配置本地-显示设置
	'displayOptions':'تنظیمات صفحه نمایش',
	'imgSet':'تنظیم تصویر',
	'brightness':'روشنایی',
	'contrast':'کنتراست',
	'saturtion':'اشباع',
	'sharpness':'هشیاری',
	
	'ircutFilterTime':'Ircut زمان تبدیل',
	'ircutMode':'Ircut طرز',
	'ircutMode0':'LDR اتوماتیک',
	'ircutMode1':'ویدئو خودرو',
	'ircutMode2':'حالت رنگ',
	'ircutMode3':'سیاه و سفید',
	
	'ae':'قرار گرفتن در معرض',
	'aeMode':'حالت نوردهی',
	'auto':'اتوماتیک',
	'hand':'بصورت دستی',
	'shutter':'شاتر الکترونیکی',
	
	'backlight':'نور پس زمینه',
	'backlightIn':'BLC',
	'close':'خاموش کردن',
	'open':'باز',
	'backlightNum':'مقدار نور پس زمینه',
	'small':'کمترین',
	'middle':'معتدل',
	'big':'بیشترین',
	'gainControl':'تعدیل سود',
	
	'whiteBalance':'تعادل رنگ سفید',
	'redGain':'قرمز به دست آوردن',
	'greenGain':'سبز به دست آوردن',
	'blueGain':'آبی به دست آوردن',
	
	'vedioSet':'ویدئو تنظیم',
	'dnrModel':'کاهش دهنده نویز دیجیتال',
	'dnrModel0':'تعطیل کردن',
	'dnrModel1':'کاهش دهنده نویز دیجیتال (2D)',
	'dnrModel2':'کاهش دهنده نویز دیجیتال(3D)',
	'dnrModel3':'کامل',
	
	'imgAdd':'بهبود تصویر',
	'flickerControl':'چشمک زدن کنترل',
	'flickerControl0':'داخل سالن NTSC',
	'flickerControl1':'PAL داخل سالن',
	'flickerControl2':'خارج از منزل',
	'sensorLinear':'سوئیچ گسترده ای پویا',
	
	'defog':'Defogging',
	'defogModel':'Defogging حالت ',
	'defogNum':'Defogging قدرت ',
	'setSlideTips':' مجموعه ای از ارزش بین255-0 。',
	
	
	
	//基本配置本地-安全
	'userControl':'مدیریت کاربر',
	'user':'کاربر',
	'right':'صلاحیت',
	'eidt':'ویرایشگر',
	'del':'حذف کردن',
	'adduser':'کاربران اضافه کردن',
	'admin':'مدیر',
	'handler':'اپراتور',
	'userEdit':'کاربران برای ویرایش',
	'userType':'نوع کاربر',
	'confirmPwd':'تکرار رمز عبور',
	'pwdTips0':'رمز عبور حداقل یکی از شخصیت ها، حداکثر 31 حرف، فقط و فقط اعداد، حروف و زیرین!',
	'pwdTips1':'رمز عبور دو بار تناقض!',
	'usertips0':'کاربران حد رسیده است، ما نمی توانیم اضافه!',
	'usertips1':'نام کاربری حداقل یکی از شخصیت ها، حداکثر 31 حرف، فقط و فقط اعداد، حروف و زیرین!',
	'usertips2':'کاربر جدید کامل اضافه شده است.',
	'usertips3':'کاربر در حال حاضر وجود دارد!',
	'error':'اشتباه',
	
	
	
	
	//高级配置-系统
	'setTimeRestart':'راه اندازی مجدد زمان',
	'notSet':'هرگز',
	'weekDay0':'در روز دوشنبه',
	'weekDay1':'در روز سه شنبه',
	'weekDay2':'در روز چهارشنبه',
	'weekDay3':'پنج شنبه',
	'weekDay4':'جمعه',
	'weekDay5':'در روز شنبه',
	'weekDay6':'یکشنبه',
	'weekDay7':'هر روز',
	'weekDay8':'هفتگی',
	'weekDay9':'در هر ماه',
		'weekDay10':'ژاپن',
	'weekDay11':'زمان',
	'weekDay12':'دوم',

	
	
	//高级配置-本地网络
	'other':'دیگر',
	'ddnsType':' DDNS نوع',
	'peanutShells':'پوسته بادام زمینی',
	'domain':'نام دامنه',
	'ddnsUser':'DDNSکاربر',
	'ddnsPwd':'DDNSرمز عبور',
	'ddnsState':'DDNSوضعیت',
	'landSuccess':'ورود موفقیت آمیز',
	'serverType':'نوع خدمات',
	'serverTypeName':'کاربران عادی',
	'serverLink':'لینک خدمات',
	
	'ftpServer':'FTPسرور',
	'savePath':'مسیر ذخیره سازی',
	
	'sendUser':'فرستنده',
	'sendAddr':'از آدرس',
	'smtpServer':'SMTP سرور',
	'checkInfo':'صحت اطلاعات',
	'reviewUser':'گیرندهء نامه',
	'reviewAddr':'حمل و نقل آدرس',
	'vedioCheckPwd':'رمز عبور تصدیق ویدئو فعال است',
	'loginFailed':'ورود ناموفق',
	'loginSuccess':'ورود موفقیت آمیز',
	'logining':'ورود',
	
	'cloudstoragetype':'نوع ذخیره سازی ابر',
	'web':'ابر سایت',
	'authcode':'کد امنیتی',
	'totalcapacity':'ظرفیت کل',
	'usedcapacity':'استفاده می شود',
	'bound':'متصل می شود',
	'unbound':'بی بند و بار',
	'binding':'اتصال',
	'unbind':'جداسازی',
	
	
	//高级配置-图像
	'osdOpt':'OSD تنظیمات',
	'showTime':'نمایش زمان',
	'showText':'نمایش متن',
	'dateFormat':'قالب تاریخ',
	'date0':'روز / ماه / سال',
	'date1':'ماه / روز / سال',
	'date2':'سال / ماه / روز',
	'osdPosition':'OSD محل',
	'pos0':'چپ',
	'pos1':'پایین سمت چپ',
	'osdText':'OSD متن',
	'mirror':'معکوس',
	'mirror1':'عمودی',
	'mirror2':'سطح',
	'mirror3':'افقی و عمودی',
	'aisleMode':'حالت کریدور',
	'setOn':'باز',
	'RotateAngle90':'90 درجه',
	'RotateAngle270':'270 درجه',
	'osdTips':'"OSD متن "نمی تواند تنظیم شود تا تهی!!',
	
	
	
	//高级配置-事件
	'motionDetecting':'تشخیص حرکت',
	'privacyMasking':'PRIVACY',
	'alarmSet':'تنظیمات زنگ هشدار',
	
	'optMode':'حالت پیکربندی',
	'sensitivity':'حساسیت',
	'selAll':'انتخاب همه',
	'clearAll':'همه را پاک کن',
	
	'maskTips':'نکته: شما فقط می توانید در قرعه کشی سه منطقه',
	'area1':'منطقه 1',
	'area2':'منطقه 2',
	'area3':'منطقه 3',
	'NoRoiArea':'غیر ROI نرخ فریم منطقه',
	'QpRelative':'ارزش نسبی QP',
	'QpAbsolute':'ارزش مطلق QP',
	
	'openAlarm':'زنگ های باز',
	'tillTime':'مدت',
	'tillTime0':'10 ثانیه',
	'tillTime1':'30 ثانیه',
	'tillTime2':'1 دقیقه',
	'tillTime3':'5 دقیقه',
	'tillTime4':'10 دقیقه',
	'tillTime5':'همیشه فعال',
	
	'triggerAlarm':'زنگ خطر است باعث',
	'alarmAction':'پیوندی زنگ',
	'uploadFtp':'بارگذاریFTP',
	'fileType':'فرمت فایل',
	'uploadSmtp':'بارگذاریSMTP',
	'uploadCloud':'بارگذاری ابر',
	
	
	
	//时区表
	'GMT0':'GMT-12 Eniwetok، کواجالین',
	'GMT1':'GMT-11.5',
	'GMT2':'GMT-11 میدوی جزیره، ساموآ',
	'GMT3':'GMT-10.5',
	'GMT4':'GMT-10 هاوایی',
	'GMT5':'GMT-9.5',
	'GMT6':'GMT-09 آلاسکا',
	'GMT7':'GMT-8.5',
	'GMT8':'GMT-08 زمان اقیانوس آرام (ایالات متحده و کانادا)، تیجوانا',
	'GMT9':'GMT-7.5',
	'GMT10':'GMT-07 زمان کوه (ایالات متحده و کانادا)، آریزونا',
	'GMT11':'GMT-6.5',
	'GMT12':'GMT-06 زمان مرکزی (ایالات متحده و کانادا)، مکزیکو سیتی، تگوسیگالپا، ساسکاچوان',
	'GMT13':'GMT-5.5',
	'GMT14':'GMT-05 زمان شرقی (ایالات متحده و کانادا)، ایندیانا (شرق)، بوگوتا، لیما',
	'GMT15':'GMT-4.5',
	'GMT16':'GMT-04 زمان اطلس (کانادا)، کاراکاس، لاپاز',
	'GMT17':'GMT-3.5',
	'GMT18':'GMT-03 برازیلیا، بوئنوس آیرس، جورج تاون',
	'GMT19':'GMT-2.5',
	'GMT20':'GMT-02 ایالتهای ساحلی اقیانوس اطلس',
	'GMT21':'GMT-1.5',
	'GMT22':'GMT-01 آزورس، کیپ ورد جزایر',
	'GMT23':'GMT-0.5',
	'GMT24':'GMT+00 دوبلین، ادینبورگ، لندن، لیسبون، مونروویا، کازابلانکا',
	'GMT25':'GMT+0.5',
	'GMT26':'GMT+01 برلین، استکهلم، رم، برن، بروکسل، وین، پاریس، مادرید، آمستردام، پراگ، ورشو، بوداپست',
	'GMT27':'GMT+1.5',
	'GMT28':'GMT+02 آتن، هلسینکی، استانبول، قاهره، شرق اروپا، حراره، پرتوریا، اسرائیل',
	'GMT29':'GMT+2.5',
	'GMT30':'GMT+03 بغداد، کویت، نایروبی، ریاض، مسکو، سن پترزبورگ، کازان، ولگوگراد',
	'GMT31':'GMT+3.5',
	'GMT32':'GMT+04 ابوظبی، مسقط، تفلیس',
	'GMT33':'GMT+4.5',
	'GMT34':'GMT+05 اسلام آباد، کراچی، یکاترینبورگ، تاشکند',
	'GMT35':'GMT+5.5',
	'GMT36':'GMT+06 آلماتی، داکا',
	'GMT37':'GMT+6.5',
	'GMT38':'GMT+07 بانکوک، جاکارتا، هانوی',
	'GMT39':'GMT+7.5',
	'GMT40':'GMT+08 تایپه، پکن، چونگ کینگ، ارومچی، هنگ کنگ، پرت، سنگاپور',
	'GMT41':'GMT+8.5',
	'GMT42':'GMT+09 توکیو، اوزاکا، ساپورو، سئول، یاکوتسک',
	'GMT43':'GMT+9.5',
	'GMT44':'GMT+10 بریزبن، ملبورن، سیدنی، گوام، پورت مورسبی، شهر ولادی وستک، هوبارت',
	'GMT45':'GMT+10.5',
	'GMT46':'GMT+11 ماگادان، جزایر سلیمان، کالدونیای جدید',
	'GMT47':'GMT+11.5',
	'GMT48':'GMT+12 فیجی، کامچاتکا، جزایر مارشال، ولینگتون، اوکلند',
		
	//一些通用按钮与提示
	'save':'ذخیره',
	'browse':'فهرست',
	'saved':'این ذخیره شده است.',
	'savedfail':'برای صرفه جویی در شکست خورده!',
	'confirmSave':'تأییدذخیره?',
	'confirmDel':'تکرار حذف?',
	'setDefault':'بازگردانی به حالت پیش فرض',
	'confirm':'تایید',
	'cancel':'لغو کردن'
	
};













