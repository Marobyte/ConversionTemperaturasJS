//ESTA ES LA FUNCION MOSTRAR EL CALCULO DE TEMPERATURAS
function mostrar()
{
    //aqui capturo los grados indicados por el usuario
let grados = document.getElementById("grados").value; 
//aqui defino las constantes de kelvin y farenheit
const kelvin=273.15;
const farenheit=32;
//aqui pregunto si el input viene vacio
if((grados == ""))
{
    
    alert("Debe Ingresar un Numero Valido");
    return;

}
//aqui pregunto si el input es iguala cero
else if(grados == 0)
{
    alert("el resultado en Grados Kelvin es"+ kelvin + "K")
}
else{
    //si no es igual a cero aqui hago el caculo de los grados celcius y los convierto a grados kelvin
    celcius= parseInt(grados) + parseFloat(kelvin);
    alert("el resultado en Grados Kelvin es: "+ celcius + "K")
}

if(grados == "")
{
    //aqui pregunto si el input viene vacio
     alert("Debe Ingresar un Numero Valido");
    return;
    

}
//aqui pregunto si el input es iguala cero
else if (grados==0)
{
    alert("el resultado en Grados Farentheit es "+ farenheit + "F")
}
else
{
     //si no es igual a cero aqui hago el caculo de los grados celcius y los convierto a grados farenheit
    celcius2 = grados * 9/5 + 32;
    alert("el resultado en Grados  Farentheit es: "+ celcius2 + "F")
}


}
//ESTA EN LA FUNCION DE MOSTRAR DIAS RESTANTES
function mostrar_dias()
{
//capturo la cantidad de dias desde HTML
var numero = document.getElementById("dias").value; 
// valido si numero no es igual a cero
if(numero != 0)
{

    // en esta division me interesa el entero por eso redondeo la cifra para obtener la cantidad de años
    var años=Math.floor(numero/365)
    //aqui obtengo los dias restantes si los hubiere una vez restado la cantidad de dias que equivale a 1 año
    var dias_semana=(numero-365)
    // en esta division me interesa el entero por eso redondeo la cifra para obtener la cantidad de semanas
    var semana= Math.floor(dias_semana/7);

    // aqui devuelvo el resto de la division entre la cantidad de dias y 365.
    var  dia=numero % 365;
  
        //aqui muestro los años, semanas y dias restantes segun la cifra ingresada anteriormente
      alert( años + " Años  "+ semana + "  Semanas  " + dia + " Días");

    
}
else{
    alert("Ingrese un Numero Valido...!")
}
}
// ESTA ES LA FUNCION PARA CALCULAR SUMAR 5 NUMEROS Y SACAR EL PROMEDIO
function calculo_promedio(){

    //INICIALIZO LAS VARIABES
    var num;
    var suma = 0;
    var i = 1;

    //ULTILIZO UN WHILE PARA EJECUTAR EL PROMPT LAS VECES QUE SON EN ESTE CASO 5 
    while (i <= 5) {
    num = prompt("Ingrese los 5 numeros");
    //ULITIZO UN MATH.SIGN PARA IDENTIFICAR SI EL RESULTADO OBTENIDO DE PROMPT ES UN NUMERO POSITIVO 
    if( Math.sign(parseInt(num)) === 1 ) {
        //AQUI PASERO LAS VARIABLES SUMA Y NUM QUE ME GUARDAN LOS VALORES
        suma = parseInt(suma) + parseInt(num);
      } 
      //AQUI INCREMENTO EL INDICE 
      i++;
    }
    alert( "La suma de los 5 numero es: " + suma);
    alert ("el Promedio es: " + suma/num);

}