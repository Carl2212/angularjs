//葡萄牙语
if($.timepicker){
	(function($) {
		$.timepicker.regional['zh-CN'] = {
				timeOnlyTitle: 'Selecione o tempo',
				timeText: 'tempo',
				hourText: 'hora',
				minuteText: 'minuto',
				secondText: 'segundos',
				currentText: 'tempo agora',
				closeText: 'desligar',
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
				timeOnlyTitle: 'Selecione o tempo',
				timeText: 'tempo',
				hourText: 'hora',
				minuteText: 'minuto',
				secondText: 'segundos',
				currentText: 'tempo agora',
				closeText: 'desligar',
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
	'isoLab':'modo ISO',
	'iso0':'normal',
	'iso1':'ISO+',
		
	'setSlideTips2':'Defina o valor entre 0-100',
	'sound':'audiofreqüência',
	'soundOption':'Configuração de áudio',
	'openSound':'Abrir Áudio',
	'inSound':'Entrada de Áudio',
	'inSound0':'Entrada mic',
	'inCount':'Nível de Entrada',
		
	'p2pState':'status da conexão',
	'p2pSuccess':'a conexão é bem-sucedida',
	'p2pFailure':'Falha de conexão',
		
	'tipsLog':'Log Export',
	'logPaht':'Log Export salvar caminho',
		
	'sensorLinear0':'desligar',
	'sensorLinear1':'automático',
	'sensorLinear2':'fraco',
	'sensorLinear3':'moderado',
	'sensorLinear4':'forte',
	'sensorLinear5':'super',
		
	'emptyTips':'Itens que não podem ser definidas nulo',
	'osdTextTips':'',
	'portTips':'Porto só pode ser definido entre 0-65535',
	'vedioFileBag':'Tamanho do pacote de vídeo',
	'inTips':'em',
	'formatErr':'deformado',
	'optionsLoading':'Configuração, por favor aguarde',
		
	//登录页面
	'login':'entrar',
	'userName':'nome de usuário',
	'pwd':'senha',
	'setLang':'selecção de idiomas',
	'remenberPwd':'Lembre-se de senha',
	'loginBtn':'entrar',
	'alertLoginErr':'Falha no login, verificar a sua conta e senha estão errados。',
	
	//框架页面
	'realTime':'Live Preview',
	'logSearch':'log de Consultas',
	'options':'configuração',
	'exit':'cair fora',
	'exitTips':'confirme Exit?',
	
	//实时预览
	'setPic':'Screenshot',
	'fd':'ampliar',
	'play':'transmissão',
	'stop':'Pare',
	'starRecord':'iniciar a gravação',
	'endRecord':'Terminar a gravação',
	'mainStream':'Main stream',
	'childStream':'Sub-corrente',
	
	//日志查询页面
	'logNum':'número de série',
	'logTime':'tempo',
	'logDetail':'para maiores informações',
	'beginTime':'start Time',
	'endTime':'fim Do Tempo',
	'search':'encontrar',
	'setEmpty':'claro',
	'setTimeTips1':'Por favor, selecione consultas início e término！',
	'setTimeTips2':'O tempo final deve ser maior do que o tempo de início！',
	
	//配置   菜单
	'localOptions':'Configuração Local',
	'baseOptions':'configuração básica',
	'system':'sistema',
	'systemOptions':'Configuração sistema',
	'localNet':'Rede Local',
	'vedio':'vídeo',
	'image':'imagem',
	'safety':'segurança',
	'advanced':'Configuração Avançada',
	'event':'evento',
	
	
	
	//本地配置-本地配置
	'playParam':'parâmetros de reprodução',
	'protocolType':'Tipo de Protocolo',
	'playProperty':'Desempenho do Jogador',
	'propertyFirst':'Prioridade desempenho',
	'realFirst':'Bom real',
	'blance':'equilibrados',
	'speedFirst':'Fluência',
	'imageType':'Formato de arquivo de captura',
	'vedioFiles':'Os arquivos de vídeo',
	'bagSizes':'Vídeo tamanho da embalagem arquivo',
	'vedioPath':'Caminho do arquivo de vídeo',
	'playbackPath':'Download reprodução salvar caminho',
	'imgAndClip':'Captura e edição',
	'previewImgPath':'Pré-visualização Snapshot Save Path',
	'playbackImgPath':'Reprodução Snapshot Save Path',
	'playbackClipPath':'Reprodução de clipe salvar caminho',
	
	
	//基本配置－系统
	'deviceInfo':'Informações sobre o dispositivo',
	'timeOption':'Definições do tempo',
	'systemSet':'Manutenção De Sistema',
	
	'baseInfo':'informação básica',
	'deviceName':'Nome Do Dispositivo',
	'hardwareVer':'Versão hardware',
	'softwareVer':'Versão de Software',
	'channel':'número do canal',
	
	'timeZone':'fuso horário',
	'checkTime':'cronometragem',
	'deviceTime':'equipamentos Tempo',
	'NTPCheckTime':'NTP tempo',
	'SNTPServer':'Servidor SNTP',
	'handCheck':'correção manual',
	'setTime':'Definir hora',
	'sameOfPC':'Sincronizar com o computador',
	'PCTime':'Tempo de computador',
	'checNvr':'NVR proibir modificação IPC Tempo',
	
	'deviceRestart':'reinicialização do dispositivo',
	'restartDevice':'reinicialização',
	'setDefaultTips':'Restaurar configurações de fábrica',
	'setDefaultTips1':'Totalmente restaurar os parâmetros do dispositivo para as configurações de fábrica',
	'upgrade':'atualização',
	'upgradeFile':'arquivo de atualização',
	'upgradeProgress':'Atualize Progresso',
	'explain':'explicação',
	'explainTips':'A atualização leva 1-10 minutos, não desligue a alimentação, execute o reinício automático após o upgrade',
	
	'confirmRestart':'Confirme reinicialização?',
	'confirmSetDefault':'Confirmar restaurar as configurações de fábrica?',
	'upgradeTips':'Quando o equipamento de atualização barra de progresso irá sugerir que não será solicitado a atualização for concluída, não faça nada. Você tem certeza de actualização？',
	'upgradeError1':'Eu não escolhi o pacote de atualização, atualizar interrupção。',
	'upgradeError2':'a atualização falhar!',
	'upgradeError3':'Atualize falhou com o erro:',
	'confirmCheckTime':'Confirme tempo de correção?',
	'setDate':'Por favor, defina a data.',
	'setSNTPTips':'Por favor, selecione o servidor SNTP.',
	
	
	
	//基本配置本地-网络
	'port':'porto',
	'networkSet':'Parâmetros de configuração da NIC',
	'enableDHCP':'Se HDCP habilitado',
	'IPAddr':'endereços IP',
	'subnetMask':'Máscara de sub-',
	'gateway':'gateway Padrão',
	'DNSServerOpt':'Configuração do servidor DNS',
	'defaultDNS':'Servidor DNS preferencial',
	'HTTPport':'porta HTTP',
	'portError':'Os valores válidos para porta HTTP  é 80 or from 1025 to 65534。',
	
	
	//基本配置本地-视频
	'veido':'vídeo',
	'streamType':'Tipo de fluxo',
	'oneCodeStream':'Único-stream',
	'twoCodeStream':'Dual-stream',
	'codeType':'codificação',
	'codeStream':'córrego',
	'frame':'taxa de quadros',
	'bit':'bit Rate',
	'bitrateType':'Taxa variável (fixo)',
	'bitrateType0':'taxa fixa',
	'bitrateType1':'VBR',
	'iFrame':'i-frame intervalo',
	'noSetCn':'Proibir a importação chinesa!',
	'deviceNameTips':'Nome do dispositivo menos um caractere, até 31 caracteres, e apenas números, letras e sublinhados!',
	'bitTips':'A taxa de bits na gama de 64-12000!',
	
	
	//基本配置本地-显示设置
	'displayOptions':'Configurações de exibição',
	'imgSet':'ajuste de imagem',
	'brightness':'brilho',
	'contrast':'contrastar',
	'saturtion':'saturação',
	'sharpness':'agudeza',
	
	'ircutFilterTime':'Tempo de conversão Ircut',
	'ircutMode':'modo Ircut',
	'ircutMode0':'LDR automática',
	'ircutMode1':'vídeo Auto',
	'ircutMode2':'Modo de cor',
	'ircutMode3':'preto e branco',
	
	'ae':'exposição',
	'aeMode':'modo de exposição',
	'auto':'automático',
	'hand':'manualmente',
	'shutter':'do obturador eletrônico',
	
	'backlight':'iluminado',
	'backlightIn':'BLC',
	'close':'desligar',
	'open':'aberto',
	'backlightNum':'quantidade retroiluminado',
	'small':'mínimo',
	'middle':'moderado',
	'big':'máximo',
	'gainControl':'ajuste de ganho',
	
	'whiteBalance':'O balanço de brancos',
	'redGain':'Red Gain',
	'greenGain':'Ganho verde',
	'blueGain':'Ganho azul',
	
	'vedioSet':'vídeo tuning',
	'dnrModel':'Redução de Ruído digital',
	'dnrModel0':'desligar',
	'dnrModel1':'Redução de Ruído Digital (2D)',
	'dnrModel2':'Redução de Ruído Digital (3D)',
	'dnrModel3':'completo',
	
	'imgAdd':'Aperfeiçoamento de Imagem',
	'flickerControl':'piscando Controle',
	'flickerControl0':'NTSC Indoor',
	'flickerControl1':'PAL Indoor',
	'flickerControl2':'ao ar livre',
	'sensorLinear':'Interruptor dinâmico de largura',
	
	'defog':'desembaçamento',
	'defogModel':'Modo de desembaçamento',
	'defogNum':'Força defogging',
	'setSlideTips':'Defina o valor entre 0-255。',
	
	
	
	//基本配置本地-安全
	'userControl':'Gerenciamento de usuários',
	'user':'usuário',
	'right':'competência',
	'eidt':'editor',
	'del':'excluir',
	'adduser':'usuários adicionar',
	'admin':'administrador',
	'handler':'operador',
	'userEdit':'os usuários editem',
	'userType':'Tipo de Usuário',
	'confirmPwd':'confirmar Senha',
	'pwdTips0':'Senha menos um caractere, um máximo de 31 caracteres, e apenas números, letras e sublinhados!',
	'pwdTips1':'Senha duas vezes inconsistência!',
	'usertips0':'Usuários limite for atingido, não podemos adicionar!',
	'usertips1':'Nome de utilizador menos um caractere, um máximo de 31 caracteres, e apenas números, letras e sublinhados!',
	'usertips2':'Completa novo usuário é adicionado.',
	'usertips3':'O usuário já existe!',
	'error':'errado',
	
	
	
	
	//高级配置-系统
	'setTimeRestart':'cronometragem restart',
	'notSet':'nem',
	'weekDay0':'na Segunda-Feira',
	'weekDay1':'na Terça-Feira',
	'weekDay2':'Quarta-Feira',
	'weekDay3':'quinta-feira',
	'weekDay4':'sexta-feira',
	'weekDay5':'no Sábado',
	'weekDay6':'domingo',
	'weekDay7':'Todos os dias',
	'weekDay8':'semanal',
	'weekDay9':'por mês',
		'weekDay10':'Japão',
	'weekDay11':'tempo',
	'weekDay12':'segundo',

	
	
	//高级配置-本地网络
	'other':'outro',
	'ddnsType':'Tipo DDNS',
	'peanutShells':'cascas de amendoim',
	'domain':'nome do domínio',
	'ddnsUser':'DDNS Usuário',
	'ddnsPwd':'DDNS senha',
	'ddnsState':'DDNS Estado',
	'landSuccess':'login bem-sucedido',
	'serverType':'tipo de serviço',
	'serverTypeName':'Os usuários comuns',
	'serverLink':'Links de serviços',
	
	'ftpServer':'FTP Servidor',
	'savePath':'caminho de armazenamento',
	
	'sendUser':'remetente',
	'sendAddr':'Do endereço',
	'smtpServer':'servidor SMTP',
	'checkInfo':'Verifique as informações',
	'reviewUser':'destinatário',
	'reviewAddr':'Endereço De Entrega',
	'vedioCheckPwd':'Autenticação de senha vídeo é ativado',
	'loginFailed':'falha no login',
	'loginSuccess':'login bem-sucedido',
	'logining':'entrar',
	
	'cloudstoragetype':'Cloud Tipo de armazenamento',
	'web':'Nuvem Site',
	'authcode':'Código De Segurança',
	'totalcapacity':'A capacidade total',
	'usedcapacity':'Usava',
	'bound':'Limite',
	'unbound':'Não consolidado',
	'binding':'vinculativo',
	'unbind':'Separação',
	
	
	//高级配置-图像
	'osdOpt':'configurações do OSD',
	'showTime':'hora do show',
	'showText':'texto de exibição',
	'dateFormat':'Formato De Data',
	'date0':'',
	'date1':'Dia / Mes / Ano',
	'date2':'Ano / Mês / Dia',
	'osdPosition':'posição OSD',
	'pos0':'esquerda',
	'pos1':'inferior esquerdo',
	'osdText':'texto OSD',
	'mirror':'Mirroring',
	'mirror1':'vertical',
	'mirror2':'nível',
	'mirror3':'Horizontal e vertical',
	'aisleMode':'modo de corredor',
	'setOn':'aberto',
	'RotateAngle90':'90 graus',
	'RotateAngle270':'270 graus',
	'osdTips':'"OSD texto" não pode ser definido como nulo!!',
	
	
	
	//高级配置-事件
	'motionDetecting':'Detector De Movimento',
	'privacyMasking':'PRIVACIDADE',
	'alarmSet':'Configurações de Alarme',
	
	'optMode':'Modo de configuração',
	'sensitivity':'sensibilidade',
	'selAll':'selecionar tudo',
	'clearAll':'limpar tudo',
	
	'maskTips':'Dica: você só pode tirar três regiões',
	'area1':'área 1',
	'area2':'área 2',
	'area3':'área 3',
	'NoRoiArea':'Não ROI taxa região quadro',
	'QpRelative':'Valor QP Relativa',
	'QpAbsolute':'QP valor absoluto',
	
	'openAlarm':'Abrir alarme',
	'tillTime':'duração',
	'tillTime0':'10 segundo',
	'tillTime1':'30 segundo',
	'tillTime2':'1 minuto',
	'tillTime3':'5 minuto',
	'tillTime4':'10 minuto',
	'tillTime5':'sempre ativo',
	
	'triggerAlarm':'alarme é acionado',
	'alarmAction':'ligação de alarme',
	'uploadFtp':'FTP upload',
	'fileType':'Formato De Arquivo',
	'uploadSmtp':'Carregar SMTP',
	'uploadCloud':'Carregar Nuvem',
	
	
	//时区表
	'GMT0':'GMT-12 Eniwetok, Kwajalein',
	'GMT1':'GMT-11.5',
	'GMT2':'GMT-11 Midway Island, Samoa',
	'GMT3':'GMT-10.5',
	'GMT4':'GMT-10 夏威夷',
	'GMT5':'GMT-9.5',
	'GMT6':'GMT-09 Alasca',
	'GMT7':'GMT-8.5',
	'GMT8':'GMT-08 Hora do Pacífico (EUA e Canadá), Tijuana',
	'GMT9':'GMT-7.5',
	'GMT10':'GMT-07 Horário das Montanhas (EUA e Canadá), Arizona',
	'GMT11':'GMT-6.5',
	'GMT12':'GMT-06 Hora Central (EUA e Canadá), Cidade do México, Tegucigalpa, Saskatchewan',
	'GMT13':'GMT-5.5',
	'GMT14':'GMT-05 Hora do Leste (EUA e Canadá), Indiana (Leste), Bogotá, Lima',
	'GMT15':'GMT-4.5',
	'GMT16':'GMT-04 Atlantic Time (Canada), Caracas, La Paz',
	'GMT17':'GMT-3.5',
	'GMT18':'GMT-03 Brasília, Buenos Aires, Georgetown',
	'GMT19':'GMT-2.5',
	'GMT20':'GMT-02 mid-Atlantic',
	'GMT21':'GMT-1.5',
	'GMT22':'GMT-01 Açores, Ilhas de Cabo Verde',
	'GMT23':'GMT-0.5',
	'GMT24':'GMT+00 Dublin, Edimburgo, Londres, Lisboa, Monróvia, Casablanca',
	'GMT25':'GMT+0.5',
	'GMT26':'GMT+01 Berlim, Estocolmo, Roma, Berna, Bruxelas, Viena, Paris, Madrid, Amesterdão, Praga, Varsóvia, Budapeste',
	'GMT27':'GMT+1.5',
	'GMT28':'GMT+02 Atenas, Helsínquia, Istambul, Cairo, Europa Oriental, Harare, Pretoria, Israel',
	'GMT29':'GMT+2.5',
	'GMT30':'GMT+03 Bagdá, Kuwait, Nairobi, Riyadh, Moscou, São Petersburgo, Kazan, Volgogrado',
	'GMT31':'GMT+3.5',
	'GMT32':'GMT+04 Abu Dhabi, Muscat, Tbilisi',
	'GMT33':'GMT+4.5',
	'GMT34':'GMT+05 Islamabad, Karachi, Yekaterinburg, Tashkent',
	'GMT35':'GMT+5.5',
	'GMT36':'GMT+06 Almaty, Dhaka',
	'GMT37':'GMT+6.5',
	'GMT38':'GMT+07 Bangkok, Jacarta, Hanoi',
	'GMT39':'GMT+7.5',
	'GMT40':'GMT+08 Taipei, Beijing, Chongqing, Urumqi, Hong Kong, Perth, Singapura',
	'GMT41':'GMT+8.5',
	'GMT42':'GMT+09 Tóquio, Osaka, Sapporo, Seoul, Yakutsk',
	'GMT43':'GMT+9.5',
	'GMT44':'GMT+10 Brisbane, Melbourne, Sydney, Guam, Port Moresby, Vladivostok, Hobart',
	'GMT45':'GMT+10.5',
	'GMT46':'GMT+11 Magadan, Ilhas Salomão, Nova Caledônia',
	'GMT47':'GMT+11.5',
	'GMT48':'GMT+12 Fiji, Kamchatka, Ilhas Marshall, Wellington, Auckland',
		
	//一些通用按钮与提示
	'save':'Salvar',
	'browse':'procurar',
	'saved':'Foi salvo.',
	'savedfail':'Falha ao salvar!',
	'confirmSave':'Confirmar salvar?',
	'confirmDel':'confirme Excluir?',
	'setDefault':'Restore Defaults',
	'confirm':'confirmar',
	'cancel':'cancelar'
	
};













