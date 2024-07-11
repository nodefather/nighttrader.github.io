(function ($) {
    "use strict"

    // Toggle Nav
    $(".nav-control").on('click', function() {
        $('#main-wrapper').toggleClass("menu-toggle");
        $(".hamburger").toggleClass("is-active");
    });

    // Metis Menu
    $('#menu').metisMenu();

    // Side nav active class
    $(".quixnav-scroll").slimscroll({
        position: "left",
        size: "5px",
        height: "100%",
        color: "transparent"
    });

    // Active menu item
    $(function() {
        for (var nk = window.location,
                o = $("ul#menu a").filter(function() {
                    return this.href == nk;
                })
                .addClass("active")
                .parent()
                .addClass("active"); ;) {
            if (!o.is("li")) break;
            o = o.parent()
                .addClass("in")
                .parent()
                .addClass("active");
        }
    });

    // Search bar toggle
    $(".search-toggle").on("click", function(e) {
        $(".search-box").toggleClass("active");
    });

    // Remove active class from search input on click outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.search-box').length && $('.search-box').hasClass('active')) {
            $('.search-box').removeClass('active');
        }
    });

})(jQuery);
