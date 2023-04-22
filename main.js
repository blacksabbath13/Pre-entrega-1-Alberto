let entrada = prompt("ingrese nombre y apellido");
let salida = entrada + " " + "ingreso";
alert(salida);

let marca = prompt("ingrese marca");

let edad = parseInt(prompt("ingrese año"));

if(edad <1999){
    alert("no hay cobertura")
}
else if(edad >=2000){
    alert("Cobertura disponible");
}