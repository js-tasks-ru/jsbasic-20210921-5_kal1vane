function sumSalary(salaries) {
  let sumCount = 0;
  for (let key in salaries) {

    if (typeof salaries[key] === 'number' &&
      !(salaries[key] !== salaries[key]) &&
      salaries[key] !== Infinity &&
      salaries[key] !== -Infinity) {

      sumCount += salaries[key];
    }
  }
  return sumCount;
}
