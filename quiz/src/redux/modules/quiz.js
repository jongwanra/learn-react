// quiz.js

//Actions
const CREATE = 'quiz/CREATE';
// Initial State
const initialState = {
  questions: [
    '제 나이는 17살입니다.',
    '저는 일본에서 2년 살다왔습니다.',
    '저는 담배를 피지 않습니다.',
  ],
  answer: [false, false, false],
  user_answer: [],
};

//Action Creators
export function addUserAnswer(answer) {
  console.log('Action Creators:', answer);
  return { type: CREATE, answer };
}

// Reducer

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'quiz/CREATE': {
      console.log('quiz/Create!!');
      console.log('action:', action);
      state.user_answer.push(action.answer);
      console.log('state:', state);
      return state;
    }
    default:
      return state;
  }
}
