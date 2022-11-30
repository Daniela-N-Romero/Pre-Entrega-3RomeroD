const crearCards = (array) =>{
        let contenido = ``
        array.forEach(producto => {
            contenido += productoCard(producto)
        })
        return sectionCards.innerHTML = contenido
}

crearCards(productos)

const botonesAgregar = document.querySelectorAll("button.button.btn-add")

const agregarProductos = () => {
    botonesAgregar.forEach (btn => {
        btn.addEventListener("click", () => {
            let agregado = productos.find(producto => producto.codigo === parseInt(btn.id))
            
            if (carrito.includes(agregado)){
                toast("El producto ya se encuenta en el carrito")
            } else{
                carrito.push(agregado)
                localStorage.setItem("carritoActual", JSON.stringify(carrito))
                toast("Agregaste el producto al carrito", "./checkout.html")
            }
        }
    )}  
)} 

agregarProductos()