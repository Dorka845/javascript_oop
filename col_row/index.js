import data from './data.json' with {type:'json'}
import { FormController } from './form.js';
import { Manager } from './manager.js';
import { Table } from './table.js';

/**
 * 
 * @param {HTMLTableSectionElement} tbody 
 * @param {ColspanType} elem 
 */
const renderColspanBody= (tbody, elem) => {
    const tr = document.createElement('tr');
    tbody.appendChild(tr);

    const tdNev = document.createElement('td');
    tdNev.innerText = elem.neve;
    tr.appendChild(tdNev);

    const tdKor = document.createElement('td');
    tdKor.innerText = elem.kor;
    tr.appendChild(tdKor);

    const tdSzerelme1 = document.createElement('td');
    tdSzerelme1.innerText = elem.szerelme1;
    tr.appendChild(tdSzerelme1);

    if (elem.szerelme2) {
        const tdSzerelme2 = document.createElement('td');
        tdSzerelme2.innerText = elem.szerelme2;
        tr.appendChild(tdSzerelme2);
    } else {
        tdSzerelme1.colSpan = 2;
    }
}

/**
 * 
 * @param {HTMLTableSectionElement} tbody 
 * @param {RowspanType} elem 
 */
const renderRowspanBody = (tbody, elem) => {
    const tr1 = document.createElement('tr');
    tbody.appendChild(tr1);
    
    const tdNemzet = document.createElement('td');
    tdNemzet.innerText = elem.nemzet;
    tr1.appendChild(tdNemzet);

    const tdSzerzo = document.createElement('td');
    tdSzerzo.innerText = elem.szerzo;
    tr1.appendChild(tdSzerzo);

    const tdMu = document.createElement('td');
    tdMu.innerText = elem.mu;
    tr1.appendChild(tdMu);

    if (elem.szerzo2 && elem.mu2) {
        tdNemzet.rowSpan = 2;
        const tr2 = document.createElement('tr');
        tbody.appendChild(tr2);

        const tdSzerzo2 = document.createElement('td');
        tdSzerzo2.innerText = elem.szerzo2;
        tr2.appendChild(tdSzerzo2);

        const tdMu2 = document.createElement('td');
        tdMu2.innerText = elem.mu2;
        tr2.appendChild(tdMu2);
    }
}




const manager1 = new Manager()
const table1 = new Table(data.colspanHeaderArray, manager1)

table1.setAppendRow((tbody, elem) => {
    renderColspanBody(tbody, elem);
})

for (const elem of data.colspanDataArr) {
    manager1.addElement(elem);
}

const form = new FormController(data.colspanFormFieldList, manager1)



const manager2 = new Manager();
const table2 = new Table(data.rowspanHeaderArray, manager2);

table2.setAppendRow((tbody, elem) => {
    renderRowspanBody(tbody, elem)
})

for (const elem of data.rowspanTableArray) {
    manager2.addElement(elem);
}

const form2 = new FormController(data.rowspanFormFieldList, manager2)
// rowspanos formnal nem kell semmit pluszba csinalni, csak uj peldanyt letrehozni