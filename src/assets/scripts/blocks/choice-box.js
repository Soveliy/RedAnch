// choice-box.js

// choice

const ChoiceBox = () => {
   const boxQuantitys = document.querySelectorAll('.js-choice-box');

   if (!boxQuantitys) return;

   boxQuantitys.forEach((boxQuantity) => {
      let dropBtn = boxQuantity.querySelector('.choice-box__btn');
      let choiceWrapper = boxQuantity.querySelector('.choice-box__wrapper');
      let choiceList = boxQuantity.querySelector('.choice-box__list');
      let choiceHeader = boxQuantity.querySelector('.choice-box__header');

      choiceHeader.addEventListener('click', choiceOpen);

      function choiceOpen() {

         boxQuantity.classList.toggle('choice-box--active');

         if (boxQuantity.classList.contains('choice-box--active')) {
            choiceWrapper.classList.add('choice-box__wrapper--active');

            choiceList.style.maxHeight = choiceList.scrollHeight + "px";

            const elementAnchors = document.querySelectorAll('.go-js-choice-item');
            dropBtn.classList.add('choice-box__btn--active');

            elementAnchors.forEach((elementAnchor) => {
               const choiceName = document.querySelector('.choice-box__title').textContent;
               const thisAnchor = elementAnchor.querySelector('.choice-box__input');
               elementAnchor.onclick = newTitle;

               function newTitle() {
                  if (thisAnchor.checked) {
                     let activeAnchor = this.querySelector('.choice-box__name').textContent;
                     let choiceTitleName = this.closest('.choice-box').querySelector('.choice-box__title');
                     choiceTitleName.textContent = activeAnchor;
                     boxQuantity.classList.remove('choice-box--active');
                     dropBtn.classList.remove('choice-box__btn--active');
                     choiceList.style.maxHeight = 0;
                     choiceWrapper.classList.remove('choice-box__wrapper--active');
                  } else {
                     let choiceTitleName = this.closest('.choice-box').querySelector('.choice-box__title');
                     choiceTitleName.value = choiceName;
                  }
               }
            })
         } else {
            choiceList.style.maxHeight = 0;
            dropBtn.classList.remove('field__btn--active');
            choiceWrapper.classList.remove('choice-box__wrapper--active');
         }
      }
   });
};

ChoiceBox();


jQuery(function($){
	$(document).mouseup( function(e){ // событие клика по веб-документу
		var div = $( ".js-choice-box" ); // тут указываем ID элемента
		if ( !div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
            $(".js-choice-box").removeClass("choice-box--active")
            $(".choice-box__wrapper").removeClass("choice-box__wrapper--active")
            
            
		}
	});
});
