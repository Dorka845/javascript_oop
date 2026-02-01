/** 
 * @typedef {{author: string, title1: string, concepts1: string, title2?: string,  concepts2?: string}} RowspanRowType  
 * @typedef {{author: string, title: string, concepts: string, concepts2?: string}} ColspanRowType
 * @typedef {{name: string, colSpan?: number}} HeaderType
 * 
 * @callback RenderRowCallback
 * @param {HTMLTableSectionElement} tbody
 * @returns {void}
 *
 * @callback AppendRowCallback
 * @param {HTMLTableSectionElement} tbody
 * @returns {void}
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
 * @param {HeaderType[]} headerArr
 */
class Table {
    #tbody;

    get tbody() {
        return this.#tbody;
    }

    constructor(headerArr) {
        this.#tbody = makeTableBodyWithHeader(headerArr);
    }

    /**
    * @param {AppendRowCallback} callback
    */
    appendRow(callback) {
        callback(this.#tbody);
    }
}

class ColspanTable extends Table {
    constructor(headerArr) {
        super(headerArr);
    }

    /**
    * @param {ColspanRowType[]} bodyArr
    */
    render(bodyArr) {
        renderColspanBody(this.tbody, bodyArr);
    }
}

class RowspanTable extends Table {
    constructor(headerArr) {
        super(headerArr);
    }

    /**
    * @param {RowspanRowType[]} bodyArr
    */
    render(bodyArr) {
        renderRowspanBody(this.tbody, bodyArr);
    }
}

const colspanTable = new ColspanTable(colspanHeaderArr);
colspanTable.render(colspanBodyArr);

const rowspanTable = new RowspanTable(rowspanHeaderArr);
rowspanTable.render(rowspanBodyArr);

/**
 * gomb letrehozo fuggveny
 * @param {string} text
 * @returns {HTMLButtonElement}
 */
function buttonCreater(text) {
    const button = document.createElement("button");
    button.innerText = text;
    document.body.appendChild(button);
    return button;
}

const rowspanButton = buttonCreater("Rowspan elem hozzáadása");
const colspanButton = buttonCreater("Colspan elem hozzáadása");

rowspanButton.addEventListener("click", onClickRowSpanButton.bind(rowspanTable));
colspanButton.addEventListener("click", onClickColSpanButton.bind(colspanTable));

/**
 * gomb lenyomasakor hozzafuzi az objektumban megadott sort a rowspanos tablazathoz
 * @this {RowspanTable}
 * @param {Event} e
 */
function onClickRowSpanButton(e) {
    e.preventDefault();

    /** @type {RowspanRowType} */
    const objektum = {
        author: "Kolto",
        title1: "Cim 1",
        concepts1: "Concept 1",
        title2: "Cim 2",
        concepts2: "Concept 2",
    };

    this.appendRow(
        /** @type {RenderRowCallback} */
        function (body) {
            const tr = document.createElement("tr");
            body.appendChild(tr);

            const td1 = document.createElement("td");
            tr.appendChild(td1);
            td1.innerText = objektum.author;

            const td2 = document.createElement("td");
            tr.appendChild(td2);
            td2.innerText = objektum.title1;

            const td3 = document.createElement("td");
            tr.appendChild(td3);
            td3.innerText = objektum.concepts1;

            if (objektum.title2 && objektum.concepts2) {
                td1.rowSpan = 2;

                const tr2 = document.createElement("tr");
                body.appendChild(tr2);

                const td4 = document.createElement("td");
                tr2.appendChild(td4);
                td4.innerText = objektum.title2;

                const td5 = document.createElement("td");
                tr2.appendChild(td5);
                td5.innerText = objektum.concepts2;
            }
        }
    );
}

/**
 * gomb lenyomasakor hozzafuzi az objektumban megadott sort a colspanos tablazathoz
 * @this {ColspanTable}
 * @param {Event} e
 */
function onClickColSpanButton(e) {
    e.preventDefault();

    /** @type {ColspanRowType} */
    const objektum = {
        author: "Kolto",
        title: "Cim 1",
        concepts: "Concept 1",
        concepts2: "Concept 2",
    };

    this.appendRow(
        /** @type {RenderRowCallback} */
        function (body) {
            const tr = document.createElement("tr");
            body.appendChild(tr);

            const td1 = document.createElement("td");
            tr.appendChild(td1);
            td1.innerText = objektum.author;

            const td2 = document.createElement("td");
            tr.appendChild(td2);
                td2.innerText = objektum.title;

            const td3 = document.createElement("td");
            tr.appendChild(td3);
            td3.innerText = objektum.concepts;

            if (objektum.concepts2) {
                const td4 = document.createElement("td");
                tr.appendChild(td4);
                td4.innerText = objektum.concepts2;
            }     else {
                td3.colSpan = 2;
            }
        }
    );
}