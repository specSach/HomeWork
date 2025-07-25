const myProfile = {
  name: "Alex",
  age: 30,
  isAdmin: true,

  sayHello(name) {
    console.log(`Hello ${name}`)
  }
};

const listUsers = [
    {
        name: 'Alex',
        age: 10,
        isAdmin: false
    },
    {
        name: 'John',
        age: 20,
        isAdmin: true
    },
    {
        name: 'Jopa',
        age: 30,
        isAdmin: false
    }
]

let simpleUser = 0

for (let i = 0; i < listUsers.length; i++) {
    if (listUsers[i].isAdmin == false) {
        simpleUser += 1
    }
}

console.log(simpleUser)
