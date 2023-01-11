var Animations = function() {
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
    var isRetina = winw > 1920;
    var desktopLoadedFunc = false;
    let scene5;
    let controllerAnch = new ScrollMagic.Controller();
  
    if (isTablet){
      jQuery(function($){
        $(document).mouseup( function(e){ // событие клика по веб-документу
          var div = $( ".choice-box__wrapper--active" ); // тут указываем ID элемента
          if (div.is(e.target) ) { 

            
                  $(".isBigZindex").parent().removeClass("isBigZindex")
                  $(".js-choice-box").removeClass("choice-box--active")
                  $(".choice-box__wrapper").removeClass("choice-box__wrapper--active")
                  
                  
          }
        });
      });
    }
    let scene_5 = {
      target: '#section_5',
      target_2: '.end_of_seq',
      count: 749,
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
      // src: './assets/images/mobile_anch2/',
      src: '/local/templates/.default/frontend/dist/assets/images/mobile_anch2/',
      type: '.jpg',
      wrap: document.querySelector('#mobile-anchor'),
      // canvas: document.querySelector('#section_5_canvas'),
      images: {},
      firstImage: true,
      imgHasWrap: true,
    };
    
 


    function heroAnimationAnch(){
      var anchorRight = new TimelineMax();
      let anchorRightElem = $("#preloadImagesContainer");
      if (isRetina){
        anchorRight.to(anchorRightElem, 1, { x: "35%", ease: "cubic-bezier(.5,0,0,1)",
        });
      } else {
        anchorRight.to(anchorRightElem, 1, { x: "25%", ease: "cubic-bezier(.5,0,0,1)",
      });
      }
    
      var sceneAnchor = new ScrollMagic.Scene({
        // triggerElement: ".triger_dev",
        duration: 400,
      })
      // .addIndicators()
      .setTween(anchorRight)
      .addTo(controller);
    }
 
    function FixedFooter(){
      if ($("body").hasClass("main-page")){
        let footerHeight = $(".footer").height();
        $("body").css("padding-bottom" , footerHeight + "px")
        console.log(footerHeight)
      }
      

   
    }     
    var loadImgsHandler = function(objects) {
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
               

                if (allImgsCount === counterPng && !isTablet) {
                  allImageLoaded.resolve();
                }
              };
  
              if (!isTablet) {
                image.classList.add('is-visible');
              }
              if (i > 40){
                object.type = ".jpg"
              }
              image.src = object.src + i + object.type;
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
       
      
      objects.map(function(item) {
        allImgsCount += item.count;
        if (item.i) {
          allImgsCount -= item.i;
        }
      });
  
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
          // FixedFooter();
          scrollManager();
          console.log("resize")
          sequention_5();
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
  
  
  
    const debounceTime = 300;
    let resizeSceneTimeout;

    window.addEventListener('resize', function() {
      clearTimeout(resizeSceneTimeout);
      resizeSceneTimeout = setTimeout(() => sequention_5(), debounceTime);

      FixedFooter();
      heroAnimationAnch();
      winw = window.innerWidth || e.clientWidth || g.clientWidth;
      isTablet = winw < 1280;
      if (isTablet) {
        // setMobileScrollHeader(true);
      } else {
       
          setDesktopAnimation();
          removeAllImageVisible();
          setVisibleClassImages();
      }
    });
    let isMain = false;
  if ($("body").hasClass("main-page")){
     isMain = true
  }
    console.log(isMain)
   if (isMain){
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
            // .addIndicators() // add indicators (requires plugin)
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
      // console.log('sequention_5 timeout');
      // let lastIndex;
      // console.log(lastIndex)
      controllerAnch?.destroy();
      // console.log("qq")
     
      controllerAnch = new ScrollMagic.Controller();
      var duration_scene_5 = $(scene_5.target).outerHeight() + $(scene_5.target_2).outerHeight() - $(scene_5.wrap).outerHeight();
      var offset_scene_5 = duration_scene_5 / scene_5.count;
      var offset_top_scene_5 = $(scene_5.wrap).outerHeight();

      for (var i = 1, l = scene_5.count; i <= l; i++) {
        const scene5 = new ScrollMagic.Scene({
          triggerElement: scene_5.target,
          offset: ((i*1.1) * offset_scene_5) + offset_top_scene_5 - 300,
          reverse: true,
          triggerHook: 1,
          // duration: "100%",
        })
       
   
          .setClassToggle(".hero__bg", "end") // add class toggle
            //  .addIndicators() // add indicators (requires plugin)
            .addTo(controllerAnch);
           
            scene5.index = i + 39;
          scene5.on('start', function(event) {
            if (this.index <= scene_5.count) {
                console.log("start")
                // $("#preloadImagesContainer").removeClass('frame_' + (this.index - 1))
                // $("#preloadImagesContainer").addClass('frame_' + this.index);
                // $("#preloadImagesContainer").removeClass('frame_' + (this.index + 1))
                scene_5.wrap.className = 'frameImage c-manager frame_' + this.index;
                // lastIndex = 'frame_' + (this.index + 1);
             
                // defaultImageCount = defaultImageCount + 1;
              }
        });
      }
    };
 

    window.addEventListener('load', function() {
      let preloader = new TimelineMax();
      const mediaFiles = document.querySelectorAll('img, video');
      let elemsLoaded = 0
      console.log(mediaFiles)
      let defaultImageCount = 1;
     
      if(isTablet){
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

      } else{
        Array.from(mediaFiles).forEach((file, index) => {
          file.onload = () => {
            elemsLoaded++
  
        
            console.log(elemsLoaded)
            if(elemsLoaded === 50) {
              preloader.to("#theGradientWhite stop", 0.6, {
                attr: { offset: "50%" },
                repeat: false,
                yoyo: true,
                repeatDelay: 0.5,
                ease: "cubic-bezier(.5,0,0,1)"
              });
            }
            if(elemsLoaded === 100) {
              preloader.to("#theGradientWhite stop", 0.6, {
                attr: { offset: "0%" },
                repeat: false,
                yoyo: true,
                repeatDelay: 0.5,
                ease: "cubic-bezier(.5,0,0,1)"
              });
              preloader.to("#theGradientRed stop", 0.6, {
                attr: { offset: "50%" },
                repeat: false,
                yoyo: true,
                repeatDelay: 0.5,
                ease: "cubic-bezier(.5,0,0,1)"
              },"=-0.3");
            }
            if(elemsLoaded === 150) {
              preloader.to("#theGradientRed stop", 0.6, {
                attr: { offset: "0%" },
                repeat: false,
                yoyo: true,
                repeatDelay: 0.5,
                ease: "cubic-bezier(.5,0,0,1)"
              },"=-0.3");

                preloader.to("#theGradientWhiteTop stop", 0.6, {
                  attr: { offset: "50%" },
                  repeat: false,
                  yoyo: true,
                  repeatDelay: 0.5,
                  ease: "cubic-bezier(.5,0,0,1)",
                  onComplete: function() {
                    // $("body").addClass('mainAnimatedClass');
                  }
                },"=-0.3");
                }
                if(elemsLoaded === 200) {
               
  
                    preloader.to("#theGradientWhiteTop stop", 0.6, {
                      attr: { offset: "0%" },
                      repeat: false,
                      yoyo: true,
                      repeatDelay: 0.5,
                      ease: "cubic-bezier(.5,0,0,1)",
                      onComplete: function() {
                        $("body").addClass('mainAnimatedClass');
                      }
                     },"=-0.3");
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
                    let interVal = setInterval(preloaderAnch, 100);
                    function preloaderAnch() {
                      $(".c-manager").removeClass('frame_' + (defaultImageCount - 1))
                      $(".c-manager").addClass('frame_' + defaultImageCount);
                      defaultImageCount = defaultImageCount + 1;
                      if(defaultImageCount == 40) {
                        clearInterval(interVal);
                      }
                    }
                    }
                
                  
            
          }
      })
      }
  

      if(isTablet){
        let vh = window.innerHeight * 0.01;
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        
        // We listen to the resize event
        // window.addEventListener('resize', () => {
        //   // We execute the same script as before
        //   let vh = window.innerHeight * 0.01;
        //   document.documentElement.style.setProperty('--vh', `${vh}px`);
        // });
      }
      // let mobileParam = $(window).height() - 
      
      // $("body").overlayScrollbars({ });
      controller = new ScrollMagic.Controller();
   
        if(!isTablet){
          setTimeout(() => {
            sequention_5();
          }, 100);
        }
            

        
      var tl = new TimelineMax();
      let parallaxElem = $(".video-gallery img");
      tl.to(parallaxElem, 1, { y: -100, ease: "cubic-bezier(.5,0,0,1)" });
      var scene = new ScrollMagic.Scene({
        triggerElement: ".aboutUs__preview ",
        triggerHook: 1,
        duration: "135%",
      })
          // .addIndicators()
        .setTween(tl)
        .addTo(controller);


       if(!isTablet){
          var iconsTimeline = new TimelineMax();
          let iconsPallax = $(".checks__title");
          iconsTimeline.to(iconsPallax, 1, { y: 200, ease: "cubic-bezier(.5,0,0,1)" });
          var iconsScene = new ScrollMagic.Scene({
            triggerElement: ".checks__title",
            triggerHook: 1,
            duration: "130%",
          })
          // .addIndicators()
            .setTween(iconsTimeline)
            .addTo(controller);

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
                duration: "120%"
              })
                .setTween(tizersItemTimeline)
                .addTo(controller);
            });
       }


        var mobile_anchTest = new TimelineMax();
        let firstAnchMob = $(".hero__mobile-anch");
     
        let mobileParam = $('.tech__title').offset().top - $(window).height();
    
        // mobile_anchTest.to(firstAnchMob, 1, { y: - 700, ease: "cubic-bezier(.5,0,0,1)" });
        // mobile_anchTest.to(firstAnchMob, 1, { y: - $(window).height()*.5 });
        mobile_anchTest.to(firstAnchMob, 1, { y: - $(firstAnchMob).height()*.5, ease: "cubic-bezier(.5,0,0,1)" });
        let durationAnch = $("#mobile-secvention").offset().top

        var sceneMobAnch = new ScrollMagic.Scene({
          triggerElement: ".hero",
          triggerHook: 0,
          duration: durationAnch,
        })
            .setClassToggle("body", "anchor-hidden") // add class toggle
          .setTween(mobile_anchTest)
          // .addIndicators()
          .addTo(controller);


          // var sceneDev = new ScrollMagic.Scene({triggerElement: "#section_5", duration: 300})
					// 	.setPin(".hero__mobile-anch")
					// 	.addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
					// 	.addTo(controller);
      
        heroAnimationAnch();
        

        var bgRight = new TimelineMax();
        let bgRightElem = $(".hero__bg")
        bgRight.to(bgRightElem, 1, { scaleX: 1, width: "100%",  ease: "cubic-bezier(.5,0,0,1)",
        },
         );
      
      

        var sceneBgRight = new ScrollMagic.Scene({
          // triggerElement: ".triger_dev",
          
          duration: 1950,
        })
       
        // .addIndicators()
        .setTween(bgRight)
        .addTo(controller);

        var bgLeft = new TimelineMax();
        let bgLeftElem = $(".hero__shadow")
        bgLeft.to(bgLeftElem, 1, { opacity: 1,  ease: "cubic-bezier(.5,0,0,1)",
        },
         );
         var sceneBgLeft = new ScrollMagic.Scene({
          // triggerElement: ".triger_dev",
          
          duration: 1000,
        })
       
        // .addIndicators()
        .setTween(bgLeft)
        .addTo(controller);
       
     
    
        // preloader.to("#theGradientWhiteTop stop", 0.25, {
        //   attr: { offset: "0%" },
        //   repeat: false,
        //   yoyo: true,
        //   repeatDelay: 0.5,
        //   ease: "cubic-bezier(.5,0,0,1)",
        //   onComplete: function() {
        //     // $("body").addClass('mainAnimatedClass');
        //   }
        // },"=-0.13");
        



        
  
         
        
    

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

       

      if(isTablet){
        setLoadImages();
        sequention_mob();
      }
      
      document.body.classList.add('w-load');

      let aosOffset;
      if (!isTablet){
        aosOffset = 200
      } else{
        aosOffset = 100
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

      


    
        FixedFooter();

        new ScrollMagic.Scene({triggerElement: "#categoriesMain",offset:0, triggerHook: 0,})
        .setClassToggle("body", "sequantion-end") // add class toggle
        .addTo(controller);

        let cstHeight = $("#section_5").outerHeight()
        new ScrollMagic.Scene({triggerElement: "#mobile-secvention"})
        .setClassToggle("#section_5", "pinned") // add class toggle
  
        .addTo(controller);
        
      });
   }
 
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







$(".hero__left").hover(function(){
  $(".hero__content").toggleClass("isHoverLeft")
  $(".hero__content").removeClass("isHoverRight")
});
$(".hero__right").hover(function(){
  $(".hero__content").toggleClass("isHoverRight")
  $(".hero__content").removeClass("isHoverLeft")
});