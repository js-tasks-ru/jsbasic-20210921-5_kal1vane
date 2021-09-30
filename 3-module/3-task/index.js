function camelize(str) {
  let arr = str.split('-');
  let allString = [];
  let uppString = arr.map(function(item, index) {
    
    if (index == 0) {
      allString.push(item);
    } else {
      newItem = item[0].toUpperCase() + item.slice(1);
      allString.push(newItem);
    }
    return allString;
  });
 
  return allString.join('');
  // На сколько правильно и как лучше сделать решение?  
}
