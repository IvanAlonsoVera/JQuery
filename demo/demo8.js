$(iniciar);

function iniciar() {
	
	$('#btn1').on('click',meteAppend);
	$('#btn2').on('click',metePrepend);
	$('#btn3').on('click',meteAfter);
	$('#btn4').on('click',meteBefore);

}

function meteAppend(){
	$('#lista1').append('<li>AAAA</li>')
				.append('<li>BBBB</li>')
				.append('<li>CCCC</li>');
}
function metePrepend(){
	$('#lista1').prepend('<li>aaaa</li>')
				.prepend('<li>bbbb</li>')
				.prepend('<li>cccc</li>');
}
function meteAfter(){
	$('#lista1').after('<li>1111</li>');
}
function meteBefore(){
	$('#lista1').before('<li>2222</li>');
}