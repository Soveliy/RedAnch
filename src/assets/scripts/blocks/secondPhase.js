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
     
      TL.to(".history-step__dates image", {
        yPercent:20,
        ease: "none",
        scrollTrigger: {
          // markers:true,
          trigger: ".history-step__dates",
          // start: "top center+=300px",
          // end: "bottom center-=300px",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
      TL.to(".about-factory__image--mob image", {
        yPercent:20,
        ease: "none",
        scrollTrigger: {
          // markers:true,
          trigger: ".about-factory__image--mob",
          // start: "top center+=300px",
          // end: "bottom center-=300px",
          start: "top=+1 bottom",
          end: "bottom top",
          scrub: true
        }
      });

      TL.to(".about-factory__image--desk image", {
        yPercent:20,
        ease: "none",
        scrollTrigger: {
          // markers:true,
          trigger: ".about-factory__image--desk",
          // start: "top center+=300px",
          // end: "bottom center-=300px",
          start: "top=+1 bottom",
          end: "bottom top",
          scrub: true
        }
      });
      TL.to(".assortment__image image", {
        yPercent:20,
        ease: "none",
        scrollTrigger: {
          // markers:true,
          trigger: ".assortment__image",
          // start: "top center+=300px",
          // end: "bottom center-=300px",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
      TL.to(".registry__image image", {
        yPercent:10,
        ease: "none",
        scrollTrigger: {
          // markers:true,
          trigger: ".registry__image",
          // start: "top center+=300px",
          // end: "bottom center-=300px",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
      
      
    
      ScrollTrigger.matchMedia({
        "(min-width: 320px) and (max-width: 568px)": function minWidth320pxAndMaxWidth599px() {
          var chainBig = new TimelineMax();
          let chainBigElem = $(".numeral__picture");
          chainBig.to(chainBigElem, 1, { 
            y: "-70%",
            ease: "none" ,
           
            scrollTrigger:{
              trigger:chainBigElem,
              scrub:true,
              start: "top bottom",
              end: "bottom top",
              // markers:true
            }
          });


             
          TL.to(".constructor__picture img", {
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

             
          TL.to(".constructor__picture img", {
            top: "100px",
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
            y: "-27%",
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
            y: "-75%",
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
        "(min-width: 320px) and (max-width: 1023px)": function minWidth320pxAndMaxWidth1023px() {
                
          if($(".advancher__title").hasClass("advancher__title--big")){
            TL.to(".advancher__title--big", {
              backgroundPosition: "100% 95%",
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
        },
        "(min-width: 1024px)": function minWidth1024px() {
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
              trigger:SectionRightBtn,
             
              scrub:true,
              markers:true,
              // start:"top center",
              // end:"bottom"
              start: "top bottom",
              end: "bottom top",
            }
          });
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
        },
        "(max-width: 1024px)": function maxWidth1024px() {
          $(".default-section__picture").each(function() {
            let imgTimeLine = new TimelineMax();
            let child = $(this).find("img");
            let parallaxY;
            if (!isTablet){
              parallaxY = -180
            } else {
              parallaxY = -40
            }
            imgTimeLine.to(child, 1, {
               y: parallaxY,
               ease: "none" ,
               scrollTrigger:{
                trigger:$(this),
                scrub:true,
               }
              });
            });
        },
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
            y: "-40%",
            ease: "none" ,
            duration:1
          })
          .to(BigChain, {
            ease: "none" ,
            y: "-380%",
            duration:6
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
            y: "-12%",
            ease: "none" ,
            duration:1
          })
          .to(BigChain, {
            ease: "none" ,
            y: "-150%",
            duration:4
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
          $(".body__page,.constructor").addClass("isBigIndex")
        } else {
          
          $(this).parent().siblings().find(".accordeonItem__body").removeClass("isOpen");
          $(this).next().toggleClass("isOpen");
         
        } 
      });

      $('.vacancy').on('click', '.vacancy__item-head:not(.js-active)', function() {
        $(this).parent().toggleClass('js-active').siblings().removeClass('js-active')
      
          $(this).parent().siblings().find(".vacancy__item-body").removeClass("js-active");
          $(this).next().toggleClass("js-active");
         
        
      });

      $(".accordeonItem__bg,.accordeonItem__close").click(function(){
        $("body").removeClass("js-hidden")
        bodyScrollLock.clearAllBodyScrollLocks();
        $(".accordeonItem__body,.accordeonItem").removeClass("js-active")
        $(this).parent().siblings().find(".accordeonItem__body")
        $(".body__page,.constructor").removeClass("isBigIndex")
      })
      $(".hero__linkLabel .linkLabel__box").click(function(){
        $("#industriesModal").arcticmodal({
          afterOpen: function (data, el) {
            $('body').css('overflow', 'hidden');
            $('.b-modal#industriesModal').addClass('is-active');
         },
         beforeClose: function (data, el) {
            setTimeout(() => {
               $('body').css('overflow', 'auto');
               $('.b-modal').removeClass('is-active');
            }, 100);
         },
        })
        
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

      const swiperReviewsPhoto = new Swiper(".our-team__photo-slider", {
        slidesPerView: 1,
        // spaceBetween: 16,
        // centeredSlides: true,
        // autoHeight:true,
        watchSlidesProgress: true,
        
        
      });
      const swiperReviewsP = new Swiper(".our-team__slider", {
        slidesPerView: 1,
        // spaceBetween: 16,
        // centeredSlides: true,
        // autoHeight:true,
        navigation: {
          nextEl: ".our-team .landReviews__arrow--next",
          prevEl: ".our-team .landReviews__arrow--prev",
        },
        pagination: {
          el: ".our-team__pagination",
          clickable:true,
        },
        
        thumbs: {
          swiper: swiperReviewsPhoto,
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
        let limitHeight = line_height*10;

       
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

        $(".our-team .ReviewsItem__desc").each(function() {
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

        document.addEventListener("mousemove", moveCursor2)
        function moveCursor2(e){
          let reviewsCursor2 = document.querySelectorAll(".imp-projects__arrow-wrap")
          let x = e.clientX;
          let y = e.clientY;
          $(".imp-projects__arrow-wrap").css("top", y + "px")
          $(".imp-projects__arrow-wrap").css("left", x + "px")
  
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
       
      })
    
      $(".text-page__content table").wrapAll("<div class='text-page__content-wrap'><div class='text-page__content-scroll'></div></div>");
      


      // 3 step


     
      let textToLeftTimeline = gsap.timeline();
      let elemsRight = document.querySelectorAll(".floating__line--right-to-left")
      let elemsLeft = document.querySelectorAll(".floating__line--left-to-right")
      textToLeftTimeline.to(elemsRight[0], 
      {
        x: "-50%",
    
        scrollTrigger:{
          trigger:elemsRight[0],
          scrub:true,
          start: "top bottom",
          end: "bottom top",
           ease: "none",
          
        }
      });
      textToLeftTimeline.to(elemsLeft[0], 
      {
        x: "50%",
    
        scrollTrigger:{
          trigger:elemsRight[0],
          scrub:true,
          start: "top bottom",
          end: "bottom top",
           ease: "none",
          
        }
      });

      textToLeftTimeline.to(elemsRight[1], 
        {
          x: "-50%",
      
          scrollTrigger:{
            trigger:elemsRight[1],
            scrub:true,
            start: "top bottom",
            end: "bottom top",
             ease: "none",
            
          }
        });
        textToLeftTimeline.to(elemsLeft[1], 
        {
          x: "50%",
      
          scrollTrigger:{
            trigger:elemsRight[1],
            scrub:true,
            start: "top bottom",
            end: "bottom top",
             ease: "none",
            
          }
        });
        textToLeftTimeline.to(elemsRight[2], 
          {
            x: "-20%",
        
            scrollTrigger:{
              trigger:elemsRight[2],
              scrub:true,
              start: "top bottom",
              end: "bottom top",
               ease: "none",
              
            }
          });
          textToLeftTimeline.to(elemsLeft[2], 
          {
            x: "30%",
        
            scrollTrigger:{
              trigger:elemsRight[2],
              scrub:true,
              start: "top bottom",
              end: "bottom top",
               ease: "none",
              
            }
          });
        
          $(".history-step__image").each(function() {
            var stepImages = new TimelineMax();
            var child = $(this).find("img");
            let parallaxY;
            if (!isTablet){
              parallaxY = -120
            } else {
              parallaxY = -80
            }
            stepImages.to(child, 1, {
               y: parallaxY,
               ease: "none" ,
               scrollTrigger:{
                trigger:$(this),
                scrub:true,
               }
              });
          });
          if(!isTablet){
            let numbersAnim = gsap.timeline();
            let numbersItem = document.querySelectorAll(".numbers-prod__row")
            
            numbersAnim.to(numbersItem, 
            {
              x: "-30%",
          
              scrollTrigger:{
                trigger:numbersItem,
                scrub:true,
                start: "top bottom",
                end: "bottom top",
                 ease: "none",
                
              }
            });
          }
            $(".first-step__image").each(function() {
              var stepImages = new TimelineMax();
              var child = $(this).find("img");
              let parallaxY;
              if (!isTablet){
                parallaxY = -180
              } else {
                parallaxY = -80
              }
              stepImages.to(child, 1, {
                 y: parallaxY,
                 ease: "none" ,
                 scrollTrigger:{
                  trigger:$(this),
                  scrub:true,
                 }
                });
              });
            $(".cycle-stages__picture").each(function() {
              var stepImages = new TimelineMax();
              var child = $(this).find("img");
              let parallaxY;
              if (!isTablet){
                parallaxY = -180
              } else {
                parallaxY = -80
              }
              stepImages.to(child, 1, {
                 y: parallaxY,
                 ease: "none" ,
                 scrollTrigger:{
                  trigger:$(this),
                  scrub:true,
                 }
                });
              });
              $(".load-range__image").each(function() {
                let loadRange = new TimelineMax();
                let child = $(this).find("img");
                let parallaxY;
                if (!isTablet){
                  parallaxY = -180
                } else {
                  parallaxY = -80
                }
                loadRange.to(child, 1, {
                   y: parallaxY,
                   ease: "none" ,
                   scrollTrigger:{
                    trigger:$(this),
                    scrub:true,
                   }
                  });
                });
                $(".about-load-range__image").each(function() {
                  let loadRange = new TimelineMax();
                  let child = $(this).find("img");
                  let parallaxY;
                  if (!isTablet){
                    parallaxY = -180
                  } else {
                    parallaxY = -80
                  }
                  loadRange.to(child, 1, {
                     y: parallaxY,
                     ease: "none" ,
                     scrollTrigger:{
                      trigger:$(this),
                      scrub:true,
                     }
                    });
                  });
                  $(".about-prod-text__image").each(function() {
                    let imgTimeLine = new TimelineMax();
                    let child = $(this).find("img");
                    let parallaxY;
                    if (!isTablet){
                      parallaxY = -180
                    } else {
                      parallaxY = -80
                    }
                    imgTimeLine.to(child, 1, {
                       y: parallaxY,
                       ease: "none" ,
                       scrollTrigger:{
                        trigger:$(this),
                        scrub:true,
                       }
                      });
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
          nextEl: ".imp-projects__arrow--next",
          prevEl: ".imp-projects__arrow--prev",
        },
        breakpoints:{
          1023:{
            spaceBetween:32,
          }
        }
      });
      $('.sideMenu__link').click(function(e) {
        e.preventDefault();
        var id = $(this).attr('data-tab'),
            content = $('.inform[data-tab="'+ id +'"]');
        
        $('.sideMenu__link').parent().removeClass('sideMenu__item--current');
        $(this).parent().addClass('sideMenu__item--current');
        
        $('.inform.active').removeClass('active');
        content.addClass('active');
     });

     $('.site-map__btn').click(function(e) {
      $("body").toggleClass("js-hidden")
      $(".burger").toggleClass("js-active")
        $(this).parent().toggleClass("js-active")
      });
      $('.about-prod-text__other-info-link,.conditions-item__link').click(function(e) {
          $("#text-modal").arcticmodal({
            afterOpen: function (data, el) {
              $('body').css('overflow', 'hidden');
              $('#text-modal').addClass('is-active');
           },
           beforeClose: function (data, el) {
              setTimeout(() => {
                 $('body').css('overflow', 'auto');
                 $('.b-modal#text-modal').removeClass('is-active');
              }, 100);
           },
          })
        });

     
       
      
     
});