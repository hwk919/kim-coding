// 개념을 안들으세요. 예시를 외우는 방향으로 공부중입니다.

// 일단 진행하고 보죠.

// var 과일바구니; 선언

// 과일바구니 = '사과'; 할당

var 백일동202호 = "형우가삽니다";
var 백일동202호 = "내가 살아요."; // 재선언, 재할당 가능
console.log(백일동202호);

// 자료형
// string : 문자열 타입 ''. ""
// 숫자 : 1 2 3 4 -1 -3
// boolean : 논리연산자 true false
// 그외 : 배열, 객체 => 지금 안 함.

let 과일바구니 = "사과"; //재선언 불가능, 재할당 가능
과일바구니 = "포도";
console.log(과일바구니);

const 장바구니 = "한우"; //재선언 불가능, 재할당 불가능
// 장바구니 = '레고';

// let 과일바구니 = '사과';
// let 과일바구니 = '포도';

// let const
// 에러찾기, 명확한 구분을 위해서, 함수에서 사용하기 위해
// var 똑같다.

// 과일바구니라고 하는 변수를 만들어서, 그 안에 사과가 있는데
// 콘솔로그활용하여 사과를 콘솔창에 출력시켜보세요

let a = 6; //숫자
let b = 5; // 문자

let c;
let d;
let e;
let f;

c = a + b;
d = a * b;
e = a / b; //몫
f = a % b; //나머지
// console.log((a += b));
// console.log((a -= b));
// console.log((a *= b));
// console.log((a /= b));
// console.log((a %= b));

// console.log(a == b);
// console.log(a === b);
// console.log(a != b);
// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);

let password = 1;

// password = password >= 2 && password > 1;
password = password >= 2 || password >= 1;

console.log(password);

console.log(20 + 30);
console.log("20" + "30");
console.log("Hello" + "" + 2021);
console.log(1 + 2 * 3);
console.log((1 + 3) ** 2);
console.log(1 / 0);
console.log(6 % 2);
console.log(7.5 % 2);
console.log(5 == 5);
console.log(5 === 5);
console.log(5 == "5");
console.log(5 != 5.0);
console.log(5 !== 5.0);
console.log("ture" === true);
console.log(5 <= 5.0);
console.log(5 >= 5);
console.log(true || true);
console.log(true || false);
console.log(true && true);
console.log(true && false);
console.log(!true);
console.log(!false);
