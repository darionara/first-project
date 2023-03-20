const minus = document.getElementById('counter__sign--minus');
const plus = document.getElementById('counter__sign--plus');
const inputField = document.getElementById('counter__input');

const decrement = () => {
    inputField.value--;
}

const increment = () => {
    inputField.value++;
}

minus.addEventListener('click', decrement);
plus.addEventListener('click', increment);
