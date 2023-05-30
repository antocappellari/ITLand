window.addEventListener("DOMContentLoaded", () => {

  const BASE_URL = "http://localhost:3001";
  const $btns_carts = document.querySelectorAll(".btn_card");
  let quantity = 0;
  $btns_carts.forEach((btnCart) => {
    btnCart.addEventListener("click", () => {
      const { id } = btnCart.dataset;
      fetch(BASE_URL + "/api/products/product/" + id)
        .then((response) => response.json())
        .then((data) => {
            quantity = 0
          if (data.data.id == id) {
            quantity++;
            addToCart(data.data, quantity);
          }
        });
    });
  });
  let cart = getLocalStorage("cart") || [];
  console.log(cart);

  const addToCart = (product, cantidad) => {
    let productIndex = -1;
    cart.forEach((prod,i)=>{
        if (prod.product.id === product.id) {
            productIndex = i;
            return
        };
    });
    if (productIndex !== -1) {
        cart[productIndex]
    }else{
        cart.push({product,cantidad})
    };
    setLocalStorage("cart", cart);
  };
  
});
