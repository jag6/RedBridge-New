customElements.define('contact-component', class extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['contactPitch'];
    }

    attributeChangedCallback(contactPitch, newContactPitch, oldContactPitch) {
        this.innerHTML = `
            <section class="contact">
                <section class="contact-header">
                    <section class="ch-header">
                        <h2>LET'S GET STARTED</h2>
                    </section>
                    <div class="ch-img">
                        <img src="Images/pencil.svg" alt="pencil">
                    </div>
                </section>
                <section class="contact-info">
                    <div class="contact-links">
                        <div class="ci-1">
                            <img id="phone" src="Images/phone.svg" alt="phone">
                            <a href="tel:+18057045505">805-704-5505</a>
                        </div>
                        <div class="ci-2">
                            <img id="email" src="Images/email.png" alt="email">
                            <a href="mailto:info&commat;redbridgeco&period;com">info&commat;redbridgeco&period;com</a>
                        </div>
                        <div class="s-media">
                            <a href="https://www.facebook.com/Red-Bridge-Co-103356892190448/?ref=pages_you_manage" aria-label="Facebook"><img src="Images/facebook.svg" alt="facebook logo"></a>
                            <a href="https://www.instagram.com/red_bridge_co/?hl=en" aria-label="Instagram"><img src="Images/instagram.svg" alt="instagram logo"></a>
                            <a href="https://www.linkedin.com/in/evhan-blasingame-28b460227/" aria-label="LinkedIn"><img src="Images/linkedin.svg" alt="linkedin logo"></a>
                        </div>
                    </div>
                    <section class="contact-pitch"><h2>${newContactPitch}</h2></section>
                </section>
            </section>
        `;
    }

    connectedCallback() {
        const contactPitch = this.getAttribute('contactPitch');
        this.innerHTML = `
            <section class="contact">
                <section class="contact-header">
                    <section class="ch-header">
                        <h2>LET'S GET STARTED</h2>
                    </section>
                    <div class="ch-img">
                        <img src="Images/pencil.svg" alt="pencil">
                    </div>
                </section>
                <section class="contact-info">
                    <div class="contact-links">
                        <div class="ci-1">
                            <img id="phone" src="Images/phone.svg" alt="phone">
                            <a href="tel:+18057045505">805-704-5505</a>
                        </div>
                        <div class="ci-2">
                            <img id="email" src="Images/email.png" alt="email">
                            <a href="mailto:info&commat;redbridgeco&period;com">info&commat;redbridgeco&period;com</a>
                        </div>
                        <div class="s-media">
                            <a href="https://www.facebook.com/Red-Bridge-Co-103356892190448/?ref=pages_you_manage" aria-label="Facebook"><img src="Images/facebook.svg" alt="facebook logo"></a>
                            <a href="https://www.instagram.com/red_bridge_co/?hl=en" aria-label="Instagram"><img src="Images/instagram.svg" alt="instagram logo"></a>
                            <a href="https://www.linkedin.com/in/evhan-blasingame-28b460227/" aria-label="LinkedIn"><img src="Images/linkedin.svg" alt="linkedin logo"></a>
                        </div>
                    </div>
                    <section class="contact-pitch"><h2>${contactPitch}</h2></section>
                </section>
            </section>
        `;
    }
});