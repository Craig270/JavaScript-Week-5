"use strict";

//this app takes is for stocking and unstocking a vitural candy-store shelf that can only hold 10 products before needing to add another shelf.

// 4 types of candy. 1) Hard 2) Chocolate
// 3)Gummy  4) Beverage

class CandyProduct {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  describe() {
    console.log(
      `This candy is, ${this.name}. ${this.name} is a ${this.type}type of candy`
    );
    return this.name, this.type;
  }
}

let skittles = new CandyProduct("skittles", "hard candy");

//If you are creating a new shelf you need to put at least 1 item on it. Or you shouldn't be creating a new shelf.

class TenItemShelf {
  constructor(CandyProduct) {
    this.heldItems = [newItemOne];
  }
  itemsOnShelf() {
    console.log(
      `This is the items on shelf function for saying how many items are on the shelf.`
    );
  }
}

skittles.describe();

class Menu {
  constructor() {}
}
