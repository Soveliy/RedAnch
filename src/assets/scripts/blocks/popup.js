// popup.js

// Popup

const initPopup = () => {

    const body = document.querySelector('.js-body');

    const popups = document.querySelectorAll('.js-popup');
    const openPopupButtons = document.querySelectorAll('.js-open-popup-button');
    if (!popups || !openPopupButtons) return;

    const openPopup = (popup) => {
        body.classList.add('body--locked');
        popup.classList.add('body__popup--active');
        popup.classList.add('body__popup--show-animation');
        const animationEnd = () => {
            popup.classList.remove('body__popup--show-animation');
            popup.removeEventListener('animationend', animationEnd);
        };
        popup.addEventListener('animationend', animationEnd);
    };

    const closePopup = (popup) => {

        popup.classList.add('body__popup--hide-animation');

        const animationEnd = () => {
            popup.classList.remove('body__popup--hide-animation');
            popup.classList.remove('body__popup--active');
            body.classList.remove('body--locked');
            popup.removeEventListener('animationend', animationEnd);
        };

        popup.addEventListener('animationend', animationEnd);

    };

    popups.forEach((popup) => {

        popup.querySelector('.js-popup__button').addEventListener('click', (event) => {
            event.preventDefault();
            closePopup(popup);
        });

        popup.addEventListener('mousedown', (event) => {
            if (!event.target.closest('.js-popup__block')) {
                event.preventDefault();
                closePopup(popup);
            }
        });

    });

    document.addEventListener('keydown', (event) => {
        if (event.key == 'Escape') {
            event.preventDefault();
            popups.forEach((popup) => {
                if (popup.classList.contains('body__popup--active')) {
                    closePopup(popup);
                }
            });
        }
    });

    openPopupButtons.forEach((openPopupButton) => {
        openPopupButton.addEventListener('click', () => {
            popups.forEach((popup) => {
                if (popup.dataset.popupName == openPopupButton.dataset.popupName) {
                    openPopup(popup);
                }
            });
        });
    });

};

//initPopup();