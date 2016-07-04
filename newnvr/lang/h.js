//希伯来语
if($.timepicker){
	(function($) {
		$.timepicker.regional['zh-CN'] = {
			timeOnlyTitle: 'זמן בחר',
			timeText: 'זמן',
			hourText: 'שעה',
			minuteText: 'דקות',
			secondText: 'שניות',
			currentText: 'זמן עכשיו',
			closeText: 'לכבות',
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
				timeOnlyTitle: 'זמן בחר',
				timeText: 'זמן',
				hourText: 'שעה',
				minuteText: 'דקות',
				secondText: 'שניות',
				currentText: 'זמן עכשיו',
				closeText: 'לכבות',
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
	'labOpensound':'להרחיב קול כבוי',
	'isoLab':'מצב ISO',
	'iso0':'רגיל',
	'iso1':'ISO+',
		
	'setSlideTips2':'הגדר את הערך בין 0-100',
	'sound':'תדירות אודיו',
	'soundOption':'תצורת אודיו',
	'openSound':'אודים פתוחים',
	'inSound':'קלט אודיו',
	'inSound0':'קלט מיקרופון',
	'inCount':'רמת קלט',
		
	'p2pState':'סטטוס חיבור',
	'p2pSuccess':'החיבור מוצלח',
	'p2pFailure':'חיבור נכשל',
		
	'tipsLog':'יומן יצוא',
	'logPaht':'התחבר יצוא לשמור את הנתיב',
		
	'sensorLinear0':'לכבות',
	'sensorLinear1':'אוטומטי',
	'sensorLinear2':'חלש',
	'sensorLinear3':'מתון',
	'sensorLinear4':'חזק',
	'sensorLinear5':'סופר',
		
	'emptyTips':'לא ניתן להגדיר null פריטים',
	'osdTextTips':'',
	'portTips':'ניתן להגדיר נמל היחיד בין 0-65,535',
	'vedioFileBag':'גודל חבילת וידאו',
	'inTips':'ב',
	'formatErr':'מבנה פגום',
	'optionsLoading':'תצורה, אנא המתן',
		
	//登录页面
	'login':'כניסה',
	'userName':'שם משתמש',
	'pwd':'סיסמה',
	'setLang':'הממסד השפה ',
	'remenberPwd':'זכור אותי',
	'loginBtn':'כניסה',
	'alertLoginErr':'הרישום נכשל. אנא ודאו ששם המשתמש והסיסמה נכונים',
	
	//框架页面
	'realTime':'וידאו בשידור חי',
	'logSearch':'חיפוש ברשומון',
	'options':'הגדר',
	'exit':'יציאה',
	'exitTips':'אם ביטול ',
	
	//实时预览
	'setPic':'צילום מסך',
	'fd':'הגדלת',
	'play':'שידור',
	'stop':'תפסיק',
	'starRecord':'התחל הקלטה',
	'endRecord':'הקלטת הסוף',
	'mainStream':'זרם 1',
	'childStream':'זרם 2',
	
	//日志查询页面
	'logNum':'מספר זיהוי',
	'logTime':'שעה',
	'logDetail':'פרטים',
	'beginTime':'שעת התחלה',
	'endTime':'שעת סיום',
	'search':'חיפוש',
	'setEmpty':'נקה',
	'setTimeTips1':'בחר את התחל את הסגר הזמן שבו ויבטיחו סטנדרטים גבוהים',
	'setTimeTips2':'שעת הסיום חייבת להיות גדולה מ שעת ההתחלה',
	
	//配置   菜单
	'localOptions':'תצורה מקומית',
	'baseOptions':'הגדרות בסיסיות',
	'system':'מערכת',
	'systemOptions':'הגדרות מערכת',
	'localNet':'רשת',
	'vedio':'וידאו',
	'image':'מצלמה',
	'safety':'אבטחה',
	'advanced':'הגדרות מתקדמות',
	'event':'אירוע',
	
	
	
	//本地配置-本地配置
	'playParam':'פרמטרי Play',
	'protocolType':'סוג הפרוטוקול',
	'playProperty':'צא מהחשבון',
	'propertyFirst':'Play ביצועים ',
	'realFirst':'העיכוב הקצר ביותר',
	'blance':'מאוזן',
	'speedFirst':'חלק וטוב ',
	'imageType':'תפוס את פורמט הקובץ',
	'vedioFiles':'קבצי וידאו',
	'bagSizes':'גודלו של קובץ וידאו ארוז',
	'vedioPath':'נתיב קובץ וידאו',
	'playbackPath':'הורדת השמעה לשמור את הנתיב',
	'imgAndClip':'לכידה ועריכה',
	'previewImgPath':'יריות תצוגה מקדימה לשמור את הנתיב',
	'playbackImgPath':'קליפים השמעה לשמור את הנתיב',
	'playbackClipPath':'קליפים השמעה לשמור את הנתיב',
	
	
	//基本配置－系统
	'deviceInfo':'מידע על מכשיר',
	'timeOption':'זמן סט',
	'systemSet':'תחזוקת מערכת',
	
	'baseInfo':'מידע בסיסי',
	'deviceName':'שם התקן',
	'hardwareVer':'גרסת חומרה',
	'softwareVer':'גרסת תוכנה',
	'channel':'מספר ערוצים',
	
	'timeZone':'אזור זמן',
	'checkTime':'כאשר בית הספר',
	'deviceTime':'שעה במצלמה',
	'NTPCheckTime':'NTPכאשר בית הספר',
	'SNTPServer':'שרת SNTP',
	'handCheck':'הגדר ידנית',
	'setTime':'זמן מוגדר',
	'sameOfPC':'סנכרן לפי השעה במחשב',
	'PCTime':'זמן מחשב',
	'checNvr':'NVR לאסור שינוי IPC זמן',
	
	'deviceRestart':'אתחל מערכת',
	'restartDevice':'הפעל מחדש את המכשיר',
	'setDefaultTips':'שחזר הגדרות ברירת מחדל',
	'setDefaultTips1':'באופן מלא לשחזר את הפרמטרים מכשיר להגדרות היצרן',
	'upgrade':'שדרג',
	'upgradeFile':'קובץ שדרוג',
	'upgradeProgress':'מצב החיבור',
	'explain':'תיאור',
	'explainTips':'תהליך שדרוג לוקח 1-10 דקות, לא לכבות את החשמל, הפעלה מחדש אוטומטית לאחר השדרוג',
	
	'confirmRestart':'האם אתם בטוחים שברצונכם לאתחל את המכשיר?',
	'confirmSetDefault':'האם אתם בטוחים שברצונכם לשחזר את הגדרות ברירת המחדל?',
	'upgradeTips':'מקדמת את הציוד כאשר יש התקדמות רצועת עזה, כאשר לא הנחיה הנחיה קידום משלים, נא לא לבצע כל פעולה. אם מאשר את קידום?',
	'upgradeError1':'בבקשה בחרו קובץ',
	'upgradeError2':'מבצע מיוחד לנצח!',
	'upgradeError3':'מבצע מיוחד לנצח, שגוי:',
	'confirmCheckTime':'אישור זמן תיקון?',
	'setDate':'א ליצור את תאריך. ',
	'setSNTPTips':'בחר את SNTP server.',
	
	
	
	//基本配置本地-网络
	'port':'טרמינל"',
	'networkSet':'פרמטרים תצורת כרטיס רשת',
	'enableDHCP':'הפעל Dhcp',
	'IPAddr':'כתובת IP',
	'subnetMask':'Netmask',
	'gateway':'Gateway',
	'DNSServerOpt':'תצורת שרת DNS',
	'defaultDNS':'שרת DNS מועדף',
	'HTTPport':'הגדרות HTTP',
	'portError':'הערך בפועל של טרמינל היציאה של Http הוא בין 1025 ועד 65534',
	
	
	//基本配置本地-视频
	'veido':'וידאו',
	'streamType':'סוג זרם',
	'oneCodeStream':'זרם י',
	'twoCodeStream':'יד; זוגי',
	'codeType':'Codec',
	'codeStream':'זרם',
	'frame':'קצב תמונות',
	'bit':'קצב ביטים',
	'bitrateType':'בקרת קצב',
	'bitrateType0':'VBR',
	'bitrateType1':'CBR',
	'iFrame':'אני ממסגר מרווח',
	'noSetCn':'איסור סיני קלט!',
	'deviceNameTips':'את הציוד שם הם מעטים , רוב 31 תווים, גם רק יכולים על ידי חלופיות, את המכתב תחת צייר קו והם!',
	'bitTips':'BitRate1 צריך לנוע בטווח שבין 64-12000',
	
	
	//基本配置本地-显示设置
	'displayOptions':'הגדרות תצוגה',
	'imgSet':'התאמת תמונה',
	'brightness':'בהירות',
	'contrast':'ניגודיות',
	'saturtion':'רוויה',
	'sharpness':'חדות',
	
	'ircutFilterTime':'Ircut  זמן מסנן',
	'ircutMode':'מצב Ircu t',
	'ircutMode0':'LDR שחור לבן',
	'ircutMode1':'צבע',
	'ircutMode2':'וידאו אוטומטי',
	'ircutMode3':'חור לבן',
	
	'ae':'חשיפה',
	'aeMode':'חשיפה',
	'auto':'אוטומטי',
	'hand':'ידני',
	'shutter':'צמצם',
	
	'backlight':'עם תאורה אחורית',
	'backlightIn':'שיפור תאורה אחורית',
	'close':'כבוי',
	'open':'פעיל',
	'backlightNum':'תאורה אחורית',
	'small':'מירבי',
	'middle':'אמצעי',
	'big':'מינימום',
	'gainControl':'בקרת הגברה',
	
	'whiteBalance':'איזון לבן',
	'redGain':'הגברה אדומה',
	'greenGain':'הגברה ירוקה',
	'blueGain':'הגברה כחולה',
	
	'vedioSet':'כוונון תדר וידאו',
	'dnrModel':'מצב הפחתת רעשים דיגיטל',
	'dnrModel0':'כבוי;',
	'dnrModel1':'2D DNR',
	'dnrModel2':'3D DNR',
	'dnrModel3':'כל פותח',
	
	'imgAdd':'שיפור תמונה',
	'flickerControl':'בקרת הבהוב',
	'flickerControl0':'NTSC בתוך הבית',
	'flickerControl1':'PAL בתוך הבית',
	'flickerControl2':'מחוץ לבית',
	'sensorLinear':'חיישן WDR לינארי',
	
	'defog':'מודל defog',
	'defogModel':'מודל defog',
	'defogNum':'defog כוח',
	'setSlideTips':'נא ליצור את ערך בין 0-255',
	
	
	
	//基本配置本地-安全
	'userControl':'ניהול משתמשים',
	'user':'שם משתמש',
	'right':'רשות',
	'eidt':'ערוך',
	'del':'מחק',
	'adduser':'משתמש מוסיף',
	'admin':'מנהל',
	'handler':'מפעיל',
	'userEdit':'ערוך',
	'userType':'סוג המשתמש',
	'confirmPwd':'אשר סיסמה',
	'pwdTips0':'הסיסמה צריכה להכיל 1 תווים לפחות ו-31 תווים לכל היותר',
	'pwdTips1':'הסיסמאות לא מתאימות',
	'usertips0':'הגעתם לשיא מספר המשתמשים!',
	'usertips1':'שם המשתמש צריך לכלול לפחות 1 תווים ועד 31 תווים לכל היותר"',
	'usertips2':'משלים את גידול משתמש חדש',
	'usertips3':'המשתמש קיים כבר, האם תרצ',
	'error':'לקוי',
	
	
	
	
	//高级配置-系统
	'setTimeRestart':'מתוכנן אתחול מחדש',
	'notSet':'יום ראשון',
	'weekDay0':' יום חמישי',
	'weekDay1':'היום ו',
	'weekDay2':' ביום רביעי',
	'weekDay3':' שלישי',
	'weekDay4':' השנייה',
	'weekDay5':' יומי',
	'weekDay6':'מעולם',
	'weekDay7':'יום שבת',
	'weekDay8':'שבועי',
	'weekDay9':'לחודש',
		'weekDay10':'יפן',
	'weekDay11':'זמן',
	'weekDay12':'שנית',

	
	
	//高级配置-本地网络
	'other':'אחרים',
	'ddnsType':'סוג DDNS',
	'peanutShells':'Oray',
	'domain':'שם האתר',
	'ddnsUser': 'חשבון DDNS',
	'ddnsPwd':'סיסמת DDNS',
	'ddnsState':'מצב החיבור',
	'landSuccess':'הרישום בוצע בהצלחה',
	'serverType':'סוג השירות',
	'serverTypeName':'משתמש רגיל',
	'serverLink':'קישורים לספקי שירותים',
	
	'ftpServer':'שרת FTP',
	'savePath':'העלאת קובץ',
	
	'sendUser':'שולח',
	'sendAddr':'שולח',
	'smtpServer':'שרת SMTP',
	'checkInfo':'אישור מידע',
	'reviewUser':'מקבלי',
	'reviewAddr':'דוא',
	'vedioCheckPwd':'אימות סיסמא וידאו',
	'loginFailed':'רושם את התבוסה',
	'loginSuccess':'כניסה מוצלחת',
	'logining':'התחבר',
	
	'cloudstoragetype':'סוג אחסון בענן',
	'web':'אתר ענן',
	'authcode':'קוד אבטחה',
	'totalcapacity':'הקיבולת הכוללת',
	'usedcapacity':'משמש',
	'bound':'Bound',
	'unbound':'מאוגד',
	'binding':'כריכה',
	'unbind':'פריקות',
	
	
	//高级配置-图像
	'osdOpt':'הגדרות פריסה',
	'showTime':'שעה',
	'showText':'מלל תפריט תצוגה',
	'dateFormat':'פורמט תאריך',
	'date0':'DD/MM/YYYY',
	'date1':'MM/DD/YYYY',
	'date2':'YYYY/MM/DD',
	'osdPosition':'מיקום תפריט תצוגה',
	'pos0':'שמאל_תחתון',
	'pos1':'שמאל_עליון',
	'osdText':'מלל תפריט תצוגה',
	'mirror':'מראה',
	'mirror1':'שניהם',
	'mirror2':'אופקי',
	'mirror3':'נכי',
	'aisleMode':'מסדרון דפוס',
	'setOn':'פתיחת',
	'RotateAngle90':'90 מעלות',
	'RotateAngle270':'270 מעלות',
	'osdTips':'את הטקסט OSD לא ניתן ליצור באופן מרחבי כפי',
	
	
	//高级配置-事件
	'motionDetecting':'זיהוי תנועה',
	'privacyMasking':'מסכת פרטיות',
	'alarmSet':'הגדרות מעורר',
	
	'optMode':'שחזר',
	'sensitivity':'רגישות',
	'selAll':'בחר הכל',
	'clearAll':'מחק הכל',
	
	'maskTips':'עצה: הפרטיות יכולה להיגזר רק השלושה אזורים',
	'area1':'אזור1',
	'area2':'אזור2',
	'area3':'אזור3',
	'NoRoiArea':'במסגרת שיעור האזור ללא החזר על השקעה',
	'QpRelative':'ערך QP יחסית',
	'QpAbsolute':'ערך מוחלט QP',
	
	'openAlarm':'הפעל התרעה',
	'tillTime':'משך התרעה',
	'tillTime0':'10 שניות ',
	'tillTime1':'30 שניות ',
	'tillTime2':'1 דקות',
	'tillTime3':'5 דקות ',
	'tillTime4':'10 דקות',
	'tillTime5':'יעילה ללא הפסקה',
	
	'triggerAlarm':'מעורר ההתרעה',
	'alarmAction':'בהתרעה',
	'uploadFtp':'טען בעזרת FTP',
	'fileType':'פורמט הקובץ',
	'uploadSmtp':'העלה דרך SMTP',
	'uploadCloud':'העלאת ענן',
	
	
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
	'GMT38':'GMT+7 Bangkok, Jakarta, Hanoi',
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
	'save':'שמור',
	'browse':'סורק',
	'saved':'נשמר בהצלחה!',
	'savedfail':'לא הצליח להציל!',
	'confirmSave':'שימור אישור?',
	'confirmDel':'מחיקת האישור?',
	'setDefault':'על שחזר ברירות מחדל',
	'confirm':'אשר',
	'cancel':'בטל'
	
};













