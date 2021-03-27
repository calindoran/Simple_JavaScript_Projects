"use strict";

//sets name as a constant with val kelvin, unchangeable
var kelvin = 293;

//sets cel to kelvin - 273
var celsius = kelvin - 273;

//use previous variables to calc fah
var fahrenheit = celsius * (9 / 5) + 32;

//use Math.floor to round fah value
fahrenheit = Math.floor(fahrenheit);
console.log("The temperature is " + fahrenheit + " degrees Fahrenheit.");

var newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log("The temperature is " + newton + " degrees Newton.");