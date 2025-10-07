let resultadoJS = document.getElementById('resultado')
let imgJS = document.createElement('img')
let NomeDoPokemonJS = window.document.getElementById("NomeDoPokemon")
document.getElementById('base').style.visibility = 'hidden'
imgJS.setAttribute('id','foto')
const botao2JS = document.getElementById("botao2");
const botao3JS = document.getElementById("botao3");
const botao1JS = document.getElementById("botao1");

let Tocando = false
function TocarThema() {  
    if(Tocando)return
    const TocarThemaJS = new Audio("Audios/Pokemon Theme GameBoy.wav")
    TocarThemaJS.play()
    console.log("E para funcionar")
    Tocando = true
    setTimeout(() => {
        console.log("Again")
        Tocando = false
        }, 83000);
}

// ----------------------------Efeito digitando---------------------------
let Digitando = false
botao1JS.addEventListener("click", () => {
    if(Digitando)return
    Digitando = true
    const InfoJS = document.getElementById("Info");
    const TipoJS = document.getElementById("Tipo");
    const ForcaJS = document.getElementById("Força")
    let TextoInfo1 = "Notável por uma planta em suas costas que cresce com ele. Ele usa os nutrientes da semente para crescer e pode armazenar energia em seu bulbo, ficando dias sem comer, especialmente se cochilar ao sol para acelerar o crescimento. Ele evolui para Ivysaur no nível 16 e, depois, para Venusaur no nível 32. "
    let TextoInfo2 = "Bulbasaur é um Pokémon inicial do tipo Planta/Veneno                                                                                                                                                                                                                                                           "
    let TextoInfo3 = "Resistências: É resistente a Pokémon dos tipos Água, Terra, Planta, Inseto, Lutador e Fada. Eficiência: É um ótimo counter para Pokémon de tipo Água, Terra e Pedra. ATAQUES: É forte em ataques de tipo Planta, como o poderoso Raio Solar.                                                                   "
    InfoJS.textContent = ""; // limpa antes
    TipoJS.textContent = "";
    ForcaJS.textContent = "";
    let i = 0
        const intervalo = setInterval(() => {
        InfoJS.textContent += TextoInfo1[i];
        TipoJS.textContent += TextoInfo2[i];
        ForcaJS.textContent += TextoInfo3[i];
        i++;
        if (i >= TextoInfo1.length) {
            clearInterval(intervalo);
            Digitando = false
        }
        if(i >= TextoInfo2.length){
            clearInterval(intervalo)
            Digitando = false
        }
        if(i >= TextoInfo3.length){
            clearInterval(intervalo)
            Digitando = false
        }
             
      }, 10,); // velocidade em ms (100 = 0.1s por letra)
    });

    botao2JS.addEventListener("click", () => {
    if(Digitando)return
    Digitando = true
    const InfoJS = document.getElementById("Info");
    const TipoJS = document.getElementById("Tipo");
    const ForcaJS = document.getElementById("Força")
    let TextoInfo1 = "Com aparência de tartaruga azul, que tem uma carapaça em suas costas. Ele pode evoluir para Wartortle e, em seguida, para Blastoise. Conhecido por ser um dos três Pokémon iniciais da região de Kanto, Squirtle é um Pokémon marcante e popular na franquia, capaz de lançar jatos de água da boca e ter uma habilidade especial de nadar em alta velocidade devido ao seu casco. "
    let TextoInfo2 = "É um Pokémon inicial do tipo Água da Primeira Geração                                                                                                                                                                                                                                                                                                                              "
    let TextoInfo3 = "Tipo: Água. Aparência: Pokémon pequeno, azul-claro, com uma tartaruga e uma carapaça resistente nas costas.Evolução: De Squirtle para Wartortle (nível 16) e depois para Blastoise (nível 36).Habilidades: É capaz de disparar água e possui uma carapaça aerodinâmica que o ajuda a nadar rapidamente.                                                                            " 
    InfoJS.textContent = ""; // limpa antes
    TipoJS.textContent = "";
    ForcaJS.textContent = "";
    let i = 0
        const intervalo = setInterval(() => {
        InfoJS.textContent += TextoInfo1[i];
        TipoJS.textContent += TextoInfo2[i];
        ForcaJS.textContent += TextoInfo3[i];
        i++;
        if (i >= TextoInfo1.length) {
            clearInterval(intervalo);
            Digitando = false
        }
        if(i >= TextoInfo2.length){
            clearInterval(intervalo)
            Digitando = false
        }
        if(i >= TextoInfo3.length){
            clearInterval(intervalo)
            Digitando = false
        }
             
      }, 10,); // velocidade em ms (100 = 0.1s por letra)
    });

    botao3JS.addEventListener("click", () => {
    if(Digitando)return
    Digitando = true
    const InfoJS = document.getElementById("Info");
    const TipoJS = document.getElementById("Tipo");
    const ForcaJS = document.getElementById("Força")
    let TextoInfo1 = "É um dos Pokémon iniciais de Kanto, sendo fraco contra tipos Água, Terra e Pedra, mas resistente a Gelo, Fogo, Planta, Inseto e Metal. Sua habilidade principal, Blaze, aumenta a força de seus ataques de Fogo quando está com pouca vida.                                                                                         "
    let TextoInfo2 = "É um Pokémon lagarto do tipo Fogo, conhecido por uma chama na ponta de sua cauda que reflete sua vitalidade e emoções                                                                                                                                                                                                               "
    let TextoInfo3 = "Tipo: Fogo Aparência: Um pequeno lagarto bípede de cor laranja, com o ventre de cor amarela e uma chama que queima na ponta de sua cauda. A Chama: A chama na cauda é um indicador de sua força vital; se ela apagar, o Pokémon morre. Ela também oscila quando ele está feliz e arde com mais intensidade quando está com raiva.   " 
    InfoJS.textContent = ""; // limpa antes
    TipoJS.textContent = "";
    ForcaJS.textContent = "";
    let i = 0
        const intervalo = setInterval(() => {
        InfoJS.textContent += TextoInfo1[i];
        TipoJS.textContent += TextoInfo2[i];
        ForcaJS.textContent += TextoInfo3[i];
        i++;
        if (i >= TextoInfo1.length) {
            clearInterval(intervalo);
            Digitando = false
        }
        if(i >= TextoInfo2.length){
            clearInterval(intervalo)
            Digitando = false
        }
        if(i >= TextoInfo3.length){
            clearInterval(intervalo)
            Digitando = false
        }
             
      }, 10,); // velocidade em ms (100 = 0.1s por letra)
    });
//---------------------------Animacao dos pokemons pulando---------------------------

botao1JS.addEventListener("click", () => {
    imgJS.classList.remove(".animacao-sobe-desce");
    void imgJS.offsetWidth;
    imgJS.classList.add("animacao-sobe-desce");
});
botao2JS.addEventListener("click", () => {
    imgJS.classList.add("animacao-sobe-desce");
    void imgJS.offsetWidth;
    imgJS.classList.remove(".animacao-sobe-desce");
});
botao3JS.addEventListener("click", () => {
    imgJS.classList.add("animacao-sobe-desce");
    void imgJS.offsetWidth;
    imgJS.classList.remove(".animacao-sobe-desce");
});


//-------------------------Function de cada Pokemon---------------------------------
function PK1(){
    NomeDoPokemonJS.innerHTML = "Bulbasaur"
    NomeDoPokemonJS.style = "text-shadow:-1px -1px 0 black,1px -1px 0 black,-1px  1px 0 black,1px  1px 0 black;";
    NomeDoPokemonJS.style.color = "green"
    const ClickPoke = new Audio("Audios/Click Pokemon.wav")
    ClickPoke.play()
    const CryBulbasaur = ["Audios/bulbasaur cry 1.wav","Audios/bulbasaur cry 2.wav"]
    const Aleatorio = Math.floor(Math.random() * CryBulbasaur.length);
    const CryBulbasaurplay = new Audio(CryBulbasaur[Aleatorio])
    CryBulbasaurplay.play()
    resultadoJS.appendChild(imgJS).style = 'height: 120px;'
    imgJS.setAttribute('src',"IMGS/1.png")
    document.getElementById('base').style.visibility = 'visible'
    
    
}
function PK2(){
    NomeDoPokemonJS.innerHTML = "Squirtle"
    NomeDoPokemonJS.style = "text-shadow:-1px -1px 0 black,1px -1px 0 black,-1px  1px 0 black,1px  1px 0 black;";
    NomeDoPokemonJS.style.color = "RGB(173, 216, 230)"
    const ClickPoke = new Audio("Audios/Click Pokemon.wav")
    ClickPoke.play()
    const CrySquirtle = ["Audios/squirtle cry 1.wav","Audios/squirtle cry 2.wav"]
    const Aleatorio = Math.floor(Math.random() * CrySquirtle.length);
    const CrySquirtleplay = new Audio(CrySquirtle[Aleatorio])
    CrySquirtleplay.play()
    resultadoJS.appendChild(imgJS).style = 'height: 120px;'
    imgJS.setAttribute('src',"IMGS/2.png")
    document.getElementById('base').style.visibility = 'visible'
}
function PK3(){
    NomeDoPokemonJS.innerHTML = "Charmander"
    NomeDoPokemonJS.style = "text-shadow:-1px -1px 0 black,1px -1px 0 black,-1px  1px 0 black,1px  1px 0 black;";
    NomeDoPokemonJS.style.color = "red"
    const ClickPoke = new Audio("Audios/Click Pokemon.wav")
    ClickPoke.play()
    const CryCharmander = ["Audios/charmander cry 1.wav","Audios/charmander cry 2.wav"]
    const Aleatorio = Math.floor(Math.random() * CryCharmander.length);
    const CryCharmanderplay = new Audio(CryCharmander[Aleatorio])
    CryCharmanderplay.play()
    resultadoJS.appendChild(imgJS).style = 'height: 120px;'
    imgJS.setAttribute('src',"IMGS/3.png")
    document.getElementById('base').style.visibility = 'visible'
}