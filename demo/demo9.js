$(iniciar);

function iniciar(){
	$('#tablaPrincipal').addClass('estiloConBordes');

	$('.filaTabla').addClass('estiloConBordesFondo')
					.on('click',otraFila);
}
function otraFila(){
	$(this).before('<tr><td>otra</td><td>otra</td></tr>');
	$(this).after('<tr><td>detras</td><td>detras</td></tr>');
	$(this).prev().addClass("filaTabla estiloConBordesFondo")
					.on('click',otraFila);
}