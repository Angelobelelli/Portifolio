document.addEventListener('DOMContentLoaded', function(){
    // Define um atraso de 1 segundo antes de adicionar a classe que inicia a animação
    setTimeout(function(){
      document.querySelector('.typing-text').classList.add('typing');
    }, 1000);
  });