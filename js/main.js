let botonCarrito = document.querySelector("button.carrito_btn")
botonCarrito.addEventListener('click', ()=> {seleccionarProductos();});

function seleccionarProductos(){
    let codigo = prompt(mensajeInicial)
        if (isNaN(parseInt((codigo))) && codigo !== null){
            alert("Ingresaste un codigo inválido.")
            let otroIntento = confirm("¿Deseas volver a intentarlo?")
            if (otroIntento){
                seleccionarProductos()
            } else {
                return alert("Cerraste la seleccion de productos. Los productos ya agregados permaneceran en tu carrito por 3(tres) días.") 
            }
        }
        else if (codigo === null){
            return alert("Cerraste la seleccion de productos. Los productos ya agregados permaneceran en tu carrito por 3(tres) días.") 
        } else {
            let macetaElegida = seleccionarMaceta(codigo)
            carrito.push(macetaElegida)
            alert(`Has agregado ${macetaElegida.nombre} al carrito.`)
            let seguirComprando = confirm(`¿Deseas agregar más productos a tu carrito?`)
                if (seguirComprando){
                    seleccionarProductos()
                }else{
                    finalizarCompra()
                }
        }
}


function seleccionarMaceta(codigo){
    let macetaEncontrada = macetas.find(maceta => maceta.codigo === parseInt(codigo))
    if (macetaEncontrada === undefined){
        alert("El codigo que ingresaste no coincide con ninguno de nuestros productos. Intentalo de nuevo.")
        seleccionarProductos()
    } else {
        return macetaEncontrada
    }
}


function finalizarCompra(){

    if (carrito.length === 0){
        console.warn("Tu carrito aún está vacio.")
        return
    }
    
    let envio = confirm("¿Deseas solicitar el envio de tu(s) producto(s) a tu hogar?")
    const nuevaCompra = new Compra(carrito, envio, null, null)
    nuevaCompra.calcularEnvio()
    nuevaCompra.calcularPrecioTotal()
    let confirmar = confirm(`Has seleccionado ${nuevaCompra.carrito.length} producto(s).\n`+
                            `El monto por envio es de $ ${nuevaCompra.precioEnvio}.\n`+
                            `El monto total a pagar es de $ ${nuevaCompra.precioTotal}.\n` +
                            `¿Deseas confirmar el pago?`)
    nuevaCompra.confirmarCompra(confirmar)
    carrito.length = 0
}

























// function elegirMaceta(){
    
//     let macetaElegida = prompt(mensajeInicial).toUpperCase().trim()

//     if (macetaElegida !== "A" && macetaElegida !== "B" && macetaElegida !== "C") {
//         alert("Ingresaste un código inválido.")
//         return
//     }

//     switch (macetaElegida){
//         case "A":
//             let jardineraTamanio = prompt(tamaniosJardinera).toLowerCase().trim()
            
//             if (jardineraTamanio !== "a" && jardineraTamanio !== "b" && jardineraTamanio !== "c") {
//                 alert("Ingresaste un código inválido.")
//                 return
//             }

//             switch(jardineraTamanio){
//                 case "a":
//                     mensajeCompra = alert("¡Genial! Encargaste una jardinera de 70 x 20 x 20 cm.")
//                     break
//                 case "b":
//                     mensajeCompra = alert("¡Genial! Encargaste una jardinera de 90 x 20 x 20 cm.")
//                     break
//                 case "c":
//                     largoPersonalizado = parseInt(prompt("Ingresa el largo deseado:"))
//                     anchoPersonalizado = parseInt(prompt("Ingresa el ancho deseado:"))
//                     altoPersonalizado = parseInt(prompt("Ingresa la altura deseada:"))
                    
//                     if (isNaN(largoPersonalizado)||isNaN(anchoPersonalizado)||isNaN(altoPersonalizado)) {
//                         alert("Ingresaste una medida inválida.")
//                     }else {                        
//                         mensajeCompra = alert("¡Muy bien! Encargaste una maceta jardinera colgante con las siguientes medidas: "+largoPersonalizado+" x "+anchoPersonalizado+" x "+altoPersonalizado+"cm.\n"+ "Nos comunicaremos contigo para contarte si es posible personalizar el producto con las medidas ingresadas.")
//                     }
//                     break
//                 default: 
//                     console.error("Hubo un error inesperado.")
//                     return     
//             }

//             break

//         case "B":
//             let colganteTamanio = prompt(tamaniosColgante).toLowerCase().trim()
                    
//             if (colganteTamanio !== "a" && colganteTamanio !== "b" && colganteTamanio !== "c") {
//                 alert("Ingresaste un código inválido.")
//                 return
//             }
            
//             switch(colganteTamanio){
//                 case "a":
//                     mensajeCompra = alert("¡Genial! Encargaste una jardinera colgante de 40 x 20 x 20 cm.")
//                     break
//                 case "b":
//                     mensajeCompra = alert("¡Genial! Encargaste una jardinera colgante de 60 x 20 x 20 cm.")
//                     break
//                 case "c":
//                     largoPersonalizado = parseInt(prompt("Ingresa el largo deseado:"))
//                     anchoPersonalizado = parseInt(prompt("Ingresa el ancho deseado:"))
//                     altoPersonalizado = parseInt(prompt("Ingresa la altura deseada:"))
                    
//                     if (isNaN(largoPersonalizado)||isNaN(anchoPersonalizado)||isNaN(altoPersonalizado)){
//                         alert("Ingresaste una medida inválida.")
//                     }else {                        
//                         mensajeCompra = alert("¡Muy bien! Encargaste una maceta jardinera colgante con las siguientes medidas: "+largoPersonalizado+" x "+anchoPersonalizado+" x "+altoPersonalizado+"cm.\n"+ "Nos comunicaremos contigo para contarte si es posible personalizar el producto con las medidas ingresadas.")
//                     }                    
//                     break
//                 default: 
//                     console.error("Hubo un error inesperado.")
//                     return   
//             }
//             break

//         case "C":
//             let cuboTamanio = prompt(tamaniosCubo).toLowerCase().trim()
            
//             if (cuboTamanio !== "a" && cuboTamanio !== "b" && cuboTamanio !== "c") {
//                 alert("Ingresaste un código inválido.")
//                 return
//             }

//             switch(cuboTamanio){
//                 case "a":
//                     mensajeCompra = alert("¡Genial! Encargaste una jardinera cubo de 40 x 40 x 40 cm.")
//                     break
//                 case "b":
//                     mensajeCompra = alert("¡Genial! Encargaste una jardinera de 60 x 60 x 60 cm.")
//                     break
//                 case "c":
//                     anchoPersonalizado = parseInt(prompt("Ingresa el ancho,largo y alto deseado (una medida para los tres):"))

//                     if (isNaN(anchoPersonalizado)){
//                         alert("Ingresaste una medida inválida") 
//                     }else {
//                         mensajeCompra = alert("¡Muy bien! Encargaste una maceta cubo con las siguientes medidas: "+anchoPersonalizado+" x "+anchoPersonalizado+" x "+anchoPersonalizado+"cm. \n"+ "Nos comunicaremos contigo para contarte si es posible personalizar el producto con las medidas ingresadas.")                
//                     }

//                     break
//                 default: 
//                     console.error("Hubo un error inesperado.")
//                     return   
//             }

//             break

//         default:
//             console.error("Hubo un error inesperado.")
//             return       
//     }
// }

// function encargarMaceta(){
//     while (continuar) {
//         elegirMaceta()
//         continuar = confirm("¿Deseas volver a empezar?")
        
//     }
// }