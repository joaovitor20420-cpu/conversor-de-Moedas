const convertButton = document.querySelector(".btn-convert")


function convertValues() {
    const input = document.querySelector("#input-currency-value").value
    const dolarToday = 5.30
    const euroToday = 5.70
    const bitcoinToday=300_000.00
    const libraToday = 6.40
    

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

const selector = document.getElementById('currency-select')
const currencyName = document.getElementById('currency-name')
const currencyImg = document.getElementById('currency-img')

function changeCurrency() {
    if(selector.value === 'dolar'){
        currencyName.textContent = "Dólar"
        currencyImg.src = "./assets/estados-unidos.svg"

    }else{
        currencyName.textContent ='Euro'
        currencyImg.src="./assets/euro.svg"
    }
}

selector.addEventListener('change', changeCurrency)
convertButton.addEventListener("click", convertValues)
