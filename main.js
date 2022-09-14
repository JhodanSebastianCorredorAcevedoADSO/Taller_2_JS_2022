addEventListener("DOMContentLoaded", ()=>{
    // 1. Escribir un programa que sume, reste, multiplique y divida dos números
    
    let num1 = Number(prompt("Ingrese el numero 1", 2));
    let num2 = Number(prompt("Ingrese el numero 2", 2));

    console.log(`La suma es ${num1} + ${num2} = ${num1 + num2}`);
    console.log(`La resta es ${num1} - ${num2} = ${num1 - num2}`);
    console.log(`La multiplicacion es ${num1} * ${num2} = ${num1 * num2}`);
    console.log(`La division es ${num1} / ${num2} = ${num1 / num2}`);

/// calcular el valor por producto y total de la compra

/// operacion basica +,*
    
let pro1=10500 
    
let pro2=12500 
    
let pro3=2700 
    
let pro4=5100  
    
let pro5=8000
    
let re1=(pro1*0.5)
    
let re2=(pro2*0.5)
    
let re3=(pro3*0.2)
    
let re4=(pro4*0.2)
    
let tot1=(pro1-re1)
    
let tot2=(pro2-re2)
    
let tot3=(pro3-re3)
    
let tot4=(pro4-re4)
    
let val=(tot1+tot2+tot3+tot4+pro5)
    
/// resultado y operacion
    
console.log(`valor: ${tot1}`)

console.log(`valor: ${tot2}`)

console.log(`valor: ${tot3}`)

console.log(`valor: ${tot4}`)

console.log(`valor total: ${val}`)

})