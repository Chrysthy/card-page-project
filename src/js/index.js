/*OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo 
cartao da lista
  
passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
passo 3 - fazer aparecer o próximo cartão da lista
passo 4 - buscar o cartão que esta selecionado e esconder

OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão 
anterior da lista
  
passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
passo 3 - fazer aparecer o cartão anterior da lista
passo 4 - buscar o cartão que esta selecionado e esconder*/

const btnNext = document.getElementById('btn-next');
const btnBack = document.getElementById('btn-back');
let currentCard = 0;

const cards = document.querySelectorAll('.card');

btnNext.addEventListener('click', function () {

    const isLastCard = currentCard === cards.length - 1;
    if (isLastCard) return;


    hideSelectedCards();

    currentCard++;

    showcard();


})


btnBack.addEventListener('click', function () {

    const isFirstCard = currentCard === 0;
    if (isFirstCard) return

    hideSelectedCards();

    currentCard--;

    showcard();

})

function showcard() {
    cards[currentCard].classList.add('selected');
}

function hideSelectedCards() {
    const selectedCard = document.querySelector('.selected');
    selectedCard.classList.remove('selected');
}
