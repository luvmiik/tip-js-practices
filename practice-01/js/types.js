"use strict";

// Вспомогательная функция: печатает выражение, значение и тип результата.
function check(number, expression, value) {
  console.log(`--- ${number}. ${expression} ---`);
  console.log("Значение:", value);
  console.log("Тип результата:", typeof value);
}

// 1. Строка + число: оператор + выполняет конкатенацию
const concatResult = "8" + 2;
check(1, '"8" + 2', concatResult);

// 2. Оператор - всегда числовой, строка приводится к числу
const subtractResult = "8" - 2;
check(2, '"8" - 2', subtractResult);

// 3. Явное преобразование строки в число, затем сложение
const numberPlusResult = Number("8") + 2;
check(3, 'Number("8") + 2', numberPlusResult);

// 4. Сравнение двух строк: лексикографическое (посимвольное)
const stringCompareResult = "12" > "3";
check(4, '"12" > "3"', stringCompareResult);

// 5. Строгое равенство: типы разные, приведения нет
const strictEqualResult = 12 === "12";
check(5, '12 === "12"', strictEqualResult);

// 6. Пустая строка (после trim пустая) приводится к 0
const emptyToNumber = Number("");
check(6, 'Number("")', emptyToNumber);

// 7. Нечисловой текст даёт NaN
const textToNumber = Number("text");
check(7, 'Number("text")', textToNumber);

// 8. Любая непустая строка при приведении к Boolean даёт true
const nonEmptyToBoolean = Boolean("false");
check(8, 'Boolean("false")', nonEmptyToBoolean);

// 9. typeof null: значение выражения и тип этого значения — разные вещи
const typeofNullResult = typeof null;
console.log("--- 9. typeof null ---");
console.log("Значение выражения typeof null:", typeofNullResult);
console.log("Тип результата выражения:", typeof typeofNullResult);
console.log("Для сравнения, null === null:", null === null);

// 10. typeof NaN
const typeofNaNResult = typeof NaN;
console.log("--- 10. typeof NaN ---");
console.log("Значение выражения typeof NaN:", typeofNaNResult);
console.log("Тип результата выражения:", typeof typeofNaNResult);
console.log("Проверка Number.isNaN(NaN):", Number.isNaN(NaN));