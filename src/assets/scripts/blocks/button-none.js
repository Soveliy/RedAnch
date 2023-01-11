//const button = document.querySelector('.filter__show-more'); 
//const active_button = document.querySelector('.categories');
//button.addEventListener('click', function(){
//    active_button.classList.toggle('categories')
//})


const catalogItems = document.querySelectorAll('.catalog-item');
if (!catalogItems) return;

catalogItems.forEach((catalogItem) => {
   const btnOpenCatalog = catalogItem.firstElementChild.querySelector('.go-js-drop-catalog')
   btnOpenCatalog.addEventListener('click', listOpen);

   function listOpen(e) {
      let listHeader = btnOpenCatalog.parentNode;
      listHeader.classList.toggle('cat-header--active');
      btnOpenCatalog.classList.toggle('cat-header__btn--active');

      let subList = listHeader.closest('.catalog-item').querySelector('.sub-catalog');

      subList.classList.toggle('active');

      if (btnOpenCatalog.classList.contains('cat-header__btn--active')) {
         btnOpenCatalog.firstElementChild.innerText = "Скрыть";
      } else {
     

         
         let listLenght = btnOpenCatalog.parentElement.nextElementSibling.children.length
         btnOpenCatalog.firstElementChild.innerText = "Показать ещё " + listLenght;
      }

      if (subList.classList.contains('active')) {
         subList.style.maxHeight = subList.scrollHeight + "px";
      } else {
         subList.style.maxHeight = 0;
      }
   }
});