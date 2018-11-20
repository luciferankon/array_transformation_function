exports.reduce = function(func,list){
  let result = list[0];
  for(let index = 1; index<list.length; index++){
    result = func(result,list[index]);
  }
  return result;
}
