 burger = document.querySelector('.burger')
 navbar = document.querySelector('.navbar')
 leftnav = document.querySelector('.leftnav')
 rightnav=document.querySelector('.rightnav')
 
 burger.addEventListener('click', ()=>{
    leftnav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
    rightnav.classList.toggle('v-class-resp')
 })