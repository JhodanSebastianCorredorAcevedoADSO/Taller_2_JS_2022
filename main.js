addEventListener("DOMContentLoaded", ()=>{
    // 1. Escribir un programa que sume, reste, multiplique y divida dos números
    
    let num1 = Number(prompt("Ingrese el numero 1", 2));
    let num2 = Number(prompt("Ingrese el numero 2", 2));

    console.log(`La suma es ${num1} + ${num2} = ${num1 + num2}`);
    console.log(`La resta es ${num1} - ${num2} = ${num1 - num2}`);
    console.log(`La multiplicacion es ${num1} * ${num2} = ${num1 * num2}`);
    console.log(`La division es ${num1} / ${num2} = ${num1 / num2}`);

/// calcular el tiempo estimado para el llenado de un deposito

/// operacon basica +
    
let pi=3.1416
    
let rad=18
    
let h=20
    
let t=10
    
let mul=(pi*(rad**2)*h)
    
let ti=(t*60)
    
let q=(mul/ti)
    
/// resultado y operacion
    
console.log(`volumen:, ${mul}`)

console.log(`tiempo en segundos:, ${ti}`)
 
console.log(`el caudal es:, ${q}`)

})