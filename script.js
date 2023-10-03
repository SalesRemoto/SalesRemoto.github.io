document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('login-form');
    const errorMessage = document.getElementById('mensaje-error');
    const usuarioInput = document.getElementById('usuario');
    const contrasenaInput = document.getElementById('contrasena');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        // Simular autenticación con credenciales de usuario
        const usuario = document.getElementById('usuario').value;
        const contrasena = document.getElementById('contrasena').value;
        
        // Comprueba las credenciales (esto debe ser reemplazado por una lógica real)
        if (usuario === 'Scotia' && contrasena === '123') {
            // Credenciales correctas, redirecciona a la página deseada
            window.location.href = 'Scotia.html';
        } else if (usuario === 'Aqua' && contrasena === '123') {
            window.location.href = 'Aqua.html';
        }
        else
        {
            // Credenciales incorrectas, muestra el mensaje de error
            errorMessage.classList.remove('hidden');

            // Limpia los campos de entrada
            usuarioInput.value = '';
            contrasenaInput.value = '';
        }
    });
});

