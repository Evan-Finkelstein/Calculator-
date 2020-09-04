
import {handleSumClick} from './handle.js';
import {handleSubClick} from './handle.js';
import {handleMultClick} from './handle.js';
import {handleDivClick} from './handle.js';

const sumButton = document.getElementById("sum-button");
const subButton = document.getElementById("sub-button");
const multButton = document.getElementById("mult-button");
const divButton = document.getElementById("div-button");



sumButton.addEventListener('click', handleSumClick);


subButton.addEventListener('click', handleSubClick); 


multButton.addEventListener('click', handleMultClick); 


divButton.addEventListener('click', handleDivClick); 