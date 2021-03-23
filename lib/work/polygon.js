"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

var Polygon = function () {
  function Polygon(lengths) {
    _classCallCheck(this, Polygon);

    this.lengths = lengths;
  }

  _createClass(Polygon, [{
    key: "perimeter",
    value: function perimeter() {
      var sum = 0;

      for (var i = 0; i < this.lengths.length; i++) {
        sum += this.lengths[i];
      }

      return sum;
    }
  }]);

  return Polygon;
}();

var rectangle = new Polygon([10, 20, 10, 20]);
var square = new Polygon([10, 10, 10, 10]);
var pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());