import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import exampleRequestApi from '../api';

import { EXAMPLE_REQUEST } from '../actions';

export const EXAMPLE = 'EXAMPLE';

function* exampleRequest() {
  try {
    const response = yield call(exampleRequestApi);
    yield put({ type: EXAMPLE, response, message: response.message, status: 'success' });
  } catch (e) {
    yield put({ type: EXAMPLE, message: e.message, status: 'failure' });
  }
}

function* exampleRequestSaga() {
  yield* takeEvery(EXAMPLE_REQUEST, exampleRequest);
}

export default function* rootSaga() {
  yield [
    exampleRequestSaga(),
  ];
}
