// Exercises

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// Array.prototype.filter()
// 1. Filter the array of inventors into a new array containing only the inventors born in the 1500's

const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.log(fifteen);

// Array.prototype.map()
// 2. Map the array of the inventors into a new array containing objects with just the first and last names as properties
// Hint:  Return a new object literal from the callback (don't mutate the object being passed in to map)

const fullNames = inventors.map(inventor => {
  return {
  first: inventor.first,
  last: inventor.last
  };
}); // DO NOT FORGET THE CLOSING PARAN
 console.log(fullNames)

// Array.prototype.sort()
// 3. Sort the inventors by birth date (year property), in ascending order

// MDN sort method:/* The sort() method sorts the elements of an array in place and returns the array. The sort is not necessarily stable. The default sort order is according to string Unicode code points.

// function compareFn(a, b) {
//   if (a is less than b by some ordering criterion) {
//     return -1;
//   }
//   if (a is greater than b by the ordering criterion) {
//     return 1;
//   }
//   // a must be equal to b
//   return 0;
// }

const sorted = inventors.sort((a, b) => {
  if (a.year < b.year) {
  return -1;
 } else {
  return 1; 
 }
 });
console.log(sorted)


// Array.prototype.find()
// 4. Find the inventor object with the first name of 'Ada'

const ada = inventors.find(inventor => inventor.first === 'Ada')

console.log(ada);

// Array.prototype.reduce()
// 5. How many years did all the inventors live?

//Is this question how many years each inventor lived, or total number off all of them combined?
//Do I have to use acc, is that something given like 'this' or can I use anything? 

const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears)



const people = [
  'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
  'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
  'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
  'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
  'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
  'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
  'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
  'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
  'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
  'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony',
  'Blake, William'
];

// Array.prototype.map()
// 6. Map the people array such that the new array consists of strings with the names formatted as "First Last", e.g., "Becker, Carl" should be mapped to "Carl Becker".
// Hint: As a start, consider using the String.prototype.split method to "split" the string using ', ' as the separator

// MDN examples wouldnt work but I have a plan:
// when we use split in person, we get array with first and last name.
// First element of the array is person[0] and last is person[1].(last name and first name)
// then we just concatenate the last name and first name to get full name.

const peopleMapped = people.map(person => {
  return person.split(', ')[1] + ' ' + person.split(', ')[0]
})

console.log(peopleMapped)

const data = [
  'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van',
  'bike', 'walk', 'car', 'van', 'car', 'truck'
];

// Array.prototype.reduce()
// 7. Count the number of instances for each of the data items. The reduce should return an object where the keys are 'car', 'truck', etc. and the values are the count.
// Hint: Since you want to return an object, be sure to pass an empty {} for the initial value of the "accumulator".

// I will copy and paste this from daily coding chalanges :p

const dataCount = data.reduce((acc, count) => {
	
  acc[count] = acc[count] ? acc[count]++ : acc[count] = 1;
		return acc;
	}, {});
console.log(dataCount)



const devs = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

// Array.prototype.some()
// 8. Check if at least one person is 19 or older?
// Hint: To get today's year, use the getFullYear method of new Date(), i.e., new Date().getFullYear()

const today = new Date().getFullYear();
const isAdult = devs.some(({year}) => today - year >= 19);
console.log(isAdult);

// Array.prototype.every()
// 9. Check if everyone is 19 or older?

const allAdult = devs.every(({year}) => today - year >= 19);
console.log(allAdult);


const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Array.prototype.find()
// 10. Find the comment with the id of 823423

const foundIt = comments.find((comment) => comment.id === 823423);
console.log(foundIt);

// Array.prototype.findIndex()
// 11. Find the index of the comment with an id of 123523

const idIdx =comments.findIndex((comment) => comment.id === 123523);
console.log(idIdx);






// Verify console.log Output
// [ { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//   { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 } ]

// [ { first: 'Albert', last: 'Einstein' },
//   { first: 'Isaac', last: 'Newton' },
//   { first: 'Galileo', last: 'Galilei' },
//   { first: 'Marie', last: 'Curie' },
//   { first: 'Johannes', last: 'Kepler' },
//   { first: 'Nicolaus', last: 'Copernicus' },
//   { first: 'Max', last: 'Planck' },
//   { first: 'Katherine', last: 'Blodgett' },
//   { first: 'Ada', last: 'Lovelace' },
//   { first: 'Sarah E.', last: 'Goode' },
//   { first: 'Lise', last: 'Meitner' },
//   { first: 'Hanna', last: 'Hammarström' } ]

// [ { first: 'Nicolaus',
//     last: 'Copernicus',
//     year: 1473,
//     passed: 1543 },
//   { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//   { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
//   { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
//   { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
//   { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
//   { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
//   { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
//   { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
//   { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
//   { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
//   { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 } ]

// { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 }

// 861

// [ 'Carl Becker',
//   'Samuel Beckett',
//   'Mick Beddoes',
//   'Henry Beecher',
//   'Ludwig Beethoven',
//   'Menachem Begin',
//   'Hilaire Belloc',
//   'Saul Bellow',
//   'Robert Benchley',
//   'Peter Benenson',
//   'David Ben-Gurion',
//   'Walter Benjamin',
//   'Tony Benn',
//   'Chester Bennington',
//   'Leana Benson',
//   'Silas Bent',
//   'Lloyd Bentsen',
//   'Ric Berger',
//   'Ingmar Bergman',
//   'Luciano Berio',
//   'Milton Berle',
//   'Irving Berlin',
//   'Eric Berne',
//   'Sandra Bernhard',
//   'Yogi Berra',
//   'Halle Berry',
//   'Wendell Berry',
//   'Erin Bethea',
//   'Aneurin Bevan',
//   'Ken Bevel',
//   'Joseph Biden',
//   'Ambrose Bierce',
//   'Steve Biko',
//   'Josh Billings',
//   'Frank Biondo',
//   'Augustine Birrell',
//   'Elk Black',
//   'Robert Blair',
//   'Tony Blair',
//   'William Blake' ]

// { car: 5, truck: 3, bike: 2, walk: 2, van: 2 }

// true

// false

// { text: 'Super good', id: 823423 }

// 3