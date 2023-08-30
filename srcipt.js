const modal=document.getElementById('modal');
const navBtn=document.getElementById('nav-btn');
const cancelBtn=document.getElementById('cancel-btn');
const sidenav=document.getElementById('sidenav');

navBtn.addEventListener("click",function(){
    sidenav.classList.add('show');
    modal.classList.add('showModal');
});
cancelBtn.addEventListener("click",function(){
    sidenav.classList.remove('show');
    modal.classList.remove('showModal');
});
window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }})
