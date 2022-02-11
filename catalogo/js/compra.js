$(iniciar);

let db;
let compra = new Array();

function iniciar() {
	abrirDB();
}
function abrirDB() {
	let objDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
	let refDB = objDB.open("cestaBD",1);

	refDB.onerror = function(){
		console.log("Error al abrir cestaBD");
	}
	refDB.onsuccess = function(){
		console.log("Se abrió la BD correctamente en la compra");
		db = refDB.result;	
		rellenarTabla();
	}
}
function enviarProductos() {
	cargarPersona();

	$.post('guardarPedido.php', 
		{
			pedido:JSON.stringify(compra)
		},
		muestra);
}
function muestra(datos,status) {
	if (status=='success') {
		alert("Tu pedido se a relizado correctamente");
	}else{
		console.log("error envio");
	}
}
function rellenarTabla() {
	let precioTotal=0;
	let tabla = db.transaction("datos_productos").objectStore("datos_productos");

	tabla.openCursor().onsuccess = function(evento) {

		let cursor = evento.target.result;

		if(cursor){
			$("#listaProductos").append("<tr><td>"+cursor.value.codigo+"</td><td>"+cursor.value.cantidad+"</td><td>"+cursor.value.precio+"€</td><td>"+cursor.value.precio*cursor.value.cantidad+"€</td><td>"+"</td></tr>");
			let prod = {
				codigo:cursor.value.codigo,
				precio:cursor.value.precio,
				cantidad:cursor.value.cantidad
			};
			precioTotal += (cursor.value.precio*cursor.value.cantidad);
			cursor.continue();
		}else{
			console.log("fin del listado");
			$("#precioTotal").text(precioTotal+"€");
		}
	}	
}
function cargarPersona(){
	let persona = {
				email:$("#email").val(),
				nombre:$("#nombre").val(),
				direccion:$("#direccion").val(),
				telefono:$("#telefono").val()
			};
		compra.push(persona);
}