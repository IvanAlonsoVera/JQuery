window.onload=inicio;
let mos = true;

function inicio(){
	//alert($("p").text());
}
function ocultar(d){

	let par = "#p" +d;
	let btn = "#b" +d;

	if ($(par).css('display')!='none') {
		$(par).hide();
		$(btn).text("Enseñar "+d);
		mos = false;
	}else{
		$(par).show();
		$(btn).text("Ocultar "+d);
		mos = true;
	}
}