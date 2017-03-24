//const user = {};
//module.exports = user;

// Three ways to write an export
// Create an object and assign module.exports that object
//var obj = {}
//module.exports = obj;

// Assign a new object to module.exports
//module.exports = {
    
//}

// Assign an empty object to module.exports and then fill it up later
//module.exports = {};
//module.exports.name = ""

module.exports = {
  name: "Christian",
  location: '500 S Ervay, Dallas, TX',
  occupations: ["financier", "web developer"],
  hobbies: [
    {
      name: 'Fishing',
      type: 'leisure'
    },
    {
      name: 'Zombie Killer',
      type: 'defense'
    },
    {
      name: 'Reading',
      type: 'education'
    }
  ],
  family: [
    {
      name: 'Brian',
      relation: 'brother',
      gender: 'male'
    },
    {
      name: 'Ben',
      relation: 'father',
      gender: 'male'
    },{
      name: 'Jessica',
      relation: 'sister',
      gender: 'female'
    }
  ],
  restaurants: [
    {
      name: "Chili's",
      type: "American",
      rating: 4
    },
    {
      name: "Benihana's",
      type: "Japanese",
      rating: 9
    },
    {
      name: "Outback",
      type: "Australian",
      rating: 8
    }
  ]
}
