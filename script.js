function mostrarInstrucciones() {
    // Verificar si es un dispositivo móvil
    if (window.innerWidth <= 768) {
        const instrucciones = document.getElementById("instrucciones");
        const boton = document.querySelector('.btn-warning');
        
        instrucciones.classList.toggle('visible');
        boton.textContent = instrucciones.classList.contains('visible') 
            ? "Cerrar instrucciones" 
            : "¿Cómo votar por esta Hamburguesa?";
    } else {
        alert("Esta función está disponible solo para dispositivos móviles. Por favor, accede desde tu celular para votar.");
    }
}

function mostrarDetalles() {
    const detalles = document.getElementById("detalles");
    const boton = document.querySelector('.btn-detalles');
    
    detalles.style.display = detalles.style.display === 'none' ? 'block' : 'none';
    boton.textContent = detalles.style.display === 'none' ? "Ver Detalles" : "Ocultar Detalles";
}

function mostrarAdiciones() {
    // agregar la lógica para mostrar las adiciones
    alert("Próximamente: Lista de adiciones disponibles");
}

function mostrarBebidas() {
    //  agregar la lógica para mostrar las bebidas
    alert("Próximamente: Lista de bebidas disponibles");
} 