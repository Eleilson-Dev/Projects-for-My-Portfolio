const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');
const gameStatus = document.querySelector('.game-status');
const restart = document.querySelector('.restart');
const initialPage = document.querySelector('.initial-page');
const nome = document.querySelector('#nome');
const segundos = document.querySelector('#segundos');

const charecters = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy',
];

const createElement = (tag, classNameElement) => {
    const element = document.createElement(tag);
    element.className = classNameElement;
    return element;
}

let firstCard = '';
let secondCard = '';

const checkAndGame = () => {
    const disableCard = document.querySelectorAll('.disable-card');
    if(disableCard.length === 20) {
        setTimeout(() => {

            gameStatus.classList.remove('game-status-disabble');
            clearInterval(this.loop);

            nome.innerHTML = localStorage.getItem('player');
            segundos.innerHTML = this.second;
            
        }, 500);
    }
}

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');
    
    if(firstCharacter === secondCharacter) {
        firstCard.firstChild.classList.add('disable-card');
        secondCard.firstChild.classList.add('disable-card');

        firstCard = '';
        secondCard = '';

        checkAndGame();

    } else {
        
        setTimeout(() => {
            firstCard.classList.remove('revel-card');
            secondCard.classList.remove('revel-card');

            firstCard = '';
            secondCard = '';
        }, 500);
        

    }
}

const revelCard = ({ target }) => {
    if(target.parentNode.className.includes('revel-card')) return;

    if(firstCard === '') {
        target.parentNode.classList.add('revel-card')
        firstCard = target.parentNode;
    } else if(secondCard === '') {
        target.parentNode.classList.add('revel-card')
        secondCard = target.parentNode;

        checkCards();
    }
    
}

const createCard = (charecter) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url(../images/rick-morty/${charecter}.png)`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revelCard);
    card.setAttribute('data-character', charecter);
    return card;
}

const loadGame = () => {
    const duplicateCharacters = [ ...charecters, ...charecters ];

    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);
    
    shuffledArray.forEach((charecter) => {
       const card = createCard(charecter);
       grid.appendChild(card);
    })

}

const startTimer = () => {
    this.second = 0;
    this.loop = setInterval(() => {
        this.second++

        if(second < 10) {
            this.second = '0' + this.second; 
        }

        timer.innerHTML = this.second;
    }, 1000)
}

restart.addEventListener('click', () => {
    gameStatus.classList.add('game-status-disabble');
    window.location = '/pages/rick-morty-game.html';
});

initialPage.addEventListener('click', () => {
    window.location = '/index.html';
});

window.addEventListener('load', () => {
    const playerName = localStorage.getItem('player');
    spanPlayer.textContent = playerName;

    loadGame();
    startTimer();
})
