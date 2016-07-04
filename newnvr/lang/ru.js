//俄文
if($.timepicker){
	(function($) {
		$.timepicker.regional['zh-CN'] = {
			timeOnlyTitle: 'Выберите время',
			timeText: 'время',
			hourText: 'час',
			minuteText: 'минут',
			secondText: 'секунд',
			currentText: 'время',
			closeText: 'Закрыть',
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
				timeOnlyTitle: 'Выберите время',
				timeText: 'время',
				hourText: 'час',
				minuteText: 'минут',
				secondText: 'секунд',
				currentText: 'время',
				closeText: 'Закрыть',
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
	'isoLab':'режим ISO',
	'iso0':'нормальный',
	'iso1':'ISO+',
		
	'setSlideTips2':'Установите значение между 0-100',
	'sound':'звуковая частота',
	'soundOption':'Аудио настройки',
	'openSound':'Открыть аудио',
	'inSound':'звуковой вход',
	'inSound0':'Микрофонный вход',
	'inCount':'Уровень входного',
		
	'p2pState':'Состояние подключения',
	'p2pSuccess':'соединение успешно',
	'p2pFailure':'Не удалось соединения',
		
	'tipsLog':'Войти Экспорт',
	'logPaht':'Войти Экспорт путь для сохранения',
		
	'sensorLinear0':'Закрыть',
	'sensorLinear1':'автоматическая',
	'sensorLinear2':'слабый',
	'sensorLinear3':'умеренный',
	'sensorLinear4':'сильный',
	'sensorLinear5':'супер',
		
	'emptyTips':'Предметы, которые не могут быть установлены нуль',
	'osdTextTips':'',
	'portTips':'Порт может быть установлен только между 0-65535',
	'vedioFileBag':'Размер видео пакета',
	'inTips':'в',
	'formatErr':'уродливый',
	'optionsLoading':'Конфигурация, пожалуйста, подождите',
		
	//登录页面
	'login':'Войти',
	'userName':'Имя пользователя',
	'pwd':'Пароль',
	'setLang':'Вход',
	'remenberPwd':'Запомнить',
	'loginBtn':'Войти',
	'alertLoginErr':'Ошибка авторизации! Проверьте пароль и логин!',
	
	//框架页面
	'realTime':'Живой просмотр',
	'logSearch':'Поиск событий',
	'options':'Настройка',
	'exit':'Выход',
	'exitTips':'Подтвердите выход!?',
	
	//实时预览
	'setPic':'Скриншот',
	'fd':'Увеличить',
	'play':'трансляция',
	'stop':'стоп',
	'starRecord':'Начать запись',
	'endRecord':'Конец записи',
	'mainStream':'1 поток',
	'childStream':'2 поток',
	
	//日志查询页面
	'logNum':'ID',
	'logTime':'Время',
	'logDetail':'Детали',
	'beginTime':'Время старта',
	'endTime':'Время завершения',
	'search':'Поиск',
	'setEmpty':'Очистить',
	'setTimeTips1':'Пожалуйста, выберите время начала запроса и время окончания!',
	'setTimeTips2':'Время окончания должно быть больше времени начала!',
	
	//配置   菜单
	'localOptions':'Локальные настр.',
	'baseOptions':'Быстрая настройка',
	'system':'Система',
	'systemOptions':'Система настройка',
	'localNet':'Сеть',
	'vedio':'Видео',
	'image':'Камера',
	'safety':'Безопасность',
	'advanced':'Расширенная настройка',
	'event':'События',
	
	
	
	//本地配置-本地配置
	'playParam':'Параметры отображения',
	'protocolType':'Протокол',
	'playProperty':'Производительность',
	'propertyFirst':'Кратчайшее время',
	'realFirst':'Реальное время',
	'blance':'Плавное',
	'speedFirst':'Выход',
	'imageType':'Формат изображения',
	'vedioFiles':'Настройки файла записи',
	'bagSizes':'Размер файла записи',
	'vedioPath':'Сохранять видео в папку',
	'playbackPath':'Сохранять загр. файлы',
	'imgAndClip':'Настройки картинки и клипа',
	'previewImgPath':'Сохранять снимки в папку',
	'playbackImgPath':'хранять снимки из архива',
	'playbackClipPath':'Сохранять видео из архива',
	
	
	//基本配置－系统
	'deviceInfo':'информации',
	'timeOption':'Устан.времени',
	'systemSet':'обслуживание',
	
	'baseInfo':'Основная информация',
	'deviceName':'Имя устройства',
	'hardwareVer':'Версия прошивки',
	'softwareVer':'Версия кодир.',
	'channel':'Количество каналов',
	
	'timeZone':'Временная зона',
	'checkTime':'Time Sync.',
	'deviceTime':'Время камеры',
	'NTPCheckTime':'NTP',
	'SNTPServer':'SNTP сервер',
	'handCheck':'Ручной режим',
	'setTime':'Время',
	'sameOfPC':'Синхронизация времени с ПК',
	'PCTime':'Компьютерные',
	'checNvr':'NVR запретить модификацию IPC Время',
	
	'deviceRestart':'Сброс системы',
	'restartDevice':'Перезагрузка',
	'setDefaultTips':'Вернуть параметры по умолчанию',
	'setDefaultTips1':'Полностью восстановить параметры устройства к заводским настройкам',
	'upgrade':'Обновление',
	'upgradeFile':'ПО',
	'upgradeProgress':'Статус подключение:',
	'explain':'Примечание',
	'explainTips':'Процесс обновления займет от 1 до 10 минут, пожалуйста, не выключайте устройство. Устройство будет автоматически перезагружено после обновления.',
	
	'confirmRestart':'Подтвердите перезагрузку?',
	'confirmSetDefault':'Подтверждение восстановления заводских настроек?',
	'upgradeTips':'Когда обновление оборудования индикатор будет предположить, что не будет предложено обновление завершено, ничего не делать. Вы уверены, что обновления？',
	'upgradeError1':'Не выбрать пакет обновления, обновления прерывание。',
	'upgradeError2':'обновление не!',
	'upgradeError3':'Реконструкция Сбой：',
	'confirmCheckTime':'Подтвердите время коррекции?',
	'setDate':'Пожалуйста, установите дату.',
	'setSNTPTips':'Пожалуйста, выберите сервер SNTP。',
	
	
	
	//基本配置本地-网络
	'port':'Порт',
	'networkSet':'Параметры NIC',
	'enableDHCP':'Вкл DHCP',
	'IPAddr':'IP адрес',
	'subnetMask':'Маска сети',
	'gateway':'Шлюз по умолчанию',
	'DNSServerOpt':'DNS сервер',
	'defaultDNS':'Предпочт DNS сервер',
	'HTTPport':'HTTP порт',
	'portError':'Http порт 80 или выберите в диапазоне1025 - 65534',
	
	
	//基本配置本地-视频
	'veido':'Видео',
	'streamType':'Число потоков',
	'oneCodeStream':'Первый',
	'twoCodeStream':'Второй',
	'codeType':'Кодек',
	'codeStream':'й поток',
	'frame':'Число кадров',
	'bit':'Битрейт',
	'bitrateType':'Контроль скорости',
	'bitrateType0':'CBR',
	'bitrateType1':'VBR',
	'iFrame':'Я готовлю интервал',
	'noSetCn':'Запретить ввоз китайской!',
	'deviceNameTips':'Имя устройства мере один символ, до 31 символов, и только цифры, буквы и символы подчеркивания!',
	'bitTips':'Битрейт в диапазоне 64-12000!',
	
	
	//基本配置本地-显示设置
	'displayOptions':'Дисплей Установка',
	'imgSet':'Настройка изображения',
	'brightness':'Яркость',
	'contrast':'Контраст',
	'saturtion':'Насыщенность',
	'sharpness':'Четкость',
	
	'ircutFilterTime':'Задержка ИК фильтра',
	'ircutMode':'Режим IR',
	'ircutMode0':'LDR авто',
	'ircutMode1':'Видео авто',
	'ircutMode2':'Цвет',
	'ircutMode3':'Ч/Б',
	
	'ae':'Настройки экспозиции',
	'aeMode':'Режим экспозиции',
	'auto':'Aвто',
	'hand':'Ручной режим',
	'shutter':'Затвор',
	
	'backlight':'Параметры подсветки',
	'backlightIn':'Компенсация засветки',
	'close':'ВЫКЛ',
	'open':'ВКЛ',
	'backlightNum':'BLC',
	'small':'Мини',
	'middle':'Средий',
	'big':'Макс',
	'gainControl':'Настройка усиления',
	
	'whiteBalance':'Баланс белого',
	'redGain':'Красный цвет',
	'greenGain':'Зеленый цвет',
	'blueGain':'Синий цвет',
	
	'vedioSet':'Регулировка Видео',
	'dnrModel':'DNR',
	'dnrModel0':'ВЫКЛ',
	'dnrModel1':'3D DNR',
	'dnrModel2':'3D DNR',
	'dnrModel3':'BOTH',
	
	'imgAdd':'Улучшение изображения',
	'flickerControl':'Функция мерцания',
	'flickerControl0':'Внутрений NTSC',
	'flickerControl1':'Внутрений PAL',
	'flickerControl2':'Внешний',
	'sensorLinear':'Сенсор WDR',
	
	'defog':'рассеивание тумана',
	'defogModel':'Режим запотевания',
	'defogNum':'Запотевания сила',
	'setSlideTips':'Установите значение между 0-255。',
	
	
	
	//基本配置本地-安全
		'userControl':'Пользователь',
	'user':'Имя пользователя',
	'right':'Авторизация',
	'eidt':'Редактор',
	'del':'Удалить',
	'adduser':'Добавить пользователя',
	'admin':'Админ',
	'handler':'ператор',
	'userEdit':'Изменить пользователя',
	'userType':'Права',
	'confirmPwd':'Подтвердите Пароль',
	'pwdTips0':'Пароль мере один символ, не более 31 символов, и только цифры, буквы и символы подчеркивания!',
	'pwdTips1':'Пароль дважды непоследовательность!',
	'usertips0':'Люди предел достигнут, мы не можем добавить!',
	'usertips1':'Имя мере один символ, максимум 31 символов, и только цифры, буквы и символы подчеркивания!',
	'usertips2':'Полное будет добавлен новый пользователь.',
	'usertips3':'Пользователь уже существует!',
	'error':'неправильно',
	
	
	
	
	//高级配置-系统
	'setTimeRestart':'Сроки перезапуска',
	'notSet':'Никогда не',
	'weekDay0':'Понедельник',
	'weekDay1':'Вторник',
	'weekDay2':'Среда',
	'weekDay3':'Четверг',
	'weekDay4':'Пятница',
	'weekDay5':'Суббота',
	'weekDay6':'Воскркскные',
	'weekDay7':'ежедневно',
	'weekDay8':'еженедельно',
	'weekDay9':'помесячно',
		'weekDay10':'Япония',
	'weekDay11':'время',
	'weekDay12':'второй',

	
	
	//高级配置-本地网络
	'other':'Другой',
	'ddnsType':'Тип DDNS',
	'peanutShells':'Oray',
	'domain':'Имя сайта',
	'ddnsUser':'Пользователь DDNS',
	'ddnsPwd':'Пароль DDNS',
	'ddnsState':'Статус подключение',
	'landSuccess':'Вход осуществлен',
	'serverType':'Тип настройки',
	'serverTypeName':'Помощь пользователю',
	'serverLink':'Сылка на настройку',
	
	'ftpServer':'FTP сервер',
	'savePath':'Загрузка файла',
	
	'sendUser':'Имя отпр.',
	'sendAddr':'Отправитель',
	'smtpServer':'SMTP сервер',
	'checkInfo':'Требуется авторизация для входа',
	'reviewUser':'Имя получ.',
	'reviewAddr':'Email',
	'vedioCheckPwd':'Аутентификации Видео пароль включен',
	'loginFailed':'Войти не удалось',
	'loginSuccess':'Войти успешным',
	'logining':'войти',
	
	'cloudstoragetype':'Облако тип хранения',
	'web':'Облако сайта',
	'authcode':'Код Безопасности',
	'totalcapacity':'Общая мощность',
	'usedcapacity':'Используемый',
	'bound':'Связанный',
	'unbound':'Обязательства',
	'binding':'Связывание',
	'unbind':'Разделение',
	
	
	//高级配置-图像
	'osdOpt':'Настройки',
	'showTime':'Время',
	'showText':'Подпись',
	'dateFormat':'Формат даты',
	'date0':'DD/MM/YYYY',
	'date1':'MM/DD/YYYY',
	'date2':'YYYY/MM/DD',
	'osdPosition':'Место подписи',
	'pos0':'Вверх_Лево',
	'pos1':'Внизу_лево',
	'osdText':'Подпись',
	'mirror':'Зеркало',
	'mirror1':'ВЕРТИКАЛЬНЫЙ',
	'mirror2':'ГОРИЗОНТАЛЬНЫЙ',
	'mirror3':'ОБА',
	'aisleMode':'Коридор режим',
	'setOn':'открыто',
	'RotateAngle90':'90 градусов',
	'RotateAngle270':'270 градусов',
	'osdTips':'"Экранного текста" не может быть установлен, чтобы очистить!!',
	
	
	
	//高级配置-事件
	'motionDetecting':'Движение',
	'privacyMasking':'Приват зоны',
	'alarmSet':'Тревога',
	
	'optMode':'Настройка зоны',
	'sensitivity':'Чувствительность',
	'selAll':'Выбрать все',
	'clearAll':'Очистить все',
	
	'maskTips':'Подсказка: Вы можете скрыть только 3 области',
	'area1':'Область1',
	'area2':'Область2',
	'area3':'Область3',
	'NoRoiArea':'Скорость область кадра Номера ROI',
	'QpRelative':'Относительное значение QP',
	'QpAbsolute':'QP абсолютное значение',
	
	'openAlarm':'Вкл тревогу',
	'tillTime':'Задержка тревоги',
	'tillTime0':'10 сек',
	'tillTime1':'30 сек',
	'tillTime2':'1 минута',
	'tillTime3':'5 минута',
	'tillTime4':'10 минута',
	'tillTime5':'Без остановки',
	
	'triggerAlarm':'Переключатель тревоги',
	'alarmAction':'Вкл тревогу',
	'uploadFtp':'Загрузить через FTP',
	'fileType':'Формат файла',
	'uploadSmtp':'Загрузка по SMTP',
	'uploadCloud':'Загрузить Облако',
	
	
	//时区表
	'GMT0':'GMT-12 Эниветок,Кваджалейн',
	'GMT1':'GMT-11.5',
	'GMT2':'GMT-11 Остров Мидуэй , Самоа',
	'GMT3':'GMT-10.5',
	'GMT4':'GMT-10 Гавайи',
	'GMT5':'GMT-9.5',
	'GMT6':'GMT-09 на Аляске',
	'GMT7':'GMT-8.5',
	'GMT8':'GMT-08 Тихоокеанское время (США и Канада) , Тихуана',
	'GMT9':'GMT-7.5',
	'GMT10':'GMT-07 Горное время (США и Канада ), Аризона',
	'GMT11':'GMT-6.5',
	'GMT12':'GMT-06 Центральное время ( США и Канада) , Мехико, Тегусигальпа , Саскачеван',
	'GMT13':'GMT-5.5',
	'GMT14':'GMT-05 Восточное время (США и Канада) , Индиана (Восток) , Богота, Лима',
	'GMT15':'GMT-4.5',
	'GMT16':'GMT-04 Атлантическое время (Канада) , Каракас , Ла-Пас',
	'GMT17':'GMT-3.5',
	'GMT18':'GMT-03 Бразилиа , Буэнос-Айрес , Джорджтаун',
	'GMT19':'GMT-2.5',
	'GMT20':'GMT-02 Mid-Atlantic',
	'GMT21':'GMT-1.5',
	'GMT22':'GMT-01 Азорские острова , Кабо- Вердес',
	'GMT23':'GMT-0.5',
	'GMT24':'GMT+00 Дублин, Эдинбург , Лондон, Лиссабон, Монровия , Касабланка',
	'GMT25':'GMT+0.5',
	'GMT26':'GMT+01 Берлин, Стокгольм, Рим, Берн, Брюссель, Вена, Париж, Мадрид, Амстердам, Прага, Варшава, Будапешт',
	'GMT27':'GMT+1.5',
	'GMT28':'GMT+02 Афины, Хельсинки, Стамбул, Каир , Восточная Европа , Хараре , Претория , Израиль',
	'GMT29':'GMT+2.5',
	'GMT30':'GMT+03 Багдад, Кувейт , Найроби, Эр-Рияд, Москва, Санкт-Петербург , Казань , Волгоград',
	'GMT31':'GMT+3.5',
	'GMT32':'GMT+04 Абу-Даби, Мускат , Тбилиси',
	'GMT33':'GMT+4.5',
	'GMT34':'GMT+05 Исламабад , Карачи , Екатеринбург , Ташкент',
	'GMT35':'GMT+5.5',
	'GMT36':'GMT+06 Алма-Ата , Дакка;GMT+6.5;GMT+07 Бангкок, Джакарта, Ханой',
	'GMT37':'GMT+6.5',
	'GMT38':'GMT+07 Бангкок, Джакарта, Ханой',
	'GMT39':'GMT+7.5',
	'GMT40':'GMT+08 Тайбэй, Пекин , Чунцин, Урумчи , Гонконг , Перт , Сингапур',
	'GMT41':'GMT+8.5',
	'GMT42':'GMT+09 Токио, Осака, Саппоро, Сеул, Якутск',
	'GMT43':'GMT+9.5',
	'GMT44':'GMT+10 Брисбен , Мельбурн, Сидней , Гуам, Порт-Морсби , Владивосток , Хобарт',
	'GMT45':'GMT+10.5',
	'GMT46':'GMT+11 Магадан, Соломоновы острова , Новая Каледония',
	'GMT47':'GMT+11.5',
	'GMT48':'GMT+12 Фиджи , Камчатка, Маршалловы , Веллингтон, Окленд',
		
	//一些通用按钮与提示
	'save':'Сохранить',
	'browse':'Выбор',
	'saved':'Это была сохранена.',
	'savedfail':'Не удалось сохранить!',
	'confirmSave':'Повторите сохранить?',
	'confirmDel':'Подтвердите Удалить?',
	'setDefault':'По умолчанию',
	'confirm':'Ок',
	'cancel':'Отмена'
	
};













