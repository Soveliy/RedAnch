$('.callback-btn').click(function () {
   $('#callback-modal').arcticmodal({
      afterOpen: function (data, el) {
         $('body').css('overflow', 'hidden');
         $('.b-modal#callback-modal').addClass('is-active');
      },
      beforeClose: function (data, el) {
         setTimeout(() => {
            $('body').css('overflow', 'auto');
            $('.b-modal').removeClass('is-active');
         }, 100);
      },
   });
});

$('.application-sent').click(function () {
   $('#sent-modal').arcticmodal({
      afterOpen: function (data, el) {
         $('body').css('overflow', 'hidden');
         $('#sent-modal').addClass('is-active');
      },
      beforeClose: function (data, el) {
         setTimeout(() => {
            $('body').css('overflow', 'auto');
            $('.b-modal#sent-modal').removeClass('is-active');
         }, 100);
      },
   });
});

$('.order-ready').click(function () {
   $('#order-modal').arcticmodal({
      afterOpen: function (data, el) {
         $('body').css('overflow', 'hidden');
         $('.b-modal#order-modal').addClass('is-active');
      },
      beforeClose: function (data, el) {
         setTimeout(() => {
            $('body').css('overflow', 'auto');
            $('.b-modal').removeClass('is-active');
         }, 100);
      },
   });
});

$('.order-technical').click(function () {
   $('#technical-modal').arcticmodal({
      afterOpen: function (data, el) {
         $('body').css('overflow', 'hidden');
         $('.b-modal#technical-modal').addClass('is-active');
      },
      beforeClose: function (data, el) {
         setTimeout(() => {
            $('body').css('overflow', 'auto');
            $('.b-modal').removeClass('is-active');
         }, 100);
      },
   });
});

$('.were-questions').click(function () {
   $('#questions-modal').arcticmodal({
      afterOpen: function (data, el) {
         $('body').css('overflow', 'hidden');
         $('.b-modal#questions-modal').addClass('is-active');
      },
      beforeClose: function (data, el) {
         setTimeout(() => {
            $('body').css('overflow', 'auto');
            $('.b-modal').removeClass('is-active');
         }, 100);
      },
   });
});

$('.add-goods').click(function () {
   $('#add-modal').arcticmodal({
      afterOpen: function (data, el) {
         $('body').css('overflow', 'hidden');
         $('.b-modal#add-modal').addClass('is-active');
      },
      beforeClose: function (data, el) {
         setTimeout(() => {
            $('body').css('overflow', 'auto');
            $('.b-modal').removeClass('is-active');
         }, 100);
      },
   });
});

$('.add-goods2').click(function () {
   $('#add-modal2').arcticmodal({
      afterOpen: function (data, el) {
         $('body').css('overflow', 'hidden');
         $('.b-modal#add-modal2').addClass('is-active');
      },
      beforeClose: function (data, el) {
         setTimeout(() => {
            $('body').css('overflow', 'auto');
            $('.b-modal').removeClass('is-active');
         }, 100);
      },
   });
});

$('.add-goods3').click(function () {
   $('#add-modal3').arcticmodal({
      afterOpen: function (data, el) {
         $('body').css('overflow', 'hidden');
         $('.b-modal#add-modal3').addClass('is-active');
      },
      beforeClose: function (data, el) {
         setTimeout(() => {
            $('body').css('overflow', 'auto');
            $('.b-modal').removeClass('is-active');
         }, 100);
      },
   });
});

$('.form-order-btn').click(function () {
   $('#form-order-modal').arcticmodal({
      afterOpen: function (data, el) {
         $('body').css('overflow', 'hidden');
         $('.b-modal#form-order-modal').addClass('is-active');
      },
      beforeClose: function (data, el) {
         setTimeout(() => {
            $('body').css('overflow', 'auto');
            $('.b-modal').removeClass('is-active');
         }, 100);
      },
   });
});

$('.form-order-btn-fast').click(function () {
   $('#form-order-modal-fast').arcticmodal({
      afterOpen: function (data, el) {
         $('body').css('overflow', 'hidden');
         $('.b-modal#form-order-modal-fast').addClass('is-active');
      },
      beforeClose: function (data, el) {
         setTimeout(() => {
            $('body').css('overflow', 'auto');
            $('.b-modal').removeClass('is-active');
         }, 100);
      },
   });
});


$('.label-link--modal').click(function () {
   $('#how-to-get').arcticmodal({
      afterOpen: function (data, el) {
         $('body').css('overflow', 'hidden');
         $('.b-modal#how-to-get').addClass('is-active');
      },
      beforeClose: function (data, el) {
         setTimeout(() => {
            $('body').css('overflow', 'auto');
            $('.b-modal').removeClass('is-active');
         }, 100);
      },
   });
});





$('.content__information').click(function () {
   $('#reference-modal').arcticmodal({
      afterOpen: function (data, el) {
         $('body').css('overflow', 'hidden');
         $('#reference-modal').addClass('is-active');
      },
      beforeClose: function (data, el) {
         setTimeout(() => {
            $('body').css('overflow', 'auto');
            $('.b-modal#reference-modal').removeClass('is-active');
         }, 100);
      },
   });
});


$('.form-order-btn-found').click(function () {
   $('#form-found-modal').arcticmodal({
      afterOpen: function (data, el) {
         $('body').css('overflow', 'hidden');
         $('#form-found-modal').addClass('is-active');
      },
      beforeClose: function (data, el) {
         setTimeout(() => {
            $('body').css('overflow', 'auto');
            $('.b-modal#form-found-modal').removeClass('is-active');
         }, 100);
      },
   });
});



