// Задача 1
function calculateFinalPrice(basePrice, discountPercent, taxRate) {
  const discounted = basePrice * (1 - discountPercent / 100);
  return discounted * (1 + taxRate);
}
console.log(calculateFinalPrice(100, 10, 0.2)); // 108
console.log(calculateFinalPrice(100, 10, 0)); // 90

// Задача 2
function checkAccess(username, password) {
  return username === "admin" && password === "123456"
    ? "Доступ разрешен"
    : "Доступ запрещен";
}
console.log(checkAccess("admin", "123456")); // "Доступ разрешен"
console.log(checkAccess("user", "123")); // "Доступ запрещен"

// Задача 3
function getTimeOfDay(hour) {
  if (hour < 0 || hour > 23) return "Некорректное время";
  if (hour < 6) return "Ночь";
  if (hour < 12) return "Утро";
  if (hour < 18) return "День";
  return "Вечер";
}
console.log(getTimeOfDay(3)); // "Ночь"
console.log(getTimeOfDay(8)); // "Утро"
console.log(getTimeOfDay(25)); // "Некорректное время"

// Задача 4
function findFirstEven(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) return i;
  }
  return "Чётных чисел нет";
}
console.log(findFirstEven(1, 10)); // 2
console.log(findFirstEven(9, 9)); // "Чётных чисел нет"
