exports.reduce = function(func,list,accumulator){
  let startingIndex = 0;
  if(accumulator==undefined){
    accumulator = list[0];
    startingIndex = 1;
  }
  let result = accumulator;
  for(let index = startingIndex; index<list.length; index++){
    result = func(result,list[index]);
  }
  return result;
}
