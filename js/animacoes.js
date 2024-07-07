// menu
var telaInicio = true;
var telaProjetos = false;
var telaSobreMim = false;
var telaHabilidades = false;
var telaContatos = false;

// Função de rolagem suave para um ID específico
function jumpToId(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// assume o elemento pelo ID
function inicioID() {
  jumpToId('inicio');
}

function projetosID() {
  jumpToId('projetos');
}

function sobreMimID() {
  jumpToId('sobreMim');
}

function habilidadesID() {
  jumpToId('habilidades');
}

function contatosID() {
  jumpToId('contatos');
}

// Funções para atualizar as classes dos botões
function atualizarClasses(botaoAtivo) {
  const botoes = ['Inicio', 'Projetos', 'SobreMim', 'Habilidades', 'Contatos'];
  
  botoes.forEach(botao => {
    const elemento = document.getElementById(`btnMenu${botao}`);
    if (botao === botaoAtivo) {
      elemento.classList.remove('btn-outline-secondary');
      elemento.classList.add('btn-primary');
    } else {
      elemento.classList.remove('btn-primary');
      elemento.classList.add('btn-outline-secondary');
    }
  });
}

function irParaInicio() {
  inicioID();
}

function irParaProjetos() {
  projetosID();
}

function irParaSobreMim() {
  sobreMimID();
}

function irParaHabilidades() {
  habilidadesID();
}

function irParaContatos() {
    contatosID();
}



// Função para criar um IntersectionObserver
function criarObserver(elementId, callback) {
  const elemento = document.getElementById(elementId);
    
  if (elemento) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback();
        }
      });
    }, {
      threshold: 0.2 // Ajuste este valor conforme necessário
    });
      
    observer.observe(elemento);
  }
}

//Animação de seção
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  const observerOptions = {
      root: null,
      rootMargin: "5% 0% 5% 0%",
      threshold:  0.5// Ajuste esse valor conforme necessário
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.remove("fade-out");
              entry.target.classList.add("fade-in");
          } else {
              entry.target.classList.remove("fade-in");
              entry.target.classList.add("fade-out");
          }
      });
  }, observerOptions);

  sections.forEach(section => {
      section.classList.add("fade-out");
      observer.observe(section);
  });
});


// Configura os observers para cada seção
function observarInicio() {
  atualizarClasses('Inicio');
}

function observarProjetos() {
  atualizarClasses('Projetos');
}

function observarSobreMim() {
  atualizarClasses('SobreMim');
}

function observarHabilidades() {
  atualizarClasses('Habilidades');
}

function observarContatos() {
  atualizarClasses('Contatos');
}

document.addEventListener('DOMContentLoaded', () => {
  criarObserver('inicio',observarInicio);
  criarObserver('projetos', observarProjetos);
  criarObserver('sobreMim', observarSobreMim);
  criarObserver('habilidades', observarHabilidades);
  criarObserver('contatos', observarContatos);
});





// Detecta o evento de rolagem e fechar modais
window.addEventListener("wheel", (event) => {

    let modais = document.querySelectorAll('.modal');
    modais.forEach(modal => {
      let modalInstance = bootstrap.Modal.getInstance(modal);
      if (modalInstance) {
        modalInstance.hide();
      }
    });

});




//texto inicio
document.querySelector('.inicio1').addEventListener('animationend', function() {
    this.style.display = 'none'; // Esconde inicio1
    document.querySelector('.inicio2').style.display = 'block'; // Mostra inicio2
})

//botões inicio
var btnInicio1 = document.getElementById('btnInicio1');
var btnInicio2 = document.getElementById('btnInicio2');

function createGradient(e) {
  var x = e.offsetX;
  var y = e.offsetY;
  var gradient = `radial-gradient(circle at ${x}px ${y}px, #79aaf3, #0d6efd)`;
  e.target.style.background = gradient;
}

function resetBackground(e) {
  e.target.style.background = '#6c757d';
}

btnInicio1.addEventListener('mousemove', createGradient);
btnInicio1.addEventListener('mouseleave', resetBackground);

btnInicio2.addEventListener('mousemove', createGradient);
btnInicio2.addEventListener('mouseleave', resetBackground);

//botões habilidade
  //angular
  function btnAngularActive(){
      document.getElementById('iconAngular').setAttribute('fill', '#fff');

      document.getElementById('iconHtml').setAttribute('fill', '#fe8330');
      document.getElementById('iconCss').setAttribute('fill', '#0d6efd');
      document.getElementById('iconJs').setAttribute('fill', '#ffc107');
      document.getElementById('iconTs').setAttribute('fill', '#0d6efd');
      document.getElementById('iconBootstrap').setAttribute('fill', '#9461fb');
      document.getElementById('iconIonic').setAttribute('fill', '#176bff');
      document.getElementById('iconNode').setAttribute('fill', '#459e37');
      document.getElementById('iconJava').setAttribute('fill', '#176bff');
      document.getElementById('iconPython').setAttribute('fill', '#376c97');
      document.getElementById('iconPhp').setAttribute('fill', '#4f5b93');
      document.getElementById('iconMysql').setAttribute('fill', '#f89d25');
  }

  //html
  function btnHtmlActive(){
    document.getElementById('iconHtml').setAttribute('fill', '#fff');

    document.getElementById('iconAngular').setAttribute('fill', '#dc3545');
    document.getElementById('iconCss').setAttribute('fill', '#0d6efd');
    document.getElementById('iconJs').setAttribute('fill', '#ffc107');
    document.getElementById('iconTs').setAttribute('fill', '#0d6efd');
    document.getElementById('iconBootstrap').setAttribute('fill', '#9461fb');
    document.getElementById('iconIonic').setAttribute('fill', '#176bff');
    document.getElementById('iconNode').setAttribute('fill', '#459e37');
    document.getElementById('iconJava').setAttribute('fill', '#176bff');
    document.getElementById('iconPython').setAttribute('fill', '#376c97');
    document.getElementById('iconPhp').setAttribute('fill', '#4f5b93');
    document.getElementById('iconMysql').setAttribute('fill', '#f89d25');
  }

  //css
  function btnCssActive(){
    document.getElementById('iconCss').setAttribute('fill', '#fff');

    document.getElementById('iconAngular').setAttribute('fill', '#dc3545');
    document.getElementById('iconHtml').setAttribute('fill', '#fe8330');
    document.getElementById('iconJs').setAttribute('fill', '#ffc107');
    document.getElementById('iconTs').setAttribute('fill', '#0d6efd');
    document.getElementById('iconBootstrap').setAttribute('fill', '#9461fb');
    document.getElementById('iconIonic').setAttribute('fill', '#176bff');
    document.getElementById('iconNode').setAttribute('fill', '#459e37');
    document.getElementById('iconJava').setAttribute('fill', '#176bff');
    document.getElementById('iconPython').setAttribute('fill', '#376c97');
    document.getElementById('iconPhp').setAttribute('fill', '#4f5b93');
    document.getElementById('iconMysql').setAttribute('fill', '#f89d25');
  }

  //js
  function btnJsActive(){
    document.getElementById('iconJs').setAttribute('fill', '#111');

    document.getElementById('iconAngular').setAttribute('fill', '#dc3545');
    document.getElementById('iconHtml').setAttribute('fill', '#fe8330');
    document.getElementById('iconCss').setAttribute('fill', '#0d6efd');
    document.getElementById('iconTs').setAttribute('fill', '#0d6efd');
    document.getElementById('iconBootstrap').setAttribute('fill', '#9461fb');
    document.getElementById('iconIonic').setAttribute('fill', '#176bff');
    document.getElementById('iconNode').setAttribute('fill', '#459e37');
    document.getElementById('iconJava').setAttribute('fill', '#176bff');
    document.getElementById('iconPython').setAttribute('fill', '#376c97');
    document.getElementById('iconPhp').setAttribute('fill', '#4f5b93');
    document.getElementById('iconMysql').setAttribute('fill', '#f89d25');
  }

  //ts
  function btnTsActive(){
    document.getElementById('iconTs').setAttribute('fill', '#fff');

    document.getElementById('iconAngular').setAttribute('fill', '#dc3545');
    document.getElementById('iconHtml').setAttribute('fill', '#fe8330');
    document.getElementById('iconCss').setAttribute('fill', '#0d6efd');
    document.getElementById('iconJs').setAttribute('fill', '#ffc107');
    document.getElementById('iconBootstrap').setAttribute('fill', '#9461fb');
    document.getElementById('iconIonic').setAttribute('fill', '#176bff');
    document.getElementById('iconNode').setAttribute('fill', '#459e37');
    document.getElementById('iconJava').setAttribute('fill', '#176bff');
    document.getElementById('iconPython').setAttribute('fill', '#376c97');
    document.getElementById('iconPhp').setAttribute('fill', '#4f5b93');
    document.getElementById('iconMysql').setAttribute('fill', '#f89d25');
  }

  //bootstrap
  function btnBootstrapActive(){
    document.getElementById('iconBootstrap').setAttribute('fill', '#fff');

    document.getElementById('iconAngular').setAttribute('fill', '#dc3545');
    document.getElementById('iconHtml').setAttribute('fill', '#fe8330');
    document.getElementById('iconCss').setAttribute('fill', '#0d6efd');
    document.getElementById('iconJs').setAttribute('fill', '#ffc107');
    document.getElementById('iconTs').setAttribute('fill', '#0d6efd');
    document.getElementById('iconIonic').setAttribute('fill', '#176bff');
    document.getElementById('iconNode').setAttribute('fill', '#459e37');
    document.getElementById('iconJava').setAttribute('fill', '#176bff');
    document.getElementById('iconPython').setAttribute('fill', '#376c97');
    document.getElementById('iconPhp').setAttribute('fill', '#4f5b93');
    document.getElementById('iconMysql').setAttribute('fill', '#f89d25');
  }

  //ionic
  function btnIonicActive(){
    document.getElementById('iconIonic').setAttribute('fill', '#fff');

    document.getElementById('iconAngular').setAttribute('fill', '#dc3545');
    document.getElementById('iconHtml').setAttribute('fill', '#fe8330');
    document.getElementById('iconCss').setAttribute('fill', '#0d6efd');
    document.getElementById('iconJs').setAttribute('fill', '#ffc107');
    document.getElementById('iconTs').setAttribute('fill', '#0d6efd');
    document.getElementById('iconBootstrap').setAttribute('fill', '#9461fb');
    document.getElementById('iconNode').setAttribute('fill', '#459e37');
    document.getElementById('iconJava').setAttribute('fill', '#176bff');
    document.getElementById('iconPython').setAttribute('fill', '#376c97');
    document.getElementById('iconPhp').setAttribute('fill', '#4f5b93');
    document.getElementById('iconMysql').setAttribute('fill', '#f89d25');
  }

  //node
  function btnNodeActive(){
    document.getElementById('iconNode').setAttribute('fill', '#fff');

    document.getElementById('iconAngular').setAttribute('fill', '#dc3545');
    document.getElementById('iconHtml').setAttribute('fill', '#fe8330');
    document.getElementById('iconCss').setAttribute('fill', '#0d6efd');
    document.getElementById('iconJs').setAttribute('fill', '#ffc107');
    document.getElementById('iconTs').setAttribute('fill', '#0d6efd');
    document.getElementById('iconBootstrap').setAttribute('fill', '#9461fb');
    document.getElementById('iconIonic').setAttribute('fill', '#176bff');
    document.getElementById('iconJava').setAttribute('fill', '#176bff');
    document.getElementById('iconPython').setAttribute('fill', '#376c97');
    document.getElementById('iconPhp').setAttribute('fill', '#4f5b93');
    document.getElementById('iconMysql').setAttribute('fill', '#f89d25');
  }

  //java
  function btnJavaActive(){
    document.getElementById('iconJava').setAttribute('fill', '#fff');

    document.getElementById('iconAngular').setAttribute('fill', '#dc3545');
    document.getElementById('iconHtml').setAttribute('fill', '#fe8330');
    document.getElementById('iconCss').setAttribute('fill', '#0d6efd');
    document.getElementById('iconJs').setAttribute('fill', '#ffc107');
    document.getElementById('iconTs').setAttribute('fill', '#0d6efd');
    document.getElementById('iconBootstrap').setAttribute('fill', '#9461fb');
    document.getElementById('iconIonic').setAttribute('fill', '#176bff');
    document.getElementById('iconNode').setAttribute('fill', '#459e37');
    document.getElementById('iconPython').setAttribute('fill', '#376c97');
    document.getElementById('iconPhp').setAttribute('fill', '#4f5b93');
    document.getElementById('iconMysql').setAttribute('fill', '#f89d25');
  }

  //python
  function btnPythonActive(){
    document.getElementById('iconPython').setAttribute('fill', '#ffdf59');

    document.getElementById('iconAngular').setAttribute('fill', '#dc3545');
    document.getElementById('iconHtml').setAttribute('fill', '#fe8330');
    document.getElementById('iconCss').setAttribute('fill', '#0d6efd');
    document.getElementById('iconJs').setAttribute('fill', '#ffc107');
    document.getElementById('iconTs').setAttribute('fill', '#0d6efd');
    document.getElementById('iconBootstrap').setAttribute('fill', '#9461fb');
    document.getElementById('iconIonic').setAttribute('fill', '#176bff');
    document.getElementById('iconNode').setAttribute('fill', '#459e37');
    document.getElementById('iconJava').setAttribute('fill', '#176bff');
    document.getElementById('iconPhp').setAttribute('fill', '#4f5b93');
    document.getElementById('iconMysql').setAttribute('fill', '#f89d25');
  }

  //php
  function btnPhpActive(){
    document.getElementById('iconPhp').setAttribute('fill', '#fff');

    document.getElementById('iconAngular').setAttribute('fill', '#dc3545');
    document.getElementById('iconHtml').setAttribute('fill', '#fe8330');
    document.getElementById('iconCss').setAttribute('fill', '#0d6efd');
    document.getElementById('iconJs').setAttribute('fill', '#ffc107');
    document.getElementById('iconTs').setAttribute('fill', '#0d6efd');
    document.getElementById('iconBootstrap').setAttribute('fill', '#9461fb');
    document.getElementById('iconIonic').setAttribute('fill', '#176bff');
    document.getElementById('iconNode').setAttribute('fill', '#459e37');
    document.getElementById('iconJava').setAttribute('fill', '#176bff');
    document.getElementById('iconPython').setAttribute('fill', '#376c97');
    document.getElementById('iconMysql').setAttribute('fill', '#f89d25');
  }

  //mysql
  function btnMysqlActive(){
    document.getElementById('iconMysql').setAttribute('fill', '#00758f');

    document.getElementById('iconAngular').setAttribute('fill', '#dc3545');
    document.getElementById('iconHtml').setAttribute('fill', '#fe8330');
    document.getElementById('iconCss').setAttribute('fill', '#0d6efd');
    document.getElementById('iconJs').setAttribute('fill', '#ffc107');
    document.getElementById('iconTs').setAttribute('fill', '#0d6efd');
    document.getElementById('iconBootstrap').setAttribute('fill', '#9461fb');
    document.getElementById('iconIonic').setAttribute('fill', '#176bff');
    document.getElementById('iconNode').setAttribute('fill', '#459e37');
    document.getElementById('iconJava').setAttribute('fill', '#176bff');
    document.getElementById('iconPython').setAttribute('fill', '#376c97');
    document.getElementById('iconPhp').setAttribute('fill', '#4f5b93');
  }

  //inactive
  function btnInactive(){
    document.getElementById('iconAngular').setAttribute('fill', '#dc3545');
    document.getElementById('iconHtml').setAttribute('fill', '#fe8330');
    document.getElementById('iconCss').setAttribute('fill', '#0d6efd');
    document.getElementById('iconJs').setAttribute('fill', '#ffc107');
    document.getElementById('iconTs').setAttribute('fill', '#0d6efd');
    document.getElementById('iconBootstrap').setAttribute('fill', '#9461fb');
    document.getElementById('iconIonic').setAttribute('fill', '#176bff');
    document.getElementById('iconNode').setAttribute('fill', '#459e37');
    document.getElementById('iconJava').setAttribute('fill', '#176bff');
    document.getElementById('iconPython').setAttribute('fill', '#376c97');
    document.getElementById('iconPhp').setAttribute('fill', '#4f5b93');
    document.getElementById('iconMysql').setAttribute('fill', '#f89d25');
  }







