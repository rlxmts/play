const listaDeMusicas = document.querySelectorAll('.musica');
const playerBt = document.querySelector('.bt_player');
let audio = null;

listaDeMusicas.forEach( musica => {
    
    musica.onclick = ()=> {

        if(audio != null){
            audio.pause()
        }
        let musicaEscolhida = musica.classList[1];        
        audio = new Audio(`./audio/${musicaEscolhida}.mp3`);    
        audio.play();
    };
    
})

playerBt.addEventListener( 'click', ()=> {

    let primeiraFaixa = listaDeMusicas[0];
    let nomePrimeiraFaixa = primeiraFaixa.classList[1];

    audio = new Audio(`./audio/${nomePrimeiraFaixa}.mp3`);
    audio.play();
})
