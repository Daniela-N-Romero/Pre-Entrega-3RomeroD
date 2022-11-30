const cargarCarrito = () => {
    if (carrito.length > 0){
        tBody.innerHTML = ""
        let nuevasFilas = ""
        carrito.forEach(producto => {
            nuevasFilas += `<tr class="tbody-row">
                                <td class="producto">${producto.nombre} </td>
                                <td class="precio-unidad">${producto.precio}</td>
                            </tr>`
        })
        tBody.innerHTML += nuevasFilas
    }    
}

const finalizarCompra = () => {
    const nuevaCompra = new Compra(carrito, envio, null, null)
    tdEnvioPrecio.innerHTML = nuevaCompra.calcularEnvio()
    totalCarrito.innerHTML = nuevaCompra.calcularPrecioTotal()
}


cargarCarrito()

const envioSi = document.querySelector("input.input.btnEnvioSi")
const envioNo = document.querySelector("input.input.btnEnvioNo")

const envioClick = () =>{
    envioNo.addEventListener("change", (e)=>{
        envio= false
        finalizarCompra()
    })
    envioSi.addEventListener("change", (e)=>{
        envio= true
        finalizarCompra()
    })
    
}


envioClick()



const confirmarCompra  = () => {
    btnConfirm.addEventListener("click", ()=>{
        if (carrito.length === 0){
            toast("El carrito está vacio.")
        }else{
            carrito.length = 0
            localStorage.clear()            
            toast("¡Listo! Confirmaste tu compra.")
        }
    })
}

confirmarCompra()