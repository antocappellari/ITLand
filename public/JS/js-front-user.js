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
    const formValidation = (e)=> {
        console.log(e.target.value)
        if(e.target.name == "first_name"){
            fieldValidation(exp.first_name,e.target.value,"first_name")
        }
    }
    const fieldValidation = (exp,inputValue,field)=>{
        if(exp.test(inputValue)){

        }
    }

    inputJs.forEach(input=>{
        input.addEventListener("keyup",formValidation)
    })
    formulario.addEventListener("submit",function(e){
        e.preventDefault()
    })
})