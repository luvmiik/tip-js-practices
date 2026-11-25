"use strict";

const totalTasks = 12;
const completedTasks = 5;
const dailyLimit = 3;

let errorMessage = "";

if (typeof totalTasks !== "number") {
  errorMessage = "Ошибка: totalTasks должно быть числом, строки не преобразуются.";
} else if (!Number.isFinite(totalTasks)) {
  errorMessage = "Ошибка: недопустимое числовое значение totalTasks.";
} else if (!Number.isInteger(totalTasks)) {
  errorMessage = "Ошибка: дробное количество задач.";
} else if (totalTasks < 0) {
  errorMessage = "Ошибка: отрицательное количество задач.";
} else if (totalTasks > 1000) {
  errorMessage = "Ошибка: превышена верхняя граница количества задач.";
} else if (typeof completedTasks !== "number") {
  errorMessage = "Ошибка: completedTasks должно быть числом, строки не преобразуются.";
} else if (!Number.isFinite(completedTasks)) {
  errorMessage = "Ошибка: недопустимое числовое значение completedTasks.";
} else if (!Number.isInteger(completedTasks)) {
  errorMessage = "Ошибка: дробное число выполненных задач.";
} else if (completedTasks < 0) {
  errorMessage = "Ошибка: отрицательное число выполненных задач.";
} else if (completedTasks > totalTasks) {
  errorMessage = "Ошибка: некорректное число выполненных задач.";
} else if (typeof dailyLimit === "string") {
  errorMessage = "Ошибка: дневная норма задана строкой.";
} else if (typeof dailyLimit !== "number") {
  errorMessage = "Ошибка: дневная норма должна быть числом.";
} else if (!Number.isFinite(dailyLimit)) {
  errorMessage = "Ошибка: недопустимое числовое значение дневной нормы.";
} else if (!Number.isInteger(dailyLimit)) {
  errorMessage = "Ошибка: дробной дневной нормы быть не должно.";
} else if (dailyLimit < 1) {
  errorMessage = "Ошибка: дневная норма должна быть не меньше 1.";
} else if (dailyLimit > 1000) {
  errorMessage = "Ошибка: превышена верхняя граница дневной нормы.";
}

if (errorMessage !== "") {
  console.log(errorMessage);
} else {
  let remaining = totalTasks - completedTasks;
  let day = 0;

  if (remaining === 0) {
    console.log("Все задачи уже выполнены");
  } else {
    console.log(`Осталось задач: ${remaining}`);

    while (remaining > 0) {
      day++;
      const doneToday = Math.min(dailyLimit, remaining);
      remaining -= doneToday;
      console.log(`День ${day}: выполнено ${doneToday}, осталось ${remaining}`);
    }
  }

  console.log(`Потребуется дней: ${day}`);
}