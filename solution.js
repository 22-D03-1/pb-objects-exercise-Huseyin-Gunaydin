//1
const data = {a:1};

const isPlainObject = (obj)=>{

    return typeof obj === "object" && !Array.isArray(obj) && obj !==null 
}
console.log(isPlainObject(data)); // true



// //2
 const data2 = { a: 1, b: 2 };

const makePairs = (obj) => {
    return Object.entries(obj)
}
console.log(makePairs(data2)); // [['a', 1], ['b', 2]] 

// //3
const data3 = { a: 1, b: 2 };

// const without = ({obj}) => {
//     const {erstesElement, ...rest} = obj
//     return erstesElement
// } 
const without = (obj, key) => {
    delete obj[key]
    return obj
    } 

console.log(without(data3, 'b')); // { a: 1 }


//4


const data4 = { a: 1, b: undefined };
const data40 = { a:undefined };

const isEmpty = (obj)=>{
    return  Object.values(obj).every((element)=> element === undefined) && Object.values(obj).length !==0
}
console.log(isEmpty(data4)); // false
console.log(isEmpty(data40)); // true 


// //5
const data5 = { a: 1, b: 1 };  
const data51 = { a: 1, b: 1 };  
const data52 = { a: 1, b: 2 };

const isEqual = (obj1, obj2)=>{
    return JSON.stringify(obj1) === JSON.stringify(obj2)
}

console.log(isEqual(data5, data51)); // true  
console.log(isEqual(data5, data52)); // false

//6


// const data6 = { a: { b: [1, 2, 3] } }
// const invoke = ()=> {
//     const neue = {...data, {
//         ...data,b,{
//             ...data,b,[, ,...rest]
//         }
//     }}

// }

// console.log(invoke(data6, 'a.b', 'splice', [1, 2])) // [2, 3]


//7
const data7 = {a: { b: undefined } }; // true
//const data71 = ({}); //=> true
//const data72 = ({ a: { b: [] } }) // => true  


 const isEmptyDeep = (obj)=>{
      return Object.entries(obj).some((element)=> element === undefined) 
 }
 console.log(isEmptyDeep(data7)); //true
 //console.log(isEmptyDeep(data71)); //true
 //console.log(isEmptyDeep(data72)); //true



// //8
// const data8 = { a: 1, b: { c: 1 } };  
// const data81= { a: 1, b: { c: 1 } };  
// const data82= { a: 1, b: { c: 2 } };
// //write your code here 
// console.log(isEqualDeep(data8, data81));// true  
// console.log(isEqualDeep(data8, data82)); // false  


// //9
// const data9 = { a: 1, b: 2 };  
// const data91 = { c: 1, b: 2 };
// //write your code here 
// console.log(intersection(data9, data91)); // { b: 2 }


// //10
// const data10 = { a: 1, b: { c: 3 } };  
// const data11 = { c: 1, b: { c: 3 } };
// //write your code here 
// console.log(intersectionDeep(data10, data11)); // { b: { c: 3 } }



