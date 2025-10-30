// Проверка чётности числа
let number = 10; // можно заменить на любое число

if (number % 2 === 0) {
  console.log("Число чётное");
} else {
  console.log("Число нечётное");
}

// 1. Объявляем переменную age
let age = 35;
let disc = age < 18 ? 10 :
  age <= 65 ? 20 : 30;

// 3. Выводим значение discount в консоль
console.log(`Скидка: ${disc}%`);

let Age = 25;
let discount;

switch (true) {
  case (Age < 18):
    discount = 10;
    break;
  case (Age >= 18 && Age <= 65):
    discount = 20;
    break;
  case (Age > 65):
    discount = 30;
    break;
  default:
    discount = 0;
}

console.log(`Скидка: ${discount}%`);

// 1. Запрашиваем данные у пользователя
let username = prompt("Введите имя пользователя:");
let password = prompt("Введите пароль:");

// 2. Проверяем условия доступа
if ((username === "admin" || username === "user") && password === "123456") {
  console.log("Доступ разрешен");
} else {
  console.log("Доступ запрещен");
}

// 1. Ввод данных
let weight = parseFloat(prompt("Введите вес посылки (в килограммах):"));
let deliveryType = prompt("Введите тип доставки (Стандарт/Экспресс/Премиум):");

// 2. Проверка корректности данных
if (weight <= 0 || isNaN(weight)) {
  alert("Некорректный вес посылки");
} else if (deliveryType !== "Стандарт" && deliveryType !== "Экспресс" && deliveryType !== "Премиум") {
  alert("Неверный тип доставки");
} else {
  // 3. Расчёт базовой стоимости доставки
  let baseCost;
  if (weight < 1) {
    baseCost = 5;
  } else if (weight <= 5) {
    baseCost = 10;
  } else {
    baseCost = 15;
  }

  // 4. Определение коэффициента по типу доставки
  let coefficient;
  switch (deliveryType) {
    case "Стандарт":
      coefficient = 1;
      break;
    case "Экспресс":
      coefficient = 1.5;
      break;
    case "Премиум":
      coefficient = 2;
      break;
    default:
      coefficient = 1;
  }

  // 5. Расчёт итоговой стоимости доставки
  let totalCost = baseCost * coefficient;

  // 6. Вывод результата
  alert(`Итоговая стоимость доставки: ${totalCost}$.`);
}