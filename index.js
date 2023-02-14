const form = document.querySelector(".btn-submit");
form.addEventListener("click", function(event){
    event.preventDefault();
    const formContainer = document.querySelector('.form-for-container');
    const thankYouContainer = document.querySelector('.thank-you');
    formContainer.style.visibility="hidden";
    thankYouContainer.style.visibility="visible";
    const btnThanks = document.querySelector('.btn_thank-you');
    btnThanks.addEventListener('click',function(e){
    e.preventDefault();
    const formContainer = document.querySelector('.form-for-container');
    const thankYouContainer = document.querySelector('.thank-you');
    formContainer.style.visibility="visible";
    thankYouContainer.style.visibility="hidden";

})

 
    
})
