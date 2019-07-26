//Ex 1 convert csv to array
const csv_to_array = (data, delimiter = ',', omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map(v => v.split(delimiter));

//ex 2 csv to json
const CSV_to_JSON = (data, delimiter = ',') => {
  const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
  return data
    .slice(data.indexOf('\n') + 1)
    .split('\n')
    .map(v => {
      const values = v.split(delimiter);
      return titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {});
    });
};

//ex 3 object array to csv

//ex4 permutations generator 
const stringPermutations = str => {
  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
  return str
    .split('')
    .reduce(
      (acc, letter, i) =>
        acc.concat(stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),
      []
    );
};

//ex 5 hex color generator
var randomHex = function(){
	let options =[1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
	var hex = "#";
	for (let i =0; i <5; i++){
		var x = Math.floor((Math.random() * 15));	
		hex += options[x];
	}
	return hex;
}

//ex 6 group array of objects by returning array of a property
//a collection of fruit objects that each had a name, weight, color, cost, etc. 
//but wanted to get just an array of the names of the fruit.

//find the index of the key for each object, then return the index's value

var banana = {"name":"banana", "color":"yellow","cost":"0.5"};
var apple = {"name":"apple", "color":"red","cost":"1"};
var peach = {"name":"peach", "color":"peach","cost":"1.5"};

var fruits = [banana,apple,peach];

var fruitNames = fruits.map( fruit => fruit.name);

//EX 7 Unique values
var arr1 = ['one', 'two', 'three', 'four', 'one', 'four', 'three'];

var arr2 = new Set(arr1); //returns ['two'];
//https://www.w3resource.com/javascript-exercises/javascript-array-exercise-20.php
// function getUnique(arra1) {
//         var object = {};
//         var result = [];

//         arra1.forEach(function (item) {
//           if(!object[item])
//               object[item] = 0;
//             object[item] += 1;
//         })

//         for (var prop in object) {
//            if(object[prop] >= 2) {
//                result.push(prop);
//            }
//         }
//         return result;
//     }
    

//EX 8 Using classes and object oriented principles to create objects
// for the items defined below and show appropriate relationships for 
// all of them. 
//Locate shared functionalities and properties in appropriate base classes.

//Human, Monkey, Dog, Fish, Turtle, Frog, Toad, Corn, Cat, Whale

class Animal{
  constructor(name, genus){
      this._name = name;
      this._genus = genus;
  }
}

class Mammal extends Animal{
  constructor(name, genus){
      super(name, genus);
      this._blood = "warm";
  }
}

class Fish extends Animal{
  constructor(name, genus){
    super(name, genus);   
    this._blood = "cold";
  }
}

class Reptile extends Animal{
  constructor(name, genus){
    super(name, genus);
    this._habitat = "land";   
    this._blood = "cold";
  }
}

class Amphibian extends Animal{
  constructor(name, genus){
    super(name, genus);   
    this._habitat = "water";
    this._blood = "cold";
  }
}

var monkey = new Mammal("George", "simia");
var dog  = new Mammal("Rover", "canis");
var cat  = new Mammal("Fluffy", "felidae");
var human = new Mammal("Tupac", "homo");
var whale = new Mammal("Willy", "artiodactyla");
var turtle = new Reptile("Squirt", "testudinata");
var frog = new Amphibian("Kermit", "salienta");
var frog = new Amphibian("Tom", "anura");