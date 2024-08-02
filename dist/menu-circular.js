const menu = document.querySelector('.menu-circular');

//-

function menuInit() {
    const botones = document.querySelectorAll('.menu-circular > *');
    const cantidadBotones = botones.length;
    const claseEspaciado = [...menu.classList].find(item => /^if-r-/.test(item));
    const reglaEspaciado = claseEspaciado.split('if-r-')[1]?.trim();

    botones.forEach((boton, i) => {
        boton.style.transformOrigin = 'center';
        boton.style.transform = `translate(-50%) rotate(${i*360/cantidadBotones}deg) translateY(${reglaEspaciado}) rotate(${i*-360/cantidadBotones}deg)`
    })
}

// MutationObserver para editar desde devconsole

const config = {childList: true, subtree: true, attributes: true, attributeFilter: ['class'] };

const callback = function(mutationsList, observer) {
    for (let mutation of mutationsList) {
        menuInit();
    }
};

const observer = new MutationObserver(callback);
observer.observe(menu, config);

// Iniciar

menuInit();