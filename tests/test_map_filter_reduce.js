let assert = require("assert");
let {
  map
} = require("../map.js");

let {
  filter
} = require("../filter.js");

let {
  reduce
} = require("../reduce.js");

//---------util functions-----------//
const generateSquare = function(number){
  return number*number;
}

const isEven = function(number){
  return number%2==0;
}

const max = function(number1,number2){
  return Math.max(number1,number2);
}
//----------------------------------//

const testMap = function(list,func,expectedOutput){
  assert.deepEqual(map(func,list),expectedOutput);
}

const testFilter = function(list,func,expectedOutput){
  assert.deepEqual(filter(func,list),expectedOutput);
}

const testReduce = function(list,func,expectedOutput,accumulator){
  assert.deepEqual(reduce(func,list,accumulator),expectedOutput);
}

testMap([1,2,3,4],generateSquare,[1,4,9,16]);
testMap([],generateSquare,[]);
testMap([-1],generateSquare,[1]);
testFilter([1,2,3,4],isEven,[2,4]);
testFilter([],isEven,[]);
testFilter([-1],isEven,[]);
testReduce([1,2,3],max,3);
testReduce([],max,5,5);
