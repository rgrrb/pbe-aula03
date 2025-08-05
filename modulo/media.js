/*******************************************************************************                                    
 * Objetivo: Arquivo responsável por calcular e validar médias escolares
 * Autor: Roger Ribeiro 
 * Versão: 1.0
********************************************************************************/

const { stat } = require("fs")

//Função para calcular a média escolar
function calcularMedia(valor1, valor2, valor3, valor4) {
    let n1 = Number(valor1)
    let n2 = Number(valor2)
    let n3 = Number(valor3)
    let n4 = Number(valor4)

    let media = (n1 + n2 + n3 + n4) / 4

    return Number(media).toFixed(1)

}

//Função para retornar o status da média escolar (APROVADO) (EXAME) (REPROVADO)
function validarStatusMedia(valorMedia) {

    let media = Number(valorMedia)
    let statusAluno
    if (media >= 7 && media <= 10) {
        statusAluno = 'APROVADO'
    } else if (media <= 7 && media >= 5) {
        statusAluno = 'EXAME'
    } else if (media < 5 && media >= 0) {
        statusAluno = 'REPROVADO'
    }
    if(statusAluno != undefined){
        return statusAluno
    }else{
        return false
    }
    
}

//Permite tornar public uma função, variavel, constante, objeto
module.exports = {
    calcularMedia,
    validarStatusMedia
}

// Testando
//console.log(validarStatusMedia())
//console.log(validarStatusMedia(calcularMedia('0','-10','2.6','8.9')))
