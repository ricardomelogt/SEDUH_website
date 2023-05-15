document.addEventListener("DOMContentLoaded", function(){
    console.log("pagina carregada...")
});


// configuração dos sub-menus
document.querySelectorAll('.hidden-menu')[0].addEventListener("click", function(event){ 
    let element = event.target;
    element.parentElement.classList.toggle('active');
});

document.querySelectorAll('.hidden-menu')[1].addEventListener("click", function(event){ 
    let element = event.target;
    element.parentElement.classList.toggle('active');
});