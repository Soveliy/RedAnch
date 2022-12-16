//! Textarea-height

let observe;
let text = document.querySelector('.add__text');

if (window.attachEvent) {
   observe = function (element, event, handler) {
      element.attachEvent('on' + event, handler);
   };
} else {
   observe = function (element, event, handler) {
      element.addEventListener(event, handler, false);
   };
}

function init() {
   function resize() {
      text.style.height = 'auto';
      text.style.height = text.scrollHeight + 'px';
   }

   function delayedResize() {
      requestAnimationFrame(function () {
         resize();
      });

   }
   observe(text, 'change', resize);
   observe(text, 'cut', delayedResize);
   observe(text, 'paste', delayedResize);
   observe(text, 'drop', delayedResize);
   observe(text, 'keydown', delayedResize);

   text.focus();
   text.select();
   resize();
}

init();
