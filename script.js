
//ELEMENTOS DOM

const form= document.getElementById('form'); 
form.addEventListener('submit', handleSubmit) //representa o from

const inputValue= document.getElementById('value-real'); //representa o campo de entrada onde o usuário insere o valor a ser convertido.

const selectdCurrency= document.getElementById('currency'); // representa o menu suspenso onde o usuário seleciona a moeda.

const result= document.getElementById('result'); //: representa a área onde o resultado da conversão será exibido

 //VARIÁVEL DA CONVERSÃO
let valueConverted=0; //A variável valueConverted é inicializada com o valor 0, que será usado para armazenar o valor convertido após a conversão.

//FUNÇÃO handleSubmit 
//Esta função é chamada quando o formulário é enviado.
// Ele verifica se o campo de entrada está preenchido corretamente e se uma moeda foi selecionada. 
//Se todas as condições forem atendidas, ele chama a função converter().

function handleSubmit(e) {
    e.preventDefault();  

    if (!inputValue.value || inputValue.value < 0) {
        alert('Informe um valor correto!');
        return;
    } else if (!selectdCurrency.value) {
        alert("Escolha uma moeda!");
        return;  
    }

    converter();
};


//FUNÇÃO CONVERTER 
//Esta função verifica qual moeda foi selecionada pelo usuário e realiza a conversão do valor digitado no campo de entrada. 
//Se a moeda for 'eur' (Euro), o valor será dividido por 5.44; se a moeda for 'dol' (Dólar), o valor será dividido por 5.06. 
// O resultado da conversão é exibido na área result.
function converter () {
 
    if(selectdCurrency.value ==='eur'){
        
        valueConverted= inputValue.value/5.44;
        result.innerHTML = valueFormatter('pt-BR', 'EUR');
    } 
    
    else if (selectdCurrency.value === 'dol'){
        valueConverted=inputValue.value/5.06;
        result.innerHTML = valueFormatter('en-US', 'USD');
    }
};


// Esta função formata o valor convertido para exibição,
// utilizando o método toLocaleString() para formatá-lo como uma moeda no formato especificado pelo usuário.
//locale: representa o local para formatação (por exemplo, 'pt-BR' para português do Brasil).
//currency: representa o código da moeda (por exemplo, 'EUR' para Euro).

function valueFormatter(locale, currency){

   const value= valueConverted.toLocaleString(`${locale}`,{style: `currency` , currency: `${currency}`});

   return  value;


};
