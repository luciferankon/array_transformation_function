exports.map = function(arr,func){
  let result = [];
  for(let index = 0; index<arr.length; index++){
    result.push(func(arr[index]));
  }
  return result;
};
