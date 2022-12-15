// briks.js

// Bricks

const cartFooterFixed = () => {

   const orderPage = document.querySelector('.you-order');
   if (!orderPage) return;

   let elementFooter = document.querySelector('.page__footer');
   let heightBody = document.querySelector('.body').offsetHeight;
   let orderFooter = orderPage.querySelector('.order-footer');

   let Visible = function (target) {
      // Все позиции элемента
      let targetPosition = {
         top: window.pageYOffset + target.getBoundingClientRect().top,
         left: window.pageXOffset + target.getBoundingClientRect().left,
         right: window.pageXOffset + target.getBoundingClientRect().right,
         bottom: window.pageYOffset + target.getBoundingClientRect().bottom
      },
         // Получаем позиции окна
         windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
         };

      if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
         targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
         targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
         targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа

         orderFooter.classList.add('order-footer--visible');
         activeSize = heightBody - elementFooter.getBoundingClientRect().top;
         orderFooter.style.marginBottom = activeSize + "px";
      } else {
         // Если элемент не видно, то запускаем этот код
         orderFooter.classList.remove('order-footer--visible');
         orderFooter.style.marginBottom = 0;
      };
   };

   // Запускаем функцию при прокрутке страницы
   window.addEventListener('scroll', function () {
      Visible(elementFooter);
   });

   // А также запустим функцию сразу. А то вдруг, элемент изначально видно
   Visible(elementFooter);
};

cartFooterFixed();