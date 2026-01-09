// Experimento com tabelas em JavaScript

let text = 'Este é um texto para teste.'
let arr_teste = ['Peloponeso', 'Marmara', 'Tartus', 127.31, 'Polinésia',
    'Tajikistan', 'Lucknow']

// document.getElementById('par_dados').innerHTML = text
document.getElementById('par_dados1').innerHTML = arr_teste

for (let i = 0; i < arr_teste.length; i++) {
    document.getElementById('par_dados2').innerHTML += `${arr_teste[i] + '<br>'} ` 
}

//-------------------------------------------------------------------------------
// Tabela:
