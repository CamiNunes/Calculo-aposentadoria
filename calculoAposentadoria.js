const nome = 'Camila'
const sexo = 'F'
const idade = 31
const contribuicao = 14

const calcContrib = idade + contribuicao

const homemAposenta = sexo == 'M' && contribuicao >= 35 && calcContrib >= 95
const mulherAposenta = sexo == 'F' && contribuicao >= 30 && calcContrib >= 85

if (homemAposenta || mulherAposenta){
    console.log(`${nome}, você já pode se aposentar`)
}else{
    console.log(`${nome}, você ainda não pode se aposentar`)
}