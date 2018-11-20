exports.map = function(func,list){
  let result = [];
  for(let index = 0; index<list.length; index++){
    result.push(func(list[index]));
  }
  return result;
};
