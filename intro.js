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