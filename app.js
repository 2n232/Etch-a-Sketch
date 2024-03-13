
const divContainer = document.querySelector('#container');

for (let i = 1; i <= 16; i++) {
    const divColumn = document.createElement('DIV');
    divColumn.classList.add(`divColumn${i}`);
    for (let i = 1; i <= 16; i++) {
        const divSquare = document.createElement('DIV');
        divSquare.classList.add('divSquare', `divSquare${i}`);
        divColumn.appendChild(divSquare);
    }
    divContainer.appendChild(divColumn);
}
