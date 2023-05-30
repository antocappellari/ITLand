window.addEventListener("load",function(){
    let inputJs = document.querySelectorAll(".inputJs") //*falta colocar clase a image y dropdowns*//
    let formulario = document.querySelector(".form-inputs");
    const exp = {
        name: /^^[A-Za-z0-9\s.,-:#$%&/*()áéíóúüñÁÉÍÓÚÜÑ'+"]+$/,
        description:/^[a-zA-Z0-9\s.,-:#$%&/*()áéíóúüñÁÉÍÓÚÜÑ'+"]+$/u, //*agregar minimo 20 caracteres*//
        price:/^[0-9]+([.])?([0-9]+)?$/,//*agregar que se puedan decimales*//
        stock:/^\d+$/ 
        //*falta imagen y dropdowns*//
      };

    let campo = {
        name: false,
        description: false,
        price:false,
        stock:false,
        image:false,
        color_id:false,
        brand_id:false,
        category_id:false,
        sub_category_id:false
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
        // console.log(field);
        // console.log(inputValue);
        // console.log(exp.test(inputValue));
        if(exp.test(inputValue)){
            const error = document.querySelector(`#${field}-error .error`);
            error.style.display='none';
            campo[field] = true
        }else{
            const error = document.querySelector(`#${field}-error .error`);
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

    });


    const files = this.document.querySelector('#files');
    files.addEventListener('change',(e)=>{
        const filesArray = Object.values(e.target.files);
        // parentNode es funciona para traer al padre de una etiqueta!
        const parent = files.parentNode;
        const errorChildren = parent.parentNode.querySelector('.error');
        const allowedFormat = ['jpg','jfif','webp','png']
        for (let i = 0; i < filesArray.length; i++) {
            // extraemos el formato de la imagen
            const format = filesArray[i].name.split('.').pop();
            if (allowedFormat.includes(format)) {
                errorChildren.style.display = 'none';
                campo[files.name] = true
            }
            else{
                errorChildren.style.display = 'block'
                campo[files.name] = false
                return
            }
            
        }


    }); 

    // drop
    function validDrop() {
        const dropdowns = this.document.querySelectorAll('.d-1');
        dropdowns.forEach(drop =>{
            let childrenDropError = drop.parentNode.querySelector('.error');
            if (drop.value == 'Choose an option') {
                // console.log('es true')
                childrenDropError.style.display = 'block'
                campo[drop.name] = false
            }else{
                // console.log('es true')
                childrenDropError.style.display = 'none'
                campo[drop.name] = true
            }

        })
    }

        const category = document.querySelector('.category')
            category.addEventListener('change',()=>{
                if (category.value == 3) {
                    this.document.querySelector('#camera').style.display = 'none'
                    this.document.querySelector('#memory').style.display = 'none'
                    this.document.querySelector('#ram').style.display = 'none'
                }else if(category.value == 4 ){
                    this.document.querySelector('#camera').style.display = 'none'
                    this.document.querySelector('#ram').style.display = 'block'
                    this.document.querySelector('#memory').style.display = 'block'
                } else{
                    this.document.querySelector('#camera').style.display = 'block'
                    this.document.querySelector('#ram').style.display = 'block'
                    this.document.querySelector('#memory').style.display = 'block'

                }
            })        
       
    formulario.addEventListener("submit",function(e){
        e.preventDefault()
        validDrop()
       if(
        campo.name == true &&
        campo.description == true && 
        campo.price == true &&
        campo.stock == true && 
        campo.image == true  &&
        campo.brand_id == true  &&
        campo.color_id == true  &&
        campo.category_id == true  &&
        campo.sub_category_id == true  
        ){
            formulario.submit()
        }else{
            const errores = document.querySelectorAll('.error');
            errores.forEach((error,i) =>{
                const fields = Object.values(campo);
                if (fields[i]) {
                   console.log(Object.keys(campo)[i] + ':  '+ fields[i], 'is true')
                error.style.display = "none"
               } else{
                console.log(Object.keys(campo)[i] + ' :  '  + fields[i],'is false')
                error.style.display = "block"
               }
            })
            
        }
        
    })
})