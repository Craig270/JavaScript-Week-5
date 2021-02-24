"use strict";
/*
//Creating a class and how the constructor works. 

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

// Inheritance with extends to take in what another class has. Add extends then the name of the class to inherit its properties and methods. 

class NotificationSender {
  constructor(status) {
    this.status = status;
  }
  sendNotification(notification) {
    console.log(`Sending: ` + notification);
  }

  findUserWithStatus(status) {
    let users = getUsers(status);
    return users;
  }
}

class PromotionSenter extends NotificationSender {
  constructor(status) {
    super(status);
  }

  calculateDiscount(status) {
    if (status === "GOLD") {
      return 0.3;
    }
    if (status === "SILVER") {
      return 0.15;
    }
    return 0;
  }
}

class CollectionsSender extends NotificationSender {
  constructor(status) {
    super(status);
  }

  calculateFee(status) {
    if (status === "OVERDUE") {
      return 10;
    }
    if (status === "DXELIQUENT") {
      return 25;
    }
    return 5;
  }
}

let collection1 = new CollectionsSender("OVERDUE");
collection1.sendNotification(`This is a test collection notification`);
*/
// Try, Catch and finally. Error handeling.
try {
  list.push("Hello");
  console.log(`goobye`);
} catch (err) {
  console.log(err);
}

console.log("goodbye");
