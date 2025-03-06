/*!
* Start Bootstrap - One Page Wonder v6.0.6 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
document.addEventListener('DOMContentLoaded', function () {
    // Capturar os formulários de login e cadastro
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            console.log('Tentando login com:', email, password);
            
            // Simulação de autenticação
            if (email === 'teste@bion.com' && password === '123456') {
                alert('Login realizado com sucesso!');
                window.location.href = 'dashboard.html'; // Redireciona após login bem-sucedido
            } else {
                alert('E-mail ou senha incorretos!');
            }
        });
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            
            console.log('Registrando usuário:', name, email);
            
            // Simulação de cadastro
            alert('Cadastro realizado com sucesso! Você já pode fazer login.');
            window.location.href = 'login.html'; // Redireciona para a página de login após cadastro
        });
    }
});
