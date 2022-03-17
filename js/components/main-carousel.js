// 1    Aceder à janela do navegador (browser)
// 2    Aceder ao documento HTML da página
// 3    Selecionar botão com a seta para a direita/esquerda
// 4    "Ouvir" evento de click nesse botão

// 5    Aceder à janela do navegador (browser) <-- não é obrigatório
// 6    Aceder ao documento HTML da página
// 7    Selecionar 'elements'
// 8    Mover o elements para a direita/esquerda dependendo do botão

const btnRight = /*window.*/document.querySelector('.button-arrow.-right');
const btnLeft = /*window.*/document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
let pixels = 0;

btnRight.addEventListener('click', function() {
    pixels += 50;
    elements.style = `transform: translateX(${pixels}px);`;
})

btnLeft.addEventListener('click', function() {
    pixels -= 50;
    elements.style = `transform: translateX(${pixels}px);`;
})