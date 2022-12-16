const crearCarrito = (array) => {
    
    if (carrito != 0){
        tBody.innerHTML = ""
        let nuevasFilas = ""
        array.forEach(producto => {
            nuevasFilas += carritoLleno(producto)
        })
        tBody.innerHTML += nuevasFilas
    }else{
        tBody.innerHTML = carritoVacio()
    }
}

crearCarrito(carrito)


const calcularCompra = () => {
    const nuevaCompra = new Compra(carrito, envio, null, null)
    tdEnvioPrecio.innerHTML = nuevaCompra.calcularEnvio()
    totalCarrito.innerHTML = nuevaCompra.calcularPrecioTotal()
}

const eliminarDelCarrito = () =>{
    const botonesBorrar = document.querySelectorAll("button.button.btnDelete")
    botonesBorrar.forEach(btn =>{
        btn.addEventListener("click", () => {
            
            let productoAEliminar = carrito.findIndex(producto => producto.codigo === parseInt(btn.id))
            carrito.splice(productoAEliminar,1)
            console.table(carrito)
            localStorage.setItem("carritoActual", JSON.stringify(carrito))
            crearCarrito(carrito)
            calcularCompra()
            eliminarDelCarrito()
        })
    })
}

eliminarDelCarrito()


let envio = undefined
calcularCompra()


const envioSi = document.querySelector("input.input.btnEnvioSi")
const envioNo = document.querySelector("input.input.btnEnvioNo")

const envioClick = () =>{
    envioNo.addEventListener("change", (e)=>{
        envio= false
        calcularCompra()
    })
    envioSi.addEventListener("change", (e)=>{
        envio= true
        calcularCompra()
    })
    
}

envioClick()


const elegirCantidad = ()=> {
    const inputs = document.querySelectorAll("input.cantidad")
    inputs.forEach (inp => {
        inp.addEventListener("input", (e) => {   
            
            let productoSeleccionado = carrito.find(producto => producto.codigo === parseInt(inp.id))
            productoSeleccionado.cantidad = parseInt(inp.value)
            calcularPrecioYCantidad(productoSeleccionado)
            calcularCompra()
            
            const tdatasSubtotal = document.querySelectorAll("td.precioCantidad")
            tdNodeList = Array.prototype.slice.call(tdatasSubtotal,0); 
            
            tdNodeList.forEach(tdata=>{ 
            let tdAModificar = tdNodeList.find(td => parseInt(td.id) === parseInt(inp.id))
            return tdAModificar.innerHTML = `<td class="precioCantidad">${productoSeleccionado.precioXCantidad}</td>`
            })
        })
    })
    
}

elegirCantidad()


const btnConfirmar  = () => {
    btnConfirm.addEventListener("click", ()=>{
        if (carrito.length === 0){
            toast("El carrito está vacio.")
        }else{
            Swal.fire({
                title: 'Ingresa tus datos',
                icon: 'info',
                html:
                '<input id="swal-input1" class="swal2-input" placeholder="Nombre">' +
                '<input id="swal-input2" class="swal2-input" placeholder="Correo electronico">',
                showCancelButton: true,
                confirmButtonText: 'Continuar',
            })
            .then((respuesta)=> {
                if (respuesta.isConfirmed){
                    Swal.fire({
                            title: '¡Gracias por tu compra!',
                            text: 'Nos comunmicaremos contigo por correo electronico para enviarte el cupon de pago y más información.',
                            imageUrl: '../assets/logo.png',
                            imageWidth: 120,
                            imageHeight: 120,
                            imageAlt: 'Nodür',
                    })
                    localStorage.clear()            
                    carrito.length = 0
                    crearCarrito(carrito)
                    calcularCompra()
                }
            })
            
        }
    })
}

btnConfirmar()
