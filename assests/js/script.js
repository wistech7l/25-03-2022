let array = []

function salvar () {
    
    let nome = document.querySelector('#box-nome').value
    let sIdade = document.querySelector('#box-idade').value
    let idade = parseInt(sIdade)
    let pessoa = {
        nome,
        idade
    }
    array.push(pessoa)
    console.log(array)
}

const exibir = function () {
    let print = document.querySelector('#label-exibir')
    let pessoas = '' 
    for(let i = 0; i < array.length; i++){
        pessoas = pessoas + array[i].nome + ', '
    }
    console.log(pessoas)
    print.innerHTML = pessoas

}