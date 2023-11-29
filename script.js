let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let log = document.querySelector(".profile");
let linkHome = document.getElementById("linkHome");
let perfil = document.getElementById('perfil');
let posts = document.querySelector(".posts");
let filhosSl = document.querySelectorAll("#sl > *");
let ul2 = document.querySelector('.lista');

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
});


// ----------------------------------
// Adicione um evento de clique ao link "Home" na barra lateral
linkHome.addEventListener("click", function (event) {
  // Evite o comportamento padrão do link para não recarregar a página
  event.preventDefault();

  // Redirecione o usuário para a Home (index.html)
  window.location.href = "index.html";

  // Remova a Lista de linkHome definindo o conteúdo como vazio
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
  linkHome.href = 'login-registro/login.html';
  perfil.href = 'login-registro/login.html';
  log.addEventListener('click', () => {
    window.location.href = 'login-registro/login.html';
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
  linkHome.href = '';
  perfil.href = 'perfil/perfil.html';
  log.addEventListener('click', () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userValid');
    window.location.reload();
  })
}

let arrayTitulo = ['A Nossa História', 'Os Animatrônicos', 'Segurança e Protocolos'];
let arrayIMG = ['img/icones/logo.png', 'img/noticias/animatronicos.png', 'img/noticias/FNAF.png'];

let arraySinopse = [
  'Bem-vindo ao site oficial da Freddy Fazbears Pizza, um lugar mágico para crianças e adultos, onde a fantasia e a diversão ganham vida! Aqui, você pode conhecer sobre a nossa história.',
  'Aqui, apresentamos o nosso maior diferencial. Estes são alguns dos nossos adoráveis animatrônicos que dão vida à nossa pizzaria e proporcionam momentos emocionantes para todos os visitantes.  Venha nos visitar na Freddy Fazbears Pizzeria para experimentar toda a alegria, emoção e, é claro, a deliciosa pizza que nossa equipe tem a oferecer!',
  'Na Freddy Fazbears Pizzeria, a segurança dos nossos visitantes é a nossa principal prioridade. Nossos protocolos de segurança são rígidos e nossos animatrônicos são completamente inofensívos. Estamos empenhados em manter um ambiente seguro e acolhedor para todos, com uma equipe de segurança altamente treinada e vigilante.'
];

let arrayTexto = [
  `Nossa historia remonta à decada de 70, com Henry Emily e Willian Afton, dois amigos que tinham muitos sonhos em comum, e também vários projetos, principalmente no que tange à engenharia robótica. <br><br>

  Emily e Afton eram mestres em suas áreas, e juntos fundaram o "Fredbear's Family Diner", o primeiro restaurante do que viria se tornar a grande franquia "Fazbear Entertainment". Eles começaram a desenvolver seus projetos, e os primeiros animatrônicos começaram a surgir. Na década de 80, o restaurante se tornou um enorme sucesso, e finalmente se tornou o "Freddy Fazbear's Pizzaria", o restaurante principal da franquia, onde tudo começou. 
  `,

  `Freddy Fazbear:<br>
  Freddy é o nosso astro principal, um urso simpático e carismático. Com seu chapéu-coco, ele é a estrela do nosso palco. As crianças adoram ouvi-lo cantar, e ele cuida da pizzaria e garante que tudo esteja em ordem. <br><br>
  Bonnie, o Coelho Roxo:<br>
  Bonnie é um coelho travesso que adora tocar guitarra elétrica. Com sua pele roxa e olhos cintilantes, ele é uma das atrações da banda . Ele é um ótimo guardião, mantendo a pizzaria segura para todos. <br><br>
  Chica, a Galinha Divertida:<br>
  Chica é uma galinha espirituosa que adora dançar. Com sua pena amarela brilhante e seu avental, ela é a responsável por garantir que nossos clientes sempre tenham uma refeição deliciosa. Ela é uma grande amiga dos outros animatrônicos, conseguindo sempre manter todos entretidos.<br><br>
  Foxy, a Raposa Pirata: (ATUALMENTE EM MANUTENÇÃO)<br>`,

  `Principais Protocolos de Segurança na "Freddy Fazbear's Pizzeria": <br><br>

  1: Monitoramento Constante: Nossa equipe de segurança altamente treinada monitora de perto todos os cantos da pizzaria por meio de sistemas de vigilância de última geração. Câmeras estrategicamente posicionadas garantem que nenhum canto fique sem supervisão, permitindo uma resposta rápida a qualquer anomalia.<br>
  
  2: Período noturno: Nossa pizzaria não funciona durante o horário noturno, visando garantir o devido tempo de manutenção dos animatrônicos. Isso ajuda a garantir que não ocorra nenhum defeito e que os visitantes permaneçam em segurança.<br>
  
  3: Controle de Energia: Para conservar energia e garantir o funcionamento adequado dos sistemas de segurança, temos um sistema de controle de energia. Isso permite a administração controlar o uso de eletricidade e evitar quedas de energia inesperadas.<br>
  
  4: Manutenção Preventiva: Nossos animatrônicos passam por manutenção preventiva regular para garantir que funcionem corretamente. Isso inclui verificações de sistemas elétricos, mecânicos e de software para evitar comportamento indesejado.<br><br>
  
  
  OBS.: Lembramos a todos os visitantes que, embora os animatrônicos sejam seguros, é importante seguir as orientações de segurança e os protocolos para garantir uma visita tranquila à Freddy Fazbear's Pizzeria. A diversão e a segurança andam de mãos dadas para criar uma experiência inesquecível em nossa pizzaria.`
];

let arrayTag = ['tipo1', 'tipo1', 'tipo3'];

addDicas();
function addDicas() { // adicionando dicas
  posts.innerHTML = '';

  for (let i = 0; i < arrayTitulo.length; i++) {
    const titulo = arrayTitulo[i];
    const img = arrayIMG[i];
    const sinopse = arraySinopse[i];
    const texto = arrayTexto[i];
    const tipo = arrayTag[i];

    div = document.createElement('div');
    div.classList.add('poster');
    div.classList.add(tipo);
    div.innerHTML = `
 
      <img src="${img}" alt="${titulo}">
      <div class="info">
          <h3>${titulo}</h3>
          
      </div>
      <div class="sinopse">
          <p>${sinopse}</p>
          <button id="${i}" class="saiba-mais">Saiba Mais</button>
      </div>
    `
    console.log(i)
    posts.appendChild(div);

    document.getElementById(i).addEventListener('click', () => { // abrir dicas
      let array = [];

      array.push(titulo);
      array.push(img);
      array.push(texto);
      array.push(sinopse);

      localStorage.dica = JSON.stringify(array);
      window.location.href = 'Dicas/dica.html'
    });

  }
}

for (let i = 0; i < filhosSl.length; i++) {
  filhosSl[i].addEventListener('click', () => {
    let select = document.querySelector("#sl");

    let tipo1 = document.querySelectorAll('.tipo1');

    let tipo2 = document.querySelectorAll('.tipo2');

    let tipo3 = document.querySelectorAll('.tipo3');

    if (select.value == 'tipo1') {

      if (tipo1.length > 0) {
        for (let i = 0; i < tipo1.length; i++) {
          tipo1[i].style.display = 'block';
        }
      }
      for (let i = 0; i < tipo2.length; i++) {
        tipo2[i].style.display = 'none';
      }
      for (let i = 0; i < tipo3.length; i++) {
        tipo3[i].style.display = 'none';
      }
    }

    else if (select.value == 'tipo2') {

      for (let i = 0; i < tipo1.length; i++) {
        tipo1[i].style.display = 'none';
      }
      if (tipo2.length > 0) {
        for (let i = 0; i < tipo2.length; i++) {
          tipo2[i].style.display = 'block';
        }
      }
      for (let i = 0; i < tipo3.length; i++) {
        tipo3[i].style.display = 'none';
      }
    }

    else if (select.value == 'tipo3') {

      for (let i = 0; i < tipo1.length; i++) {
        tipo1[i].style.display = 'none';
      }
      for (let i = 0; i < tipo2.length; i++) {
        tipo2[i].style.display = 'none';
      }
      if (tipo3.length > 0) {
        for (let i = 0; i < tipo3.length; i++) {
          tipo3[i].style.display = 'block';
        }
      }
    }
    else {

      for (let i = 0; i < tipo1.length; i++) {
        tipo1[i].style.display = 'block';
      }
      for (let i = 0; i < tipo2.length; i++) {
        tipo2[i].style.display = 'block';
      }
      for (let i = 0; i < tipo3.length; i++) {
        tipo3[i].style.display = 'block';
      }
    }

  })
}

/*
addTarefas()
function addTarefas() {
  
  list = localStorage.getItem('todolist');
  todo = JSON.parse(list);
  if (todo == null) {
    if(localStorage.getItem('token') == null){
      li = document.createElement('li');
        li.innerHTML = `
        <div class="divLi">
          <div ><a href="login-registro/login.html">Logue</a> para ver a suas tarefas</div>
        </div>
      `
        ul2.appendChild(li);
    }else{
      li = document.createElement('li');
        li.innerHTML = `
        <div class="divLi">
          <div >Nenhuma tarefa pendente</div>
        </div>
      `
        ul2.appendChild(li);
    }

  }else{
    let cont = todo.length;
    if (localStorage.getItem('todolist') == null) {
        alert('a')
      }
    todo.forEach(element => {
      if (element.status == 'checked') {
        cont--;
      }
      
    });
    if(cont > 0){
      todo.forEach(element => {
        if (element.status != 'checked' ) {
            li = document.createElement('li');
            li.innerHTML = `
            <div class="divLi">
              <div >${element.item}</div>
            </div>
          `
            ul2.appendChild(li);
        }
      });
    }else{
        li = document.createElement('li');
        li.innerHTML = `
        <div class="divLi">
          <div >Nenhuma tarefa pendente</div>
        </div>
      `
        ul2.appendChild(li);
      }
  }
}
*/

