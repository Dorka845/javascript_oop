function Tanyer(szin) {
    this.szin = szin;
}

function Pohar() {
    this.anyag = 'uveg';
}


function KisTanyer(szin) {
    Tanyer.call(this, szin);
    this.meret = 'kicsi';
}

function NagyTanyer(szin) {
    Tanyer.call(this, szin);
    this.meret = 'nagy';
}


Object.setPrototypeOf(KisTanyer.prototype, Tanyer.prototype);
Object.setPrototypeOf(NagyTanyer.prototype, Tanyer.prototype);


const tanyer1 = new KisTanyer('piros');
const tanyer2 = new KisTanyer('kek');
const tanyer3 = new NagyTanyer('zold');
const pohar1 = new Pohar();

console.log(tanyer1);
console.log(tanyer2);
console.log(tanyer3);
console.log(pohar1);


class Evoeszkoz {
    constructor(hegyekSzama) {this.hegyekSzama = hegyekSzama};
}

class Kes extends Evoeszkoz {
    constructor(markolatTipus) {
        super(0);
        this.markolatTipus = markolatTipus;
    }
}

class Villa extends Evoeszkoz {
    constructor() {
        super(4);
    }
}

class Pohar_Ev {
    constructor(urtartalom) {
        this.urtartalom = urtartalom;
    }
}


const kes = new Kes("fem");
const villa = new Villa();
const pohar = new Pohar_Ev(3);

console.log(kes);
console.log(villa);
console.log(pohar);