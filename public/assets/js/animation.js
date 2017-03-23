// $('a.scrollTo').on('click', function(e){

    // e.preventDefault();

    
    // var scrollTo = $(this).attr('data-scrollTo');
    // $('body, html').animate({
    //     'scrollTop':$("#"+scrollTo).targetoffset().top}, 1000,'slow');
    //     return false;
    

// });
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 6000);
        return false;
      }
    }
  });
});
// $(document).ready(function(){
//     $('a[href^="#"]').click(function(e){
//         var target = $(this).attr('href');

//         var strip = target.slice(1);
//         var anchor = $("a[name='"+ strip +"']");

//         //Prevents the page from reloading//
//         e.preventDefault();

//         $('html,body').animate({
//             scrollTop: anchor.offset().top
         



//         },'slow');


//     });
// })