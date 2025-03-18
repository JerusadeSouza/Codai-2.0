const myModal = new boodstrap.Modal("#register-modal");

//Logar no sistema
document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email-input").Value;
    const password = document.getElementById("password-input").Value;
    const session = document.getElementById("session-check").checked;

    console.log(email, session);
});


//Criar conta
document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email-create-input").Value;
    const password = document.getElementById("password-create-input").Value;

    if(email.length < 5) {
        alert("Preencha o campo com um e-mail válido.");
        return;
    }

    if(password.length < 4) {
        alert("Prencha a senha com no minimo 4 digitos.");
        return;
    }

    saveAccount({
        login: email,
        password: password,
        transections: []
    });

    myModal.hide();

    alert("Conta criada com sucesso.");
});

function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}