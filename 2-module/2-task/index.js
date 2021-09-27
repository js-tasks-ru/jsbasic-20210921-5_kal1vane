function isEmpty(obj) {
  let countKey = 0;
  for (let key in obj) {
    countKey += 1;
  }
  if (countKey > 0) {
    return false;
  } else {
    return true;
  }
}
