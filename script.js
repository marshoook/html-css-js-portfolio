
//Hamburger menu links 
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}



//Reveal Animation 
window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i=0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint ){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}


  
 //Sticky nav bar animation Desktop
// script.js
let lastScrollY = window.scrollY;
const header = document.getElementById('header');
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > lastScrollY && currentScrollY > headerHeight) {
    // Scrolling down & below header height
    header.style.top = `-${headerHeight}px`;
  } else {
    // Scrolling up or at the top
    header.style.top = '0';
  }
  lastScrollY = currentScrollY;
});

//Sticky nav bar animation for hamburger nav
// script.js
let lastScrollY2 = window.scrollY;
const header2 = document.getElementById('header2');
const headerHeight2 = header2.offsetHeight;

window.addEventListener('scroll', () => {
  const currentScrollY2 = window.scrollY;
  if (currentScrollY2 > lastScrollY2 && currentScrollY2 > headerHeight2) {
    // Scrolling down & below header height
    header2.style.top = `-${headerHeight2}px`;
  } else {
    // Scrolling up or at the top
    header2.style.top = '0';
  }
  lastScrollY2 = currentScrollY2;
});


//Scroll To the top of the page or reload the page is it's already at the top
// script.js

// Function to handle click event
function scrollToTopOrReload() {
    if (window.scrollY > 0) {
      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Reload the entire page
      location.reload();
    }
  }

  
  //Type writter effect for the text on the Load
  
