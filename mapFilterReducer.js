/* MAP 
=> mapeia o array mas tras algumas propiedades
- cria um novo array, a partir do original percorrido
- cria um novo array, com a mesma quantidade de itens do array original
- aceita 3 parametros:
  - itens do array
  - index
  - array completo
*/
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const double = number.map(item => {
    newItem = item * 3
    return newItem
})

const list = [
    { name: 'Rodolfo', vip: true },
    { name: 'Maria', vip: false },
    { name: 'João', vip: true },
    { name: 'Bruno', vip: true },
    { name: 'Carla', vip: false },
    { name: 'Ana', vip: true },
    { name: 'Julio', vip: false },
]

const check = list.map(user => {
    const newUser = {
        name: user.name,
        braceletColor: user.vip ? 'black' : 'green'
    }
    return newUser
})

//console.log(check)

const student = [
    { name: 'Rodolfo', testGrade: 7 },
    { name: 'Maria', testGrade: 5 },
    { name: 'João', testGrade: 8 },
    { name: 'Bruno', testGrade: 9 },
    { name: 'Carla', testGrade: 3 },
    { name: 'Ana', testGrade: 2 },
    { name: 'Julio', testGrade: 10 },
]

const testResult = student.map(test => {
    const result = test.testGrade >= 5 ? "Approved" : "Reproved";
    return {
        Name: test.name,
        Result: result
    };
})

//console.log(testResult)

/* REDUCE
 O Reduce aceita até 4 parâmetros:

const novoArray = arrayOriginal.reduce(
  (acumulador, valorAtual, índice, arrayOriginal) => {
            return xxxxx
}, valorInicial);

    1) O acumulador, na primeira iteração terá o valor inicial que daremos a ele.            
       Já nas demais iterações, ele terá o valor que iremos acumular nele. Item OBRIGATÓRIO.
    2) O valor do atual elemento sendo iterado. Item OBRIGATÓRIO.
    3) O índice do elemento atual. Item OPCIONAL.
    4) O array original. Item OPCIONAL.

*/
const numbers = Array.from({ length: 250 }, (_, i) => i + 1);
// Cria [1, 2, 3, ..., 250] formas de criar arrays automaticos colocando parametros.

const soma = numbers.reduce((acc, currentNumber) => {
    return acc + currentNumber;
}, 0);
//console.log(soma)

const cart = [
    { productName: 'Abóbora', valuePerKg: 5, kg: 1 },
    { productName: 'Pepino', valuePerKg: 3.55, kg: 1.3 },
    { productName: 'Limão', valuePerKg: 1.2, kg: 2 },
    { productName: 'Abacate', valuePerKg: 5.4, kg: 1.67 },
    { productName: 'Morango', valuePerKg: 12.9, kg: 3 },
]

const sum = cart.reduce((acc, actValue) => {
    return acc + (actValue.valuePerKg * actValue.kg)
}, 0)
// Esse é o funcionamento básico de um somatorio de carrinho de marketplace
console.log(`Total da compra R$ ${sum.toFixed(2)}`)

/* FILTER
 const novaArray = arrayOriginal.filter((valorAtual, indice, arrayOriginal) => {
            seu código aqui
});

    1) O filter vai passar por todos os itens do array, e o primeiro parâmetro é 
cada item, um por vez do array que estamos filtrando. Item OBRIGATÓRIO.
    2) O indíce é a posição atual que estamos filtrando. Item OPCIONAL.
    3) Uma cópia do array original. Item OPCIONAL.

    A cada item, fazemos uma 'pergunta' ao código. Se a resposta for verdadeira 
naquele item, ele guardará o valorAtual no novo array. Caso seja falso, o valor 
será descartado 
*/

const lista = [20, 3, 234, 12, 265, 12, 315, 15, 95, 1, 158, 178, 1000]

const newList = lista.filter(coisas => {
    const bla = coisas > 100 && coisas % 2 === 0 ? true : false
    return bla
})

console.log(newList)

const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
]

//+10%, antes 1990 e somar o resultado

const addPercent = (company) => {
    company.marketValue = company.marketValue + (company.marketValue * 0.1)
    return company
}

const filterCompany = (company) => {
    const oldAge = company.foundedOn < 1990 ? true : false
    return oldAge
}

const calculeteTotalMarketValue = (acc, company) => acc + company.marketValue


const marketValueOldCompanies = companies
    .map(addPercent)
    .filter(filterCompany)
    .reduce(calculeteTotalMarketValue, 0)

console.log(marketValueOldCompanies)

//-10%, depois de 1980 e somar o resutado

const percent = (companys) => {
    companys.marketValue = companys.marketValue - (companys.marketValue * 0.1)
    return companys
}

const filterdata = (companys) => companys.foundedOn > 1980

const calculeReduce = (acc, companys) => acc + companys.marketValue

const marketValeuNewCompanies = companies
    .map(percent)
    .filter(filterdata)
    .reduce(calculeReduce, 0)

console.log(marketValeuNewCompanies)

