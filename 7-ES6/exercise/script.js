/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class TownElement {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends TownElement {
  constructor(name, buildYear, trees, area) {
    super(name, buildYear);
    this.trees = trees;
    this.area = area;
  }

  calcDensity() {
    const density = this.trees / this.area;
    console.log(
      `${this.name} has a tree density of ${density} trees per square km.`
    );
  }
}

class Street extends TownElement {
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  classifyStreet() {
    const classification = new Map();
    classification.set(1, "tiny");
    classification.set(2, "small");
    classification.set(3, "normal");
    classification.set(4, "big");
    classification.set(5, "huge");
    console.log(
      `${this.name}, build in ${this.buildYear} is a ${classification.get(
        this.size
      )} street.`
    );
  }
}

const allParks = [
  new Park("Park One", 1990, 215, 0.2),
  new Park("Park Two", 1890, 3541, 2.9),
  new Park("Park Three", 1953, 949, 0.4)
];

const allStreet = [
  new Street("Street One", 1999, 1.1, 4),
  new Street("Street Two", 2008, 2.7, 2),
  new Street("Street Three", 2015, 0.8),
  new Street("Street Four", 1982, 2.5, 5)
];

function calc(array) {
  const sum = array.reduce((prev, cur) => prev + cur, 0);
  return [sum, sum / array.length];
}

function reportParks(p) {
  console.log("-- Parks Reports --");
  // density
  p.forEach(el => el.calcDensity());

  // Average age
  const ages = p.map(el => new Date().getFullYear() - el.buildYear);
  const [totalAge, avAge] = calc(ages);
  console.log(`Our ${p.length} parks have an average of ${avAge} years.`);

  // more than 1000 trees
  const i = p.map(el => el.trees).findIndex(el => el >= 1000);
  console.log(`${p[i].name} has more than 1000 trees.`);
}

function reportStreets(s) {
  console.log("-- Streets Reports --");

  // total and average length
  const [totalLength, avgLength] = calc(s.map(el => el.length));
  console.log(
    `Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`
  );

  // classify sizes
  s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreet);
