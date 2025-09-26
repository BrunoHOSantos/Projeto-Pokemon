let resultadoJS = document.getElementById('resultado')
let imgJS = document.createElement('img')
let NomeDoPokemonJS = window.document.getElementById("NomeDoPokemon")
document.getElementById('base').style.visibility = 'hidden'
imgJS.setAttribute('id','foto')
const botao2JS = document.getElementById("botao2");
const botao3JS = document.getElementById("botao3");
const botao1JS = document.getElementById("botao1");

function TocarThema() {
    const TocarThemaJS = new Audio("Audios/Pokemon Theme GameBoy.wav")
    TocarThemaJS.play()
    console.log("E para funcionar")
  }
//----------------------------------------------------------
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


//----------------------------------------------------------
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