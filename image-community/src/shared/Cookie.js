// 쿠키를 생성하는 함수(3일 뒤)
const createCookie = (userId, userPwd) => {
  let cur_date = new Date().getTime();
  let three_days = 1000 * 60 * 60 * 24 * 3;
  const exp = new Date(cur_date + three_days).toUTCString();
  document.cookie = `${userId}=${userPwd};expires=${exp}`;
};

// 쿠키 가져오는 함수
const getCookie = (userId) => {
  const cookie_arr = document.cookie.split(';');
  let res = null;
  cookie_arr.forEach((value) => {
    if (value.trim().split('=')[0] === userId) {
      res = value;
      return;
    }
  });
  return res;
};

// 쿠키 제거하는 함수
const removeCookie = (userId, userPwd) => {
  let cur_date = new Date().getTime();
  let one_day = 1000 * 60 * 60 * 24 * 1;
  const exp = new Date(cur_date - one_day).toUTCString();
  document.cookie = `${userId}=${userPwd};expires=${exp}`;
};

export { createCookie, getCookie, removeCookie };
