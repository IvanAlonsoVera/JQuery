$(inicio);

let uno = true;

function inicio(){
	console.log("cargado");

	console.log($("#p1").text());

	console.log($("#p1").html());

	$("#campoformulario").change(muestra);
}
function muestra (){
	let cadena = ($("#campoformulario").val());

	($("#p2").text(cadena));
}
function cambiaImagen() {
	if(uno){
		$("img").attr('src','patin2.jpg');
		uno = false;
	}else{
		$("img").attr('src','patin.png');
		uno = true;
	}
}
