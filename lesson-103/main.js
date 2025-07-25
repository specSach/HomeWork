const myProfile = {
  name: "Alex",
  age: 30,
  isAdmin: true,

  greet: function (name) {
    return `Hello "${name}"`;
  }
};

const users = [ { 
    name: "Alice",
    age: 25,
    isAdmin: false 
  },
  { 
    name: "Bob",
    age: 30,
    isAdmin: false 
  },
  { 
    name: "Charlie",
    age: 35,
    isAdmin: true 
  },
  { 
    name: "David",
    age: 40,
    isAdmin: false 
  }];

let regularUsersCount = 0;

for (const user of users) {
  if (!user.isAdmin) {
    regularUsersCount++;
  }
}
console.log(`Количество простых пользователей: ${regularUsersCount}`);