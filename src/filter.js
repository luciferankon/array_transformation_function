const filter = function(predicate,list){
  if(list.length==0){
    return [];
  }
  let element = list.pop();
  let result = filter(predicate,list);
  if(predicate(element)){
    result.push(element);
  }
  return result;
}
exports.filter = filter;
