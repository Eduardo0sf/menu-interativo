
function retorna() {
    let options = prompt(`
    Qual opção abaixo você gostaria de executar? 
    
    1-Informar a cotação do dólar.
    
    2- informar a cotação da libra.
    
    3- informar o valor do bitcoin.
    
    4- informar o valor do euro.
    
    5- encerrar
    `)
    
    let value = Number(options)
while(value > 5, value < 1) {
    return retorna()
}

    while(value === 1) {
        alert("o dólar está cotador em R$5,355")
      
    return retorna()
    }
    while(value === 2) {
        alert("A libra está cotada em R$5,988")
        return retorna()
    }
    while(value === 3) {
        alert("O bitcoin está valendo R$2,029,404,523,348")
        return retorna()
    }
    while(value === 4) {
        alert("O euro está valendo R$5,286")
        return retorna()
    }

    while(value === 5) {
        alert("Encerrando...")
        value++
    }
}
retorna()







