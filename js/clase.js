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
        }
    }

    calcularEnvio(){
        if (this.envio === true){
                if (this.calcularPesoTotal() < 15){
                    return this.precioEnvio = envioMinimo
                } else if (this.calcularPesoTotal() < 100){
                    return this.precioEnvio = envioMinimo + (this.calcularPesoTotal() * adicionalXKilo)
                } else if (this.calcularPesoTotal() > 100){
                    return this.precioEnvio = envioMaximo
                } else{
                    return this.precioEnvio = 0
                }
        } else {
            return this.precioEnvio = 0
        }
    }

    calcularPrecioTotal(){
        if (this.carrito.length > 0){
            let precioTotal = (this.carrito.reduce((acc, maceta)=> acc + maceta.precioXCantidad, 0)) + this.precioEnvio
            return this.precioTotal = precioTotal
        } else {
            return this.precioTotal = 0
        }
    }
}

