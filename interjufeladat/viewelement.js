class ViewElement {
    /**
     * @type {SelectManager}
     */
    #manager;

    /**
     * @type {HTMLDivElement}
     */
    #container

    constructor(manager) {
        this.manager = manager;
    }

    /**
     * 
     * @param {HtmlElement} parent 
     */
    appendTo(parent) {
        parent.appendChild(this.#container);
    }
}