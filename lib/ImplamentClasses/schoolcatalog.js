"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var School = function () {
  function School(name, level, numberOfStudents) {
    _classCallCheck(this, School);

    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  _createClass(School, [{
    key: "quickFacts",
    value: function quickFacts() {
      console.log(this.name + " educates " + this.numberOfStudents + " students at the " + this.level + " school level.");
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }, {
    key: "level",
    get: function get() {
      return this._level;
    }
  }, {
    key: "numberOfStudents",
    get: function get() {
      return this._numberOfStudents;
    },
    set: function set(numberOfStudents) {
      if (typeof numberOfStudents === "number") {
        this._numberOfStudents = numberOfStudents;
      } else {
        //console.log('Invalid input: numberOfStudents must be set to a Number.');
        return "Invalid input: numberOfStudents must be set to a Number.";
      }
    }
  }], [{
    key: "pickSubstituteTeacher",
    value: function pickSubstituteTeacher(substituteTeachers) {
      var rand = Math.floor(substituteTeachers.length * Math.random() - 1);
      return substituteTeachers[rand];
    }
  }]);

  return School;
}();

// TODO: Add more properties to each class (averageTestScores, schoolOverview, etc.)


var Primary = function (_School) {
  _inherits(Primary, _School);

  function Primary(name, numberOfStudents, pickupPolicy) {
    _classCallCheck(this, Primary);

    var _this = _possibleConstructorReturn(this, (Primary.__proto__ || Object.getPrototypeOf(Primary)).call(this, name, "primary", numberOfStudents));

    _this._pickupPolicy = pickupPolicy;
    return _this;
  }

  _createClass(Primary, [{
    key: "pickupPolicy",
    get: function get() {
      return this._pickupPolicy;
    }
  }]);

  return Primary;
}(School);

// TODO: Create a middle school class


var Middle = function (_School2) {
  _inherits(Middle, _School2);

  function Middle(name, numberOfStudents) {
    _classCallCheck(this, Middle);

    return _possibleConstructorReturn(this, (Middle.__proto__ || Object.getPrototypeOf(Middle)).call(this, name, "middle", numberOfStudents));
  }

  return Middle;
}(School);

var High = function (_School3) {
  _inherits(High, _School3);

  function High(name, numberOfStudents, sportsTeams) {
    _classCallCheck(this, High);

    var _this3 = _possibleConstructorReturn(this, (High.__proto__ || Object.getPrototypeOf(High)).call(this, name, "high", numberOfStudents));

    _this3._sportsTeams = sportsTeams;
    return _this3;
  }

  _createClass(High, [{
    key: "sportsTeams",
    get: function get() {
      return this._sportsTeams;
      console.log(sportsTeams);
    }
  }]);

  return High;
}(School);

// TODO: Create a class called SchoolCatalog that holds a collection of schools. Create an instance of SchoolCatalog for primary, middle, and high schools.

var lorraineHansbury = new Primary("Lorraine Hansbury", 514, "Students must be picked up by a parent, guardian, or a family member over the age of 13.");
lorraineHansbury.quickFacts();

School.pickSubstituteTeacher(["Jamal Crawford", "Lou Williams", "J. R. Smith", "James Harden", "Jason Terry", "Manu Ginobli"]);

var alSmith = new High("Al E. Smith", 415, ["Baseball", "Basketball", "Volleyball", "Track and Field"]);
console.log(alSmith.sportsTeams);