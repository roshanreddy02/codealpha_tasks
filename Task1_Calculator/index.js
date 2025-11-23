const display = document.getElementById('display');
let isDarkMode = true;

function appendNumber(num) {
  display.value += num;
}

function appendOperator(op) {
  const lastChar = display.value.slice(-1);
  if (!['+', '-', '*', '/'].includes(lastChar)) display.value += op;
}

function appendFunction(func) {
  display.value += func;
}

function appendConstant(c) {
  display.value += c;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

function toggleMode() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('light', !isDarkMode);
}

// Keyboard support
document.addEventListener('keydown', (e) => {
  if (!isNaN(e.key) || e.key === '.') appendNumber(e.key);
  else if (['+', '-', '*', '/'].includes(e.key)) appendOperator(e.key);
  else if (e.key === 'Enter' || e.key === '=') calculate();
  else if (e.key === 'Backspace') deleteLast();
  else if (e.key === 'Escape') clearDisplay();
  else if (e.key === '(' || e.key === ')') appendNumber(e.key);
});