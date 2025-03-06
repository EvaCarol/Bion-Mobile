
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
var target = document.getElementById('target');
var watchId;

function appendLocation(location, verb) {
  verb = verb || 'updated';
  var newLocation = document.createElement('p');
  newLocation.innerHTML = 'Location ' + verb + ': ' + location.coords.latitude + ', ' + location.coords.longitude + '';
  target.appendChild(newLocation);
}

if ('geolocation' in navigator) {
  document.getElementById('askButton').addEventListener('click', function () {
    navigator.geolocation.getCurrentPosition(function (location) {
      appendLocation(location, 'fetched');
    });
    watchId = navigator.geolocation.watchPosition(appendLocation);
  });
} else {
  target.innerText = 'Geolocation API not supported.';}
