import { db } from '../../firebase';
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
} from 'firebase/firestore';
// bucket.js

// Actions
const LOAD = 'bucket/LOAD';
const CREATE = 'bucket/CREATE';
const DELETE = 'bucket/DELETE';
const UPDATE = 'bucket/UPDATE';
const LOADED = 'bucket/LOADED';

// Initial State
const initialState = {
  is_loaded: false,
  list: [],
};

// Action Creators
export function loadBucket(bucket_list) {
  return { type: LOAD, bucket_list };
}
export function createBucket(bucket) {
  return { type: CREATE, bucket };
}

export function deleteBucket(bucket_index) {
  return { type: DELETE, bucket_index };
}

export function updateBucket(bucket_index) {
  return { type: UPDATE, bucket_index };
}

export function isLoaded(loaded) {
  return { type: LOADED, loaded };
}

// middlewares
export const loadBucketFB = () => {
  return async function (dispatch) {
    const bucket_data = await getDocs(collection(db, 'bucket'));

    let bucket_list = [];
    bucket_data.forEach((b) => {
      console.log('b.data: ', b.data);
      bucket_list.push({ id: b.id, ...b.data() });
    });

    dispatch(loadBucket(bucket_list));
  };
};

export const addBucketFB = (bucket) => {
  return async function (dispatch) {
    dispatch(isLoaded(false));
    const docRef = await addDoc(collection(db, 'bucket'), bucket);
    const _bucket = await getDoc(docRef);
    const bucket_data = { id: _bucket.id, ..._bucket.data() };
    dispatch(createBucket(bucket_data));
  };
};

export const updateBucketFB = (bucket_id) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, 'bucket', bucket_id); // 수정해줄 id 같이 넘긴다.
    await updateDoc(docRef, { completed: true });

    const _bucket_list = getState().bucket.list;
    const bucket_index = _bucket_list.findIndex((b) => {
      return b.id === bucket_id;
    });

    dispatch(updateBucket(bucket_index));
  };
};

export const deleteBucketFB = (bucket_id) => {
  return async function (dispatch, getState) {
    if (!bucket_id) {
      window.alert('아이디가 없네요!');
      return;
    }
    const docRef = doc(db, 'bucket', bucket_id);
    await deleteDoc(docRef);

    const _bucket_list = getState().bucket.list;
    console.log('deleted:', _bucket_list);
    const bucket_index = _bucket_list.findIndex((b) => {
      return b.id === bucket_id;
    });

    dispatch(deleteBucket(bucket_index));
  };
};
// Reducer
export default function reducer(state = initialState, action = {}) {
  console.log('current_state: ', state);
  switch (action.type) {
    case 'bucket/LOAD': {
      return { list: action.bucket_list, is_loaded: true };
    }
    case 'bucket/CREATE': {
      const new_bucket_list = [...state.list, action.bucket];
      return { ...state, list: new_bucket_list, is_loaded: true };
    }
    case 'bucket/DELETE': {
      const new_bucket_list = state.list.filter((value, index) => {
        if (parseInt(action.bucket_index) !== index) {
          return true;
        }
      });
      return { ...state, list: new_bucket_list };
    }
    case 'bucket/LOADED': {
      return { ...state, is_loaded: action.loaded };
    }

    case 'bucket/UPDATE': {
      const new_bucket_list = state.list.map((value, index) => {
        if (parseInt(action.bucket_index) === index) {
          return { ...value, completed: true };
        }
        return value;
      });

      return { ...state, list: new_bucket_list };
    }
    default:
      return state;
  }
}
