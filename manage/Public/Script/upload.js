// JavaScript Document
	function ajaxFileUpload(url,typename,filename)
	{
		if($('.'+typename+'loading').length > 0){return false;}
		$('#'+typename).before('<div class="'+typename+'loading loading" style="display:none;"></div>');
		
		$('.'+typename+'loading')
		.ajaxStart(function(){
			$('.'+typename+'loading').show();
		})
		.ajaxComplete(function(){
			$('.'+typename+'loading').remove();
		});
		$.ajaxFileUpload
		(
			{
				url:url,
				secureuri:false,
				fileElementId:filename,
				dataType: 'json',
				success: function (data, status)
				{
					if(typeof(data.error) != 'undefined')
					{
						if(data.error != '')
						{
							alert(data.error)
						}
						else if(typename=='oneimg')
						{
							top.$("#oneimg_value").val(data.msg);
						}
						else if(typename=='twoimg')
						{
							top.$("#twoimg_value").val(data.msg);
						}
						else if(typename=='threeimg')
						{
							top.$("#threeimg_value").val(data.msg);
						}
						else if(typename=='fourimg')
						{
							top.$("#fourimg_value").val(data.msg);
						}
						else
						{
							top.$("#file_value").val(data.msg);
						}
					}
				}
			}
		)
		
		return false;

	}