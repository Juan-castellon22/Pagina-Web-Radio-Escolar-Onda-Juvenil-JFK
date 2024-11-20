window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
})

document.addEventListener('DOMContentLoaded', function() {
    // Register
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const nombre = document.getElementById('usuario-nombre').value;
            const apellido = document.getElementById('usuario-apellido').value;
            const email = document.getElementById('usuario-email').value;
            const password = document.getElementById('contraseña').value;
            const genero = document.getElementById('genero').value;

            const user = {
                nombre: nombre,
                apellido: apellido,
                email: email,
                password: password,
                genero: genero
            };

            localStorage.setItem(email, JSON.stringify(user));
            alert('Registro exitoso. Ahora puedes iniciar sesión.');
            window.location.href = 'login and register.html'; // Redirige a la página de login
        });
    } 

    // Login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

            const email = document.getElementById('usuario-email-login').value;
            const password = document.getElementById('contraseña-login').value;

            console.log("Email ingresado:", email);
            console.log("Contraseña ingresada:", password);

            const storedUser = localStorage.getItem(email);
            if (storedUser) {
                const userData = JSON.parse(storedUser);
                console.log("Usuario almacenado:", userData);

                if (userData.password.trim() === password.trim()) {
                    alert('Inicio de sesión exitoso.');
                    window.location.href = 'index.html';
                } else {
                    alert('Contraseña incorrecta.');
                }
            } else {
                alert('Usuario no encontrado.');
            }
        });
    }
});