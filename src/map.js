exports.map = function(mapper,list){
  let result = [];
  for(let index = 0; index<list.length; index++){
    result.push(mapper(list[index]));
  }
  return result;
};
