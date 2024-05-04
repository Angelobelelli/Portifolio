document.addEventListener('DOMContentLoaded', function(){
    // Define um atraso de 1 segundo antes de adicionar a classe que inicia a animação
    setTimeout(function(){
      document.querySelector('.typing-text').classList.add('typing');
    }, 1000);
  });



let btnMenu =document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay= document.getElementById('overlay-menu')

btnMenu.addEventListener('click' , ()=> {
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click' , ()=> {
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click' , ()=> {
    menu.classList.remove('abrir-menu')
})



  