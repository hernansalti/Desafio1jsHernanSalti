function correr(){

    let nombre = prompt("Ahora Ingrese su Nombre");
    let apellido = prompt("por favor Ingrese su Apellido");

    let sueldo = prompt ("Ingrese su mayor sueldo en los ultimos 12 meses");
    let mitad = "0.5";

    let aguinaldo = + sueldo * + mitad;

    alert("Hola " + nombre + " " + apellido );
    alert("Su Aguinaldo a cobrar será de $ " + aguinaldo);
}