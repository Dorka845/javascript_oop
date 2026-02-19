/**
 * @import { FormFieldType, HeaderArrayType, ColspanType, RowspanType } from "./functions.js"
 * @callback addCallback
 * @param {ColspanType | RowspanType} element
 * @returns {void}
 */

class Manager{
    /**
     * @type {ColspanType[] | RowspanType[]}
     */
    #dataArray;

    /**
     * @type {addCallback}
     */
    #addCallback;

    constructor() {
        this.#dataArray = [];
    }

    
    /**
     * @param {ColspanType | RowspanType} param 
     */
    addElement(param) {
        this.#dataArray.push(param);
        if (this.#addCallback) {
            this.#addCallback(param);
        }
    }

    /**
     * @param {addCallback} param
     */
    set addCallback(param){
        this.#addCallback = param;
    }
}

export { Manager }