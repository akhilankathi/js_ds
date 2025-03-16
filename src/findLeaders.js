const findLeaders = (arr)=>{
let isArray = Array.isArray(arr)
let n = arr.length
let leader = 0 ;
let leaderArr = []
if(isArray){
for ( let i = n ; i >=0 ; i-- ){
if(leader<arr[i]){
leader =  arr[i]
leaderArr.push(arr[i])
}
}
return leaderArr
}
}
console.log(findLeaders([2,133,4,56,75,2,4,53,2]))

