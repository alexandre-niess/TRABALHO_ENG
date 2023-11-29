let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let log = document.querySelector(".profile");
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
    window.location.href = "../index.html";
  
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
    afazeres.href = '../login-registro/login.html';
    log.addEventListener('click', () => {
        window.location.href = '../login-registro/login.html';
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
    afazeres.href = '../index.html';
    log.addEventListener('click', () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userValid');
        window.location.href = '../index.html';
    })
}


/* Perfil */


const imgDiv = document.querySelector('.profile-pic-div');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');


imgDiv.addEventListener('mouseenter', function () {
    uploadBtn.style.display = "block";
});

imgDiv.addEventListener('mouseleave', function () {
    uploadBtn.style.display = "none";
});


file.addEventListener('change', function () {

    const choosedFile = this.files[0];

    if (choosedFile) {

        const reader = new FileReader();

        reader.addEventListener('load', function () {
            img.setAttribute('src', reader.result);
            localStorage.setItem("imgData", getBase64Image(img));
        });

        reader.readAsDataURL(choosedFile);
    }
});

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = '200px';
    canvas.height = '200px';

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
fetchimage()
function fetchimage() {
    var dataImage = localStorage.getItem('imgData');
    img.src = "data:image/png;base64," + dataImage;
}

img.addEventListener('click', function(){

    if (uploadBtn.style.display == 'none') {
        uploadBtn.style.display = "block";
    }else{
        uploadBtn.style.display = "none";
    }
})

/* Informações do usuário */

let lbNome = document.getElementById('lbNome');
let lbEmail = document.getElementById('lbEmail');
let lbDate = document.getElementById('lbDate');
let lbS1 = document.getElementById('lbS1');
let lbS2 = document.getElementById('lbS2');
listaUser = JSON.parse(localStorage.getItem('listaUser'));
userValid = JSON.parse(localStorage.getItem('userValid'));

save()

/*
function save() {
    if (lbNome.value.length > 3 && typeof(lbNome.value) == 'string') {
        userValid.nome = lbNome.value;
        listaUser[userValid.index].nomeCad = lbNome.value;
        lbNome.value = '';
    }
    if (lbEmail.value.length > 10) {
        userValid.email = lbEmail.value;
        listaUser[userValid.index].emailCad = lbEmail.value;
        lbEmail.value = '';
    }
    if (lbDate.value != '') {
        listaUser[userValid.index].nascimentoCad = lbDate.value;
    }
    if (lbS1.value == lbS2.value && lbS1.value > 6) {
        userValid.senha = lbS1.value;
        listaUser[userValid.index].senhaCad = lbS1.value;
        lbS1.value = ''
        lbS2.value = ''
    }


    
    localStorage.setItem('userValid', JSON.stringify(userValid));
    localStorage.setItem('listaUser', JSON.stringify(listaUser));

    lbNome.placeholder = userValid.nome;
    lbEmail.placeholder = userValid.email;
    lbDate.value = listaUser[userValid.index].nascimentoCad;
} */

function save() {
    if (lbNome.value.length > 3 && typeof(lbNome.value) == 'string') {
        userValid.nome = lbNome.value;
        if (listaUser[userValid.index]) {
            listaUser[userValid.index].nomeCad = lbNome.value;
        }
        lbNome.value = '';
    }
    
    if (lbEmail.value.length > 10 && typeof(lbEmail.value) == 'string') {
        userValid.email = lbEmail.value;
        if (listaUser[userValid.index]) {
            listaUser[userValid.index].emailCad = lbEmail.value;
        }
        lbEmail.value = '';
    }

    if (userValid.nascimentoCad !== undefined) { // Verifica se a data de nascimento está definida
        listaUser[userValid.index].nascimentoCad = lbDate.value;
    }
    
    if (lbS1.value == lbS2.value && lbS1.value.length > 6) {
        userValid.senha = lbS1.value;
        listaUser[userValid.index].senhaCad = lbS1.value;
        lbS1.value = '';
        lbS2.value = '';
    }
    
    localStorage.setItem('userValid', JSON.stringify(userValid));
    localStorage.setItem('listaUser', JSON.stringify(listaUser));

    lbNome.placeholder = userValid.nome;
    lbEmail.placeholder = userValid.email;
    lbDate.value = userValid.nascimentoCad || ''; // Define o valor do campo de data
}

