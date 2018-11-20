exports.filter = function(list,func){
  let result = [];
  for(let index=0; index<list.length; index++){
    if(func(list[index])){
      result.push(list[index]);
    }
  }
  return result;
}
