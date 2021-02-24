"use strict";

class Student {
  constructor(firstName, lastName, phoneNumber, grade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.grade = grade;
  }
  introduce() {
    console.log(
      `${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber} and has a grade of ${this.grade} in our class.`
    );
    console.log("\n");
  }
}

let student1 = new Student("Craig", "Neff", "303-905-3008", "A");

let student2 = new Student("Jennifer", "Neff", "7209849202", "A");

student1.introduce();
student2.introduce();
