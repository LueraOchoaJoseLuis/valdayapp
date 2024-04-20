// Función para manejar el clic en el botón "Agregar"
function handleAddButtonClick() {
    // Obtener el nombre ingresado por el usuario
    const name = document.querySelector('#nameInput').value;

    // Verificar si se ingresó un nombre
    if (name.trim() !== '') {
        // Actualizar el mensaje con el nombre ingresado
        const message = document.querySelector('.content p');
        message.textContent = `${name}, ¿Serías mi San Valentín?`;

        // Mostrar el contenido de la carta y ocultar el campo de ingreso de nombre
        document.querySelector('.name-input-container').style.display = 'none';
        document.querySelector('.card').style.display = 'block';
        document.querySelector('.buttons').style.display = 'flex'; // Mostrar los botones SI y NO
    } else {
        alert('Por favor, ingresa un nombre válido.');
    }
}

// Asignar evento de clic al botón "Agregar"
document.querySelector('#addButton').addEventListener('click', handleAddButtonClick);

// Función para manejar el clic en el botón YES
function handleYesButtonClick() {
    document.querySelector('.content').style.display = 'none'; // Ocultar el contenido original
    document.querySelector('.green').style.display = 'none'; // Ocultar los botones
    document.querySelector('.red').style.display = 'none'; // Ocultar los botones
    document.querySelector('.bear1').style.display = 'none'; // Ocultar el contenido original
    document.querySelector('.hidden-message').style.display = 'block'; // Mostrar el mensaje oculto
}
  
// Asignar evento de clic al botón YES
document.querySelector('.green').addEventListener('click', handleYesButtonClick);

let clickCount = 0; // Variable para contar los clics en el botón NO

document.querySelector('.red').addEventListener('click', function() {
    clickCount++; // Incrementar el contador de clics
    
    // Cambiar el texto del botón NO
    let noButton = document.querySelector('.red');
    switch (clickCount) {
        case 1:
            noButton.textContent = 'Di que si';
            break;
        case 2:
            noButton.textContent = 'Si';
            break;
        case 3:
            noButton.textContent = 'Piensalo bien';
            break;
        case 4:
            noButton.textContent = 'Como que no';
            break;
        case 5:
            noButton.textContent = 'Que?';
            break;
        case 6:
            noButton.textContent = 'Sipi?';
            break;
        case 7:
            noButton.textContent = 'Sí?';
            break;
        case 8:
            noButton.textContent = 'Chi Please';
            break;
        default:
            noButton.textContent = 'Estás segur@?';
            clickCount = 0; // Reiniciar el contador cuando se llega al máximo
            break;
    }
    
    // Cambiar el tamaño del botón SI
    let yesButton = document.querySelector('.green');
    let fontSize = window.getComputedStyle(yesButton).fontSize;
    let currentSize = parseFloat(fontSize);
    let newSize = currentSize + 6;
    yesButton.style.fontSize = newSize + 'px';
    
    // Cambiar la imagen del oso
    let bearImages = [
        "https://media.tenor.com/I5KbvAcXtjQAAAAi/peach-goma.gif"
    // Agrega más URLs de imágenes aquí si es necesario
    ];

    let currentImageIndex = clickCount % bearImages.length; // Índice de la imagen actual
    let bearImage = document.querySelector('.bear1');
    bearImage.src = bearImages[currentImageIndex];
});






  