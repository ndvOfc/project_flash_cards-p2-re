// const text = `про Азамата,true,1
// про Азамата,false,1
// про Андрея,true,2
// про Андрея,false,2
// `;

// const arrOfArr = text.trim().split('\n').map((str) => str.split(','));
// // [
// //   [ 'про Азамата', 'true', '1' ],
// //   [ 'про Азамата', 'false', '1' ],
// //   [ 'про Андрея', 'true', '2' ],
// //   [ 'про Андрея', 'false', '2' ]
// // ]
// console.log(arrOfArr);
// const arr = [];

// for (let i = 0; i < arrOfArr.length; i += 1) {
//   const obj = {
//     question: arrOfArr[i][0],
//     answer: Boolean(arrOfArr[i][1]),
//     topic_id: Number(arrOfArr[i][2]),
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   };
//   arr.push(obj);
// };

// console.log(arr);


const text = `Первый топик
Второй топик
Третий топик`

const arr2 = text.trim().split('\n');
const arr = [];
for (let i = 0; i < arr2.length; i += 1) {
  const obj = {
    name: arr2[i],
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  arr.push(obj);
}

console.log(arr)
