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





  const toggleButton = document.getElementById('theme-toggle');
  const body = document.body;

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('light');
    body.classList.toggle('dark');
    toggleGitHubIconColor();
    toggleImageGradient();
    toggleButtonText(); // Adicionado para alternar o texto do botão
  });

  // Set the initial theme to dark
  body.classList.add('dark');
  toggleImageGradient(); // Aplica a cor correta do gradiente para o modo dark
  toggleButtonText(); // Adicionado para definir o texto do botão na inicialização

  function toggleGitHubIconColor() {
    const githubIcon = document.querySelector('.bxl-github');
    const bxllinkedin = document.querySelector('.bxl-linkedin');
    const bxlinstagram = document.querySelector('.bxl-instagram');
    
    if (body.classList.contains('dark')) {
      githubIcon.style.color = '#fff'; // Alterando a cor do ícone para branco no Modo Dark
      bxllinkedin.style.color = '#fff'; // Alterando a cor do ícone para branco no Modo Dark
      bxlinstagram.style.color = '#fff'; // Alterando a cor do ícone para branco no Modo Dark
    } else {
      githubIcon.style.color = '#000'; // Alterando a cor do ícone para preto no Modo Light
      bxllinkedin.style.color = '#000'; // Alterando a cor do ícone para preto no Modo Light
      bxlinstagram.style.color = '#000'; // Alterando a cor do ícone para preto no Modo Light
    }
  }


  function toggleImageGradient() {
    const imgWrapper = document.querySelector('.img-wrapper');
    imgWrapper.classList.toggle('light'); // Alternar a classe light na .img-wrapper
  }

  function toggleButtonText() {
    if (body.classList.contains('dark')) {
      toggleButton.textContent = 'Modo Light'; // Alterando o texto do botão para "Modo Light" no Modo Dark
    } else {
      toggleButton.textContent = 'Modo Dark'; // Alterando o texto do botão para "Modo Dark" no Modo Light
    }
  }

  function toggleImageGradient() {
    const imgWrapper = document.querySelector('.img-wrapper');
    imgWrapper.classList.toggle('light'); // Alternar a classe light na .img-wrapper
  }

