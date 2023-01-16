//toggle mobile menu
let toggleNavStatus = false;
let getSidebar = document.querySelector(".nav-sidebar");
let getSidebarUl = document.querySelector(".nav-sidebar ul");
let getSidebarA = document.querySelectorAll(".nav-sidebar a");

document.getElementById('toggle-nav').addEventListener('click', () => {
    if (toggleNavStatus === false) {
        getSidebar.style.visibility = "visible";
        getSidebarUl.style.visibility = "visible";
        let arrayLength = getSidebarA.length;
        for (var i = 0; i < arrayLength; i++) {
            getSidebarA[i].style.opacity = "1";
        }
        toggleNavStatus = true;
    }
    else if (toggleNavStatus === true) {
        getSidebar.style.visibility = "hidden";
        getSidebarUl.style.visibility = "hidden";
        let arrayLength = getSidebarA.length;
        for (var i = 0; i < arrayLength; i++) {
            getSidebarA[i].style.opacity = "0";
        }
        toggleNavStatus = false;
    }
});
let toggleNavStatusOther = false;