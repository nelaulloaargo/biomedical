var banderColapsable = 0;
$(document).on('ready', function(){
	
	$('#progressbar').hide();// permite ocultar el progress de los asientos  de mantenimiento UFVs
	
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
	$('#menu_modulo_general').click(function(){
		$(location).attr('href', 'modulo.php?modulo=10000');
	});
		$('#menu_modulo_general_caja').click(function(){
		$(location).attr('href', 'modulo.php?modulo=10000');
	});
	$('#menu_modulo_general_fondo').click(function(){
		$(location).attr('href', 'modulo.php?modulo=11000');
	});
	
});