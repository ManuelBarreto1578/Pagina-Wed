document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma tradicional

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const asunto = document.getElementById('assunto').value;
    const mensaje = document.getElementById('mensaje').value;

    // Construir el objeto con los datos del formulario
    const nuevoContacto = {
        nombre: nombre,
        email: email,
        telefono: telefono,
        asunto: asunto,
        mensaje: mensaje
    };

    // Enviar los datos al servidor usando Fetch API
    fetch('http://localhost:3000/contacto/enviar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoContacto)
    })
    .then(response => response.text())
    .then(data => {
        // Manejar la respuesta del servidor
        console.log(data);
        // Puedes realizar acciones adicionales aquí, como mostrar un mensaje al usuario
    })
    .catch(error => {
        console.error('Error al enviar los datos:', error);
    });
});


