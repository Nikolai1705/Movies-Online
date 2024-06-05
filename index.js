$(document).ready(function(){
      $(".owl-carousel").owlCarousel({
        items: 6, // Maximum number of items to show
        loop: true, // Allows continuous loop sliding
        margin: 0, // Space between items
        nav: true, // Show next/prev buttons
        navText: ['<', '>'],
        responsive: {
          0: {
            items: 1 // 1 item below 600px
          },
          600: {
            items: 3 // 2 items between 600px and 1000px
          },
          1000: {
            items: 6 // 3 items above 1000px
          }
        }
      });
    });