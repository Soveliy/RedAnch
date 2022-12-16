// script.js

// Script

// Plugins
@@include('./plugins/lazysizes.min.js');
@@include('./plugins/fslightbox.js');
@@include('./plugins/swiper-bundle.min.js');
@@include('./libraries/jquery.arcticmodal.js');

// Blocks

document.addEventListener('DOMContentLoaded', () => {
   @@include('./blocks/main-page.js');
   @@include('./blocks/tabs.js');
   @@include('./blocks/bricks.js');
   @@include('./blocks/page.js');
   @@include('./blocks/popup.js');
   @@include('./blocks/unit-block.js');
   @@include('./blocks/modal-popup.js');
   @@include('./blocks/modals.js');
   @@include('./blocks/slider.js');
   @@include('./blocks/button-none.js');
   @@include('./blocks/table-header-scroll.js');
   @@include('./blocks/choice-box.js');
   @@include('./blocks/counter.js');
   @@include('./blocks/hover-card.js');
   @@include('./blocks/fixed-cart-footer.js');
   @@include('./blocks/textarea-height.js');
   var swiper = new Swiper(".mySwiper", {
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
   });
   @@include('./blocks/text.js');
   @@include('./blocks/header.js');



});
