var banderColapsable = 0;
$(document).on('ready', function(){
	$('#btn_colapsable').click(function(){
		if(banderColapsable == 0){
			banderColapsable = 1;
			$(this).animate({
				"height":"-50px"
			}, 500);
			$('#btn_colapsable').animate({
				"margin-left":"180px"

			});
		}else{
			banderColapsable = 0;
			$(this).animate({
				"height":"50px"
			}, 500);
			$('#btn_colapsable').animate({
				"margin-left":"-5px",
				"padding-left":"5px",
				"height":"32px",
				"color":"#000"
			});
		}
		
	});
	$('#menu_modulo').click(function(){
		$(location).attr('href','menu_s.php');
	});
	
		//modulo fondo garantia
	$('#menu_modulo_general_fondo').click(function(){
		$(location).attr('href', 'modulo.php?modulo=11000');
	});
	//modulo reportes fondo
	$('#menu_modulo_reportes_fondo').click(function(){
		$(location).attr('href', 'fgar_reportes.php');
	});
	$('#menu_modulo_reportes_fondo_det_mov').click(function(){
		$(location).attr('href', 'rep_param.php?menu=5');
	});
});