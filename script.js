



    const form = document.getElementById('form');
    form.addEventListener('submit', handleSubmit);

    const inputValue = document.getElementById('value-real');
    const selectdCurrency = document.getElementById('currency');
    const result = document.getElementById('result');

    let valueConverted = 0;

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

        //FAZER A CONVERSÃO

    function converter() {
        if (selectdCurrency.value === 'eur') {
            valueConverted = inputValue.value / 5.44;
            result.innerHTML = valueFormatter('pt-BR', 'EUR');
        } else if (selectdCurrency.value === 'dol') {
            valueConverted = inputValue.value / 5.06;
            result.innerHTML = valueFormatter('en-US', 'USD');
        }
    };

    function valueFormatter(locale, currency) {
        const value = valueConverted.toLocaleString(`${locale}`, {style: `currency`, currency: `${currency}`});
        return value;
    };
;


