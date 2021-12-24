// const animals = ['강아지', '고양이', '햄스터', '강아지', '고양이', '토끼'];

// let cnt = 0;
// animals.map((item) => {
//   if (item === '강아지') {
//     cnt++;
//   }
// });

// console.log(cnt);

// const animals = [
//   '복슬 강아지',
//   '검정 고양이',
//   '노란 햄스터',
//   '강아지',
//   '노랑 고양이',
//   '고양이',
//   '흰 토끼',
// ];

// const cats = animals.filter((item) => {
//   return item.includes('고양이');
// });
// console.log(cats);

const dogs = ['검은 강아지', '노란 강아지', '흰 강아지'];
const cats = ['검은 고양이', '복슬 고양이', '노란 고양이'];

const new_arr = dogs.concat(cats);
console.log(new_arr);
