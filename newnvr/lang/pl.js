//波兰文
if($.timepicker){
	(function($) {
		$.timepicker.regional['zh-CN'] = {
			timeOnlyTitle: 'Wybierz czas',
			timeText: 'czas',
			hourText: 'godzina',
			minuteText: 'minuta',
			secondText: 'sekundy',
			currentText: 'czas',
			closeText: 'zamknąć',
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
				timeOnlyTitle: 'Wybierz czas',
				timeText: 'czas',
				hourText: 'godzina',
				minuteText: 'minuta',
				secondText: 'sekundy',
				currentText: 'czas',
				closeText: 'zamknąć',
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
	'isoLab':'tryb ISO',
	'iso0':'normalny',
	'iso1':'ISO+',
		
	'setSlideTips2':'Ustaw wartość od 0-100',
	'sound':'częstotliwość dźwięku',
	'soundOption':'Konfiguracja audio',
	'openSound':'Otwórz audio',
	'inSound':'Wejście audio',
	'inSound0':'Wejście mikrofonowe',
	'inCount':'Poziom wejściowy',
		
	'p2pState':'Stan połączenia',
	'p2pSuccess':'połączenie zostanie nawiązane',
	'p2pFailure':'połączenie Nieudane',
		
	'tipsLog':'Zaloguj Export',
	'logPaht':'Zaloguj Export zapisać ścieżkę',
		
	'sensorLinear0':'zamknąć',
	'sensorLinear1':'automatyczny',
	'sensorLinear2':'słaby',
	'sensorLinear3':'umiarkowany',
	'sensorLinear4':'silny',
	'sensorLinear5':'wspaniały',
		
	'emptyTips':'Elementy nie można ustawić wartość null',
	'osdTextTips':'',
	'portTips':'Port może być ustawiona tylko między 0-65535',
	'vedioFileBag':'Rozmiar pakiet wideo',
	'inTips':'w',
	'formatErr':'malformed',
	'optionsLoading':'Konfiguracja, proszę czekać',
		
	//登录页面
	'login':'Logowanie',
	'userName':'Nazwa użytkownika',
	'pwd':'Hasło',
	'setLang':'Wybór języka',
	'remenberPwd':'Zapamiętaj mnie',
	'loginBtn':'Logowanie',
	'alertLoginErr':'Logowanie nie powiodło się, upewnij sie czy nazwa użytkownika i hasło są prawidłowe',
	
	//框架页面
	'realTime':'Video na żywo',
	'logSearch':'Pamiętnik zapytanie',
	'options':'Konfiguracja',
	'exit':'Wyjście',
	'exitTips':'Potwierdź Exit?',
	
	//实时预览
	'setPic':'Zrzut ekranu',
	'fd':'powiększać',
	'play':'Broadcast',
	'stop':'stop',
	'starRecord':'Rozpocznij nagrywanie',
	'endRecord':'Zakończenie nagrywania',
	'mainStream':'Strumień 1',
	'childStream':'Strumień 2',
	
	//日志查询页面
	'logNum':'ID',
	'logTime':'Czas',
	'logDetail':'Szczegóły',
	'beginTime':'Czas startu',
	'endTime':'Czas zakończenia',
	'search':'Wyszukaj',
	'setEmpty':'Wyczyść',
	'setTimeTips1':'Proszę wybrać rozpoczęcia i godzinę zakończenia zapytania!',
	'setTimeTips2':'Czas zakończenia musi być większy niż czas rozpoczęcia!',
	
	//配置   菜单
	'localOptions':'Wyloguj',
	'baseOptions':'Ustawienia podstawowe',
	'system':'System',
	'systemOptions':'Ustawienia System',
	'localNet':'Sieć',
	'vedio':'Video',
	'image':'Kamera',
	'safety':'Bezpieczeństwo',
	'advanced':'Ustawienia zaawansowane',
	'event':'Wydarzenia',
	
	
	
	//本地配置-本地配置
	'playParam':'Parametry obrazu na żywo',
	'protocolType':'Protokół',
	'playProperty':'Parametry obrazu na żywo',
	'propertyFirst':'Najkrótsze opóźnienie',
	'realFirst':'Na żywo',
	'blance':'Zrównoważony',
	'speedFirst':'Najlepsza',
	'imageType':'Format obrazu',
	'vedioFiles':'Ustawienia pliku z nagraniem',
	'bagSizes':'Rozmiar pliku z nagraniem',
	'vedioPath':'Zapisz do',
	'playbackPath':'Zapisz pobrane pliki w',
	'imgAndClip':'Ustawienia obrazu i wideo',
	'previewImgPath':'Zapisz obraz z podglądu na żywo w',
	'playbackImgPath':'Zapisz zrzuty z odtwarzania w',
	'playbackClipPath':'Zapisz nagrania w',
	
	
	//基本配置－系统
	'deviceInfo':'Informacje o urządzeniu',
	'timeOption':'Ustaw czas',
	'systemSet':'Konserwacja',
	
	'baseInfo':'Informacje podstawowe',
	'deviceName':'Nazwa urządzenia',
	'hardwareVer':'Wersja opr. układ.',
	'softwareVer':'Wersja kodera',
	'channel':'Liczba kanałów',
	
	'timeZone':'Strefa czasowa',
	'checkTime':'Synchronizacja',
	'deviceTime':'Czas na kamerze',
	'NTPCheckTime':'NTP',
	'SNTPServer':'Serwer SNTP',
	'handCheck':'Ustaw ręcznie',
	'setTime':'Ustaw czas',
	'sameOfPC':'Zsynchronizuj czas z komputerem',
	'PCTime':'Czas komputer',
	'checNvr':'NVR zabronić modyfikacji IPC Czas',
	
	'deviceRestart':'Restart',
	'restartDevice':'Restart',
	'setDefaultTips':'Przywróć ustawienia fabryczne',
	'setDefaultTips1':'Pełne przywrócenie parametrów urządzenia do ustawień fabrycznych',
	'upgrade':'Aktualizacja',
	'upgradeFile':'Opr. układowe',
	'upgradeProgress':'Status połączenia:',
	'explain':'Nota:',
	'explainTips':'Aktualizacja potrwa od 1 do 10 minut, nie wyłączaj zasilania. Po aktualizacji nastąpi automatyczny restart.',
	
	'confirmRestart':'Potwierdź Reboot?',
	'confirmSetDefault':'Potwierdź przywrócić ustawienia fabryczne?',
	'upgradeTips':'Gdy pasek postępu aktualizacji urządzenia sugerują, że nie będzie poproszony zakończeniu aktualizacji, nic nie robię. Czy na pewno Upgrade？',
	'upgradeError1':'Nie wybrać pakiet aktualizacji, modernizacji przerwy。',
	'upgradeError2':'Aktualizacja zawiedzie!',
	'upgradeError3':'Aktualizacja nie powiedzie się z powodu błędu：',
	'confirmCheckTime':'Potwierdź czas korekty?',
	'setDate':'Proszę ustawić datę.',
	'setSNTPTips':'Proszę wybrać serwer SNTP。',
	
	
	
	//基本配置本地-网络
	'port':'Portu',
	'networkSet':'Ustawienia karty sieciowej',
	'enableDHCP':'Włącz Dhcp',
	'IPAddr':'Adres IP',
	'subnetMask':'Maska sieci',
	'gateway':'Bramka domyślna',
	'DNSServerOpt':'Serwer DNS',
	'defaultDNS':'Preferowany DNS',
	'HTTPport':'Portu HTTP',
	'portError':'Wydajna wartość portu HTTP to 80 lub od 1025 do 65534',
	
	
	//基本配置本地-视频
	'veido':'Video',
	'streamType':'Typ strumienia',
	'oneCodeStream':'Pojedynczy',
	'twoCodeStream':'Podwójny',
	'codeType':'Kodek',
	'codeStream':'Strumień',
	'frame':'Klatka',
	'bit':'Bity',
	'bitrateType':'Kontrola',
	'bitrateType0':'CBR',
	'bitrateType1':'VBR',
	'iFrame':'Ja ramki interwał',
	'noSetCn':'Zakazu przywozu chińskiego!',
	'deviceNameTips':'Nazwa urządzenia najmniej jeden znak, maksymalnie 31 znaków i liczb, liter i podkreślenia!',
	'bitTips':'Szybkość transmisji w zakresie 64-12000!',
	
	
	//基本配置本地-显示设置
	'displayOptions':'Ustawienia wyświetlania',
	'imgSet':'Regulacja obrazu',
	'brightness':'Jasność',
	'contrast':'Kontrast',
	'saturtion':'Nasycenie',
	'sharpness':'Ostrość',
	
	'ircutFilterTime':'Czas filtrowania IR',
	'ircutMode':'Moduł IR',
	'ircutMode0':'LDR Auto',
	'ircutMode1':'Video Auto',
	'ircutMode2':'Kolor',
	'ircutMode3':'Cz/B',
	
	'ae':'Ustawienia ekspozycji',
	'aeMode':'Tryb ekspozycji',
	'auto':'Auto',
	'hand':'Ręczne',
	'shutter':'Migawka',
	
	'backlight':'Ustawienia podświetlenia',
	'backlightIn':'Kompensacja tylnego światła',
	'close':'WYŁĄCZ',
	'open':'WŁĄCZ',
	'backlightNum':'Tylne światło',
	'small':'Min',
	'middle':'Śr',
	'big':'Max',
	'gainControl':'Przejęcie kontroli',
	
	'whiteBalance':'Balans Bieli',
	'redGain':'Wzmocnienie czerwieni',
	'greenGain':'Wzmocnienie zieleni',
	'blueGain':'Wzmocnienie niebieskiego',
	
	'vedioSet':'Korekta wideo',
	'dnrModel':'DNR',
	'dnrModel0':'WYŁĄCZ',
	'dnrModel1':'2D DNR',
	'dnrModel2':'3D DNR',
	'dnrModel3':'BOTH',
	
	'imgAdd':'Wzmocnienie obrazu',
	'flickerControl':'Kontrola błysku',
	'flickerControl0':'Wewnętrzny NTSC',
	'flickerControl1':'Wewnętrzny PAL',
	'flickerControl2':'Zewnętrzny',
	'sensorLinear':'Czujnik liniowy WDR',
	
	'defog':'Usuwania zamglenia',
	'defogModel':'Tryb usuwania zamglenia',
	'defogNum':'Usuwania zamglenia siłę',
	'setSlideTips':'Ustaw wartość od 0-255。',
	
	
	
	//基本配置本地-安全
	'userControl':'Użytkownik',
	'user':'Nazwa użytkownika',
	'right':'Upoważnienia',
	'eidt':'Edytuj',
	'del':'Usuń',
	'adduser':'Dodaj użytkownika',
	'admin':'Administrator',
	'handler':'Zwykli użytkownicy',
	'userEdit':'Zmień użytkownika',
	'userType':'Level',
	'confirmPwd':'Potwierdź hasło',
	'pwdTips0':'Numery Hasło najmniej jeden znak, maksymalnie 31 znaków, a jedynie, litery i znaki podkreślenia!',
	'pwdTips1':'Hasło dwukrotnie niespójność!',
	'usertips0':'Użytkownicy limit zostanie osiągnięty, nie możemy dodać!',
	'usertips1':'Login najmniej jeden znak, maksymalnie 31 znaków i liczb, liter i podkreślenia!',
	'usertips2':'Zakończenie nowych użytkowników',
	'usertips3':'De gebruiker bestaat a!',
	'error':'mislukt!',
	
	
	
	
	//高级配置-系统
	'setTimeRestart':'Planowana restart',
	'notSet':'Nigdy',
	'weekDay0':'Poniedziałek',
	'weekDay1':'Wtorek',
	'weekDay2':'Sroda',
	'weekDay3':'Piątek',
	'weekDay4':'Czwartek',
	'weekDay5':'Sobota',
	'weekDay6':'Sonntag',
	'weekDay7':'Codziennie',
	'weekDay8':'Tygodnik',
	'weekDay9':'na miesiąc',
		'weekDay10':'Japonia',
	'weekDay11':'czas',
	'weekDay12':'drugi',

	
	
	//高级配置-本地网络
	'other':'Inny',
	'ddnsType':'Typ DDNS',
	'peanutShells':'Oray',
	'domain':'Nazwa stron',
	'ddnsUser':'Konto DDN',
	'ddnsPwd':'Hasło DDNS',
	'ddnsState':'Status połączenia',
	'landSuccess':'Logowanie zakończone sukcesem',
	'serverType':'Typ serwera',
	'serverTypeName':'Użytkownik1',
	'serverLink':'Linki do dostawców usług',
	
	'ftpServer':'Serwer FTP',
	'savePath':'Prześlij plik',
	
	'sendUser':'Od',
	'sendAddr':'Nadawca',
	'smtpServer':'Serwer SMT',
	'checkInfo':'Mój serwer wymaga uwierzytelnienia',
	'reviewUser':'Odbiorca',
	'reviewAddr':'Email',
	'vedioCheckPwd':'Uwierzytelniania hasła jest włączona wideo',
	'loginFailed':'Logowanie nie powiodło się',
	'loginSuccess':'Zaloguj się sukcesem',
	'logining':'Zaloguj się',
	
	'cloudstoragetype':'Chmura Typ przechowywania',
	'web':'Chmura strony',
	'authcode':'Kod Bezpieczeństwa',
	'totalcapacity':'Całkowita pojemność',
	'usedcapacity':'Używane',
	'bound':'Związany',
	'unbound':'Bez ograniczeń',
	'binding':'wiążące',
	'unbind':'Wydzielenie',
	
	
	//高级配置-图像
	'osdOpt':'Ustawienia nakładki',
	'showTime':'Czas',
	'showText':'Tekst OSD',
	'dateFormat':'Formatowanie daty',
	'date0':'DD/MM/RRRR',
	'date1':'MM/DD/RRRR',
	'date2':'RRRR/MM/DD',
	'osdPosition':'Pozycja OSD',
	'pos0':'Górny_Lewy',
	'pos1':'Dolny_Lewy',
	'osdText':'Tekst OSD',
	'mirror':'Lustro',
	'mirror1':'Pionowy',
	'mirror2':'Poziomy',
	'mirror3':'Wszystkie',
	'aisleMode':'Tryb korytarz',
	'setOn':'Otwarte',
	'RotateAngle90':'90 stopni',
	'RotateAngle270':'270 stopni',
	'osdTips':'"OSD Tekst" nie może być ustawiony na wartość null!!',
	
	
	
	//高级配置-事件
	'motionDetecting':'Ruch',
	'privacyMasking':'Prywatność',
	'alarmSet':'Alarm',
	
	'optMode':'Ustawienia obszarów',
	'sensitivity':'Czułość',
	'selAll':'Zaznacz wszystkie',
	'clearAll':'Wyczyść wszystkie',
	
	'maskTips':'RADA:Strefa prywatności może objąć max 3 obszary',
	'area1':'Obszar1',
	'area2':'Obszar2',
	'area3':'Obszar3',
	'NoRoiArea':'Stopa zwrotu z inwestycji dla regionu ramki',
	'QpRelative':'Względna wartość QP',
	'QpAbsolute':'Wartość bezwzględna QP',
	
	'openAlarm':'Włącz alarm',
	'tillTime':'Czas trwania alarmu',
	'tillTime0':'10 sekund',
	'tillTime1':'30 sekund',
	'tillTime2':'1 minut',
	'tillTime3':'5 minut',
	'tillTime4':'10 minut',
	'tillTime5':'Non-Stop',
	
	'triggerAlarm':'Wywołanie alarmu',
	'alarmAction':'Włącz alarm',
	'uploadFtp':'Przesyłanie przez FTP',
	'fileType':'Format pliku',
	'uploadSmtp':'Prześlij przez SMTP',
	'uploadCloud':'Prześlij Chmura',
	
	
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
	'save':'Zapisz',
	'browse':'Skanowanie',
	'saved':'To zostało zapisane.',
	'savedfail':'Nie udało się zapisać!',
	'confirmSave':'Potwierdź zapisać?',
	'confirmDel':'Potwierdź Usuń?',
	'setDefault':'Przywrócenie ustawień domyślnych',
	'confirm':'Ok',
	'cancel':'Anuluj'
	
};













