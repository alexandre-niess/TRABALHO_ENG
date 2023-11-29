let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let log = document.querySelector(".profile");
let perfil = document.getElementById('perfil');
let afazeres = document.querySelector("#afazeres");


closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
});

// ----------------------------------
// Adicione um evento de clique ao link "Home" na barra lateral
afazeres.addEventListener("click", function (event) {
  // Evite o comportamento padrão do link para não recarregar a página
  event.preventDefault();

  // Redirecione o usuário para a Home (index.html)
  window.location.href = "../../index.html";

  // Remova a Lista de Afazeres definindo o conteúdo como vazio
  ul2.innerHTML = '';
});

// ----------------------------------

function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }
}


if (localStorage.getItem('token') == null) { // verificação de login
  log.innerHTML = `
  <ul>
    <li>
      <i class="bx bx-log-in" id="log" ></i>
      <span class="links_name">Login</span>
      <span class="tooltip">Login</span>
    </li>
  </ul>`
  afazeres.href = '../../index.html';
  perfil.href = '../../login-registro/login.html';
  log.addEventListener('click', () => {
    window.location.href = '../../login-registro/login.html';
  })
} else { // logout
  log.innerHTML = `
  <ul>
    <li>
      <i class="bx bx-log-out" id="log" ></i>
      <span class="links_name">Logout</span>
      <span class="tooltip">Logout</span>
    </li>
  </ul>`
  afazeres.href = '../../planner/todolist.html';
  perfil.href = '../../perfil/perfil.html';
  log.addEventListener('click', () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userValid');
    window.location.href = '../../index.html'
  })
}


/* Inglês */
let interpretacao = document.getElementById('int');
let intTxt = document.getElementById('int-txt');
let estruturas = document.getElementById('est');
let estTxt = document.getElementById('est-txt');

interpretacao.addEventListener('click', () =>{
    if (interpretacao.checked) {
        intTxt.style.textDecoration = 'line-through';
    }else{
        intTxt.style.textDecoration = 'none';
    }
});

estruturas.addEventListener('click', ()=>{
    if (estruturas.checked) {
        estTxt.style.textDecoration = 'line-through';
    }else{
        estTxt.style.textDecoration = 'none';
    }
});

load()
function load(){

    if (interpretacao.checked) {
        intTxt.style.textDecoration = 'line-through';
    }else{
        intTxt.style.textDecoration = 'none';
    }
    
   if (estruturas.checked) {
        estTxt.style.textDecoration = 'line-through';
    }else{
        estTxt.style.textDecoration = 'none';
    }

}

/* Modal Imagem */

function clique(img){

  var modal=document.getElementById("janelaModal");
  var modalImg=document.getElementById("imgModal");
  var btFechar=document.getElementsByClassName("fechar")[0];

  modal.style.display="block";
  modalImg.src=img.src;
  
  btFechar.onclick=function(){
    modal.style.display="none";
  }
}