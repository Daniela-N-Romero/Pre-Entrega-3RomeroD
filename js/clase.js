class Compra {
    constructor(carrito, envio, precioEnvio, precioTotal){
        this.carrito = carrito
        this.envio = envio
        this.precioEnvio = precioEnvio
        this.precioTotal = precioTotal
    }
    calcularPesoTotal(){
        if (this.carrito.length > 0){
            return this.carrito.reduce((acc, maceta)=> acc + maceta.peso, 0)
        } else {
            console.warn("Ha ocurrido un error.")
        }
    }

    calcularEnvio(){
        if (this.envio === true){
                if (this.calcularPesoTotal() < 15){
                    let precioEnvio = envioMinimo
                    confirm(`El costo del envio es del monto minimo de $${envioMinimo}. ¿Desea sumarlo a su compra?`)
                    if(confirm){
                        alert(`Muy bien has agregado el envio a tu carrito por un monto total de $${envioMinimo}.`)
                        return this.precioEnvio = precioEnvio
                    } else{
                        alert("No ha solicitado un envío. Podrá retirar los productos que encargue directamente en nuestro local.")
                        return this.precioEnvio = 0
                    }
                } else {
                    let precioEnvio = envioMinimo + (this.calcularPesoTotal() * adicionalXKilo)
                    confirm(`El costo del envio es de $ ${precioEnvio}. ¿Desea sumarlo a su compra?`)
                    if(confirm){
                        alert(`Muy bien has agregado el envio a tu carrito por un monto total de $${precioEnvio}.`)
                        return this.precioEnvio = precioEnvio
                    } else {
                        alert("No ha solicitado un envío. Podrá retirar los productos que encargue directamente en nuestro local.")
                        return this.precioEnvio = 0
                    }
                }
        } else {
            alert("No ha solicitado un envío. Podrá retirar los productos que encargue directamente en nuestro local.")
            return this.precioEnvio = 0
        }
    }

    calcularPrecioTotal(){
        if (this.carrito.length > 0){
            let precioTotal = (this.carrito.reduce((acc, maceta)=> acc + maceta.precio, 0)) + this.precioEnvio
            return this.precioTotal = precioTotal
        } else {
            console.warn("Ha ocurrido un error.")
        }
    }
    confirmarCompra(confirmar){
        if (confirmar) {
            return alert(`Has confirmado el pago de ${this.carrito.length} productos por un total de $${this.precioTotal}. ¡Muchas gracias por tu compra!`)
        } else{
            return alert(`La compra no ha sido confirmada. Los productos permaneceran en tu carrito por 3(tres) días.`)
        }
    }
}








