let calculator = {
  read(a, b) {
    calculator.firstCount = a;
    calculator.secondCount = b;
  },
  sum() {
    return sum = calculator.firstCount + calculator.secondCount;
  },
  mul() {
    return sum = calculator.firstCount * calculator.secondCount;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
