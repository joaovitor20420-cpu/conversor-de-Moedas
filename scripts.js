const convertButton = document.querySelector(".btn-convert")


function convertValues() {
    const input = document.querySelector("#input-currency-value").value
    const dolarToday = 5.30
    const euroToday = 5.70
    const select = document.querySelector("#currency-select").value
    const valueToConvert = document.getElementById("currency-value-to-convert")
    let convertedValue

    if (select === 'dolar') {
        convertedValue = input / dolarToday
    } else {
        convertedValue = input / euroToday
    }
    valueToConvert.textContent = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(input)
 if(select === 'dolar'){
    const valueConverted = document.getElementById("currency-value")
    valueConverted.textContent = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'USD'
    }).format(convertedValue)
 } else {
    const valueConverted = document.getElementById("currency-value")
    valueConverted.textContent = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'EUR'
    }).format(convertedValue)
 }

}

convertButton.addEventListener("click", convertValues)
