let assert = require("assert");
let {
  map
}= require("./map.js");

//---------util functions-----------//
generateSquare = function(number){
  return number*number;
};
//----------------------------------//

assert.deepEqual(map([1,2,3,4],generateSquare),[1,4,9,16]);
