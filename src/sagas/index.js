import { put, all, call, takeLatest } from 'redux-saga/effects';
import * as api from '../api';
import { normalize } from 'normalizr';
import * as schema from '../actions/schema';

export function* fetchData({ filter }) {
    const { response, error } = yield call(api.fetchTodos, filter);
    if(response)
      yield put({
      	filter,
      	type: 'FETCH_TODOS_SUCCESS',
        response: normalize(response, schema.arrayOfTodos)
      });
    else
      yield put({
        filter,
        type: 'FETCH_TODOS_FAILURE',
        message: error.message || 'Something went wrong.',
      });
}

// function* watchFetchData() {
//   yield takeLatest('FETCH_TODOS_REQUEST', fetchData);
// }

export default function* rootSaga() {
  yield all([
    takeLatest('FETCH_TODOS_REQUEST', fetchData)
  ]);
}