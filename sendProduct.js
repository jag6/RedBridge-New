sendProduct = document.getElementById("sendProduct")
    modal = document.getElementById("contact-modal"),
    closeModal = document.querySelector('.close-modal');
    
    sendProduct.onclick = (e) => {
        e.preventDefault();
        productOption = document.getElementById("product-options").value;
        localStorage.setItem("product", productOption);
        document.getElementById("choice").textContent = localStorage.getItem("product");
        modal.style.display = "flex";
    }

    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
    })
     
    /*window.addEventListener('click', (e) => {
        e.preventDefault();
        if(e.target == modal) {
            modal.style.display = 'none';
        }
    })*/