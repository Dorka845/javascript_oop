class SelectManager {
    /**
     * @type {number}
     */
    #questionNumber;

    /**
     * @type {QuestionType[]}
     */
    #questions;

    /**
     * @type {boolean}
     */
    #questionAnswers;

    /**
     * @type {NextQuestionCallback}
     */
    #nextQuestionCallback;

    /**
     * @type {FinishCallback}
     */
    #finishCallback;

    /**
     * 
     * @param {QuestionType[]} questions 
     */
    constructor(questions) {
        this.#questionNumber = 0;
        this.#questions = questions;
        this.#questionAnswers = [];
    }

    /**
     * @returns {void}
     */
    play() {
        
    }

    /**
     * @returns {void}
     */
    reset() {

    }

    /**
     * 
     * @param {boolean} answer 
     * @returns {void}
     */
    nextQuestion(answer) {

    }

    set nextQuestionCallback(NextQuestionCallback) {

    }

    set finishCallback(FinishCallback) {
        
    }
}