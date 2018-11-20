let assert = require("assert");
let {
  map
} = require("../map.js");

let {
  filter
} = require("../filter.js");

//---------util functions-----------//
const generateSquare = function(number){
  return number*number;
}

const isEven = function(number){
  return number%2==0;
}
//----------------------------------//

const testMap = function(list,func,expectedOutput){
  assert.deepEqual(map(func,list),expectedOutput);
}

const testFilter = function(list,func,expectedOutput){
  assert.deepEqual(filter(func,list),expectedOutput);
}

testMap([1,2,3,4],generateSquare,[1,4,9,16]);
testFilter([1,2,3,4],isEven,[2,4]);
