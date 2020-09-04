
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
    document.body.style.backgroundImage = "url('https://p3cdn4static.sharpschool.com/UserFiles/Servers/Server_770743/Image/Technology/Other%20Pictures/math.jpg')";
})



subButton.addEventListener('click', () => {
    
    const value1 = input1.valueAsNumber;
    const value2 = input2.valueAsNumber;
    const sub = value1 - value2;
    span.textContent = sub;
    document.body.style.backgroundImage = "url('https://www.wellesley.edu/sites/default/files/styles/news_refresh_hero/public/assets/dailyshot/ds_461390782.jpg?itok=jr0Buv1t')";
})




multButton.addEventListener('click', () => {
    
    const value1 = input1.valueAsNumber;
    const value2 = input2.valueAsNumber;
    const mult = value1 * value2;
    span.textContent = mult;
    document.body.style.backgroundImage = "url('https://www.yu.edu/sites/default/files/math-515606506.jpg')"
})


divButton.addEventListener('click', () => {
    
    const value1 = input1.valueAsNumber;
    const value2 = input2.valueAsNumber;
    const div = value1 / value2;
    span.textContent = div;
    document.body.style.backgroundImage = "url('https://www.mcvts.net/cms/lib/NJ01911694/Centricity/Domain/1021/Math%20001.png')"
})