/*variablen*/

/*Een variable is een manier in javascript om veranderlijke gegevens te bewaren
Je maakt een naam aan van de variable zodat je de variable in een script kunt gebruiken.
In dit geval heb ik mijn var namen gegeven die ook letterlijk de namen zijn van de tools die ik gebruik
zo is het makkelijk te herkennen in mijn code.*/
var gezicht    = document.querySelector("#gezicht");
var foundation = document.querySelector("#foundation");
var oogschaduw = document.querySelector("#oogschaduw");
var blush      = document.querySelector("#blush");
var mascara    = document.querySelector("#mascara");
var lipstift   = document.querySelector("#lipstift");



/*functies*/

/*Wanneer er op een make up tool word geklikt word deze functie getriggerd. 
In dit geval word de afbeelding veranderd zodra je op de tool klikt. Ik heb er een functie "voeg toe" 
aan gehangen omdat je letterlijk het product op het makeupgezicht wil toevoegen*/

function voegFoundationToe() {
  gezicht.src="image/foundation.png";
  speelAudioAf();
}
function voegOogschaduwToe() {
    gezicht.src="image/oogschaduws.png";
}
function voegBlushToe() {
    gezicht.src="image/blush.png";
}

function voegMascaraToe() {
  gezicht.src="image/mascara.png";
}

function voegLipstiftToe() {
  gezicht.src="image/lipstick.png";
}

function speelAudioAf() {
  if(audioELAchtergrond instanceof HTMLAudioElement){
    audioELAchtergrond.play() ;
  }
}


/*eventlistner*/

/*Een eventlistener wacht op een gebeurtenis waarmee het element word gekoppeld
Ik heb de gebeurtenis "klikken" eraan gehangen. Hierdoor weten mijn 5 make up tools dat wannneer
er op de afbeelding word geklikt er iets moet gaan gebeuren.*/
foundation.addEventListener("click",voegFoundationToe);
oogschaduw.addEventListener("click",voegOogschaduwToe);
blush.addEventListener("click",voegBlushToe);
mascara.addEventListener("click",voegMascaraToe);
lipstift.addEventListener("click",voegLipstiftToe)



/*arrays*/

/*arrays worden gebruikt om meerdere waarden in 1 variable op te slaan. 
Aan elk item in een array is een nummer gekoppeld. In javascript beginnen de arrays altijd bij nul.
Ik heb in dit geval 5 namen in een var staan. Dat maakt mijn "randomgetal" tot 5. Nu weet mijn 
script dat ik 5 namen/elementen heb in mijn array. Ik heb in mijn html een id aangemaakt voor een woord in een zin.
Die id heb ik gekoppeld aan mijn arrays met de document.queryselector. Nu word elke keer als ik de pagina refresh het woord met de id eraan
vervangen door een van de 5 var namen.*/

var namen = ["Fleur", "Sara" , "Demi" , "Myrthe" , "Pien"];
var randomGetal = Math.floor(Math.random()*5);
var naamElement = document.querySelector("#name");
var geselecteerdeNaam =namen[randomGetal];
naamElement.textContent = geselecteerdeNaam;


/*testen of de koppeling werkt*/
console.log(namen[randomGetal]);

/*if else*/

/*if else houd letterlijk in dat wanneer je het ene doet het ander word uitegvoerd. Dit komt door de verschillende acties die 
pas worden uitgevoerd op de verschillende voorwaardes. Ik had bij de arrays 5 namen aangemaakt.
Bij de if else heb ik elke naam een eigen achtergrond kleur gegeven. Dus elke keer als je de pagina refresht zie je dus een nieuwe naam
en een nieuwe achtergrond kleur.*/

if(geselecteerdeNaam==="Fleur"){
  document.querySelector("body").style.backgroundColor="lightblue";
} else if (geselecteerdeNaam==="Sara"){
  document.querySelector("body").style.backgroundColor="orange";
} else if (geselecteerdeNaam==="Demi"){
  document.querySelector("body").style.backgroundColor="yellow";
} else if (geselecteerdeNaam==="Myrthe"){
  document.querySelector("body").style.backgroundColor="lightgreen";
} else if (geselecteerdeNaam==="Pien"){
  document.querySelector("body").style.backgroundColor="pink";
}


/*audio*/
/* Ik wilde graag in mijn website een muziekje toevoegen. Dit heb ik gedaan doormiddel van een mp3 audio.
Ik het de audio gedownload via een rechtenvrije website. Daarna heb ik de audio in mijn bestand geplaats. 
Toen heb ik een var aangemaakt om de audio toe te wijden in mijn script.
Daarna heb ik een element aangemaakt en mijn audio hieraan gekoppeld zodat mijn script weet welke audio er moet worden afgespeeld.
Daarna heb ik een function gemaakt van de audio en de function gekoppeld aan een van mijn make up tools. Zo weet het script dat elke keer
als er op de "foundation" word geklikt er een muziekje word afgespeeld.*/

 var audioELAchtergrond = new Audio ()
 audioELAchtergrond.src ='achtergrond.mp3'