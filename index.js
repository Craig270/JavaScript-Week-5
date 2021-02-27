"use strict";

//this app takes is for stocking and unstocking a vitural candy-store shelf that can only hold 10 products before needing to add another shelf.

///SHelves are the team and the Candy is the players from the video. Think of it that way.
class CandyProduct {
  constructor(name) {
    this.name = name;
  }
  describe() {
    console.log(
      `This candy is, ${this.name}. ${this.name} is a ${this.type} type of candy.`
    );
  }
}

class TenItemShelf {
  constructor() {
    this.heldCandyObjects = [];
  }
  itemsOnShelf() {
    for (let candyObject of this.heldCandyObjects) {
      console.log(candyObject);
    }
  }
  addCandyProduct(candyBeingAdded) {
    if (candyBeingAdded instanceof CandyProduct) {
      this.TenItemShelf.heldCandyObjects.push(candyBeingAdded);
    } else {
      throw new Error(
        `You can only add instance of CandyProduct. Argument is not an instance of CandyProduct: ${CandyProduct}`
      );
    }
  }
  removeCandyProduct(candyToRemove) {
    let candyToBeRemoved = this.heldCandyObjects.find(
      (element) => element == candyToRemove
    );
    deleteHere = this.heldCandyObjects.indexOf(candyToBeRemoved);
    let nuked = this.heldCandyObjects.splice(deleteHere, 1);
    console.log(`You have removed ${nuked} from your candy shelf `);
  }
}

// skittles.describe();
// let shelf1 = new TenItemShelf();

// //creating 10 candy objects from the CandyProduc class
// let skittles = new CandyProduct("skittles", "hard candy");
// let mm =
// let snikers =
// let twix =

class Menu extends TenItemShelf {
  constructor() {
    this.candyProduct = [];
    this.selectedShelf = null;
  }

  start() {
    let selection = this.showMainMenu();
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
      selection = this.showMainMenu();
    }
    alert(`Goodbye!`);
  }

  showMainMenu() {
    return prompt(`
            0) exit
            1) create new shelf
            2) view shelf
            3) delete shelf
            4) show all shelves
          `);
  }

  creatNewShelf() {
    shelfName = prompt(`What do you want to call this shelf?`);
  }

  createNewCandy() {
    let name = prompt(`Enter name for new candy you are adding`);
    this.teams.push(new CandyProduct(name));
  }
}
