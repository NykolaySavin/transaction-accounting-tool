import { createAction } from "redux-act";
import { put, call, takeEvery } from "redux-saga/effects";
import * as Api from "../../core/api/category";

export const fetchCategories = createAction("fetch categories");

export const fetchCategoriesSuccess = createAction(
  "fetch categories - success",
  categories => categories
);

export const fetchCategoriesFail = createAction(
  "fetch categories - fail",
  error => error
);
export const handleSubmit = createAction(
  "handle category submit",
  item => item
);
export const handleDeletion = createAction(
  "handle category deletion",
  id => id
);

export const reducer = {
  [handleSubmit]: state => ({ ...state }),
  [handleDeletion]: (state, id) => ({
    ...state,
    categories: { data: state.categories.data.filter(item => item.id != id) }
  }),
  [fetchCategories]: state => ({
    ...state
  }),
  [fetchCategoriesSuccess]: (state, data) => ({
    ...state,
    categories: { data: data }
  }),
  [fetchCategoriesFail]: (state, error) => ({
    ...state,
    categories: { error: error }
  })
};

export function* fetchCategoriesSaga() {
  const { response, error } = yield call(Api.fetchCategories);
  if (response) {
    yield put(fetchCategoriesSuccess(response));
  } else {
    yield put(fetchCategoriesFail(error));
  }
}
export function* submitCategorySaga({ payload }) {
  if (payload.id) yield call(Api.editCategory, payload);
  else yield call(Api.addCategory, payload);
  const { response, error } = yield call(Api.fetchCategories);
  if (response) {
    yield put(fetchCategoriesSuccess(response));
  } else {
    yield put(fetchCategoriesFail(error));
  }
}
export function* watchSubmitCategory() {
  yield takeEvery(handleSubmit.getType(), submitCategorySaga);
}

export function* watchFetchCategories() {
  yield takeEvery(fetchCategories.getType(), fetchCategoriesSaga);
}
