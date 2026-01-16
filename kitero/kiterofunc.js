function Student(nev) {
    this.name = nev;
    this.askedQuestionNumber = 0;
}

Student.prototype.askedQuestion = function() {
    console.log('???');
    this.askedQuestionNumber++;
}

function StudentWithWork(nev) {
    Student.call(this, nev);
    this.workDone = 0;
}

StudentWithWork.prototype.doWork = function() {
    this.workDone++;
}

Object.setPrototypeOf(StudentWithWork.prototype, Student.prototype);


const stu1 = new Student('Dorka');
const stu2 = new Student('Földvári');
const stu3 = new StudentWithWork('Pikachu');
const stu4 = new StudentWithWork('Halelas');

console.log(stu1);
console.log(stu2);

stu1.askedQuestion();
console.log(stu1);

stu3.askedQuestion();
console.log(stu3);

stu4.doWork();
console.log(stu4);