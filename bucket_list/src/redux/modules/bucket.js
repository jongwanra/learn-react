// bucket.js

// Actions
const CREATE = 'bucket/CREATE';
const DELETE = 'bucket/DELETE';
const UPDATE = 'bucket/UPDATE';

// Initial State
const initialState = {
  // list: ['영화관 가기', '매일 책 읽기', '리듀서 공부'],
  list: [
    { text: '영화관 가기', completed: false },
    { text: '매일 책 읽기', completed: false },
    { text: '리듀서 공부하기', completed: false },
    { text: '코딩하기', completed: false },
  ],
};

// Action Creators
export function createBucket(bucket) {
  return { type: CREATE, bucket };
}

export function deleteBucket(bucket) {
  return { type: DELETE, bucket };
}

export function updateBucket(bucket_index) {
  return { type: UPDATE, bucket_index };
}
// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'bucket/CREATE': {
      const new_bucket_list = [...state.list, action.bucket];
      return {
        list: new_bucket_list,
      };
    }
    case 'bucket/DELETE': {
      const new_bucket_list = state.list.filter((value, index) => {
        return action.bucket !== value;
      });
      console.log('new_bucket_list:', new_bucket_list);
      return {
        list: new_bucket_list,
      };
    }
    case 'bucket/UPDATE': {
      console.log('completed!');
      const new_bucket_list = state.list.map((value, index) => {
        if (parseInt(action.bucket_index) === index) {
          return { ...value, completed: true };
        }
        return value;
      });

      return { list: new_bucket_list };
    }
    // do reducer stuff
    default:
      return state;
  }
}
