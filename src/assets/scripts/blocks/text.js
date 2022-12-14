// text.js

// Text

const initText = () => {
  const texts = document.querySelectorAll('.js-text');
  if (!texts) return;
  texts.forEach((text) => {
    const textContent = text.querySelector('.js-text__content');
    const textButton = text.querySelector('.js-text__more-button');
    const maxLines = +text.dataset.maxLines;
    const getMaxHeight = () => {
      return parseInt(window.getComputedStyle(textContent).lineHeight) * maxLines;
    };
    const openTextContent = () => {
      textContent.style.maxHeight = textContent.scrollHeight + 'px';
      textButton.innerText = textButton.dataset.closingText;
    };
    const closeTextContent = () => {
      textContent.style.maxHeight = getMaxHeight() + 'px';
      textButton.innerText = textButton.dataset.openingText;
      if (textContent.scrollHeight <= getMaxHeight()) {
        textButton.classList.add('text__more-button--hidden');
      } else {
        textButton.classList.remove('text__more-button--hidden');
      }
    };

    closeTextContent();
    window.addEventListener('resize', closeTextContent);
    textButton.addEventListener('click', (event) => {
      textContent.classList.toggle('active')
      event.preventDefault();
      if (
        textContent.style.maxHeight == getMaxHeight() + 'px' &&
        textContent.scrollHeight > getMaxHeight()
      ) {
        openTextContent();
      } else {
        closeTextContent();
      }
    });
  });
};

initText();
