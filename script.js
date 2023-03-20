var square = document.getElementById('square');
var square = document.getElementById('word');

function greeting() {
    words.innerHTML = "Welcome to Flatland <br> I am square!"
}



square.addEventListener('click', (event) => changeColour('green'))

/*create hover message*/
square.addEventListener('mouseover', (event) => changeColour('grey'));
square.addEventListener('mouseout', (event) => changeColour('red'));

function changeColour(colour) {
    square.style.background = colour
}

document.onload = greeting()

function createBuzzwordPhrase() {
    /* See https://en.wikipedia.org/wiki/List_of_buzzwords */
    let buzz = ["Paradigm-changing", "Multi-tier", "10,000-foot", "Agile", "Customer", "Win-win"];
    let action = ["empowered", "value-added", "synergy", "creative", "oriented", "focused", "aligned"];
    let outcome = ["process", "deliverable", "solution", "tipping-point", "strategy", "vision"];
/*note need fixing*/
    let idx_buz = Math.floor(Math.random() * buzz.length);
    let idx_act = Math.floor(Math.random() * action.length);
    let idx_out = Math.floor(Math.random() * outcome.length);

    return  buzz[idx_buz] + " " + action[idx_act] + " " + outcome[idx_out];
}

console.log(createBuzzwordPhrase())