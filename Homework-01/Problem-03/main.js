strs = ["eat","tea","tan","ate","nat","bat"]
// let a = strs.split("").sort();
// function groupAnagrams(strs) {
//   let result = {};
// for (let word of strs) {
//     console.log(word);
//     let cleansed = word.split("").sort().join("");
//     console.log(cleansed);
//     if (result[cleansed]) {
//       result[cleansed].push(word);
//     } else {
//       result[cleansed] = [word];
//     }
//   }
// return Object.values(result);
// }
// console.log(groupAnagrams(strs));
let result ={};
strs.forEach(element => {
  // console.log(element.split("").sort().join(""));
  let SortElement = element.split("").sort().join("")
  if (result[SortElement]) {
    // console.log(result[SortElement]);
    result[SortElement].push(element);
  } else {
    result[SortElement] = [element];
  }
});
console.log(Object.values(result));
