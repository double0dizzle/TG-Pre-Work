let input = "Totally ridiculous sentence I just made up."
input = input.toLowerCase();
var vowels = ["a", "e", "i", "o", "u"]
var resultArray = []
//console.log(input.length)

for(let i = 0; i < input.length; i++) {
  //console.log(input[i])
  for (let j = 0; j < vowels.length; i++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i])
    }
   }
   if (input[i] === "e") {
     resultArray.push(input[i])
   }
  if (input[i] === "u") {
     resultArray.push(input[i])
   }
  }
console.log(resultArray.join(" "));