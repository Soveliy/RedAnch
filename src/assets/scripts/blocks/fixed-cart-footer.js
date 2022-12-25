// briks.js

// Bricks

const cartFooterFixed = () => {

   const mainPageSection = document.querySelector('.page__main');
   if (!mainPageSection) return;

   if (mainPageSection.classList.contains('form-order')) {
      let elementFooter = document.querySelector('.page__footer');
      let buttonFixeditem = document.querySelector('.button-order-fix').offsetHeight;
      elementFooter.style.marginBottom = buttonFixeditem + "px";
   }

   if (mainPageSection.classList.contains('you-order')) {
      let elementFooter = document.querySelector('.page__footer');
      let buttonFixeditem = document.querySelector('.order-footer').offsetHeight;
      elementFooter.style.marginBottom = buttonFixeditem + "px";
   }





};

cartFooterFixed();

window.addEventListener('resize', function(event){
   cartFooterFixed();
 });