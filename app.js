
const input1 = document.getElementById("input-1");
const input2 = document.getElementById("input-2");
const sumButton = document.getElementById("sum-button");
const span = document.getElementById("span")
const subButton = document.getElementById("sub-button");
const multButton = document.getElementById("mult-button");
const divButton = document.getElementById("div-button");



sumButton.addEventListener('click', () => {
    
    const value1 = input1.valueAsNumber;
    const value2 = input2.valueAsNumber;
    const sum = value1 + value2;
    span.textContent = sum;
    document.body.style.backgroundColor = "orange";
})



subButton.addEventListener('click', () => {
    
    const value1 = input1.valueAsNumber;
    const value2 = input2.valueAsNumber;
    const sub = value1 - value2;
    span.textContent = sub;
    document.body.style.backgroundColor = "purple"
})




multButton.addEventListener('click', () => {
    
    const value1 = input1.valueAsNumber;
    const value2 = input2.valueAsNumber;
    const mult = value1 * value2;
    span.textContent = mult;
    document.body.style.backgroundColor = "black"
})


divButton.addEventListener('click', () => {
    
    const value1 = input1.valueAsNumber;
    const value2 = input2.valueAsNumber;
    const div = value1 / value2;
    span.textContent = div;
    document.body.style.backgroundColor = "pink"
})