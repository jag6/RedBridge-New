sendProduct = document.getElementById("sendProduct")
    modal = document.getElementById("contact-modal"),
    closeModal = document.querySelector('.close-modal');
    
    sendProduct.onclick = (e) => {
        e.preventDefault();
        productOption = document.getElementById("product-options").value;
        localStorage.setItem("product", productOption);
        document.getElementById("choice").innerHTML = localStorage.getItem("product");
        modal.style.display = "flex";
    }

     closeModal.addEventListener('click', function(){
        modal.style.display = "none";
    })


     /*sendProduct.addEventListener('click', function(){
        productOption = document.getElementById("product-options").value,
        localStorage.setItem("product", productOption);
        choice.innerHTML = localStorage.getItem("product");
      })

    sendProduct.addEventListener('click', function(){
        modal.style.display = 'flex';
    })

    closeModal.addEventListener('click', function(){
        modal.style.display = "none";
    })

    window.addEventListener('click', function(e) {
        e.preventDefault();
        if(e.target == modal) {
            modal.style.display = 'none';
        }
    })*/

       /*sendProduct.onclick = function() {sendProductFunction()}; 
        function sendProductFunction() {
            productOption = document.getElementById("product-options").value;
            localStorage.setItem("product", productOption);
            document.getElementById("choice") = localStorage.getItem("product");
      }*/

  