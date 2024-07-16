let user = 0;

if (user > 0) {
  console.log("양수");
} else if (user < 0) {
  console.log("음수");
} else {
  console.log(0);
}

let score = 10;

function 점수(score) {
  if (score >= 90 && score <= 100) {
    console.log("A");
  } else if (score >= 80 && score <= 89) {
    console.log("B");
  } else if (score >= 70 && score <= 79) {
    console.log("C");
  } else if (score >= 60 && score <= 69) {
    console.log("D");
  } else {
    console.log("F");
  }
}

점수(score);

// let 박수 = 3;

// function 박수기계(박수) {
//   if (박수 % 3 == 0) {
//     console.log("박수");
//   } else {
//     console("number");
//   }
// }

// 박수기계(박수);

let 박수 = 9;

function 박수기계(박수) {
  if (박수 % 9 == 0) {
    console.log("박수x2");
  } else if (박수 % 3 == 0) {
    console.log("박수");
  } else {
    console("number");
  }
}
박수기계(박수);
