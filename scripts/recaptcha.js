/*
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<script>
    window.onload = () => {
        let recaptcha = document.forms["contact-form-pg"]["g-recaptcha-response"];
        recaptcha.required = true;
        recaptcha.oninvalid = () => {
            // do something
            alert("Please complete the captcha in order to send the form. Thank you!");
        }
    }
</script>


*/