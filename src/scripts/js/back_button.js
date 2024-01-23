const buttons = document.querySelectorAll('.back');

function back_onclick(event) {
    const main = document.querySelector('main');
    main.classList.remove('fadeInUpBig')
    main.style.setProperty('--animate-duration', '0.8s');
    main.classList.add('animate__animated', 'animate__fadeOutUpBig');
    location.href="javascript:delay('/index.html');";
}

buttons.forEach(element => {
    element.addEventListener('click', back_onclick, {once: true});
});