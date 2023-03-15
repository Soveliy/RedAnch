window.addEventListener('load', function() {
    function calculateVh() {
        var vhSection = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vhSection', vhSection + 'px');
    }
    var winw = window.innerWidth || e.clientWidth || g.clientWidth;
    var isTablet = winw < 1024;
    var isMobile = winw < 600;

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


      var tl = new TimelineMax();
      let parallaxElem = $(".land-hero__picture img");
      tl.to(parallaxElem, 1, { 
        y: -200,
        ease: "cubic-bezier(.5,0,0,1)" ,
        scrollTrigger:{
          trigger:parallaxElem,
          scrub:true,
          start:"top top"
        }
      });

      var tl2 = new TimelineMax();
      let  aboutprod__picture = $(".about-prod__picture img");
      tl2.to(aboutprod__picture, 1, { 
        y: -100,
        ease: "cubic-bezier(.5,0,0,1)" ,
        scrollTrigger:{
          trigger:aboutprod__picture,
          scrub:true,
          start:"top top"
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