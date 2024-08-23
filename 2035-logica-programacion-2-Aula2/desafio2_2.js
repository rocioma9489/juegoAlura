function saludo(){
    alert("Hola Mundo");
    return;
}
function saludoPersonal(nombre){
    console.log("¡Hola "+nombre);
    return;
}
function dobleNum(numeroSencillo){
    let doble = numeroSencillo*2;
    alert("El doble es "+doble);
    return;
}
function promedio(num1,num2,num3){
    let promedio = (num1+num2+num3)/3;
    alert("El promedio de "+num1+","+num2+","+num3+" es: "+promedio);
    return;
}

function mayor(num1,num2){
    let numMayor;
    if(num1>num2){
        numMayor = num1;
    }else{
        numMayor = num2;
    }
    alert("El mayor es:"+numMayor);
    return;
}
function siMismo(num){
    alert("El numero multiplicado por si mismo es:"+(num*num));
    return; 
}

//saludo();
//saludoPersonal("Rocio");
//dobleNum(3);
//promedio(5,10,60);
//mayor(9,6);
siMismo(5);