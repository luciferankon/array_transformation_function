let assert = require("assert");
let { map } = require("../src/map.js");

let { filter } = require("../src/filter.js");

let { reduce } = require("../src/reduce.js");

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

describe('map',function(){
  it('should work for function generateSquare',function(){
    assert.deepEqual(map(generateSquare,[1,2,3,4]),[1,4,9,16]);
  });
  it('should work for empty array',function(){
    assert.deepEqual(map(generateSquare,[]),[]);
  });
  it('should work for negative number',function(){
    assert.deepEqual(map(generateSquare,[-1]),[1]);
  });
});

describe('filter',function(){
  it('should work for function isEven',function(){
    assert.deepEqual(filter(isEven,[1,2,3,4]),[2,4]);
  });
  it('should work for negative numbers also',function(){
    assert.deepEqual(filter(isEven,[-1]),[]);
  });
  it('should work for undefined also',function(){
    assert.deepEqual(filter(isEven,[undefined]),[]);
  });
});

describe('reduce',function(){
  it('should work for function max',function(){
    assert.deepEqual(reduce(max,[1,2,3]),3);
  });
  it('should work for initial value', function(){
    assert.deepEqual(reduce(max,[],5),5);
  });
});
