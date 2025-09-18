// SET data structure and methods

// map has set method to add element and set has add method
// map is related to obj and set is of array

const _set = new Set([1, 2, "akhil", false ,2,3,4,"akhil"]);

for (let key of _set) {
  console.log(key);
}

// adding key value pair to Map
_set.add("d");

// length of map
console.log("set size", _set.size);

// to delete a particular key value pair
_set.delete(1);

// to clear all items ( delete all items in map )
_set.clear();

//  convert set to array 
console.log([..._set]); 
