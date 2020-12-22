var agora = new Date()
var diaSem = agora.getDay()
var frase = 'Hoje é '
switch (diaSem) {
    case 0:
        console.log(`${frase}Domingo-feira`)
        break;
    case 1:
        console.log(`${frase}Segunda-feira`)
        break;
    case 2:
        console.log(`${frase}Terça-feira`)
        break;
    case 3:
        console.log(`${frase}Quarta-feira`)
        break;
    case 4:
        console.log(`${frase}Quinta-feira`)
        break;
    case 5:
        console.log(`${frase}Sexta-feira`)
        break;
    case 6:
        console.log(`${frase}Sábado-feira`)
        break;
    default:
        console.log('[ERROR] Dia Inválido!')
        break
}