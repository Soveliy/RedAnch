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

$('.order-products').click(function () {
  $('#products-modal').arcticmodal({
    afterOpen: function (data, el) {
      $('body').css('overflow', 'hidden');
      $('.b-modal#products-modal').addClass('is-active');
    },
    beforeClose: function (data, el) {
      setTimeout(() => {
        $('body').css('overflow', 'auto');
        $('.b-modal').removeClass('is-active');
      }, 100);
    },
  });
});
