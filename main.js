addEventListener("DOMContentLoaded", ()=>{
    // 1. Escribir un programa que sume, reste, multiplique y divida dos números
    
    let num1 = Number(prompt("Ingrese el numero 1", 2));
    let num2 = Number(prompt("Ingrese el numero 2", 2));

    console.log(`La suma es ${num1} + ${num2} = ${num1 + num2}`);
    console.log(`La resta es ${num1} - ${num2} = ${num1 - num2}`);
    console.log(`La multiplicacion es ${num1} * ${num2} = ${num1 * num2}`);
    console.log(`La division es ${num1} / ${num2} = ${num1 / num2}`);

/// calcular la edad de las personas que solicitan trabajo

let nombre=prompt("aqui su nombre")

let nacimi=Number(prompt("su año de nacimiento"))

let actual=2022

let edad = actual-nacimi

/// resultdo y operacion

console.log(`persona entrevistada:  ${nombre}`); 

console.log(`edad de la persona: ${edad}`);

})