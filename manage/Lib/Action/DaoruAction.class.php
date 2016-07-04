<?php
// 本文档自动生成，仅供测试运行
class DaoruAction extends Action
{
	private $groupid="436D3F290AFDF8DF9BE1D77C8B4C9E4C";
	private $imgid="8BBE400668745E274195D75FB6E8EFA5";
	private $panomodelid="3045908BF2084B00DC21A44332DDD904";
	private $panoid="24266473DC903096E5E82DBC7068CEE6";
	private $huaceid="96B67DCBBE31D5B3E960B3453063927D";
	private $honorid="C2E43A94ADC8A90955A3D2C0C5C71B59";
	private $videoid="A40A9CC7AFD48C3D9197CA1C221B845A";

	
    public function isfile($path,$hz)
    {
    	$oneimg = '';
    	if (!is_file($this->groupid)) {
    		mkdir($this->groupid);
    	}
    	if (file_exists($path)) {
    		$oneimg = $this->groupid.'/'.$this->guid().'.'.$hz;
    		copy($path,$oneimg);

    	}
    	
    	return $oneimg;
    }

    public function huace()
    {
		$i=0;
		$dir='画册/';
		if($open=opendir($dir)){
			while($read=readdir($open)){
				if(!is_dir($dir.$read)){
					$dirtitle = explode('.',$read);
					$oneimg = $this->groupid.'/'.$this->guid().'.'.$dirtitle[1];
					echo $dir.$read.'<br>';
					copy($dir.$read,$oneimg);
					$dirid = $this->guid();
					M('dir')->add(array(
						'title'=>$dirtitle[0],
						'guid'=>$dirid,
						'isadd'=>'1',
						'oneimg'=>$oneimg,
						'mid'=>$this->imgid,
						'pid'=>$this->huaceid,
						'groupid'=>$this->groupid,
						'show_model'=>'ablum.html',
						'add_model'=>'ablum_add.html',
						'edit_model'=>'ablum_edit.html',
						'uid'=>'1',
						'time'=>time()
					));

					if($openc=opendir($dir.$dirtitle[0].'/')){
						while($readc=readdir($openc)){
							if(is_dir($dir.$dirtitle[0].'/'.$readc) && $readc !='.' && $readc !='..'){
								
								$oneimg = $this->groupid.'/'.$this->guid().'.jpg';
								copy($dir.$dirtitle[0].'/'.$readc.'/DefaultImage.jpg',$oneimg);

								$twoimg = $this->groupid.'/'.$this->guid().'.jpg';
								copy($dir.$dirtitle[0].'/'.$readc.'/ListImage.jpg',$twoimg);
	
								M('content')->add(array(
									'title'=>$readc,
									'sort'=>$readc,
									'guid'=>$this->guid(),
									'oneimg'=>$oneimg,
									'twoimg'=>$twoimg,
									'pid'=>$dirid,
									'groupid'=>$this->groupid,
									'uid'=>'1',
									'time'=>time()
								));
							}
						}
					}
				}
			}
		}
    }

    public function pro()
    {
		$i=0;
		$dir='产品/';
		if($open=opendir($dir)){
			while($read=readdir($open)){
				if(is_dir($dir.$read) && $read != '.' && $read != '..'){
					$dirtitle = explode('-',$read);
					$style = M('style')->where('title="'.$dirtitle[0].'"')->find();
					if ($style) {
						$styleid = $style['guid'];
					}else{
						$styleid = $this->guid();
						M('style')->add(array(
							'guid'=>$styleid,
							'title'=>$dirtitle[0],
							'groupid'=>$this->groupid,
							'time'=>time()
							)
						);
					}
					$function = M('function')->where('title="'.$dirtitle[1].'"')->find();
					if ($function) {
						$functionid = $function['guid'];
					}else{
						$functionid = $this->guid();
						M('function')->add(array(
							'guid'=>$functionid,
							'title'=>$dirtitle[1],
							'groupid'=>$this->groupid,
							'time'=>time()
							)
						);
					}
					$spacestyle = M('spacestyle')->where('title="'.$dirtitle[2].'"')->find();
					if ($spacestyle) {
						$spacestyleid = $spacestyle['guid'];
					}else{
						$spacestyleid = $this->guid();
						M('spacestyle')->add(array(
							'guid'=>$spacestyleid,
							'title'=>$dirtitle[2],
							'groupid'=>$this->groupid,
							'time'=>time()
							)
						);
					}
					if($openc=opendir($dir.$read.'/')){
						while($readc=readdir($openc)){
							if(is_dir($dir.$read.'/'.$readc) && $readc !='.' && $readc !='..'){
								
								$oneimg = $this->groupid.'/'.$this->guid().'.jpg';
								copy($dir.$read.'/'.$readc.'/DefaultImage.jpg',$oneimg);

								$twoimg = $this->groupid.'/'.$this->guid().'.jpg';
								copy($dir.$read.'/'.$readc.'/ListImage.jpg',$twoimg);
	
								M('pro')->add(array(
									'title'=>$readc,
									'guid'=>$this->guid(),
									'oneimg'=>$oneimg,
									'twoimg'=>$twoimg,
									'styleid'=>$styleid,
									'functionid'=>$functionid,
									'spacestyleid'=>$spacestyleid,
									'pid'=>'5A95B27B00CEA43C2FA4040DCD88BEFA',
									'groupid'=>$this->groupid,
									'uid'=>'1',
									'time'=>time()
								));
							}
						}
					}
				}
			}
		}
    }
    public function honor()
    {
		$i=0;
		$dir='画册/';
		if($open=opendir($dir)){
			while($read=readdir($open)){
				if(is_dir($dir.$read) && $read!='.' && $read!='..'){
					$oneimg = $this->groupid.'/'.$this->guid().'.png';
					copy($dir.$read.'/DefaultImage.png',$oneimg);

					//$twoimg = $this->groupid.'/'.$this->guid().'.jpg';
					//copy($dir.$read.'/ListImage.jpg',$twoimg);
								
					M('content')->add(array(
						'title'=>$read,
						'sort'=>$read,
						'guid'=>$this->guid(),
						'oneimg'=>$oneimg,
						//'twoimg'=>$twoimg,
						'pid'=>$this->honorid,
						'groupid'=>$this->groupid,
						'uid'=>'1',
						'time'=>time()
					));
				}
			}
		}
    }

    public function proaaa()
    {
		$dir='产品/';
		$this->addpro($dir,'0');
	}
	
    public function addpro($dir,$pid)
    {
		if($open=opendir($dir)){
			while($read=readdir($open)){
				if(is_dir($dir.$read) && $read!='.' && $read!='..'){
					$array = explode('+',$read);
					if (count($array) != 1) {
						$pro=M('pro')->where('title="'.$array[0].'" and entitle="'.$array[1].'" and summary="'.$array[2].'" and pid="'.$pid.'" and groupid="'.$this->groupid.'"')->find();
						if($pro){
							$oneguid = $pro['guid'];
						}else{
							$oneimg = $this->isfile($dir.$read.'/DefaultImage.jpg','jpg');
							$twoimg = $this->isfile($dir.$read.'/ListImage.jpg','jpg');
							//$threeimg = $this->isfile($dir.$read.'/DiyImage.png','png');
														
							$oneguid = $this->guid();
							M('pro')->add(array(
							'title'=>$array[0],
							'entitle'=>$array[1],
							'summary'=>$array[2],
							'price'=>$array[3],
							'oneimg'=>$oneimg,
							'twoimg'=>$twoimg,
							//'threeimg'=>$threeimg,
							'guid'=>$oneguid,
							'pid'=>$pid,
							'groupid'=>$this->groupid,
							'uid'=>'1',
							'time'=>time()
							));
						}
					}else{
						$prodir=M('prodir')->where('title="'.$read.'" and groupid="'.$this->groupid.'"')->find();
						if($prodir){
							$dirid = $prodir['guid'];
						}else{							
							$dirid = $this->guid();
							M('prodir')->add(array(
							'title'=>$read,
							'guid'=>$dirid,
							//'oneimg'=>$oneimg,
							'pid'=>$pid,
							'groupid'=>$this->groupid,
							'uid'=>'1',
							'time'=>time()
							));
						}
						$this->addpro($dir.$read.'/',$dirid);
					}
				}
			}
		}
    }

    public function diy(){
    	$typearray = array('场景'=>0,'门花'=>1,'锁具'=>2,'玻璃'=>3,'门款'=>4,'型材'=>5);
    	$i=0;
    	$dir='DIY/';
    	if($open=opendir($dir)){
    		while($read=readdir($open)){
    			if(is_dir($dir.$read) && $read!='.' && $read!='..'){
    				$oneimg = $this->groupid.'/'.$this->guid().'.png';
    				copy($dir.$read.'/DefaultImage.png',$oneimg);

    				$diyid = $this->guid();
    				M('diy')->add(array(
                                    'title'=>$read,
                                    'guid'=>$diyid,
                                    'oneimg'=>$oneimg,
                                    'groupid'=>$this->groupid,
                                    'uid'=>'1',
                                    'time'=>time()
                                    ));

    				if($openc=opendir($dir.$read)){
    					while($readc=readdir($openc)){
    						if(is_dir($dir.$read.'/'.$readc) && $readc!='.' && $readc!='..'){
    							$focusid = $this->guid();
    							M('focus')->add(array(
    								'title'=>$readc,
    								'guid'=>$focusid,
    								'type'=>$typearray[$readc],
    								'coordinate'=>'0,0,40,40',
    								'diyid'=>$diyid,
    								'groupid'=>$this->groupid,
    								'uid'=>'1',
    								'time'=>time()
    								));

    							if($opens=opendir($dir.$read.'/'.$readc)){
    								while($reads=readdir($opens)){
    									if(is_dir($dir.$read.'/'.$readc.'/'.$reads) && $reads!='.' && $reads!='..'){
    										if(is_file($dir.$read.'/'.$readc.'/'.$reads.'/DefaultImage.jpg')){
    											$oneimg = $this->groupid.'/'.$this->guid().'.jpg';
    											copy($dir.$read.'/'.$readc.'/'.$reads.'/DefaultImage.jpg',$oneimg);
    										}else if(is_file($dir.$read.'/'.$readc.'/'.$reads.'/DefaultImage.png')){
    											$oneimg = $this->groupid.'/'.$this->guid().'.png';
    											copy($dir.$read.'/'.$readc.'/'.$reads.'/DefaultImage.png',$oneimg);
    										}else{
    											$oneimg = "";
    										}

    										if(is_file($dir.$read.'/'.$readc.'/'.$reads.'/ListImage.jpg')){
    											$twoimg = $this->groupid.'/'.$this->guid().'.jpg';
    											copy($dir.$read.'/'.$readc.'/'.$reads.'/ListImage.jpg',$twoimg);
    										}else if(is_file($dir.$read.'/'.$readc.'/'.$reads.'/ListImage.png')){
    											$twoimg = $this->groupid.'/'.$this->guid().'.png';
    											copy($dir.$read.'/'.$readc.'/'.$reads.'/ListImage.png',$twoimg);
    										}else{
    											$twoimg = "";
    										}

    										$diyimgid = $this->guid();
    										M('diyimg')->add(array(
    											'title'=>$reads,
    											'guid'=>$diyimgid,
    											'oneimg'=>$oneimg,
    											'twoimg'=>$twoimg,
    											'focusid'=>$focusid,
    											'groupid'=>$this->groupid,
    											'uid'=>'1',
    											'time'=>time()
    											));

    										if($opend=opendir($dir.$read.'/'.$readc.'/'.$reads)){
    											while($readd=readdir($opend)){
    												if(is_dir($dir.$read.'/'.$readc.'/'.$reads.'/'.$readd) && $readd!='.' && $readd!='..'){
    													$diyimgtypeid = $this->guid();
    													M('diyimgtype')->add(array(
    														'title'=>$readd,
    														'guid'=>$diyimgtypeid,
    														'diyimgid'=>$diyimgid,
    														'groupid'=>$this->groupid,
    														'uid'=>'1',
    														'time'=>time()
    														));

    													if($opent=opendir($dir.$read.'/'.$readc.'/'.$reads.'/'.$readd)){
    														while($readt=readdir($opent)){
    															if(is_dir($dir.$read.'/'.$readc.'/'.$reads.'/'.$readd.'/'.$readt) && $readt!='.' && $readt!='..'){
    																$diyimgproid = $this->guid();
    																if(is_file($dir.$read.'/'.$readc.'/'.$reads.'/'.$readd.'/'.$readt.'/DefaultImage.jpg')){
    																	$oneimg = $this->groupid.'/'.$this->guid().'.jpg';
    																	copy($dir.$read.'/'.$readc.'/'.$reads.'/'.$readd.'/'.$readt.'/DefaultImage.jpg',$oneimg);
    																}else if(is_file($dir.$read.'/'.$readc.'/'.$reads.'/'.$readd.'/'.$readt.'/DefaultImage.png')){
    																	$oneimg = $this->groupid.'/'.$this->guid().'.png';
    																	copy($dir.$read.'/'.$readc.'/'.$reads.'/'.$readd.'/'.$readt.'/DefaultImage.png',$oneimg);
    																}else{
    																	$oneimg = "";
    																}

    																if(is_file($dir.$read.'/'.$readc.'/'.$reads.'/'.$readd.'/'.$readt.'/ListImage.jpg')){
    																	$twoimg = $this->groupid.'/'.$this->guid().'.jpg';
    																	copy($dir.$read.'/'.$readc.'/'.$reads.'/'.$readd.'/'.$readt.'/ListImage.jpg',$twoimg);
    																}else if(is_file($dir.$read.'/'.$readc.'/'.$reads.'/'.$readd.'/'.$readt.'/ListImage.png')){
    																	$twoimg = $this->groupid.'/'.$this->guid().'.png';
    																	copy($dir.$read.'/'.$readc.'/'.$reads.'/'.$readd.'/'.$readt.'/ListImage.png',$twoimg);
    																}else{
    																	$twoimg = "";
    																}

    																$diyimgproid = $this->guid();
    																M('diyimgpro')->add(array(
    																	'title'=>$readt,
    																	'guid'=>$diyimgproid,
    																	'oneimg'=>$oneimg,
    																	'twoimg'=>$twoimg,
    																	'diyimgid'=>$diyimgid,
    																	'diyimgtypeid'=>$diyimgtypeid,
    																	'groupid'=>$this->groupid,
    																	'uid'=>'1',
    																	'time'=>time()
    																	));
    															}
    														}
    													}
    												}
    											}
    										}
    									}
    								}
    							}
    						}
    					}
    				}
    			}
    		}
    	}
    }
    
    function guid(){
		if (function_exists('com_create_guid')){
			return str_replace(array('{','}','-'),'',com_create_guid());
		}else{
			mt_srand((double)microtime()*10000);
			$charid = strtoupper(md5(uniqid(rand(), true)));
			$hyphen = chr(45);
			$uuid = chr(123)
                .substr($charid, 0, 8).$hyphen
                .substr($charid, 8, 4).$hyphen
                .substr($charid,12, 4).$hyphen
                .substr($charid,16, 4).$hyphen
                .substr($charid,20,12)
                .chr(125);
				return str_replace(array('{','}','-'),'',$uuid);
		}
	}
}
?>