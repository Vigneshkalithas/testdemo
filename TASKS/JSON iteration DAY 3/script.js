var person = [
    {
    name: "vignesh kalithas",
    age : 24,
    gender : "male"
},
{
    name: "kalithas ramasamy",
    age : 50,
    gender : "male"
},
{
    name: "lakshmiprabha kalithas",
    age : 45,
    gender : "female"
}
]

//for loop
console.log("for loop") // ==> this line is used to print  loopnames in console to show difference


for(let i=0; i<person.length ; i++){
    console.log(person[i])
}

//for in
console.log("for in") // ==> this line is used to print  loopnames in console to show difference


for(let key in person){
    console.log(person[key])
}

//for of
console.log("for of ") // ==> this line is used to print  loopnames in console to show difference


for(let key of person){
    console.log(key)
}

//forEach 
console.log("forEach ") // ==> this line is used to print  loopnames in console to show difference


person.forEach((element) => {
    console.log(element)
})




