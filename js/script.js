window.addEventListener('load', () => {
    document.querySelector('.main').classList.remove('hidden');
    document.querySelector('.home-section').classList.add('active');
    // Page Loader ----------- //
    document.querySelector('.page-loader').classList.add('fade-out');
    setTimeout(() => {
        document.querySelector('.page-loader').style.display = 'none';
    },600);
});

// Toggle NavBar -------------------------------------//
const navToggler = document.querySelector('.nav-toggler');
navToggler.addEventListener('click', () => {
    hideSection();
    toggleNavbar();
    document.body.classList.toggle('hide-scrolling');
});

function hideSection() {
    document.querySelector('section.active').classList.toggle('fade-out');
}
function toggleNavbar() {
    document.querySelector('.header').classList.toggle('active');
}

// Active Section -----------------------------//

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('link-item') && e.target.hash !== '') {
        document.querySelector('.overlay').classList.add('active'); // activate overlay to prevent multiple clicks
        navToggler.classList.add('hide');
       if(e.target.classList.contains('nav-item')) {
           toggleNavbar();
       } else {
           hideSection();
           document.body.classList.add('hide-scrolling');
       }
       setTimeout(() => {
           document.querySelector('section.active').classList.remove('active', 'fade-out');
           document.querySelector(e.target.hash).classList.add('active');
           window.scrollTo(0,0);
           document.body.classList.remove('hide-scrolling');
           navToggler.classList.remove('hide');
           document.querySelector('.overlay').classList.remove('active');
       },80);   // this changes the transition speed between links (home, contact, about etc...)
    }
});



// About Tabs ------------------------------- //
const tabsContainer = document.querySelector('.about-tabs'), 
aboutSection = document.querySelector('.about-section');

// function that's switching between "education" and "experience" content
tabsContainer.addEventListener('click', (e) => {           // arrow function with e as a parameter
    if (e.target.classList.contains('tab-item') && !e.target.classList.contains('active')) {
        tabsContainer.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
        const target = e.target.getAttribute('data-target');
        aboutSection.querySelector('.tab-content.active').classList.remove('active');
        aboutSection.querySelector(target).classList.add('active');
    }
});

// Portfolio Item Details PopUp ---------------------//
document.addEventListener('click', (e) => {
    if(e.target.classList.contains('view-project-btn')) {
        togglePortfolioPopup();
        document.querySelector('.portfolio-popup').scrollTo(0,0);
        portfolioItemDetails(e.target.parentElement);
    }
})
function togglePortfolioPopup() {
    document.querySelector('.portfolio-popup').classList.toggle('open');
    document.body.classList.toggle('hide-scrolling');
    document.querySelector('.main').classList.toggle('fade-out');
}
document.querySelector('.pp-close').addEventListener('click', togglePortfolioPopup);

// Hide Popup when clicking outside of the window
document.addEventListener('click', (e) => {
    if(e.target.classList.contains('pp-inner')) {
        togglePortfolioPopup();
    }
});

function portfolioItemDetails(portfolioItem) {
    document.querySelector('.pp-thumbnail img').src =
    portfolioItem.querySelector('.portfolio-item-thumbnail img').src;

    document.querySelector('.pp-header h3').innerHTML =
    portfolioItem.querySelector('.portfolio-item-title').innerHTML;

    document.querySelector('.pp-body').innerHTML =
    portfolioItem.querySelector('.portfolio-item-details').innerHTML;
}

// Typing effect

let txt = document.getElementById('hello-text');
let txtTyped = 'Frontend Web Developer';
let index = 0, isAdding = true;

function playAnimation() {
    setTimeout(function () {
        txt.innerText = txtTyped.slice(0, index);
        if(isAdding) {
            if(index > txtTyped.length) {
                isAdding = false;

                setTimeout(function () {
                    playAnimation()
                }, 2000);
                return;
            } else {
                index++
            }
        } else {
            if (index === 0) {
                isAdding = true;
            } else {
                index --
            }
        }
        playAnimation();
    }, 100);
};
playAnimation();