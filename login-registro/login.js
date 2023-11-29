function verificacao() {
    let emailLogin = document.getElementById('loginEmail').value;
    let senhaLogin = document.getElementById('loginSenha').value;

    // Verifique se há dados no localStorage
    if (localStorage.getItem('listaUser') === null) {
        alert('Nenhum usuário registrado.');
        return;
    }

    let listaUser = JSON.parse(localStorage.getItem('listaUser'));
    let userValid = null;

    listaUser.forEach((item) => {
        if (emailLogin === item.emailCad && senhaLogin === item.senhaCad) {
            userValid = {
                nome: item.nomeCad,
                email: item.emailCad,
                senha: item.senhaCad,
                sexo: item.sexoCad,
               // curso: item.cursoCad
            };
        }
    });

    if (userValid !== null) {
        localStorage.setItem('userValid', JSON.stringify(userValid));
        let token = Math.random().toString(16).substring(2);
        localStorage.setItem('token', token);
        alert('Tudo certo');
        window.location.href = '../index.html';
    } else {
        alert('Email e/ou senha estão incorretos');
    }
}
