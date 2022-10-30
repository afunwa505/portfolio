let harmburger_menu = document.querySelector('#hamburger_menu');
let close_button = document.querySelector('#close_button');
harmburger_menu.addEventListener('click', function(){
    let nav = document.querySelector('.nav');
    nav.style.opacity = '0.7'
    harmburger_menu.style.display = 'none';
    close_button.style.display = 'block';
    
});
close_button.addEventListener('click', function(){
    let nav = document.querySelector('.nav');
    nav.style.opacity = '0';
    close_button.style.display = 'none';
    harmburger_menu.style.display = 'block';
});

function reveal() {
    var reveal = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveal.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveal[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveal[i].classList.add("active");
      } else {
        reveal[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
