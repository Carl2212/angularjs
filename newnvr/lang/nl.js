//荷兰文
if($.timepicker){
	(function($) {
		$.timepicker.regional['zh-CN'] = {
			timeOnlyTitle: 'Selecteer tijd',
			timeText: 'tijd',
			hourText: 'uur',
			minuteText: 'minuut',
			secondText: 'seconden',
			currentText: 'tijd nu',
			closeText: 'afsluiten',
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
				timeOnlyTitle: 'Selecteer tijd',
				timeText: 'tijd',
				hourText: 'uur',
				minuteText: 'minuut',
				secondText: 'seconden',
				currentText: 'tijd nu',
				closeText: 'afsluiten',
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
	'isoLab':'ISO-modus',
	'iso0':'normaal',
	'iso1':'ISO+',
		
	'setSlideTips2':'Stel de waarde tussen 0-100',
	'sound':'audio frequentie',
	'soundOption':'audio Configuration',
	'openSound':'Open Audio',
	'inSound':'audio Input',
	'inSound0':'microfooningang',
	'inCount':'Input Level',
		
	'p2pState':'Verbindingsstatus',
	'p2pSuccess':'de verbinding is geslaagd',
	'p2pFailure':'verbinding Mislukt',
		
	'tipsLog':'Log Export ',
	'logPaht':'Log Export sparen weg',
		
	'sensorLinear0':'Super',
	'sensorLinear1':'automatisch',
	'sensorLinear2':'zwak',
	'sensorLinear3':'gematigde',
	'sensorLinear4':'sterk',
	'sensorLinear5':'Super',
		
	'emptyTips':'Items kunnen niet null worden ingesteld',
	'osdTextTips':'',
	'portTips':'Port voidaan asettaa vain välillä 0-65535',
	'vedioFileBag':'Video verpakkingsgrootte',
	'inTips':'in',
	'formatErr':'misvormd',
	'optionsLoading':'Configuratie, even geduld aub',
		
	//登录页面
	'login':'Login',
	'userName':'Gebruikers Naam',
	'pwd':'Wachtwoord',
	'setLang':'Kiezen Taal',
	'remenberPwd':'Onthoudt mij',
	'loginBtn':'Login',
	'alertLoginErr':'Inloggen is mislukt, Zorg ervoor dat de gebruikersnaam of wachtwoord！',
	
	//框架页面
	'realTime':'Live Video',
	'logSearch':'Inloggen Zoeken',
	'options':'Config',
	'exit':'Uitgang',
	'exitTips':'Bevestig Exit?',
	
	//实时预览
	'setPic':'screenshot',
	'fd':'vergroten',
	'play':'Broadcast',
	'stop':'stop',
	'starRecord':'start opname',
	'endRecord':'einde opname',
	'mainStream':'Stream 1 ',
	'childStream':'Stream 12',
	
	//日志查询页面
	'logNum':'ID',
	'logTime':'Tijd',
	'logDetail':'Detail',
	'beginTime':'Start Time',
	'endTime':'End Time',
	'search':'Zoeken',
	'setEmpty':'Duidelijk',
	'setTimeTips1':'Selecteer vraag begin- en eindtijd!',
	'setTimeTips2':'De eindtijd moet groter zijn dan de starttijd te zijn!',
	
	//配置   菜单
	'localOptions':'Lokale configuratie',
	'baseOptions':'Basic Setup',
	'system':'Afspelen',
	'systemOptions':'Afspelen configuratie',
	'localNet':'Netwerk',
	'vedio':'Einstellungen',
	'image':'Camera',
	'safety':'Beveiliging',
	'advanced':'Basic Setup',
	'event':'Gebeurtenissen',
	
	
	
	//本地配置-本地配置
	'playParam':'Live view instellingen',
	'protocolType':'Protocol',
	'playProperty':'Live view voorstelling',
	'propertyFirst':'Kortste vertraging',
	'realFirst':'Least Delay',
	'blance':'Balans',
	'speedFirst':'Opt. stroom',
	'imageType':'Beeldformaat',
	'vedioFiles':'Instellingen gegevensbestand',
	'bagSizes':'Grootte gegevensbestand',
	'vedioPath':'Opslaan',
	'playbackPath':'Downloads opslaan in',
	'imgAndClip':'Foto- en clipinstellingen',
	'previewImgPath':'Sla snapshots in live view op',
	'playbackImgPath':'Sla snapshots tijdens afspelen op',
	'playbackClipPath':'Sla clips op',
	
	
	//基本配置－系统
	'deviceInfo':'Afmelden',
	'timeOption':'Tijd instellen',
	'systemSet':'Afmelden',
	
	'baseInfo':'Basisinformatie',
	'deviceName':'Apparaatnummer',
	'hardwareVer':'Firmwareversie',
	'softwareVer':'Codeerversie',
	'channel':'Aantal kanalen',
	
	'timeZone':'Tijdzone',
	'checkTime':'Synchronisatie voltooid.',
	'deviceTime':'Tijd in de camera',
	'NTPCheckTime':'NTP',
	'SNTPServer':'SNTP Server',
	'handCheck':'Handmatig instellen',
	'setTime':'Stel tijd in',
	'sameOfPC':'Synchroniseren met computer tijd',
	'PCTime':'Computer Time',
	'checNvr':'NVR verbieden wijziging IPC Tijd',
	
	'deviceRestart':'Reboot System',
	'restartDevice':'Restart',
	'setDefaultTips':'Terug naar fabrieksinstellingen',
	'setDefaultTips1':'Het apparaat parameters op de fabrieksinstellingen volledig te herstellen',
	'upgrade':'Upgrade',
	'upgradeFile':'Firmware',
	'upgradeProgress':'Status van de verbinding:',
	'explain':'Let op :',
	'explainTips':'Het upgradeproces duurt 1 tot 10 minuten. Zet het apparaat niet uit. Apparaat start vanzelf weer op na het proces.',
	
	'confirmRestart':'Bent u zeker dat het apparaat opnieuw op te starten?',
	'confirmSetDefault':'Bent u zeker dat de fabrieksinstellingen te herstellen?',
	'upgradeTips':'Wanneer de apparatuur upgrade voortgangsbalk suggereren dat niet gevraagd de upgrade is voltooid, doe niets. Weet je het zeker om te upgraden?',
	'upgradeError1':'Ik heb niet kiezen voor de upgrade pakket, upgrade onderbroken.',
	'upgradeError2':'Uploaden bestand is mislukt',
	'upgradeError3':'Upgrade mislukt met fout:',
	'confirmCheckTime':'Bevestig juiste tijd??',
	'setDate':'Gelieve de datum.',
	'setSNTPTips':'Selecteer de SNTP-server.',
	
	
	
	//基本配置本地-网络
	'port':'Poort',
	'networkSet':'NIC-instellingen',
	'enableDHCP':'Activare DHCP',
	'IPAddr':'IP-adres',
	'subnetMask':'Netmask',
	'gateway':'Default Gateway',
	'DNSServerOpt':'DNS-server',
	'defaultDNS':'Geprefereerde DNS-server',
	'HTTPport':'HTTP-poort',
	'portError':'De effectieve waarde van de HTTP-poort is 80 of 1025-65534',
	
	
	//基本配置本地-视频
	'veido':'Video',
	'streamType':'StreamType',
	'oneCodeStream':'Single',
	'twoCodeStream':'Dual',
	'codeType':'Codec',
	'codeStream':'Stream',
	'frame':'Framerate',
	'bit':'Bit Rate',
	'bitrateType':'Rate Control',
	'bitrateType0':'CBR',
	'bitrateType1':'VBR',
	'iFrame':'I rasterinterval',
	'noSetCn':'Verbieden de invoer Chinese!',
	'deviceNameTips':'Device Name minste één teken, maximaal 31 tekens, en alleen cijfers, letters en underscores!',
	'bitTips':'De bit rate in het bereik van 64-12000!',
	
	
	//基本配置本地-显示设置
	'displayOptions':'Scherminstellingen',
	'imgSet':'Afbeelding',
	'brightness':'Helderheid',
	'contrast':'Contrast',
	'saturtion':'Verzadiging',
	'sharpness':'Scherpte',
	
	'ircutFilterTime':'IR-cut Filter Tijd',
	'ircutMode':'IR cut Mode',
	'ircutMode0':'LDR Auto',
	'ircutMode1':'Video Auto',
	'ircutMode2':'Kleur',
	'ircutMode3':'B / W',
	
	'ae':'Belichtingsinstellingen',
	'aeMode':'Exposure Mode',
	'auto':'Auto',
	'hand':'Handboek',
	'shutter':'Sluiter',
	
	'backlight':'BackLight',
	'backlightIn':'Tegenlichtcompensatie',
	'close':'OFF',
	'open':'ON',
	'backlightNum':'BackLight',
	'small':'Min',
	'middle':'Mid',
	'big':'Max',
	'gainControl':'Gain Control',
	
	'whiteBalance':'Witbalans',
	'redGain':'Meer rood',
	'greenGain':'Meer groen',
	'blueGain':'Meer blauw',
	
	'vedioSet':'Video Adjustment',
	'dnrModel':'DNR',
	'dnrModel0':'OFF',
	'dnrModel1':'2D DNR',
	'dnrModel2':'3D DNR',
	'dnrModel3':'Both',
	
	'imgAdd':'Beeldverbetering',
	'flickerControl':'Flicker Controle',
	'flickerControl0':'Indoor NTSC',
	'flickerControl1':'PAL Indoor',
	'flickerControl2':'Outdoor',
	'sensorLinear':'Sensor Linear WDR',
	
	'defog':'Ontwasemen',
	'defogModel':'Ontwasemen mode',
	'defogNum':'Ontwasemen kracht',
	'setSlideTips':'Stel de waarde tussen 0-255.',
	
	
	
	//基本配置本地-安全
	'userControl':'Gebruiker',
	'user':'Gebruikers Naam',
	'right':'Autoriteit',
	'eidt':'Eitor',
	'del':'Verwijder',
	'adduser':'Toevoegen',
	'admin':'Admin',
	'handler':'Operator',
	'userEdit':'Eitor',
	'userType':'Level',
	'confirmPwd':'Bevestig wachtwoord',
	'pwdTips0':'Wachtwoord moet minimaal 1 tekens en maximaal 16 tekens lang zijn!',
	'pwdTips1':'Wachtwoord mismatch!',
	'usertips0':'Gebruikers limiet is bereikt, kunnen we niet toevoegen!',
	'usertips1':'Gebruikersnaam minste één teken, een maximum van 31 tekens, en alleen cijfers, letters en underscores!',
	'usertips2':'Compleet nieuwe gebruiker wordt toegevoegd.',
	'usertips3':'De gebruiker bestaat!',
	'error':'Mis',
	
	
	
	
	//高级配置-系统
	'setTimeRestart':'Geplande reboot',
	'notSet':'Nooit',
	'weekDay0':'Maandag',
	'weekDay1':'Dinsdag',
	'weekDay2':'Woensdag',
	'weekDay3':'Vrijdag',
	'weekDay4':'Donderdag',
	'weekDay5':'Zaterdag',
	'weekDay6':'Zondag',
	'weekDay7':'Dagelijks',
	'weekDay8':'wekelijks',
	'weekDay9':'per maand',
		'weekDay10':'Japan',
	'weekDay11':'tijd',
	'weekDay12':'tweede',

	
	
	//高级配置-本地网络
	'other':'Overigen',
	'ddnsType':'DDNS Type',
	'peanutShells':'Oray',
	'domain':'Plaats naam',
	'ddnsUser':'DDNS-account',
	'ddnsPwd':'DDNS Wachtwoord',
	'ddnsState':'Status van de verbinding',
	'landSuccess':'Login geslaagd',
	'serverType':'Dienst Type',
	'serverTypeName':'Gewone gebruiker',
	'serverLink':'Links naar dienstverleners',
	
	'ftpServer':'FTP-server',
	'savePath':'Bestand uploaden',
	
	'sendUser':'Afzender',
	'sendAddr':'Afzender',
	'smtpServer':'SMTP-server',
	'checkInfo':'Mijn server is verificatie vereist',
	'reviewUser':'Ontvanger',
	'reviewAddr':'E-mail',
	'vedioCheckPwd':'Video wachtwoord is ingeschakeld',
	'loginFailed':'Inloggen mislukt',
	'loginSuccess':'login succesvol',
	'logining':'Log in',
	
	'cloudstoragetype':'Cloud opslag type',
	'web':'Cloud Site',
	'authcode':'Beveiligingscode',
	'totalcapacity':'De totale capaciteit',
	'usedcapacity':'Gebruikt',
	'bound':'Bound',
	'unbound':'Geconsolideerd',
	'binding':'bindend',
	'unbind':'Ontvlechting',
	
	
	//高级配置-图像
	'osdOpt':'Overlay instellen',
	'showTime':'Tijd',
	'showText':'OSD-tekst',
	'dateFormat':'Date Format',
	'date0':'DD/MM/YYYY',
	'date1':'MM/DD/YYYY',
	'date2':'YYYY/MM/DD',
	'osdPosition':'OSD positie',
	'pos0':'Linksboven',
	'pos1':'Linksonder',
	'osdText':'OSD-tekst',
	'mirror':'Spiegel',
	'mirror1':'VERTICAAL',
	'mirror2':'Horizontale',
	'mirror3':'BEIDE',
	'aisleMode':'Corridor mode',
	'setOn':'Open',
	'RotateAngle90':'90 graden',
	'RotateAngle270':'270 graden',
	'osdTips':'"OSD-Text" kan niet worden ingesteld op null!!',
	
	
	
	//高级配置-事件
	'motionDetecting':'Beweging',
	'privacyMasking':'Privacy',
	'alarmSet':'Alarm',
	
	'optMode':'Gebiedsinstellingen',
	'sensitivity':'Gevoeligheid',
	'selAll':'Selecteer alle',
	'clearAll':'Verwijder alle',
	
	'maskTips':'Tip: privacy kan alleen de drie regio\'s te trekken',
	'area1':'Regio1',
	'area2':'Regio2',
	'area3':'Regio3',
	'NoRoiArea':'Non-ROI regio frame rate',
	'QpRelative':'Relatieve QP waarde',
	'QpAbsolute':'QP absolute waarde',
	
	'openAlarm':'Enable Alarm',
	'tillTime':'Alarmduur',
	'tillTime0':'10 seconds',
	'tillTime1':'30 seconds',
	'tillTime2':'1 minute',
	'tillTime3':'5 minutes',
	'tillTime4':'10 minutes',
	'tillTime5':'Non-Stop',
	
	'triggerAlarm':'Alarm Trigger',
	'alarmAction':'Bij Alarm',
	'uploadFtp':'Uploaden via FTP',
	'fileType':'File Format',
	'uploadSmtp':'Uploaden Via SMTP',
	'uploadCloud':'uploaden Cloud',
	
	
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
	'save':'Besparen',
	'browse':'Scan',
	'saved':'Het is opgeslagen.',
	'savedfail':'Mislukt om op te slaan!',
	'confirmSave':'Bevestigen opslaan?',
	'confirmDel':'Bevestig Verwijder?',
	'setDefault':'Restore Defaults',
	'confirm':'OK',
	'cancel':'Annuleren'
	
};













