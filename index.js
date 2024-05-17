const listaDeMusicas = document.querySelectorAll('.musica');
const playerBt = document.querySelector('.bt_player');
const botaoParar = document.querySelector('.bt-parar');
const controles = document.querySelector('.controles');

let audio = null;

botaoParar.addEventListener( 'click' , (e)=> {
    e.preventDefault();
    controles.classList.remove('controles-ativo');
    audio.pause();
})


listaDeMusicas.forEach( musica => {
    
    musica.onclick = ()=> {                
        const musicaAtual = musica.querySelector('.musica_titulo');
        if(audio != null){
            audio.pause();
        }        
        let musicaEscolhida = musica.classList[1];        
        audio = new Audio(`./audio/${musicaEscolhida}.mp3`);    
        audio.play();
        controles.classList.add('controles-ativo');
        addERemoveClasse(musicaAtual);  
    };
})

function addERemoveClasse(musicaAtual){
    const textoMusica = document.querySelectorAll('.musica_titulo');
    textoMusica.forEach( musica => {
        musica.classList.remove('tocando');
    });
    
    musicaAtual.classList.add('tocando');
}

playerBt.addEventListener( 'click', ()=> {
    let primeiraFaixa = listaDeMusicas[0];
    let nomePrimeiraFaixa = primeiraFaixa.classList[1];
    if(audio != null){
        audio.pause();
    }
    audio = new Audio(`./audio/${nomePrimeiraFaixa}.mp3`);
    audio.play();
})

