
const divContainer = document.querySelector('#container');
const btnButton = document.querySelector('#button');

let squaresPerSide = 16;

buildSquares(squaresPerSide);

btnButton.addEventListener('click', setSquaresPerSide);

function setSquaresPerSide() {
    squaresPerSide = parseInt(prompt('Choose how many squares per side do you want, 100 is the limit'));
    
    if(squaresPerSide>100) {
        alert('the number is more than 100, try again');
        return setSquaresPerSide();
    } else if(setSquaresPerSide<0) {
        alert('The number must be greater tha 0');
        return setSquaresPerSide();
    } else if(isNaN(squaresPerSide)) {
        console.log(squaresPerSide);
        alert('This is not e number, try again');
        return setSquaresPerSide();
    }

    clearHTML();

    buildSquares(squaresPerSide);
}

function buildSquares(n) {
    let sideSquare = 800/n;
    for (let i = 1; i <= n; i++) {
        const divColumn = document.createElement('DIV');
        divColumn.classList.add(`divColumn${i}`);
        for (let i = 1; i <= n; i++) {
            const divSquare = document.createElement('DIV');
            divSquare.style.width = `${sideSquare}px`;
            divSquare.style.height = `${sideSquare}px`;
            divSquare.style.boxSizing = 'border-box'
            divSquare.classList.add('divSquare', `divSquare${i}`);
            divSquare.addEventListener('mouseover', changeColor);
            divColumn.appendChild(divSquare);
        }
        divContainer.appendChild(divColumn);
    }
}

function changeColor(e) {
    if (e.type === "mouseover") {
        e.target.style.backgroundColor = 'red';
    }
}

function clearHTML(){
    while(divContainer.firstChild) {
        divContainer.removeChild(divContainer.firstChild);
    }
}
