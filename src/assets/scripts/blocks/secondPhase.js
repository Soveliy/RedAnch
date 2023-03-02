window.addEventListener('load', function() {
    function calculateVh() {
        var vhSection = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vhSection', vhSection + 'px');
      }
      
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
});