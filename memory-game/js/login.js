const input = document.querySelector('#input-name');
const btn = document.querySelector('#input-button');
const form = document.querySelector('.login-form');
const modGame1 = document.querySelector('#mod-game-1');
const modGame2 = document.querySelector('#mod-game-2');

let selectModGame = 0;

const validateInput = ({ target }) => {
    
    if(target.value.length > 3) {
        btn.removeAttribute('disabled');
        return;
    };

    btn.setAttribute('disabled', '');
    
}

modGame1.addEventListener('click', () => {
    selectModGame = 1

    modGame2.classList.remove('selected');

    if(!modGame1.classList.contains('selected')) {
        modGame1.classList.add('selected');
        return
    }
})

modGame2.addEventListener('click', () => {
    selectModGame = 2

    modGame1.classList.remove('selected');
    
    if(!modGame2.classList.contains('selected')) {
        modGame2.classList.add('selected');
        return
    }
})

const handleSubmit = (Event) => {
    Event.preventDefault();
    const inputValue = input.value;

    localStorage.setItem('player', inputValue);
    if(selectModGame === 1) {
        window.location = '/pages/pokemon-game.html';
    } else if(selectModGame === 2) {
        window.location = '/pages/rick-morty-game.html';
    } else {
        alert('Selecione um modo de jogo');
        return;
    }
}
 
input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);