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
        let productIndex = 0
        carrito.forEach((product,index) => {
          console.log(typeof product.cantidad);
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
                    <button type="button" id="btn_plus" onclick="btnSumar(${index},${cantidad})"   class="btn1"><i class="fas fa-solid fa-plus"></i></button>
                    <p class= "cantidad" id= "cantidad-${index}">${product.cantidad}</p>
                    <button type="button" class="btn2"><i class="fas fa-solid fa-minus"></i></button>
                  </div>
                </div>
                <div class="trash " onclick="deleteProduct(${product.product.id})">
                  <i class="fas fa-solid fa-trash-can"></i>
                </div>
              </article>
            `
        });
       
    }
    renderCart()
    let total = carrito?.reduce((acc, cur) => {
      let price = parseInt(cur.product.price);
      return acc + price;
    }, 0);
  document.querySelector('.total_price').innerText = `$${total}`
})

// {/*  */}