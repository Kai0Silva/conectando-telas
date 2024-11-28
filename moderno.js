const container = document.getElementById('container');
const registerBtn = document.getElementById('registerBtn');
const loginBtn = document.getElementById('loginBtn');

// Alterna entre as telas de Login e Registro
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Lógica de Registro
document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Previne o envio do formulário
    
    const name = document.getElementById("newName").value;
    const email = document.getElementById("newEmail").value;
    const password = document.getElementById("newPassword").value;

    // Armazena os dados no localStorage
    localStorage.setItem("username", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Conta criada com sucesso!");
    // Redireciona para o Dashboard após o registro
    window.location.href = "dashboard.html";
});

// Lógica de Login
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Previne o envio do formulário

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Obtém as informações do localStorage
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    // Verifica se as credenciais estão corretas
    if (email === storedEmail && password === storedPassword) {
        alert("Login bem-sucedido!");
        // Redireciona para o Dashboard
        window.location.href = "dashboard.html";
    } else {
        alert("Usuário ou senha inválidos!");
    }
});
