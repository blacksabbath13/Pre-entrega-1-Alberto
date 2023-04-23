let entrada = prompt("ingrese nombre y apellido");
let salida = entrada + " " + "ingresó";
alert(salida);


let edad = parseInt(prompt("ingrese año de la moto"));

let marca = prompt("Ingrese la marca entre Yamaha, Honda, Suzuki");

while(marca != "Suzuki"){
    alert("No esta disponible la cobertura actualmente");
    marca = prompt("ingrese su marca entre Yamaha Suzuki o Honda");
}

alert(" Suzuki Ingresada");


if(edad <1999){
    alert("no hay cobertura")
}
else if(edad >=2000){
    alert("Cobertura disponible");
}

