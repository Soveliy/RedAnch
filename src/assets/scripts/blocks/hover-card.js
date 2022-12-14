const Catalog = () => {
   const catalogItems = document.querySelectorAll('.order-card');
   if (!catalogItems) return;

   catalogItems.forEach((catalogItem) => {
      if (catalogItem.classList.contains('go-js-hover-catalog')) {
         catalogItem.addEventListener('mouseenter', e => {
            catalogItem.classList.add('active')
         });

         catalogItem.addEventListener('mouseleave', e => {
            catalogItem.classList.remove('active')
         });
      }
   });

};

Catalog();