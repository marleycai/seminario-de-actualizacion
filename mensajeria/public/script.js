document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const chatContainer = document.getElementById('chat-container');

  // Event listener para mostrar la interfaz del chat cuando se envía el formulario de inicio de sesión
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, contrasena: password })
    })
      .then(response => {
        if (response.status === 200) {
          // Inicio de sesión exitoso, mostrar chat
          loginForm.style.display = 'none';
          chatContainer.style.display = 'block';
        } else {
          // Credenciales inválidas, muestra un mensaje de error o toma otra acción
          console.error('Credenciales inválidas.');
        }
      })
      .catch(error => console.error('Error al iniciar sesión:', error));
  });

  const registerButton = document.getElementById('register-button');

  if (registerButton) {
    registerButton.addEventListener('click', () => {
      const registerUsername = document.getElementById('register-username').value;
      const registerPassword = document.getElementById('register-password').value;

      const datosRegistro = {
        nombre: 'Nombre Ejemplo',
        username: registerUsername,
        contrasena: registerPassword
      };

      fetch('/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosRegistro)
      })
        .then(response => response.json())
        .then(data => {
          console.log('Respuesta de registro:', data);
          // Maneja la respuesta del servidor aquí
        })
        .catch(error => console.error('Error al registrar:', error));
    });
  } else {
    console.error('No se pudo encontrar el botón de registro.');
  }
});
