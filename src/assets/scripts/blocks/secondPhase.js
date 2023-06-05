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

      if($(".advancher__title").hasClass("advancher__title--big")){
        TL.to(".advancher__title--big", {
          backgroundPosition: "100% 85%",
          ease: "none",
          scrollTrigger: {
            // markers:true,
            trigger: ".advancher",
            // start: "top center+=300px",
            // end: "bottom center-=300px",
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      } else {
        TL.to(".advancher__title", {
          backgroundPosition: "100% 100%",
          ease: "none",
          scrollTrigger: {
            // markers:true,
            trigger: ".advancher",
            // start: "top center+=300px",
            // end: "bottom center-=300px",
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      }
      

      
   

      var tl = new TimelineMax();
      let parallaxElem = $(".land-hero__picture img");
        tl.to(parallaxElem, 1, { 
          y: -100,
          ease: "cubic-bezier(.5,0,0,1)" ,
          scrollTrigger:{
            trigger:parallaxElem,
            scrub:true,
         
            start: "top=+1 bottom",
            end: "bottom top",
          }
        });
  
      let DocImg = new TimelineMax();
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
          start: "top bottom",
          end: "bottom top",
        }
      });
      
      
    
      ScrollTrigger.matchMedia({
        "(min-width: 320px) and (max-width: 568px)": function minWidth320pxAndMaxWidth599px() {
          var chainBig = new TimelineMax();
          let chainBigElem = $(".numeral__picture");
          chainBig.to(chainBigElem, 1, { 
            y: "-45%",
            ease: "none" ,
           
            scrollTrigger:{
              trigger:chainBigElem,
              scrub:true,
              start: "top bottom",
              end: "bottom top",
              // markers:true
            }
          });


             
          TL.to(".constructor__picture", {
            top: "100px",
            ease: "none",
            scrollTrigger: {
              // markers:true,
              trigger: ".constructor",
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          });
         
        },

        "(min-width: 568px) and (max-width: 1023px)": function minWidth600pxAndMaxWidth1023px() {
          var chainBig = new TimelineMax();
          let chainBigElem = $(".numeral__picture");
          chainBig.to(chainBigElem, 1, { 
            y: "-300px",
            ease: "none" ,
           
            scrollTrigger:{
              trigger:chainBigElem,
              scrub:true,
              start: "top bottom",
              end: "bottom top",
            }
          });

             
          TL.to(".constructor__picture", {
            top: "-100px",
            ease: "none",
            scrollTrigger: {
              // markers:true,
              trigger: ".constructor",
              // start: "top center+=300px",
              // end: "bottom center-=300px",
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          });
         
        },
        "(min-width: 1024px) and (max-width: 1340px)": function minWidth1024pxAndMaxWidth1366px() {
          var chainBig = new TimelineMax();
          let chainBigElem = $(".numeral__picture");
          chainBig.to(chainBigElem, 1, { 
            y: "-50%",
            ease: "none" ,
           
            scrollTrigger:{
              trigger:chainBigElem,
              scrub:true,
              start: "top bottom",
              end: "bottom top",
              // end:"center bottom"
            }
          });
          TL.to(".constructor__picture", {
            y: "20%",
            ease: "none",
            scrollTrigger: {
              // markers:true,
              trigger: ".constructor",
              // start: "top center+=300px",
              // end: "bottom center-=300px",
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          });
         
        },
        "(min-width: 1340px) and (max-width:1599px)": function minWidth1365pxAndMaxWidth1600px() {
          var chainBig = new TimelineMax();
          let chainBigElem = $(".numeral__picture");
          chainBig.to(chainBigElem, 1, { 
            y: "-30%",
            ease: "none" ,
           
            scrollTrigger:{
              trigger:chainBigElem,
              scrub:true,
              start: "top bottom",
              end: "bottom top",
              // endTrigger:".landParallaxSections"
              // end:"center bottom"
            }
          });
          TL.to(".constructor__picture", {
            y: "20%",
            ease: "none",
            scrollTrigger: {
              // markers:true,
              trigger: ".constructor",
              // start: "top center+=300px",
              // end: "bottom center-=300px",
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          });

          
         
        },
        "(min-width: 1600px)  and (max-width:1919px)": function minWidth1365pxAndMaxWidth1919px() {
          var chainBig = new TimelineMax();
          let chainBigElem = $(".numeral__picture");
          chainBig.to(chainBigElem, 1, { 
            y: "-50%",
            ease: "none" ,
           
            scrollTrigger:{
              trigger:chainBigElem,
              scrub:true,
              start: "top bottom",
              end: "bottom top",
              // end:"center bottom"
            }
          });
          TL.to(".constructor__picture", {
            y: "15%",
            ease: "none",
            scrollTrigger: {
              // markers:true,
              trigger: ".constructor",
              // start: "top center+=300px",
              // end: "bottom center-=300px",
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          });


          
         
        },
        "(min-width: 1920px)": function minWidth1365pxAndMaxWidth2565px() {
          var chainBig = new TimelineMax();
          let chainBigElem = $(".numeral__picture");
          chainBig.to(chainBigElem, 1, { 
            y: "-50%",
            ease: "none" ,
           
            scrollTrigger:{
              trigger:chainBigElem,
              scrub:true,
              start: "top bottom",
              end: "bottom top",
              // endTrigger:".landParallaxSections"
              // end:"center bottom"
            }
          });

          TL.to(".constructor__picture", {
            y: "15%",
            ease: "none",
            scrollTrigger: {
              // markers:true,
              trigger: ".constructor",
              // start: "top center+=300px",
              // end: "bottom center-=300px",
              start: "top bottom",
              end: "bottom top",
              scrub: true
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
          // start:"top center",
          // end:"bottom"
          start: "top bottom",
          end: "bottom top",
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
          // start:"top center",
          start: "top bottom",
          end: "bottom top",
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
          // start:"top center",
          // end:"bottom"
          start: "top bottom",
          end: "bottom top",
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
          // start:"top center",
          // end:"bottom"
          start: "top bottom",
          end: "bottom top",
        }
      });



      
      let BigChainLine = new TimelineMax();
      let   BigChain = $(".landParallaxSections__image");
      ScrollTrigger.matchMedia({
        "(min-width: 320px) and (max-width: 650px)": function minwidth320() {
          gsap.timeline({
            scrollTrigger: {
              trigger: ".landParallaxSections__image",
              scrub: true,
              // markers:true,
              start: "top bottom",
              end: "bottom top",
              // end: () => `+=${$(".landParallaxSections").height() - $(".default-section__content--left").height() - 500}`
    
            }
          })
          .to(BigChain, {
            y: "-20%",
            ease: "none" ,
            duration:1
          })
          .to(BigChain, {
            ease: "none" ,
            y: "-200%",
            duration:3
          });
    
         
        },

        "(min-width: 650px) and (max-width: 1023px)": function minwidth320() {
          gsap.timeline({
            scrollTrigger: {
              trigger: ".landParallaxSections__image",
              scrub: true,
              // markers:true,
              start: "top bottom",
              end: "bottom top",
              // end: () => `+=${$(".landParallaxSections").height() - $(".default-section__content--left").height() - 500}`
    
            }
          })
          .to(BigChain, {
            y: "-20%",
            ease: "none" ,
            duration:1
          })
          .to(BigChain, {
            ease: "none" ,
            y: "-250%",
            duration:3
          });
    
         
        },

        "(min-width: 1023px)": function min1023px() {
          gsap.timeline({
            scrollTrigger: {
              trigger: ".landParallaxSections__image",
              scrub: true,
              // markers:true,
              start: "top bottom",
              end: "bottom top",
              // end: () => `+=${$(".landParallaxSections").height() - $(".default-section__content--left").height() - 500}`
    
            }
          })
          .to(BigChain, {
            y: "-10%",
            ease: "none" ,
            duration:1
          })
          .to(BigChain, {
            ease: "none" ,
            y: "-100%",
            duration:3
          });
    
        },
      });
      // BigChainLine.to(BigChain, 1, { 
      //   y: "-65%",
      //   ease: "none" ,
        
      //   scrollTrigger:{
      //     trigger:".landParallaxSections .container",
      //     // markers:true,
      //     scrub:true,
      //     start:"top center",
      //     end:"bottom+=300",
      //     endTrigger:".triggerEndSecond "
      //   }
      // });
      // BigChainLine.fromTo(BigChain, {
      //   y: "-30%",
      // }, {
      //   y: "-70%",
      //   scrollTrigger: {
      //     trigger:".triggerStart",
      //     // markers:true,
      //     scrub:true,
      //     start:"top center",
      //     endTrigger:".triggerEndSecond "
      //   }
      // });

      // BigChainLine.to(BigChain, 1, { 
      //   y: "-20%",
      //   ease: "none" ,
      //   // immediateRender: false,
      //   scrollTrigger:{
      //     trigger:".landParallaxSections",
      //     // markers:true,
      //     scrub:true,
      //     start:"top center",
      //     end:"center bottom",
      //     endTrigger:".triggerStart"
      //   }
      // });
      // BigChainLine.to(BigChain, 1, { 
      //   y: "-80%",
      //   ease: "none" ,
      //   immediateRender: false,
      //   scrollTrigger:{
      //     trigger:".triggerStart",
      //     markers:true,
      //     scrub:true,
      //     start:"top center",
      //     end:"center bottom+=1000",
      //     // endTrigger:".default-section__content--left"
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
     
          let fixedBtn = $(".empty-page__footer--js")
          let landParallaxSections = $(".landParallaxSections")
          if (landParallaxSections.length){
            $(".footer").addClass("land-parallax-color")
          }
          if (fixedBtn.length){
             
            let fixedBtnHeight = $(".empty-page__footer--js").outerHeight();
            $(".main").css("margin-bottom" , footerHeight + fixedBtnHeight  + "px")
            } else {
            $(".main").css("margin-bottom" , footerHeight + "px")
            $(".main").addClass("main-footer-margin")

          }
         
        }
        FixedFooter();
        window.addEventListener('resize', function() {
          FixedFooter();
        });

      if(!isTablet){
        $(".accordeonItem:first-child").addClass("js-active")
        $(".accordeonItem:first-child .accordeonItem__body").addClass("isOpen")
      }
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
            // observer:true,
            navigation: {
              nextEl: ".ourClients__arrow--next",
              prevEl: ".ourClients__arrow--prev",
            },
            pagination: {
              el: ".ourClients__pagination",
              clickable:true,
            },
          },
        },
        
      });
  
  
      
      const swiperReviews = new Swiper(".landReviews__slider", {
        slidesPerView: 1,
        // spaceBetween: 16,
        // centeredSlides: true,
        autoHeight:true,
        navigation: {
          nextEl: ".landReviews__arrow--next",
          prevEl: ".landReviews__arrow--prev",
        },
        pagination: {
          el: ".landReviews__pagination",
          clickable:true,
        },
        
        
      });
  

    try {
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
    } catch {

    }
      function calcHeightReview(){
        // fore
        var line_height;
        if (winw < 600){
          line_height = 20
        } else {
          line_height = 24
        }
        let limitHeight = line_height*8;

       
        // height=product_prod_text_in.height();	
        // var count_rov=height/line_height;
        $(".landReviews:not(.landReviews--hero) .ReviewsItem__desc").each(function() {
          if (isTablet){
            var textIn= $(this).find(".ReviewsItem__descContent").height();
            console.log(textIn)
            console.log(limitHeight)
            if (textIn > limitHeight){
              $(this).find(".ReviewsItem__descContent").addClass("ReviewsItem__descContent--full")
              $(this).closest(".ReviewsItem").find(".ReviewsItem__showmore").addClass("ReviewsItem__showmore--active")
            }
          }
        });

        // Cursors 
        
       
        document.addEventListener("mousemove", moveCursor)
        function moveCursor(e){
          let reviewsCursor = document.querySelectorAll(".landReviews__arrow-wrap")
          let x = e.clientX;
          let y = e.clientY;
          $(".landReviews__arrow-wrap").css("top", y + "px")
          $(".landReviews__arrow-wrap").css("left", x + "px")
  
        }
        // $(".ReviewsItem__showmore").click(function(){
        //   let reviewText = $(this).closest(".ReviewsItem").find(".ReviewsItem__descContent").text()
        //   let landReviewsTitle = $(".landReviews__title").text()
        //   showModal(reviewText,landReviewsTitle)
           
        //   console.log(reviewText)
        // })

        // function showModal(reviewText,landReviewsTitle){
        //   $(".ReviewsItem__modalContent").html(`<div class="ReviewsItem__modalContentTitle">${landReviewsTitle}</div><div class="ReviewsItem__modalContentText">${reviewText}</div>`)
        //   $(".ReviewsItem__modal").addClass("js-active")
        //   $("body").addClass("js-hidden")
       
        // }


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
       
      })
    
      $(".text-page__content table").wrapAll("<div class='text-page__content-wrap'><div class='text-page__content-scroll'></div></div>");
      


      // 3 step


     
      let textToLeftTimeline = gsap.timeline();
   
      textToLeftTimeline.to(".floating__line--right-to-left", 
      {
        x: "-50%",
    
        scrollTrigger:{
          trigger:".floating__line--right-to-left",
          scrub:true,
          start: "top bottom",
          end: "bottom top",
           ease: "none",
          
        }
      });
      textToLeftTimeline.to(".floating__line--left-to-right", 
      {
        x: "50%",
    
        scrollTrigger:{
          trigger:".floating__line--right-to-left",
          scrub:true,
          start: "top bottom",
          end: "bottom top",
           ease: "none",
          
        }
      });

      var projects = new Swiper(".imp-projects__slider", {
        spaceBetween:16,
        slidesPerView: "auto",
        pagination: {
          el: ".imp-projects__swiper-pagination",
          type: "fraction",
          renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                   ' из ' +
                   '<span class="' + totalClass + '"></span>';
        }
        },
        
        navigation: {
          nextEl: ".imp-projects__slider-next",
          prevEl: ".imp-projects__slider-prev",
        },
        breakpoints:{
          1023:{
            spaceBetween:32,
          }
        }
      });
});