document.addEventListener('DOMContentLoaded', () => {
    // 1. Get the buttons
    const menuToggle = document.getElementById('menuToggle');
    const cartToggle = document.getElementById('cartToggle');
    
    // 2. Get the sections we want to hide or show
    const mainNav = document.getElementById('main-nav');
    const purchasesAside = document.getElementById('purchasesAside');

    // 3. Toggle the Burger Menu
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            // This adds or removes the 'hidden' class when clicked
            mainNav.classList.toggle('hidden');
        });
    }

    // 4. Toggle the Shopping Cart (Purchases Aside)
    if (cartToggle && purchasesAside) {
        cartToggle.addEventListener('click', () => {
            // This adds or removes the 'hidden' class when clicked
            purchasesAside.classList.toggle('hidden');
        });
    }
});
