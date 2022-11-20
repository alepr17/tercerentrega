const $verCarrito = document.querySelector(".verCarrito");
const $agregarAlCarrito = document.querySelector(".agregarAlCarrito");
const $carrito = document.querySelector(".carrito");
const $contenedor = document.querySelector(".contenedorTienda");
const $sumaTotal = document.querySelector(".sumaTotal");
const $quitarCarrito = document.querySelector(".quitarCarrito");
const $table = document.querySelector(".table");

const arregloTotal = [];

const arrayCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

let total = 0;

//cargar los productos dinamicamente desde una json

fetch("../js/productos.json")
  .then((res) => res.json())

  .then((res) => {
    res.forEach((el) => {
      let contenedor = document.createElement("div");
      let img = document.createElement("img");
      let div = document.createElement("div");
      let titulo = document.createElement("h5");
      let precio = document.createElement("p");
      let boton = document.createElement("button");
      let input = document.createElement("input");

      contenedor.className = "card col-10 col-md-6 m-auto p-0 contenedor  ";

      img.src = `${el.img}`;
      img.alt = `${el.producto}`;
      img.className = `class="card-img-top img-tienda`;
      contenedor.appendChild(img);

      div.className = "card-body";
      contenedor.appendChild(div);

      titulo.className = "card-title";
      titulo.innerHTML = `${el.producto}`;
      div.appendChild(titulo);

      precio.className = "card-text";
      precio.innerHTML = `${el.precio}`;
      div.appendChild(precio);

      boton.className = "btn btn-primary comprar";
      boton.innerHTML = "Agregar al carrito";
      div.appendChild(boton);

      input.className = "btn btn-primary col-5";
      input.type = "number";
      input.value = "1";
      div.appendChild(input);

      $contenedor.appendChild(contenedor);
    });
  })
  .then(() => {
    const $comprar = document.querySelectorAll(".comprar");

    funcionAgregar($comprar);
  });

//asignar el evento de agregar al carrito a cada producto

function funcionAgregar($comprar) {
  for (let boton of $comprar) {
    boton.addEventListener("click", () => {
      let productos = {
        precio: parseInt(boton.previousElementSibling.innerHTML),
        cantidad: parseInt(boton.nextElementSibling.value),
        producto: boton.previousElementSibling.previousElementSibling.innerHTML,
        img: boton.parentElement.previousElementSibling.src,
      };

      if (chequearProd(productos.producto)) {
        for (let prod of arrayCarrito) {
          if (prod.producto === productos.producto) {
            prod.cantidad += productos.cantidad;
            Toastify({

              text: `agregaste ${productos.cantidad} ${productos.producto}`,
              gravity: "bottom",
              duration: 3000,
              style:{
                fontSize: "20px"
              },
              }).showToast();
          }
        }
      } else {
        arrayCarrito.push(productos);
        Toastify({

          text: `agregaste ${productos.cantidad} ${productos.producto}`,
          gravity: "bottom",
          duration: 3000,
          style:{
            fontSize: "20px"
          },
          }).showToast();
      }
      localStorage.setItem("carrito", JSON.stringify(arrayCarrito));
    });
  }
}

// chequear que el arreglo contenga lo que queremos agregar al carrito

function chequearProd(val) {
  for (let i of arrayCarrito) {
    if (i.producto == val) {
      return true;
    }
  }
}

// mostrar el carrito y renderizar los elementos

$verCarrito.addEventListener("click", () => {
  let carritoJSON = JSON.parse(localStorage.getItem("carrito"));

  $carrito.classList.add("ver-carrito");
  

  $verCarrito.disabled = true;

  carritoJSON.forEach((el) => {
    let $tr = document.createElement("tr");

    $tr.innerHTML = `<th scope="row"><img src="${
      el.img
    }" class="img-carrito"></th>
        <td>${el.producto}</td>
        <td>${el.precio}</td>
        <td>${el.cantidad}</td>
        <td>${el.cantidad * el.precio}</td>
        <td><button class="btn btn-danger borrarElemento">borrar</td>
        `;

    $agregarAlCarrito.appendChild($tr);
  });

  sumarProductos();

  borrarProductos();

  arregloTotal.length = 0;
});

//funcion para sumar el precio de cada producto y agregarlo al arreglo

function sumarProductos() {
  let carritoJSON = JSON.parse(localStorage.getItem("carrito"));

  carritoJSON.forEach((el) => {
    const sumaTotal = el.precio * el.cantidad;

    arregloTotal.push(sumaTotal);
  });

  arregloTotal.forEach((el) => {
    total = total + el;
  });

  $sumaTotal.innerHTML = total;

  arregloTotal.length = 0;

  total = 0;
}

// quitar el carrito y vaciar el innerhtml, reiniciar el arreglototal, el total y reactivar el boton de vercarrito

$quitarCarrito.addEventListener("click", () => {
  $carrito.classList.remove("ver-carrito");

  $agregarAlCarrito.innerHTML = "";

  $verCarrito.disabled = false;

  arregloTotal.length = 0;

  total = 0;
});

//borrar 1 elemento de la lista del carrito

function borrarProductos() {
  const $borrarElemento = document.querySelectorAll(".borrarElemento");

  for (const borrar of $borrarElemento) {
    borrar.addEventListener("click", (e) => {
      let carritoJSON = JSON.parse(localStorage.getItem("carrito"));

      const prodEliminar = e.target.parentNode.parentNode.children[1].innerHTML;

      for (let i = 0; i < carritoJSON.length; i++) {
        if (carritoJSON[i].producto === prodEliminar) {
          arrayCarrito.splice(i, 1);

          localStorage.setItem("carrito", JSON.stringify(arrayCarrito));

          e.target.parentNode.parentNode.remove();

          sumarProductos();

          
        }
      }
    });
  }
}
