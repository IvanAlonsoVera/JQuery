$(inicio);

function inicio(){

	let tablecuerpo = $("#tablacuerpo");

	let fila;

	for (var i = 0; i < 5; i++) {
		fila = $("<tr><tr/>");
		fila.append($("<td>c1</td>"));
		fila.append($("<td>c2</td>"));
		tablecuerpo.append(fila);
	}
}