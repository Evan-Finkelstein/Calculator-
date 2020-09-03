
const sumInput1 = document.getElementById("sum-input-1");
const sumInput2 = document.getElementById("sum-input-2");
const sumButton = document.getElementById("sum-button");
const sumSpan = document.getElementById("sum-span")


sumButton.addEventListener('click', () => {
    
    const value1 = sumInput1.valueAsNumber;
    const value2 = sumInput2.valueAsNumber;
    const sum = value1 + value2;
    sumSpan.textContent = sum;
})

const subInput1 = document.getElementById("sub-input-1");
const subInput2 = document.getElementById("sub-input-2");
const subButton = document.getElementById("sub-button");
const subSpan = document.getElementById("sub-span")


subButton.addEventListener('click', () => {
    
    const value1 = subInput1.valueAsNumber;
    const value2 = subInput2.valueAsNumber;
    const sub = value1 - value2;
    subSpan.textContent = sub;
})

const multInput1 = document.getElementById("mult-input-1");
const multInput2 = document.getElementById("mult-input-2");
const multButton = document.getElementById("mult-button");
const multSpan = document.getElementById("mult-span")


multButton.addEventListener('click', () => {
    
    const value1 = multInput1.valueAsNumber;
    const value2 = multInput2.valueAsNumber;
    const mult = value1 * value2;
    multSpan.textContent = mult;
})

const divInput1 = document.getElementById("div-input-1");
const divInput2 = document.getElementById("div-input-2");
const divButton = document.getElementById("div-button");
const divSpan = document.getElementById("div-span")


divButton.addEventListener('click', () => {
    
    const value1 = divInput1.valueAsNumber;
    const value2 = divInput2.valueAsNumber;
    const div = value1 / value2;
    divSpan.textContent = div;
})