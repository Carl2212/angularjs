<?php 
 class EmptyAction extends Action{ 
    function _empty(){ 
		redirect(session('url')); 
    } 
 } 
 ?>
