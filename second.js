// (함수 - 재사용 하기 좋다)
// 함수 선언
function a(){
    return 3;
}

// 함수 표현식
const b = function(){
    return 'hello';
}

// 화살표 함수 ES6
const c = () => {
    return console.log  ('bye bye');
}

console.log(a());
console.log(b());
(c());

const d = function(){
    let c = 3;
    let d = 5;
    return c+d;
}

console.log(d());

const e = function(x,y){
    return x - y;
};

console.log(e(10,3));
// 함수 계산기
// const add = function(x,y){
//     return x + y;
// };

// const minus = function(x,y){
//     return x - y;
// };

// const multi = function(x,y){
//     return x * y;
// };

// const divide = function(x,y){
//     return console.log (x / y);
// };

// console.log(add(3,5));

// console.log(minus(9,3));

// console.log(multi(2,4));

// (divide(9,3));

const add = function(x,y){
    return x + y;
};

const minus = function(x,y){
         return x - y;
};

const calculator = function(a,b,callback){
    const result = callback(a,b);
    return result;
}

console.log('add',calculator(3,4,add));
console.log('minus',calculator(5,3,minus));



const hello = function(){
    return hellosummer ;
};
console.log(hello);

function hello2(){
    console.log('hello summer')
};
hello2();

function bye(n){
    return console.log('hello',n,"이야")
};
bye('7월')

// 백탭``
function hello1(n){
return console.log(`hello ${n}이야`)
};

hello1('7월')
