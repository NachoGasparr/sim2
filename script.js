function operacion(tipoOperacion, num1, num2) {
    let resultado = 0;
    switch (tipoOperacion) {
    case "suma":
        resultado = num1 + num2;
        break;
    case "resta":
        resultado = num1 - num2;
        break;
    case "multiplicacion":
        resultado = num1 * num2;
        break;
    case "division":
        if (num2!== 0) {
        resultado = num1 / num2;
        } else {
        alert("Error: No se puede dividir entre cero");
        return;
        }
        break;
    default:
        alert("Error: Operación no válida");
        return;
    }
    return resultado;
}

function tienda() {
    let tienda = {
        stockInicial: 0,
        stockActual: 0,
    productos: [],
    };


    let opciones = `
    1. Realizar una venta
    2. Realizar una compra
    3. Ver stock actual
    4. Buscar producto
    5. Filtrar productos
    6. Ver productos con stock
    7. Salir
    `;

    while (true) {
    let opcion = prompt(opciones);
    switch (opcion) {
        case "1":
        let cantidadVenta = parseInt(prompt("Ingrese la cantidad a vender"));
        let productoVenta = prompt("Ingrese el nombre del producto a vender");
        let productoEncontrado = tienda.productos.find((producto) => producto.nombre === productoVenta);
        if (productoEncontrado && cantidadVenta > 0 && cantidadVenta <= productoEncontrado.cantidad) {
            productoEncontrado.cantidad -= cantidadVenta;
            tienda.stockActual = tienda.productos.reduce((acc, producto) => acc + producto.cantidad, 0);
            alert(`Venta realizada con éxito. Se vendieron ${cantidadVenta} ${productoVenta}(s). Stock actual: ${tienda.stockActual}`);
        } else {
            alert("Error: No hay suficiente stock para realizar la venta");
        }
        break;
        case "2":
        let cantidadCompra = parseInt(prompt("Ingrese la cantidad a comprar"));
        let productoCompra = prompt("Ingrese el nombre del producto a comprar");
        let productoExistente = tienda.productos.find((producto) => producto.nombre === productoCompra);
        if (productoExistente) {
            productoExistente.cantidad += cantidadCompra;
            tienda.stockActual = tienda.productos.reduce((acc, producto) => acc + producto.cantidad, 0);
            alert(`Compra realizada con éxito. Se compraron ${cantidadCompra} ${productoCompra}(s). Stock actual: ${tienda.stockActual}`);
        } else {
            tienda.productos.push({ nombre: productoCompra, cantidad: cantidadCompra });
            tienda.stockActual = tienda.productos.reduce((acc, producto) => acc + producto.cantidad, 0);
            alert(`Compra realizada con éxito. Se compraron ${cantidadCompra} ${productoCompra}(s). Stock actual: ${tienda.stockActual}`);
        }
        break;
        case "3":
            let listaProductos = "";
            tienda.productos.forEach((producto) => {
            listaProductos += `Nombre: ${producto.nombre} - Cantidad: ${producto.cantidad}\n`;
            });
            alert(`Stock actual: ${tienda.stockActual} unidades\n${listaProductos}`);
        break;
        case "4":
        let buscarProducto = prompt("Ingrese el nombre del producto a buscar");
        let productoEncontradoBuscar = tienda.productos.find((producto) => producto.nombre === buscarProducto);
        if (productoEncontradoBuscar) {
            alert(`Producto encontrado: ${productoEncontradoBuscar.nombre} - Cantidad: ${productoEncontradoBuscar.cantidad}`);
        } else {
            alert("Error: Producto no encontrado");
        }
        break;
        case "5":
            let filtrarProducto = prompt("Ingrese el nombre del producto a filtrar (o 'todos' para ver todo el stock)");
            if (filtrarProducto.toUpperCase() === "todos") {
            let listaProductos = "";
            tienda.productos.forEach((producto) => {
                listaProductos += `Nombre: ${producto.nombre} - Cantidad: ${producto.cantidad}\n`;
            });
            alert(`Stock disponible:\n${listaProductos}`);
            } else {
            let productosFiltrados = tienda.productos.filter((producto) => producto.nombre.includes(filtrarProducto));
            if (productosFiltrados.length > 0) {
                let listaProductos = "";
                productosFiltrados.forEach((producto) => {
                listaProductos += `Nombre: ${producto.nombre} - Cantidad: ${producto.cantidad}\n`;
                });
                alert(`Productos filtrados:\n${listaProductos}`);
            } else {
                alert("Error: No se encontraron productos que coincidan con el filtro");
            }
        }
        break;
        case "6":
        let productosConStock = tienda.productos.filter((producto) => producto.cantidad > 0);
        if (productosConStock.length > 0) {
            let listaProductos = "";
            productosConStock.forEach((producto) => {
            listaProductos += `Nombre: ${producto.nombre} - Cantidad: ${producto.cantidad}\n`;
            });
            alert(`Productos con stock:\n${listaProductos}`);
        } else {
            alert("Error: No hay productos con stock");
        }
        break;
        case "7":
        alert("Gracias por tu atención");
        return;
        default:
        alert("Error: Opción no válida");
    }
    }
}

tienda();