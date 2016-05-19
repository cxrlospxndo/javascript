// console.log("hola")

//get: document.getElementById("mensaje").innerHTML
//set: document.getElementById("mensaje").innerHTML=

// input
// document.getElementById("question-nombre").value
// document.getElementById("question-address").value

// appendChild

// var caja = document.getElementById("caja")
// var hola = function(){
// 	console.log("hola");
// 	caja.style.backgroundColor = "#bc4848";
// }

// var chau = function(){
// 	console.log("chau");
// 	caja.style.backgroundColor = "#19b391";
// }

// // caja.addEventListener("mouseover", hola)
// // caja.addEventListener("mouseleave", chau)


// var navegadores = document.getElementById("navegadores")
// navegadores.addEventListener("change", function(){
// 	//console.log("cambio")
// 	console.log("seleccionado : " + navegadores.value)
// })

// var boton = document.getElementById("boton")
// var contador = 0;

// 3
// ***
// **
// *

// var triangulo = function(n){
// 	var h = n;
// 	for (var i = 0; i < n; i++) {
// 		var str = "";
// 		for (var j = 0; j < h; j++) {
// 			str += "*"
// 		};
// 		h--;
// 		console.log(str);
// 	};
// }

// boton.addEventListener("click", function(){
// 	contador++;
// 	triangulo(contador);
// })


var nombre = document.getElementById("question-nombre")
var mensaje = document.getElementById("mensaje")
nombre.addEventListener("keyup", function(){
	console.log(nombre.value);
	mensaje.innerHTML = "Hola " + nombre.value;
})