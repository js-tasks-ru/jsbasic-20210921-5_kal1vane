function makeFriendsList(friends) {
  let friendList = document.createElement('ul');

  for (let i = 0; i < friends.length; i++) {
    firstName = friends[i].firstName;
    lastName = friends[i].lastName;

    friendList.insertAdjacentHTML('beforeEnd', `<li>${firstName} ${lastName}</li>`);
    
  }


  return friendList;
}
