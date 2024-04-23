// const navbar = document.getElementById('navbar');

// window.addEventListener('scroll', () => {
//     if (window.scrollY > 50) { // Adjust this value based on when you want the color to change
//         navbar.classList.add('scrolled');
//     } else {
//         navbar.classList.remove('scrolled');
//     }
// });
// $(window).scroll(function(){
//     $('nav').toggleClass('scrolled', $(this).scrollTop() > 500);
//     });
// const navbar = document.getElementById('navbar');

// window.addEventListener('scroll', () => {
//     if (window.scrollY > 50) { // Adjust this value based on when you want the color to change
//         navbar.classList.add('scrolled');
//     } else {
//         navbar.classList.remove('scrolled');
//     }
// });
document.onreadystatechange = function() {
    let lastScrollPosition = 0;
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function(e) {
      lastScrollPosition = window.scrollY;
      
      if (lastScrollPosition > 100)
        navbar.classList.add('navbar-dark');
      else
        navbar.classList.remove('navbar-dark');
    });
  }
