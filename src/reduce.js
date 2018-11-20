exports.reduce = function(func,list,accumulator){
  if(accumulator==undefined){
    accumulator = list[0];
  }
  let result = accumulator;
  for(let index = 1; index<list.length; index++){
    result = func(result,list[index]);
  }
  return result;
}
