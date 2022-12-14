const Counter = () => {
   const counters = document.querySelectorAll('.counter');
   if (!counters) return;

   counters.forEach((counter) => {
      let quantityValue = counter.querySelector('.counter__input');
      let valueBtnsMunus = counter.querySelector('.counter__btn--down');
      let valueBtnsPlus = counter.querySelector('.counter__btn--up');

      valueBtnsMunus.addEventListener('click', function () {
         if (quantityValue.value > 1) {
            quantityValue.value = quantityValue.value - 1;
         }
      });
      valueBtnsPlus.addEventListener('click', function () {
         quantityValue.value = +quantityValue.value + 1;
      });
   });
};

Counter();