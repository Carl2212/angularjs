//土耳其语
if($.timepicker){
	(function($) {
		$.timepicker.regional['zh-CN'] = {
			timeOnlyTitle: 'seçin zaman',
			timeText: 'zaman',
			hourText: 'saat',
			minuteText: 'dakika',
			secondText: 'saniye',
			currentText: 'Zaman artık',
			closeText: 'kapat',
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
				timeOnlyTitle: 'seçin zaman',
				timeText: 'zaman',
				hourText: 'saat',
				minuteText: 'dakika',
				secondText: 'saniye',
				currentText: 'Zaman artık',
				closeText: 'kapat',
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
	'labOpensound':'Açık Ses Kapalı',
	'isoLab':'ISO modu',
	'iso0':'normal',
	'iso1':'ISO+',
		
	'setSlideTips2':'0-100 arasında bir değer ayarlayın',
	'sound':'ses frekansı',
	'soundOption':'ses Yapılandırması',
	'openSound':'Açık Ses',
	'inSound':'ses Girişi',
	'inSound0':'Mic Girdi',
	'inCount':'giriş Seviyesi',
		
	'p2pState':'Bağlantı Durumu',
	'p2pSuccess':'bağlantı başarılı',
	'p2pFailure':'Bağlantı Başarısız',
		
	'tipsLog':'Log İhracat',
	'logPaht':'Yolu kaydetmek İhracat Log',
		
	'sensorLinear0':'kapat',
	'sensorLinear1':'otomatik',
	'sensorLinear2':'zayıf',
	'sensorLinear3':'ılımlı',
	'sensorLinear4':'güçlü',
	'sensorLinear5':'süper',
		
	'emptyTips':'Öğeler boş ayarlanamaz',
	'osdTextTips':'',
	'portTips':'Liman sadece 0-65535 arasında ayarlanabilir',
	'vedioFileBag':'Video paketi boyutu',
	'inTips':'içinde',
	'formatErr':'kusurlu',
	'optionsLoading':'Yapılandırma, lütfen bekleyin',
		
	//登录页面
	'login':'giriş yap',
	'userName':'Kullanıcı adı',
	'pwd':'şifre',
	'setLang':'Dil seçimi',
	'remenberPwd':'Şifremi hatırla',
	'loginBtn':'giriş yap',
	'alertLoginErr':'Giriş Hesabınız ve şifre yanlış kontrol başarısız。',
	
	//框架页面
	'realTime':'Canlı Önizleme',
	'logSearch':'Günlük Sorgusu',
	'options':'Yapılandırma',
	'exit':'bırakmak',
	'exitTips':'Çıkış onayla?',
	
	//实时预览
	'setPic':'Bitiş kayıt',
	'fd':'büyütmek',
	'play':'Yayın',
	'stop':'dur',
	'starRecord':'kaydı başlat',
	'endRecord':'Bitiş kayıt',
	'mainStream':'Ana akım',
	'childStream':'Alt-stream',
	
	//日志查询页面
	'logNum':'seri numarası',
	'logTime':'zaman',
	'logDetail':'daha fazla bilgi için',
	'beginTime':'başlama Zamanı',
	'endTime':'Bitiş Zamanı',
	'search':'bulmak',
	'setEmpty':'açık',
	'setTimeTips1':'Lütfen seçiniz sorgular başlangıç ve bitiş süreleri！',
	'setTimeTips2':'Bitiş saati başlangıç saatinden daha büyük olmalıdır！',
	
	//配置   菜单
	'localOptions':'yerel Yapılandırma',
	'baseOptions':'Temel yapılandırma',
	'system':'sistem',
	'systemOptions':'sistem yapılandırma',
	'localNet':'yerel Ağ',
	'vedio':'video',
	'image':'görüntü',
	'safety':'güvenlik',
	'advanced':'Gelişmiş Yapılandırma',
	'event':'olay',
	
	
	
	//本地配置-本地配置
	'playParam':'Oynatma parametreleri',
	'protocolType':'Protokol Tipi',
	'playProperty':'Oyuncu Performansı',
	'propertyFirst':'Performans Öncelik',
	'realFirst':'Gerçek iyi',
	'blance': 'eşit dengeli',
	'speedFirst': 'akıcılık',
	'imageType': 'yakalama dosya biçimi',
	'vedioFiles': 'Video File',
	'bagSizes': 'Kayıt dosya boyutu paketi',
	'vedioPath': 'video dosyası yolu',
	'playbackPath': 'çalma indir yolunu kaydetmek',
	'imgAndClip': 'yakalama ve düzenleme',
	'previewImgPath': 'önizleme yakalama tasarruf yolu',
	'playbackImgPath': 'Playback yakalama tasarruf yolu',
	'playbackClipPath': 'playback klipleri yolunu kaydetmek',
	
	
	//基本配置－系统
	'deviceInfo': 'Aygıt',
	'timeOption': 'Zaman Ayarı',
	'systemSet': 'Sistem Bakım',

	
	'baseInfo':'Temel Bilgiler',
	'deviceName':'aygıt adı',
	'hardwareVer':'donanım versiyonu',
	'softwareVer':'Yazılım Sürümü',
	'channel':'kanal numarası',
	
	'timeZone': 'Zaman Dilimi',
	'checkTime': 'Okulda',
	'deviceTime': 'donatımı zamanı',
	'NTPCheckTime': 'Ne zaman NTP okul',
	'SNTPServer': 'SNTP sunucusu',
	'handCheck': 'manuel düzeltme',
	'setTime': 'ayarlanan zaman',
	'sameOfPC': 'bilgisayarınızla senkronize',
	'PCTime': 'bilgisayar zaman',
	'checNvr':'NVR değişiklik IPC Zaman yasaklamak',
	
	'deviceRestart': 'Aygıt reboot',
	'restartDevice': 'reboot',
	'setDefaultTips': 'Fabrika ayarlarına geri',
	'setDefaultTips1':'Tamamen fabrika ayarlarına cihaz parametrelerini geri',
	'upgrade':'yükseltme',
	'upgradeFile': 'yükseltme dosyası',
	'upgradeProgress': 'ilerleme yükseltmek',
	'explain': 'Açıklama',
	'explainTips': 'yükseltmeden sonra yükseltme gücü kapatmayın, 1-10 dakika sürer, tam otomatik yeniden başlatma',
	
	'confirmRestart': 'Onay cihazı yeniden başlatmak için?',
	'confirmSetDefault': 'fabrika ayarlarına geri yüklemek için onay?',
	'upgradeTips': 'ekipman yükseltmeleri değil şey yapmıyoruz, Yükseltme tamamlandıktan istendiğinde, istendiğinde \'bir ilerleme çubuğu olacaktır. Yükseltmek için emin misiniz?',
	'upgradeError1': 'yükseltme paketini tercih etmedi kesintiye yükseltin. ',
	'upgradeError2': 'başarısız yükseltme!',
	'upgradeError3': 'hatası ile başarısız oldu yükseltmesi',
	'confirmCheckTime': 'düzeltme zamanı onaylayın?',
	'setDate': 'tarihini ayarlayın. ',
	'setSNTPTips': 'SNTP sunucusunu seçin. ',
	
	
	
	//基本配置本地-网络
	'port': 'liman',
	'networkSet': 'Kart parametrelerini yapılandırma',
	'enableDhcp': 'HDCP etkinleştirmek isteyip',
	'IPAddr': 'IP adresi',
	'SubnetMask': 'Alt Ağ Maskesi',
	'gateway': 'Varsayılan ağ geçidi',
	'DNSServerOpt': 'DNS sunucusu yapılandırması',
	'defaultDNS': 'Tercih DNS sunucusu',
	'HTTPport': 'HTTP bağlantı noktası',
	'portError': 'HTTP bağlantı noktası etkin değeri 80 yada 1025 ile 65534 arasında olmalıdır',
	
	
	//基本配置本地-视频
	'veido': 'Video',
	'streamType': 'akış türü',
	'oneCodeStream': 'Tek stream',
	'twoCodeStream': 'ikili stream',
	'codeType': 'kodlama',
	'codeStream': 'stream',
	'frame': 'kare hızı',
	'bit': 'bit hızı',
	'bitrateType': 'varyant (sabit) oranı',
	'bitrateType0': 'sabit faizli',
	'bitrateType1': 'VBR',
	'iFrame': 'i aralık çerçeve',
	'noSetCn': 'Durdurma Girişi Çinli!',
	'deviceNameTips': 'en az Aygıt Adı bir karakter, 31 karakter maksimum ve sadece sayılar, harfler ve alt çizgi!',
	'bitTips': '64-12000 aralığında bit hızı!',
	
	
	//基本配置本地-显示设置
	'displayOptions': 'ekran ayarları',
	'imgSet': 'görüntü ayarı',
	'brightness': 'parlaklık',
	'contrast': 'Kontrast',
	'saturtion': 'doyma',
	'sharpness': 'Netlik',
	
	'ircutFilterTime': 'Ircut dönüşüm zamanı',
	'ircutMode': 'Ircut modu',
	'ircutMode0': 'Otomatik LDR',
	'ircutMode1': 'Video Auto',
	'ircutMode2': 'renk modu',
	'ircutMode3': 'siyah ve beyaz',
	
	'ae': 'Poz',
	'aeMode': 'Poz',
	'auto': 'Auto',
	'hand': 'Elle',
	'shutter':'elektronik deklanşör',
	
	'backlight': 'arka',
	'backlightIn': 'BLC',
	'close': 'kapalı',
	'open': 'açık',
	'backlightNum': 'arka ışık miktarı',
	'small':'minimal',
	'middle': 'Orta',
	'big': 'Maksimum',
	'gainControl': 'kazanç ayarı',
	
	'whiteBalance': 'Beyaz',
	'redGain': 'kırmızı kazanç',
	'greenGain': 'Yeşil Kazanç',
	'blueGain': 'Mavi kazanç',
	
	'vedioSet': 'Video ayarı',
	'dnrModel': 'DNR',
	'dnrModel0': 'kapalı',
	'dnrModel1': 'Dijital Gürültü Azaltma (2B)',
	'dnrModel2': 'Dijital Gürültü Azaltma (3D)',
	'dnrModel3': 'tam',
	
	'imgAdd': 'görüntü iyileştirme',
	'flickerControl': 'Yanıp sönen',
	'flickerControl0': 'kapalı NTSC',
	'flickerControl1': 'kapalı PAL',
	'flickerControl2': 'outdoor',
	'sensorLinear': 'geniş dinamik anahtar',
	
	'defog': 'buğu çözme',
	'defogModel': 'buğu çözme modu',
	'defogNum': 'Buğu çözücü gücü',
	'setSlideTips': '0-255 arası değerini ayarlayın. ',
	
	
	
	//基本配置本地-安全
	'userControl': 'Kullanıcı Yönetimi',
	'user': 'kullanıcı',
	'right': 'ayrıcalık',
	'eidt': 'Düzenle',
	'del': 'Sil',
	'adduser': 'Kullanıcılar eklemek için',
	'admin':'Yönetici',
	'handler': 'operatör',
	'userEdit': 'kullanıcı düzenlemek',
	'userType': 'Kullanıcı Türü',
	'confirmPwd': 'Confirm Password',
	'pwdTips0': 'en az Şifre bir karakter, 31 karakter maksimum ve sayılar, harfler ve alt çizgi sadece!',
	'pwdTips1': 'İki şifre uyuşmuyor!',
	'usertips0': 'Bu sınıra ulaşıldığında Kullanıcılar, biz ekleyemezsiniz!',
	'usertips1': 'En adı bir karakter, 31 karakter maksimum ve sadece sayılar, harfler ve alt çizgi!',
	'usertips2': 'Yeni bir kullanıcı eklenir tamamlayın. ',
	'usertips3': 'Bu kullanıcı zaten var!',
	'error': 'hatası',
	
	
	
	
	//高级配置-系统
	'setTimeRestart': 'zamanlama restart',
	'notSet': 'Asla',
	'weekDay0': 'Pazartesi',
	'weekDay1': 'Salı',
	'weekDay2': 'Çarşamba',
	'weekDay3': 'Perşembe',
	'weekDay4': 'Cuma',
	'weekDay5': 'Cumartesi',
	'weekDay6': 'Pazar',
	'weekDay7': 'Her gün',
	'weekDay8':'Haftalık',
	'weekDay9':'Ay başına',
		'weekDay10':'Japonya',
	'weekDay11':'Zaman',
	'weekDay12':'Ikinci',

	
	
	//高级配置-本地网络
	'other':'öteki',
	'ddnsType': 'DDNS tipi',
	'peanutShells': 'fıstık kabukları',
	'domain': 'Alan',
	'ddnsUser': 'DDNS kullanıcı',
	'ddnsPwd': 'DDNS Password',
	'ddnsState': 'DDNS durumu',
	'landSuccess': 'Başarılı Ol',
	'serverType': 'Hizmet türü',
	'serverTypeName': 'sıradan kullanıcı',
	'serverLink': 'Hizmet Linkler',

	'ftpServer': 'FTP sunucusu',
	'savePath': 'depolama yolu',

	'sendUser': 'gönderen',
	'sendAddr': 'Kimden Adresi',
	'smtpServer': 'SMTP sunucusu',
	'checkInfo': 'kimlik bilgileri',
	'reviewUser': 'alıcı',
	'reviewAddr': 'muhatap',
	'vedioCheckPwd': 'Video parola kimlik doğrulaması etkin',
	'loginFailed': 'Giriş başarısız oldu',
	'loginSuccess':'başarılı Giriş',
	'logining':'giriş yap',
	
	'cloudstoragetype':'Bulut depolama tipi',
	'web':'Bulut Sitesi',
	'authcode':'Güvenlik Kodu',
	'totalcapacity':'Toplam kapasite',
	'usedcapacity':'Kullanılmış',
	'bound':'Bağlı',
	'unbound':'Unbound',
	'binding':'Bağlanma',
	'unbind':'Ayrıştırma',
	
	
	//高级配置-图像
	'osdOpt': 'OSD Ayarları',
	'showTime': 'show time',
	'showText': 'ekran metni',
	'dateFormat': 'Tarih formatı',
	'date0': 'Gün / Ay / Yıl',
	'date1': 'ay / gün / yıl',
	'date2': 'Yıl / Ay / Gün',
	'osdPosition': 'OSD pozisyonu',
	'pos0': 'sol',
	'pOS1': 'sol',
	'osdText': 'OSD metin',
	'mirror':'Ayna',
	'mirror1': 'dikey',
	'mirror2': 'yatay',
	'mirror3': ', yatay ve dikey',
	'aisleMode': 'koridor modu',
	'setOn': 'Aç',
	'RotateAngle90':'90 derece',
	'RotateAngle270':'270 derece',
	'osdTips': '"OSD Metin" null ayarlanamaz !!',
	
	
	
	//高级配置-事件
	'motionDetecting': 'hareket algılama',
	'privacyMasking': 'GİZLİLİK',
	'alarmSet': 'Alarm',

	'optMode': 'yapılandırma modu',
	'sensitivity': 'duyarlılığı',
	'selAll': 'Tümünü Seç',
	'clearAll': 'net all',

	'maskTips': 'İpucu: Sadece çizebilirsiniz üç bölge',
	'area1': 'Alan 1',
	'area2': 'Zon 2',
	'area3': 'bölgesi 3',
	'NoRoiArea':'Sigara ROI bölgesi kare hızı',
	'QpRelative':'Bağıl QP değeri',
	'QpAbsolute':'QP mutlak değer',

	'openAlarm': 'açık alarmı',
	'tillTime': 'süresi',
	'tillTime0': '10 second',
	'tillTime1': '30 second',
	'tillTime2': '1 分钟',
	'tillTime3': '5分钟',
	'tillTime4': '10 分钟 ',
	'tillTime5': 'etkili olmuştur',

	'triggerAlarm': 'alarm tetikleme',
	'alarmAction': 'alarm bağlantı',
	'uploadFtp': 'Yükle FTP',
	'fileType': 'dosya biçimi',
	'uploadSmtp': 'Yükle SMTP',
	'uploadCloud':'Yükleme Bulut',
	
	
	//时区表
	'GMT0': 'GMT-12 Eniwetok, Kwajalein Atoll',
	'GMT1': 'GMT-11,5',
	'GMT2': 'GMT-11 Midway Adası, Samoa',
	'GMT3': 'GMT-10,5',
	'GMT4': 'GMT-10 Hawaii',
	'GMT5': 'GMT-9,5',
	'GMT6': 'GMT-09 Alaska',
	'GMT7': 'GMT-8.5',
	'GMT8': 'GMT-08 Pasifik Saati (ABD ve Kanada), Tijuana',
	'GMT9': 'GMT-7.5',
	'GMT10': 'GMT-07 Mountain Time (ABD ve Kanada), Arizona',
	'GMT11': 'GMT-6.5',
	'GMT12': 'GMT-06 Central Time (ABD ve Kanada), Mexico City, Tegucigalpa, Sa Sika',
	'GMT13': 'GMT-5.5',
	'GMT14': 'GMT-05 Doğu Saati (ABD ve Kanada), Indiana (Doğu), Bogota, Lima',
	'GMT15': 'GMT-4.5',
	'GMT16': 'GMT-04 Atlantik Zamanı (Kanada), Karakas, La Paz',
	'GMT17': 'GMT-3.5',
	'GMT18': 'GMT-03 Brasilia, Buenos Aires, Georgetown',
	'GMT19': 'GMT-2.5',
	'GMT20': 'GMT-02 Orta Atlantik',
	'GMT21': 'GMT-1.5',
	'GMT22': 'GMT-01 Azores, Cape Verde Adaları',
	'GMT23': 'GMT-0.5',
	'GMT24': 'GMT + 00 Dublin, Edinburgh, Londra, Lizbon, Monrovia, Kazablanka',
	'GMT25': 'GMT + 0.5',
	'GMT26': 'Berlin, Stockholm, Roma, Bern, Brüksel, Viyana, Paris, Madrid, Amsterdam, Prag, Varşova, Budapeşte GMT + 01',
	'GMT27': 'GMT + 1.5',
	'GMT28': 'Atina, Helsinki, İstanbul, Kahire, Doğu Avrupa, Harare, Pretoria, İsrail\'de GMT + 02',
	'GMT29': 'GMT + 2.5',
	'GMT30': 'Bağdat, Kuveyt, Nairobi, Riyad, Moskova, St. Petersburg, Kazan, Volgograd GMT + 03',
	'GMT31': 'GMT + 3.5',
	'GMT32': 'GMT + 04 Abu Dabi, Muskat, Tiflis',
	'GMT33': 'GMT + 4.5',
	'GMT34': 'İslamabad, Karaçi, Yekaterinburg, Taşkent GMT + 05',
	'GMT35': 'GMT + 5.5',
	'GMT36': 'GMT + 06 Almatı, Dhaka',
	'GMT37': 'GMT + 6.5',
	'GMT38': 'GMT + 07 Bangkok, Jakarta, Hanoi',
	'GMT39': 'GMT + 7.5',
	'GMT40': 'Taipei, Pekin, Chongqing, Urumçi, Hong Kong, Perth, Singapur GMT + 08',
	'GMT41': 'GMT + 8.5',
	'GMT42': 'GMT + 09 Tokyo, Osaka, Sapporo, Seul, Yakutsk',
	'GMT43': 'GMT + 9,5',
	'Gmt44': 'Brisbane, Melbourne, Sidney, Guam, Port Moresby, Vladivostok, Hobart GMT + 10',
	'GMT45': 'GMT + 10,5',
	'GMT46': 'GMT + 11 Magadan, Solomon Adaları, Yeni Kaledonya',
	'GMT47': 'GMT + 11,5',
	'GMT48': 'GMT + 12 Fiji, Kamçatka, Marshall Adaları, Wellington, Auckland',
		
	//一些通用按钮与提示
	'save': 'Kaydet',
	'browse': 'browse',
	'saved':'kaydedildi. ',
	'savedfail':'kaydedilemedi!',
	'confirmSave': 'kurtarmak için Enter?',
	'confirmDel': 'Sil Onayla?',
	'setDefault': 'Restore Defaults',
	'confirm': 'Tamam',
	'cancel': 'İptal'
	
};













