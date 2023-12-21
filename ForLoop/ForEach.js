const data = [10, 20, 30, 40, 50]
let sum = 0

data.forEach(element => {
    sum += element
    console.log(`member of array data = ${element}`)
    console.log(`${sum}`)
})