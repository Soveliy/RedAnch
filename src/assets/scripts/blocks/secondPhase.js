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
      window.addEventListener('resize', calculateVh);

      var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap
      TweenMaxWithCSS = gsapWithCSS.core.Tween;
      var TL = gsapWithCSS.timeline();


      TL.to(".advancher__title", {
        backgroundPosition: "100% 80%",
        ease: "none",
        scrollTrigger: {
          trigger: ".advancher__title",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      $('.accordeon').on('click', '.accordeonItem__head:not(.js-active)', function() {
        $(this).parent().addClass('js-active').siblings().removeClass('js-active')
        if (isTablet){
          
          $("body").addClass("js-hidden")
          $(this).next().addClass("js-active")
          $(this).parent().siblings().find(".accordeonItem__body").removeClass("js-active")
        } else {
        
          $(this).parent().siblings().find(".accordeonItem__body").hide(800);
          $(this).next().slideToggle(800);
         
        } 
      });

      $(".accordeonItem__bg").click(function(){
        $("body").removeClass("js-hidden")
        $(".accordeonItem__body,.accordeonItem").removeClass("js-active")
      })
    

    
      const swiperClients = new Swiper(".ourClients__slider", {
        slidesPerView: "auto",
        spaceBetween: 16,
        // centeredSlides: true,
       
        
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
      function calcHeightReview(){
        // fore
        var line_height=20;
        let limitHeight = line_height*5;

       
        // height=product_prod_text_in.height();	
        // var count_rov=height/line_height;
        $(".ReviewsItem__desc").each(function() {
          if (isMobile){
            var textIn= $(this).find(".ReviewsItem__descContent").height();
            console.log(textIn)
            if (textIn > limitHeight){
              $(this).find(".ReviewsItem__descContent").addClass("ReviewsItem__descContent--full")
              $(this).find(".ReviewsItem__showmore").addClass(".ReviewsItem__showmore--active")
            }
          }
        });
      
       
       
      }
      calcHeightReview();
     

      



  

      
});