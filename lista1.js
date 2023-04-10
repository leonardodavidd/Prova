function exe01() {
    let vet = []
    let cont = -1
    let soma1 = 0
    let soma2 = 0
    let soma3 = 0
    let soma4 = 0
    let soma5 = 0
    let opcao = 1
    do{
        let opcao = Number(prompt('Digite 1 para entrega apenas pelo teams \n Digite 2 para entrega apenas em papel \n Digite 3 para entrega apenas pelo Whatsapp \n Digite 4 para entrega por email \n Digite 5 para Tanto \n Digite 0 para sair'))
        cont += 1
        if (opcao == 1){
            soma1 += 1
            vet[1] = soma1 + ' = opção 1 '
        }
        else if(opcao == 2){
            soma2 += 1
            vet[2] = soma2 + ' = opção 2 '
        }
        else if (opcao == 3){
            soma3 += 1
            vet[3] = soma3 + ' = opção 3 '
        }
        else if(opcao == 4){
            soma4 += 1
            vet[4] = soma4 + ' = opção 4 '
        }
        else if(opcao == 5){
            soma5 += 1
            vet[5] = soma5 + ' = opção 5 '
        }
        else if (opcao < 0 || opcao > 5){
            alert('Você digitou um dado inválido ! Reinicie o programa e digite novamente ! ')
        }
        else if (opcao == 0){
            break
        }
    }
    while(opcao != 0)
    let porcentagem = (100 / cont * soma5)
    alert(`Total de votos para cada uma das opções: \n OPT1 ${soma1}, OPT2 ${soma2}, OPT3 ${soma3}, OPT4 ${soma4}, OPT5 ${soma5} `)
    alert(`A porcentagem de votos que Tanto faz teve sobre o total de votos ${porcentagem}`)
    vet.sort()
    alert(vet)
}
function exe02() {
    let valor
    let valor2
    let aumento
    let metragem = Number(prompt('Digite a metragem em m2 : '))
    let garagem = Number(prompt('Digite o número de garagens : '))
    let andar = Number(prompt('Digite o andar : '))
    let posicao = Number(prompt('Digite a posicao 1 para MANHÃ ou 2 para Tarde : '))
    if (metragem <= 80){
        if (garagem == 1){
            valor = 300000
        }
        if (garagem == 2){
            valor = 320000
        }
        if (garagem == 3){
            valor = 340000
        }
    }
    if (metragem > 80 && metragem <= 120){
        if (garagem == 1){
            valor = 400000
        }
        if (garagem == 2){
            valor = 420000
        }
        if (garagem == 3){
            valor = 440000
        }
    }
    if(metragem > 120){
        if (garagem == 1){
            valor = 500000
        }
        if (garagem == 2){
            valor = 520000
        }
        if (garagem == 3){
            valor = 540000
        }
    }
    if (andar == 1){
        valor2 = 10000
    }
    if (andar == 2){
        valor2 = 20000
    }
    if (andar == 3){
        valor2 = 30000
    }
    if (posicao == 1){
        aumento = 5
    }
    if (posicao == 2 ){
        aumento = 8
    }
    let conta = (valor + valor2) + (aumento * valor / 100)
    alert('Valor final' + conta)

}

