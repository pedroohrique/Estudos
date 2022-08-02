/*Constante para capturar o formulário HTML*/ 
const form = window.document.querySelector('#formulario');


form.addEventListener('submit', function (evento){
    evento.preventDefault();
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);  

           
    if (!peso){         
        set_Result('Peso inválido!', false);  
        return   
    
    };

    if (!altura){
        set_Result('Altura Inválida!', false);
        return
    }; 
    
    const imc = calculaIMC(peso,altura);
    const get_nivel = nivelIMC(imc)
    
    const msg = `O seu imc é de ${imc} -- ${get_nivel}`;
    set_Result(msg,true);
    
});
   
function calculaIMC (peso,altura){    
    const IMC = (peso / (altura * altura));    
    console.log(IMC)
    return IMC.toFixed(2);
    
};

function nivelIMC(IMC){
    const nivel_imc = ['Abaixo do pesso', 'Peso Normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3'];    
    if (IMC >= 39.9) return nivel_imc[5]
    if (IMC >= 34.9) return nivel_imc[4]
    if (IMC >= 29.9) return nivel_imc[3]
    if (IMC >= 24.9) return nivel_imc[2]
    if (IMC >= 18.5) return nivel_imc[1]
    if (IMC < 18.5) return nivel_imc[0]

    
};

function cria_Paragrafo (){
    const p = document.createElement('p');
    return p;
};

function set_Result (msg, isValid){
    const resultado = document.querySelector('#resultado');    
    resultado.innerHTML = '';    
    const p = cria_Paragrafo();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else{
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
    
};



