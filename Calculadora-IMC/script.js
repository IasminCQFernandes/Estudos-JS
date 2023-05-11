

function calcular(){
    
    let nome = document.getElementById("name").value;

    let altura = document.getElementById("altura").value;

    let peso = document.getElementById("peso").value;

    let resultado = document.getElementById("resultado");

    let imc = peso / (altura*altura);

    resultado.innerHTML = "Olá "+ nome +", seu IMC é: "+ imc.toFixed(2);

    let analisar = document.getElementById("analise");
    if(imc < 18.5){
        analisar.innerHTML = "Analise do IMC: Você está abaixo do peso!";
    }
        else if(imc < 25){
            analisar.innerHTML = "Analise do IMC: Você está no peso ideal!";
        }
        else if(imc < 30){
            analisar.innerHTML = "Analise do IMC: Você está acima do peso!";
        }
    else if(imc > 30){
        analisar.innerHTML = "Análise do IMC: Você está com obesidade!";
    }
}