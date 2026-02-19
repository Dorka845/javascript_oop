/**
 * @import { FormFieldType, HeaderArrayType, ColspanType, RowspanType } from "./functions.js"
 * 
 * @callback TableCallback
 * @param {HTMLTableSectionElement} tbody
 * @param {ColspanType | RowspanType} elem
 * @returns {void}
 */

import { Manager } from "./manager.js";

class Table{
    /**
     * @type {HTMLTableSectionElement}
     */
    #tbody;
    /**
     * @type {Manager}
     */
    #manager;
    // /**
    //  * @type {boolean} - valtozo hogy megnezzuk hogy a table-unk rowpsanos-e
    //  */
    // #isRowspan;

    /**
     * @param {HeaderArrayType} headerArray 
     * @param {Manager} manager 
     */
    constructor(headerArray, manager) {
        this.#manager = manager;

        // if ('szerzo2' in dataArray[0] && 'mu2' in dataArray[0] ) {
        //     this.#isRowspan = true;
        // } else {
        //     this.#isRowspan = false;
        // }

        const table = document.createElement('table');
        document.body.appendChild(table);

        const thead = document.createElement('thead');
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        table.appendChild(tbody);
        this.#tbody = tbody;

        const tr = document.createElement('tr');
        thead.appendChild(tr);

        for (const cell of headerArray) {
            const th = document.createElement('th');
            tr.appendChild(th);
            th.innerText = cell.name;

            if (cell.colspan == 2) {
                th.colSpan = 2;
            }
        }


        // for (const row of dataArray) {
        //     this.#addRow(row);
        // }
    }

    // /**
    //  * public manager calback fuggveny hogy meg tudjuk kulonboztetni a rowspanos es colspanos tsblazatot
    //  */
    // setManagerCallback() {
    //     this.#manager.addCallback = (element) => {
    //         this.#addRow(element);
    //     }
    // }


    // /**
    //  * hozzaadja a megfelelo formatumu sort 
    //  * @param {ColspanType | RowspanType} data 
    //  */
    // #addRow(data) {
    //     if (this.#isRowspan) {
    //         this.#addRowspanRow(data);
    //     }
    //     else {
    //         this.#addColspanRow(data);
    //     }
    // }

    // /**
    //  * Colspan típusú sor hozzaadasa
    //  * @param {ColspanType} data 
    //  */
    // #addColspanRow(data) {
    //     const tr = document.createElement('tr');
    //     this.#tbody.appendChild(tr);

    //     const tdNev = document.createElement('td');
    //     tdNev.innerText = data.neve;
    //     tr.appendChild(tdNev);

    //     const tdKor = document.createElement('td');
    //     tdKor.innerText = data.kor;
    //     tr.appendChild(tdKor);

    //     const tdSzerelme1 = document.createElement('td');
    //     tdSzerelme1.innerText = data.szerelme1;
    //     tr.appendChild(tdSzerelme1);

    //     if (data.szerelme2) {
    //         const tdSzerelme2 = document.createElement('td');
    //         tdSzerelme2.innerText = data.szerelme2;
    //         tr.appendChild(tdSzerelme2);
    //     } else {
    //         tdSzerelme1.colSpan = 2;
    //     }
    // }

    

    // /**
    //  * Rowspan tipusu sor hozzaadasa
    //  * @param {RowspanType} data 
    //  */
    // #addRowspanRow(data) {
    //     const tr1 = document.createElement('tr');
    //     this.#tbody.appendChild(tr1);

    //     const tdNemzet = document.createElement('td');
    //     tdNemzet.innerText = data.nemzet;
    //     tr1.appendChild(tdNemzet);

    //     const tdSzerzo = document.createElement('td');
    //     tdSzerzo.innerText = data.szerzo;
    //     tr1.appendChild(tdSzerzo);

    //     const tdMu = document.createElement('td');
    //     tdMu.innerText = data.mu;
    //     tr1.appendChild(tdMu);

    //     if (data.szerzo2 && data.mu2) {
    //         tdNemzet.rowSpan = 2;

    //         const tr2 = document.createElement('tr');
    //         this.#tbody.appendChild(tr2);

    //         const tdSzerzo2 = document.createElement('td');
    //         tdSzerzo2.innerText = data.szerzo2;
    //         tr2.appendChild(tdSzerzo2);

    //         const tdMu2 = document.createElement('td');
    //         tdMu2.innerText = data.mu2;
    //         tr2.appendChild(tdMu2);
    //     }
    // }


    /**
     * 
     * @param {TableCallback} tableCallback 
     */
    setAppendRow(tableCallback) {
        this.#manager.addCallback = (element) => {
            tableCallback(this.#tbody, element)
        }
    }
}

export { Table }

// public fuggveny a tablenek ami besetteli a callbackjet a managernek
// fuggetlenne teszi a table osztaly a colspan tablazattol