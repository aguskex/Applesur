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