let input = document.querySelector('input');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);

// input.addEventListener('click', (e) => {
//   input.style.backgroundColor = 'blue'; // Apply blue background color to the input field when input is detected
// });

arr.forEach(button => {
  button.addEventListener('click', (e) => {
    let operator = e.target.innerHTML;
    input.style.border= '1px solid #3A3B3C'
    let lastChar = string.charAt(string.length - 1);

    if (operator === '=') {
      string = eval(string);
      input.value ="Ans: "+ string;
      input.style.border= '1px solid #E4E6EB'; // Reset the background color
      string = String(string); // Reassign the evaluated value to the string
    } else if (operator === 'AC') {
      string = "";
      input.value = string;
      input.style.border= 'none';; // Reset the background color
    } else if (operator === 'DEL') {
      if (string === "") {
        return;
      }
      string = string.substring(0, string.length - 1);
      input.value = string;
      input.style.backgroundColor = ''; // Reset the background color
    } else {
      if ((isOperator(lastChar) || lastChar === "") && isOperator(operator)) {
        string += "0" + operator;
      } else {
        string += operator;
      }
      input.value = string;
      input.style.backgroundColor = ''; // Reset the background color
    }
  });
});

// Add event listener to the AC button
document.getElementById('AC').addEventListener('click', () => {
  input.style.backgroundColor = ''; // Reset the background color
});

function isOperator(char) {
  return ['+', '-', '*', '/', '%'].includes(char);
}
