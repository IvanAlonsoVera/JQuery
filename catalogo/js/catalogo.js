$(iniciar);

let indice = 0;
let producto;
let db;

function iniciar() {
	$.get('catalogo.php?indice='+indice,cargaPrimera);

	crearDB();
}
function cargaPrimera(data,status) {
	
	if (status=="success") {
		producto = JSON.parse(data);

		$("#img").attr("src",producto.imagen);

		$("#cod").text(producto.codigo);
		$("#pre").text(producto.precio+"€");
		$("#des").text(producto.desc);
		$("#nom").text(producto.nom);
	}
}
function cargarFormulario (){
	$(location).attr('href','formulario.html');
}
function siguiente(){
	indice++;
	if (indice>3) indice=0;

	$.get('catalogo.php?indice='+indice,cargaPrimera);
}
function anterior(){
	indice--;
	if (indice>0) indice=3;

	$.get('catalogo.php?indice='+indice,cargaPrimera);
}
function crearDB() {
	
	let objDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
	let refDB = objDB.open("cestaBD",1);

	refDB.onerror = function(){
		console.log("Error al abrir cestaBD");
	}
	refDB.onsuccess = function(){
		console.log("Se abrió la BD correctamente");
		db = refDB.result;	
	}
	refDB.onupgradeneeded = function(evento){
		let dbNueva = evento.target.result;
		let tabla = dbNueva.createObjectStore('datos_productos',{keyPath:'id',autoIncrement:true});

		tabla.createIndex('codigo','codigo',{unique:false});
		tabla.createIndex('cantidad','cantidad',{unique:false});
		tabla.createIndex('precio','precio',{unique:false});

		console.log("BD cesta configurada");
	}
}
function meterCesta() {
	console.log("tengo que guardar"+producto.precio+", "+producto.codigo);

	let newEle = {
				codigo:producto.codigo,
				cantidad:$('#can').val(),
				precio:producto.precio
			};
	let trans =db.transaction(['datos_productos'],'readwrite');
	let refTab = trans.objectStore('datos_productos');
	let res = refTab.add(newEle);

	res.onsuccess = function() {
		console.log("Datos introducidos");
	}

	res.oncomplete = function(){
		console.log("Operacion completada");
	}

	res.onerror = function() {
		console.log("Error al introducir los datos");
	}
}