// choice-box.js

// choice

const ChoiceBox = () => {
   const boxQuantitys = document.querySelectorAll('.js-choice-box');
   if (!boxQuantitys) return;

   boxQuantitys.forEach((boxQuantity) => {
      let dropBtn = boxQuantity.querySelector('.choice-box__btn');
      let choiceList = boxQuantity.querySelector('.choice-box__list');
      let choiceHeader = boxQuantity.querySelector('.choice-box__header');

      choiceHeader.addEventListener('click', choiceOpen);

      function choiceOpen() {

         boxQuantity.classList.toggle('choice-box--active');

         if (boxQuantity.classList.contains('choice-box--active')) {
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
                     console.log(choiceTitleName);
                     console.log(activeAnchor);
                     choiceTitleName.textContent = activeAnchor;
                     boxQuantity.classList.remove('choice-box--active');
                     dropBtn.classList.remove('choice-box__btn--active');
                     choiceList.style.maxHeight = 0;
                  } else {
                     let choiceTitleName = this.closest('.choice-box').querySelector('.choice-box__title');
                     choiceTitleName.value = choiceName;
                  }
               }
            })
         } else {
            choiceList.style.maxHeight = 0;
            dropBtn.classList.remove('field__btn--active');
         }
      }
   });
};

ChoiceBox();
