class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  // getters/setters
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  set isCheckedOut(isCheckedOut) {
    this._isCheckedOut = isCheckedOut;
  }

  // methods
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating() {
    let sum = this._ratings.reduce((currSum, rating) => currSum + rating, 0);
    const arrLength = this._ratings.length;
    let average = sum / arrLength;
    return average;
  }
  addRating(newRating) {
    if (newRating >= 1 && newRating <= 5) {
      this.ratings.push(newRating);
    } else {
      console.log("Error, invalid input! Try number between 1 - 5.");
    }
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(artist, title, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
  // TODO: Create a method called shuffle for the CD class. The method returns a randomly sorted array of all the songs in the songs property.
  static shuffle() {
    const songShuffle = Math.floor(Math.random() * this.songs.length);
    return songShuffle;
  }
}

// TODO: Create class called Catalog that holds all of the Media items in our library.
class Catalog extends Media {
  constructor(title, mediaType) {
    super(title);
    this._mediaType = mediaType;
  }
  get mediaType() {
    return this._mediaType;
  }
}

const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everything",
  544
);

console.log(historyOfEverything);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());
console.log(historyOfEverything);

const speed = new Movie("Jan de Bont", "Speed", 116);

console.log(speed);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
console.log(speed);
