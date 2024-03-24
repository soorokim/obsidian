// const arr = [1, 2, 3, 4];

// arr.length = 3;

// console.log(arr); // [1, 2, 3]

// // 현재 length 보다 큰 값을 할당하면 length값은 변경되지만 실제로 배열의 길이가 늘어나지 않는다.
// arr.length = 5;

// console.log(arr); // [1, 2, 3, , ]

// console.log(Object.getOwnPropertyDescriptors(arr));

const a = new Array(5);

a[0] = 11;

const b = a.map((t) => t + 1);

console.log(b);
