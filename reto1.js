// Reto 
// Durante este taller aprendimos a calcular el �rea y per�metro de un tri�ngulo conociendo la longitud de sus 3 lados y tambi�n su altura.

// En este ejercicio debes crear una funci�n para calcular la altura de un tri�ngulo is�sceles.

// La funci�n debe recibir, como par�metros, la longitud de los 3 lados del tri�ngulo.
// La funci�n debe validar que la longitud de los 3 lados del tri�ngulo corresponden a un tri�ngulo is�sceles.
// La funci�n debe retornar la altura del tri�ngulo.
// Pista: la funci�n Math.sqrt de JavaScript puede ayudarte a calcular ra�ces cuadradas.

function trianguloIsosceles(lado1, lado2, lado3) {
    if(lado1==lado2 && lado1 != lado3){
        const altura = Math.sqrt((lado1**2)-((lado3**2)/4));
        return altura
    }else if(lado1==lado3 && lado1 != lado2){
        const altura = Math.sqrt((lado1**2)-((lado2**2)/4));
        return altura
    }else if(lado2==lado3 && lado2 != lado1){
        const altura = Math.sqrt((lado2**2)-((lado1**2)/4));
        return altura
    }else{
        return "No es un triangulo isosceles";
    }
}
console.log(trianguloIsosceles(6,6,8))

function alturaTrianguloIsosceles() {
    const input1 = document.getElementById("InputLado1");
    const value1 = input1.value;
    const input2 = document.getElementById("InputLado2");
    const value2 = input2.value;
    const input3 = document.getElementById("InputLado3");
    const value3 = input3.value;

    const altura = trianguloIsosceles(value1,value2,value3);
    alert(altura);
}