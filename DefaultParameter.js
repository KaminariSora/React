getDataCustomer = (customerName, customerAddress) => {
    if (!customerAddress) {
        customerAddress = "Japan"
    }
    const address = 
    `Name : ${customerName} address : ${customerAddress}`
    return address
}

console.log(getDataCustomer("KaminariSora"))