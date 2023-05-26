window.addEventListener('DOMContentLoaded',()=>{

    
    const $options = document.querySelector('#user_option');
    const $btn =  document.querySelector('.user_logged_user');
    const $icon = document.querySelector('.fa-angle-down');

    $btn.addEventListener("click",_=>{
        if($icon.classList.contains('icon-rotate')){
            $icon.classList.toggle('icon-rotate2')
        }else{
            $icon.classList.toggle('icon-rotate')
        }
        $options.classList.toggle('user_option_active')
    })

    const $btn_menu = document.querySelector('.header__burger');
    const $menuMobile = document.getElementById('menu-mobile');
    const $btnExit =  document.getElementById('button-exit')

    $btn_menu.addEventListener('click',()=>{
        $btnExit.addEventListener('click',()=>{
                if ($menuMobile.classList.contains('menu-mobile_active')) {
                $menuMobile.classList.remove('menu-mobile_active')
                
            }
        })
        $menuMobile.classList.toggle('menu-mobile_active')
    })


})