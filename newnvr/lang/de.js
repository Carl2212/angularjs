//德语
if($.timepicker){
	(function($) {
		$.timepicker.regional['zh-CN'] = {
			timeOnlyTitle: 'Wählen Sie die Zeit',
			timeText: 'Zeit',
			hourText: 'Stunde',
			minuteText: 'Minute',
			secondText: 'Sekunden',
			currentText: 'Zeit',
			closeText: 'Schließen',
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
				timeOnlyTitle: 'Wählen Sie die Zeit',
				timeText: 'Zeit',
				hourText: 'Stunde',
				minuteText: 'Minute',
				secondText: 'Sekunden',
				currentText: 'Zeit',
				closeText: 'Schließen',
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
	'isoLab':'ISO-Modus',
	'iso0':'normal',
	'iso1':'ISO+',
		
	'setSlideTips2':'Stellen Sie den Wert zwischen 0-100',
	'sound':'Hörfrequenz',
	'soundOption':'Audio Configuration',
	'openSound':'Open Audio',
	'inSound':'Audio-Eingang',
	'inSound0':'Mikrofoneingang',
	'inCount':'Input Level',
		
	'p2pState':'Verbindungsstatus',
	'p2pSuccess':'die Verbindung erfolgreich ist',
	'p2pFailure':'Verbindung Fehlgeschlagen',
		
	'tipsLog':'Anmelden Export',
	'logPaht':'Melden Sie exportieren Pfad',
		
	'sensorLinear0':'schließen',
	'sensorLinear1':'automatisch',
	'sensorLinear2':'schwach',
	'sensorLinear3':'mäßig',
	'sensorLinear4':'stark',
	'sensorLinear5':'super',
		
	'emptyTips':'Einzelteile können nicht null gesetzt werden',
	'osdTextTips':'',
	'portTips':'Port kann nur zwischen 0-65535 eingestellt werden',
	'vedioFileBag':'Video Packungsgröße',
	'inTips':'in',
	'formatErr':'malformed',
	'optionsLoading':'Konfiguration, bitte warten Sie',
		
	//登录页面
	'login':'Anmelden',
	'userName':'Benutzersname',
	'pwd':'Passwort',
	'setLang':'Sprachauswahl',
	'remenberPwd':'Speichern',
	'loginBtn':'Anmelden',
	'alertLoginErr':'Anmeldung fehlgeschlagen. Stellen Sie sicher, dass Sie Benutzernamen und Passwort genau so eingegeben haben！',
	
	//框架页面
	'realTime':'Live Video',
	'logSearch':'Protokollsuche',
	'options':'Konfig',
	'exit':'Uitgang',
	'exitTips':'Beenden bestätigen?',
	
	//实时预览
	'setPic':'Screenshot',
	'fd':'vergrößern',
	'play':'Broadcast',
	'stop':'Stopp',
	'starRecord':'die Aufnahme zu starten',
	'endRecord':'Aufnahme beenden',
	'mainStream':'Ströme 1',
	'childStream':'Ströme 2',
	
	//日志查询页面
	'logNum':'ID',
	'logTime':'Zeit',
	'logDetail':'Informationen',
	'beginTime':'Anfangszeit',
	'endTime':'Endzeit',
	'search':'Suche',
	'setEmpty':'Löschen',
	'setTimeTips1':'Bitte wählen Sie Abfrage Start- und Endzeit!',
	'setTimeTips2':'Die Endzeit muss größer als die Anfangszeit!',
	
	//配置   菜单
	'localOptions':'Lokale Konfiguration',
	'baseOptions':'Grundmenü',
	'system':'System',
	'systemOptions':'System Konfiguration',
	'localNet':'Netzwerk',
	'vedio':'Einstellungen',
	'image':'Bilder',
	'safety':'Sicherheit',
	'advanced':'Erweiteres Setup-Menü',
	'event':'Ereignisse',
	
	
	
	//本地配置-本地配置
	'playParam':'Live-Ans.-Parameter',
	'protocolType':'Protokoll',
	'playProperty':'Live-Ans.-Leistung',
	'propertyFirst':'Geringste Verzögerung',
	'realFirst':'chtzeit',
	'blance':'Ausgewogen',
	'speedFirst':'Opt. Fluss',
	'imageType':'Bild Format',
	'vedioFiles':'Aufz.-Dateieinst.',
	'bagSizes':'Aufz.-Dateigröße',
	'vedioPath':'Speichern unter',
	'playbackPath':'Download-Dat. sp. als',
	'imgAndClip':'Bild/Beschn.-Einst.',
	'previewImgPath':'Live-Schnappsch. sichern unter',
	'playbackImgPath':'Schnappsch. sp. bei Wdgb. zu',
	'playbackClipPath':'Clips sp. unter',
	
	
	//基本配置－系统
	'deviceInfo':'Geräteinformationen',
	'timeOption':'Datum/Zeit',
	'systemSet':'Abmelden',
	
	'baseInfo':'Basisinfo',
	'deviceName':'Gerätname',
	'hardwareVer':'Firmware-Version',
	'softwareVer':'Cod.-Version',
	'channel':'Anzahl Kanäle',
	
	'timeZone':'Zeitzone',
	'checkTime':'SetTime',
	'deviceTime':'Zeit im Camera',
	'NTPCheckTime':'NTP',
	'SNTPServer':'SNTP Server',
	'handCheck':'Manuell Einstellen',
	'setTime':'Zeiteinstellung',
	'sameOfPC':'Mit der Computerzeit synchronisieren',
	'PCTime':'Computer Time',
	'checNvr':'NVR verbieten Modifikation IPC Zeit',
	
	'deviceRestart':'Neu starten',
	'restartDevice':'Neu starten',
	'setDefaultTips':'Werkseinstellungen',
	'setDefaultTips1':'Vollständig Wiederherstellung der Geräteparameter auf die Werkseinstellungen',
	'upgrade':'Upgrade',
	'upgradeFile':'Upgrade Datei',
	'upgradeProgress':'Verbindungsstatus:',
	'explain':'Hinweis:',
	'explainTips':'Der Upgrade-Prozess dauert 1 bis 10 Minuten. Gerät bitte nicht auszuschalten. Es wird anschließend automatisch neu gestartet！',
	
	'confirmRestart':'Reboot zu bestätigen?',
	'confirmSetDefault':'Wiederherstellen der Werkseinstellungen zu bestätigen?',
	'upgradeTips':'Wenn die Geräte-Upgrade Fortschrittsbalken zeigen, dass nicht aufgefordert, die Aktualisierung abgeschlossen ist, nichts zu tun. Sind Sie sicher, Upgrade？',
	'upgradeError1':'Haben Sie nicht wählen Sie die Upgrade-Paket, zu aktualisieren Unterbrechung。',
	'upgradeError2':'Das Upgrade schlägt fehl!',
	'upgradeError3':'Upgrade mit Fehler fehlgeschlagen:',
	'confirmCheckTime':'Bestätigen Korrekturzeit?',
	'setDate':'Bitte stellen Sie das Datum.',
	'setSNTPTips':'Bitte wählen Sie SNTP-Service',
	
	
	
	//基本配置本地-网络
	'port':'Port',
	'networkSet':'NIC-Einstell.',
	'enableDHCP':'DHCP aktivieren',
	'IPAddr':'IP-Adresse',
	'subnetMask':'Subnetzmaske',
	'gateway':'Standard Gateway',
	'DNSServerOpt':'DNS-server',
	'defaultDNS':'Bevorzugter DNS-Server',
	'HTTPport':'HTTP Port',
	'portError':'Der Effektivwert vom Http Port ist 80 oder von 1025 bis 65534',
	
	
	//基本配置本地-视频
	'veido':'Video',
	'streamType':'Stromstyp',
	'oneCodeStream':'Einzeln',
	'twoCodeStream':'Dual',
	'codeType':'Codec',
	'codeStream':'Ströme',
	'frame':'Framerate',
	'bit':'Bitrate',
	'bitrateType':'Rate Kontrolle',
	'bitrateType0':'CBR',
	'bitrateType1':'VBR',
	'iFrame':'Ich Intervall Rahmen',
	'noSetCn':'Verbieten die Einfuhr chinesischer!',
	'deviceNameTips':'Device Name mindestens ein Zeichen, bis zu 31 Zeichen, nur Zahlen, Buchstaben und Unterstriche!',
	'bitTips':'Die Bitrate im Bereich von 64-12000!',
	
	
	//基本配置本地-显示设置
	'displayOptions':'Anzeigeeinstellungen',
	'imgSet':'Bildeinstellung',
	'brightness':'Helligkeit',
	'contrast':'Kontrast',
	'saturtion':'Sättigung',
	'sharpness':'Bildschärfe',
	
	'ircutFilterTime':'Ircuts Filterzeit',
	'ircutMode':'IRCUT Filter',
	'ircutMode0':'LDR Auto',
	'ircutMode1':'Video Auto',
	'ircutMode2':'Farbe',
	'ircutMode3':'Schwarz/Weiss',
	
	'ae':'Belichtungseinstellungen',
	'aeMode':'Belichtungsmodus',
	'auto':'Automatisch',
	'hand':'Manuell',
	'shutter':'Shutter',
	
	'backlight':'Gegenlicht',
	'backlightIn':'Gegenlichtkompensation',
	'close':'Aus',
	'open':'Ein',
	'backlightNum':'Gegenlicht',
	'small':'Min',
	'middle':'Normal',
	'big':'Max',
	'gainControl':'Gain Kontrolle',
	
	'whiteBalance':'Weißabgleich',
	'redGain':'Rot',
	'greenGain':'Grün',
	'blueGain':'Blau',
	
	'vedioSet':'Video Adjustment',
	'dnrModel':'DNR',
	'dnrModel0':'OFF',
	'dnrModel1':'2D DNR',
	'dnrModel2':'3D DNR',
	'dnrModel3':'Voll',
	
	'imgAdd':'Bildoptimierung',
	'flickerControl':'Flimmerregelung',
	'flickerControl0':'Innen NTSC',
	'flickerControl1':'Innen PAL',
	'flickerControl2':'Aussen',
	'sensorLinear':'Linearerfühler WDR',
	
	'defog':'Anti-Beschlag',
	'defogModel':'Anti-Beschlag-Modus',
	'defogNum':'Anti-Beschlag-Stärke',
	'setSlideTips':'Stellen Sie den Wert zwischen 0-255',
	
	
	
	//基本配置本地-安全
	'userControl':'Benutzer',
	'user':'Benutzername',
	'right':'Benutzergruppe',
	'eidt':'Bearbeiten',
	'del':'Löschen',
	'adduser':'Benutzer hinzufügen',
	'admin':'Administrator',
	'handler':'Benutzer',
	'userEdit':'Benutzer bearbeiten',
	'userType':'Level',
	'confirmPwd':'Password bestätigen',
	'pwdTips0':'Das Password soll am wenigsten auf 1 Schriftzeichens and am meinsten auf 16 Zeichens sein,且只能由数字、字母和下划线组成!',
	'pwdTips1':'Falsches Passwort!',
	'usertips0':'Benutzer Limit erreicht ist, können wir nicht hinzufügen!',
	'usertips1':'ID mindestens ein Zeichen, maximal 31 Zeichen, nur Zahlen, Buchstaben und Unterstriche!',
	'usertips2':'Komplett neuer Benutzer hinzugefügt.',
	'usertips3':'Der Benutzer ist bereits vorhanden!',
	'error':'Falsch',
	
	
	
	
	//高级配置-系统
	'setTimeRestart':'Neustart geplant',
	'notSet':'Nie',
	'weekDay0':'Montag',
	'weekDay1':'Dienstag',
	'weekDay2':'Mittwoch',
	'weekDay3':'Freitag',
	'weekDay4':'Donnerstag',
	'weekDay5':'Samstag',
	'weekDay6':'Sonntag',
	'weekDay7':'Täglich',
	'weekDay8':'Wöchentlich',
	'weekDay9':'pro Monat',
		'weekDay10':'Japan',
	'weekDay11':'Zeit',
	'weekDay12':'zweite',

	
	
	//高级配置-本地网络
	'other':'Andere',
	'ddnsType':'DDNS Dienst',
	'peanutShells':'Oray',
	'domain':'Seiten-Name',
	'ddnsUser':'DDNS Dienst',
	'ddnsPwd':'DDNS Password',
	'ddnsState':'Verbindungsstatus',
	'landSuccess':'Anmelden erfolgreich',
	'serverType':'Servicetyp',
	'serverTypeName':'Normaler Nutzer',
	'serverLink':'Anbindung von dem Diensteanbieter',
	
	'ftpServer':'FTP Server',
	'savePath':'Dateiordner',
	
	'sendUser':'Absender',
	'sendAddr':'Absender',
	'smtpServer':'SMTP Server',
	'checkInfo':'Server erfordert Authentifizierung',
	'reviewUser':'Empfänger',
	'reviewAddr':'Empfänger',
	'vedioCheckPwd':'Video Kennwort-Authentifizierung aktiviert ist',
	'loginFailed':'Fehler bei der Anmeldung',
	'loginSuccess':'Login erfolgreich',
	'logining':'einloggen',
	
	'cloudstoragetype':'Cloud-Speicher-Typ',
	'web':'Cloud-Site',
	'authcode':'Sicherheitscode',
	'totalcapacity':'Die Gesamtkapazität',
	'usedcapacity':'Gebraucht',
	'bound':'Gebunden ist',
	'unbound':'Ungebunden',
	'binding':'Die Bindung',
	'unbind':'Entbündelung',
	
	
	//高级配置-图像
	'osdOpt':'Overlay-Einstellungen',
	'showTime':'Zeit',
	'showText':'OSD Text',
	'dateFormat':'Datum Formate',
	'date0':'DD/MM/YYYY',
	'date1':'MM/DD/YYYY',
	'date2':'YYYY/MM/DD',
	'osdPosition':'OSD Position',
	'pos0':'Oben_Links',
	'pos1':'Unten_Links',
	'osdText':'OSD Text',
	'mirror':'Spiegelbild',
	'mirror1':'Vertikal',
	'mirror2':'Horizontal',
	'mirror3':'Beide',
	'aisleMode':'Korridor-Modus',
	'setOn':'Geöffnet',
	'RotateAngle90':'90 Grad',
	'RotateAngle270':'270 Grad',
	'osdTips':'"OSD Text" kann nicht eingestellt zu leer sein!!',
	
	
	
	//高级配置-事件
	'motionDetecting':'Warnung',
	'privacyMasking':'Gemütlichkeit',
	'alarmSet':'Warnung',
	
	'optMode':'Widerherstellen',
	'sensitivity':'Empfindlichkeit',
	'selAll':'Alles wählen',
	'clearAll':'Alles löschen',
	
	'maskTips':'Info: Maximal 3 programmierbare Privatzonen wählbar',
	'area1':'Privatzone1',
	'area2':'Privatzone2',
	'area3':'Privatzone3',
	'NoRoiArea':'Non-ROI Region Bildwiederholrate',
	'QpRelative':'Relative QP-Wert',
	'QpAbsolute':'QP Absolutwert',
	
	'openAlarm':'Alarm aktivieren',
	'tillTime':'Alarmdauer',
	'tillTime0':'10 Sekunden',
	'tillTime1':'30 Sekunden',
	'tillTime2':'1Minute',
	'tillTime3':'5Minute',
	'tillTime4':'10Minute',
	'tillTime5':'Kein Stoppen',
	
	'triggerAlarm':'Alarmtrigger',
	'alarmAction':'Alarm Modem',
	'uploadFtp':'Dateien per FTP hochladen',
	'fileType':'Dateiformat',
	'uploadSmtp':'Dateien per SMTP hochladen',
	'uploadCloud':'Upload Wolke',
	
	
	
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
	'save':'Speichern',
	'browse':'Durchsuchen',
	'saved':'Gespeichert',
	'savedfail':'Fehler beim Speichern!',
	'confirmSave':'Bestätigen Speichern?',
	'confirmDel':'Bestätigen löschen?',
	'setDefault':'Standard wiederherstellen',
	'confirm':'OK',
	'cancel':'Abbrechen'
	
};













