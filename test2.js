document.addEventListener('DOMContentLoaded', function () {
    const minusButtons = document.querySelectorAll('.minus-btn');
    const plusButtons = document.querySelectorAll('.plus-btn');
    const quantityInputs = document.querySelectorAll('.quantity-input');

    minusButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            let currentValue = parseInt(quantityInputs[index].value);
            if (currentValue > 1) {
                quantityInputs[index].value = currentValue - 1;
            }
        });
    });

    plusButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            let currentValue = parseInt(quantityInputs[index].value);
            quantityInputs[index].value = currentValue + 1;
        });
    });
});
