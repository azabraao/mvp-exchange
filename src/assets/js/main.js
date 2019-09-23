const nav = {
    init() {
        $('.jsMobileMenuToggler').on('click', nav.toggleMenu);
        $('.jsMenulinks a').on('click', nav.toggleMenu);
    },
    toggleMenu() {
        $('.jsMobileNav').toggleClass('active');
    }
}


const faq =  {
    init() {
        $('.jsFaqHeader').on('click', faq.showQuestion);
    },
    showQuestion() {
        console.log('click')
        $(this).next().toggleClass('active')
        $(this).toggleClass('active')
    }
}

const slide = {
    init() {
        // $('.jsParceirosSlide').slick({
        //     slidesToShow: 2,
        //     slidesToScroll: 2,
        //     arrows: false,
        //     fade: true,
        // });
        $('.jsParceirosSlide').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    }
}

$(document).ready(function() {
    nav.init();
    faq.init();
    slide.init();
})