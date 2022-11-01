
let largoPersonalizado = 0
let anchoPersonalizado = 0 
let altoPersonalizado = 0

let mensajeCompra = ""
let continuar = true

const mensajeInicial = "Ingresa el código de la maceta que quieras comprar: \n" +
                        "A) Maceta Jardinera \n" +
                        "B) Maceta Jardinera Colgante \n"+
                        "C) Maceta Cubo"


const tamaniosJardinera = "Ingresa el tamaño para tu jardinera: \n" +
                        "a) 70 x 20 x 20 cm \n" +
                        "b) 90 x 20 x 20 cm \n"+
                        "c) Personalizado"

const tamaniosColgante = "Ingresa el tamaño para tu jardinera colgante: \n" +
                        "a) 40 x 20 x 20 cm \n" +
                        "b) 60 x 20 x 20 cm \n"+
                        "c) Personalizado"
const tamaniosCubo = "Ingresa el tamaño para tu maceta cubo: \n" +
                        "a) 40 x 40 x 40 cm \n" +
                        "b) 60 x 60 x 60 cm \n"+
                        "c) Personalizado"

function elegirMaceta(){
    
    let macetaElegida = prompt(mensajeInicial).toUpperCase().trim()

    if (macetaElegida !== "A" && macetaElegida !== "B" && macetaElegida !== "C") {
        alert("Ingresaste un código inválido.")
        return
    }

    switch (macetaElegida){
        case "A":
            let jardineraTamanio = prompt(tamaniosJardinera).toLowerCase().trim()
            
            if (jardineraTamanio !== "a" && jardineraTamanio !== "b" && jardineraTamanio !== "c") {
                alert("Ingresaste un código inválido.")
                return
            }

            switch(jardineraTamanio){
                case "a":
                    mensajeCompra = alert("¡Genial! Encargaste una jardinera de 70 x 20 x 20 cm.")
                    break
                case "b":
                    mensajeCompra = alert("¡Genial! Encargaste una jardinera de 90 x 20 x 20 cm.")
                    break
                case "c":
                    largoPersonalizado = parseInt(prompt("Ingresa el largo deseado:"))
                    anchoPersonalizado = parseInt(prompt("Ingresa el ancho deseado:"))
                    altoPersonalizado = parseInt(prompt("Ingresa la altura deseada:"))
                    
                    if (isNaN(largoPersonalizado)||isNaN(anchoPersonalizado)||isNaN(altoPersonalizado)) {
                        alert("Ingresaste una medida inválida.")
                    }else {                        
                        mensajeCompra = alert("¡Muy bien! Encargaste una maceta jardinera colgante con las siguientes medidas: "+largoPersonalizado+" x "+anchoPersonalizado+" x "+altoPersonalizado+"cm.\n"+ "Nos comunicaremos contigo para contarte si es posible personalizar el producto con las medidas ingresadas.")
                    }
                    break
                default: 
                    console.error("Hubo un error inesperado.")
                    return     
            }

            break

        case "B":
            let colganteTamanio = prompt(tamaniosColgante).toLowerCase().trim()
                    
            if (colganteTamanio !== "a" && colganteTamanio !== "b" && colganteTamanio !== "c") {
                alert("Ingresaste un código inválido.")
                return
            }
            
            switch(colganteTamanio){
                case "a":
                    mensajeCompra = alert("¡Genial! Encargaste una jardinera colgante de 40 x 20 x 20 cm.")
                    break
                case "b":
                    mensajeCompra = alert("¡Genial! Encargaste una jardinera colgante de 60 x 20 x 20 cm.")
                    break
                case "c":
                    largoPersonalizado = parseInt(prompt("Ingresa el largo deseado:"))
                    anchoPersonalizado = parseInt(prompt("Ingresa el ancho deseado:"))
                    altoPersonalizado = parseInt(prompt("Ingresa la altura deseada:"))
                    
                    if (isNaN(largoPersonalizado)||isNaN(anchoPersonalizado)||isNaN(altoPersonalizado)){
                        alert("Ingresaste una medida inválida.")
                    }else {                        
                        mensajeCompra = alert("¡Muy bien! Encargaste una maceta jardinera colgante con las siguientes medidas: "+largoPersonalizado+" x "+anchoPersonalizado+" x "+altoPersonalizado+"cm.\n"+ "Nos comunicaremos contigo para contarte si es posible personalizar el producto con las medidas ingresadas.")
                    }                    
                    break
                default: 
                    console.error("Hubo un error inesperado.")
                    return   
            }
            break

        case "C":
            let cuboTamanio = prompt(tamaniosCubo).toLowerCase().trim()
            
            if (cuboTamanio !== "a" && cuboTamanio !== "b" && cuboTamanio !== "c") {
                alert("Ingresaste un código inválido.")
                return
            }

            switch(cuboTamanio){
                case "a":
                    mensajeCompra = alert("¡Genial! Encargaste una jardinera cubo de 40 x 40 x 40 cm.")
                    break
                case "b":
                    mensajeCompra = alert("¡Genial! Encargaste una jardinera de 60 x 60 x 60 cm.")
                    break
                case "c":
                    anchoPersonalizado = parseInt(prompt("Ingresa el ancho,largo y alto deseado (una medida para los tres):"))

                    if (isNaN(anchoPersonalizado)){
                        alert("Ingresaste una medida inválida") 
                    }else {
                        mensajeCompra = alert("¡Muy bien! Encargaste una maceta cubo con las siguientes medidas: "+anchoPersonalizado+" x "+anchoPersonalizado+" x "+anchoPersonalizado+"cm. \n"+ "Nos comunicaremos contigo para contarte si es posible personalizar el producto con las medidas ingresadas.")                
                    }

                    break
                default: 
                    console.error("Hubo un error inesperado.")
                    return   
            }

            break

        default:
            console.error("Hubo un error inesperado.")
            return       
    }
}

function encargarMaceta(){
    while (continuar) {
        elegirMaceta()
        continuar = confirm("¿Deseas volver a empezar?")
        
    }
}