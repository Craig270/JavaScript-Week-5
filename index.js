"use strict";

//this app takes is for stocking and unstocking a vitural department store. You create a shelf then decide where in the store(location) that shelf is going to go. I put shelves in the electronics, foods and clothing department when I tested it. Feel free to make whatever store you want stocked with whatever products you want!

class Product {
  constructor(name) {
    this.name = name;
  }
  describe() {
    alert(`This product is: ${this.name}`);
  }
}

class StoreShelf {
  constructor(location) {
    this.location = location;
    this.products = [];
  }
  storeLocation() {
    alert(`This shelf is located in the ${location} section of the store.`);
  }
  addProduct(product) {
    if (product instanceof Product) {
      this.products.push(product);
    } else {
      throw new Error(
        `You can only add instance of the Product class here. Argument is not a player: ${product}`
      );
    }
  }
}

class Menu {
  constructor() {
    this.onSalesFloorShelves = []; //teams
    this.currentSelection = null; //selectedTeam
  }

  startApp() {
    let selection = this.showMainMenu();
    while (selection != 0) {
      switch (selection) {
        case "1":
          this.createShelf();
          break;
        case "2":
          this.viewShelf();
          break;
        case "3":
          this.deleteShelf();
          break;
        case "4":
          this.displayShelves();
          break;
        default:
          selection = 0;
      }
      selection = this.showMainMenu();
    }
    alert(`Thank you for visiting our virtual store builder!!`);
  }

  showMainMenu() {
    return prompt(`
    ---Welcome to this Virtual Store Simulator---
      0) Exit
      1) Create a new store shelf
      2) View products on shelf
      3) Delete shelf from virtual store
      4) Show all shelves currnetly on the sale 
      floor of the virtual store
      `);
  }

  showProductMenuOptions(shelfInfo) {
    return prompt(`
  0) Back
  1) Add new product
  2) Delete product
  ---------------------
  ${shelfInfo}`);
  }

  createShelf() {
    let name = prompt(`Enter the location for this shelf:`);
    this.onSalesFloorShelves.push(new StoreShelf(name));
  }

  viewShelf() {
    let index = prompt(
      `Enter the index of the shelf you wish to see the products on.`
    );
    if (index > -1 && index < this.onSalesFloorShelves.length) {
      this.currentSelection = this.onSalesFloorShelves[index];
      let description = `Shelf Location: ${this.currentSelection.location}
  Items on this shelf: \n`;
      for (let i = 0; i < this.currentSelection.products.length; i++) {
        description +=
          i + 1 + ") " + this.currentSelection.products[i].name + "\n";
      }
      let selection = this.showProductMenuOptions(description);
      switch (selection) {
        case "1":
          this.createProduct();
          break;
        case "2":
          this.deleteProduct();
      }
    }
  }
  deleteShelf() {
    let index = prompt(`Enter the index for the shelf you want to remove:`);
    if (index > -1 && index < this.onSalesFloorShelves.length) {
      this.onSalesFloorShelves.splice(index, 1);
    }
  }
  displayShelves() {
    let shelvesString = " ";
    for (let i = 0; i < this.onSalesFloorShelves.length; i++) {
      shelvesString +=
        i + 1 + "\n" + ") " + this.onSalesFloorShelves[i].location + "\n";
    }
    alert(shelvesString);
  }

  createProduct() {
    let name = prompt(`Enter the name of the product you would like to add`);
    this.currentSelection.products.push(new Product(name));
  }
  deleteProduct() {
    let index = prompt(
      `Please enter the INDEX for the product you would like to remove:`
    );
    if (index > -1 && index < this.currentSelection.products.length) {
      this.currentSelection.products.splice(index, 1);
    }
  }
}

let skittles = new Product("skittles");
let iceCream = new Product("ice cream");
let milk = new Product("milk");
let shelf1 = new StoreShelf("foods");
shelf1.addProduct(skittles);
shelf1.addProduct(iceCream);
shelf1.addProduct(milk);
console.log(shelf1.products[2]);
console.log("milk" in shelf1.products[2]);
