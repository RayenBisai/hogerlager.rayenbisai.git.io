
const btnHigher = document.querySelector("#higher"); // Selecteert de knop voor 'Hoger'.
const btnLower = document.querySelector("#lower"); // Selecteert de knop voor 'Lager'.
const btnStart = document.querySelector("#start"); // Selecteert de startknop.
let previousRoll = null; 
let playerScore = 0; 
let computerScore = 0; 


btnStart.addEventListener("click", startGame);

btnHigher.addEventListener("click", () => makeGuess("higher"));

btnLower.addEventListener("click", () => makeGuess("lower"));

// Functie die wordt aangeroepen wanneer de speler het spel start.
function startGame() {
  previousRoll = throwDice(); 
  console.log(`Begin worp: ${previousRoll}`); 
  document.getElementById("DScore").innerHTML = `Huidige dobbelsteen: ${previousRoll}`; 
  alert('SpelRegels: Er zijn geen spel regels.')
    alert('je speelt tegen de computer')
}

// functie om een dobbelsten te gooien (genereert een willekeurig getal tussen 1 en 6)
function throwDice() {
  const dice = Math.floor(Math.random() * 6) + 1; // Genereert een getal van 1 tot 6
  return dice; 
}


function makeGuess(guess) {
  if (previousRoll === null) {
   
    console.log("Je moet eerst starten!"); // Log een foutmelding als er geen vorige worp is.
    return; // Stop de functie als er geen vorige worp is.
  }

  const newRoll = throwDice(); 
  console.log(`Nieuwe worp: ${newRoll}`);
  document.getElementById("DScore").innerHTML = `Nieuwe dobbelsteen: ${newRoll}`; 

  // Controleer of de gok van de speler correct is.
  if (
    (guess === "higher" && newRoll > previousRoll) ||
    (guess === "lower" && newRoll < previousRoll)
  ) {
    playerScore++; // Verhoog de spelerscore met 1.
    document.getElementById(
      "playerscore"
    ).innerText = `Player Score: ${playerScore}`; 
    console.log(`Goed geraden! Score: ${playerScore}`); 
  } else {
    console.log(
      `Fout geraden! Vorige worp: ${previousRoll}, Nieuwe worp: ${newRoll}`
    ); // Log een bericht dat de speler fout heeft geraden.
  }
  
//----------------------------------------------------------------------------------------------------------------------hier onder is de Computer.
  
// Laat de computer ook een gok maken na de speler.
  makeComputerGuess(newRoll); 

  previousRoll = newRoll; // Update de vorige worp met de nieuwe worp voor de volgende ronde.
}

// Functie die de computer een gok laat maken.
function makeComputerGuess(previousRoll) {
  const computerGuess = Math.random() < 0.5 ? "higher" : "lower"; // De computer maakt een willekeurige gok (50% kans op 'higher' of 'lower').
  console.log(`Computer gokte: ${computerGuess}`); 

  const newRoll = throwDice(); // Gooi de dobbelsteen voor de computer.
  console.log(`Computer nieuwe worp: ${newRoll}`); 

  // Controleer of de gok van de computer correct is.
  if (
    (computerGuess === "higher" && newRoll > previousRoll) ||
    (computerGuess === "lower" && newRoll < previousRoll)
  ) {
    computerScore++; 
    document.getElementById(
      "computerscore"
    ).innerText = `Computer Score: ${computerScore}`; // Werk de weergegeven computerscore bij.
    console.log(`Computer goed geraden! Score: ${computerScore}`); 
  } else {
    console.log(
      `Computer fout geraden! Vorige worp: ${previousRoll}, Nieuwe worp: ${newRoll}`
    ); 
  }
}
