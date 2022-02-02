function cambiar(d){

	let par = "#p" + d;
	let btn = "#b" + d;

console.log($(par).css('color'));

	if ($(par).css('color')=='rgb(255, 0, 0)') {
		$(par).css('color','rgb(0, 0, 0)');
		$(btn).text("cambiar a rojo");
	}else{
		$(par).css('color','rgb(255, 0, 0)');
		$(btn).text("cambiar a negro");
	}
}