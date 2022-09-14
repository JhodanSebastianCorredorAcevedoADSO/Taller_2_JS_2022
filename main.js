addEventListener("DOMContentLoaded", ()=>{
    // 1. Escribir un programa que sume, reste, multiplique y divida dos números
    
    let num1 = Number(prompt("Ingrese el numero 1", 2));
    let num2 = Number(prompt("Ingrese el numero 2", 2));

    console.log(`La suma es ${num1} + ${num2} = ${num1 + num2}`);
    console.log(`La resta es ${num1} - ${num2} = ${num1 - num2}`);
    console.log(`La multiplicacion es ${num1} * ${num2} = ${num1 * num2}`);
    console.log(`La division es ${num1} / ${num2} = ${num1 / num2}`);

/// calcular cuanto dinero tenia el jefe de obra 
/// operacion basica +,*
    
let llav=11500
    
let bomb=1168000
    
let per=87000
    
let sobr=91000
    
let mul1=(llav*5)
    
let mul2=(per*3)
    
let sum=(mul1+mul2+bomb)
    
let sum2=(sobr+sum)
    
/// resultado y proceso
    
console.log(`valor de las llaves:", ${mul1}`)

console.log(`valor de los pernos:, ${mul2}`)
 
console.log(`suma de los productos:, ${sum}`)

console.log(`cuanto dinero tenia:, ${sum2}`)

})