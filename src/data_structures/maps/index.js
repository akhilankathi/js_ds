// MAP data structure and methods

const _map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

for (let [key, value] of _map) {
  console.log(key + ":" + value);
}

// adding key value pair to Map
_map.set("d", 4);

// length of map
console.log("map size", _map.size);

// to delete a particular key value pair
_map.delete("a");

// to clear all items ( delete all items in map )
_map.clear();

for (let [key, value] of _map) {
  console.log(key + ":" + value);
}
console.log(_map);
