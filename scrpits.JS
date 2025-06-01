const cart = [10, 244, 2, 20, 33, 200, 24, 99]
let finalvalue = 0
let finalvaluewithdiscount = 0
let totaldiscount = 0

function calculateDiscount(price, discount) {
    const result = (price * discount) / 100;
    return result;
}

const calculateDiscount1 = (price, discount) => (price * discount) / 100;

cart.forEach((value) => {
    finalvalue += value;
});

cart.forEach((value) => {
    if (value > 30) {
        const discount = calculateDiscount(value, 10);
        totaldiscount += discount;
        finalvaluewithdiscount = finalvaluewithdiscount + (value - discount);
    }
    else {
        finalvaluewithdiscount += value;
    }

});

console.log(`O valor final da compra foi de R$ ${finalvalue.toFixed(2)}, mas com os descontos de ${totaldiscount.toFixed(1)}  
ficou R$ ${finalvaluewithdiscount.toFixed(1)}`)

const objects = require('./module')


console.log(objects.person)
console.log(objects.sum(2, 3))
console.log(objects.multi(3, 5))