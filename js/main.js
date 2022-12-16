const toast = (text, destination) => {
        Toastify ({
            text: text,
            duration: 3500,
            destination: destination,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true, 
        }).showToast()
}

const calcularPrecioYCantidad = (producto) => {
    producto.precioXCantidad= producto.precio * producto.cantidad
    producto.peso*=producto.cantidad
}