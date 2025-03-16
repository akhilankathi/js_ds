const findSecondLarge = (arr) =>{
let isArray =  Array.isArray(arr)
let large = 0 ;  let secondlarge = 0
if(isArray){
for ( let i = 0 ; i < arr.length ; i++){
if(large < arr[i]){
secondlarge =  large
large = arr[i]
} else if(secondlarge < arr[i]  && arr[i] < large){
secondlarge = arr[i]
}
}
return secondlarge
} else {
console.log('emter valid array ')
}
}

console.log(findSecondLarge([2,3,4,5,4,2,3,4,34,5,323,34,444]))

