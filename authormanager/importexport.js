import { ViewElement } from "./viewelement.js";
import { AuthorManager } from "./manager.js";

class ImportExport extends ViewElement {
    /**
     * @type {AuthorManager}
     */
    #manager;
    /**
     * 
     * @param {string} id 
     * @param {AuthorManager} manager 
     */
    constructor(id, manager) {
        super(id);
        this.#manager = manager;
        const resultDiv = document.createElement('div');
        this.div.appendChild(resultDiv);
        this.#manager.importResultCallback = (message) => {
            resultDiv.innerText = message;
            setTimeout(()=> {
                resultDiv.innerText = '';
            }, 1500)
        }
        const importInput = document.createElement('input');
        importInput.type = 'file';
        this.div.appendChild(importInput);

        importInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                /**
                 * @type {import("./index.js").AuthorType[]}
                 */
                const result = [];
                const fileContent = reader.result;
                const fileContentLines = fileContent.split('\n');
                for(const fileLine of fileContentLines) {
                    const currentRowData = fileLine.split(';');
                    /**
                     * @type {import("./index.js").AuthorType}
                     */
                    const authorType = {
                        author: currentRowData[0],
                        work: currentRowData[1],
                        concept: currentRowData[2]
                    }
                    result.push(authorType);
                }
                this.#manager.addElementList(result);
            }
            reader.readAsText(file, 'UTF-8');
        })
        const exportButton = document.createElement('button');
        exportButton.innerText = 'export';
        this.div.appendChild(exportButton);
        exportButton.addEventListener('click', () => {
            const a = document.createElement('a');
            const content = this.#manager.getExportContent();
            const file = new Blob([content]);
            const url = URL.createObjectURL(file);
            a.href = url;
            a.download = 'export.csv';
            a.click();
            URL.revokeObjectURL(a.href);
        })
    }
}

export {ImportExport}