/** 
 * @typedef {{author: string, title1: string, concepts1: string, title2?: string,  concepts2?: string}} RowspanRowType  
 * @typedef {{author: string, title: string, concepts: string, concepts2?: string}} ColspanRowType
 * @typedef {{name: string, colSpan?: number}} HeaderType
*/

/** @type {HeaderType[]}  */
const rowspanHeaderArr = [{name: "Szerző"}, {name: "Mű"}, {name: "Fogalmak"}] 
/** @type {HeaderType[]}   */
const colspanHeaderArr = [{name: "Szerző"},{name: "Mű"} , {name: "Fogalmak" ,colSpan: 2}] 

/** @type {RowspanRowType[]}  */
const rowspanBodyArr = [
    {
        author: "Appolliniare",
        title1: "A megsebzett galamb és a szökőkút", 
        concepts1: "képvers", 
        title2: "Búcsú",
        concepts2: "avantgárd" 
    },
    {
        author: "Thomas Mann",
        title1: "Mario és a varázsló",
        concepts1: "kisregény" 
    },
    {
        author: "Franz Kafka",
        title1: "A per", 
        concepts1: "képvers", 
        title2: "Az átvlátozás", 
        concepts2: "kisregény" 
    }
]



/** @type {ColspanRowType[]} */
const colspanBodyArr = [ 
    {
        author: "Appolliniare", 
        title: "A megsebzett galamb és a szökőkút",
        concepts: "Képvers",  
        concepts2: "Emlékezés", 
    },
    {
        author: "Appolliniare", 
        title: "Búcsú", 
        concepts: "Avantgárd" 
    },
    {
        author: "Thomas Mann", 
        title: "Mario és a varázsló", 
        concepts: "Kisregény" 
    },
    {
        author: "Franz Kafka",
        title: "A per", 
        concepts: "regény" 
    },
    {
        author: "Franz Kafka", 
        title: "Az átváltozás",
        concepts: "kisregény", 
        concepts2: "groteszk" 
    }
]

// renderColspanBody(makeTableBodyWithHeader(colspanHeaderArr), colspanBodyArr)
// renderRowspanBody(makeTableBodyWithHeader(rowspanHeaderArr), rowspanBodyArr)

/**
 * @callback RenderRowCallback
 * @param {HTMLTableSectionElement}
 */
class Table {
    #tbody;

    get tbody() {
        return this.#tbody;
    }

    constructor(headerArr) {
        this.#tbody = makeTableBodyWithHeader(headerArr);
    }

    appendRow(callback) {
        callback(this.#tbody);
    }
}

class ColspanTable extends Table {
    constructor(headerArr) {
        super(headerArr);
    }

    render(colspanBodyArr) {
        renderColspanBody(this.tbody, colspanBodyArr);
    }
}

class RowspanTable extends Table {
    constructor(headerArr) {
        super(headerArr);
    }

    render(rowspanBodyArr) {
        renderRowspanBody(this.tbody, rowspanBodyArr);
    }
}

const colspanTable = new ColspanTable(colspanHeaderArr);
colspanTable.render(colspanBodyArr);

const rowspanTable = new RowspanTable(rowspanHeaderArr);
rowspanTable.render(rowspanBodyArr);

/*
function doSomething(callback) {
    callback(tbody);
}

doSomething(function(tableTorzs) {
    const tr = document.createElement('tr');
    tableTorzsa.appendChild(tr);
}) 
*/

const rowspanButton = document.createElement('button');
rowspanButton.innerText = "Rowspan hozzáadás";
document.body.appendChild(rowspanButton);

rowspanButton.addEventListener('click', function(e) {
    e.preventDefault();

    /**
     * @type {RowspanRowType}
     */
    const obj = {
        author: "Kolto",
        title1: "Cim 1",
        concepts1: "Concept 1",
        title2: "Cim 2",
        concepts2: "Concept 2"
    };

    rowspanTable.appendRow(function(body) {
        const tr = document.createElement('tr');
        body.appendChild(tr);

        const td1 = document.createElement('td');
        td1.innerText = obj.author;
        tr.appendChild(td1);

        const td2 = document.createElement('td');
        td2.innerText = obj.title1;
        tr.appendChild(td2);

        const td3 = document.createElement('td');
        td3.innerText = obj.concepts1;
        tr.appendChild(td3);
    })
})
 
function onClickButton(e) {
    e.preventDefault();

    /**
     * @type {RowspanRowType}
     */
    const obj = {
        author: "Kolto",
        title1: "Cim 1",
        concepts1: "Concept 1",
        title2: "Cim 2",
        concepts2: "Concept 2"
    };

    rowspanTable.appendRow(function(body) {
        const tr = document.createElement('tr');
        body.appendChild(tr);

        const td1 = document.createElement('td');
        td1.innerText = obj.author;
        tr.appendChild(td1);

        const td2 = document.createElement('td');
        td2.innerText = obj.title1;
        tr.appendChild(td2);

        const td3 = document.createElement('td');
        td3.innerText = obj.concepts1;
        tr.appendChild(td3);
    })
}