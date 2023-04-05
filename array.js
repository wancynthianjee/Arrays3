// Write a function that accepts an array of strings and
// console.logs each element using a for loop.
let arr=["Lucy","Grace","Joyce","Maggy"];
string(arr)
function string (arr){
for(let i=0;  i<arr.length; i++){
    console.log(arr[i]);
}
}
// Write a function that accepts an array of numbers and uses the forEach() method to 
//console.log each number multiplied by 2.
let a=[1,20,9,8,7,25]
function j(a){
    a.forEach(element => {
        
    });
    console.log(a)
}


// Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. 
// Console the array with the new values
let arr1=[1,5,9,7,17,28];
function nums(arr1){
    for(let i=0; i<5; i++){
        arr1[i]=arr1[i]*8
    }
    arr1[arr1.length-2]+=5
    arr1[arr1.length-1]+=5
    console.log(arr1);
}
nums(arr1)
// Write a function that takes in the following array and use a while loop 
//to iterate and break when the item is equal to the fourth index
let arrNum = [1,2,3,4,5,6,7,8,9];
 function num(arrNum){
    let i=0;
    while(i<arrNum.length){
        console.log(arrNum[i])
        if (i===4) {
            break;
        }
        i++
    }
 }
 num(arrNum);
//  Write a function that takes in a an array of strings and use a continue statement when the item is at the second index
let fruits=["apple","plam","banana","strawberries","kiwi"];
function frui(fruits){
   for(let i = 0;i < fruits.length; i++){
       if(i===2){
           continue;
       }
       console.log({"continue":fruits[i]})
    }
}
frui(fruits)



