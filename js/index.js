window.addEventListener("load", (event) => {
    console.log("All resources finished loading!");
  });

// button mouseover //
// changes the button color to black and limegreen //
let button = document.querySelectorAll('.btn');
console.log(button);

let buttonArray = Array.from(button);
buttonArray.forEach(a=>a.addEventListener('mouseover', event => {
    event.target.style.color = 'limegreen';
    event.target.style.backgroundColor = 'black';
}));

// returns colors to default //
buttonArray.forEach(a => a.addEventListener('mouseleave', event => {
    event.target.style.color = '';
    event.target.style.backgroundColor = '';
}))

// image drag //
// allows the images to show in the nav once you drag it //

let image = document.querySelectorAll('img');

image.forEach(a => a.addEventListener('drag', (event) => {
    event.target.style.opacity = .5;
}));

let h2 = document.querySelectorAll('h2');

// doubleclick feature added; allows doubleclicking of h2 to change font color to purple. //
h2.forEach( a => a.addEventListener('dblclick', (event) => {
    event.target.style.color = 'purple';
    event.target.style.backgroundColor = 'orange';
}));

// largeSelect //
// selected text increases in size //






let searchbar = document.querySelector('form');

// when you click on the searchbar the background will turn limegreen //
searchbar.addEventListener('focus', (event) => {
    event.target.style.background = 'limegreen';
}, true);
// this will blur it to default
searchbar.addEventListener('blur', (event) => {
    event.target.style.background = '';
}, true);

// Logs the keyboard input inside the searchbar //
const input = document.querySelector('input');
const log = document.getElementById('log');

input.addEventListener('select', (event) => {
    event.target.style.color = 'magenta';
});

input.addEventListener('keydown', logKey);

function logKey(e) { 
    log.textContent += ` ${e.code}`;gsg
}

// Clicking the page changes the font color to purple //

const div = document.querySelectorAll('div');

div.forEach(a => a.addEventListener('click', (event) => {
    event.target.style.color = 'purple';
}));