const menuLinks = document.querySelectorAll('.header_menu-link[data-goto]')
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick)
   }) 
   function onMenuLinkClick(e) {
    const menuLink = e.target
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBLock = document.querySelector(menuLink.dataset.goto)
            const gotoBLockValue = gotoBLock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight
            
            window.scrollTo({
                top: gotoBLockValue,
                behavior: "smooth"
            })
            e.preventDefault()
        }
   }
}

let menuBtn = document.querySelector('.menu-btn')
let menu = document.querySelector('.menu')

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active')
})