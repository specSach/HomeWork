// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

const person = {
  name: "Иван",
  age: 25,
  city: "Москва",
  hobby: "чтение",
};

console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person.hobby);

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

function isEmpty(obj) {
  for (let key in obj) {
    // если в объекте есть хотя бы одно свойство, он не пустой
    return false;
  }
  return true;
}

// Примеры проверки:
console.log(isEmpty({})); // true
console.log(isEmpty({ a: 1 })); // false

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

const task = {
  title: "Учить JavaScript",
  description: "Решать задачи на объекты",
  isCompleted: false,
};

function cloneAndModify(original, modifications) {
  // создаем копию и применяем изменения
  const cloned = { ...original, ...modifications };
  return cloned;
}

// изменяем объект
const modifiedTask = cloneAndModify(task, {
  isCompleted: true,
  priority: "high",
});

// выводим все свойства через for in
for (let key in modifiedTask) {
  console.log(key + ": " + modifiedTask[key]);
}

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

function callAllMethods(obj) {
  for (let key in obj) {
    // проверяем, является ли свойство функцией
    if (typeof obj[key] === "function") {
      obj[key](); // вызываем метод
    }
  }
}

// Пример использования:
const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
};

callAllMethods(myObject);
