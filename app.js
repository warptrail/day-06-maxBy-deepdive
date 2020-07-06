'use strict';

// boilerplate function to get the max value of any array of numbers

const maxVal = arrayOfNumbers => {
  return arrayOfNumbers.reduce((accumulator, number)=>{
    if (number > accumulator){
      accumulator = number;
    }
    return accumulator;
  });
};


// Functions as Callbacks
// common error when using callback functions:
// instead of passing the callback function as an argument
// they call the function inline and pass the result as an argument
// fixed the filterUserList function by removing the 
// parentheses in its return value

let users = [
  { id: 430,  admin: false, name: 'Olive Frank' },
  { id: 2212, admin: true,  name: 'Krista Anderson' },
  { id: 675,  admin: false, name: 'Walter Gomez' },
  { id: 3849, admin: false, name: 'Anita Brooks' },
];

// runConditionally takes in three arguments
// a user object
// a function that is a 'check' true or false
// a function  that is the callback to run
// based on what the check function returns

let runConditionally = (user, check, callback) => {
  if (check(user)){
    callback(user);
  }
};

// Write a function maxById that takes in a list of users
// returns the user with the highest id

let maxById = users => {
  return users.reduce((accumulator, number) => {
    if (number.id > accumulator.id){
      accumulator = number;
    }
    return accumulator;
  },users[0]);
};

//console.log(maxById(users));


// write a function maxBy
// takes in a list of users and a callback function
// should return the maximum user
// according to the callback function



function userNameLength(user) {
  return user.name.length;
}

const maxBy = (users, callback) => {
  let x = users.reduce(callback);
  return x;
};

console.log(maxBy(users, userNameLength));


//maxBy(users, userNameLength);

