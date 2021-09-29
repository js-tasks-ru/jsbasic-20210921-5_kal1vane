function camelize(str) {
  let arr = str.split('-');
  let hey = [];
  let uppString = arr.map(function(item, index) {
    
    if (index == 0) {
      hey.push(item);
    } else {
      newItem = item[0].toUpperCase() + item.slice(1);
      hey.push(newItem);
    }
    return hey;
  });
 
  return hey.join('');
  // На сколько правильно и как лучше сделать решение?  
}
