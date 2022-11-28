//Solicito contraseña para loguearse - hasta 3 intentos - (WHILE + IF)
let intentos = 3;
let pass = 100590;
let dato = parseInt(prompt("Ingresá tu clave"));


while (dato != pass && intentos > 0) {
    intentos = intentos - 1;
    alert(`La clave ingresada es incorrecta, intenta nuevamente. Te quedan ${intentos} intento/s`);
    if (intentos > 0 && intentos < 3) {
        dato = parseInt(prompt("Ingresá tu clave"));
    }
}

//Le entrego un mensaje bienvenida (FUNCTION)

function mensajeBienvenida() {
    let nombre = prompt("¿Cuál es tu nombre?"); 
    alert(`Bienvenida/o ${nombre}`);
    return (mensajeBienvenida);
}

mensajeBienvenida();

//Le pregunto sobre qué tipo de asesoría necesita (SWITCH)
let consulta = prompt("¿Sobre qué tema es tu consulta? Escribe una sola palabra");

switch (consulta.toLowerCase) {
    case "consultoria":
        alert("Puedes chequear nuestro artículo titulado Consultoría con Powerdash");
        break;
    case "datos":
        alert("Puedes chequear nuestro artículo titulado Organización de datos, ¿para qué sirve?");
        break;
    case "web":
        alert("Puedes chequear nuestro artículo titulado ¿Por qué es importante para tu empresa tener un sitio web?");
        break;
    default:
        alert("Por esta y otras consultas puedes escribirnos a través de nuestras redes y nuestro formulario de consultas");
}

console.log (consulta);

//Aplico un descuento según las dimensiones de la empresa (IF)
let cantidadEmpleados = parseInt(prompt("¿Cuántos empleados tiene tu empresa?"));

if (cantidadEmpleados > 0 && cantidadEmpleados <= 5) {
    alert("Bienvenido/a emprendedor/a! Tienes un descuento del 30% en todos nuestros servicios");
} else if (cantidadEmpleados > 5 && cantidadEmpleados <= 20) {
    alert("Bienvenida pequeña empresa! Tienes un descuento del 20% en todos nuestros servicios");
} else if (cantidadEmpleados > 20 && cantidadEmpleados <= 100) {
    alert("Bienvenida mediana empresa! Tienes un descuento del 10% en todos nuestros servicios");
} else {
    alert("Bienvenida gran empresa!");
}

console.log (cantidadEmpleados);
