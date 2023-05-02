
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
    var isMobile = (function(a){return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4));})(navigator.userAgent||navigator.vendor||window.opera);
  var isRetina = winw > 1920;
  var desktopLoadedFunc = false;
  let scene5;

 

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
    count: 385,
    src: './assets/images/chain/comp2/',
    type: '.png',
    wrap: document.querySelector('#preloadImagesContainer'),
    // canvas: document.querySelector('#section_5_canvas'),
    images: {},
    firstImage: true,
    imgHasWrap: true,
  };


  let scene_cst = {
    target: '#mobile-wrap',
    target_2: '.partners',
    count: 10,
    // src: './assets/images/mobile_anch2/',
    src: '/local/templates/.default/frontend/dist/assets/images/mobile_anch2/',
    type: '.webp',
    wrap: document.querySelector('#mobile-anchor'),
    // canvas: document.querySelector('#section_5_canvas'),
    images: {},
    firstImage: true,
    imgHasWrap: true,
  };
  




  function heroAnimationAnch(){
    if (!isTablet){
      var anchorRight = new TimelineMax();
      let anchorRightElem = $("#preloadImagesContainer");
      if (isRetina){
        anchorRight.to(anchorRightElem, 1, { x: "35%", ease: "cubic-bezier(.5,0,0,1)", 
        scrollTrigger: {
          trigger: ".hero",
          start:"top",
          end:"+=600",
          scrub: true,
  
        

        
        }

        }, "0");
      } else {
        anchorRight.to(anchorRightElem, 1, { x: "28%", ease: "cubic-bezier(.5,0,0,1)",
        scrollTrigger: {
          trigger: ".hero",
          start:"top",
          end:"+=600",
          scrub: true,
 

        
        }
      }, "0");
      }
    }

  }

  function FixedFooter(){
    if ($("body").hasClass("main-page")){
      let footerHeight = $(".footer").height();
      $(".footer__substrate").height(footerHeight + 20)
      // $(".main").css("margin-bottom" , footerHeight + "px")
     
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
            } else{
              // setTimeout(() => {
              //   let maxWidth = $("#mobile-anchor .img_2 img").width()
              // console.log(maxWidth)
              // $(".hero__mobile-anch img,.mobile-anchor .img_10 img").css("max-width", maxWidth + "px")
              // }, 400);
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
    // sequention_mob();
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
    // setTimeout(() => {
    //   heroAnimationAnch();
    // }, 100);
    // console.log("resize")
    clearTimeout(resizeSceneTimeout);
    resizeSceneTimeout = setTimeout(() => sequention_5(), debounceTime);
    
    FixedFooter();
    
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

 if (isMain){

  var sequention_mob = function() {

    var duration_scene_cst = $(scene_cst.target).outerHeight() + $(scene_cst.target_2).outerHeight() - $(scene_cst.wrap).outerHeight() - 600;
    var offset_scene_cst = duration_scene_cst / scene_cst.count;
    var offset_top_scene_cst = $(scene_cst.wrap).outerHeight();

   
    
    setTimeout(() => {
      // console.log(duration_scene_cst)
      // console.log(offset_scene_cst)
      // console.log(offset_top_scene_cst)
      $("#mobile-anchor div").each(function(index) {
        console.log(duration_scene_cst + (((index + 1) * offset_scene_cst) + offset_top_scene_cst - 400))
        console.log(duration_scene_cst + (((index + 1) * offset_scene_cst) + offset_top_scene_cst - 300))
        var seqMob = new TimelineMax();
        seqMob.to($("#mobile-anchor .img_" + (index + 1)), { 
          scrollTrigger: {
            trigger: $(this),
            start: duration_scene_cst + (((index + 1) * offset_scene_cst) + offset_top_scene_cst - 400),
            end:  duration_scene_cst + (((index + 1) * offset_scene_cst) + offset_top_scene_cst - 300),
            scrub: true,
            // markers:true,
            onEnter: () =>  scene_cst.wrap.className = 'c-manager frame_' + (index + 1),
            onEnterBack: () =>  scene_cst.wrap.className = 'c-manager frame_' + (index + 1),
          
          }
        });
      });
  
    }, 1000);

  };
  let controllerAnch
  if (!isTablet){
    controllerAnch = new ScrollMagic.Controller();
  }
  var sequention_5 = function() {
    // console.log('sequention_5 timeout');
    // let lastIndex;
    // console.log(lastIndex)
    controllerAnch?.destroy();
    // console.log("qq")
    var userAgent = navigator.userAgent.toLowerCase();
	
    // var Mozila = /firefox/.test(userAgent);
    var Chrome = /chrome/.test(userAgent);
    var Safari = /safari/.test(userAgent); 

    controllerAnch = new ScrollMagic.Controller();
    var duration_scene_5 = $(scene_5.target).outerHeight() + $(scene_5.target_2).outerHeight() - $(scene_5.wrap).outerHeight();
    var offset_scene_5 = duration_scene_5 / scene_5.count;
    var offset_top_scene_5 = $(scene_5.wrap).outerHeight();
    let counterLoad = 0;
    for (var i = 1, l = scene_5.count; i <= l; i++) {
      const scene5 = new ScrollMagic.Scene({
        triggerElement: scene_5.target,
        offset: ((i*1.1) * offset_scene_5) + offset_top_scene_5 - 200,
        reverse: true,
        triggerHook: 1,
        // duration: "100%",
      })
     
 
        .setClassToggle(".hero", "end") // add class toggle
          //  .addIndicators() // add indicators (requires plugin)
          .addTo(controllerAnch);
         
          scene5.index = i + 19;
        
        scene5.on('start', function(event) {
          if (this.index <= scene_5.count) {
              // console.log($(".img_" + this.index + " img"))
              // console.log(counterLoad)
              // if ($(".img_" + this.index + " img").hasClass("lazyloading")){
              //   if (counterLoad == 0){
              //     counterLoad = 1
              //   }
                
              // }
              // if ( counterLoad == 1){
              //   return
              // }
              // if ($(".img_" + this.index + " img").hasClass("lazyloading") && $("#preloadImages img").hasClass("lazyloading")){
              //   if (counterLoad == 0){
              //     scene_5.wrap.className = 'frameImage c-manager frame_' + this.index;
                
              //   }


              //   return
              // if ($(".img_" + this.index + " img").hasClass("lazyload")){
              //   if (counterLoad == 0){
              //         counterLoad = 1
              //         scene_5.wrap.className = 'frameImage c-manager frame_' + this.index;
              //       }
                    
              // } else if ($("#preloadImages img").hasClass("lazyloading"))  {
              //    return
              // } else {
              //   scene_5.wrap.className = 'frameImage c-manager frame_' + this.index;
              // }
              
              // } else {
              //   scene_5.wrap.className = 'frameImage c-manager frame_' + this.index;
              // }
              // $("#preloadImagesContainer").removeClass('frame_' + (this.index - 1))
              // $("#preloadImagesContainer").addClass('frame_' + this.index);
              // $("#preloadImagesContainer").removeClass('frame_' + (this.index + 1))
             
              // lastIndex = 'frame_' + (this.index + 1);
           
              // defaultImageCount = defaultImageCount + 1;
              // if (Mozila){
              //   scene_5.wrap.className = 'frameImage c-manager frame_' + this.index;
              // } else {
              //   if ($(".img_" + this.index + " img").hasClass("lazyload")){
              //   } else {
              //     scene_5.wrap.className = 'frameImage c-manager frame_' + this.index;
              //   }
              // }

              scene_5.wrap.className = 'frameImage c-manager frame_' + this.index;

              // if ($(".img_" + this.index + " img").hasClass("lazyloading") || $(".img_" + this.index + " img").hasClass("lazyload")){
               
                // counterLoad = counterLoad + 1
                // if (counterLoad < 1){
                //   scene_5.wrap.className = 'frameImage c-manager frame_' + this.index;
                // }
                 
             
            }
      });
    }
  };


  window.addEventListener('load', function() {
    

    function calculateVh() {
      var vhImg = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vhImages', vhImg + 'px');
    }
    
    // Initial calculation
    calculateVh();
    function calculateVhSec() {
      var vhSec = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vhsec', vhSec + 'px');
    }
    
    // Initial calculation
    calculateVhSec();
    // Re-calculate on resize
    window.addEventListener('resize', calculateVh);
    
    // Re-calculate on device orientation change
    window.addEventListener('orientationchange', calculateVh);

 
      if(!isTablet){
        controller = new ScrollMagic.Controller();
        setTimeout(() => {
          sequention_5();
        }, 100);
      }
          

      
    var tl = new TimelineMax();
    let parallaxElem = $(".video-gallery img");
    tl.to(parallaxElem, 1, { 
      y: -100,
      ease: "cubic-bezier(.5,0,0,1)" ,
      scrollTrigger:{
        trigger:parallaxElem,
        scrub:true,
        // markers:true
      }
    });


     if(!isTablet){
        var iconsTimeline = new TimelineMax();
        let iconsPallax = $(".checks__title div");
        iconsTimeline.to(iconsPallax, 1, { y: 250, ease: "cubic-bezier(.5,0,0,1)" });
        var iconsScene = new ScrollMagic.Scene({
          triggerElement: ".checks__title div",
          triggerHook: 1,
          duration: "150%",
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
            tizersItemTimeline.to(child, 1, { y: -parallaxY, ease: "cubic-bezier(.5,0,0,1)" });
          
            var scene = new ScrollMagic.Scene({
              triggerElement: this,
              triggerHook: 1,
              duration: "120%"
            })
              .setTween(tizersItemTimeline)
              .addTo(controller);
          });
     }


    // setTimeout(() => {
    //   var mobile_anchTest = new TimelineMax();
    //   let firstAnchMob = $(".hero__mobile-anch");
   
    //   // let mobileParam = $('.tech__title').offset().top - $(window).height();
    //   // console.log($('.tech__title').offset().top)
    //   // console.log($(window).height())
    //   // console.log(mobileParam)
    //   // // mobile_anchTest.to(firstAnchMob, 1, { y: - 700, ease: "cubic-bezier(.5,0,0,1)" });
    //   // // mobile_anchTest.to(firstAnchMob, 1, { y: - $(window).height()*.5 });
    //   // mobile_anchTest.to(firstAnchMob, 1, { y: - mobileParam, },"0");
    //   // let durationAnch = $("#mobile-secvention").offset().top

    //   var sceneMobAnch = new ScrollMagic.Scene({
    //     triggerElement: ".hero",
    //     triggerHook: 0,
    //     duration: durationAnch,
    //   })
    //       .setClassToggle("body", "anchor-hidden") // add class toggle
    //     .setTween(mobile_anchTest)
    //     // .addIndicators()
    //     .addTo(controller);
    // }, 200);


        // var sceneDev = new ScrollMagic.Scene({triggerElement: "#section_5", duration: 300})
        // 	.setPin(".hero__mobile-anch")
        // 	.addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
        // 	.addTo(controller);
     if (isTablet){
      setTimeout(() => {
        let mobile_anchLast= new TimelineMax();
        let lastAnchMob = $("#mobile-anchor .img_10 img");
    
        mobile_anchLast.to(lastAnchMob, 1, { y: "-75%",
          scrollTrigger:{
            trigger:".partners__title",
            scrub:true,
            start:'-=300',
            end:"+=900",
            ease: "none",
            // markers:true,
            onLeave: () => $("body").addClass('sequantion-end'),
            onEnterBack: () =>$("body").removeClass('sequantion-end'),
          }
        });
        

      }, 1000);
     }
      heroAnimationAnch();
      

    if (!isTablet){
      var bgRight = new TimelineMax();
      let bgRightElem = $(".hero__bg")
      bgRight.to(bgRightElem, 1, { scaleX: 1, width: "100%",  ease: "cubic-bezier(.5,0,0,1)",
      },
       );
    
    

      var sceneBgRight = new ScrollMagic.Scene({
        duration: 2050,
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
        duration: 1100,
      })
     
      // .addIndicators()
      .setTween(bgLeft)
      .addTo(controller);
    }
     
   




      

       
      
  

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

      var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap,
      // to protect from tree shaking
      TweenMaxWithCSS = gsapWithCSS.core.Tween;
      var HERO = document.querySelector('.hero');
      var SCENE = HERO.querySelector('.hero__main');
      var SYSTEM__IMG = SCENE.querySelector('.hero__mobile-anch');
      var TL = gsapWithCSS.timeline();
      
    
      // TL.fromTo(SYSTEM__IMG, {
      //   y: "-50%"
      // }, {
      //   y: "0"
      // }, "start");
      // gsap.registerPlugin(CSSPlugin,ScrollSmoother,ScrollTrigger)
      // ScrollSmoother.create({
      //   wrapper: ".content-wrapper",
      //   content: ".content-wrapper__scroll",
      
      //   smooth: 1.5,
      //   effects: true
      // });
  
      setTimeout(() => {
       
      
      }, 1000);
      setTimeout(() => {
       
        ScrollTrigger.matchMedia({
          "(min-width: 320px) and (max-width: 1023px)": function minWidth320pxAndMaxWidth960px() {
            var TL = new gsapWithCSS.timeline({
              scrollTrigger: {
                trigger: SYSTEM__IMG,
                start: "top",
                end: "100%  500px",
                scrub: true,
                // markers: true,
                toggleClass: 'enable',
                ease:"none",
    
               
               
                onLeave: () => $("body").addClass('pinnedTest'),
                onEnterBack: () => $("body").removeClass('pinnedTest'),
                onLeaveBack: () => $("body").addClass('pinnedTest'),
                onEnter: () => {
                     $("body").removeClass('pinnedTest');
                    scene_cst.wrap.className = 'c-manager frame_1';
                },
              }
          });
            TL.fromTo(SYSTEM__IMG, {
              
              y: "-50%"
            }, {
              y: "0%"
            }, "start",
            );
            
       
           
          },
       
        });
    
      }, 0);
      
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
        catItemTimeline.to(child, 1, {
           y: parallaxY,
           ease: "cubic-bezier(.5,0,0,1)" ,
           scrollTrigger:{
            trigger:$(this),
            scrub:true,
           }
          });
      
        // var scene = new ScrollMagic.Scene({
        //   triggerElement: this,
        //   triggerHook: 1,
        //   duration: "110%"
        // })
        //   .setTween(catItemTimeline)
         
        //   .addTo(controller);
      });

    


  
      FixedFooter();
      
  
      // we'd only like to use iScroll for mobile...
      if (isMobile) {
        // configure iScroll
   
      //   var myScroll = new IScroll('.content-wrapper__scroll',
      //   {
      //     // don't scroll horizontal
      //     scrollX: false,
      //     // but do scroll vertical
      //     scrollY: true,
      //     // show scrollbars
      //     scrollbars: true,
      //     // deactivating -webkit-transform because pin wouldn't work because of a webkit bug: https://code.google.com/p/chromium/issues/detail?id=20574
      //     // if you dont use pinning, keep "useTransform" set to true, as it is far better in terms of performance.
      //     useTransform: false,
      //     // deativate css-transition to force requestAnimationFrame (implicit with probeType 3)
      //     useTransition: false,
      //     // set to highest probing level to get scroll events even during momentum and bounce
      //     // requires inclusion of iscroll-probe.js
      //     probeType: 3,
      //     // pass through clicks inside scroll container
      //     click: true,
      //     // HWCompositing:false,
      //     // bounce:false,
      //     // momentum:false,
      //     deceleration:0.00125,
      //     // deceleration:0001,
      //     // bounceTime:1000

      //     bindToWrapper:true,
      //   }
      // );
  
  // overwrite scroll position calculation to use child's offset instead of container's scrollTop();
      // controller.scrollPos(function () {
      //   return -myScroll.y;
        
      // });


    // thanks to iScroll 5 we now have a real onScroll event (with some performance drawbacks)
      // myScroll.on("scroll", function () {
      //   controller.update(true);
      // });
      
        // add indicators to scrollcontent so they will be moved with it.
        
      }

      if (!isTablet){
        new ScrollMagic.Scene({triggerElement: "#categoriesMain",offset:0, triggerHook: 0,})
          .setClassToggle("body", "sequantion-end") // add class toggle
          .addTo(controller);
        // new ScrollMagic.Scene({triggerElement: ".aboutUs",offset:0, triggerHook: 0,})
        //   .setClassToggle(".aboutUs", "aboutUs-end") // add class toggle
        //   .addTo(controller);

        ScrollTrigger.create({
          trigger: ".hero",
          start: "top",
          end: "+=1000",
          onLeave: () => $(".hero").addClass("second-step")
        });

        ScrollTrigger.create({
          trigger: ".hero",
          start: "top",
          end: "+=2000",
          onLeave: () => $(".hero").addClass("third-step")
        });


              //  Вариант с пином элементов
      let st = ScrollTrigger.create({
        trigger: ".categoriesMain",
        pin: ".categoriesMain__how-link",
        start: "top center",
        end: "bottom"
      });
        
      }

      // let cstHeight = $("#section_5").outerHeight()
      // new ScrollMagic.Scene({triggerElement: "#mobile-wrap",
      // triggerHook: .5,})
      // // .setClassToggle("#section_5", "pinned") // add class toggle
     
      // .setClassToggle("body", "pinnedTest") // add class toggle
      // .addTo(controller);
     
      

      
    });
 }

  (function () {
  
    $( ".partners__item" ).mousemove(function(event) {
      $(this).siblings().addClass("isBigIndex")
      var target = this.getBoundingClientRect();
      // var x = event.clientX - target.left;
      // var y = event.clientY - target.top;
      var x = event.clientX ;
      var y = event.clientY;
      let pointerElem = $(".partners__item-picture") ;
     setTimeout(() => {
      $(pointerElem).css("left", x + "px").css("top", y +  'px')
     }, 200);
      
   
    });
    $( ".partners__item" ).mouseleave(function(event) {

      $(".partners__item").removeClass("isBigIndex")
      
   
    });

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







