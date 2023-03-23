const minus = document.getElementById('counter-minus');
const plus = document.getElementById('counter-plus');
const inputField = document.getElementById('counter-input');

const decrement = () => {
    inputField.value--;
}

const increment = () => {
    inputField.value++;
}

minus.addEventListener('click', decrement);
plus.addEventListener('click', increment);
