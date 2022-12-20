var Animations = function() {
    var smoothDuration = 550;// 1.5с - время которое требуется что бы закончить анимация при скроле мышкой.чем больше тем долшье продолжительнсоть анимации
    var scrollTime = .3;			//Scroll time
    var scrollDistance = 120;		//Distance
    var offset_value_1 = 10;
    var sklr;
    var controller;
    var initIntro = false;
    var loaded = $.Deferred();
    var allImgsCount = 0;
    var introLoaded = false;
    var allImageLoaded = $.Deferred();
    var e = document.documentElement;
    var g = document.getElementsByTagName('body')[0];
    var winw = window.innerWidth || e.clientWidth || g.clientWidth;
    var isTablet = winw < 1024;
    var isMobile = winw < 1024;
    var desktopLoadedFunc = false;
  
  
    let scene_5 = {
      target: '#section_5',
      target_2: '.end_of_seq',
      count: 338,
      src: './assets/images/chain/comp2/',
      type: '.png',
      wrap: document.querySelector('#preloadImagesContainer'),
      // canvas: document.querySelector('#section_5_canvas'),
      images: {},
      firstImage: true,
      imgHasWrap: true,
    };


    let scene_cst = {
      target: '#mobile-secvention',
      target_2: '#categoriesMain',
      count: 10,
      src: './assets/images/mobile_anch2/',
      type: '.png',
      wrap: document.querySelector('#mobile-anchor'),
      // canvas: document.querySelector('#section_5_canvas'),
      images: {},
      firstImage: true,
      imgHasWrap: true,
    };
    
 


   
 
 
    var loadImgsHandler = function(objects, maxImageLenght) {
      if (objects) {
        var count = 0;
        for (var k in objects) {
          if (objects.hasOwnProperty(k) && objects[k].wrap) {
            var object = objects[k];
            var start = object.i ? object.i : 1;
            for (var i = start; i < object.count + 1; i++) {
              var image = new Image();
              image.index = i;
              image.k = k;
              image.object = object;
              image.array = object.images;
              image.firstImage = object.firstImage;
              image.i = start;
  
              if (object.canvas) {
                image.canvas = object.canvas;
              }
  
              image.onload = function() {
                if (!this.canvas) {
                  if (this.object.imgHasWrap) {
                    var div = document.createElement('div');
                    div.classList.add('img_' + this.index);
                    div.appendChild(this);
                    this.object.wrap.appendChild(div);
                  } else {
                    this.object.wrap.appendChild(this);
                    this.classList.add('img_' + this.index);
                  }
                } else {
                  if (this.index === this.i) {
                    this.canvas.height = this.height;
                    this.canvas.width = this.width;
                    if (this.firstImage) {
                      this.canvas.getContext('2d').drawImage(this, 0, 0, this.width, this.height);
                    }
                  }
                  objects[this.k].images[this.index] = this;
                }
  
                count++;
                let counterPng;
                if  (count > 25){
                    counterPng = true
                    console.log("more 5")
                }

                if (allImgsCount === counterPng && !isTablet) {
                  allImageLoaded.resolve();
                }
              };
  
              if (!isTablet) {
                image.classList.add('is-visible');
              }
              if (i > 25){
                object.type = ".jpg"
              }
             if (!isTablet && i < 26){
             } else {
              image.src = object.src + i + object.type;
             }
            
            }
          }
        }
      }
    };
  
    var setLoadImages = function() {
    //   var intro = document.querySelector('.c-intro');
      var objects = [];
  
      if (isTablet){
        
        objects =[scene_cst];
      } else {
        objects =[scene_5];
      }
       
      
      // objects.map(function(item) {
      //   console.log(item)
      //   allImgsCount += item.count;
      //   if (item.i) {
      //     allImgsCount -= item.i;
      //   }
      // });
  
      loadImgsHandler(objects);
    };
  
    var setVisibleClassImages = function() {
    //   scene_5.wrap.className = 'c-manager frame_1';
      // scene_cst.wrap.className = 'c-manager frame_1';
    };
  
    var removeAllImageVisible = function() {
      $('img').removeClass('is-visible');
    };
  
    var outerWrapManager = 0;
    var outerWrapManagerSection = 0;
  
    var resizeManagerSizes = function() {
      var managerWrap = $('.c-manager__wrap');
      var sectionWrap = $('.c-fifth-section__wrap');
      var isbottom = managerWrap.hasClass('bottom');
  
      if (isbottom) {
        managerWrap.removeClass('bottom');
      }
  
      outerWrapManager = managerWrap.outerHeight() + managerWrap.offset().top;
      
      outerWrapManagerSection = sectionWrap.outerHeight() + sectionWrap.offset().top;
  
      if (isbottom) {
        managerWrap.addClass('bottom');
      }
    };
  
    var sequention_mob = function() {

      var duration_scene_cst = $(scene_cst.target).outerHeight() + $(scene_cst.target_2).outerHeight() - $(scene_cst.wrap).outerHeight();
      var offset_scene_cst = duration_scene_cst / scene_cst.count;
      var offset_top_scene_cst = $(scene_cst.wrap).outerHeight();
  
  
      for (var i = 1, l = scene_cst.count; i <= l; i++) {
        var scene_for_cst = new ScrollMagic.Scene({
          triggerElement: scene_cst.target,
          offset: (i * offset_scene_cst) + offset_top_scene_cst + 200,
          reverse: true,
          triggerHook: 1,
        })
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller)
          
            scene_for_cst.index = i;
  
            scene_for_cst.on('start', function(event) {
              $("body").addClass("pinned")
          if (scene_cst.canvas) {
            //scene_5.wrap.className = 'c-manager frame_' + this.index;
            if (this.index <= scene_cst.count && scene_cst.images[this.index]) {
              scene_cst.canvas.getContext('2d').drawImage(scene_cst.images[this.index], 0, 0, scene_cst.canvas.width, scene_cst.images[this.index].height);
            }
          } else {
            if (this.index <= scene_cst.count) {
              // $("#mobile-anchor").removeClass('frame_' + (this.index - 1))
              // $("#mobile-anchor").addClass('frame_' + this.index).addClass("c-manager");
              // $("#mobile-anchor").removeClass('frame_' + (this.index + 1))
              console.log(this.index)
              scene_cst.wrap.className = 'c-manager frame_' + this.index;
            }
          }
        });
      }

    };
    var sequention_5 = function() {
      var duration_scene_5 = $(scene_5.target).outerHeight() + $(scene_5.target_2).outerHeight() - $(scene_5.wrap).outerHeight();
      var offset_scene_5 = duration_scene_5 / scene_5.count;
      var offset_top_scene_5 = $(scene_5.wrap).outerHeight();

  
      for (var i = 1, l = scene_5.count; i <= l; i++) {
        var scene5 = new ScrollMagic.Scene({
          triggerElement: scene_5.target,
          offset: ((i*1.1) * offset_scene_5) + offset_top_scene_5 - 300,
          reverse: true,
          triggerHook: 1,
        })
          .setClassToggle(".hero__bg", "end") // add class toggle
            //  .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
  
        scene5.index = i + 23;
        scene5.on('start', function(event) {
            if (this.index <= scene_5.count) {
                // ikr = this.index
                // let ikr2 = ikr - 1
                // scene_5.wrap.className = 'c-manager frame_' + this.index;
                // console.log("ikr" + ikr)
                // console.log("ikr2" + ikr2)
                $("#preloadImagesContainer").removeClass('frame_' + (this.index - 1))
                $("#preloadImagesContainer").addClass('frame_' + this.index);
                $("#preloadImagesContainer").removeClass('frame_' + (this.index + 1))
                // defaultImageCount = defaultImageCount + 1;
              }
        });
      }
    };
 

   

 
    var initAnimationsPage = function() {
        // sequention_5();
      sequention_mob();
      setVisibleClassImages();
      resizeManagerSizes();
      
    };
  
    var scrollManager = function() {
      if (!isTablet) {
        var window = $(this);
        var scrollTop = window.scrollTop();
        var hWindow = window.outerHeight();
        var managerWrap = $('.c-manager__wrap');
        var sectionWrap = $('.c-fifth-section__wrap');
  
        if (scrollTop + hWindow >= outerWrapManager) {
          managerWrap.addClass('fixed');
 
        } else {
          managerWrap.removeClass('fixed');
          // if ($("#preloadImagesContainer").hasClass("frameImage40")){
          //   console.log("q")
          // }
        }
  
        if (scrollTop + hWindow > outerWrapManagerSection) {
          managerWrap.removeClass('fixed').addClass('bottom');
        } else {
          managerWrap.removeClass('bottom');
        }
      }
    };
  
    var scrollFromFirstSection = function() {
      var allowScrollTop = false;
   
  
    };
  
    var scrollFunction = function() {
    //   var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    //   isSafari = true;
  
      jQuery(function($) {
        var $window = $(window);
  
        // var allowScrollTop = false;

  
        resizeManagerSizes();
  
        $window.on('resize', function() {
          resizeManagerSizes();
          FixedFooter();
          scrollManager();
          sequention_5();
          console.log("q")
          // sequention_5();
        }).on('scroll', scrollManager).on('mousewheel DOMMouseScroll', function(event) {
           scrollManager();
           if (!isTablet) {
            // var scrollTop = $(window).scrollTop();
            // var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
            // var delta2 = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
  
            // if (section1.outerHeight() > scrollTop && delta2 < 0 && !allowScrollTop) {
            //   allowScrollTop = true;
            //   $('body, html').stop(true, true).animate({scrollTop: section2.offset().top + 1}, 600, function() {
            //     allowScrollTop = false;
            //   });
            // } else if (section2.offset().top + Math.abs(delta) >= scrollTop && delta2 > 0 && !allowScrollTop) {
            //   allowScrollTop = true;
            //   $('body, html').stop(true, true).animate({scrollTop: 0}, 600, function() {
            //     allowScrollTop = false;
            //   });
            // }
          }
        });
  
        // function mousewheelListener(stop) {
        //   $window.on('mousewheel DOMMouseScroll', function(event) {
        //     if (!isTablet) {
        //       event.stopPropagation();
        //       event.preventDefault();
        //       if (!allowScrollTop) {
        //         console.log("qq")
        //         var delta2 = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
        //         var scrollTop = $window.scrollTop();
        //         var finalScroll = scrollTop - parseInt(delta2 * scrollDistance);
        //         TweenMax.to($window, scrollTime, {
        //           scrollTo: {y: finalScroll, autoKill: true},
        //           ease: 'linear',
        //           autoKill: true,
        //           overwrite: 5,
        //         });
        //       }
        //     }
        //   });
        // }
  
        // if (!isSafari) {
        //   //  mousewheelListener()
        // }
  
        // document.addEventListener('touchstart', function(event) {
        //   if (!isTablet) {
        //     this.allowUp = (this.scrollTop > 0);
        //     this.allowDown = (this.scrollTop < this.scrollHeight - this.clientHeight);
        //     this.slideBeginY = event.pageY;
        //   }
        // });
  
        // document.addEventListener('touchmove', function(event) {
        //   if (!isTablet) {
        //     var up = (event.pageY > this.slideBeginY);
        //     var down = (event.pageY < this.slideBeginY);
        //     this.slideBeginY = event.pageY;
        //     if ((up && this.allowUp) || (down && this.allowDown)) {
        //       event.stopPropagation();
        //     }
        //     else {
        //       event.preventDefault();
        //     }
        //   }
        // });
      });
    };

  
    // var setMarkersAreasSizes = function() {
    //   var areas = document.querySelectorAll('.c-map__area');
    //   var w = window,
    //       d = document,
    //       e = d.documentElement,
    //       g = d.getElementsByTagName('body')[0],
    //       x = w.innerWidth || e.clientWidth || g.clientWidth;
  
    //   if (areas.length) {
    //     for (var i = 0, l = areas.length; i < l; i++) {
    //       if (x <= 1500) {
    //         areas[i].querySelector('circle').setAttribute('r', '50');
    //       } else {
    //         areas[i].querySelector('circle').setAttribute('r', '110');
    //       }
    //     }
    //   }
    // };
  
   
    var setDesktopAnimation = function() {
      if (initIntro) {
        if (window.location.hash === '') {
          setTimeout(function() {
            // document.body.classList.add('w-fixed')
            initIntroAnimation();
          }, 5);
        } else {
          setTimeout(function() {
            // window.scrollTo(0, 0);
            //document.body.classList.add('w-fixed')
            initIntroAnimation();
          }, 5);
        }
      } else {
        introLoaded = true;
        if (window.location.hash === '') {
          setTimeout(function() {
            // window.scrollTo(0, 0);
         
            initAnimationsPage();
            scrollFunction();
          }, 5);
        } else {
          setTimeout(function() {
          
            initAnimationsPage();
            scrollFunction();
          }, 5);
        }
      }
    };
  
  
  
    window.addEventListener('resize', function() {

      winw = window.innerWidth || e.clientWidth || g.clientWidth;
      isTablet = winw < 1280;
      if (isTablet) {
        // setMobileScrollHeader(true);
      } else {
       
          setDesktopAnimation();
          removeAllImageVisible();
          setVisibleClassImages();
        
        // setMobileScrollHeader(false);
        $('.css-transform-down, .css-transform-up-100').css({transform: ''}).addClass('css-transform-normal');
        $('.css-opacity').css({opacity: ''}).addClass('css-opacity-1');
      }
    });
  if ($("body").hasClass("main-page")){


    window.addEventListener('load', function() {
       
   
      // $("body").overlayScrollbars({ });
      controller = new ScrollMagic.Controller();
        if(!isTablet){
          sequention_5();
        }
            
        
      var tl = new TimelineMax();
      let parallaxElem = $(".video-gallery img");
      tl.to(parallaxElem, 1, { y: -100, ease: "cubic-bezier(.5,0,0,1)" });
      var scene = new ScrollMagic.Scene({
        triggerElement: ".aboutUs__preview ",
        triggerHook: 0.4,
        duration: "100%",
      })
        .setTween(tl)
        .addTo(controller);


        var iconsTimeline = new TimelineMax();
        let iconsPallax = $(".checks__tizers");
        iconsTimeline.to(iconsPallax, 1, { y: -100, ease: "cubic-bezier(.5,0,0,1)" });
        var iconsScene = new ScrollMagic.Scene({
          triggerElement: ".checks__tizers",
          triggerHook: 0.4,
          duration: "100%",
        })
          .setTween(iconsTimeline)
          .addTo(controller);


        var mobile_anchTest = new TimelineMax();
        let firstAnchMob = $(".hero__mobile-anch");
        mobile_anchTest.to(firstAnchMob, 1, { y: 570, ease: "cubic-bezier(.5,0,0,1)" });
        let durationAnch = $("#mobile-secvention").offset().top

        var sceneMobAnch = new ScrollMagic.Scene({
          triggerElement: ".hero",
          triggerHook: .5,
          duration: durationAnch,
        })
            .setClassToggle("body", "anchor-visible") // add class toggle
          .setTween(mobile_anchTest)
          // .addIndicators()
          .addTo(controller);


          // var sceneDev = new ScrollMagic.Scene({triggerElement: "#section_5", duration: 300})
					// 	.setPin(".hero__mobile-anch")
					// 	.addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
					// 	.addTo(controller);
        var anchorRight = new TimelineMax();
        let anchorRightElem = $("#preloadImagesContainer");
        anchorRight.to(anchorRightElem, 1, { x: "25%", ease: "cubic-bezier(.5,0,0,1)",
        });

        var bgRight = new TimelineMax();
        let bgRightElem = $(".hero__bg")
        bgRight.to(bgRightElem, 1, { scaleX: 1, width: "100%",  ease: "cubic-bezier(.5,0,0,1)",
     
        },
         );
      
        var sceneAnchor = new ScrollMagic.Scene({
          // triggerElement: ".triger_dev",
          duration: 400,
        })
        // .addIndicators()
        .setTween(anchorRight)
        .addTo(controller);

        var sceneBgRight = new ScrollMagic.Scene({
          // triggerElement: ".triger_dev",
          
          duration: 400,
        })
       
        // .addIndicators()
        .setTween(bgRight)
        .addTo(controller);
  
      // var rellax = new Rellax('.parallaxEffect', {center: true});
      let preloader = new TimelineMax();
      preloader.to("#theGradientWhite stop", 0.25, {
          attr: { offset: "0%" },
          repeat: false,
          yoyo: true,
          repeatDelay: 0.5,
          ease: "cubic-bezier(.5,0,0,1)"
        });
        preloader.to("#theGradientRed stop", 0.25, {
          attr: { offset: "0%" },
          repeat: false,
          yoyo: true,
          repeatDelay: 0.5,
          ease: "cubic-bezier(.5,0,0,1)"
        },"=-0.13");
        preloader.to("#theGradientWhiteTop stop", 0.25, {
          attr: { offset: "0%" },
          repeat: false,
          yoyo: true,
          repeatDelay: 0.5,
          ease: "cubic-bezier(.5,0,0,1)",
          onComplete: function() {
            $("body").addClass('mainAnimatedClass');
          }
        },"=-0.13");
        preloader.from( $('.hero__title'), .8, {
          delay: 1,
          ease:"cubic-bezier(.5,0,0,1)",
          y: '100',
          opacity:0,
        } );
        preloader.from( $('.hero__desc'), .8, {
          delay: 1,
          ease:"cubic-bezier(.5,0,0,1)",
          y: '100',
          opacity:0,
        }, "=-2");
        preloader.from( $('.hero__linkLabel'), .8, {
          delay: 1,
          ease:"cubic-bezier(.5,0,0,1)",
          y: '100',
          opacity:0,
        }, "=-2")
        preloader.from( $('header'), .8, {
          delay: 1,
          ease:"cubic-bezier(.5,0,0,1)",
          y: '-100',
          opacity:0,
        }, "=-2")



        
  
         
        
    

      //  for (var i = 0; i < 41; i++) {
      //   function timeout(val) {
      //     setTimeout(function() {
      //       $(".frameImage").removeClass('frameImage' + (i - 1))
      //       $(".frameImage").addClass('frameImage' + i)
      //     }, 100);
      //   }
      //   timeout(i);
      // }
       
     
      
      
   

        initAnimationsPage();

        let defaultImageCount = 1;
      let interVal = setInterval(sayHi, 100);
      function sayHi() {
        $(".c-manager").removeClass('frame_' + (defaultImageCount - 1))
        $(".c-manager").addClass('frame_' + defaultImageCount);
        defaultImageCount = defaultImageCount + 1;
        if(defaultImageCount == 26) {
          clearInterval(interVal);
        }
      }

      if(isTablet){
        setLoadImages();
        sequention_mob();
      } 
       
      document.body.classList.add('w-load');

      let aosOffset;
      if (!isMobile){
        aosOffset = 200
      } else{
        aosOffset = 50
      }
      AOS.init({
        offset:aosOffset,
        duration: 800, // values from 0 to 3000, with step 50ms
        easing: 'cubic-bezier(.5,0,0,1)', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
      });
     
        $(".categoriesMain-item").each(function() {
          var catItemTimeline = new TimelineMax();
          var child = $(this).find("img");
          let parallaxY;
          if (!isTablet){
            parallaxY = -180
          } else {
            parallaxY = -80
          }
          catItemTimeline.to(child, 1, { y: parallaxY, ease: "cubic-bezier(.5,0,0,1)" });
        
          var scene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 1,
            duration: "110%"
          })
            .setTween(catItemTimeline)
           
            .addTo(controller);
        });
        // setTimeout(() => {
         
        // }, 5000);
        $(window).one('scroll',function() {
         
            setTimeout(() => {
              setLoadImages();
            sequention_5();
            }, 0);
         });
        $(".tizers__item-container--w60").each(function() {
          var tizersItemTimeline = new TimelineMax();
          var child = $(this).find(".tizers-item");
          let parallaxY;
          if (!isTablet){
            parallaxY = 100
          } else {
            parallaxY = 30
          }
          tizersItemTimeline.to(child, 1, { y: parallaxY, ease: "cubic-bezier(.5,0,0,1)" });
        
          var scene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 1,
            duration: "100%"
          })
            .setTween(tizersItemTimeline)
            
            .addTo(controller);
        });


        function FixedFooter(){
          if ($("body").hasClass("main-page")){
            let footerHeight = $(".footer").height();
            $("body").css("padding-bottom" , footerHeight + "px")
            console.log(footerHeight)
          }
          

       
        }     
        FixedFooter();

        new ScrollMagic.Scene({triggerElement: "#categoriesMain",offset:120})
        .setClassToggle("#preloadImages", "hidden") // add class toggle
        // .setClassToggle("#mobile-secvention", "hidden") // add class toggle
              //  .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

        new ScrollMagic.Scene({triggerElement: "#categoriesMain",offset:0})
        .setClassToggle("#mobile-anchor", "hidden") // add class toggle
              //  .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

        let cstHeight = $("#section_5").outerHeight()
        new ScrollMagic.Scene({triggerElement: "#mobile-secvention"})
        .setClassToggle("#section_5", "pinned") // add class toggle
  
        .addTo(controller);
        
      });
 
    (function () {
    
      $( ".partners__item-link" ).mousemove(function(event) {

        var target = this.getBoundingClientRect();
        console.log(target)
        var x = event.clientX - target.left;
        var y = event.clientY - target.top;
        console.log(x)
        let pointerElem = $(this).find(".partners__item-picture") ;
        $(pointerElem).css("left", x + "px").css("top", y +  'px')
        
     
      });
      // $( ".partners__item-link" ).mouseleave(function(event) {

      //   let pointerElem = $(this).find(".partners__item-picture") ;
      //   $(pointerElem).css("left", 0 + "px").css("top", 0 +  'px')
        
     
      // });
  
  })();
}
  
    
       
   

  
    jQuery(function($) {
      $.when(loaded, allImageLoaded).done(function() {
        if (isTablet) {
          setMobileVisibleElems(true);
        //   setLoadImages();
          // setTimeout(function() {
          //   window.scrollTo(0, 0);
          // }, 5);
        } else {
            console.log("qq")
          setDesktopAnimation();
          removeAllImageVisible();
          setVisibleClassImages();
        }
        // scrollFromFirstSection();
        // Preloader();
      });
  
    });
    if (!isTablet) {
    //   setLoadImages();
    } else {
      allImageLoaded.resolve();
    }
  };
  
  Animations();
  
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

$(".print").click(function(e){
  window.print()
})



