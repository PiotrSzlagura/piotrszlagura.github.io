$j = jQuery.noConflict();

$j(function () {

    $j("a").click(function (event) {
        if($j(this).attr("href") == "#" || $j(this).attr("href") == "#!") {
            event.preventDefault();
        }
    });

    $j("[data-toggle='mobile-menu']").click(function () {
        $j(this).children(".mobile-menu-lines").toggleClass("active");
        $j("html, body").toggleClass("mobile-navigation-visible");
    });

    $j("[data-on-click='scroll-down']").click(function () {
        var scroll = $j("#homepage-next").offset().top;
        $j("html,body").animate({
            scrollTop: scroll
        }, 750);

    });

    var carouselOptions = {
        withNavigation: {
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 2
                },
                1199: {
                    items: 3
                }
            },
            nav: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ]
        },
        noNavigation: {
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 2
                },
                1199: {
                    items: 3
                }
            },
            navigation: false
        },
        productOptions: {
            center: true,
            items: 2,
            loop: false,
            margin: 10,
            responsive: {
                767: {
                    items: 4
                }
            },
            pagination: false,
            smartSpeed: 200
        }
    };

    $j("#featured-products").owlCarousel(carouselOptions.withNavigation);
    $j("#journal-carousel").owlCarousel(carouselOptions.noNavigation);
    $j(".products-list:not(.featured)").owlCarousel(carouselOptions.noNavigation);
    $j(".products-list.featured").owlCarousel(carouselOptions.withNavigation);
    $j(".product-options").owlCarousel(carouselOptions.productOptions);
    $j(".product-details-carousel").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ]
    });

    function updateOptionsPagination(index) {
        $j(".options-pagination .option-circle").removeClass("active");
        $j(".options-pagination .option-circle").each(function () {
            if ($j(this).attr('data-go-to') == index) {
                $j(this).addClass("active");
            }
        });
    }

    function updateDropdownSelection(index) {
        $j(".color-selection-dropdown [data-go-to]").removeClass("active");
        $j(".color-selection-dropdown [data-go-to]").each(function () {
            if ($j(this).attr('data-go-to') == index) {
                $j(this).addClass("active");
            }
        });
    }

    if ($j(".product-options").length > 0) {
        var productsCarousel = $j(".product-options").data("owlCarousel");


        $j(".product-options [data-go-to], .options-pagination [data-go-to], .color-selection-dropdown [data-go-to]").click(function () {
            var _index = $j(this).attr('data-go-to');
            productsCarousel.to(_index);
            updateOptionsPagination(_index);
            updateDropdownSelection(_index);

        });

        $j(".product-options").on("changed.owl.carousel", function (event) {
            updateOptionsPagination(event.item.index);
        });
    }

    $j("[data-ps-pt-toggle]").click(function () {
        var index = $j(this).attr("data-ps-pt-toggle");
        $j("[data-ps-pt-toggle]").removeClass("active");
        $j(this).addClass("active");
        $j("[data-ps-pt-content]").removeClass("open");
        $j("[data-ps-pt-content=" + index + "]").addClass("open");
    });

    var header = $j('header');

    $j(window).scroll(function(){
        if($j(window).scrollTop() > 500) {
            if(!header.hasClass("fixed"))
                header.addClass('fixed');
        }
        if($j(window).scrollTop() < 499) {
            if(header.hasClass("fixed"))
                header.removeClass('fixed');
        }
    });

});