function ready() {
    $('.carousel').carousel({
        interval: false,
        wrap: true,
        touch: true,
        pause: "hover",
    })
    $(".carousel-control-prev").on("click", function() {
        $(this).parent().carousel('prev');
    });

    $(".carousel-control-next").on("click", function() {
        $(this).parent().carousel('next');
    });


    $(".navbar-toggler").on("click", function() {
        $(".dop-asset").toggleClass("open");
    });

    function stickyheader() {
        var header = document.getElementsByClassName("navbar-dark")[0];
        var sticky = 250;
        if (window.pageYOffset > sticky) {
            header.classList.add("bg-dark");
        } else {
            header.classList.remove("bg-dark");
        }
    }
    window.onscroll = function() { stickyheader() };
}
document.addEventListener("DOMContentLoaded", ready);