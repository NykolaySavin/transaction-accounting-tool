import { all } from 'redux-saga/effects';
import {watchFetchCategories, watchSubmitCategory} from "../modules/category.module";


export default function* root() {
    yield all([watchFetchCategories(),watchSubmitCategory()]);
}
