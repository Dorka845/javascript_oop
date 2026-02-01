import { muvelet, muveletLetrehoz } from "./functions.js";

export class Gomb {
    constructor(input1, input2, muveletString, eredmenyDiv) {
        this.input1 = input1;
        this.input2 = input2,
        this.muveletString = muveletString;
        this.eredmenyDiv = eredmenyDiv;

        this.button = document.createElement("button");
        this.button.innerText = `Muvelet: ${muveletString}`;
        document.body.appendChild(this.button);

        this.button.addEventListener("click", this.#calculate(this.input1, this.input2, this.eredmenyDiv));
    }

    #calculate(input1, input2, eredmenyDiv) {
        return () => {
            const a = Number(input1.value);
            const b = Number(input2.value);

            const callback = muveletLetrehoz(this.muveletString);
            const { result } = muvelet(a, b, callback);

            const p = document.createElement("p");
            p.innerText = `${a} ${this.muveletString} ${b} = ${result}`;
            eredmenyDiv.appendChild(p);
        }; 
    }
}
