$(".header__productionButton").click(function(){
    $(this).toggleClass("js-active")
    $(this).next().toggleClass("js-active")
    $(this).next().next().toggle(500)
  })
  $(".bgShadow").click(function(){
    $(".header__productionButton,.catalog-menu,.search-form__input,.search-form__input-container,.search-form__button,.search-form__dropdown").removeClass("js-active")
    $(".bgShadow").hide(500)
    $(".search-form__input").blur()
    $(".search-form__input").val("")

  })
  $(".search-form__input").focus(function(){
    $(this).addClass("js-active")
    $(this).parent().addClass("js-active")
    $(this).closest(".search-form").find(".search-form__button").addClass("js-active")
    $(this).closest(".search-form").find(".bgShadow").show(500)
    // $(this).next().next().toggle(500)
  })

  $(".search-form__input").focusout(function(){
    $(this).removeClass("js-active")
    $(this).parent().removeClass("js-active")
    $(this).closest(".search-form").find(".search-form__button").removeClass("js-active")
    $(this).closest(".search-form").find(".bgShadow").hide(500)
    // $(this).next().next().toggle(500)
  })
  $(".search-form__input").keypress(function(){
    $(this).closest(".search-form").find(".search-form__dropdown").addClass("js-active")
  })
  
  document.addEventListener('keydown', function (e) {
    if(e.keyCode === 27){
      $(".header__productionButton,.catalog-menu,.search-form__input,.search-form__input-container,.search-form__button,.search-form__dropdown").removeClass("js-active")
      $(".bgShadow").hide(500)
      $(".search-form__input").blur()
      $(".search-form__input").val("")
    }
});
  
  $(function() {
  
    $('ul.catalog-menu__main-list').on('click', 'li:not(.js-active)', function() {
     
      $(this)
        .addClass('js-active').siblings().removeClass('js-active')
        .closest('div.catalog-menu__row').find('div.catalog-menu__item-right').removeClass('js-active').eq($(this).index()).addClass('js-active');
    });
    
  });

  let header = $('.header'),
  scrollPrev = 0;

  $(window).scroll(function() {
    let scrolled = $(window).scrollTop();
  
    if ( scrolled > 100 && scrolled > scrollPrev ) {
      header.addClass('header--out');
   
    } else {
      header.removeClass('header--out');
    
    }
    scrollPrev = scrolled;
  });

     $('[name="phone"]').mask('+7 (999) 999 99-99');
     $('[name="date"]').mask('00.00.0000');
    window.initPhoneMask = function () {
      $('[name="phone"],.defaultModal__input-phone').mask('+7 (999) 999 99-99');
      $('[name="date"],.defaultModal__input-date').mask('00.00.0000');
    }
    window.initPhoneMask();


    function compareWidth(){
      let widthTitle = 0;
      $(".p-list__items").each(function () {
        let currentWidth = parseInt($(this).find("a.p-list__item").width());
        if(currentWidth > widthTitle) {
          widthTitle = currentWidth;
        };
      });

      let buttonsWidth = $(".p-list__item:last-child").width();
      // $(".p-list__head:last-child").css("min-width", buttonsWidth + "px")
     $("a.p-list__item").css("width", widthTitle  + "px")


     $('.p-list__head').each(function (index, value){
      let widthHeadCell = $(".p-list__item").eq(index).width();
        console.log(widthHeadCell)
      $(".p-list__head").eq(index).css("width", widthHeadCell + "px")
    })
    }
    compareWidth()
    
    

    window.addEventListener('resize', function(event){

      compareWidth()
    });

    $( "form" ).each(function( ) {
      $($(this)).validate({
        rules:{
           name:{
             required: true,
             minlength: 4,
             maxlength: 16,
           },
           pswd:{
             required: true,
             minlength: 6,
             maxlength: 16,
           },
        },
        messages:{
          login:{
            required: "Это поле обязательно для заполнения",
            minlength: "Логин должен быть минимум 4 символа",
            maxlength: "Максимальное число символов - 16",
        },
          pswd:{
          required: "Это поле обязательно для заполнения",
          minlength: "Пароль должен быть минимум 6 символа",
          maxlength: "Пароль должен быть максимум 16 символов",
          },
        }
     });
    });
  
  $(".print,.print-link").click(function(e){
    e.preventDefault();
    window.print()
  })
  
  
  