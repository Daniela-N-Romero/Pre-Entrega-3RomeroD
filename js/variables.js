const carrito = JSON.parse(localStorage.getItem("carritoActual")) || []
const productos = []
const envioMinimo = 750
const envioMaximo = 5550
const adicionalXKilo = 25
const baseDeDatos = "../basededatos.json"

