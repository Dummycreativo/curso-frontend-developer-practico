const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHambIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const cartDetail = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHambIcon.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleCartDetail);

function toggleDesktopMenu() {
    const isCartDetailClosed = cartDetail.classList.contains('inactive');
    if (!isCartDetailClosed){
        cartDetail.classList.add('inactive'); 
    }
    desktopMenu.classList.toggle('inactive'); 
}

function toggleMobileMenu() {
    const isCartDetailClosed = cartDetail.classList.contains('inactive');

    if (!isCartDetailClosed) {
        cartDetail.classList.add('inactive'); 
    }
    mobileMenu.classList.toggle('inactive'); 
}

function toggleCartDetail() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    // Is mobileMenu open? 
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
    cartDetail.classList.toggle('inactive'); 
}