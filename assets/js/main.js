/*=============== SHOW MENU ===============*/
// Récupération des éléments du DOM (Document Object Model)
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

// On affiche le menu en ajoutant la classe 'show-menu'
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// On enlève le menu en retirant la classe 'show-menu'
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
// Récupération de tous les liens de navigation
const navLink = document.querySelectorAll('.nav__link')

// Fonction pour retirer le menu lorsqu'un lien est cliqué
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // Quand on clique sur un lien du menu, il se retire
    navMenu.classList.remove('show-menu')
}

// Ajout de l'événement click à chaque lien de navigation
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR HEADER ===============*/
// Fonction pour ajouter un effet de flou à l'en-tête au défilement
const blurHeader = () => {
    const header = document.getElementById('header')
    // Ajoute ou retire la classe 'blur-header' selon la position du défilement
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}

// Écouteur d'événements pour le défilement de la fenêtre
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/ 
// Fonction pour afficher le bouton de retour en haut de page
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // Ajoute ou retire la classe 'show-scroll' selon la position du défilement
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}

// Écouteur d'événements pour le défilement de la fenêtre
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// Récupération de toutes les sections avec un attribut ID
const sections = document.querySelectorAll('section[id]')

// Fonction pour activer le lien de section correspondant au défilement
const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        // Vérifie si la section est dans la zone de défilement pour activer le lien
        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}

// Écouteur d'événements pour le défilement de la fenêtre
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
// Configuration de l'animation ScrollReveal
const sr = ScrollReveal({
    origin: 'top',          // Origine de l'animation
    distance: '80px',       // Distance de l'animation
    duration: 2500,         // Durée de l'animation
    delay: 300,             // Délai de départ de l'animation
    // reset: true           // Animation répétée (optionnel)
})

// Définition des éléments à animer avec ScrollReveal
sr.reveal(`.home__img, .new__data, .care__img, .contact__content, .footer`)
sr.reveal(`.home__data, .care__list, .contact__img`, {delay: 500})
sr.reveal(`.new__card`, {delay: 500, interval: 100})
sr.reveal(`.shop__card`, {interval: 100}) // Animation répétée pour les cartes de la boutique
