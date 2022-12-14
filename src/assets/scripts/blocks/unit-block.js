    // unit-block.js
//const mobile = document.querySelector('.mobile')
//if (document.documentElement.clientWidth > 1366) {
//  mobile.classList.add('js-unit-block')
//}
    // Unit Block

    const initUnitBlock = () => {
      // const unitBlocks = document.querySelectorAll('.js-unit-block');
    
      // if (!unitBlocks) return;

      // const handleUnitBlock = (unitBlock) => {
      //   const unitBlockButton = unitBlock.querySelector('.js-unit-block__button');
      //   const unitBlockContent = unitBlock.querySelector('.js-unit-block__content');
        
      //   unitBlockContent.style.height = unitBlockContent.scrollHeight + 'px';

      //   const handleClick = () => {
      //     if (unitBlock.classList.contains('unit-block--closed')) {
      //       unitBlock.classList.remove('unit-block--closed');
      //       unitBlockContent.style.height = unitBlockContent.scrollHeight + 'px';
      //     } else {
      //       unitBlock.classList.add('unit-block--closed');
      //       unitBlockContent.style.height = 0 + 'px';
      //     }
      //   }
      //   unitBlockButton.addEventListener('click', handleClick);
      // }

      const $unitBlock = $('.js-unit-block');
      const $unitBlockButton = $('.js-unit-block__button');
      const $unitBlockContent = $('.js-unit-block__content')

      function handleUnitBlock () {
        const $unitBlock = $(this).closest('.js-unit-block');
        const $unitBlockContent = $unitBlock.find('.js-unit-block__content');
        const contentHeight = `${$unitBlockContent.prop('scrollHeight')}px`

        if ($unitBlock.hasClass('unit-block--closed')) {
          $unitBlock.removeClass('unit-block--closed');
          $unitBlockContent.css('height', contentHeight);
        } else {
          $unitBlock.addClass('unit-block--closed');
          $unitBlockContent.css('height', 0);
        }
      }

      function handleResize () {
        if ($(window).width() > 1366) {
          $unitBlockButton.off('click').on('click', handleUnitBlock)
          $('#modal-accessories').removeAttr('style')
        } else {
          $unitBlockButton.off('click')
          $unitBlock.removeClass('unit-block--closed')
          $unitBlockContent.removeAttr('style')
        }
      }

      $(window).on('resize', throttle(handleResize, 150))
      
      if ($(window).width() > 1366) {
        $unitBlockButton.on('click', handleUnitBlock)
      }
    };

initUnitBlock();
    
  //! Modal-button-click

  // prompt

function prompt() {
  $('.prompt-button').on('click', function () {
    $(this).toggleClass('active');
    $('.prompt').toggleClass('active');
  });

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.prompt-button, .prompt').length) {
      $('.prompt').removeClass('active');
    }
    e.stopPropagation();
  });

  $('.prompt__button').on('click', function () { 
    $('.prompt').removeClass('active');
  })
}

prompt()
