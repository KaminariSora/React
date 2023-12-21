const data = [
    {day:"01/6/66", weather:"hot", temp: "30"},
    {day:"01/8/66", weather:"windy", temp: "20"},
    {day:"30/12/66", weather:"cold", temp: "15"}
]

const result = data.map(element => {
    return element.weather
})
console.log(result)