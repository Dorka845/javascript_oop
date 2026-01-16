class Student {
    constructor(name) {
        this.name = name;
        this.askedQuestionNumber = 0;
    }

    askedQuestion() {
        this.askedQuestionNumber++;
    }
}

const stu1 = new Student('Dorka');
stu1.askedQuestion();
console.log(stu1);

class StudentWithWork extends Student{
    constructor(name) {
        super(name);
        this.workDone = 0;
    }

    doWork() {
        this.workDone++;
    }
}

const stu2 = new StudentWithWork('Halele');
stu2.doWork();
console.log(stu2);