import { takeLatest, all, put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import {
  setFetching,
  requestSuccess,
  requestFailed,
  signIn,
  signUp,
  signOut,
  forgotPassword,
  resetPassword,
} from '@/redux/ducks/auth.duck';
import { api } from '@/utils';
import { PATHS } from '@/constants';

function* onSignInFlow() {
  yield takeLatest(signIn, function* onSignIn({ payload }) {
    yield put(setFetching());

    try {
      const response = yield call(api.signIn, payload);
      yield put(requestSuccess(response));
      yield put(push(PATHS.APP));
    } catch (error) {
      yield put(requestFailed(error));
    }
  });
}

function* onSignUpFlow() {
  yield takeLatest(signUp, function* onSignUp({ payload }) {
    yield put(setFetching());
    // eslint-disable-next-line no-console
    console.log(payload);
    // TODO: Not implemented
    try {
      yield put(requestSuccess());
    } catch (error) {
      yield put(requestFailed(error));
    }
  });
}

function* onSignOutFlow() {
  yield takeLatest(signOut, function* onSignOut({ payload }) {
    yield put(setFetching());
    // eslint-disable-next-line no-console
    console.log(payload);
    // TODO: Not implemented
    try {
      yield put(requestSuccess());
    } catch (error) {
      yield put(requestFailed(error));
    }
  });
}

function* onForgotPasswordFlow() {
  yield takeLatest(forgotPassword, function* onForgotPassword({ payload }) {
    yield put(setFetching());
    // eslint-disable-next-line no-console
    console.log(payload);
    // TODO: Not implemented
    try {
      yield put(requestSuccess());
    } catch (error) {
      yield put(requestFailed(error));
    }
  });
}

function* onResetpasswordFlow() {
  yield takeLatest(resetPassword, function* onResetpassword({ payload }) {
    yield put(setFetching());
    // eslint-disable-next-line no-console
    console.log(payload);
    // TODO: Not implemented
    try {
      yield put(requestSuccess());
    } catch (error) {
      yield put(requestFailed(error));
    }
  });
}

export default function* authSaga() {
  yield all([
    onSignInFlow(),
    onSignUpFlow(),
    onSignOutFlow(),
    onForgotPasswordFlow(),
    onResetpasswordFlow(),
  ]);
}
