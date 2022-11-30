const productoCard = (producto) => {
    return `<article class="card" >
                <img class="card__img" src="${producto.imagen}" alt="Maceta con forma de cubo">
                <div class="card__text">
                    <h3 class="card__title">${producto.nombre}</h3>
                    <span class="card__price">$${producto.precio}</span>
                    <p class="card__description">${producto.descripcion}</p>
                    <div class="div-button">
                        <button  type="button" class="button btn-add" id="${producto.codigo}">Agregar al carrito</button>
                    </div>
                </div>
            </article>`
}


