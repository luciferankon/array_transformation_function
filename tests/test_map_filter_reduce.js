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

assert.deepEqual(map([1,2,3,4],generateSquare),[1,4,9,16]);
assert.deepEqual(filter([1,2,3,4],isEven),[2,4]);
