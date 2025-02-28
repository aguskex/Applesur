Swal.fire({
    html: 'Por favor acepte nuestros <a href="#">terminos y condiciones</a>',
    confirmButtonText: 'Acepto',
    icon: 'info',
    padding: '',
    backdrop: true,
    toast: true,
    position: 'bottom',
    allowOutsideClick: false,
    allowEscapeKey: false,
    stopKeydownPropagation: false,
    showConfirmButton: true,
    showCancelButton: false,
    showCloseButton: false,
    closeButtonAriaLabel: 'Cerrar esta alerta',
    customClass: {
        content: 'content-class',
        confirmButton: 'btn bg-dark text-light',
        icon: 'bg-dark text-light'
    }
}
)

document.addEventListener('DOMContentLoaded', () => {
    // Obtener el botón
    const btnVolverArriba = document.getElementById('btn-volver-arriba');

    // Verificar si el botón existe
    if (btnVolverArriba) {
        // Mostrar u ocultar el botón al hacer scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) { // Mostrar el botón después de 300px de scroll
                btnVolverArriba.style.display = 'block';
            } else {
                btnVolverArriba.style.display = 'none';
            }
        });

        // Volver al inicio de la página al hacer clic en el botón
        btnVolverArriba.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Desplazamiento suave
            });
        });
    } else {
        console.error('El botón "btn-volver-arriba" no existe en el DOM.');
    }

    // Scroll suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Evita el comportamiento predeterminado
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth' // Scroll suave
                });
            } else {
                console.error(`El elemento con ID ${this.getAttribute('href')} no existe.`);
            }
        });
    });
});
