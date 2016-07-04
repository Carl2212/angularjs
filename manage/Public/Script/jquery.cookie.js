jQuery.cookie = function(name, value, options) {  
     if (typeof value != 'undefined') { // name and value given, set cookie  
		 document.cookie="left_li="+encodeURIComponent(value)+";path=/";
		 return true;
     } else {  
         var cookieValue = null;  
         if (document.cookie && document.cookie != '') {  
             var cookies = document.cookie.split(';');  
             for (var i = 0; i < cookies.length; i++) {  
                 var cookie = jQuery.trim(cookies[i]);  
                 if (cookie.substring(0, name.length + 1) == (name + '=')) {  
                     cookieValue = decodeURIComponent(cookie.substring(name.length + 1));  
                     break;  
                 }  
             }  
         }  
         return cookieValue;  
     }  
 }; 