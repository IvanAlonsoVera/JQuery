$(inicio);

function inicio(){
	$("#flip").click(desliza);
}
function desliza(){
	$("#panel").slideToggle(2000);
}