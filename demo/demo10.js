$(iniciar);

function iniciar(){
	//hacer una llamada ajax
	$('#principal').load("demo10.php");

	$.get("demo10.php",tratarGetAdemo10);
}
function tratarGetAdemo10(data,status) {
	if(status=="success"){

		let contenido="<table>";

		let personas = JSON.parse(data);

		for(persona of personas){
			contenido += "<tr><td>"+persona[0]+"<td></td>"+persona[1]+"<td></td>";
		}

		contenido+= "</table>";

		$('principal').html(contenido);
	}
}