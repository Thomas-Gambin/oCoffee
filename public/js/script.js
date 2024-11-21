// Alerte projet
window.onload = function () {
    const firstVisitDate = localStorage.getItem('firstVisitDate');

    if (!firstVisitDate || (new Date() - new Date(firstVisitDate)) > 24 * 60 * 60 * 1000) {
        alert("Ce site est un projet qui n'a pas de but lucratif.");

        localStorage.setItem('firstVisitDate', new Date().toString());
    }
};

// Menu Hamburger
const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
})

// Voir tous les produits
document.getElementById('voir-tous-btn').addEventListener('click', function () {
    // On séléctionne ce que l'on veut
    const produits = document.querySelectorAll('.container_produits')
    const produitsFull = document.querySelectorAll('.container_produits-full')
    // On cache les 3 produits
    produits.forEach(produit => {
        produit.style.display = 'none'
    });
    // On affiche tous les produits
    produitsFull.forEach(produit => {
        produit.style.display = 'flex'
    });

    document.getElementById('voir-tous-btn').style.display = 'none';
});

