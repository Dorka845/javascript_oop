import { Gomb } from "./gomb.js";

const input1 = document.createElement('input');
input1.placeholder = "1. szam";
document.body.appendChild(input1);

const input2 = document.createElement('input');
input2.placeholder = "2. szam";
document.body.appendChild(input2);

const div = document.createElement('div');
document.body.appendChild(div);

new Gomb(input1, input2, "+", div);
new Gomb(input1, input2, "-", div);
new Gomb(input1, input2, "*", div);

/*
const button = document.createElement('button');
button.innerText = "gob"
document.body.appendChild(button);

button.addEventListener('click', function() {
    const in1Val = Number(input1.value);
    const in2Val = Number(input2.value);

    const p = document.createElement('p');
    const {result} = muvelet(in1Val, in2Val, muveletLetrehoz('+')); // destructuring
    p.innerText = result;
    div.appendChild(p);
})
*/

// eddigi function syntax
//function muvelet(a, b) {
//    return a + b;
//}

// alternativ arrowfunction syntax
// nincs this, bind, ilyesmi
//const muvelet = (a, b) => {return a + b};


const fv = muveletLetrehoz('+');
console.log(fv(1, 2));      // 3

// higher order function (Hof): olyan fuggveny, aminek a parametere vagy visszateresi erteke egy fuggveny