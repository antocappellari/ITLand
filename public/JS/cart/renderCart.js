window.addEventListener('DOMContentLoaded',()=>{
    const BASE_URL = 'http://localhost:3001'
    // localStorage.removeItem('cart')
    let carrito = getLocalStorage('cart')
    const renderCart = ()=>{
        const $containerCart = document.querySelector('.section__container')
        console.log(carrito);
        if ( carrito == null) {
            return $containerCart.innerHTML = `<div style = "
            background:#bebebe;
            height:100%;
            display:flex;
            justify-content:center;
            align-items:center
            "> 
            <p
            style="
            font-weight: bold;
            font-size:3em
            "
            >No hay productos<p>
            <div>`  
        }
        let cantidad = 0
        carrito.forEach((product,index) => {
        cantidad = product.cantidad || 1

          console.log(cantidad);
            return $containerCart.innerHTML += `
            <article class="section__product">
                <img src="${BASE_URL}/images/products/${product.product.images[0].name}">
                <div class="product__detail">
                  <div class="detail1">
                    <p>${product.product.name}</p>
                    <p class="price__detail">$${product.product.price}</p>
                    <p class="free__shop">Free shipping</p>
                  </div>
                  <div class="quantity">
                    <button type="button" id="btn_plus" onclick="btnSumar(${index},${cantidad})"   class="btn1">+</button>
                    <p class= "cantidad" id= "cantidad-${index}">${product.cantidad}</p>
                    <button onclick="btnRestar(${index},${cantidad})" type="button" class="btn2">-</button>
                  </div>
                </div>
                <button class="trash " onclick="deleteProduct(${product.product.id})">Delete</button>
              </article>
            `
        });
       
    }
    renderCart()
    let $limpiar_carrito  = document.querySelector('.limpiar-carrito');
    $limpiar_carrito.addEventListener('click',()=>{
      localStorage.removeItem('cart');
      location.reload()
    })
    let cant = 0
    let total = carrito?.reduce((acc, cur) => {
      cant = cur.cantidad
      let price = parseInt(cur.product.price);
      return acc + price * cant;
    }, 0);
    console.log(total);
    if (total === undefined) {
      document.querySelector('.total_price').innerText = `0`
    }else{

      document.querySelector('.total_price').innerText = `$${total}`
    }

    
  
})

// {/*  */}