$(document).ready(function () {
    $(".nav a").click(function (e) {

        $('html,body').animate({
            scrollTop: $($.attr(this,'href')).offset().top
        },3000);
        e.preventDefault();
    });
})
