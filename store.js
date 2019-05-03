import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBQWnTaBv9m5rSvXCWzzYC1Yre5t3WHr7w",
  authDomain: "nextaddress-20190502.firebaseapp.com",
  databaseURL: "https://nextaddress-20190502.firebaseio.com",
  projectId: "nextaddress-20190502",
  storageBucket: "nextaddress-20190502.appspot.com",
  messagingSenderId: "718504752258"
};
var fireapp
try {
  firebase.initializeApp(config);
} catch (error) {
  console.error(error.message)
}
export default fireapp

// ステート初期値
const initial = {
  login: false,
  username: '(click here!)',
  email: '',
  data: [],
  items: [],
  message: 'START',
  count: 0,
  data: [],
  number: [],
  result: 0
}

// レデューサー
function allReducer(state = initial, action) {
  switch (action.type) {
    // 計算実行
    case 'ENTER':
      let data2 = state.data.slice();
      let s = action.value;
      data2.unshift(s);
      let num = s.replace(/[^0-9]/g, "");
      let number2 = state.number.slice();
      number2.unshift(num);
      let result = (state.result * 1) + (num * 1);
      return {
        message: 'ENTER',
        data: data2,
        number: number2,
        result: result
      };
    case 'INCREMENT':
      return {
        message: 'INCREMENT',
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        message: 'DECREMENT',
        count: state.count - 1
      };
    case 'UPDATE_USER':
      return action.value;
    case 'RESET':
      return {
        message: 'RESET',
        count: initial.count,
        data: [],
        number: [],
        result: 0
      };
    default:
      return state;
  }
}

// initStore関数
export function initStore(state = initial) {
  return createStore(allReducer, state, applyMiddleware(thunkMiddleware))
}