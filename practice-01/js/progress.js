"use strict";

const totalTasks = 12;
const completedTasks = 5;

function validateCount(value, name) {
  if (typeof value === "string") {
    return `Ошибка: вместо числа передана строка (${name}).`;
  }
  if (typeof value !== "number") {
    return `Ошибка: ${name} должно быть числом.`;
  }
  if (!Number.isFinite(value)) {
    return `Ошибка: недопустимое числовое значение (${name}).`;
  }
  if (!Number.isInteger(value)) {
    return `Ошибка: дробное количество (${name}).`;
  }
  if (value < 0) {
    return `Ошибка: отрицательное количество (${name}).`;
  }
  return null;
}

function getError(total, completed) {
  const totalError = validateCount(total, "totalTasks");
  if (totalError) {
    return totalError;
  }
  const completedError = validateCount(completed, "completedTasks");
  if (completedError) {
    return completedError;
  }
  if (total > 1000) {
    return "Ошибка: превышена верхняя граница (максимум 1000 задач).";
  }
  if (completed > total) {
    return "Ошибка: выполнено больше, чем существует.";
  }
  return null;
}

function getStatus(total, completed) {
  if (completed === 0) {
    return "Не начато";
  }
  if (completed === total) {
    return "Завершено";
  }
  return "В работе";
}

function printSummary(total, completed) {
  const error = getError(total, completed);
  if (error) {
    console.log(error);
    return;
  }

  if (total === 0 && completed === 0) {
    console.log("Задач пока нет");
    return;
  }

  const remaining = total - completed;
  const percent = (completed / total * 100).toFixed(1);
  const status = getStatus(total, completed);

  console.log(`Всего задач: ${total}`);
  console.log(`Выполнено: ${completed}`);
  console.log(`Осталось: ${remaining}`);
  console.log(`Прогресс: ${percent}%`);
  console.log(`Статус: ${status}`);
}

printSummary(totalTasks, completedTasks);