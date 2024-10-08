console.log("main.loaded"); // Logt naar de console dat de hoofdmodule is geladen.

const btnHigher = document.querySelector("#higher"); // Selecteert de knop voor 'Hoger'.
const btnLower = document.querySelector("#lower"); // Selecteert de knop voor 'Lager'.
const btnStart = document.querySelector("#start"); // Selecteert de startknop.
let previousRoll = null; // Houdt de waarde van de vorige dobbelsteenworp bij.
let playerScore = 0; // Houdt de score van de speler bij.
let computerScore = 0; // Houdt de score van de computer bij.

// Voeg een event listener toe voor de startknop.
btnStart.addEventListener("click", startGame);
// Voeg een event listener toe voor de knop 'Hoger', die de functie aanroept bij klikken.
btnHigher.addEventListener("click", () => makeGuess("higher"));
// Voeg een event listener toe voor de knop 'Lager', die de functie aanroept bij klikken.
btnLower.addEventListener("click", () => makeGuess("lower"));

// Functie die wordt aangeroepen wanneer de speler het spel start.
function startGame() {
  previousRoll = throwDice(); // Gooi de dobbelsteen en sla de waarde op in previousRoll.
  console.log(`Begin worp: ${previousRoll}`); // Log de beginworp naar de console.
  document.getElementById("DScore").innerHTML = `Huidige dobbelsteen: ${previousRoll}`; // Toon de huidige dobbelsteenworp in de interface.
  alert('SpelRegels: Er zijn geen spel regels.')
    alert('je speelt tegen de computer')
}

// Functie om een dobbelsteen te gooien (genereert een willekeurig getal tussen 1 en 6).
function throwDice() {
  const dice = Math.floor(Math.random() * 6) + 1; // Genereert een getal van 1 tot 6.
  return dice; // Geeft de dobbelsteenworp terug.
}

// Functie die wordt aangeroepen wanneer de speler een gok doet.
function makeGuess(guess) {
  if (previousRoll === null) {
    // Controleert of er een vorige worp is.
    console.log("Je moet eerst starten!"); // Log een foutmelding als er geen vorige worp is.
    return; // Stop de functie als er geen vorige worp is.
  }

  const newRoll = throwDice(); // Gooi de dobbelsteen opnieuw en sla de waarde op.
  console.log(`Nieuwe worp: ${newRoll}`); // Log de nieuwe worp naar de console.
  document.getElementById("DScore").innerHTML = `Nieuwe dobbelsteen: ${newRoll}`; // Toon de nieuwe dobbelsteenworp in de interface.

  // Controleer of de gok van de speler correct is.
  if (
    (guess === "higher" && newRoll > previousRoll) ||
    (guess === "lower" && newRoll < previousRoll)
  ) {
    playerScore++; // Verhoog de spelerscore met 1.
    document.getElementById(
      "playerscore"
    ).innerText = `Player Score: ${playerScore}`; // Werk de weergegeven spelerscore bij.
    console.log(`Goed geraden! Score: ${playerScore}`); // Log een bericht dat de speler goed heeft geraden.
  } else {
    console.log(
      `Fout geraden! Vorige worp: ${previousRoll}, Nieuwe worp: ${newRoll}`
    ); // Log een bericht dat de speler fout heeft geraden.
  }
  
//----------------------------------------------------------------------------------------------------------------------|Hier onder is de Computer.
  
// Laat de computer ook een gok maken na de speler.
  makeComputerGuess(newRoll); // Roep de functie aan om de computer een gok te laten doen.

  previousRoll = newRoll; // Update de vorige worp met de nieuwe worp voor de volgende ronde.
}

// Functie die de computer een gok laat maken.
function makeComputerGuess(previousRoll) {
  const computerGuess = Math.random() < 0.5 ? "higher" : "lower"; // De computer maakt een willekeurige gok (50% kans op 'higher' of 'lower').
  console.log(`Computer gokte: ${computerGuess}`); // Log de gok van de computer naar de console.

  const newRoll = throwDice(); // Gooi de dobbelsteen voor de computer.
  console.log(`Computer nieuwe worp: ${newRoll}`); // Log de nieuwe worp van de computer.

  // Controleer of de gok van de computer correct is.
  if (
    (computerGuess === "higher" && newRoll > previousRoll) ||
    (computerGuess === "lower" && newRoll < previousRoll)
  ) {
    computerScore++; // Verhoog de computerscore met 1.
    document.getElementById(
      "computerscore"
    ).innerText = `Computer Score: ${computerScore}`; // Werk de weergegeven computerscore bij.
    console.log(`Computer goed geraden! Score: ${computerScore}`); // Log een bericht dat de computer goed heeft geraden.
  } else {
    console.log(
      `Computer fout geraden! Vorige worp: ${previousRoll}, Nieuwe worp: ${newRoll}`
    ); // Log een bericht dat de computer fout heeft geraden.
  }
}
