import { call, takeEvery, put } from 'redux-saga/effects'
import {fetchPosts} from '../api'
import {getPostsSuccess, getPostsFailure} from './actions'

function* postsSagaHandler() {
    try {
       const posts = yield call(fetchPosts);
       yield put(getPostsSuccess(posts));
    } catch (error) {
       yield put(getPostsFailure(error));
    }
 }
 
 function* mySaga() {
   yield takeEvery("START_GET_POSTS", postsSagaHandler);
 }

 export default mySaga;

