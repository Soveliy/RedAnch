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

     $('.name=["phone"]').mask('+7 (999) 999 99-99');