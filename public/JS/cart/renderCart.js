window.addEventListener('DOMContentLoaded',()=>{
    const BASE_URL = 'http://localhost:3001'
    let carrito = getLocalStorage('cart')
    const $containerCart = document.querySelector('.section__container')


    console.log(carrito);




    carrito.forEach(product => {
        $containerCart.innerHTML += `
        <article class="section__product">
            <img src="${BASE_URL}/images/products/${product.product.images[0].name}">
            <div class="product__detail">
              <div class="detail1">
                <p>${product.product.name}</p>
                <p class="price__detail">$${product.product.price}</p>
                <p class="free__shop">Free shipping</p>
              </div>
              <div class="quantity">
                <button type="button" class="btn1"><i class="fas fa-solid fa-plus"></i></button>
                <p>1</p>
                <button type="button" class="btn2"><i class="fas fa-solid fa-minus"></i></button>
              </div>
            </div>
            <div class="trash">
              <i class="fas fa-solid fa-trash-can" data-productId = "${product.product.id}"></i>
            </div>
          </article>
        `
    });
    const $btnDelete = document.querySelector('.fa-trash-can');
    $btnDelete.addEventListener('click',()=>{
        console.log(carrito);
        console.log($btnDelete.dataset);
        const {productid}= $btnDelete.dataset
        console.log(productid);
        carrito = carrito.filter(product => product.product.id != productid )
        console.log(carrito);
        setLocalStorage('cart',carrito)
    })
})

{/*  */}