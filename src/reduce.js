const reduce = function(func,list,accumulator=list.pop()){
  if(list.length == 1 || (list.length == 0 && accumulator==undefined)){
    return list[0];
  }
  let res = reduce(func,list,list.pop());
  return func(accumulator,res);
}
exports.reduce = reduce;
