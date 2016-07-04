//西班牙语
if($.timepicker){
	(function($) {
		$.timepicker.regional['zh-CN'] = {
			timeOnlyTitle: 'Seleccione el tiempo',
			timeText: 'tiempo',
			hourText: 'hora',
			minuteText: 'minuto',
			secondText: 'segundos',
			currentText: 'Tiempo hoy',
			closeText: 'cerrar',
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
				timeOnlyTitle: 'Seleccione el tiempo',
				timeText: 'tiempo',
				hourText: 'hora',
				minuteText: 'minuto',
				secondText: 'segundos',
				currentText: 'Tiempo hoy',
				closeText: 'cerrar',
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
	'isoLab':'el modo ISO',
	'iso0':'normal',
	'iso1':'ISO+',
		
	'setSlideTips2':'Ajuste el valor entre 0-100',
	'sound':'Nivel de entrada',
	'soundOption':'Configuración de audio',
	'openSound':'Abrir Audio',
	'inSound':'entrada de audio',
	'inSound0':'entrada de micrófono',
	'inCount':'Nivel de entrada',
		
	'p2pState':'Estado de la conexión',
	'p2pSuccess':'La conexión se realiza correctamente',
	'p2pFailure':'Conexión Fallida',
		
	'tipsLog':'Entre las Exportaciones',
	'logPaht':'Entre las Exportaciones salvar ruta',
		
	'sensorLinear0':'cerrar',
	'sensorLinear1':'automático',
	'sensorLinear2':'débil',
	'sensorLinear3':'moderado',
	'sensorLinear4':'fuerte',
	'sensorLinear5':'súper',
		
	'emptyTips':'Los productos que no se pueden establecer nula',
	'osdTextTips':'',
	'portTips':'Puerto sólo se puede establecer entre 0-65535',
	'vedioFileBag':'Tamaño del paquete de vídeo',
	'inTips':'en',
	'formatErr':'malformado',
	'optionsLoading':'Configuración, por favor espere',
		
	//登录页面
	'login':'Acceder',
	'userName':'Nombre del usuario',
	'pwd':'Contraseña',
	'setLang':'Configuración de idioma',
	'remenberPwd':'Recordar me',
	'loginBtn':'Acceder',
	'alertLoginErr':'Error de acceso, por favor asegúrese el nombre de usuaROI o la contraseña, por favor ',
	
	//框架页面
	'realTime':'Vídeo en vivo',
	'logSearch':'Reg.',
	'options':'Configuração',
	'exit':'Salida',
	'exitTips':'Cerrar sesión?',
	
	//实时预览
	'setPic':'Captura de pantalla',
	'fd':'ampliar',
	'play':'Broadcast',
	'stop':'Deténgase',
	'starRecord':'Inicie la grabación',
	'endRecord':'grabación Fin',
	'mainStream':'Corriente 1',
	'childStream':'Corriente 2',
	
	//日志查询页面
	'logNum':'ID',
	'logTime':'tiempo',
	'logDetail':'Dtalle',
	'beginTime':'Tiempo de Inicio ',
	'endTime':'Tiempo de término ',
	'search':'Buscar',
	'setEmpty':'Borrar',
	'setTimeTips1':'Seleccione el comienzo y el final de la consulta',
	'setTimeTips2':'El tiempo final debe ser mayor que el tiempo de inicio',
	
	//配置   菜单
	'localOptions':'Configurac. local',
	'baseOptions':'Configuración básica',
	'system':'Sistema',
	'systemOptions':'Configuración Sistema',
	'localNet':'Red',
	'vedio':'Vídeo',
	'image':'Cámara',
	'safety':'Seguridad',
	'advanced':'Configuración avazada',
	'event':'Eventos',
	
	
	
	//本地配置-本地配置
	'playParam':'Parámetros Live View',
	'protocolType':'Protocolo',
	'playProperty':'Rendimiento Live View',
	'propertyFirst':'Retardo más breve',
	'realFirst':'Tiempo real',
	'blance':'Balanceado',
	'speedFirst':'Mejor fluidez',
	'imageType':'Formato de la imagen',
	'vedioFiles':'Ajustes fichero grabado',
	'bagSizes':'Tamaño fichero grabado',
	'vedioPath':'Guardar en subdirectorio',
	'playbackPath':'Guardar descargas en',
	'imgAndClip':'Ajustes Imagen y Video',
	'previewImgPath':'Guar. cap. LV',
	'playbackImgPath':'Guardar captura en reproducción',
	'playbackClipPath':'Guardar videos en',
	
	
	//基本配置－系统
	'deviceInfo':'Información del dispositivo',
	'timeOption':'Configuración del tiempo',
	'systemSet':'Mantenimiento',
	
	'baseInfo':'Información básica',
	'deviceName':'Nombre de dispositivo',
	'hardwareVer':'Versión de firmware',
	'softwareVer':'Versión codificador',
	'channel':'Número de canales',
	
	'timeZone':'Zona horaria',
	'checkTime':'Hora Ajuste',
	'deviceTime':'Tiempo en cámara',
	'NTPCheckTime':'NTP',
	'SNTPServer':'Servidor SNTP',
	'handCheck':'Configurar manualmente',
	'setTime':'Ajustar hora',
	'sameOfPC':'Sincronizar con tiempo de la computadora',
	'PCTime':'Tiempo de computadora',
	'checNvr':'NVR prohibir la modificación IPC Tiempo',
	
	'deviceRestart':'Reiniciar el sistema',
	'restartDevice':'Reinicie el dispositivo',
	'setDefaultTips':'Restaurar configuraciones de fábrica',
	'setDefaultTips1':'Restaurar completamente los parámetros del dispositivo a la configuración de fábrica',
	'upgrade':'Actualización',
	'upgradeFile':'Firmware',
	'upgradeProgress':'Estado de la conexión',
	'explain':'Nota',
	'explainTips':'El proceso de actualización puede tardar de 1 a 10 minutos, no apagar el equipo. El equipo se reiniciará automáticamente al finalizar el proceso.',
	
	'confirmRestart':'Seguro de reiniciar el dispositivo?',
	'confirmSetDefault':'Seguro de restaurar las configuraciones de fábrica?',
	'upgradeTips':'Cuando hay actualizaciones del equipo en pista, una barra de progreso sin consejos a actualizar, por favor no hagas ninguna operación. Si la escalada de confirmación?',
	'upgradeError1':'Seleccione Archivo',
	'upgradeError2':'Actualizar fracaso',
	'upgradeError3':'Actualización: errores de fracaso,',
	'confirmCheckTime':'Confirmación de tiempo?',
	'setDate':'Por favor fijar la fecha。',
	'setSNTPTips':'Seleccione SNTP servidor',
	
	
	
	//基本配置本地-网络
	'port':'Puerto',
	'networkSet':'Ajustes NIC',
	'enableDHCP':'Permitir DHCP',
	'IPAddr':'Dirección IP',
	'subnetMask':'Máscara de red',
	'gateway':'Portal predeterminado',
	'DNSServerOpt':'Servidor DNS',
	'defaultDNS':'Servidor DNS favorito',
	'HTTPport':'Puerto de HTTP',
	'portError':'El valor efectivo del puerto de HTTP es de 80 o de 1025 a 65534',
	
	
	//基本配置本地-视频
	'veido':'Vídeo',
	'streamType':'Tipo de la corriente',
	'oneCodeStream':'Simple',
	'twoCodeStream':'Dual',
	'codeType':'Códec',
	'codeStream':'Corriente',
	'frame':'velocidad de fotogramas',
	'bit':'Tasa de bits',
	'bitrateType':'Control de Cambio',
	'bitrateType0':'VBR',
	'bitrateType1':'CBR',
	'iFrame':'Enmarco intervalo',
	'noSetCn':'La prohibición de entrada en chino',
	'deviceNameTips':'El nombre del equipo para UN mínimo de caracteres hasta 31, y por el carácter sólo números, letras y subrayar formado',
	'bitTips':'BitRate1 dede oscilar entre 64-12000',
	
	
	//基本配置本地-显示设置
	'displayOptions':'Adjuste visualización',
	'imgSet':'Ajuste de imagen',
	'brightness':'Luminosidad',
	'contrast':'Contraste',
	'saturtion':'Saturación',
	'sharpness':'Nitidez',
	
	'ircutFilterTime':'Tiempo de filtro IRCUT',
	'ircutMode':'Modo Ircut',
	'ircutMode0':'LDR Auto',
	'ircutMode1':'Video Auto',
	'ircutMode2':'Color',
	'ircutMode3':'B/W',
	
	'ae':'Ajustes de exposición',
	'aeMode':'Ajustes de exposición',
	'auto':'Auto',
	'hand':'Manual',
	'shutter':'Obturador',
	
	'backlight':'Configuración de la retroiluminación',
	'backlightIn':'Compensación de luz trasera',
	'close':'Apagado',
	'open':'Encendido',
	'backlightNum':'Luz trasera',
	'small':'Min',
	'middle':'Med',
	'big':'Max',
	'gainControl':'Control de ganancia',
	
	'whiteBalance':'Balance de blanco',
	'redGain':'Ganancia Roja',
	'greenGain':'Ganancia verde',
	'blueGain':'Ganancia azul',
	
	'vedioSet':'Regulación de vídeo',
	'dnrModel':'Modo de reducción de ruido digital',
	'dnrModel0':'OFF',
	'dnrModel1':'2D DRN',
	'dnrModel2':'3D DRN',
	'dnrModel3':'Todo',
	
	'imgAdd':'Mejora de la imagen',
	'flickerControl':'Control de parpadeo',
	'flickerControl0':'NTSC interior',
	'flickerControl1':'PAL interior',
	'flickerControl2':'Aire libre',
	'sensorLinear':'Sensor lineal WDR',
	
	'defog':'Modelo defog',
	'defogModel':'Modelo defog',
	'defogNum':'Desempañar fuerza',
	'setSlideTips':'Por favor, en el valor de entre 0 y 255',
	
	
	
	//基本配置本地-安全
	'userControl':'Usuario',
	'user':'Nombre de usuario',
	'right':'Autoridad',
	'eidt':'Editar',
	'del':'Borrar',
	'adduser':'Añadir usuario',
	'admin':'Admin',
	'handler':'Operador',
	'userEdit':'Editar',
	'userType':'Level',
	'confirmPwd':'Confirme su contraseña',
	'pwdTips0':'La contraseña debe tener por lo menos de 1 caracteres y 31 caracteres como máximo',
	'pwdTips1':'Contraseña incorrecta',
	'usertips0':'Los usuarios se alcanza el límite, no podemos añadir!',
	'usertips1':'Nombre de usuario deben tener por lo menos de 1 caracteres y de 31 caracteres como máximo',
	'usertips2':'Con los nuevos usuarios agregar',
	'usertips3':'El usuario ya existe',
	'error':'error',
	
	
	
	
	//高级配置-系统
	'setTimeRestart':'Reinicio programado',
	'notSet':'"Nunca',
	'weekDay0':'Lunes',
	'weekDay1':'Martes',
	'weekDay2':'Miércoles',
	'weekDay3':'Jueves',
	'weekDay4':'viernes',
	'weekDay5':'Sábado',
	'weekDay6':'Domingo',
	'weekDay7':'Cada día',
	'weekDay8':'Semanalmente',
	'weekDay9':'Por mes',
		'weekDay10':'Japón',
	'weekDay11':'Tiempo',
	'weekDay12':'En segundo lugar',

	
	
	//高级配置-本地网络
	'other':'otros',
	'ddnsType':'Tipos de DDNS',
	'peanutShells':'Oray',
	'domain':'Nombre del sitio',
	'ddnsUser':'Cuenta de DDNS',
	'ddnsPwd':'Contraseña de DDNS',
	'ddnsState':'Estado de la conexión',
	'landSuccess':'éxito de acceso',
	'serverType':'Tipo de Servicio',
	'serverTypeName':'Usuario Ordinario',
	'serverLink':'Enlaces a los proveedores de servicios',
	
	'ftpServer':'Servidor de FTP',
	'savePath':'Subir archivo',
	
	'sendUser':'Remitente',
	'sendAddr':'Eemisor',
	'smtpServer':'Servidor SMTP',
	'checkInfo':'Verificar la información',
	'reviewUser':'Destinatario',
	'reviewAddr':'Email',
	'vedioCheckPwd':'Autenticación de contraseña de Video',
	'loginFailed':'Derrota de inicio de',
	'loginSuccess':'Entrar con éxito',
	'logining':'iniciar sesión',
	
	'cloudstoragetype':'Cloud Tipo de almacenamiento',
	'web':'Sitio de la nube',
	'authcode':'Código De Seguridad',
	'totalcapacity':'La capacidad total',
	'usedcapacity':'Usado',
	'bound':'Bound',
	'unbound':'Sin consolidar',
	'binding':'unión',
	'unbind':'La desagregación',
	
	
	//高级配置-图像
	'osdOpt':'Adjustes OSD',
	'showTime':'Tiempo',
	'showText':'Texto de OSD',
	'dateFormat':'Format de la fecha',
	'date0':'DD/MM/AAAA',
	'date1':'MM/DD/AAAA',
	'date2':'AAAA/MM/DD',
	'osdPosition':'Pposición de OSD',
	'pos0':'Arriba a la izquierda',
	'pos1':'Inferior a la izquierda',
	'osdText':'Texto de OSD',
	'mirror':'Espejo',
	'mirror1':'VERTICAL',
	'mirror2':'HORIZONTAL',
	'mirror3':'AMBOS',
	'aisleMode':'El modelo del',
	'setOn':'abre',
	'RotateAngle90':'90 grados',
	'RotateAngle270':'270 grados',
	'osdTips':'El texto no puede ordenar OSD vacío',
	
	
	//高级配置-事件
	'motionDetecting':'Detección de Movimiento',
	'privacyMasking':'Intimidad',
	'alarmSet':'Conf. de alarma',
	
	'optMode':'Ajustes área',
	'sensitivity':'Sensibilidad',
	'selAll':'Seleccionar todo',
	'clearAll':'Borrar todo',
	
	'maskTips':'Consejo: sólo se puede dibujar tres regiones privadas',
	'area1':'Región 1',
	'area2':'Región 2',
	'area3':'Región 3',
	'NoRoiArea':'No ROI tasa región marco',
	'QpRelative':'Valor relativo QP',
	'QpAbsolute':'QP valor absoluto',
	
	'openAlarm':'Activar la alarma',
	'tillTime':'Duración de la alarma',
	'tillTime0':'"10 segundos',
	'tillTime1':'30 segundos',
	'tillTime2':'1 minuto',
	'tillTime3':'5 minutos',
	'tillTime4':'10 minutos',
	'tillTime5':'sin parada',
	
	'triggerAlarm':'Disparador de alarma',
	'alarmAction':'En alarma',
	'uploadFtp':'Subir archivos por FTP',
	'fileType':'Formato del archivo',
	'uploadSmtp':'Subir archivos por SMTP',
	'uploadCloud':'Subir Nube',
	
	
	//时区表
	'GMT0':'GMT-12 Eniwetok, Kwajalein',
	'GMT1':'GMT-11.5',
	'GMT2':'GMT-11 La Isla Midway, Samoa',
	'GMT3':'GMT-10.5',
	'GMT4':'GMT-10 Hawaii',
	'GMT5':'GMT-9.5',
	'GMT6':'GMT-09 Alaska',
	'GMT7':'GMT-8.5',
	'GMT8':'GMT-08 Hora Pacífica (EE.UU. & Canadá), Tijuana',
	'GMT9':'GMT-7.5',
	'GMT10':'GMT-07 Hora Montañosa (EE.UU. & Canadá),, Arizona',
	'GMT11':'GMT-6.5',
	'GMT12':'GMT-06 Hora Central (EE.UU. & Canadá), Ciudad de México, Tegucigalpa, Saskatchewan',
	'GMT13':'GMT-5.5',
	'GMT14':'GMT-05 Hora Oriental  (EE.UU. & Canadá), Indiana(East), Bogotá, Lima',
	'GMT15':'GMT-4.5',
	'GMT16':'GMT-04 Hora Atlántica (Canadá), Caracas, La Paz',
	'GMT17':'GMT-3.5',
	'GMT18':'GMT-03 Brasilia, Buenos Aires, Georgetown',
	'GMT19':'GMT-2.5',
	'GMT20':'GMT-02 Media- Atlántica',
	'GMT21':'GMT-1.5',
	'GMT22':'GMT-01 Azores, Islas de Capo Verde Is.',
	'GMT23':'GMT-0.5',
	'GMT24':'GMT+00 Dublín, Edimburgo, Londres, Lisboa, Monrovia, Casablanca',
	'GMT25':'GMT+0.5',
	'GMT26':'GMT+01 Berlín, Estocolmo, Roma, Berna, Bruselas, Viena, Paris, Madrid, Ámsterdam, Praga, Varsovia, Budapest',
	'GMT27':'GMT+1.5',
	'GMT28':'GMT+02 Atenas, Helsinki, Estambul, El Cairo, Europa Oriental, Harare, Pretoria, Israel',
	'GMT29':'GMT+2.5',
	'GMT30':'GMT+03 Bagdad, Kuwait, Nairobi, Riad, Moscó, St. Petersburgo, Kazán, Volgogrado',
	'GMT31':'GMT+3.5',
	'GMT32':'GMT+04 Abu Dhabi, Muscat, Tbilisi',
	'GMT33':'GMT+4.5',
	'GMT34':'GMT+05 Islamabad, Karachi, Ekaterinburg, Tashkent',
	'GMT35':'GMT+5.5',
	'GMT36':'GMT+06 Alma Ata, Dhaka',
	'GMT37':'GMT+6.5',
	'GMT38':'GMT+07 Bangkok, Yakarta, Hanoi',
	'GMT39':'GMT+7.5',
	'GMT40':'GMT+08 Taipei, Beijing, Chongqing, Urumqi, Hong Kong, Perth, Singapore',
	'GMT41':'GMT+8.5',
	'GMT42':'GMT+09 Tokyo, Osaka, Sapporo, Seúl, Yakutsk',
	'GMT43':'GMT+9.5',
	'GMT44':'GMT+10 Brisbane, Melbourne, Sydney, Guam, Port Moresby, Vladivostok, Hobart',
	'GMT45':'GMT+10.5',
	'GMT46':'GMT+11 Magadan, Solomón Is., Nueva Caledonia',
	'GMT47':'GMT+11.5',
	'GMT48':'GMT+12 Fiyi, Kamchatka, Marshall Is., Wellington, Auckland',
		
	//一些通用按钮与提示
	'save':'Guardar',
	'browse':'Escaneo',
	'saved':'éxito de guardar',
	'savedfail':'Error al guardar!',
	'confirmSave':'Confirma la guarda?',
	'confirmDel':'Confirmado borrar?',
	'setDefault':'Predeterminado',
	'confirm':'Ok',
	'cancel':'Cancelar'
	
};













