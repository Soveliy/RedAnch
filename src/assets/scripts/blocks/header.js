
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
    
    $(".main-menu").slideToggle(800)
    $(this).toggleClass("js-active")
    $(".header__dropdown,.header__defaulButton,.dropdown-menu").removeClass("js-active")
    $(".header").removeClass("js-no-opacity")
    $(".header-top").removeClass("isBigIndex")
    $(".header__search-form.search-form").removeClass("js-active");
    $(".search-form__input").focus();
    $("body").removeClass("js-hidden")
    $(".main-menu__item--parent").removeClass("js-active")
    if (isMobile){
      
      if ($(this).hasClass("js-active")){
        $("body").addClass("js-hidden")
        $(".header-top__items").addClass("js-opacity")
      } else {
        $("body").removeClass("js-hidden")
      
        $(".header-top__items").removClass("js-opacity")
      }
    
      // $(".search-form__input-container").hide();
      // $(".search-form__input").removeClass("js-active")
    }
  })
  

 

  if (isMobile){
      $(".catalog-menu__main-list-item").removeClass("js-active");
  }
  $(".bgShadow").click(function(){
    $(".header__productionButton,.catalog-menu,.search-form__input,.search-form__input-container,.search-form__button,.search-form__dropdown,.dropdown-menu").removeClass("js-active")
    $(".bgShadow").hide(500)
    $(".search-form__input").blur()
    $(".search-form__input").val("")
    $("body").removeClass("js-hidden")
    $(".main-menu__item--parent").removeClass("js-active")

  })


  $(".header__search-button--mobile").click(function(){
    $(".header-top").addClass("isBigIndex")
    $(".header__search-form.search-form").addClass("js-active");
    $(".search-form__input").focus();
    $(".header-top__burger").addClass("js-active")
    $(".header").addClass("js-no-opacity")
    $("body").addClass("js-hidden")
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
    // $(this).removeClass("js-active")
    // $(this).parent().removeClass("js-active")
    // $(this).closest(".search-form").find(".search-form__button").removeClass("js-active")
    // $(this).closest(".search-form").find(".bgShadow").hide(500)
    // $("body").removeClass("js-hidden")
    // $(this).next().next().toggle(500)
  })
  $(".search-form__input").keypress(function(){
    $(this).closest(".search-form").find(".search-form__dropdown").addClass("js-active")
  })
  
  document.addEventListener('keydown', function (e) {
    if(e.keyCode === 27){
      $(".header__productionButton,.catalog-menu,.search-form__input,.search-form__input-container,.search-form__button,.search-form__dropdown,.dropdown-menu").removeClass("js-active")
      $(".bgShadow").hide(500)
      $(".search-form__input").blur()
      $(".search-form__input").val("")
      $("body").removeClass("js-hidden")
      $(".main-menu__item--parent").removeClass("js-active")
    }
});
  $(".main-menu__item--parent a").click(function(e){
    $(this).parent().toggleClass("js-active")
    $(this).closest(".main-menu__item--parent").find(".bgShadow").toggle(500)
    e.preventDefault()
    $(this).next().toggleClass("js-active")
    if (isMobile){
      $(this).closest(".main-menu__item--parent").siblings().removeClass("js-active")
    }
  })
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

    // $( "form" ).each(function( ) {
    //   $($(this)).validate({
    //     rules:{
    //        name:{
    //          required: true,
    //          minlength: 4,
    //          maxlength: 16,
    //        },
    //        pswd:{
    //          required: true,
    //          minlength: 6,
    //          maxlength: 16,
    //        },
    //     },
    //     messages:{
    //       login:{
    //         required: "Это поле обязательно для заполнения",
    //         minlength: "Логин должен быть минимум 4 символа",
    //         maxlength: "Максимальное число символов - 16",
    //     },
    //       pswd:{
    //       required: "Это поле обязательно для заполнения",
    //       minlength: "Пароль должен быть минимум 6 символа",
    //       maxlength: "Пароль должен быть максимум 16 символов",
    //       },
    //     }
    //  });
    // });
  
  $(".print,.print-link").click(function(e){
    e.preventDefault();
    window.print()
  })
  
  
  
  $('body').on('click', '.menu-mobile__item--sort > a', function() {
    $(".sortMenu").addClass("isActive");
 });

 $('body').on('click', '.sortMenu__item-link', function(e) {
  e.preventDefault();
  $(".sortMenu").removeClass("isActive");
  $(".sortMenu__item-link").removeClass("isActive");
  $(this).addClass("isActive");
});


jQuery(function($){
	$(document).mouseup( function(e){ // событие клика по веб-документу
		var div = $( ".sortMenu__wrap" ); // тут указываем ID элемента
		if ( !div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
          $(".sortMenu").removeClass("isActive");
		}
	});
});

jQuery(function($){
	$(document).mouseup( function(e){ // событие клика по веб-документу
		var div = $( ".card-added .detailBottom" ); // тут указываем ID элемента
		if ( !div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
          $(".card-added").removeClass("isTrue");
		}
	});
});



