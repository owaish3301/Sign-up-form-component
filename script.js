const btn = document.querySelector("#submit-btn");
const inputBtns = document.querySelectorAll("input");
const emailInput = document.querySelector("#email");


const checkAllFields = (evt) => {

    //check if any field is empty 
    for(let i = 0; i < inputBtns.length; i++){
        const errorPara = document.getElementById(`${inputBtns[i].id}-error`)
        

        if(inputBtns[i].value === ""){
            inputBtns[i].style.borderColor = "hsl(0, 100%, 74%) ";
            inputBtns[i].placeholder = "";
            inputBtns[i].style.backgroundImage = 'url("/images/icon-error.svg")';
            inputBtns[i].style.backgroundRepeat = "no-repeat";
            inputBtns[i].style.backgroundPosition = "right";

            //now create a paragraph element with style to place under the input box if it is empty
            const para = document.createElement("p");
            para.innerText = `${inputBtns[i].id} can't be empty`;
            para.style.textAlign = "right";
            para.style.color = "red";
            para.style.paddingTop = 0;
            para.style.paddingBottom = 0;
            para.setAttribute("class","error");
            para.setAttribute("id",`${inputBtns[i].id}-error`);

            inputBtns[i].style.marginBottom = 0;

            if( !(errorPara) ){
                inputBtns[i].after(para);
            }
        }
        else{
            //when input field has got some data in it and error para is still being displayed we need to remove the error message
            if( errorPara ){
                errorPara.remove();
                inputBtns[i].style.borderColor = "black";
                inputBtns[i].style.backgroundImage = '';
            }
        }
    }

    //now add a check for email if the email is correct or not;
    //if the email field were already empty then display the empty message donot go into this thing 
    //only if the email field has some data then we check the data and if its incorrect then display a message with red border and error svg logo
    
    if(emailInput.value === ""){
        return
    } else{
        const email = emailInput.value;
        const emailRegex = /^[a-zA-Z0-9.!_-]*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,4}$/;

        if( !emailRegex.test(email)){
            const para = document.createElement("p");
            para.innerText = `invalid email`;
            para.style.textAlign = "right";
            para.style.color = "red";
            para.style.paddingTop = 0;
            para.style.paddingBottom = 0;
            para.setAttribute("class","error");
            para.setAttribute("id",`email-error`);

            emailInput.style.marginBottom = 0;

            emailInput.after(para);
            
        }
    }

}


btn.addEventListener("click", checkAllFields);