const $comprar = document.querySelectorAll(".comprar");
const $verCarrito = document.querySelector(".verCarrito");
const $agregarAlCarrito = document.querySelector(".agregarAlCarrito")
const $carrito = document.querySelector(".carrito")
const $contenedor = document.querySelector(".contenedorTienda")
const $sumaTotal = document.querySelector(".sumaTotal")


const arregloTotal   = []

const arrayCarrito = [];

let total = 0;


for (boton of $comprar){

  boton.addEventListener("click", () => {

    let productos = {
     precio : parseInt(boton.previousElementSibling.innerHTML),
     cantidad : boton.nextElementSibling.value,
     producto : boton.previousElementSibling.previousElementSibling.innerHTML,
     img : boton.parentElement.previousElementSibling.src
    }


    for (let i = 0; i < arrayCarrito.length; i++) {
      
      if(arrayCarrito[i].producto === productos.producto){
        console.log("no hago nada")
      }
      else{
        arrayCarrito.push(productos)
      }
      
    }
    
    console.log(arrayCarrito)


  });
}




// asdajh







    // let carritoStorage = JSON.parse(localStorage.getItem("carrito"))  

    // carritoStorage.forEach(el => {

    //   if(el.cantidad > 0){
    //     let $tr = document.createElement("tr")

    //     $tr.innerHTML = 
    //     `<th scope="row"><img src="${el.img}" class="img-carrito"></th>
    //     <td>${el.producto}</td>
    //     <td>${el.precio}</td>
    //     <td>${el.cantidad}</td>
    //     <td>${el.cantidad * el.precio}</td>`

    //   $agregarAlCarrito.appendChild($tr)

      
    //    const sumaTotal = el.precio * el.cantidad
    //    arregloTotal.push(sumaTotal) }
    // });
    // arregloTotal.forEach(element => {
    // total = total + element;
    // });
    // $sumaTotal.innerHTML = total
    //  total = 0;




    //localStorage.setItem("carrito" , JSON.stringify(productosTienda))






// //cuando se clickea agregar al carrito se evalua si el valor es mayor a uno y se cambia el valor del carrito, si el valor es mayor
// // es mayor a 0 se renderiza en pantalla y se muestra


//   for (const boton of $comprar) {
//     boton.addEventListener("click", (e) => {
//       let agregar  = boton.previousElementSibling.previousElementSibling.innerHTML;
//       let cantidadAAgregar = boton.nextElementSibling.value;


//       //let carritoStorage = JSON.parse(localStorage.getItem("carrito"))  
      

//       for (let i in productosTienda) {
      
//          if (productosTienda[i].producto == agregar) {

//           productosTienda[i].cantidad = cantidadAAgregar
//           }
//       }

//       localStorage.setItem("carrito" , JSON.stringify(productosTienda))

//       //let carritoStorage = JSON.parse(localStorage.getItem("carrito"))

//       // $agregarAlCarrito.removeAttributeNode("all")

//       // carritoStorage.forEach(el => {

//       //   if(el.cantidad > 0){
//       //     let $tr = document.createElement("tr")
  
//       //     $tr.innerHTML = 
//       //     `<th scope="row"><img src="${el.img}" class="img-carrito"></th>
//       //     <td>${el.producto}</td>
//       //     <td>${el.precio}</td>
//       //     <td>${el.cantidad}</td>
//       //     <td>${el.cantidad * el.precio}</td>`
  
//       //   $agregarAlCarrito.appendChild($tr)
  
        
//       //    const sumaTotal = el.precio * el.cantidad
//       //    arregloTotal.push(sumaTotal) }
//       // });
//       // arregloTotal.forEach(element => {
//       // total = total + element;
//       // });
//       // $sumaTotal.innerHTML = total
//       //  total = 0;
//       // console.log(carritoStorage)
//     })
//   };





























// $verCarrito.addEventListener("click",()=>{

//     $carrito.classList.toggle("ver-carrito")

    

//     let carritoStorage = JSON.parse(localStorage.getItem("carrito"))  

//     carritoStorage.forEach(el => {

//       if(el.cantidad > 0){
//         let $tr = document.createElement("tr")

//         $tr.innerHTML = 
//         `<th scope="row"><img src="${el.img}" class="img-carrito"></th>
//         <td>${el.producto}</td>
//         <td>${el.precio}</td>
//         <td>${el.cantidad}</td>
//         <td>${el.cantidad * el.precio}</td>`

//       $agregarAlCarrito.appendChild($tr)

      
//        const sumaTotal = el.precio * el.cantidad
//        arregloTotal.push(sumaTotal) }
//     });
//     arregloTotal.forEach(element => {
//     total = total + element;
//     });
//     $sumaTotal.innerHTML = total
//      total = 0;
    

//   //    setTimeout(function(){
//   //     $agregarAlCarrito.removeChild("all")
//   // }, 2000);
//      //$agregarAlCarrito.removeAttributeNode("all")




//     // carrito.forEach(el => {

//     //   if(el.cantidad > 0){
//     //     let $tr = document.createElement("tr")

//     //     $tr.innerHTML = 
//     //     `<th scope="row"><img src="${el.img}" class="img-carrito"></th>
//     //     <td>${el.producto}</td>
//     //     <td>${el.precio}</td>
//     //     <td>${el.cantidad}</td>
//     //     <td>${el.cantidad * el.precio}</td>`

//     //   $agregarAlCarrito.appendChild($tr)

      
//     //    const sumaTotal = el.precio * el.cantidad
//     //    arregloTotal.push(sumaTotal) }
//     // });
//     // arregloTotal.forEach(element => {
//     // total = total + element;
//     // });
//     // $sumaTotal.innerHTML = total
  
// })


// // document.addEventListener("DOMContentLoaded", ()=>{
// //   console.log("hola")
// //   let $fragment = document.createDocumentFragment();
// //   $contenedor.appendChild($fragment)
// //   productosAVender.forEach(element => {
// //     console.log("hola2")
// //     let insertar = `<div class="card col-10 col-md-3 m-auto p-0">
// //     <img src="${element.img}" alt="..." />
// //     <div class="card-body">
// //       <h5 class="card-title">${element.producto}</h5>
// //       <p class="card-text">${element.precio}</p>
// //       <button class="btn btn-primary comprar">Agregar al carrito</button>
// //     </div>
// //   </div>`;
// //   $fragment.innerHTML = insertar
// //   $contenedor.appendChild($fragment)
  
// //   });

// // })

