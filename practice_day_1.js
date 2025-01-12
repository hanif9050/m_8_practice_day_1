// const numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23, 24, 25, 26,
// ];

// const oddEven = (array) => {
//   let evenNumber = [];
//   let oddNumber = [];
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (element % 2 == 0) {
//       evenNumber.push(element);
//     } else {
//       oddNumber.push(element);
//     }
//   }
//   return evenNumber;
// };

// // const result = oddEven(numbers);

// const friends = [
//   "Jack",
//   "Max",
//   "Albert Eienstein",
//   "Nicolas Tesla",
//   "Tomas Adision",
//   "Michael Jackson",
// ];

// const checkFriends = (arr) => {
//   let bigName = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     let element = arr[i];
//     if (bigName.length < arr[i].length) {
//       bigName = arr[i];
//     }
//   }
//   return bigName;
// };
// const bigFriend = checkFriends(friends);
// console.log(bigFriend);
// Problem -1Grade Making
var result = 80;
if (result <= 30) {
  console.log("Failed");
} else if (result > 30 && result <= 39) {
  console.log("You got D grade");
} else if (result > 39 && result <= 50) {
  console.log("You got C grade");
} else if (result > 50 && result <= 60) {
  console.log("You got B grade");
} else if (result > 60 && result <= 70) {
  console.log("You got B+ grade");
} else if (result > 70 && result <= 80) {
  console.log("You got A grade");
} else if (result > 80 && result <= 100) {
  console.log("You got A+ grade");
}

// Problem-2  evenOdd

const evenOdd = (num) => {
  if (num % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
};

// Problem-3 array unsorted
const arrOne = [
  10, 20, 18, 17, 1, 2, 5, 3, 4, 6, 9, 8, 7, 19, 16, 15, 14, 13, 12, 11,
];

for (let i = 0; i < arrOne.length - 1; i++) {
  for (let j = i + 1; j < arrOne.length; j++) {
    if (arrOne[i] > arrOne[j]) {
      [arrOne[i], arrOne[j]] = [arrOne[j], arrOne[i]];
    }
  }
}

// Problem-4 leaf year
const leafYear = (year) => {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log("Leap Year");
  } else {
    console.log("No leap year");
  }
};
leafYear(2000);

// Problem-5 1-50 division by 3 to 5

for (let i = 1; i <= 50; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i);
  }
}

// Problem-6 big name
var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
let bigName = friends[0];
for (let i = 0; i < friends.length; i++) {
  if (bigName.length < friends[i].length) {
    bigName = friends[i];
  }
}
// Problem-7 unique number
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
const uniqueArr = [];
let maxNum = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  let flag = true;
  if (numbers[i] > maxNum) {
    maxNum = numbers[i];
  }
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[i] == numbers[j]) {
      flag = false;
    }
  }
  if (flag == true) {
    uniqueArr.push(numbers[i]);
  }
}

// Problem-8 freelancer

const monthlySavings = (arr, savings) => {
  if (!Array.isArray(arr)) {
    return "invalid input";
  }
  let income = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 3000) {
      let tax = arr[i] * 0.2;
      income += arr[i] - tax;
    } else {
      income += arr[i];
    }
  }
  let amt = income - savings;
  if (amt >= 0) {
    return amt;
  } else {
    return "earn more";
  }
};
const income_1 = [1000, 2000, 3000];
const income_2 = [1000, 2000, 2500];
const income_3 = [900, 2700, 3400];

console.log(monthlySavings(income_1, 5400));
console.log(monthlySavings(income_2, 5000));
console.log(monthlySavings(income_3, 10000));
console.log(monthlySavings(5000, income_2));
