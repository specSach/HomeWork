

// калькулятор товара

document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.content__numbers');
    
    counters.forEach(counter => {
        const minusBtn = counter.querySelector('.btn__number-minus');
        const plusBtn = counter.querySelector('.btn__number-plus');
        const valueDisplay = counter.querySelector('.content__number');
        
        let currentValue = 0;
        const minValue = 0;
        const maxValue = 10;
        
        function updateValue() {
            valueDisplay.textContent = currentValue;
            
            minusBtn.disabled = currentValue <= minValue;
            plusBtn.disabled = currentValue >= maxValue;
        }
        
        plusBtn.addEventListener('click', function() {
            if (currentValue < maxValue) {
                currentValue++;
                updateValue();
            }
        });
        
        minusBtn.addEventListener('click', function() {
            if (currentValue > minValue) {
                currentValue--;
                updateValue();
            }
        });
        
        updateValue();
    });
});