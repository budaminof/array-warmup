var people = [{name:'A', age: 20}, {name:'B', age: 30}, {}, {name:'', age: 10}];

function removeBadPeople () {
  var name = [];
  for (var i = 0; i < people.length; i++) {
    if (typeof people[i].name == 'string' && people[i].name !== '') {
      name.push(people[i]);
    }
  } return name;
}

function sumAgesValid() {
  var age= [];
  for (var i = 0; i < people.length; i++) {
    if(typeof people[i].age == 'number' && typeof people[i].name == 'string' && people[i].name !== '' ) {
      age.push(people[i].age);
    }
  }
  var sum = 0;
  for (var i = 0; i < age.length; i++) {
    sum += age[i];
  }
  return sum;
}


function sumAgesAll() {
  var ageAll= [];
  for (var i = 0; i < people.length; i++) {
    if(typeof people[i].age == 'number') {
      ageAll.push(people[i].age);
    }
  }
  var sum = 0;
  for (var i = 0; i < ageAll.length; i++) {
    sum += ageAll[i];
  }
  return sum;
}

console.log(removeBadPeople(people));
// => [{name:'A', age: 20}, {name:'B', age: 30}];

console.log(sumAgesValid(people));
// // => 50
//
console.log(sumAgesAll(people));
// // => 60
