//韩语
if($.timepicker){
	(function($) {
		$.timepicker.regional['zh-CN'] = {
			timeOnlyTitle: '선택 시간',
			timeText: '시간',
			hourText: '시간',
			minuteText: '분',
			secondText: '초',
			currentText: '시간 지금',
			closeText: '종료',
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
				timeOnlyTitle: '선택 시간',
				timeText: '시간',
				hourText: '시간',
				minuteText: '분',
				secondText: '초',
				currentText: '시간 지금',
				closeText: '종료',
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
	'labOpensound':'열기 사운드 끄기',
	'isoLab':'ISO 모드',
	'iso0':'표준',
	'iso1':'ISO+',
		
	'setSlideTips2':'0 ~ 100 사이의 값을 설정합니다',
	'sound':'오디오 주파수',
	'soundOption':'오디오 구성',
	'openSound':'오디오 열기',
	'inSound':'오디오 입력',
	'inSound0':'마이크 입력',
	'inCount':'입력 레벨',
		
	'p2pState':'연결 상태',
	'p2pSuccess':'연결에 성공',
	'p2pFailure':'연결에 실패',
		
	'tipsLog':'로그인 수출',
	'logPaht':'경로를 저장 수출 로그인',
		
	'sensorLinear0':'종료',
	'sensorLinear1':'자동적 인',
	'sensorLinear2':'약한',
	'sensorLinear3':'보통',
	'sensorLinear4':'강한',
	'sensorLinear5':'슈퍼',
		
	'emptyTips':'항목은 널 (null)을 설정할 수 없습니다',
	'osdTextTips':'',
	'portTips':'포트는 0 ~ 65535 사이의 값으로 설정 될 수 있습니다',
	'vedioFileBag':'비디오 패키지 크기',
	'inTips':'에',
	'formatErr':'잘못된',
	'optionsLoading':'구성, 기다려주십시오',
		
	//登录页面
	'login':'로그인',
	'userName':'사용자 ID',
	'pwd':'패스워드',
	'setLang':'언어 설정',
	'remenberPwd':'사용자 기억',
	'loginBtn':'로그인',
	'alertLoginErr':'로그인 실패! 사용자 ID와 패스워드를 확인하세요.',
	
	//框架页面
	'realTime':'실시간 비디오',
	'logSearch':'로그 검색',
	'options':'설정',
	'exit':'로그아웃',
	'exitTips':'로그아웃?',
	
	//实时预览
	'setPic':'스크린 샷',
	'fd':'확대',
	'play':'방송',
	'stop':'정지',
	'starRecord':'녹화를 시작합니다',
	'endRecord':'녹화 종료',
	'mainStream':'스트림 1',
	'childStream':'스트림 2',
	
	//日志查询页面
	'logNum':'ID',
	'logTime':'시간',
	'logDetail':'자세한 정보',
	'beginTime':'시작 시간',
	'endTime':'종료 시간',
	'search':'검색',
	'setEmpty':'비우기',
	'setTimeTips1':'선택 해 주 세요 조회 의 시작 과 종료 시간 이다',
	'setTimeTips2':'종료 시간이 시작 시간보다 커야',
	
	//配置   菜单
	'localOptions':'로컬 설정',
	'baseOptions':'기본 설정',
	'system':'시스템',
	'systemOptions':'시스템 설정',
	'localNet':'네트워크',
	'vedio':'비디오',
	'image':'카메라',
	'safety':'보안',
	'advanced':'전문가 설정',
	'event':'이벤트',
	
	
	
	//本地配置-本地配置
	'playParam':'라이브 뷰 설정',
	'protocolType':'프로토콜',
	'playProperty':'라이브 뷰 성능',
	'propertyFirst':'짧은 지연 ',
	'realFirst':'실시간',
	'blance':'균등',
	'speedFirst':'최고 유동성',
	'imageType':'이미지 포맷',
	'vedioFiles':'녹화 파일 설정',
	'bagSizes':'녹화 파일 크기',
	'vedioPath':'녹화 파일 저장 경로',
	'playbackPath':'다운로드 파일 저장 경로',
	'imgAndClip':'사진과 클립 설정',
	'previewImgPath':'라이브 뷰에 스냅 샷 저장',
	'playbackImgPath':'재생중 스냅 샷 저장경로',
	'playbackClipPath':'클립 저장 경로',
	
	
	//基本配置－系统
	'deviceInfo':'장치 정보',
	'timeOption':'시간 설정',
	'systemSet':'유지 보수',
	
	'baseInfo':'기본 정보',
	'deviceName':'장치 이름',
	'hardwareVer':'펌웨어 버전',
	'softwareVer':'인코딩 버전',
	'channel':'채널 수',
	
	'timeZone':'시간대',
	'checkTime':'시간 동기화.',
	'deviceTime':'카메라 내부 시간',
	'NTPCheckTime':'NTP',
	'SNTPServer':'SNTP 서버',
	'handCheck':'수동 설정',
	'setTime':'시간 설정',
	'sameOfPC':'컴퓨터와 시간동기화',
	'PCTime':'컴퓨터 시간',
	'checNvr':'NVR 수정 IPC 시간 금지',
	
	'deviceRestart':'리붓 시스템',
	'restartDevice':'재부팅',
	'setDefaultTips':'공장 설정 복원',
	'setDefaultTips1':'완전 공장 출하시 설정으로 장치 매개 변수를 복원',
	'upgrade':'업그레이드',
	'upgradeFile':'펌웨어',
	'upgradeProgress':'연결 상태',
	'explain':'설명',
	'explainTips':'업그레이드 되는데 5~10분 정도 소요됩니다 , 전원을 끄지 마시기 바랍니다. 업그레이드 완료 후 장치는 자동으로 재부팅됩니다.',
	
	'confirmRestart':'장치를 재 부팅하시겠어요?',
	'confirmSetDefault':'공장 설정으로 복원할까요?',
	'upgradeTips':'설비 업그레이드 할 경우 에는 진도 조 제시 는 제시 하지 않 았 업그레이드 완성 될 때 마 세요 아무런 조작 했 다.여부 확인 업그레이드?',
	'upgradeError1':'파일을 선택하세요.',
	'upgradeError2':'업그레이드 실패!',
	'upgradeError3':'업그레이드 실패 로 잘못:',
	'confirmCheckTime':'확인 교정 걸 려 요?',
	'setDate':'좀 설치 날짜',
	'setSNTPTips':'SNTP 서버 선택 해 주 세요',
	
	
	
	//基本配置本地-网络
	'port':'포트',
	'networkSet':'NIC 설정',
	'enableDHCP':'DHCP 활성화',
	'IPAddr':'IP 주소',
	'subnetMask':'넷마스크',
	'gateway':'디폴트 게이트웨이',
	'DNSServerOpt':'DNS 서버',
	'defaultDNS':'기본 DNS 서버',
	'HTTPport':'HTTP 포트',
	'portError':'외부 HTTP 포트번호: 1025~65534',
	
	
	//基本配置本地-视频
	'veido':'비디오',
	'streamType':'스트림 형식',
	'oneCodeStream':'단일 스트림',
	'twoCodeStream':'더블 스트림',
	'codeType':'코덱',
	'codeStream':'스트림',
	'frame':'프레임 레이트',
	'bit':'비트 전송률',
	'bitrateType':'Rate 제어',
	'bitrateType0':'VBR',
	'bitrateType1':'CBR',
	'iFrame':'나는 간격을 프레임',
	'noSetCn':'중국어 를 입력 금지',
	'deviceNameTips':'설비 명칭 , 많 게 는 다섯 자리 31 개 문자 를 할 수 밖 에 없 고 디지털, 문자 와 下划线 으로 구성 돼 있다',
	'bitTips':'BitRate1 범위는 64부터 12000이내여야 합니다.',
	
	
	//基本配置本地-显示设置
	'displayOptions':'설정 표시',
	'imgSet':'이미지 조정',
	'brightness':'밝기',
	'contrast':'콘트라스트',
	'saturtion':'채도',
	'sharpness':'선예도',
	
	'ircutFilterTime':'Ircut 전환 시간',
	'ircutMode':'Ircut 모드',
	'ircutMode0':'LDR 자동',
	'ircutMode1':'비디오 자동',
	'ircutMode2':'컬러 모드',
	'ircutMode3':'흑백 모드',
	
	'ae':'노출 설정',
	'aeMode':'노출 설정',
	'auto':'자동',
	'hand':'수동',
	'shutter':'셔터',
	
	'backlight':'역광 보정 설정',
	'backlightIn':'역광 보정',
	'close':'끄기',
	'open':'켜기',
	'backlightNum':'역광',
	'small':'최소',
	'middle':'중간',
	'big':'가장',
	'gainControl':'게인 제어',
	
	'whiteBalance':'화이트 밸런스',
	'redGain':'적색',
	'greenGain':'녹색 이득',
	'blueGain':'파란색 이득',
	
	'vedioSet':'동영상 조절',
	'dnrModel':'디지털 노이즈 감소 모드',
	'dnrModel0':'닫기',
	'dnrModel1':'2D DNR',
	'dnrModel2':'3D DNR',
	'dnrModel3':'열',
	
	'imgAdd':'이미지 향상',
	'flickerControl':'"깜빡거림제어',
	'flickerControl0':'실내 NTSC',
	'flickerControl1':'실내 PAL',
	'flickerControl2':'실외',
	'sensorLinear':'넓은 동태',
	
	'defog':'안개 보정 모델',
	'defogModel':'안개 보정 모델',
	'defogNum':'힘을 안개 보정',
	'setSlideTips':'은 경 치가 설치 는 0-255 간 다',
	
	
	
	//基本配置本地-安全
	'userControl':'ID관리',
	'user':'사용자 ID',
	'right':'권한',
	'eidt':'수정',
	'del':'삭제',
	'adduser':'사용자 추가',
	'admin':'관리자',
	'handler':'운영자',
	'userEdit':'수정',
	'userType':'사용자 수정',
	'confirmPwd':'패스워드 확인',
	'pwdTips0':'패스워드는 최소 1자이상 최대 31자이내여야 합니다.',
	'pwdTips1':'비밀번호가 서로 틀립니다.',
	'usertips0':'한계에 도달 할 때 사용자, 우리는 추가 할 수 없습니다',
	'usertips1':'사용자 ID는 1~31자 이내여야 합니다.',
	'usertips2':'완성 신규 가입자 첨가 했 다',
	'usertips3':'사용자가 이미 존재합니다',
	'error':'잘못',
	
	
	
	
	//高级配置-系统
	'setTimeRestart':'재부팅을 예약',
	'notSet':'절대로',
	'weekDay0':'월요일',
	'weekDay1':'화',
	'weekDay2':'수요일',
	'weekDay3':'금요일',
	'weekDay4':'목요일',
	'weekDay5':'토요일',
	'weekDay6':'일요일',
	'weekDay7':'매일',
	'weekDay8':'주간',
	'weekDay9':'월당',
		'weekDay10':'일본',
	'weekDay11':'시간',
	'weekDay12':'초',

	
	//高级配置-本地网络
	'other':'다른',
	'ddnsType':'DDNS 형식:',
	'peanutShells':'Oray',
	'domain':'도메인 이름',
	'ddnsUser':'DDNS 아이디',
	'ddnsPwd':'DDNS 비밀번호',
	'ddnsState':'연결 상태',
	'landSuccess':'로그인 성공',
	'serverType':'서비스 형식',
	'serverTypeName':'일반 사용자',
	'serverLink':'서비스 링크',
	
	'ftpServer':'FTP 서버',
	'savePath':'파일 업로드',
	
	'sendUser':'보내는 사람',
	'sendAddr':'발송자',
	'smtpServer':'SMTP 서버',
	'checkInfo':'권한이 필요합니다',
	'reviewUser':'받는 이',
	'reviewAddr':'Email',
	'vedioCheckPwd':'비디오 암호 인증',
	'loginFailed':'로그인 실패',
	'loginSuccess':'성공적으로 로그인',
	'logining':'로그인',
	
	'cloudstoragetype':'구름 스토리지 유형',
	'web':'클라우드 사이트',
	'authcode':'보안 코드',
	'totalcapacity':'총 용량',
	'usedcapacity':'사용',
	'bound':'바운드',
	'unbound':'언 바운드',
	'binding':'바인딩',
	'unbind':'개별적으로 가격을 매기',
	
	//高级配置-图像
	'osdOpt':'오버레이 설정',
	'showTime':'시간',
	'showText':'OSD 문자',
	'dateFormat':'날짜 형식',
	'date0':'DD/MM/YYYY',
	'date1':'MM/DD/YYYY',
	'date2':'YYYY/MM/DD',
	'osdPosition':'OSD 위치',
	'pos0':'왼쪽 위',
	'pos1':'아래 왼쪽',
	'osdText':'OSD 문자',
	'mirror':'미러',
	'mirror1':'세로',
	'mirror2':'수준',
	'mirror3':'수평과 수직으로',
	'aisleMode':'복도 모델',
	'setOn':'열',
	'RotateAngle90':'90도',
	'RotateAngle270':'270도',
	'osdTips':'OSD 텍스트 설치 할 수 없 는 텅 비어 있다',
	
	
	//高级配置-事件
	'motionDetecting':'동작 감시',
	'privacyMasking':'프라이버시 감추기',
	'alarmSet':'경보 설정',
	
	'optMode':'지역 설정',
	'sensitivity':'민감도',
	'selAll':'전체 선택',
	'clearAll':'모두 지우기',
	
	'maskTips':'팁:3개 지역에 대해서만 개인보고 설정 가능',
	'area1':'영역 1',
	'area2':'영역 2',
	'area3':'영역 3',
	'NoRoiArea':'비 ROI 영역의 프레임 레이트',
	'QpRelative':'상대 QP 값',
	'QpAbsolute':'QP 절대 값',
	
	'openAlarm':'오픈 신고',
	'tillTime':'알람 기간',
	'tillTime0':'10 초',
	'tillTime1':'30 초',
	'tillTime2':'1 분',
	'tillTime3':'5분',
	'tillTime4':'10분',
	'tillTime5':'계속 유효하다',
	
	'triggerAlarm':'신고 트리거',
	'alarmAction':'알람 켜기',
	'uploadFtp':'FTP로 업로드',
	'fileType':'파일 포맷',
	'uploadSmtp':'SMTP통해 업로드',
	'uploadCloud':'업로드 클라우드',
	
	
	//时区表
	'GMT0':'GMT-12 에니위탁, 과절런',
	'GMT1':'GMT-11.5',
	'GMT2':'GMT-11미드웨이 섬, 사모아',
	'GMT3':'GMT-10.5',
	'GMT4':'GMT-10 하와이',
	'GMT5':'GMT-9.5',
	'GMT6':'GMT-09 알래스카',
	'GMT7':'GMT-8.5',
	'GMT8':'GMT-08 태평양 시간 (미국 & 캐나다), 티후하나',
	'GMT9':'GMT-7.5',
	'GMT10':'GMT-07 마운틴 시간 (미국 & 캐나다), 애리조나',
	'GMT11':'GMT-6.5',
	'GMT12':'GMT-06 중부시간 (미국 & 캐나다), 멕시코 시티, 태구시칼파, 서스캐처원',
	'GMT13':'GMT-5.5',
	'GMT14':'GMT-05 앗샤르키야 시간 (미국 & 캐나다), 인디애나(동부), 보고타, 리마',
	'GMT15':'GMT-4.5',
	'GMT16':'GMT-04 Atlantic 시간 (캐나다), 카라카스, 라파스',
	'GMT17':'GMT-3.5',
	'GMT18':'GMT-03 블라질리아, 부에노스아레스, 조지타운',
	'GMT19':'GMT-2.5',
	'GMT20':'GMT-02 중부대서양',
	'GMT21':'GMT-1.5',
	'GMT22':'GMT-01 아조레스, 카보베르데 군도',
	'GMT23':'GMT-0.5',
	'GMT24':'GMT+00 더블린, 에든버러, 런던, 리스본, 몬로비아, 카사블랑카',
	'GMT25':'GMT+0.5',
	'GMT26':'GMT+01 베를린, 스톡홀름, 롬, 베른, 브뤼셀, 빈, 파리스, 마드리드, 암스테르담, 프라하, 바르샤바, 부다페스트',
	'GMT27':'GMT+1.5',
	'GMT28':'GMT+02 아테네, 헬싱키, 이스탄불, 카이로, 동부 유럽,하라레, 프리토리아, 이스라엘',
	'GMT29':'GMT+2.5',
	'GMT30':'GMT+03 바그다드, 쿠웨이트,나이로비, 리야드, 모스크바, 세인트피터즈버그, 카잔,볼고그라드',
	'GMT31':'GMT+3.5',
	'GMT32':'GMT+04 아부다비, 무스카트, 트빌리시',
	'GMT33':'GMT+4.5',
	'GMT34':'GMT+05 이슬라마바드, 카라치,에카테린부르크, 타슈켄트',
	'GMT35':'GMT+5.5',
	'GMT36':'GMT+06 알마아타, 다카',
	'GMT37':'GMT+6.5',
	'GMT38':'GMT+07 방콕, 자카르타, 하노이',
	'GMT39':'GMT+7.5',
	'GMT40':'GMT+08 타이베이, 베이징 충칭,우루무치, 홍콩, 퍼스, 싱가포르',
	'GMT41':'GMT+8.5',
	'GMT42':'GMT+09 도쿄, 오사카, 삿포르, 서울, 야쿠츠크',
	'GMT43':'GMT+9.5',
	'GMT44':'GMT+10 브리즈번, 멜버른, 시드니, 괌괌, 포트모르즈비, 블라디보스토크, 호바트',
	'GMT45':'GMT+10.5',
	'GMT46':'GMT+11 마가단, 솔로몬 군도, 뉴칼레도니아 섬',
	'GMT47':'GMT+11.5',
	'GMT48':'GMT+12 피지, 캄차카 반도, 마샬 군도, 웰링틴, 오클랜드',
		
	//一些通用按钮与提示
	'save':'저장',
	'browse':'스캔 중',
	'saved':'성공적으로 저장!',
	'savedfail':'저장하지 못했습니다!',
	'confirmSave':'보존 확인?',
	'confirmDel':'확인 삭제 요?',
	'setDefault':'기본',
	'confirm':'확인',
	'cancel':'취소'
	
};













