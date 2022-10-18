class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="header-inner">
                    <div class="logo">
                        <a href="/"><img src="Images/RedBridge co. Logo.png" alt="Red Bridge Co. logo"></a>
                    </div>
                    <nav id="nav">
                        <ul>
                            <li><a href="/">HOME</a></li>
                            <li><a href="services">SERVICES</a></li>
                            <li><a href="about">ABOUT</a></li>
                            <li><a href="contact">CONTACT</a></li>
                            <li><a href="blog">BLOG</a></li>
                            <li><a href="faq">FAQ</a></li>
                        </ul>
                    </nav>
                    <div class="header-images">
                        <a href="https://www.facebook.com/Red-Bridge-Co-103356892190448/?ref=pages_you_manage" aria-label="Facebook"><img src="Images/facebook.svg" alt="facebook logo"></a>
                        <a href="https://www.instagram.com/red_bridge_co/?hl=en" aria-label="Instagram"><img src="Images/instagram.svg" alt="instagram logo"></a>
                        <a href="https://www.linkedin.com/in/evhan-blasingame-28b460227/" aria-label="LinkedIn"><img src="Images/linkedin.svg" alt="linkedin logo"></a>
                    </div>
                </div>
                <div class="btn-toggle-nav" id="toggle-nav">
                    <img src="Images/hamburger-sidebar.svg" alt="hamburger icon">
                </div>
                <aside>
                    <nav class="nav-sidebar">
                        <ul>
                            <li><a href="/">HOME</a></li>
                            <li><a href="services">SERVICES</a></li>
                            <li><a href="about">ABOUT</a></li>
                            <li><a href="contact">CONTACT</a></li>
                            <li><a href="blog">BLOG</a></li>
                            <li><a href="faq">FAQ</a></li> 
                        </ul>
                    </nav>
                </aside>
            </header>
        `;

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
    }
}

customElements.define('header-component', Header);