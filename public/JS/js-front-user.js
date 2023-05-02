window.addEventListener("load",function(){
    let inputJs = document.querySelectorAll(".inputJs")
    let formulario = document.querySelector(".form-inputs");
    const exp = {
        first_name: /^[A-Za-z0-9-]+$/,
        last_name: /^[A-Za-z0-9-]+$/,
        address: /^[a-zA-Z0-9\s.,#-]+$/,
        email: /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/,
        password:/^[a-zA-Z0-9!@#$%^&*()_+]{8,}$/,
        confirmPassword:/^[a-zA-Z0-9!@#$%^&*()_+]{8,}$/,
        cell:/^[0-9]{10}$/
      };

    let campo = {
        first_name: false,
        last_name: false,
        address:false,
        email:false,
        password:false,
        confirmPassword:false,
        cell:false

    }
    const formValidation = (e)=> {
        const input  = e.target;
        input.style.boxShadow = 'none'

        if(e.target.name == "first_name"){
            fieldValidation(exp.first_name,e.target.value,e.target.name)
        }
        if(e.target.name == "last_name"){
            fieldValidation(exp.last_name,e.target.value,e.target.name)
        }
        if(e.target.name == "address"){
            fieldValidation(exp.address,e.target.value,e.target.name)
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
        campo.first_name == true &&
        campo.last_name == true && 
        campo.email == true &&
        campo.address == true && 
        campo.cell == true
        ){
            formulario.submit
            console.log('Se envio el formulario');
        }
    })
})