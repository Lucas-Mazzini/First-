const showButtons = document.querySelector('.show-menu');
const menuContainer = document.querySelector('#container');
const buttonClose = document.querySelector('.close-button')

function toggleMenu () {
    showButtons.classList.toggle('hidden');
    menuContainer.classList.toggle('show-menu');
}

showButtons.addEventListener('click', toggleMenu);
// Faz com que o botão calculadoras abra as calculadoras para escolhe 


const showButton = document.querySelector('.show-calc');
const calcContainer = document.querySelector('#container');
const image = document.querySelector('.hidden-image')

function toggleCalculador () {
    calcContainer.classList.toggle('show-calc');
    showImc.classList.remove('show-imc')
    
    if (calcContainer.classList.contains('show-calc')) {
        image.classList.add('hidden')
    } else {
        image.classList.remove('hidden')
    }
    resetImcInputs();
}

showButton.addEventListener('click', toggleCalculador);
// Função pra abrir a calculadora normal e fechar a de imc se aberta


const showButtonn = document.querySelector('.show-imc')
const showImc = document.querySelector('.calc-imc')

function toggleImc () {
    showImc.classList.toggle('show-imc');
    calcContainer.classList.remove('show-calc')

    if (showImc.classList.contains('show-imc')) {
        image.classList.add('hidden'); 
    } else {
        image.classList.remove('hidden')
    }
    resetImcInputs();
}

showButtonn.addEventListener('click', toggleImc)
// Função pra abrir calculadora IMC e fechar a normal se aberta


const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent; // Obtém o texto do botão
    
        if (value === 'All') {
           display.value = ''; // Esta função faz com que o All limpe tudo 
    } else if (value === 'C') {
        display.value = display.value.slice(0, -1); // Apaga o ultimo numero
    }   else if (value === '=') {
        try {
            display.value = eval(display.value); // Faz as equações basicas
        }   catch (error) {
            display.value = 'Error';
        }   
        }  else {
            if (['+', '*', '-', '/'].includes(value)) {
                if (value === '-' && display.value === '') {
                    display.value = value;
                }
                else if (display.value !== '' && isLastCharOperator(display.value)) {
            display.value = display.value.slice(0, -1) + value; //
        }  else if (display.value !== '') {
        display.value += value; // Adiciona os valores
        }
    }  else {
        display.value += value;
    }
}
});
});

function isLastCharOperator(str) {
    const operators = ['+', '-', '*', '/'];
    return operators.includes(str.charAt(str.length - 1));
} // Checa se a ultima string é um operador se for quando selecionado outro operador vai substituir assim não deixando se repetir


buttonClose.addEventListener('click', () => {
    // Reseta os estados dos elementos
    showButtons.classList.remove('hidden');
    menuContainer.classList.remove('show-menu');
    buttonClose.classList.remove('show-menu');
    calcContainer.classList.remove('show-calc');
    image.classList.remove('hidden');
    showImc.classList.remove('show-imc')
    resetImcInputs();
});


const kginput = document.querySelector('.Kg-Imc')
const heightinput = document.querySelector('.Alt-Imc')
const result = document.querySelector('.resultado')

function somarImc () {
    const kg = parseFloat(kginput.value);
    const height = parseFloat(heightinput.value)
    

    if (!isNaN(kg) && !isNaN(height) && kg > 0 && height > 0) {
        const imc = kg / (height * height)
        const formatedimc = imc.toFixed(2);
            
        if  (imc <= 18.5) {
            result.innerHTML = `Seu imc é de <span style="color: #ff0000; weight: 500;">${formatedimc}</span> e você está abaixo do peso normal`;
        }
        else if (imc > 18.5 && imc <= 24.9) {
            result.innerHTML = `Seu Imc é de <span style="color: #0dff00; weight: 500;">${formatedimc}</span> e você está no peso ideal`
        }
        else if (imc > 25.0 && imc <= 29.9) {
            result.innerHTML = `Seu Imc é de <span style="color: #ff0000; weight: 500;">${formatedimc}</span> e você está com excesso de peso`
        }
        else if (imc > 30.0 && imc <= 34.9) {
            result.innerHTML = `Seu Imc é de <span style="color: #ff0000; weight: 500;">${formatedimc}</span> e você está com Obesidade Grau 1`
        }
        else if (imc > 35.0 && imc <= 39.9)   {
            result.innerHTML = `Seu Imc é de <span style="color: #ff0000; weight: 500;">${formatedimc}</span> e você está com Obesidade Grau 2`
        }
        else if (imc >= 40) {
            result.innerHTML = `Seu Imc é de <span style="color: #ff0000; weight: 500;">${formatedimc}</span> e você está com Obesidade Grau 3`
        }
    }
    else {
        result.textContent = 'Insira valores válidos por favor'
    }
}

document.querySelector('.calcu-mc').addEventListener('click', somarImc)
// CALCULADORA IMC


function resetImcInputs() {
    document.querySelector('.Kg-Imc').value = '';
    document.querySelector('.Alt-Imc').value = '';
    document.querySelector('.resultado').textContent = '';
}

// FUNÇÃO PRA RESETAR OS VALORES DA CALCULADORA DE IMC

