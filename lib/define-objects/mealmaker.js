"use strict";

var menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],

    get appetizers() {
      return this._appetizers;
    },
    set appetizers(appetizersIn) {
      this._appetizers = appetizersIn;
    },
    get mains() {
      return this._mains;
    },
    set mains(mainsIn) {
      this._mains = mainsIn;
    },
    get desserts() {
      return this._desserts;
    },
    set desserts(dessertsIn) {
      this._desserts = dessertsIn;
    }
  },

  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    };
  },

  addDishToCourse: function addDishToCourse(courseName, dishName, dishPrice) {
    var dish = {
      name: dishName,
      price: dishPrice
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse: function getRandomDishFromCourse(courseName) {
    var dishes = this._courses[courseName];
    var randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal: function generateRandomMeal() {
    var appetizer = this.getRandomDishFromCourse("appetizers");
    var main = this.getRandomDishFromCourse("mains");
    var dessert = this.getRandomDishFromCourse("desserts");
    var totalPrice = appetizer.price + main.price + dessert.price;

    return "Your meal is " + appetizer.name + ", " + main.name + ", " + dessert.name + ". The price is " + totalPrice + ".";
  }
};

menu.addDishToCourse("appetizers", "Ceasar Salad", 4.25);
menu.addDishToCourse("appetizers", "Prawn Coctail", 4.25);
menu.addDishToCourse("appetizers", "Garlic Bread", 3.5);

menu.addDishToCourse("mains", "Lasagna", 9.75);
menu.addDishToCourse("mains", "Ribeye Steak", 14.95);
menu.addDishToCourse("mains", "Fish & Chips", 12.95);

menu.addDishToCourse("desserts", "Cheese Cake", 4.5);
menu.addDishToCourse("desserts", "Creme Brule", 4.25);
menu.addDishToCourse("desserts", "Cheese Board", 3.25);

var meal = menu.generateRandomMeal();

console.log(meal);