function delay(URL) {
    setTimeout( function() { window.location = URL }, 1000 );
}

const animateCSS = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        node.classList.add(`${prefix}animated`, animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, {once: true});
    }
    );



const el_logo = document.querySelector('#logo');
const el_nav = document.querySelector('#navbar')
el_logo.style.setProperty('--animate-duration', '1.3s');
el_nav.style.setProperty('--animate-duration', '0.8s');
el_nav.style.setProperty('display', 'none')


animateCSS('#logo', 'fadeInUpBig').then((message) => {
    el_logo.style.setProperty('animation-delay', '.4s');
    
    animateCSS('#logo', 'fadeOutUpBig').then((inner_message) => {
        el_logo.style = 'display: none;';
        el_nav.style.setProperty('display', 'block');

        animateCSS('#navbar', 'fadeInUpBig').then((inner_inner_message) => {
            el_nav.classList.add('animate__animated')
        });
    });
});