
fetch(baseDeDatos)
    .then((response) => response.json())
    .then((response)=> productos.push(...response))
    .then(()=>crearCards(productos))
    .then(()=>agregarProductos())

const crearCards = (array) =>{
    let contenido = ``
    array.forEach(producto => {
            contenido += productoCard(producto)
    })
    return sectionCards.innerHTML = contenido
}
    

const agregarProductos = () => {
    const botonesAgregar = document.querySelectorAll("button.button.btn-add")
    botonesAgregar.forEach (btn => {
        btn.addEventListener("click", () => {
            
            let agregado = productos.find(producto => producto.nombre === btn.id)

            if (carrito.includes(agregado)){
                toast("Este producto ya se encuentra en tu carrito.")
                // No entiendo porque no lo encuentra al producto. Cuando se refresca la página (el index), mi idea es que el programa reconozca que el producto ya está en el carrito porque tiene esa informacion gracias a local storage. Pero aún así, solo funciona cuando se usa la página desde un principio sin refrescarla.
            } else{
                carrito.push(agregado)
                localStorage.setItem("carritoActual", JSON.stringify(carrito))
                toast("Agregaste el producto al carrito", "./checkout.html")
            }
        })
    }  
)} 
