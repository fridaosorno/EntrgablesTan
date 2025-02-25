const productos = [
    {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
    {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
    {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
    {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
    {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
  ];
  
  // lista para seleccionar productos
  const listaProductos = document.getElementById("lista-de-productos");
  const $inputFiltro = document.getElementById("input-filtro");
  const botonDeFiltro = document.querySelector("button");
  
  // se añade función para mostrar productos
  const mostrarProductos = (productos) => {
    // Limpiar lista
    listaProductos.innerHTML = '';
  
    // Agregar productos 
    productos.forEach(producto => {
      const d = document.createElement("div");
      d.classList.add("producto");
  
      const ti = document.createElement("p");
      ti.classList.add("titulo");
      ti.textContent = producto.nombre;
  
      const imagen = document.createElement("img");
      imagen.setAttribute('src', producto.img);
  
      d.appendChild(ti);
      d.appendChild(imagen);
      listaProductos.appendChild(d);
    });
  };
  
  // Función para fltrar
  const filtrado = (productos = [], texto) => {
    return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
  };
  
  // Mostrar todos los productos
  mostrarProductos(productos);
  
  // Manejo del evento de filtrado
  botonDeFiltro.onclick = function() {
    const texto = $inputFiltro.value.toLowerCase(); // Convierte el texto a minúsculas
    const productosFiltrados = filtrado(productos, texto);
  
    // MSe muetran los productos filtrados
    mostrarProductos(productosFiltrados);
  };