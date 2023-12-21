customElements.define('nav-component', class extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/services">SERVICES</a></li>
                <li><a href="/about">ABOUT</a></li>
                <li><a href="/contact">CONTACT</a></li>
                <li><a href="/faq">FAQ</a></li> 
            </ul>
        `;
    }
});

customElements.define('header-component', class extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <header>
                <div class="header-inner">
                    <div class="logo">
                        <a href="/"><img src="Images/redbridge-co-logo.png" alt="Red Bridge Co. logo"></a>
                    </div>
                    <nav id="nav">
                        <nav-component></nav-component>
                    </nav>
                    <div class="header-images">
                        <a href="https://www.facebook.com/Red-Bridge-Co-103356892190448/?ref=pages_you_manage" aria-label="Facebook link"><img src="Images/facebook.svg" alt="facebook logo"></a>
                        <a href="https://www.instagram.com/red_bridge_co/?hl=en" aria-label="Instagram link"><img src="Images/instagram.svg" alt="instagram logo"></a>
                        <a href="https://www.linkedin.com/in/evhan-blasingame-28b460227/" aria-label="LinkedIn link"><img src="Images/linkedin.svg" alt="linkedin logo"></a>
                    </div>
                </div>
                <button class="btn-toggle-nav" id="toggle-nav" aria-label="Open Nav Menu" aria-expanded="false">
                    <img src="Images/hamburger-sidebar.svg" alt="hamburger icon">
                </button>
                <aside>
                    <nav class="nav-sidebar">
                        <nav-component></nav-component>
                    </nav>
                </aside>
            </header>
        `;

        //toggle mobile menu
        let toggleNavStatus = false;
        const toggleNav = document.querySelector("#toggle-nav");
        let sidebar = document.querySelector(".nav-sidebar");
        let sidebarUl = document.querySelector(".nav-sidebar ul");
        let sidebarA = document.querySelectorAll(".nav-sidebar a");

        document.getElementById('toggle-nav').addEventListener('click', () => {
            if (toggleNavStatus === false) {
                toggleNav.ariaLabel = "Close Nav Bar";
                toggleNav.ariaExpanded = "true";
                sidebar.style.visibility = "visible";
                sidebarUl.style.visibility = "visible";
                let arrayLength = sidebarA.length;
                for (var i = 0; i < arrayLength; i++) {
                    sidebarA[i].style.opacity = "1";
                }
                toggleNavStatus = true;
            }
            else if (toggleNavStatus === true) {
                toggleNav.ariaLabel = "Open Nav Bar";
                toggleNav.ariaExpanded = "false";
                sidebar.style.visibility = "hidden";
                sidebarUl.style.visibility = "hidden";
                let arrayLength = sidebarA.length;
                for (var i = 0; i < arrayLength; i++) {
                    sidebarA[i].style.opacity = "0";
                }
                toggleNavStatus = false;
            }
        });
        let toggleNavStatusOther = false;
    }
});