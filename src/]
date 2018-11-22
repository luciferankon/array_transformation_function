const map = function(mapper,list){
  if(list.length==0){
    return [];
  }
  let result = list.pop();
  let res = map(mapper,list);
  res.push(mapper(result));
  return res;
};
exports.map = map;
