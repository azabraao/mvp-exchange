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

nav.init();
faq.init();