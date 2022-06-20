const students = [
	{ name: 'Lan', gender: 'female' },
	{ name: 'Linh', gender: 'female' },
	{ name: 'Trung', gender: 'male' },
	{ name: 'Peter', gender: 'other' }
];
// let createArray = {}
// students.map((value)=>{
//   console.log(value.name,value.gender);
  
// })
Checkfemale = () =>{
  let createArray = []
  students.map((value)=>{
    if (value.gender !== "female"){
      createArray.push(value)
    }
  })
  console.log(createArray);
}
Checkfemale()
// function bai2(arr = []) {
//   return arr.filter((item) => item.gender !== "female");
// }
