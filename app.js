//Button  selectors
const addButton = document.querySelector('.add'),
    removeButton = document.querySelector('.remove');
//elements for update
const currentsCupsEl = document.querySelector(".current-cups"),
    currentsLitersEl = document.querySelector(".current-liters"),
    currentsPercentageEl = document.querySelector(".current-percentage"),
    progressArea = document.querySelector(".progress");

const MAX_CUPS=10,
    MIN_CUPS=0;

let cups=0,
    liters=0,
    percentage=0;

addButton.addEventListener("click",addCup);
removeButton.addEventListener("click",removeCup);

function addCup() {
    cups++;
    liters += 250;
    percentage = (cups/MAX_CUPS)*100;
        //update
        currentCupsEl.textContent = '${cups}/10';
        currentLitersEl.textContent = '${liters/1000}l/2.5l';
        currentPercentageEl.textContent = '${percentage}%';



    }
function removeCup() {}