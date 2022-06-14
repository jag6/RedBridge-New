mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
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