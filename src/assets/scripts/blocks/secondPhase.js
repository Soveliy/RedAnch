window.addEventListener('load', function() {
    function calculateVh() {
        var vhSection = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vhSection', vhSection + 'px');
    }
    var winw = window.innerWidth || e.clientWidth || g.clientWidth;
    var isTablet = winw < 1024;
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
          $(this).next().slideToggle(800);
          $(this).parent().siblings().find(".accordeonItem__body").hide(800);
        } 
      });

      $(".accordeonItem__bg").click(function(){
        $("body").removeClass("js-hidden")
        $(".accordeonItem__body,.accordeonItem").removeClass("js-active")
      })
    

    
      const swiperReviews = new Swiper(".ourClients__slider", {
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: true,
       
        
      });
      
      
});