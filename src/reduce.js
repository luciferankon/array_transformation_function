exports.reduce = function(reducer,list,accumulator){
  let startingIndex = +isNaN(accumulator);
  let obj = [accumulator,list[0]];
  accumulator = obj[startingIndex];
  let result = accumulator;
  for(let index = startingIndex; index<list.length; index++){
    result = reducer(result,list[index]);
  }
  return result;
}
