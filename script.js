const menu = document.querySelector('.menu'); //botao
const navmenu = document.querySelector('.nav-menu'); //itens menu


menu.addEventListener('click', ()=>{
    menu.classList.toggle('ativo');
    navmenu.classList.toggle('ativo');
})