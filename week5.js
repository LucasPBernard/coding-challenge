//Create a function that takes a number as an argument.
//Add up all the numbers from 1 to the number you passed to the function.
//For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

let num = 15
let added = 0
addUp(num)

function addUp(num) {
	for(i=0;i<=num;i++){
    added = added+i
  }
  return(console.log(added))
}