const passwordCorrecta = "Miamorcitolindoprecioso";
const monster = document.getElementById('monster');
const inputClave = document.getElementById('input-clave');
const body = document.querySelector('body');
const anchoMitad = window.innerWidth / 2;
const altoMitad = window.innerHeight / 2;
let seguirPunteroMouse = true;
let intentosFallidos = 0;

body.addEventListener('mousemove', (m) => {
    if (seguirPunteroMouse) {
        if (m.clientX < anchoMitad && m.clientY < altoMitad) {
            monster.src = "img/idle/2.png";
        } else if (m.clientX < anchoMitad && m.clientY > altoMitad) {
            monster.src = "img/idle/3.png";
        } else if (m.clientX > anchoMitad && m.clientY < altoMitad) {
            monster.src = "img/idle/5.png";
        } else {
            monster.src = "img/idle/4.png";
        }
    }
});

inputClave.addEventListener('focus', () => {
    seguirPunteroMouse = false;
    let cont = 1;
    const cubrirOjo = setInterval(() => {
        monster.src = 'img/cover/' + cont + '.png';
        if (cont < 8) {
            cont++;
        } else {
            clearInterval(cubrirOjo);
        }
    }, 60);
});

inputClave.addEventListener('blur', () => {
    seguirPunteroMouse = true;
    let cont = 7;
    const descubrirOjo = setInterval(() => {
        monster.src = 'img/cover/' + cont + '.png';
        if (cont > 1) {
            cont--;
        } else {
            clearInterval(descubrirOjo);
        }
    }, 60);
});

function login(event) {
    event.preventDefault(); 
    const passwordIngresada = document.getElementById("input-clave").value;

    if (passwordIngresada === passwordCorrecta) {
        window.location.href = "galeria.html";
    } else {
        intentosFallidos++;
        let mensaje;
        if (intentosFallidos === 1) {
            mensaje = "Vamos amor";
        } else if (intentosFallidos === 2) {
            mensaje = "Es lo más importante para ti";
        } else {
            mensaje = "Soy tu ....Miam...";
        }
        alert(mensaje);
    }
}
