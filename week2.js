let arr = [3,2,3,7,4,111,6,3,2,7,11,1];
minMax(arr);

function minMax(arr) {
  arr.sort(function(a,b){return a-b});
  let firstAndLast = [arr[0],arr[arr.length -1]];
  console.log(firstAndLast);
  return firstAndLast
}