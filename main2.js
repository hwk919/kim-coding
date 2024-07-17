`class Product {
  name = "";
  color = "";
  price = 0;
  관리유형 = "";
  관리주기 = "";
  constructor(name, color, price, 관리유형, 관리주기) {
    this.name = name;
    this.color = color;
    this.price = price;
    this.관리유형 = 관리유형;
    this.관리주기 = 관리주기;
  }
}

class aircleaner extends Product {
  표준사용면적 = "";
  constructor(name, color, price, 관리유형, 관리주기, 표준사용면적) {
    super(name, color, price, 관리유형, 관리주기);
    this.표준사용면적 = 표준사용면적;
  }
}

class waterpurifier extends Product {
  출수방식 = "";
  constructor(name, color, price, 관리유형, 관리주기, 출수방식) {
    super(name, color, price, 관리유형, 관리주기);
    this.출수방식 = 출수방식;
  }
}
let aircleaner1 = new aircleaner(
  "acl-15c1a",
  "black",
  15900,
  "방문관리",
  "4개월",
  "15평형"
);
console.log(aircleaner1);
let aircleaner2 = new aircleaner(
  "acl-20c1a",
  "tray",
  18900,
  "셀프관리",
  "4개월",
  "20평형"
);
console.log(aircleaner2);
let waterpurifier1 = new waterpurifier(
  "wpu-i220c",
  "white",
  34900,
  "방문관리",
  "4개월",
  "직수"
);
console.log(waterpurifier1);
let waterpurifier2 = new waterpurifier(
  "wpu-iac302",
  "white",
  39900,
  "셀프관리",
  "4개월",
  "직수"
);
console.log(waterpurifier2);
