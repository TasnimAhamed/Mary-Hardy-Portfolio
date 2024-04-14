const toggler = document.querySelector('.navbar-toggler');
const mainMenu = document.querySelector('.main--menu');

toggler.addEventListener('click', function(e) {
    this.parentNode.classList.toggle('show');
    
    if (mainMenu.style.maxHeight) {
        mainMenu.style.maxHeight = null;
    } else {
        mainMenu.style.maxHeight = mainMenu.scrollHeight + "px";
    }
})