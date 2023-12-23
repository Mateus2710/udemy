const primeiroNome =  'Mateus';
const sobrenome = 'de sousa da silva';
const anoAtual = 2023;
const idade = 18;
const peso = 50;
const alturaEmM = 1.63;

let indicieDeMassaCorporal = peso/(alturaEmM * alturaEmM);
let anoDeNascimento = anoAtual - idade;

indicieDeMassaCorporal = parseInt(indicieDeMassaCorporal)

console.log(`${primeiroNome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`)
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indicieDeMassaCorporal}`)
console.log(`${primeiroNome} nasceu no ano de ${anoDeNascimento}`)