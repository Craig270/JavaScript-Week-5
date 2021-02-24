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

// Try, Catch and finally. Error handeling.
try {
  list.push("Hello");
  console.log(`goobye`);
} catch (err) {
  console.log(err);
}

console.log("goodbye");
*/

class Player {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }

  describe() {
    return `${this.name} players ${this.position}`;
  }
}

class Team {
  constructor(name) {
    this.name = name;
    this.players = [];
  }

  addPlayer(player) {
    if (player instanceof Player) {
      this.players.push(player);
    } else {
      throw new Error(
        `You can only add instance of Player. Argument is not a player: ${player}`
      );
    }
  }
  describe() {
    return `${this.name} has ${this.players.length} players.`;
  }
}

class Menu {
  constructor() {
    this.teams = [];
    this.selected = null;
  }
  start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
      switch (selection) {
        case "1":
          this.createTeam();
          break;
        case "2":
          this.viewTeam();
          break;
        case "3":
          this.deleteTeam();
          break;
        case "4":
          this.displayTeams();
          break;
        default:
          selection = 0;
      }
      selection = this.showMainMenuOptions();
    }
    alert(`Goodbye!`);
  }
  showMainMenuOptions() {
    return prompt(`
        0) exit
        1) create new team
        2) view team
        3) delete team
        4) display all teams
      `);
  }
  displayTeams() {
    let teamString = "";
    for (let i = 0; i < this.teams.length; i++) {
      teamString += i + ") " + this.teams[i].name + " \n";
    }
    alert(teamString);
  }
  createTeam() {
    let name = prompt(`Enter name for new team`);
    this.teams.push(new Team(name));
  }

  viewTeam() {
      let index = prompt('Enter the index of the team you wish to view')
      if (index > -1)
  }
}
