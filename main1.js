let 환자 = [
  "이름",
  "나이",
  " 키",
  "몸무게",
  "주소",
  "가족관계",
  "직장",
  "사대보험",
];

let 정보 = {
  이름: "김형우",
  나이: 31,
  키: 171,
  몸무게: 79,
  getName: function () {
    return "My name is" + this.이름;
  },
};

console.log(환자);
console.log(정보);
console.log(환자[1]);
console.log(정보.나이);
정보.나이 = 32;
console.log(정보);

let 환자대기리스트 = [
  { 이름: "김형우", 나이: 31, 키: 171, 몸무게: 79 },
  { 이름: "홍길동", 나이: 12, 키: 149, 몸무게: 48 },
  { 이름: "강현웅", 나이: 40, 키: 190, 몸무게: 120 },
];

console.log(환자대기리스트[0].이름);
console.log("두번째 환자의 나이는?", 환자대기리스트[1].나이);
console.log(정보.getName());

let name = "유일렌탈";

class Product {
  name = "";
  price = 0;
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getPrice() {
    return this.price + "만원";
  }
  setPrice(price) {
    if (price < 0) {
      throw Error("마이너스값 넣으면 안된다고!!");
    }
  }
} // 캡슐화

class TV extends Product {
  //상속
  size = "";
  constructor(name, price, size) {
    //생성자
    super(name, price);
    this.size = size;
  }
}

class WATER extends Product {
  //상속
  type = "";
  constructor(name, price, type) {
    super(name, price);
    this.type = type;
  }
}

class Laptop extends Product {
  weight = "";
  constructor(name, price, weight) {
    super(name, price);
    this.weight = weight;
  }
}

let tv1 = new TV("ultra tv", 300, "102inch");
let tv2 = new TV("led tv", -400, "90inch");
let water1 = new WATER("COWAY", 30, "ICE");
let lap1 = new Laptop("macpro", 420, "1.6kg");

tv1.setPrice(-199);

console.log(tv1.getPrice());
console.log(tv2, tv2.getPrice(-400));
console.log(water1);
console.log(lap1);
