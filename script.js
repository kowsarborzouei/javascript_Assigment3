// ######################################## 1 (1400.07.21) ##########################################
// const arr = [-5, -3, 0, 2, 3, 9, 7, -1, -7]
// function max(prevVal, currentVal){
//     if(prevVal>currentVal){
//         return prevVal
//         console.log(prevVal)
//     }
//     return currentVal
// }
// function min(prevVal, currentVal){
//     if(prevVal>currentVal){
//         return currentVal
//         console.log(currentVal)
//     }
//     return prevVal
// }
// const  max1=arr.reduce(max)
// const  min1=arr.reduce(min)
// const arr1=[max1,min1]
// console.log(arr1)
// ########################################### 2 (1400.07.21) ############################################
// let Numbers = [1,1,1,2,2,2,3,3,3,3,4,4,4]
// let countedNumber = Numbers.reduce(function (allNumber, Number) {
//     if (Number in allNumber) {
//         allNumber[Number]++
//     }
//     else {
//         allNumber[Number] = 1
//     }
//     return allNumber
// }, {})
// console.log(countedNumber)
// ########################################### or (1400.07.21) ##############################################
// function Numbers(arr){
//     let obj={};
//     for (let i of arr){
//         if(i in obj)obj[i]++;
//         else obj[i]=1;
//     }
//     return obj;
// }
// const arr = [1,1,1,2,2,2,3,3,3,3,4,4,4]
// console.log(Numbers(arr))
// ########################################### or (1400.07.21) ##############################################
const arr = [1,1,1,2,2,2,3,3,3,3,4,4,4]
const  Numbers=(arr)=>{
    return arr.reduce((prev, current) =>{
        prev[current]=!prev[current]?1:prev[current]+1
        return prev
    },{})
}
console.log(Numbers(arr))