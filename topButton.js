mybutton = document.getElementById("topBtn");

const scrollFunction = () => {
  window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      topBtn.style.display = "block";
    }else {
      topBtn.style.display = "none";
    }
  });
}

const topFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.getElementById("topBtn").addEventListener('mouseenter', () => {
  mybutton.style.opacity = ".8";
  mybutton.style.transition = ".7s";
})

document.getElementById("topBtn").addEventListener('mouseleave', () => {
  mybutton.style.opacity = "1";
})

document.getElementById("topBtn").addEventListener('click', () => {
  mybutton.style.opacity = "1";
})

topFunction(), scrollFunction();