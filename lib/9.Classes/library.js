"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Media = function () {
  function Media(title) {
    _classCallCheck(this, Media);

    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  // getters/setters


  _createClass(Media, [{
    key: "toggleCheckOutStatus",


    // methods
    value: function toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
  }, {
    key: "getAverageRating",
    value: function getAverageRating() {
      var sum = this._ratings.reduce(function (currSum, rating) {
        return currSum + rating;
      }, 0);
      var arrLength = this._ratings.length;
      var average = sum / arrLength;
      return average;
    }
  }, {
    key: "addRating",
    value: function addRating(newRating) {
      if (newRating >= 1 && newRating <= 5) {
        this.ratings.push(newRating);
      } else {
        console.log("Error, invalid input! Try number between 1 - 5.");
      }
    }
  }, {
    key: "title",
    get: function get() {
      return this._title;
    }
  }, {
    key: "isCheckedOut",
    get: function get() {
      return this._isCheckedOut;
    },
    set: function set(isCheckedOut) {
      this._isCheckedOut = isCheckedOut;
    }
  }, {
    key: "ratings",
    get: function get() {
      return this._ratings;
    }
  }]);

  return Media;
}();

var Book = function (_Media) {
  _inherits(Book, _Media);

  function Book(author, title, pages) {
    _classCallCheck(this, Book);

    var _this = _possibleConstructorReturn(this, (Book.__proto__ || Object.getPrototypeOf(Book)).call(this, title));

    _this._author = author;
    _this._pages = pages;
    return _this;
  }

  _createClass(Book, [{
    key: "author",
    get: function get() {
      return this._author;
    }
  }, {
    key: "pages",
    get: function get() {
      return this._pages;
    }
  }]);

  return Book;
}(Media);

var Movie = function (_Media2) {
  _inherits(Movie, _Media2);

  function Movie(director, title, runTime) {
    _classCallCheck(this, Movie);

    var _this2 = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this, title));

    _this2._director = director;
    _this2._runTime = runTime;
    return _this2;
  }

  _createClass(Movie, [{
    key: "director",
    get: function get() {
      return this._director;
    }
  }, {
    key: "runTime",
    get: function get() {
      return this._runTime;
    }
  }]);

  return Movie;
}(Media);

var CD = function (_Media3) {
  _inherits(CD, _Media3);

  function CD(artist, title, songs) {
    _classCallCheck(this, CD);

    var _this3 = _possibleConstructorReturn(this, (CD.__proto__ || Object.getPrototypeOf(CD)).call(this, title));

    _this3._artist = artist;
    _this3._songs = songs;
    return _this3;
  }

  _createClass(CD, [{
    key: "artist",
    get: function get() {
      return this._artist;
    }
  }, {
    key: "songs",
    get: function get() {
      return this._songs;
    }
    // TODO: Create a method called shuffle for the CD class. The method returns a randomly sorted array of all the songs in the songs property.

  }], [{
    key: "shuffle",
    value: function shuffle() {
      var songShuffle = Math.floor(Math.random() * this.songs.length);
      return songShuffle;
    }
  }]);

  return CD;
}(Media);

// TODO: Create class called Catalog that holds all of the Media items in our library.


var Catalog = function (_Media4) {
  _inherits(Catalog, _Media4);

  function Catalog(title, mediaType) {
    _classCallCheck(this, Catalog);

    var _this4 = _possibleConstructorReturn(this, (Catalog.__proto__ || Object.getPrototypeOf(Catalog)).call(this, title));

    _this4._mediaType = mediaType;
    return _this4;
  }

  _createClass(Catalog, [{
    key: "mediaType",
    get: function get() {
      return this._mediaType;
    }
  }]);

  return Catalog;
}(Media);

var historyOfEverything = new Book("Bill Bryson", "A Short History of Nearly Everything", 544);

console.log(historyOfEverything);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());
console.log(historyOfEverything);

var speed = new Movie("Jan de Bont", "Speed", 116);

console.log(speed);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
console.log(speed);