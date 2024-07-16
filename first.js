// Data Type 
// 1. String 

let str1 = 'a';
let str2 = "";
let str3 = `${str1}`;

// 2. Number 
let num1 = 10;
let num2 = 3.14;
let num3 = NaN;
let num4 = Infinity;

// 3.boolean - true, false
let bool1 = true;
let bool2 = false;

// 4. undefined : 변수 선언 O 값은 할당 X 
let undi;
console.log(undi);

// 5. null : 변수 선언 O, 값의 할당 null 
let nul = null;
console.log(nul);

// 6. Object 객체 데이터 { key : value }
let obj = {
    snack : "cookie",
    day : {
        month : 7,
        day : 9,
        today : 'TUE'
    }
}

console.log(obj);
console.log(obj.day);


// 7. Array 배열 데이터 [ index 0, 1,2,3,...]
let arr1 = [1,2,3,"hello"];
console.log(arr1);
console.log(arr1[0]);
console.log(arr1.length);
console.log(arr1[arr1.length - 1]);

// let typing = prompt('숫자를 입력해주세요.')
// console.log( typing );

// if (typing % 3 ===0){
//     console.log('3의배수이다!')
// }
// else{
//     console.log('3의배수가 아니다!')

// let typing = prompt('숫자를 입력해주세요.')
// console.log( typing );

// if (typing < 10){
//     console.log('10보다 작다')
// }
// else if (typing > 20){
//     console.log('20보다 크다')
// }
// else {
//     console.log('20이하 10이상이다')
// }


// let xy = 7;
// let ab = 12;
// if (xy > 5 && ab > 15){
//     console.log('전부다 맞았어요')
// }
// else {
//     console.log('조건 전부가 참은 아니에요')
// }

// 제어문 : 반복

// for(let a=0; a < 11; a++){
//     console.log(4*a);
// }
//while, for 랑 비슷하게 생각하면 된다
let f = 0;
while (f < 3){
    console.log('f')
    f++;
}