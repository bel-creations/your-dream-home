(function(){
    const sliders = [...document.querySelectorAll('.style-container')];
    const buttonRight = document.querySelector('#next');
    const buttonLeft = document.querySelector('#before');
    let value;

    buttonRight.addEventListener('click', () => {
        changePosition(1);
    });

    buttonLeft.addEventListener('click', () => {
        changePosition(-1);
    });

    const changePosition = (add) => {
        const currentStyle = document.querySelector('.style-container--show').dataset.id;
        value = Number(currentStyle);
        value+= add;

        sliders[Number(currentStyle)-1].classList.remove('style-container--show');
        if(value === sliders.length+1 || value===0) {
            value = value === 0 ? sliders.length : 1;
        };

        sliders[value-1].classList.add('style-container--show');
    }


})();