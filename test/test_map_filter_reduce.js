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

  it('should preserve the length of the array',function(){
    assert.deepEqual(map(generateSquare,[1,2,3,4]),[1,4,9,16]);
  });

  it('should return empty array for empty array',function(){
    assert.deepEqual(map(generateSquare,[]),[]);
  });

  it('should return array of length 1 for array of length 1',function(){
    assert.deepEqual(map(generateSquare,[-1]),[1]);
  });
});

describe('filter',function(){

  it('should return the filtered array for multiple elements array',function(){
    assert.deepEqual(filter(isEven,[1,2,3,4]),[2,4]);
  });

  it('should return an empty array for an one element array for which predicate is returning false',function(){
    assert.deepEqual(filter(isEven,[-1]),[]);
  });

  it('should return an one element  array for an one element array for which predicate is returning true',function(){
    assert.deepEqual(filter(isEven,[2]),[2]);
  });

  it('should return empty array for empty array',function(){
    assert.deepEqual(filter(isEven,[]),[]);
  });
});

describe('reduce',function(){
  it('should return undefined for empty array and without initializer',function(){
    assert.deepEqual(reduce(max,[]),undefined);
  });

  it('should return value after running reducer on the array without initializer',function(){
    assert.deepEqual(reduce(max,[1,2,3]),3);
  });
  it('should return value after running reducer on the array with initializer', function(){
    assert.deepEqual(reduce(max,[],5),5);
    assert.deepEqual(reduce(max,[5,2],1),5);
  });
});
