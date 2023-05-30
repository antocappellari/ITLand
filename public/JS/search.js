window.addEventListener("DOMContentLoaded", () => {
    const result = document.querySelector(".results");
    const $search = document.querySelector("#search");
    $search.addEventListener("input", ({ target }) => {
      $search.addEventListener('keypress',(e)=>{
        if (e.key == 'Enter') {
          location.replace(`http://localhost:3001/products?title=${target.value}`)    
        }
      })
        if ((target.value == "")) {
        result.innerHTML = "";
        return
    }
    searchProduct(target.value);

});
$search.addEventListener('blur',({target})=>{
    const list  = document.querySelectorAll('.listResult')

    if(list.length > 0 ){
        searchProduct(target.value);
        return
    }
    result.innerHTML = "";
    return
  })
  const searchProduct = (value) => {
    fetch("http://localhost:3001/api/products/search?title=" + value)
      .then((response) => response.json())
      .then((data) => {
        result.innerHTML = "";
        for (let i = 0; i < data.data.length; i++) {
          let list = document.createElement("li");
          list.setAttribute('class','listResult')
          let link = document.createElement('a')
          link.setAttribute('href','http://localhost:3001/products/' + data.data[i].id + '/detail');
          link.innerText += data.data[i].name;
          list.append(link)
          result.append(list);
        }

      });
  };
});
