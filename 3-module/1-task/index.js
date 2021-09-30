function namify(users) {
  let allName = [];

  for (let i = 0; i < users.length; i++) {
    allName.push(users[i].name);
  }
  return allName;
}
