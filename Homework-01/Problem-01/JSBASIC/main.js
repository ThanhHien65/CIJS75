const users = [
	{name: "Angelina Jolie",  age: 8},
	{name: "Eric Jones",  age: 2},
	{name: "Paris Hilton",  age: 5},
	{name: "Kayne West", age: 16},
	{ name: "Bob Ziroll", age: 100}
]
let createArray = []
// for (key in users){
//   // console.log(users[key].name, users[key].age);
//   createArray.push(`<div><h1>${users[key].name}</h1><h2>${users[key].age}</h2></div>”`)
// }
// console.log(createArray);
users.forEach((value)=>{
  createArray.push(`<div><h1>${value.name}</h1><h2>${value.age}</h2></div>”`)
  // console.log(value.name,value.age);
})
// users.map((value)=>{
//   createArray.push(`<div><h1>${value.name}</h1><h2>${value.age}</h2></div>”`)
//   console.log(value.name,value.age);
// })
console.log(createArray);