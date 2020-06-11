// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

const menuIcon = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const navLink = document.querySelector('.nav-link');
// menuIcon.addEventListener('click', () => {
//     console.log('clicked');
//     navLinks.classList.add('clicked');
//     menuIcon.addEventListener('click', () => {
//       navLinks.classList.remove('clicked');
//     });
// });

$('#menu-btn').change(function(){
  if($(this).is(":checked")) {
    
    navLinks.classList.add('checked');
  } else {
    
    navLinks.classList.remove('checked');
  }
});


const header = document.querySelector('.main-header');
const secondHeader = document.querySelector('.secondary-header');
const subNavi = document.querySelector('.sub-navi');
const subNaviLinks = document.querySelector('.nav-links');
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
    if(scrollPos > 10){
      header.classList.add('scrolled');
      secondHeader.classList.add('scrolled');
      subNavi.classList.add('scrolled');
      subNaviLinks.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
      secondHeader.classList.remove('scrolled');
      subNavi.classList.remove('scrolled');
      subNaviLinks.classList.remove('scrolled');
    }
});

$(document).ready(function() {
  
  var scrollLink = $('.scroll');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top - 75
    }, 1000 );
  });
  

});