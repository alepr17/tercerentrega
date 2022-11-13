const $comprar = document.querySelectorAll(".comprar");
const $verCarrito = document.querySelector(".verCarrito");
const $agregarAlCarrito = document.querySelector(".agregarAlCarrito")
const $carrito = document.querySelector(".carrito")
const $contenedor = document.querySelector(".contenedorTienda")
const $sumaTotal = document.querySelector(".sumaTotal")
const $quitarCarrito = document.querySelector(".quitarCarrito")




const arregloTotal   = []

const arrayCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

let total = 0;


for ( let boton of $comprar){

  boton.addEventListener("click", () => {

    let productos = {
     precio : parseInt(boton.previousElementSibling.innerHTML),
     cantidad : parseInt(boton.nextElementSibling.value),
     producto : boton.previousElementSibling.previousElementSibling.innerHTML,
     img : boton.parentElement.previousElementSibling.src
    }

        if(chequearProd(productos.producto)){
          for( let prod of arrayCarrito){
            if(prod.producto === productos.producto){
              prod.cantidad += productos.cantidad
            }
          }
        } 
      
        else{
          arrayCarrito.push(productos)
        }
        localStorage.setItem("carrito", JSON.stringify(arrayCarrito))

        console.log(arrayCarrito)

  });
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

$verCarrito.addEventListener("click",()=>{

    let carritoJSON = JSON.parse(localStorage.getItem("carrito"))

    $carrito.classList.add("ver-carrito")

    $verCarrito.disabled = true

    carritoJSON.forEach(el => {

        let $tr = document.createElement("tr")

        $tr.innerHTML = 
        `<th scope="row"><img src="${el.img}" class="img-carrito"></th>
        <td>${el.producto}</td>
        <td>${el.precio}</td>
        <td>${el.cantidad}</td>
        <td>${el.cantidad * el.precio}</td>
        <td><button class="btn btn-danger borrarElemento">borrar</td>
        `;

      $agregarAlCarrito.appendChild($tr)

    
    });

    sumarProductos();

    borrarProductos();
    
  arregloTotal.length = 0;
});


//funcion para sumar el precio de cada producto y agregarlo al arreglo

function sumarProductos(){

  let carritoJSON = JSON.parse(localStorage.getItem("carrito"))

  carritoJSON.forEach(el => {

    const sumaTotal = el.precio * el.cantidad

    arregloTotal.push(sumaTotal) 
    
  });

  arregloTotal.forEach(el => {

    total = total + el;

  })

  $sumaTotal.innerHTML = total

  arregloTotal.length = 0;
  
  total = 0;
}


// quitar el carrito y vaciar el innerhtml, reiniciar el arreglototal, el total y reactivar el boton de vercarrito

$quitarCarrito.addEventListener("click", ()=>{
  $carrito.classList.remove("ver-carrito")

  $agregarAlCarrito.innerHTML = ""

  $verCarrito.disabled = false

  arregloTotal.length = 0;

  total = 0;
})



//borrar 1 elemento de la lista del carrito 


function borrarProductos() {


  const $borrarElemento = document.querySelectorAll(".borrarElemento")
    
  
  
  for (const borrar of $borrarElemento) {

      borrar.addEventListener("click", (e)=>{

        let carritoJSON = JSON.parse(localStorage.getItem("carrito")) 

        const prodEliminar = e.target.parentNode.parentNode.children[1].innerHTML

        

       for (let i = 0; i < carritoJSON.length; i++) {

        if(carritoJSON[i].producto === prodEliminar){

          arrayCarrito.splice(i,1)

          localStorage.setItem("carrito", JSON.stringify(arrayCarrito))

          e.target.parentNode.parentNode.remove()

          sumarProductos()

          console.log(arrayCarrito)
        }
       }          
        });
    }
}
