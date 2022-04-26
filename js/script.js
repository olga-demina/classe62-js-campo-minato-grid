// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
// Bonus:
// Aggiungere la possibilità di scegliere un livello di difficoltà in base al quale viene generata una griglia di uno dei seguenti range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

// [*] Al click sul bottone Play
// [*] Nascondere la scritta con classe "hidden"
// [*] Far vedere il contenitore della griglia, togliendo la classe "hidden"
// [*] Prelevare la scelta della difficoltà dell'utente, salviamo il numero delle celle all'interno della variabile cellNumber in base alla difficoltà.
// [*] Generare le celle da 1 a cellNuber. Per ogni cella: 
    // - [*] creare l'elemento html
    // - [*] aggiungere la classe "grid-item"
    // - [] settare le dimensioni della cella corrispondente al livello;
    // - [*] inserire lo span con il numero corrispondente
    // - [*] appendere la cella generata al contenitore

// [*] Al click di una delle celle, colorare la cella di blu aggiungendo la classe "clicked"

// Al click sul bottone Play far partire il gioco
const playButton = document.getElementById("play-btn");
playButton.addEventListener("click", startGame);

// MAIN FUNCTION
function startGame() {
    // Nascondere la scritta con classe "hidden"
    // Far vedere il contenitore della griglia, togliendo la classe "hidden"
    const title = document.getElementById("title");
    const grid = document.getElementById("grid");
    title.classList.add("hidden");
    grid.classList.remove("hidden");
    grid.innerHTML = "";

    // Prelevare la scelta della difficoltà dell'utente
    const difficulty = parseInt(document.getElementById("level").value);
    let cellNumber;
    let cellsNuberInRow;
    if (difficulty === 1) {
        cellNumber = 100;
        cellsNuberInRow = 10;
    } else if (difficulty === 2) {
        cellNumber = 81;
        cellsNuberInRow = 9;
    } else {
        cellNumber = 49;
        cellsNuberInRow = 7;
    }

    // Generare le celle da 1 a 100
    for (let i = 1; i <= cellNumber; i++) {
        // genera cella
        const newItem = generateGridItem(i, cellsNuberInRow);
        // aggiungo il handler del click
        newItem.addEventListener("click", handleCellClick);
        // appendere la cella generata al contenitore
        grid.append(newItem);
    }
}

// DOM FUNCTIONS

/** 
 * Description La funzione che colora di blu la cella
 * Non ritorna niente
 */
function handleCellClick() {
    this.classList.add("clicked");
}

/**
 * Description Funzione che genera un elemento (cella) html della griglia
 * @param {any} gridNumber -> un numero da inserire nella cella
 * @param {any} cellsInRow -> numero delle celle in una riga
 * @returns {any} -> elemento del DOM che rappresenta la cella della griglia
 */
function generateGridItem(gridNumber, cellsInRow) {
    // creare l'elemento html
    const gridItem = document.createElement("div");
    // aggiungere la classe "grid-item"
    gridItem.classList.add("grid-item");
    // settare le dimensioni della cella corrispondenti;
    gridItem.style.width = `calc(100% / ${cellsInRow})`;
    gridItem.style.height = `calc(100% / ${cellsInRow})`;
    // inserire lo span con il numero corrispondente
    gridItem.innerHTML = `<span>${gridNumber}</span>`

    return gridItem;
}
