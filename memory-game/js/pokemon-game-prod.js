const charecters = [
    'machoke',
    'miau',
    'pokemon-fada',
    'psayduck',
    'alola',
    'diana',
    'lucariu',
    'bulbasauro',
    'charmander',
    'jigglypuff',
];

let firstCard = '';
let secondCard = '';

class PokemonModeGame {
    constructor() {
        this.grid = document.querySelector('.grid');
        this.spanPlayer = document.querySelector('.player');
        this.timer = document.querySelector('.timer');
        this.gameStatus = document.querySelector('.game-status');
        this.restart = document.querySelector('.restart');
        this.initialPage = document.querySelector('.initial-page');
        this.nome = document.querySelector('#nome');
        this.segundos = document.querySelector('#segundos');
        this.second = 0;
    }

    init() {
        
    }
   
} 

const pokemonModeGame = new PokemonModeGame();
pokemonModeGame.init()

