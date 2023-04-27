window.addEventListener('load', function() {
    function calculateVh() {
        var vhSection = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vhSection', vhSection + 'px');
    }
    var winw = window.innerWidth || e.clientWidth || g.clientWidth;

    var isTablet = winw < 1024;
    var isMobile = winw < 600;

  
  
      // Initial calculation
      calculateVh();
      // window.addEventListener('resize', calculateVh);

      var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap
      TweenMaxWithCSS = gsapWithCSS.core.Tween;
      var TL = gsapWithCSS.timeline();


      TL.to(".advancher__title", {
        backgroundPosition: "100% 100%",
        ease: "none",
        scrollTrigger: {
          // markers:true,
          trigger: ".advancher__title",
          start: "top center",
          end: "bottom center",
          scrub: true
        }
      });


      var tl = new TimelineMax();
      let parallaxElem = $(".land-hero__picture img");
      tl.to(parallaxElem, 1, { 
        y: -100,
        ease: "cubic-bezier(.5,0,0,1)" ,
        scrollTrigger:{
          trigger:parallaxElem,
          scrub:true,
          start:"top top"
        }
      });
      var DocImg = new TimelineMax();
      let parallaxElemDoc = $(".standarts__picture img");
      DocImg.to(parallaxElemDoc, 1, { 
        y: "-20%",
        ease: "none" ,
        scrollTrigger:{
          trigger:parallaxElemDoc,
          scrub:true,
          start: "top bottom",
          end: "bottom top",
        }
      });

      

      let tl2 = new TimelineMax();
      let  aboutprod__picture = $(".about-prod__picture img");

 
      tl2.to(aboutprod__picture, 1, { 
        y: "-20%",
        ease: "none" ,
        scrollTrigger:{
          trigger:aboutprod__picture,
          scrub:true,
          start:"top center"
        }
      });
      
      
    
      ScrollTrigger.matchMedia({
        "(min-width: 320px) and (max-width: 599px)": function minWidth320pxAndMaxWidth599px() {
          var chainBig = new TimelineMax();
          let chainBigElem = $(".numeral__picture");
          chainBig.to(chainBigElem, 1, { 
            y: "35%",
            ease: "none" ,
           
            scrollTrigger:{
              trigger:chainBigElem,
              scrub:true,
              start:"top center"
            }
          });
         
        },

        "(min-width: 600px) and (max-width: 1023px)": function minWidth600pxAndMaxWidth1023px() {
          var chainBig = new TimelineMax();
          let chainBigElem = $(".numeral__picture");
          chainBig.to(chainBigElem, 1, { 
            y: "60%",
            ease: "none" ,
           
            scrollTrigger:{
              trigger:chainBigElem,
              scrub:true,
              start:"top center"
            }
          });
         
        },
        "(min-width: 1024px) and (max-width: 1365px)": function minWidth1024pxAndMaxWidth1366px() {
          var chainBig = new TimelineMax();
          let chainBigElem = $(".numeral__picture");
          chainBig.to(chainBigElem, 1, { 
            y: "10%",
            ease: "none" ,
           
            scrollTrigger:{
              trigger:chainBigElem,
              scrub:true,
              start:"top center",
              endTrigger:".landParallaxSections"
              // end:"center bottom"
            }
          });
         
        },
        "(min-width: 1365px) and (max-width:1599ox)": function minWidth1365pxAndMaxWidth1600px() {
          var chainBig = new TimelineMax();
          let chainBigElem = $(".numeral__picture");
          chainBig.to(chainBigElem, 1, { 
            y: "6%",
            ease: "none" ,
           
            scrollTrigger:{
              trigger:chainBigElem,
              scrub:true,
              start:"top center",
              // endTrigger:".landParallaxSections"
              // end:"center bottom"
            }
          });

          
         
        },
        "(min-width: 1600px)  and (max-width:1919x)": function minWidth1365pxAndMaxWidth1919px() {
          var chainBig = new TimelineMax();
          let chainBigElem = $(".numeral__picture");
          chainBig.to(chainBigElem, 1, { 
            y: "35%",
            ease: "none" ,
           
            scrollTrigger:{
              trigger:chainBigElem,
              scrub:true,
              start:"top center",
              // endTrigger:".landParallaxSections"
              // end:"center bottom"
            }
          });

          
         
        },
        "(min-width: 1920px)": function minWidth1365pxAndMaxWidth2565px() {
          var chainBig = new TimelineMax();
          let chainBigElem = $(".numeral__picture");
          chainBig.to(chainBigElem, 1, { 
            y: "55%",
            ease: "none" ,
           
            scrollTrigger:{
              trigger:chainBigElem,
              scrub:true,
              start:"top center",
              // endTrigger:".landParallaxSections"
              // end:"center bottom"
            }
          });

          
         
        },
     
      });


      
      let SectionLeftTitleLine = new TimelineMax();
      let  SectionLeftTitle = $(".default-section__content--left .default-section__title");

      SectionLeftTitleLine.to(SectionLeftTitle, 1, { 
        y: -70,
        ease: "none" ,
        
        scrollTrigger:{
          trigger:SectionLeftTitle,
         
          scrub:true,
          start:"top center",
          end:"bottom"
        }
      });
      let SectionLeftDescLine = new TimelineMax();
      let  SectionLeftDesc = $(".default-section__content--left .default-section__desc");

      SectionLeftDescLine.to(SectionLeftDesc, 1, { 
        y: -70,
        ease: "none" ,
        
        scrollTrigger:{
          trigger:SectionLeftTitle,
         
          scrub:true,
          start:"top center",
        }
      });
      

      let SectionRightTitleLine = new TimelineMax();
      let  SectionRightTitle = $(".default-section__content--right .default-section__title");

      SectionRightTitleLine.to(SectionRightTitle, 1, { 
        y: -70,
        ease: "none" ,
        
        scrollTrigger:{
          trigger:SectionRightTitle,
         
          scrub:true,
          start:"top center",
          end:"bottom"
        }
      });


      let SectionRightDescLine = new TimelineMax();
      let  SectionRightDesc = $(".default-section__content--right .default-section__desc");

      SectionRightDescLine.to(SectionRightDesc, 1, { 
        y: -70,
        ease: "none" ,
        
        scrollTrigger:{
          trigger:SectionRightTitle,
         
          scrub:true,
          start:"top center",
          end:"bottom"
        }
      });

      let SectionRightBtnLine = new TimelineMax();
      let  SectionRightBtn = $(".default-section__content--right .default-section__linkLabelNew");

      SectionRightBtnLine.to(SectionRightBtn, 1, { 
        y: -70,
        ease: "none" ,
        
        scrollTrigger:{
          trigger:SectionRightTitle,
         
          scrub:true,
          start:"top center",
          end:"bottom"
        }
      });



      
      let BigChainLine = new TimelineMax();
      let   BigChain = $(".landParallaxSections__image");

      BigChainLine.to(BigChain, 1, { 
        y: "-30%",
        ease: "none" ,
        
        scrollTrigger:{
          trigger:".landParallaxSections",
          // markers:true,
          scrub:true,
          start:"top center",
          endTrigger:".triggerEnd "
        }
      });
      BigChainLine.fromTo(BigChain, {
        y: "-30%",
      }, {
        y: "-70%",
        scrollTrigger: {
          trigger:".triggerStart",
          // markers:true,
          scrub:true,
          start:"top center",
          endTrigger:".triggerEndSecond "
        }
      });

 
      // BigChainLine.to(BigChain, 1, { 
      //   y: "-100%",
      //   ease: "none" ,
        
      //   scrollTrigger:{
      //     trigger:".triggerEnd",
      //     markers:true,
      //     scrub:true,
      //     start:"top center",
      //     endTrigger:".triggerEndSecond"
      //   }
      // });
      


      // let SectionRightTitleLine = new TimelineMax();
      // let  SectionRightTitle = $(".default-section__content--right .default-section__title");

      // SectionRightTitleLine.to(SectionRightTitle, 1, { 
      //   y: -50,
      //   ease: "none" ,
        
      //   scrollTrigger:{
      //     trigger:SectionRightTitleLine,
      //    
      //     scrub:true,
      //     start:"top center",
      //     end:"bottom"
      //   }
      // });
      // let SectionRightDescLine = new TimelineMax();
      // let  SectionRighttDesc = $(".default-section__content--right .default-section__desc");

      // SectionRightDescLine.to(SectionRighttDesc, 1, { 
      //   y: -50,
      //   ease: "none" ,
        
      //   scrollTrigger:{
      //     trigger:SectionRightTitleLine,
      //    
      //     scrub:true,
      //     start:"top center",
      //   }
      // });

      // let SectionRighttBtnLine = new TimelineMax();
      // let  SectionRighttBtn = $(".default-section__content--right .default-section__linkLabelNew");

      // SectionRighttBtnLine.to(SectionRighttBtn, 1, { 
      //   y: -50,
      //   ease: "none" ,
        
      //   scrollTrigger:{
      //     trigger:SectionRightTitleLine,
      //    
      //     scrub:true,
      //     start:"top center",
      //   }
      // });
      
    

      function FixedFooter(){
      
          let footerHeight = $(".footerFix").outerHeight();
         
          // $(".footerFix").height(footerHeight)
          $(".main").css("margin-bottom" , footerHeight + "px")
         
        }
        FixedFooter();
        window.addEventListener('resize', function() {
          FixedFooter();
        });
      $('.accordeon').on('click', '.accordeonItem__head:not(.js-active)', function() {
        $(this).parent().toggleClass('js-active').siblings().removeClass('js-active')
        if (isTablet){
          
          $("body").addClass("js-hidden")
          $(this).next().addClass("js-active")
          let targetElement = $(this).parent().siblings().find(".accordeonItem__body")
          console.log(targetElement)
          bodyScrollLock.disableBodyScroll(targetElement);
          $(this).parent().siblings().find(".accordeonItem__body").removeClass("js-active")
        } else {
        
          $(this).parent().siblings().find(".accordeonItem__body").removeClass("isOpen");
          $(this).next().toggleClass("isOpen");
         
        } 
      });

      $(".accordeonItem__bg").click(function(){
        $("body").removeClass("js-hidden")
        bodyScrollLock.clearAllBodyScrollLocks();
        $(".accordeonItem__body,.accordeonItem").removeClass("js-active")
        $(this).parent().siblings().find(".accordeonItem__body")
      })
    
      $(".search-examples__item").click(function(){
        $(".search-element__input--new").val("")
        $(".search-element__input--new").val($(this).text())
      })
      const cartFooterFixedNew = () => {
        const footerForEmptyPage = document.querySelector('.empty-page__footer--js');
      if (footerForEmptyPage){
        let elementFooterNew = document.querySelector('.newFooter');
        if(elementFooterNew){
           elementFooterNew.style.marginBottom = footerForEmptyPage.offsetHeight + "px";
        }
        }
      };

      cartFooterFixedNew();
      
      window.addEventListener('resize', function(event){
        cartFooterFixedNew();
       });
    
      const swiperClients = new Swiper(".ourClients__slider", {
        slidesPerView: "auto",
        spaceBetween: 16,
        // centeredSlides: true,
        breakpoints: {
          1024: {
            slidesPerView: 5,
            spaceBetween: 32,
          },
        },
        
      });

      const swiperReviews = new Swiper(".landReviews__slider", {
        slidesPerView: 1,
        // spaceBetween: 16,
        // centeredSlides: true,
        navigation: {
          nextEl: ".landReviews__arrow--next",
          prevEl: ".landReviews__arrow--prev",
        },
        pagination: {
          el: ".landReviews__pagination",
          clickable:true,
        },
        
        
      });


      const swiperTextPage = new Swiper(".text-page__slider", {
        pagination: {
          el: ".text-page__sliderPagination",
          type: "fraction",
         
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                      ' из ' +
                      '<span class="' + totalClass + '"></span>';
            }
        },
        navigation: {
          nextEl: ".text-page__arrow--next",
          prevEl: ".text-page__arrow--prev",
        },
        
      });
      function calcHeightReview(){
        // fore
        var line_height=20;
        let limitHeight = line_height*5;

       
        // height=product_prod_text_in.height();	
        // var count_rov=height/line_height;
        $(".landReviews:not(.landReviews--hero) .ReviewsItem__desc").each(function() {
          if (isMobile){
            var textIn= $(this).find(".ReviewsItem__descContent").height();
            console.log(textIn)
            if (textIn > limitHeight){
              $(this).find(".ReviewsItem__descContent").addClass("ReviewsItem__descContent--full")
              $(this).find(".ReviewsItem__showmore").addClass(".ReviewsItem__showmore--active")
            }
          }
        });


        $(".ReviewsItem__showmore").click(function(){
          let reviewText = $(this).closest(".ReviewsItem").find(".ReviewsItem__descContent").text()
          showModal(reviewText)
          console.log(reviewText)
        })

        function showModal(reviewText){
          $(".ReviewsItem__modalContent").html(reviewText)
          $(".ReviewsItem__modal").addClass("js-active")
          $("body").addClass("js-hidden")
       
        }


        $(".ReviewsItem__modalBg").click(function(){
          $("body").removeClass("js-hidden")
          $(".ReviewsItem__modal").removeClass("js-active")
          $(".ReviewsItem__modalContent").html('')
        })
      
       
       
      }
      calcHeightReview();
     

      
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

      $(".allReviewsItem").click(function(){
        $('#reviewModal').arcticmodal({
          afterOpen: function (data, el) {
                        $('body').css('overflow', 'hidden');
                        $('.b-modal#reviewModal').addClass('is-active');
                    },
                    beforeClose: function (data, el) {
                        setTimeout(() => {
                            $('body').css('overflow', 'auto');
                            $('.b-modal').removeClass('is-active');
                        }, 100);
                    },
        });
        console.log("qq")
      })
    
      $(".text-page__content table").wrapAll("<div class='text-page__content-scroll'></div>");
      
});