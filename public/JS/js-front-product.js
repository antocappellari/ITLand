window.addEventListener("load",function(){
    let inputJs = document.querySelectorAll(".inputJs") //*falta colocar clase a image y dropdowns*//
    let formulario = document.querySelector(".form-inputs");
    const exp = {
        name: /^[A-Za-z0-9-]+$/,
        description: /^[A-Za-z0-9-]+$/, //*agregar minimo 20 caracteres*//
        price:/^[0-9]{10}$/,//*agregar que se puedan decimales*//
        stock:/^[0-9]{10}$/ 
        //*falta imagen y dropdowns*//
      };

    let campo = {
        name: false,
        description: false,
        price:false,
        stock:false,
        //*falta imagen y dropdowns*//
    }
    const formValidation = (e)=> {
        const input  = e.target;
        input.style.boxShadow = 'none'

        if(e.target.name == "name"){
            fieldValidation(exp.name,e.target.value,e.target.name)
        }
        if(e.target.name == "description"){
            fieldValidation(exp.description,e.target.value,e.target.name)
        }
        if(e.target.name == "price"){
            fieldValidation(exp.price,e.target.value,e.target.name)
        }
        if(e.target.name == "stock"){
            fieldValidation(exp.stock,e.target.value,e.target.name)
        }
    }
    const fieldValidation = (exp,inputValue,field)=>{
        if(exp.test(inputValue)){
            console.log(field);
            const error = document.querySelector(`#${field}-error .error`);
            error.style.display='none';
            campo[field] = true
        }else{
            const error = document.querySelector(`#${field}-error .error`);
            console.log(error);
            error.style.display='block'
            campo[field] = false

        }
    }
    
    inputJs.forEach(input=>{
        input.addEventListener("keyup",formValidation)
        input.addEventListener("blur",formValidation)
        input.addEventListener("focus",function(){
            input.style.boxShadow = '1px 1px 6px gray '
        })

    })
    formulario.addEventListener("submit",function(e){
       e.preventDefault()
       if(
        campo.name == true &&
        campo.description == true && 
        campo.price == true &&
        campo.stock == true  
        ){
            formulario.submit
            console.log('Se envio el formulario');
        }
    })
})