(function() {
  var $animate_scroll_element = $('.animate-scroll');
  var $window = $(window);

  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');

  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animate_scroll_element, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        $element.addClass('in-view fade-in');
      }
      else {
        $element.removeClass('in-view fade-in');
      }
    });
  }

  var prev_scroll_pos = window.pageYOffset;
  window.onscroll = function() {
    var current_scroll_pos = window.pageYOffset;
    if (prev_scroll_pos > current_scroll_pos) {
      document.getElementById("navbar").style.top = "0";
    }
    else {
      document.getElementById("navbar").style.top = "-4rem";
    }
    prev_scroll_pos = current_scroll_pos;
  }

})()