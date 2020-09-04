const input1 = document.getElementById("input-1");
const input2 = document.getElementById("input-2");
const span = document.getElementById("span")
import {addTwoNumbers} from './math.js';
import {subTwoNumbers} from './math.js';
import {multTwoNumbers} from './math.js';
import {divTwoNumbers} from './math.js';

export function handleSumClick() {
    const value1 = input1.valueAsNumber;
    const value2 = input2.valueAsNumber;
    const sum = addTwoNumbers(value1, value2);
    span.textContent = sum;
    document.body.style.backgroundImage = "url('https://p3cdn4static.sharpschool.com/UserFiles/Servers/Server_770743/Image/Technology/Other%20Pictures/math.jpg')";
}

export function handleSubClick() {
    const value1 = input1.valueAsNumber;
    const value2 = input2.valueAsNumber;
    const sub = subTwoNumbers(value1, value2);
    span.textContent = sub;
    document.body.style.backgroundImage = "url('https://www.wellesley.edu/sites/default/files/styles/news_refresh_hero/public/assets/dailyshot/ds_461390782.jpg?itok=jr0Buv1t')";
}

export function handleMultClick() {
    const value1 = input1.valueAsNumber;
    const value2 = input2.valueAsNumber;
    const mult= multTwoNumbers(value1, value2);
    span.textContent = mult;
    document.body.style.backgroundImage = "url('https://www.yu.edu/sites/default/files/math-515606506.jpg')"
}
export function handleDivClick() {
    const value1 = input1.valueAsNumber;
    const value2 = input2.valueAsNumber;
    const div = divTwoNumbers(value1, value2);
    span.textContent = div;
    document.body.style.backgroundImage = "url('https://www.mcvts.net/cms/lib/NJ01911694/Centricity/Domain/1021/Math%20001.png')"
}