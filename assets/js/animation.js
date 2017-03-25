$(document).ready(function(){
//$(function() {
//  $('a[href*="#"]').click(function() {
//    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//      var target = $(this.hash);
//      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//      if (target.length) {
//        $('html, body').animate({
//          scrollTop: target.offset().top
//        }, 1000, "slow");
//        return false;
//      }
//    }
//  });
//});
    
    $('a[href^="#"]').on('click', function(e){
        e.preventDefault();
        
        var target = this.hash;
        
        var $target= $(target);
        
        //Scroll and show hash//
        $('html, body').animate({
            'scrollTop':$target.offset().top}, 1000, 'swing', function(){
            window.location.hash = target;
        
        });
    });
});