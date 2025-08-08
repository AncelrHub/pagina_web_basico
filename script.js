// Implementar una interacción simple: mostrar un alert y cambiar contenido
document.getElementById('miBoton').addEventListener('click', function() {
    alert('¡Has hecho clic en el botón!');
    // Cambiar el contenido del encabezado
    document.getElementById('page-title').textContent = '¡Gracias por visitar!';
});