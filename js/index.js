// Your code goes here

// button mouseover
let button = document.querySelector('.btn');

button.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'yellow';
    event.target.style.color = 'black';
});

// image drag
// allows the bus to show in the nav once you drag it

let image = document.querySelector('img');

image.addEventListener('drag', (event) => {
    event.target.style.opacity = .5;
});