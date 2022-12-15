class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="top-button">
                <button id="topBtn" title="Go to top">
                    <img src="Images/upBtn.svg" alt="up arrow">
                </button>
            </div>
            <footer>
                <div class="footer-left">
                    <div><img src="Images/RedBridge Submark 1.png" alt="Red Bridge Co. logo 2"></div>
                    <p>Red Bridge Co.&copy; 2022</p>
                    <div id="pp"><a href="privacy-policy">Privacy Policy</a></div>
                </div>
                <div id="pp2"><a href="privacy-policy">Privacy Policy</a></div>
                <div class="footer-images">
                    <a href="https://www.facebook.com/Red-Bridge-Co-103356892190448/?ref=pages_you_manage" aria-label="Facebook"><img src="Images/facebook.svg" alt="facebook logo"></a>
                    <a href="https://www.instagram.com/red_bridge_co/?hl=en" aria-label="Instagram"><img src="Images/instagram.svg" alt="instagram logo"></a>
                    <a href="https://www.linkedin.com/in/evhan-blasingame-28b460227/" aria-label="LinkedIn"><img src="Images/linkedin.svg" alt="linkedin logo"></a>
                </div>
            </footer>
        `;
        
        //top button
        if(!document.querySelector('#topBtn')) {
            console.log('no top button');
        }else {
            const topBtn = document.getElementById('topBtn');

            window.addEventListener('scroll', () => {
                if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                    topBtn.style.display = "block";
                }else {
                    topBtn.style.display = "none";
                }
            });
    
            topBtn.addEventListener('click', () => {
                document.body.scrollTop = 0; // For Safari
                document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            });
    
            topBtn.addEventListener('mouseenter', () => {
                topBtn.style.opacity = ".8";
            });
    
            topBtn.addEventListener('mouseleave', () => {
                topBtn.style.opacity = "1";
            });
    
            topBtn.addEventListener('click', () => {
                topBtn.style.opacity = "1";
            });
        }
    }
}

customElements.define('footer-component', Footer);