//保加利亚语
if($.timepicker){
	(function($) {
		$.timepicker.regional['zh-CN'] = {
			timeOnlyTitle: 'Изберете време',
			timeText: 'време',
			hourText: 'час',
			minuteText: 'минута',
			secondText: 'секунди',
			currentText: 'Час',
			closeText: 'изключване',
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
				timeOnlyTitle: 'Изберете време',
				timeText: 'време',
				hourText: 'час',
				minuteText: 'минута',
				secondText: 'секунди',
				currentText: 'Час',
				closeText: 'изключване',
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
	'labOpensound':'Open Sound Off',
	'isoLab':'режим на ISO',
	'iso0':'нормален',
	'iso1':'ISO+',
		
	'setSlideTips2':'Определете стойността между 0-100',
	'sound':'звукова честота',
	'soundOption':'Audio Configuration',
	'openSound':'Open Audio',
	'inSound':'Audio Input',
	'inSound0':'Mic Input',
	'inCount':'Input Level',
		
	'p2pState':'Connection Status',
	'p2pSuccess':'свързването е успешно',
	'p2pFailure':'Неуспешно свързване',
		
	'tipsLog':'Вход Export',
	'logPaht':'Влезте Export спести пътека',
		
	'sensorLinear0':'изключване',
	'sensorLinear1':'автоматичен',
	'sensorLinear2':'слаб',
	'sensorLinear3':'умерен',
	'sensorLinear4':'силен',
	'sensorLinear5':'супер',
		
	'emptyTips':'Точките, които не могат да бъдат определени нулеви',
	'osdTextTips':'',
	'portTips':'Port може да се настрои само между 0-65535',
	'vedioFileBag':'Размер на видео пакет',
	'inTips':'Аз Н',
	'formatErr':'деформиран',
	'optionsLoading':'моля изчакайте',
		
	//登录页面
	'login':'влизане',
	'userName':'потребителско име',
	'pwd':'парола',
	'setLang':'избор на език',
	'remenberPwd':'Запомни паролата',
	'loginBtn':'влизане',
	'alertLoginErr':'Вход неуспешно, проверете вашия акаунт и парола са грешни。',
	
	//框架页面
	'realTime':'Преглед на живо',
	'logSearch':'Вход Query',
	'options':'Configuration',
	'exit':'отпадат',
	'exitTips':'Потвърдете Exit?',
	
	//实时预览
	'setPic':'Screenshot',
	'fd':'уголеми',
	'play':'Предавания',
	'stop':'Спри',
	'starRecord':'започнете записа',
	'endRecord':'Край на запис',
	'mainStream':'Главния поток',
	'childStream':'Sub-поток',
	
	//日志查询页面
	'logNum':'сериен номер',
	'logTime':'време',
	'logDetail':'За повече информация',
	'beginTime':'Начален Час',
	'endTime':'End Time',
	'search':'намирам',
	'setEmpty':'ясно',
	'setTimeTips1':'Моля изберете заявки началните и крайните часове！',
	'setTimeTips2':'Времето на края трябва да бъде по-голямо от времето за стартиране！',
	
	//配置   菜单
	'localOptions':'Local Configuration',
	'baseOptions':'Основна конфигурация',
	'system':'система',
	'systemOptions':'система конфигурация',
	'localNet':'Локална мрежа',
	'vedio':'видео',
	'image':'изображение',
	'safety':'сигурност',
	'advanced':'Advanced Configuration',
	'event':'събитие',
	
	
	
	//本地配置-本地配置
	'playParam':'параметри на възпроизвеждане',
	'protocolType':'протокол Type',
	'playProperty':'Изпълнение Player',
	'propertyFirst':'Приоритет Изпълнение',
	'realFirst':'Real добър',
	'blance':'Равномерно балансиран',
	'speedFirst':'Плавност',
	'imageType':'Capture файлов формат',
	'vedioFiles':'Видео файловете',
	'bagSizes':'Video размер на файла от опаковки',
	'vedioPath':'Видео файл пътека',
	'playbackPath':'Playback изтегляне спести пътека',
	'imgAndClip':'Улавяне и редактиране',
	'previewImgPath':'Anteprima Istantanea Save Path',
	'playbackImgPath':'Playback Snapshot Save Path',
	'playbackClipPath':'Възпроизвеждане Clip спести пътека',
	
	
	//基本配置－系统
	'deviceInfo':'Информация за устройството',
	'timeOption':'Time Settings',
	'systemSet':'За поддръжка на системата',
	
	'baseInfo':'основна информация',
	'deviceName':'Име На Устройството',
	'hardwareVer':'Hardware Version',
	'softwareVer':'Software Version',
	'channel':'номер на канала',
	
	'timeZone':'часова зона',
	'checkTime':'синхронизиране',
	'deviceTime':'оборудване Time',
	'NTPCheckTime':'NTP времето',
	'SNTPServer':'SNTP сървър',
	'handCheck':'Ръчна корекция',
	'setTime':'Задаване на час',
	'sameOfPC':'Синхронизация с компютър',
	'PCTime':'Компютърна Time',
	'checNvr':'NVR забранява модификация IPC Time',
	
	'deviceRestart':'рестартиране на устройството',
	'restartDevice':'Reboot',
	'setDefaultTips':'Възстановяване на фабрични настройки',
	'setDefaultTips1':' Напълно възстанови параметрите на устройството към фабричните настройки。',
	'upgrade':'Upgrade',
	'upgradeFile':'Upgrade файл',
	'upgradeProgress':'Upgrade Progress',
	'explain':'обяснение',
	'explainTips':'Надграждането отнема 1-10 минути, не изключвайте захранването, завърши автоматичен рестарт след ъпгрейд',
	
	'confirmRestart':'Потвърдете Reboot?',
	'confirmSetDefault':'Потвърдете Възстановяване на фабрични настройки?',
	'upgradeTips':'Когато ъпгрейд прогрес бар оборудване ще се предполага, че не подкана ъпгрейд е пълна, не правя нищо. Сигурни ли сте, Upgrade？',
	'upgradeError1':'Не избраха пакета за надстройка, ъпгрейд прекъсване。',
	'upgradeError2':'надграждането провали!',
	'upgradeError3':'Upgrade провали с грешка:',
	'confirmCheckTime':'Потвърдете време корекция?',
	'setDate':'Моля, задайте датата.',
	'setSNTPTips':'Моля изберете сървъра SNTP.',
	
	
	
	//基本配置本地-网络
	'port':'порт',
	'networkSet':'NIC конфигурационни параметри',
	'enableDHCP':'Дали HDCP поддръжка',
	'IPAddr':'IP адреси',
	'subnetMask':'Subnet Mask',
	'gateway':'Default Gateway',
	'DNSServerOpt':'Конфигурацията на DNS сървъра',
	'defaultDNS':'Предпочитан DNS сървър',
	'HTTPport':'HTTP порт',
	'portError':'Setup се провали, номера на порта може да се настрои само между 1024-65535。',
	
	
	//基本配置本地-视频
	'veido':'видео',
	'streamType':'Stream Type',
	'oneCodeStream':'Single-поток',
	'twoCodeStream':'Dual-поток',
	'codeType':'Encoding',
	'codeStream':'поток',
	'frame':'скорост на кадрите',
	'bit':'Bit Rate',
	'bitrateType':'Variable (фиксиран) ставка',
	'bitrateType0':'с фиксиран лихвен процент',
	'bitrateType1':'VBR',
	'iFrame':'I-кадър интервал',
	'noSetCn':'Забраняват вноса на китайски!',
	'deviceNameTips':'Име на устройството поне един символ, до 31 символа, а само цифри, букви и долни!',
	'bitTips':'Битовата скорост в диапазона от 64-12000!',
	
	
	//基本配置本地-显示设置
	'displayOptions':'Настройки на дисплея',
	'imgSet':'настройка на изображението',
	'brightness':'яркост',
	'contrast':'контраст',
	'saturtion':'насищане',
	'sharpness':'острота',
	
	'ircutFilterTime':'Ircut време преобразуване',
	'ircutMode':'Ircut режим',
	'ircutMode0':'LDR автоматично',
	'ircutMode1':'Видео Auto',
	'ircutMode2':'Color Mode',
	'ircutMode3':'Черно и бяло',
	
	'ae':'експозиция',
	'aeMode':'режим на експонация',
	'auto':'автоматичен',
	'hand':'Ръчно',
	'shutter':'Electronic Shutter',
	
	'backlight':'Backlit',
	'backlightIn':'BLC',
	'close':'изключи',
	'open':'отворено',
	'backlightNum':'Backlit сума',
	'small':'най-малко',
	'middle':'умерен',
	'big':'максимален',
	'gainControl':'Gain корекция',
	
	'whiteBalance':'баланс на бялото',
	'redGain':'Red Gain',
	'greenGain':'Green Gain',
	'blueGain':'Blue Gain',
	
	'vedioSet':'Видео Tuning',
	'dnrModel':'Dijital Gürültü Azaltma',
	'dnrModel0':'изключване',
	'dnrModel1':'Цифрово шумопотискане(2D)',
	'dnrModel2':'Цифрово шумопотискане(3D)',
	'dnrModel3':'пълен',
	
	'imgAdd':'подобрение на изображението',
	'flickerControl':'Мига Control',
	'flickerControl0':'Закрит NTSC',
	'flickerControl1':'Закрит PAL',
	'flickerControl2':'на открито',
	'sensorLinear':'Широк динамичен превключвател',
	
	'defog':'Defogging',
	'defogModel':'Режим Defogging',
	'defogNum':'Defogging сила',
	'setSlideTips':'Определете стойността между 0-255。',
	
	
	
	//基本配置本地-安全
	'userControl':'управление на потребителите',
	'user':'потребител',
	'right':'компетентност',
	'eidt':'редактор',
	'del':'изтривам',
	'adduser':'на потребителите да добавят',
	'admin':'администратор',
	'handler':'оператор',
	'userEdit':'Потребителите да редактират',
	'userType':'Потребителят Type',
	'confirmPwd':'Потвърди Парола',
	'pwdTips0':'Парола поне един символ, максимум 31 знака, а само цифри, букви и долни!',
	'pwdTips1':'Password два пъти непоследователност!',
	'usertips0':'Потребителите се достигне граница, не можем да добавим!',
	'usertips1':'Име поне един символ, максимум 31 знака, а само цифри, букви и долни!',
	'usertips2':'Се добавя изцяло ново ръководство.',
	'usertips3':'Потребителят вече съществува!',
	'error':'погрешно',
	
	
	
	
	//高级配置-系统
	'setTimeRestart':'Timing рестарт',
	'notSet':'никога',
	'weekDay0':'В Понеделник',
	'weekDay1':'Във Вторник',
	'weekDay2':'В Сряда',
	'weekDay3':'четвъртък',
	'weekDay4':'петък',
	'weekDay5':'В Събота',
	'weekDay6':'неделя',
	'weekDay7':'всеки ден',
	'weekDay8':'седмично',
	'weekDay9':'месечно',
		'weekDay10':'Япония',
	'weekDay11':'време',
	'weekDay12':'втори',

	
	
	//高级配置-本地网络
	'other':'друг',
	'ddnsType':'DDNS Type',
	'peanutShells':'фъстъчено черупки',
	'domain':'име на домейн',
	'ddnsUser':'DDNS потребителя',
	'ddnsPwd':'DDNS парола',
	'ddnsState':'DDNS Status',
	'landSuccess':'Вход успешно',
	'serverType':'Тип на обслужване',
	'serverTypeName':'Обикновените потребители',
	'serverLink':'БЪРЗИ ВРЪЗКИ',
	
	'ftpServer':'FTP сървър',
	'savePath':'пътека за съхранение',
	
	'sendUser':'подател',
	'sendAddr':'От Адрес',
	'smtpServer':'SMTP сървър',
	'checkInfo':'проверка на информацията',
	'reviewUser':'адресат',
	'reviewAddr':'Адрес За Доставка',
	'vedioCheckPwd':'Видео удостоверяване с парола е активирана',
	'loginFailed':'неуспешно влизане',
	'loginSuccess':'Вход успешно',
	'logining':'влизане',
	
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
	'osdOpt':'настройките OSD',
	'showTime':'време за шоу',
	'showText':'Текст Display',
	'dateFormat':'Дата Format',
	'date0':'Ден / месец / година',
	'date1':'Месец / ден / година',
	'date2':'Година / месец / ден',
	'osdPosition':'OSD позиция',
	'pos0':'наляво',
	'pos1':'Долно ляво',
	'osdText':'OSD текст',
	'mirror':'Mirroring',
	'mirror1':'вертикален',
	'mirror2':'ниво',
	'mirror3':'Хоризонтално и вертикално',
	'aisleMode':'Коридор режим',
	'setOn':'отворено',
	'RotateAngle90':'90 градуса',
	'RotateAngle270':'270 градуса',
	'osdTips':'"OSD Текст" не може да бъде настроен на нула!!',
	
	
	
	//高级配置-事件
	'motionDetecting':'детекция на движение',
	'privacyMasking':'ПОВЕРИТЕЛНОСТ',
	'alarmSet':'настройките на будилника',
	
	'optMode':'Mode Configuration',
	'sensitivity':'чувствителност',
	'selAll':'Избери всички',
	'clearAll':'изчисти всичко',
	
	'maskTips':'Съвет: можете да рисувате само три региона',
	'area1':'Площ 1',
	'area2':'Площ 2',
	'area3':'Площ 3',
	'NoRoiArea':'Non-ROI ставка регион конструкция',
	'QpRelative':'Относителна стойност QP',
	'QpAbsolute':'QP абсолютна стойност',
	
	'openAlarm':'Open аларма',
	'tillTime':'продължителност',
	'tillTime0':'10 секунди',
	'tillTime1':'30 секунди',
	'tillTime2':'1 минута',
	'tillTime3':'5 минута',
	'tillTime4':'10 минута',
	'tillTime5':'Винаги активна',
	
	'triggerAlarm':'алармата се задейства',
	'alarmAction':'Allarme linkage',
	'uploadFtp':'качване FTP',
	'fileType':'File Format',
	'uploadSmtp':'Качи SMTP',
	'uploadCloud':'Качи Cloud',

	
	
	
	//时区表
	'GMT0':'GMT-12 Ениветок, Куаджалейн',
	'GMT1':'GMT-11.5',
	'GMT2':'GMT-11 Midway Island, Самоа',
	'GMT3':'GMT-10.5',
	'GMT4':'GMT-10 Hawaii',
	'GMT5':'GMT-9.5',
	'GMT6':'GMT-09 Аляска',
	'GMT7':'GMT-8.5',
	'GMT8':'GMT-08 Pacific Time (САЩ и Канада), Тихуана',
	'GMT9':'GMT-7.5',
	'GMT10':'GMT-07 Планинско време (САЩ и Канада), Аризона',
	'GMT11':'GMT-6.5',
	'GMT12':'GMT-06 Централно време (САЩ и Канада), Мексико Сити, Тегусигалпа, Saskatchewan',
	'GMT13':'GMT-5.5',
	'GMT14':'GMT-05 Източно време (САЩ и Канада), Индиана (East), Богота, Лима',
	'GMT15':'GMT-4.5',
	'GMT16':'GMT-04 Атлантическо време (Канада), Каракас, La Paz',
	'GMT17':'GMT-3.5',
	'GMT18':'GMT-03 Brasilia, Buenos Aires, Georgetown',
	'GMT19':'GMT-2.5',
	'GMT20':'GMT-02 Mid-Atlantic',
	'GMT21':'GMT-1.5',
	'GMT22':'GMT-01 Азорските Кабо Верде острови',
	'GMT23':'GMT-0.5',
	'GMT24':'GMT+00 Дъблин, Единбург, Лондон, Лисабон, Монровия, Casablanca',
	'GMT25':'GMT+0.5',
	'GMT26':'GMT+01 Berlin, Stockholm, Roma, Bern, Brüksel, Viyana, Paris, Madrid, Amsterdam, Prag, Var?ova, Budape?te',
	'GMT27':'GMT+1.5',
	'GMT28':'GMT+02 Атина, Хелзинки, Истанбул, Кайро, Източна Европа, Хараре, Претория, Израел',
	'GMT29':'GMT+2.5',
	'GMT30':'GMT+03 Багдад, Кувейт, Найроби, Рияд, Москва, Санкт Петербург, Казан, Volgograd',
	'GMT31':'GMT+3.5',
	'GMT32':'GMT+04 Абу Даби, Мускат, Tbilisi',
	'GMT33':'GMT+4.5',
	'GMT34':'GMT+05 Исламабад, Карачи, Екатеринбург, Ташкент',
	'GMT35':'GMT+5.5',
	'GMT36':'GMT+06 Алмати, Дака',
	'GMT37':'GMT+6.5',
	'GMT38':'GMT+07 Банкок, Джакарта, Hanoi',
	'GMT39':'GMT+7.5',
	'GMT40':'GMT+08 Тайпе, Пекин, Чунцин, Урумчи, Хонг Конг, Пърт, Сингапур',
	'GMT41':'GMT+8.5',
	'GMT42':'GMT+09 Токио, Осака, Сапоро, Сеул, Якутск',
	'GMT43':'GMT+9.5',
	'GMT44':'GMT+10 Бризбейн, Мелбърн, Сидни, Гуам, Порт Морсби, Владивосток, Хобарт',
	'GMT45':'GMT+10.5',
	'GMT46':'GMT+11 Магадан Соломоновите острови, Нова Каледония',
	'GMT47':'GMT+11.5',
	'GMT48':'GMT+12 Фиджи, Камчатка, Маршалови острови, Wellington, Auckland',
		
	//一些通用按钮与提示
	'save':'Save',
	'browse':'паса',
	'saved':'Тя е запазена.',
	'savedfail':'Неуспешно запазване!',
	'confirmSave':'Потвърдете спести?',
	'confirmDel':'Потвърдете изтриване?',
	'setDefault':'Възстанови Настройките По Подразбиране',
	'confirm':'потвърждавам',
	'cancel':'Отказ'
	
};













