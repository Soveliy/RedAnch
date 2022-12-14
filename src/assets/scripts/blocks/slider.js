
    // slider.js

    // Slider

    const initSlider = () => {

        const sliders = document.querySelectorAll('.js-slider');
        if (!sliders) return;
        
        sliders.forEach((slider) => {

            let sliderObj = null;

            // Init Slider Obj
            switch(slider.dataset.sliderName) {

                case 'popup-slider':
                    sliderObj = new Swiper(slider, {
                        watchSlidesProgress: true,
                        navigation: {
                            nextEl: slider.closest('.js-slider').querySelector('.js-slider__button--r'),
                            prevEl: slider.closest('.js-slider').querySelector('.js-slider__button--l'),
                        },
                    });
                    break;

            }

        });
        
    };

    initSlider();