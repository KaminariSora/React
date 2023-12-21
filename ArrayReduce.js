const data = [10, 20, 30, 40]
const cart = [
    {name:"Bag",price:500},
    {name:"Book",price:100},
    {name:"camera",price:4000}
]

const total = data.reduce((value, e) =>e+value,0) 

const totalPrice = cart.reduce((value,e) => { //value = 0 ,e = สมาชิกใน Array
    const total = e.price+value
    return total
},0) //set value

console.log(`total data : ${total}`)
console.log(`total cart price : ${totalPrice}`)