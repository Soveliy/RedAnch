
        $(".callback-btn").click(function(){
            $("#callback-modal").arcticmodal({
              afterOpen: function(data, el) {
                $('body').css('overflow','hidden');
                $(".b-modal").addClass("is-active")
              },
              beforeClose: function(data, el) {
               setTimeout(() => {
                $('body').css('overflow','auto');
                $(".b-modal").removeClass("is-active")
               }, 100);
              },
            });
          });