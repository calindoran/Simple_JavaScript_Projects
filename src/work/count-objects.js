/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */

let objectArray = [
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2012-02-03"),
    capacity: 7,
  },
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2012-02-03"),
    capacity: 7,
  },
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2012-02-03"),
    capacity: 7,
  },
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2012-02-03"),
    capacity: 7,
  },
];

function getCount(objects) {
  let count = 0;

  objects.forEach((o, x, y) => {
    if (o.x == o.y) {
      count++;
    }
  });

  return count;
}

getCount(objectArray);

//console.log(objectArray);
