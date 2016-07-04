//意大利语
if($.timepicker){
	(function($) {
		$.timepicker.regional['zh-CN'] = {
			timeOnlyTitle: 'Seleziona tempo',
			timeText: 'tempo',
			hourText: 'ora',
			minuteText: 'minuto',
			secondText: 'secondi',
			currentText: 'Tempo ora',
			closeText: 'fermare',
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
				timeOnlyTitle: 'Seleziona tempo',
				timeText: 'tempo',
				hourText: 'ora',
				minuteText: 'minuto',
				secondText: 'secondi',
				currentText: 'Tempo ora',
				closeText: 'fermare',
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
	'isoLab':'modalità ISO',
	'iso0':'normale',
	'iso1':'ISO+',
		
	'setSlideTips2':'Impostare il valore tra 0-100',
	'sound':'audiofrequenza',
	'soundOption':'Configurazione audio',
	'openSound':'Aperto Audio',
	'inSound':'ingresso audio',
	'inSound0':'Mic Input',
	'inCount':'Livello di ingresso',
		
	'p2pState':'Stato connessione',
	'p2pSuccess':'La connessione è riuscita',
	'p2pFailure':'Connessione Fallita',
		
	'tipsLog':'Log Export',
	'logPaht':'Log Export percorso di salvataggio',
		
	'sensorLinear0':'fermare',
	'sensorLinear1':'automatico',
	'sensorLinear2':'debole',
	'sensorLinear3':'moderato',
	'sensorLinear4':'forte',
	'sensorLinear5':'eccellente',
		
	'emptyTips':'Le voci non possono essere impostate nullo',
	'osdTextTips':'',
	'portTips':'Port può essere impostato solo tra 0-65535',
	'vedioFileBag':'Dimensioni del pacchetto Video',
	'inTips':'in',
	'formatErr':'malformato',
	'optionsLoading':'Configurazione, attendere prego',
		
	//登录页面
	'login':'login',
	'userName':'nome utente',
	'pwd':'парола',
	'setLang':'scelta della lingua',
	'remenberPwd':'ricordare la password',
	'loginBtn':'login',
	'alertLoginErr':'Accesso non riuscito, controllare il vostro account e la password sono errati。',
	
	//框架页面
	'realTime':'live Preview',
	'logSearch':'Query del registro',
	'options':'configurazione',
	'exit':'ritirarsi',
	'exitTips':'Conferma Uscita?',
	
	//实时预览
	'setPic':'screenshot',
	'fd':'ingrandire',
	'play':'Broadcast',
	'stop':'stop',
	'starRecord':'Avvio registrazione',
	'endRecord':'Terminare la registrazione',
	'mainStream':'Flusso principale',
	'childStream':'Sub-stream',
	
	//日志查询页面
	'logNum':'numero di serie',
	'logTime':'tempo',
	'logDetail':'per maggiori informazioni',
	'beginTime':'Orario Di Inizio',
	'endTime':'Fine Del Tempo',
	'search':'trovare',
	'setEmpty':'chiaro',
	'setTimeTips1':'Si prega di selezionare le query inizio e di fine！',
	'setTimeTips2':'L\'ora di fine deve essere maggiore del tempo di inizio！',
	
	//配置   菜单
	'localOptions':'Configurazione locale',
	'baseOptions':'configurazione di base',
	'system':'sistema',
	'systemOptions':'Configurazione sistema',
	'localNet':'rete locale',
	'vedio':'video',
	'image':'immagine',
	'safety':'sicurezza',
	'advanced':'Configurazione avanzata',
	'event':'evento',
	
	
	
	//本地配置-本地配置
	'playParam':'parametri di riproduzione',
	'protocolType':'Tipo di protocollo',
	'playProperty':'Prestazioni Player',
	'propertyFirst':'Prestazioni di priorità',
	'realFirst':'Buono reale',
	'blance':'equilibrato',
	'speedFirst':'Scioltezza',
	'imageType':'Formato del file di cattura',
	'vedioFiles':'I file video',
	'bagSizes':'Video dimensioni delle confezioni di file',
	'vedioPath':'Percorso del file video',
	'playbackPath':'Riproduzione scaricare percorso di salvataggio',
	'imgAndClip':'Cattura e modifica',
	'previewImgPath':'Anteprima Istantanea Save Path',
	'playbackImgPath':'Riproduzione di istantanee Save Path',
	'playbackClipPath':'La riproduzione di clip percorso di salvataggio',
	
	
	//基本配置－系统
	'deviceInfo':'Informazioni sul dispositivo',
	'timeOption':'Impostazioni ora',
	'systemSet':'sistema In Manutenzione',
	
	'baseInfo':'informazioni di base',
	'deviceName':'Nome Del Dispositivo',
	'hardwareVer':'Hardware Version',
	'softwareVer':'Software Version',
	'channel':'numero di canale',
	
	'timeZone':'fuso orario',
	'checkTime':'sincronizzazione',
	'deviceTime':'Attrezzatura Tempo',
	'NTPCheckTime':'Sincronizzazione NTP',
	'SNTPServer':'SNTP Server',
	'handCheck':'correzione manuale',
	'setTime':'Imposta ora',
	'sameOfPC':'Sincronizzare con il computer',
	'PCTime':'Computer Time',
	'checNvr':'NVR vietare modifica IPC Tempo',
	
	'deviceRestart':'riavvio del dispositivo',
	'restartDevice':'Reboot',
	'setDefaultTips':'Ripristina impostazioni iniziali',
	'setDefaultTips1':'Ripristinare completamente i parametri del dispositivo alle impostazioni di fabbrica',
	'upgrade':'aggiornamento',
	'upgradeFile':'Il file di aggiornamento',
	'upgradeProgress':'aggiornamento Progress',
	'explain':'spiegazione',
	'explainTips':'L\'aggiornamento richiede 1-10 minuti, non spegnere l\'alimentazione, completare il riavvio automatico dopo l\'aggiornamento',
	
	'confirmRestart':'Conferma Reboot?',
	'confirmSetDefault':'Conferma ripristinare le impostazioni predefinite?',
	'upgradeTips':'Quando l\'apparecchio di aggiornamento barra di avanzamento suggerirà che non viene richiesto l\'aggiornamento è completo, non fare nulla. Sei sicuro di aggiornamento？',
	'upgradeError1':'Non scegliere il pacchetto di aggiornamento, interruzione aggiornamento。',
	'upgradeError2':'L\'aggiornamento non riesce!',
	'upgradeError3':'Aggiornamento non riuscito con errore:',
	'confirmCheckTime':'Confermare tempo di correzione?',
	'setDate':'Si prega di impostare la data.',
	'setSNTPTips':'Si prega di selezionare il server SNTP.',
	
	
	
	//基本配置本地-网络
	'port':'porto',
	'networkSet':'Parametri di configurazione NIC',
	'enableDHCP':'Sia HDCP abilitata',
	'IPAddr':'Gli indirizzi IP',
	'subnetMask':'Maschera Di Sottorete',
	'gateway':'Gateway Predefinito',
	'DNSServerOpt':'Configurazione del server DNS',
	'defaultDNS':'Server DNS preferito',
	'HTTPport':'porta HTTP',
	'portError':'Valore effettivo dell\'ingresso esterno HTTP  è 80 o fra 1025e 65534。',
	
	
	//基本配置本地-视频
	'veido':'video',
	'streamType':'Tipo stream',
	'oneCodeStream':'Single-corrente',
	'twoCodeStream':'Dual-stream',
	'codeType':'Codifica',
	'codeStream':'ruscello',
	'frame':'frequenza dei fotogrammi',
	'bit':'Bit Rate',
	'bitrateType':'Variabile tasso (fisso)',
	'bitrateType0':'tasso fisso',
	'bitrateType1':'VBR',
	'iFrame':'i-frame intervallo',
	'noSetCn':'Vietare l\'importazione cinese!',
	'deviceNameTips':'Nome dispositivo almeno un carattere, fino a 31 caratteri, e solo numeri, lettere e underscore!',
	'bitTips':'Il bit rate nella gamma di 64-12000!',
	
	
	//基本配置本地-显示设置
	'displayOptions':'Impostazioni Di Visualizzazione',
	'imgSet':'regolazione immagine',
	'brightness':'luminosità',
	'contrast':'contrasto',
	'saturtion':'saturazione',
	'sharpness':'Nitidezza',
	
	'ircutFilterTime':'Tempo di conversione IRCUT',
	'ircutMode':'modalità IRCUT',
	'ircutMode0':'LDR automatica',
	'ircutMode1':'Video Auto',
	'ircutMode2':'Modo colore',
	'ircutMode3':'bianco e nero',
	
	'ae':'esposizione',
	'aeMode':'modo di esposizione',
	'auto':'automatico',
	'hand':'manualmente',
	'shutter':'otturatore elettronico',
	
	'backlight':'retroilluminato',
	'backlightIn':'BLC',
	'close':'Spegni',
	'open':'aperto',
	'backlightNum':'retroilluminato importo',
	'small':'meno',
	'middle':'moderato',
	'big':'massimo',
	'gainControl':'regolazione del guadagno',
	
	'whiteBalance':'bilanciamento del bianco',
	'redGain':'guadagno rosso',
	'greenGain':'green Gain',
	'blueGain':'guadagno blu',
	
	'vedioSet':'Video sintonia',
	'dnrModel':'Digital Noise Reduction',
	'dnrModel0':'fermare',
	'dnrModel1':'Digital Noise Reduction(2D)',
	'dnrModel2':'Digital Noise Reduction(3D)',
	'dnrModel3':'pieno',
	
	'imgAdd':'Image Enhancement',
	'flickerControl':'lampeggiante controllo',
	'flickerControl0':'Indoor NTSC',
	'flickerControl1':'PAL Indoor',
	'flickerControl2':'all\'aperto',
	'sensorLinear':'Ampio interruttore dinamico',
	
	'defog':'disappannamento',
	'defogModel':'Modalità disappannamento',
	'defogNum':'Forza disappannamento',
	'setSlideTips':'Impostare il valore tra 0-255。',
	
	
	
	//基本配置本地-安全
	'userControl':'Gestione utenti',
	'user':'utente',
	'right':'competenza',
	'eidt':'editore',
	'del':'cancellare',
	'adduser':'Gli utenti aggiungono',
	'admin':'amministratore',
	'handler':'operatore',
	'userEdit':'Gli utenti di modificare',
	'userType':'Tipo di utente',
	'confirmPwd':'Conferma Password',
	'pwdTips0':'Password almeno un carattere, un massimo di 31 caratteri, e solo numeri, lettere e underscore!',
	'pwdTips1':'Password due volte incoerenza!',
	'usertips0':'Gli utenti limite è raggiunto, non possiamo aggiungere!',
	'usertips1':'Nome utente almeno un carattere, un massimo di 31 caratteri, e solo numeri, lettere e underscore!',
	'usertips2':'Si aggiunge Complete nuovo utente.',
	'usertips3':'L\'utente esiste già!',
	'error':'sbagliato',
	
	
	
	
	//高级配置-系统
	'setTimeRestart':'restart Timing',
	'notSet':'mai',
	'weekDay0':'Di Lunedi',
	'weekDay1':'Il Martedì',
	'weekDay2':'Il Mercoledì',
	'weekDay3':'Giovedi',
	'weekDay4':'venerdì',
	'weekDay5':'Di Sabato',
	'weekDay6':'domenica',
	'weekDay7':'ogni giorno',
	'weekDay8':'settimanale',
	'weekDay9':'al mese',
		'weekDay10':'Giappone',
	'weekDay11':'tempo',
	'weekDay12':'secondo',

	
	
	//高级配置-本地网络
	'other':'altro',
	'ddnsType':'Tipo DDNS',
	'peanutShells':'gusci di arachidi',
	'domain':'nome del dominio',
	'ddnsUser':'DDNS User',
	'ddnsPwd':'DDNS Password',
	'ddnsState':'DDNS Stato',
	'landSuccess':'Accesso di successo',
	'serverType':'Tipo di servizio',
	'serverTypeName':'Gli utenti ordinari',
	'serverLink':'Servizio Links',
	
	'ftpServer':'FTP Server',
	'savePath':'percorso di memorizzazione',
	
	'sendUser':'mittente',
	'sendAddr':'Da Indirizzo',
	'smtpServer':'server SMTP',
	'checkInfo':'Verificare le informazioni',
	'reviewUser':'destinatario',
	'reviewAddr':'Indirizzo Di Spedizione',
	'vedioCheckPwd':'Autenticazione della password viene attivato Video',
	'loginFailed':'Accesso non riuscito',
	'loginSuccess':'Accesso di successo',
	'logining':'login',
	
	'cloudstoragetype':'Nube tipo di archiviazione',
	'web':'Nube Sito',
	'authcode':'Codice Di Sicurezza',
	'totalcapacity':'La capacità totale',
	'usedcapacity':'Usato',
	'bound':'Limite',
	'unbound':'Non si applicano restrizioni',
	'binding':'binding',
	'unbind':'Unbundling',
	
	//高级配置-图像
	'osdOpt':'impostazioni OSD',
	'showTime':'orario dello spettacolo',
	'showText':'testo visualizzato',
	'dateFormat':'Formato Data',
	'date0':'Giorno / mese / anno',
	'date1':'Mese / giorno / anno',
	'date2':'Anno / mese / giorno',
	'osdPosition':'posizione OSD',
	'pos0':'sinistra',
	'pos1':'in basso a sinistra',
	'osdText':'testo OSD',
	'mirror':'Mirroring',
	'mirror1':'verticale',
	'mirror2':'livello',
	'mirror3':'Orizzontale e verticale',
	'aisleMode':'modalità Corridoio',
	'setOn':'aperto',
	'RotateAngle90':'90 derece',
	'RotateAngle270':'270 derece',
	'osdTips':'"OSD Text" non può essere impostato su null!!',
	
	
	
	//高级配置-事件
	'motionDetecting':'motion Detection',
	'privacyMasking':'PRIVACY',
	'alarmSet':'Impostazioni di allarme',
	
	'optMode':'Modalità di configurazione',
	'sensitivity':'Sensibilità',
	'selAll':'seleziona tutto',
	'clearAll':'cancella tutto',
	
	'maskTips':'Suggerimento: è possibile disegnare solo tre regioni',
	'area1':'Area 1',
	'area2':'Area 2',
	'area3':'Area 3',
	'NoRoiArea':'Non ROI rate regione di cornice',
	'QpRelative':'Valore relativo QP',
	'QpAbsolute':'QP valore assoluto',
	
	'openAlarm':'Aperto allarme',
	'tillTime':'durata',
	'tillTime0':'10 secondi',
	'tillTime1':'30 secondi',
	'tillTime2':'1 minuto',
	'tillTime3':'5 minuto',
	'tillTime4':'10 minuto',
	'tillTime5':'sempre attivo',
	
	'triggerAlarm':'L\'allarme viene attivato',
	'alarmAction':'Allarme linkage',
	'uploadFtp':'upload FTP',
	'fileType':'Formato file',
	'uploadSmtp':'Carica SMTP',
	'uploadCloud':'Carica Nube',
	
	
	//时区表
	'GMT0':'GMT-12 Eniwetok, Kwajalein',
	'GMT1':'GMT-11.5',
	'GMT2':'GMT-11 Midway Island, Samoa',
	'GMT3':'GMT-10.5',
	'GMT4':'GMT-10 Hawaii',
	'GMT5':'GMT-9.5',
	'GMT6':'GMT-09 Alaska',
	'GMT7':'GMT-8.5',
	'GMT8':'GMT-08 Ora del Pacifico (USA e Canada), Tijuana',
	'GMT9':'GMT-7.5',
	'GMT10':'GMT-07 Mountain Time (USA e Canada), Arizona',
	'GMT11':'GMT-6.5',
	'GMT12':'GMT-06 Central Time (USA e Canada), Città del Messico, Tegucigalpa, Saskatchewan',
	'GMT13':'GMT-5.5',
	'GMT14':'GMT-05 Eastern Time (USA e Canada), Indiana (Est), Bogota, Lima',
	'GMT15':'GMT-4.5',
	'GMT16':'GMT-04 Tempo Atlantico (Canada), Caracas, La Paz',
	'GMT17':'GMT-3.5',
	'GMT18':'GMT-03 Brasilia, Buenos Aires, Georgetown',
	'GMT19':'GMT-2.5',
	'GMT20':'GMT-02 Mid-Atlantic',
	'GMT21':'GMT-1.5',
	'GMT22':'GMT-01 Azzorre, Isole di Capo Verde',
	'GMT23':'GMT-0.5',
	'GMT24':'GMT+00 Dublino, Edimburgo, Londra, Lisbona, Monrovia, Casablanca',
	'GMT25':'GMT+0.5',
	'GMT26':'GMT+01 Berlino, Stoccolma, Roma, Berna, Bruxelles, Vienna, Parigi, Madrid, Amsterdam, Praga, Varsavia, Budapest',
	'GMT27':'GMT+1.5',
	'GMT28':'GMT+02 Atene, Helsinki, Istanbul, Il Cairo, l\'Europa dell\'Est, Harare, Pretoria, Israele',
	'GMT29':'GMT+2.5',
	'GMT30':'GMT+03 Baghdad, Kuwait, Nairobi, Riyadh, Mosca, San Pietroburgo, Kazan, Volgograd',
	'GMT31':'GMT+3.5',
	'GMT32':'GMT+04 Abu Dhabi, Muscat, Tbilisi',
	'GMT33':'GMT+4.5',
	'GMT34':'GMT+05 Islamabad, Karachi, Ekaterinburg, Tashkent',
	'GMT35':'GMT+5.5',
	'GMT36':'GMT+06 Almaty, Dhaka',
	'GMT37':'GMT+6.5',
	'GMT38':'GMT+07 Bangkok, Jakarta, Hanoi',
	'GMT39':'GMT+7.5',
	'GMT40':'GMT+08 Taipei, Pechino, Chongqing, Urumqi, Hong Kong, Perth, Singapore',
	'GMT41':'GMT+8.5',
	'GMT42':'GMT+09 Tokyo, Osaka, Sapporo, Seoul, Yakutsk',
	'GMT43':'GMT+9.5',
	'GMT44':'GMT+10 Brisbane, Melbourne, Sydney, Guam, Port Moresby, Vladivostok, Hobart',
	'GMT45':'GMT+10.5',
	'GMT46':'GMT+11 Magadan, Isole Salomone, Nuova Caledonia',
	'GMT47':'GMT+11.5',
	'GMT48':'GMT+12 Figi, Kamchatka, Isole Marshall, Wellington, Auckland',
		
	//一些通用按钮与提示
	'save':'Salva',
	'browse':'sfogliare',
	'saved':'è stato salvato.',
	'savedfail':'Impossibile salvare!',
	'confirmSave':'Conferma salvare?',
	'confirmDel':'Conferma eliminazione?',
	'setDefault':'Ripristina I Valori Predefiniti',
	'confirm':'confermare',
	'cancel':'cancellare'
	
};













