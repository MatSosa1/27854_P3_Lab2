function sum(a, b) {
  return a + b;
}

const num1 = 5;
const num2 = 8;

document.getElementById('out').textContent = `${num1} + ${num2} = ${sum(num1, num2)}`;
