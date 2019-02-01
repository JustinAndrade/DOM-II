// Your code goes here

// button mouseover
let button = document.querySelectorAll('.btn');
console.log(button);

let buttonArray = Array.from(button);
buttonArray.forEach(a=>a.addEventListener('mouseover', event => {
    event.target.style.color = 'limegreen';
}));

// image drag
// allows the bus to show in the nav once you drag it

let image = document.querySelector('img');

image.addEventListener('drag', (event) => {
    event.target.style.opacity = .5;
});
