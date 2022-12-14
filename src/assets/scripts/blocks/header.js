
 let winw = window.innerWidth || e.clientWidth || g.clientWidth;
 let isMobile = winw < 1024;
$(".header__productionButton").click(function(){
    $(this).toggleClass("js-active")

    $(this).next().toggleClass("js-active")
    $(this).next().next().toggle(500)
    $("body").toggleClass("js-hidden")
    $(".search-form__button").toggleClass("isLowerIndex")
    if (isMobile){
      $(".header-top__burger").addClass("js-active")
      $(".header").addClass("js-no-opacity")
    }
  })
  $(".catalog-menu__back-btn").click(function(){
    $(".catalog-menu__right,.catalog-menu__main-list-item,.catalog-menu__item-right").removeClass("js-active")

  })
  $(".header-top__burger").click(function(){
    $(this).toggleClass("js-active")
    $(".header__dropdown,.header__defaulButton ").removeClass("js-active")
    $(".header").removeClass("js-no-opacity")
    
  })
  

 

  if (isMobile){
      $(".catalog-menu__main-list-item").removeClass("js-active");
  }
  $(".bgShadow").click(function(){
    $(".header__productionButton,.catalog-menu,.search-form__input,.search-form__input-container,.search-form__button,.search-form__dropdown").removeClass("js-active")
    $(".bgShadow").hide(500)
    $(".search-form__input").blur()
    $(".search-form__input").val("")
    $("body").removeClass("js-hidden")

  })
  $(".search-form__input").focus(function(){
    $(this).addClass("js-active")
    $(this).parent().addClass("js-active")
    $(this).closest(".search-form").find(".search-form__button").addClass("js-active")
    $(this).closest(".search-form").find(".bgShadow").show(500)
    $("body").addClass("js-hidden")
    // $(this).next().next().toggle(500)
  })

  $(".search-form__input").focusout(function(){
    $(this).removeClass("js-active")
    $(this).parent().removeClass("js-active")
    $(this).closest(".search-form").find(".search-form__button").removeClass("js-active")
    $(this).closest(".search-form").find(".bgShadow").hide(500)
    $("body").removeClass("js-hidden")
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
      $("body").removeClass("js-hidden")
    }
});
  
  $(function() {
    let dataItem;
    $('ul.catalog-menu__main-list').on('click', 'li:not(.js-active)', function() {
      if(isMobile){
        
        $(".catalog-menu__right").addClass("js-active")
      }
      
      dataItem = $(this).data("item")
      console.log(dataItem)
        $(this)
        .addClass('js-active').siblings().removeClass('js-active')
        .closest('div.catalog-menu__row').find('div.catalog-menu__item-right').removeClass('js-active');
        $(this).closest('div.catalog-menu__row').find(`div.catalog-menu__item-right[data-list='${dataItem}']`).addClass('js-active')
        // .closest('div.catalog-menu__row').find('div.catalog-menu__item-right').removeClass('js-active').eq($(this).index()).addClass('js-active');
    


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


    window.compareWidth = function (){
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
    window.compareWidth()
    
    

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
            required: "?????? ???????? ?????????????????????? ?????? ????????????????????",
            minlength: "?????????? ???????????? ???????? ?????????????? 4 ??????????????",
            maxlength: "???????????????????????? ?????????? ???????????????? - 16",
        },
          pswd:{
          required: "?????? ???????? ?????????????????????? ?????? ????????????????????",
          minlength: "???????????? ???????????? ???????? ?????????????? 6 ??????????????",
          maxlength: "???????????? ???????????? ???????? ???????????????? 16 ????????????????",
          },
        }
     });
    });
  
  $(".print,.print-link").click(function(e){
    e.preventDefault();
    window.print()
  })
  
  
  