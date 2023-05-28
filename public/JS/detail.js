window.addEventListener("DOMContentLoaded", () => {
  const $section__description = document.getElementById("section__description");
  const $p = document.getElementById("pDes");
  const height = $section__description.clientHeight
  const $btnDesc = document.getElementById("btnDes");
  $btnDesc.addEventListener('click',()=>{
    if ($p.classList.contains('descriptionAnimaction')) {
        $section__description.style.height = height
        $p.classList.toggle('descriptionAnimaction')
        $btnDesc.textContent = 'See more'

        return
    }
    $p.classList.toggle('descriptionAnimaction')
    $btnDesc.textContent = 'See less'

  })
});
