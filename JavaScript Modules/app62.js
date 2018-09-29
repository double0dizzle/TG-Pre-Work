// Write your code below
var bobsFollowers = ["John", "Sue", "Bob", "Sandy"]

var tinasFollowers = ["John", "Karen", "Sandy"]

var mutualFollowers = []

for (var i = 0; i < bobsFollowers.length; i++) {
  for (var j = 0; j < tinasFollowers.length; j++){
    if (bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(tinasFollowers[j])
    }
  }
}
console.log(mutualFollowers)