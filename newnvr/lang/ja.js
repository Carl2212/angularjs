//日语
if($.timepicker){
	(function($) {
		$.timepicker.regional['zh-CN'] = {
			timeOnlyTitle: '時間を選択',
			timeText: '時間',
			hourText: '時間',
			minuteText: '分',
			secondText: '秒',
			currentText: '今の時間',
			closeText: 'シャットダウン',
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
				timeOnlyTitle: '時間を選択',
				timeText: '時間',
				hourText: '時間',
				minuteText: '分',
				secondText: '秒',
				currentText: '今の時間',
				closeText: 'シャットダウン',
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
	'labOpensound':'オープン·サウンド·オフ',
	'isoLab':'ISOモード',
	'iso0':'ノーマル',
	'iso1':'ISO+',
		
	'setSlideTips2':'0〜100の間の値を設定します',
	'sound':'可聴周波数',
	'soundOption':'オーディオ設定',
	'openSound':'オープンオーディオ',
	'inSound':'オーディオ入力',
	'inSound0':'マイク入力',
	'inCount':'入力レベル',
		
	'p2pState':'接続状況',
	'p2pSuccess':'接続が成功します',
	'p2pFailure':'接続に失敗しました',
		
	'tipsLog':'ログのエクスポート',
	'logPaht':'ログのエクスポートは、パスを保存',
		
	'sensorLinear0':'シャットダウン',
	'sensorLinear1':'自動',
	'sensorLinear2':'弱いです',
	'sensorLinear3':'穏やかな',
	'sensorLinear4':'強いです',
	'sensorLinear5':'スーパー',
		
	'emptyTips':'アイテムはnullに設定することはできません',
	'osdTextTips':'',
	'portTips':'ポートは0〜65535の間で設定することができます',
	'vedioFileBag':'ビデオパッケージサイズ',
	'inTips':'で',
	'formatErr':'不正な形式の',
	'optionsLoading':'構成は、しばらくお待ちください',
		
	//登录页面
	'login':'ログイン',
	'userName':'ユーザー',
	'pwd':'パスワード',
	'setLang':'言語の選択',
	'remenberPwd':'リメンバー・ミー',
	'loginBtn':'ログイン',
	'alertLoginErr':'ログイン失敗,ごユーザー名またパスワードを確認してください',
	
	//框架页面
	'realTime':'ライブビデオ',
	'logSearch':'日記詮索',
	'options':'配置',
	'exit':'ログアウト',
	'exitTips':'エキジッと?',
	
	//实时预览
	'setPic':'スクリーンショット',
	'fd':'拡大します',
	'play':'ブロードキャスト',
	'stop':'停止',
	'starRecord':'録音を開始',
	'endRecord':'終了記録',
	'mainStream':'ストリーム１',
	'childStream':'ストリーム2',
	
	//日志查询页面
	'logNum':'ID',
	'logTime':'時間',
	'logDetail':'詳細情報',
	'beginTime':'開始時間',
	'endTime':'終了時間',
	'search':'捜索',
	'setEmpty':'クリア',
	'setTimeTips1':'選択してくださいクエリ開始時刻と終了時刻！',
	'setTimeTips2':'終了時刻は、開始時刻よりも大きくなければなりません！',
	
	//配置   菜单
	'localOptions':'ローカル：パラメータ設定',
	'baseOptions':'ベーシック‘セットアップ',
	'system':'システム',
	'systemOptions':'システム',
	'localNet':'ネットワーク',
	'vedio':'ビデオ',
	'image':'画像',
	'safety':'セキュリティー"',
	'advanced':'アドバンス‘ セットアップ',
	'event':'イベント',
	
	
	
	//本地配置-本地配置
	'playParam':'ライブ画像のパラメーター',
	'protocolType':'プロトコル',
	'playProperty':'ライブ画像のパフォーマンス',
	'propertyFirst':'最短ディレイ',
	'realFirst':'リアルタイム',
	'blance':'バランス',
	'speedFirst':'最もなめらかな',
	'imageType':'画像フォーマット',
	'vedioFiles':'記録ファイルの設定',
	'bagSizes':'記録ファイルサイズ',
	'vedioPath':'保存先',
	'playbackPath':'ダウンロードファイルの保存',
	'imgAndClip':'画像とクリップの設定',
	'previewImgPath':'スナップショットを保存',
	'playbackImgPath':'スナップショットを保存',
	'playbackClipPath':'クリップの保存',
	
	
	//基本配置－系统
	'deviceInfo':'デバイス情報',
	'timeOption':'タイム・セット',
	'systemSet':'システムメンテナンス',
	
	'baseInfo':'デバイス情報',
	'deviceName':'機器名',
	'hardwareVer':'ファームウェアバージョン',
	'softwareVer':'エンコードバージョン',
	'channel':'チャンネルの数量',
	
	'timeZone':'時間帯',
	'checkTime':'時間設定',
	'deviceTime':'設備時間',
	'NTPCheckTime':'NTPポート',
	'SNTPServer':'SNTP サーバー',
	'handCheck':'手動設置',
	'setTime':'時間セット',
	'sameOfPC':'コンピュータ・タイムと同時',
	'PCTime':'计算机时间',
	'checNvr':'NVR変更IPC時間を禁止',
	
	'deviceRestart':'システム再起動',
	'restartDevice':'リブート',
	'setDefaultTips':'工場出荷状態に戻す',
	'setDefaultTips1':'完全に工場出荷時の設定にデバイスパラメータを復元',
	'upgrade':'アップグレード',
	'upgradeFile':'ファームウェア',
	'upgradeProgress':'状態:',
	'explain':'注釈:',
	'explainTips':'アップグレード作業は終了するのに1〜10分かかります。電源を切らないでください。装置は、作業後自動的にリブートします。',
	
	'confirmRestart':'リブートを確認し?',
	'confirmSetDefault':'工場出荷時の設定に戻すの確認?',
	'upgradeTips':'機器がアップグレードする場合プログレスバーは、アップグレードが完了するよう求めていない、何もしないことを提案します。あなたは確信してアップグレードされている？',
	'upgradeError1':'私は中断をアップグレードし、アップグレードパッケージを選択しなかった。',
	'upgradeError2':'アップグレードが失敗した!',
	'upgradeError3':'アップグレードがエラーで失敗する',
	'confirmCheckTime':'補正時間を確認してください?',
	'setDate':'日付を設定してください。',
	'setSNTPTips':'SNTPサーバを選択してください',
	
	
	
	//基本配置本地-网络
	'port':'ポート',
	'networkSet':'ネットワークカードの設定',
	'enableDHCP':'イネーブルDhcp',
	'IPAddr':'IP アドレス',
	'subnetMask':'ネットマスク',
	'gateway':'デフォルト・ゲートウェー',
	'DNSServerOpt':'DNSサーバー',
	'defaultDNS':'優先DNSサーバー',
	'HTTPport':'HTTP ポート',
	'portError':'HTTPポート有効範囲は80または1025から65534まで',
	
	
	//基本配置本地-视频
	'veido':'ビデオ',
	'streamType':'ストリーム・タイプ',
	'oneCodeStream':'単一・ストリム',
	'twoCodeStream':'デュアル・ストリム',
	'codeType':'コーデック',
	'codeStream':'ストリム',
	'frame':'フレームレート',
	'bit':'ビットレート',
	'bitrateType':'レート・コントロール',
	'bitrateType0':'CBR',
	'bitrateType1':'VBR',
	'iFrame':'私は間隔をフレーム',
	'noSetCn':'輸入中国を禁止!',
	'deviceNameTips':'最大31文字のデバイス、及び数字、文字とアンダースコアのみ!',
	'bitTips':'64-12000の範囲内のビットレート!',
	
	
	//基本配置本地-显示设置
	'displayOptions':'表示設定',
	'imgSet':'画像調整',
	'brightness':'輝度',
	'contrast':'コントラスト',
	'saturtion':'飽和',
	'sharpness':'シャプーネス',
	
	'ircutFilterTime':'Ircut 時間変更',
	'ircutMode':'Ircut モード',
	'ircutMode0':'オートLDR',
	'ircutMode1':'オート・ビデオ',
	'ircutMode2':'カラー',
	'ircutMode3':'B/W',
	
	'ae':'露出設定',
	'aeMode':'露光モード',
	'auto':'オート',
	'hand':'手動',
	'shutter':'シャッター"',
	
	'backlight':'バックライトの設定',
	'backlightIn':'ベックライトコンペンセーション',
	'close':'OFF',
	'open':'ON',
	'backlightNum':'バックライト',
	'small':'Min',
	'middle':'Mid',
	'big':'Max',
	'gainControl':'コントロール・ゲイン',
	
	'whiteBalance':'ホワイト・バランス',
	'redGain':'レッドゲイン',
	'greenGain':'クリーンゲイン',
	'blueGain':'ブルーゲイン',
	
	'vedioSet':'ビデオ調整',
	'dnrModel':'デジタルノイズリダクションモード',
	'dnrModel0':'off',
	'dnrModel1':'2D DNR',
	'dnrModel2':'3D DNR',
	'dnrModel3':'BOTH',
	
	'imgAdd':'イメージアップ',
	'flickerControl':'フリッカ・コントロール',
	'flickerControl0':'インドア NTSC',
	'flickerControl1':'インドア PAL',
	'flickerControl2':'アウトドア',
	'sensorLinear':'WDR',
	
	'defog':'防曇',
	'defogModel':'防曇モード',
	'defogNum':'防曇強',
	'setSlideTips':'0から255の間の値を設定します。',
	
	
	
	//基本配置本地-安全
	'userControl':'ユーザー"',
	'user':'ユーザー・ネーム',
	'right':'権限',
	'eidt':'編集',
	'del':'デリート',
	'adduser':'ユーザーの追加',
	'admin':'Admin',
	'handler':'ゲスト',
	'userEdit':'ユーザーの修正',
	'userType':'ユーザータイプ',
	'confirmPwd':'パスワードを認証します',
	'pwdTips0':'パスワード1文字以上、31文字以内の、そして唯一の数字、文字、アンダースコア!',
	'pwdTips1':'パスワード倍矛盾!',
	'usertips0':'制限に達したユーザーは、我々は追加することはできません!',
	'usertips1':'1文字以上、31文字以内の、そして唯一の数字、文字、アンダースコアをユーザ名!',
	'usertips2':'完全な新規ユーザが追加される。',
	'usertips3':'ユーザーがすでに存在しています!',
	'error':'間違いました',
	
	
	
	
	//高级配置-系统
	'setTimeRestart':'スケジュールされたリブート',
	'notSet':'決して',
	'weekDay0':'月曜日',
	'weekDay1':'火曜日',
	'weekDay2':'水曜日',
	'weekDay3':'金曜日',
	'weekDay4':'木曜日',
	'weekDay5':'土曜日',
	'weekDay6':'日曜日',
	'weekDay7':'毎日',
	'weekDay8':'ウィークリー',
	'weekDay9':'1カ月当たり',
		'weekDay10':'日',
	'weekDay11':'タイム',
	'weekDay12':'番目',

	
	
	//高级配置-本地网络
	'other':'その他',
	'ddnsType':'DDNS タイプ',
	'peanutShells':'Oray',
	'domain':'サイト名',
	'ddnsUser':'DDNS アカウント',
	'ddnsPwd':'DDNS パスワード',
	'ddnsState':'状態',
	'landSuccess':'ログイン成功',
	'serverType':'サービス・タイプ',
	'serverTypeName':'オーディナリー・ユーザー',
	'serverLink':'サービスプロバイダへのリンクス',
	
	'ftpServer':'FTP サーバー',
	'savePath':'ロード・ルート',
	
	'sendUser':'送信者',
	'sendAddr':'発送アドレス',
	'smtpServer':'SMTP サーバー',
	'checkInfo':'サーバー認証必要',
	'reviewUser':'受信者',
	'reviewAddr':'イメール',
	'vedioCheckPwd':'ビデオパスワード認証が有効になっています',
	'loginFailed':'ログインに失敗しました',
	'loginSuccess':'ログインに成功',
	'logining':'ログイン',
	
	'cloudstoragetype':'クラウドストレージタイプ',
	'web':'クラウドサイト',
	'authcode':'セキュリティコード',
	'totalcapacity':'総容量',
	'usedcapacity':'使用',
	'bound':'バウンド',
	'unbound':'結合していない',
	'binding':'結合',
	'unbind':'アンバンドリング',
	
	
	//高级配置-图像
	'osdOpt':'OSDセット',
	'showTime':'時間',
	'showText':'OSD テキスト',
	'dateFormat':'日付形式',
	'date0':'DD/MM/YYYY',
	'date1':'MM/DD/YYYY',
	'date2':'YYYY/MM/DD',
	'osdPosition':'OSD 位置',
	'pos0':'左上',
	'pos1':'左下',
	'osdText':'OSD テキスト',
	'mirror':'鏡像',
	'mirror1':'垂直',
	'mirror2':'水平',
	'mirror3':'水平と垂直',
	'aisleMode':'走廊模式',
	'setOn':'开启',
	'RotateAngle90':'90度',
	'RotateAngle270':'270度',
	'osdTips':'"OSD文本"不能设置为空!!',
	
	
	
	//高级配置-事件
	'motionDetecting':'動作検出',
	'privacyMasking':'プライバシー',
	'alarmSet':'アラーム',
	
	'optMode':'エリア設定',
	'sensitivity':'感度',
	'selAll':'全部選択',
	'clearAll':'全部クリア',
	
	'maskTips':'提示:プライバシー区域は三つだけです。',
	'area1':'リージョン1',
	'area2':'リージョン2',
	'area3':'リージョン3',
	'NoRoiArea':'非ROI領域のフレームレート',
	'QpRelative':'相対QP値',
	'QpAbsolute':'QP絶対値',
	
	'openAlarm':'アラム・イネーブル',
	'tillTime':'アラム期間',
	'tillTime0':'10秒',
	'tillTime1':'30秒',
	'tillTime2':'1分钟',
	'tillTime3':'5分钟',
	'tillTime4':'10分钟',
	'tillTime5':'ストップなし',
	
	'triggerAlarm':'アラム・トリガー',
	'alarmAction':'アラム　ON',
	'uploadFtp':'FTPをアップロード',
	'fileType':'ファイルフォーマット',
	'uploadSmtp':'アップロード SMTP',
	'uploadCloud':'アップロードクラウド',
	
	
	//时区表
	'GMT0':'GMT-12 エニウェトク, クェゼリン環礁',
	'GMT1':'GMT-11.5',
	'GMT2':'GMT-11 ミッドウェー島, サモア',
	'GMT3':'GMT-10.5',
	'GMT4':'GMT-10 ハワイ',
	'GMT5':'GMT-9.5',
	'GMT6':'GMT-09 アラスカ',
	'GMT7':'GMT-8.5',
	'GMT8':'GMT-08 パシフィック太平洋時間 (アメリカ&カナダ), ティフアナ',
	'GMT9':'GMT-7.5',
	'GMT10':'GMT-07 山岳部時間(アメリカ&カナダ), アリゾナ州',
	'GMT11':'GMT-6.5',
	'GMT12':'GMT-06 中部時間 (アメリカ&カナダ), メキシコシティー, テグシガルパ, サスカチュワン',
	'GMT13':'GMT-5.5',
	'GMT14':'GMT-05 東部時間 (アメリカ&カナダ), インディアナ州(東部), ボゴタ, リマ',
	'GMT15':'GMT-4.5',
	'GMT16':'GMT-04 大西洋時間(カナダ), カラカス,ラバス',
	'GMT17':'GMT-3.5',
	'GMT18':'GMT-03 ブラジリア, ブエノスアイレス, ジョージタウン',
	'GMT19':'GMT-2.5',
	'GMT20':'GMT-02 中大西洋',
	'GMT21':'GMT-1.5',
	'GMT22':'GMT-01 アゾレス諸島, カボベルデ群島.',
	'GMT23':'GMT-0.5',
	'GMT24':'GMT+00 ダブリン, エジンバラ, ロンドン, リスボン, モンロビア, カサブランカ',
	'GMT25':'GMT+0.5',
	'GMT26':'GMT+01 ベルリン, ストックホルム, ローマ, ベルン, ブリュッセル, ウィーン, パリ, マドリード, アムステルダム, プラハ, ワルシャワ, ブダペスト',
	'GMT27':'GMT+1.5',
	'GMT28':'GMT+02 アテネ, ヘルシンキ, イスタンブール, カイロ, 東欧, ハラレ, プレトリア, イスラエル',
	'GMT29':'GMT+2.5',
	'GMT30':'GMT+03 バグダッド, クウェート, ナイロビ, リヤド, モスクワ, サンクトペテルブルグ, カザン, ボルゴグラード',
	'GMT31':'GMT+3.5',
	'GMT32':'GMT+04 アブダビ, マスカット, トビリシ',
	'GMT33':'GMT+4.5',
	'GMT34':'GMT+05 イスラマバード, カラチ, エカチェリンブルグ, タシケント',
	'GMT35':'GMT+5.5',
	'GMT36':'GMT+06 アルマアタ, ダッカ',
	'GMT37':'GMT+6.5',
	'GMT38':'GMT+07 バンコック, ジャカルタ, ハノイ',
	'GMT39':'GMT+7.5',
	'GMT40':'GMT+08 台北, 北京, 重慶, ウルムチ, ホンコン, パース, シンガポール',
	'GMT41':'GMT+8.5',
	'GMT42':'GMT+09 東京, 大阪, 札幌, ソウル, ヤクーツク',
	'GMT43':'GMT+9.5',
	'GMT44':'GMT+10 ブリスベン, メルボルン, シドニー, グアム島, ポートモレスビー, ウラジオストック, ホバート',
	'GMT45':'GMT+10.5',
	'GMT46':'GMT+11 マガダン, ソロモン群島., ニューカレドニア',
	'GMT47':'GMT+11.5',
	'GMT48':'GMT+12 ィジー, カムチャツカ半島, マーシャル島., ウェリントン, オークランド',
		
	//一些通用按钮与提示
	'save':'保存',
	'browse':'スキャン',
	'saved':'それは保存されました。',
	'savedfail':'保存に失敗しました!',
	'confirmSave':'保存確認?',
	'confirmDel':'削除の確認?',
	'setDefault':'既定値に戻す',
	'confirm':'はい',
	'cancel':'いいえ'
	
};













