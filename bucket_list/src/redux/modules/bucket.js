// bucket.js

// Actions
const CREATE = 'bucket/CREATE';
const DELETE = 'bucket/DELETE';

// Initial State
const initialState = {
  list: ['영화관 가기', '매일 책 읽기', '리듀서 공부'],
};

// Action Creators
export function createBucket(bucket) {
  return { type: CREATE, bucket };
}

export function deleteBucket(bucket) {
  return { type: DELETE, bucket };
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
    // do reducer stuff
    default:
      return state;
  }
}
