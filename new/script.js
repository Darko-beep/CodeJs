
/* SHOW / HIDDEN PASSWORD */
const showHiddenlnput = (passwordOverlayld, passwordlnputld, togglelconld) => { 
    const overlay = document.getElementByld(passwordOverlayld), 
    input = document.getElementByld(passwordlnputld), 
    iconEye = document.getElementByld(togglelconld) ;

iconEye.addEventListener('click', () => { 
    if(input.type	'password'){
        input.type = 'text'; iconEye.classList.add('bx-show');
    } else {
        input.type = 'password';
        iconEye.classList.remove('bx-show');
    }

    overlay.classList.toggle('overlay-content');
};
showHiddenlnput('password-overlay', 'password-input', 'toggle-visibility-icon');

