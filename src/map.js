const map = function(mapper,list){
  if(list.length==0){
    return [];
  }
  let element = list.pop();
  let result = map(mapper,list);
  result.push(mapper(element));
  return result;
};
exports.map = map;
