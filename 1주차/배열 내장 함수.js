// map(원본 배열은 그대로 새로운 배열을 만들어 줄 때 사용)

const array_num = [0, 1, 2, 3, 4, 5];

const new_array = array_num.map((array_item) => {
  return array_item + 1;
});

console.log(array_num);
console.log(new_array);

// filter(요소 자체를 가공할 순 없지만, 조건이 참인 친구만 가지고 새로운 배열을 만들 수 있다)
const filter_array = array_num.filter((array_item) => {
  return array_item > 3;
});
console.log(array_num);
console.log(filter_array);

// concat(둘이 합치고 싶을 때, 중복 요소 제거는 해주지 않는다.)
const merge = array_num.concat(filter_array);
console.log(array_num);
console.log(filter_array);
console.log(merge);

// from (dom 객체 유사 배열(몇 번째 항목으로 접근 가능) -> 하지만 map을 돌릴 수 는 없기 때문에
// 유사 배열을 배열로 만들 때 사용)

const my_name = 'jongwan';
const my_name_array = Array.from(my_name);
console.log(my_name_array);

const num_array = Array.from(my_name, (item, index) => {
  return index;
});
console.log(num_array);

const new_array2 = Array.from({ length: 4 }, (item, index) => {
  return index;
});

console.log(new_array2);
