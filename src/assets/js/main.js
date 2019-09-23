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
        
    }
}

nav.init();