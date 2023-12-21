fullname = (fname,lname) => lname+ " " + fname

//แบบดั้งเดิม
// setAge = (age) => "อายุ = " + age
//แบบเต็ม
function setAge(age) {
    return "อายุ = " + age
}

console.log(fullname("Sora","Kaminari"))
console.log(setAge(19))