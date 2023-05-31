window.addEventListener("DOMContentLoaded", () => {
  const $form = document.querySelector(".checkbox-view-form");
  const BASE_URL = "http://localhost:3001";

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
  let lastSelectedTypeCheckbox = null;
  let lastSelectedBrandCheckbox = null;
  let lastSelectedCategoryCheckbox = null;

  let valueType = null
  let valueBrand = null
  let valueCategory = null

  const $typeCheckbox = document.querySelectorAll(".checkbox-type");
  const $listProducts = document.querySelector(".item-list-products");
  $typeCheckbox.forEach((checkbox) => {
      checkbox.addEventListener("change", async () => {
        valueType = checkbox.value
        typeAndBrand()
        brandAndCategoryAndType()

      if (checkbox.checked) {
        if (lastSelectedTypeCheckbox && lastSelectedTypeCheckbox !== checkbox) {
            lastSelectedTypeCheckbox.checked = false;
          }
          lastSelectedTypeCheckbox = checkbox;
        filterProducts("type", checkbox.value);
      } else {
        console.log("sdsad");
        return null;
      }
    });
  });
  const $brandCheckbox = document.querySelectorAll(".checkbox-brand");
  $brandCheckbox.forEach((checkbox) => {
    checkbox.addEventListener("change", async () => {
        valueBrand = checkbox.value
        typeAndBrand()
        brandAndCategory()
        brandAndCategoryAndType()
      if (checkbox.checked) {
        if (lastSelectedBrandCheckbox && lastSelectedBrandCheckbox !== checkbox) {
            lastSelectedBrandCheckbox.checked = false;
          }
          lastSelectedBrandCheckbox = checkbox;
        filterProducts("brand", checkbox.value);
      } else {
        console.log("sdsad");
        return null;
      }
    });
  });
  const $categoryCheckbox = document.querySelectorAll(".checkbox-category");
  $categoryCheckbox.forEach((checkbox) => {
    checkbox.addEventListener("change", async () => {
        valueCategory = checkbox.value
        brandAndCategory()
        brandAndCategoryAndType()
      if (checkbox.checked) {
        if (lastSelectedCategoryCheckbox && lastSelectedCategoryCheckbox !== checkbox) {
            lastSelectedCategoryCheckbox.checked = false;
          }
          lastSelectedCategoryCheckbox = checkbox;
        filterProducts("category", checkbox.value);
      } else {
        console.log("sdsad");
        return null;
      }
    });
  });


  const typeAndBrand = ()=>{
    console.log('hola');
    if(valueBrand && valueType){
        filterProducts(null,null,{
            valueBrand,
            valueType
        })
      }
  }
  
  const brandAndCategory = ()=>{
    console.log(valueCategory);
    console.log(valueBrand);
    if(valueBrand && valueCategory){
        filterProducts(null,null,null,{
            valueBrand,
            valueCategory
        })
      }
  } 
  const brandAndCategoryAndType = ()=>{
    if(valueBrand && valueCategory && valueType){
        filterProducts(null,null,null,null,{
            valueBrand,
            valueCategory,
            valueType
        })
      }
  }




  const searchProducts = async ()=>{
    const query = location.search
    if (query) {
        const response = await fetch(`${BASE_URL}/api/products/search${query}`)
        const data = await response.json();
        const productsSearch = data.data;
        $listProducts.innerHTML = "";
        const message =  `There are no products that match your search: " ${query.split('=').pop()} "`
        if (productsSearch.length > 0) {
            productsSearch.forEach((product) => {
              return ($listProducts.innerHTML += `
                <article class="list-best_deals list-article_product">
          <a href="/products/${product.id }/detail" class="list-FirstOffer"> 
          ${
            product.discount == 0
              ? ""
              : `
          <p class="list-discount">
              ${product.discount}%OFF
          </p>  
          `
          }          
          <div class="item-list-image">
          <img src="images/products/${
            product.images[0].name
          }" alt="" class="list-product-image" />
                </div>
                <div class="list-product-text">
                  <p class="list-product_name"> ${product.name}</p>
                  <p class="list-product_price">$${product.price}</p>
                  <p class="list-Delivery"><span class="list-product_price">${Math.floor(
                    product.price / 10
                  )}</span> x 10 installments</p>
                </div>
          </a>
          <button class="add-cart btn_card" data-id= "${product.id}">Add to cart</button>
        </article>
                `);
            });
        }
        else{
            const messageError = document.createElement('p')
            messageError.setAttribute('class','messageError')
            messageError.innerText = message
            $listProducts.appendChild(messageError)
        }
    }

};
  searchProducts()



  const filterProducts = async (query, value, query1,query2,query3) => {
    let response
    if (query1 ) {
        response = null
        let {valueBrand,valueType} = query1
         response = await fetch(
            `${BASE_URL}/api/products/filtered?brand=${valueBrand}&&type=${valueType}`
          ); 
    }else if (query2) {
        response = null
        let {valueBrand,valueCategory} = query2
        console.log(query2);
         response = await fetch(
            `${BASE_URL}/api/products/filtered?brand=${valueBrand}&&category=${valueCategory}`
          ); 
    }else if (query3) {
        response = null
        let {valueBrand,valueCategory,valueType} = query3
         response = await fetch(
            `${BASE_URL}/api/products/filtered?brand=${valueBrand}&&category=${valueCategory}&&type=${valueType}`
          ); 
    }
    else{
        response = await fetch(
          `${BASE_URL}/api/products/filtered?${query}=${value}`
        );
    }
    console.log(response);
    const data = await response.json();
    const products = data.data;
    console.log(products);
    $listProducts.innerHTML = "";
    products.forEach((product) => {
      return ($listProducts.innerHTML += `
        <article class="list-best_deals list-article_product">
  <a href="/products/${product.id }/detail" class="list-FirstOffer"> 
  ${
    product.discount == 0
      ? ""
      : `
  <p class="list-discount">
      ${product.discount} %OFF
  </p>  
  `
  }          
  <div class="item-list-image">
  <img src="images/products/${
    product.images[0].name
  }" alt="" class="list-product-image" />
        </div>
        <div class="list-product-text">
          <p class="list-product_name"> ${product.name}</p>
          <p class="list-product_price">$${product.price}</p>
          <p class="list-Delivery"><span class="list-product_price">${Math.floor(
            product.price / 10
          )}</span> x 10 installments</p>
        </div>
  </a>
  <div class="div-btn-item">
  <button class="add-cart btn_card" data-id= "${product.id}">Add to cart</button>
  
</article>
        `);
    });
  };
});

