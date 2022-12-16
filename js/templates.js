const productoCard = (producto) => {
    return `<article class="card" >
                <img class="card__img" src="${producto.imagen}" alt="${producto.altimg}">
                <div class="card__text">
                    <h3 class="card__title">${producto.nombre}</h3>
                    <span class="card__price">$${producto.precio}</span>
                    <p class="card__description">${producto.descripcion}</p>
                    <div class="div-button">
                        <button  type="button" class="button btn-add" id="${producto.nombre}">Agregar al carrito</button>
                    </div>
                </div>
            </article>`
}

const carritoLleno = (producto) => {
    return  `<tr class="tbody-row">
                <td class="producto">${producto.nombre} </td>
                <td class="precio-unidad">${producto.precio}</td>
                <td class="cantidad"><input class="cantidad" type="number" min="1" max="5" id="${producto.codigo}" value="1"></td>
                <td class="precioCantidad" id="${producto.codigo}">${producto.precioXCantidad}</td>
                <td><button class="button btnDelete" id="${producto.codigo}">Eliminar</button></td>
            </tr>`
}

const carritoVacio = () => {
    return  `<tr class="tbody-row">
                <td class="producto">....</td>
                <td class="precio-unidad">....</td>
                <td class="cantidad">....</td>
                <td class="precio-cantidad" colspan="2">....</td>
            </tr>`
}