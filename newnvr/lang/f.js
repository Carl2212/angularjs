//法语
if($.timepicker){
	(function($) {
		$.timepicker.regional['zh-CN'] = {
			timeOnlyTitle: 'Sélectionnez le temps',
			timeText: 'temps',
			hourText: 'heure',
			minuteText: 'minute',
			secondText: 'secondes',
			currentText: 'temps maintenant',
			closeText: 'fermer',
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
			timeOnlyTitle: 'Sélectionnez le temps',
			timeText: 'temps',
			hourText: 'heure',
			minuteText: 'minute',
			secondText: 'secondes',
			currentText: 'temps maintenant',
			closeText: 'fermer',
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
	'labOpensound':'Ouvrez Sound Off',
	'isoLab':'mode ISO',
	'iso0':'normal',
	'iso1':'ISO+',
		
	'setSlideTips2':'Réglez la valeur entre 0-100',
	'sound':'audiofréquence',
	'soundOption':'Configuration Audio',
	'openSound':'Ouvrir le fichier audio',
	'inSound':'entrée audio',
	'inSound0':'entrée Mic',
	'inCount':'Niveau d\'entrée',
		
	'p2pState':'Etat de la connexion',
	'p2pSuccess':'la connexion est réussie',
	'p2pFailure':'La Connexion A Échoué',
		
	'tipsLog':'Exporter le journal',
	'logPaht':'Connectez-Export chemin de sauvegarde',
		
	'sensorLinear0':'fermer',
	'sensorLinear1':'automatique',
	'sensorLinear2':'faible',
	'sensorLinear3':'modéré',
	'sensorLinear4':'fort',
	'sensorLinear5':'super',
		
	'emptyTips':'Articles ne peuvent être réglées null',
	'osdTextTips':'',
	'portTips':'Port ne peut être réglée entre 0-65535',
	'vedioFileBag':'Taille de l\'emballage de la vidéo',
	'inTips':'à',
	'formatErr':'malformé',
	'optionsLoading':'Configuration, s\'il vous plaît patienter',
		
	//登录页面
	'login':'Connexion',
	'userName':'Nom d\'utilisateur',
	'pwd':'Mot de passe',
	'setLang':'Paramètres de langue',
	'remenberPwd':'Remember me',
	'loginBtn':'Connexion',
	'alertLoginErr':'échec de la connexion, s\'il vous pla?t confirmer le nom ou mot de passe ',
	
	//框架页面
	'realTime':'Aperçu en direct',
	'logSearch':'Requête des journaux',
	'options':'Configuration',
	'exit':'Déconnexion',
	'exitTips':'Se déconnecter ?',
	
	//实时预览
	'setPic':'Captures d\'écran',
	'fd':'agrandir',
	'play':'diffusion',
	'stop':'Arrêtez',
	'starRecord':'Début de l\'enregistrement',
	'endRecord':'enregistrement de fin',
	'mainStream':'Codage principal ',
	'childStream':'Sous-codage flux',
	
	//日志查询页面
	'logNum':'Nombre',
	'logTime':'Temps',
	'logDetail':'Information en détail',
	'beginTime':'Heure de début',
	'endTime':'Heure de fin',
	'search':'Chercher',
	'setEmpty':'Vide',
	'setTimeTips1':'Veuillez choisir de début et de fin de recherche',
	'setTimeTips2':'L\'heure de fin doit être plus grande que l\'heure de début',
	
	//配置   菜单
	'localOptions':'Configuration locale',
	'baseOptions':'Configuration basique',
	'system':'Système',
	'systemOptions':'Configuration Système',
	'localNet':'Réseau local',
	'vedio':'Vidéo',
	'image':'Image',
	'safety':'Sécurité',
	'advanced':'Configuration avancée',
	'event':'Evénements',
	
	
	
	//本地配置-本地配置
	'playParam':'Paramètres d\'affichage en direct',
	'protocolType':'Protocole',
	'playProperty':'Performance d\'affichage en direct',
	'propertyFirst':'Temporisation mini',
	'realFirst':'Temps réel',
	'blance':'Equilibré',
	'speedFirst':'Fluidité optimale',
	'imageType':'Format d\'image',
	'vedioFiles':'Configuration du fichier d\'enregistrement',
	'bagSizes':'Taille du fichier d\'enregistrement',
	'vedioPath':'Enregistrer les fichiers dans',
	'playbackPath':'Enreg. fich téléchargés dans',
	'imgAndClip':'Paramètres images et clips',
	'previewImgPath':'Enreg. instantanés d\'affichage',
	'playbackImgPath':'Eh lecture, enreg instantanés dans',
	'playbackClipPath':'Enregistrer les clips dans',
	
	
	//基本配置－系统
	'deviceInfo':'Informations sur le périphérique',
	'timeOption':'Réglage de l\'heure',
	'systemSet':'Maintenance',
	
	'baseInfo':'Informations de base',
	'deviceName':'Nom appareil',
	'hardwareVer':'Version micrologiciel',
	'softwareVer':'Version d\'encodage',
	'channel':'Nombre de canaux',
	
	'timeZone':'Fuseau horaire',
	'checkTime':'Synchronisation',
	'deviceTime':'Temps d\'équipement',
	'NTPCheckTime':'NTP',
	'SNTPServer':'Serveur de SNTP',
	'handCheck':'Réglage manuel',
	'setTime':'Régler l\'heure',
	'sameOfPC':'Synchronisés avec le temps de l’ordinateur',
	'PCTime':'Temps informatique',
	'checNvr':'NVR interdire la modification IPC Temps',
	
	'deviceRestart':'Redémarrer',
	'restartDevice':'Redémarrer',
	'setDefaultTips':'Restaurer les paramètres d\'usine',
	'setDefaultTips1':'Rétablir pleinement les paramètres de l\‘appareil aux réglages d\'usine',
	'upgrade':'Mise àjour',
	'upgradeFile':'Micrologiciel',
	'upgradeProgress':'Statut',
	'explain':'Remarque',
	'explainTips':'La mise à niveau prend de 1 à 10 minutes. N\'éteignez pas l\'appareil. L\'appareil redémarrera automatiquement à la fin.',
	
	'confirmRestart':'Assurez-vous de redémarrer les appareils?',
	'confirmSetDefault':'Assurez vous de rétablir les réglages d\'usine?',
	'upgradeTips':'Lors de la mise à niveau du matériel dans un article, sans explication, invite à ne rien faire. L’escalade si?',
	'upgradeError1':'Nom de fichier de mise à niveau ne peut pas être vide',
	'upgradeError2':'À un échec!',
	'upgradeError3':'L’échec, à:',
	'confirmCheckTime':'Correction confirmé?',
	'setDate':'La date de la création',
	'setSNTPTips':'Veuillez choisir serveurs SNTP',
	
	
	
	//基本配置本地-网络
	'port':'Port',
	'networkSet':'Paramètres carte réseau',
	'enableDHCP':'Permettre DHCP',
	'IPAddr':'IP Addresse',
	'subnetMask':'Masque sous-réseau',
	'gateway':'Porte d\'entrée par défaut',
	'DNSServerOpt':'Serveur DNS',
	'defaultDNS':'Serveur DNS privilégié',
	'HTTPport':'Port de HTTP',
	'portError':'Les valeurs valides du port sont de HTTP 80 ou 1025-65534',
	
	
	//基本配置本地-视频
	'veido':'Vidéo',
	'streamType':'Code flux type',
	'oneCodeStream':'Flux unique',
	'twoCodeStream':'Double flux',
	'codeType':'Procédé de codage',
	'codeStream':'Code flux',
	'frame':'Rate de frame',
	'bit':'Rate de bit',
	'bitrateType':'Taux (fixe) variable',
	'bitrateType0':'Débit variable',
	'bitrateType1':'Débit fix',
	'iFrame':'Trame I intervalle',
	'noSetCn':'Interdisent l’importation chinoise',
	'deviceNameTips':'Nom du matériel pour un minimum de caractères, jusqu’à un maximum de 1 et 31 caractères uniquement par des chiffres, lettres et soulignés',
	'bitTips':'Taux de code 1 allant de 64 à 12000',
	
	
	//基本配置本地-显示设置
	'displayOptions':'Afficher réglage',
	'imgSet':'Ajuste de imagen',
	'brightness':'Luminosité',
	'contrast':'Contraste',
	'saturtion':'Saturation',
	'sharpness':'Finesse',
	
	'ircutFilterTime':'Temps de conversion d\'IRCUT',
	'ircutMode':'Mode IRCUT',
	'ircutMode0':'LDR automatique',
	'ircutMode1':'Vidéo automatique',
	'ircutMode2':'Mode de couleur',
	'ircutMode3':'Mode monochrome',
	
	'ae':'Réglages de l\'exposition',
	'aeMode':'Réglages de l\'exposition',
	'auto':'Automatiquement',
	'hand':'Manuellement',
	'shutter':'Obturateur électronique',
	
	'backlight':'Paramètres de rétroéclairage',
	'backlightIn':'Compensation contre-jour',
	'close':'échec teint',
	'open':'Allumé',
	'backlightNum':'Quantité de rétroéclairage',
	'small':'Minimum',
	'middle':'Modérée',
	'big':'Maximum',
	'gainControl':'Ajustement de gain',
	
	'whiteBalance':'Balance blanche',
	'redGain':'Gain rouge',
	'greenGain':'Gain vert',
	'blueGain':'Gain bleu',
	
	'vedioSet':'Rapprochement vidéo',
	'dnrModel':'Mode de réduction de bruit numérique',
	'dnrModel0':'Ferme',
	'dnrModel1':'2D DNR',
	'dnrModel2':'3D DNR',
	'dnrModel3':'QuanKai',
	
	'imgAdd':'Amélioration de l\'image',
	'flickerControl':'Contrôle clignotant',
	'flickerControl0':'NTSC intérieure',
	'flickerControl1':'PAL intérieure',
	'flickerControl2':'Extérieur',
	'sensorLinear':'Vaste dynamisme',
	
	'defog':'Modèle désembuage',
	'defogModel':'Modèle désembuage',
	'defogNum':'Désembuer la force',
	'setSlideTips':'Sur de 0 à 255',
	
	
	
	//基本配置本地-安全
	'userControl':'Utilisateur',
	'user':'Nom d\'utilisateur',
	'right':'Compétence',
	'eidt':'éditer',
	'del':'Supprimer',
	'adduser':'Ajouter utilisateur',
	'admin':'Administrateur',
	'handler':'Utilisateurs ordinaires',
	'userEdit':'éditer',
	'userType':'Changer d\'utilisateur',
	'confirmPwd':'Confirmez le mot de passe',
	'pwdTips0':'Mot de passe comprend 1 caractères au minimum, 31 caractères au maximum.',
	'pwdTips1':'Mots de passe mésappariés',
	'usertips0':'Limite supérieur d\'utilisateurs atteint !',
	'usertips1':'Nom de l’utilisateur comprend 1 caractères au minimum, 31 caractères au maximum.',
	'usertips2':'À ajouter de nouveaux clients',
	'usertips3':'L\'utilisateur existe déjà',
	'error':'erreur',
	
	
	
	
	//高级配置-系统
	'setTimeRestart':'Redémarrage planifié',
	'notSet':'Ne jamais',
	'weekDay0':'Lundi',
	'weekDay1':'Mardi',
	'weekDay2':'Mercredi',
	'weekDay3':'Vendredi',
	'weekDay4':'Jeudi',
	'weekDay5':'Samedi',
	'weekDay6':'Dimanche',
	'weekDay7':'Quotidienne',
	'weekDay8':'hebdomadaire',
	'weekDay9':'par mois',
		'weekDay10':'Japon',
	'weekDay11':'temps',
	'weekDay12':'deuxième',

	
	//高级配置-本地网络
	'other':'autres',
	'ddnsType':'Type de DDNS',
	'peanutShells':'Oray',
	'domain':'Nom de domaine',
	'ddnsUser':'Compte DDNS',
	'ddnsPwd':'Mot de passe DDNS',
	'ddnsState':'Statut',
	'landSuccess':'Connexion réussie',
	'serverType':'Type de service',
	'serverTypeName':'Utilisateurs ordinaires',
	'serverLink':'Lien des fournisseurs de services',
	
	'ftpServer':'Serveur de FTP',
	'savePath':'Chemin de stockage',
	
	'sendUser':'Expéditeur',
	'sendAddr':'Adresse de l\'expéditeur',
	'smtpServer':'Serveur de SMTP',
	'checkInfo':'Valider l’information',
	'reviewUser':'Destinataire',
	'reviewAddr':'Adresse du destinataire',
	'vedioCheckPwd':'L\'authentification par mot de passe de la vidéo',
	'loginFailed':'En cas de',
	'loginSuccess':'Identification réussie',
	'logining':'se connecter',
	
	'cloudstoragetype':'Type de stockage Cloud',
	'web':'Couverture du site',
	'authcode':'Code de la sécurité',
	'totalcapacity':'La capacité totale',
	'usedcapacity':'Utilisé',
	'bound':'Bound',
	'unbound':'Non consolidé',
	'binding':'Reliure',
	'unbind':'Le dégroupage',
	
	//高级配置-图像
	'osdOpt':'Réglage d\'OSD',
	'showTime':'Afficher l\'heure',
	'showText':'Texte d\'OSD',
	'dateFormat':'Format de date',
	'date0':'Jour/Mois/Année',
	'date1':'Mois/Jour/Année',
	'date2':'Année/Mois/Jour',
	'osdPosition':'Position d\'OSD',
	'pos0':'En haut àgauche',
	'pos1':'En bas àgauche',
	'osdText':'Texte d\'OSD',
	'mirror':'Rétroviseur',
	'mirror1':'Vertical',
	'mirror2':'Verticale',
	'mirror3':'Horizontale et verticale',
	'aisleMode':'Modèle du couloir',
	'setOn':'l’ouverture',
	'RotateAngle90':'90 degrés',
	'RotateAngle270':'270 degrés',
	'osdTips':'OSD à vide du texte',
	
	
	//高级配置-事件
	'motionDetecting':'Détection mobile',
	'privacyMasking':'Vie privée',
	'alarmSet':'Réglage d\'alarme',
	
	'optMode':'Réglages de zone',
	'sensitivity':'Sensibilit',
	'selAll':'Sélectionner tout',
	'clearAll':'Effacer tout',
	
	'maskTips':'Prompt: dessinez trois régions privée au maximum',
	'area1':'Région 1',
	'area2':'Région 2',
	'area3':'Région 3',
	'NoRoiArea':'Taux région trame non-ROI',
	'QpRelative':'Valeur relative QP',
	'QpAbsolute':'QP valeur absolue',
	
	'openAlarm':'Démarrer l\'alarme',
	'tillTime':'Durée de l\'alarme',
	'tillTime0':'10 secondes',
	'tillTime1':'30 secondes',
	'tillTime2':'1 minute',
	'tillTime3':'5 minutes',
	'tillTime4':'10 minutes',
	'tillTime5':'toujours efficace',
	
	'triggerAlarm':'Alarme déclenchée',
	'alarmAction':'Lien d\'alarme',
	'uploadFtp':'Téléchargement de FTP',
	'fileType':'Format du fichier',
	'uploadSmtp':'Télécharger SMTP',
	'uploadCloud':'Télécharger Couverture',
	
	
	//时区表
	'GMT0':'GMT-12 Eniwetok , Kwajalein',
	'GMT1':'GMT-11.5',
	'GMT2':'GMT-11 l\'île de Midway,Samoa',
	'GMT3':'GMT-10.5',
	'GMT4':'GMT-10 Hawaii',
	'GMT5':'GMT-9.5',
	'GMT6':'GMT-09 Alaska  Temps',
	'GMT7':'GMT-8.5',
	'GMT8':'GMT-08 du Pacifique ( États-Unis et Canada ),Tijuana ,heure des Rocheuses',
	'GMT9':'GMT-7.5',
	'GMT10':'GMT-07 ( États-Unis et Canada ) , Arizona ',
	'GMT11':'GMT-6.5',
	'GMT12':'GMT-06 , heure du Centre ( US & Canada ) , Mexico City , Tegucigalpa , en Saskatchewan',
	'GMT13':'GMT-5.5',
	'GMT14':'GMT-05 heure de l\'Est (É.-U. et Canada ) , Indiana (Est) , Bogota , Lima , heure de l\'Atlantique',
	'GMT15':'GMT-4.5',
	'GMT16':'GMT-04 ( Canada ) , Caracas , La Paz',
	'GMT17':'GMT-3.5',
	'GMT18':'GMT-03 Brasilia , Buenos Aires , Georgetown',
	'GMT19':'GMT-2.5',
	'GMT20':'GMT-02 Mid-Atlantic',
	'GMT21':'GMT-1.5',
	'GMT22':'GMT-01 Açores , Cap Vert Est',
	'GMT23':'GMT-0.5',
	'GMT24':'GMT+00 Dublin , Edimbourg, Londres , Lisbonne , Monrovia , Casablanca',
	'GMT25':'GMT+0.5',
	'GMT26':'GMT+01 Berlin , Stockholm , Rome , Berne , Bruxelles , Vienne , Paris , Madrid , Amsterdam , Prague , Varsovie , Budapest',
	'GMT27':'GMT+1.5',
	'GMT28':'GMT+02 Athènes , Helsinki , Istanbul , Le Caire , Europe de l\'Est , Harare , Pretoria , Israël',
	'GMT29':'GMT+2.5',
	'GMT30':'GMT+03 Bagdad , Koweït , Nairobi , Riyad , Moscou , Saint-Pétersbourg , Kazan , Volgograd ',
	'GMT31':'GMT+3.5',
	'GMT32':'GMT+04 Abu Dhabi , Muscat , Tbilissi ',
	'GMT33':'GMT+4.5',
	'GMT34':'GMT+05 Islamabad, Karachi , Ekaterinburg , Tachkent',
	'GMT35':'GMT+5.5',
	'GMT36':'GMT+6 Alma Ata , Dhaka ',
	'GMT37':'GMT+6.5',
	'GMT38':'GMT+07 Bangkok , Jakarta , Hanoi ',
	'GMT39':'GMT+7.5',
	'GMT40':'GMT+08 Taipei , Beijing, Chongqing , Urumqi , Hong Kong , Perth , Singapour',
	'GMT41':'GMT+8.5',
	'GMT42':'GMT+9 Tokyo , Osaka , Sapporo , Séoul , Yakutsk',
	'GMT43':'GMT+9.5',
	'GMT44':'GMT+10 Brisbane , Melbourne , Sydney , Guam , Port Moresby , Vladivostok , Hobart',
	'GMT45':'GMT+10.5',
	'GMT46':'GMT+11 Magadan , Iles Salomon , Nouvelle-Calédonie',
	'GMT47':'GMT+11.5',
	'GMT48':'GMT+12 Fidji , Kamchatka , Marshall est , Wellington , Auckland.',
		
	//一些通用按钮与提示
	'save':'Enregistrer',
	'browse':'Parcourir',
	'saved':'Succès de préservation!',
	'savedfail':'Impossible denregistrer!',
	'confirmSave':'Conservation confirmé?',
	'confirmDel':'Confirmation?',
	'setDefault':'Par défaut',
	'confirm':'Ok',
	'cancel':'Annuler'
	
};













