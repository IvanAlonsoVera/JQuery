$(iniciar);

function iniciar(){

	$.get("demo12.php?numero=5&nombre=pepe",tratarGetAdemo10);

	$.post("demo13.php")
}
function tratarGetAdemo10(data,status) {
	if(status=="success"){
		let datos = JSON.parse(data);

		let contenido = "<p>"+datos[0]+"</p><p>"+datos[1]+"</p>";

		$('principal').html(contenido);
	}
}