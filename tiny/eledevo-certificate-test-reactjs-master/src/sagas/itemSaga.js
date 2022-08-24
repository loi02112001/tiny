import * as actions from '../actions/index'
import { put, takeEvery } from "redux-saga/effects";
import * as types from '../constants'
import updateApi from '../fetchAPIs/updateApi';
import paginateApi from '../fetchAPIs/paginateApi';
import searchApi from '../fetchAPIs/searchApi';
import addApi from '../fetchAPIs/addAPI';
import delApi from '../fetchAPIs/deleteAPI';

function* addItem(data) {

    try {
        yield addApi(data.payload)
        yield put(actions.addItemSuccess())
        yield put(actions.paginateItem({ activePage: 1 }))
    } catch (error) {
        yield put(actions.addItemFailure({ errorMessage: 'add that bai' }))
    }
}
function* delItem(data) {
    try {
        yield delApi(data)
        yield put(actions.delItemSuccess())
        yield put(actions.paginateItem({ activePage: 1 }))
    } catch (error) {
        yield put(actions.delItemFailure({ errorMessage: 'add that bai' }))
    }
}
function* updateItem(data) {
    console.log(data, 'day la dataaaaaaaaa');
    try {
        let form = new FormData()
        form.append('content', data.payload.content)
        form.append('title', data.payload.title)
        yield updateApi(data, form)
        yield put(actions.updateItemSuccess())
        yield put(actions.paginateItem({ activePage: 1 }))
    } catch {
        yield put(actions.updateItemFailure({ errorMessage: 'update that bai' }))
    }
}

function* searchPaginate(data) {
    try {
        const res = yield searchApi(data)
        yield put(actions.searchPaginateItemSuccess({
            totalPage: res.totalPage,
            activePage: res.activePage,
            ItemPage: res.ItemPage,
            nameSearch: res.nameSearch
        }))
    } catch (error) {
        yield put(actions.searchPaginateItemFailure({ errorMessage: error.Message }))
    }
}

function* paginate(data) {
    try {
        const res = yield paginateApi(data)
        yield put(actions.paginateItemSuccess({
            activePage: res.activePage, totalPage: res.totalPage,
            ItemPage: res.ItemPage
        }))
    } catch (error) {
        yield put(actions.paginateItemFailure({ errorMessage: error.Message }))
    }
}

export const ItemSaga = [
    takeEvery(types.ADD_ITEM_REQUEST, addItem),
    takeEvery(types.DELETE_ITEM_REQUEST, delItem),
    takeEvery(types.UPDATE_ITEM_REQUEST, updateItem),
    takeEvery(types.SEARCHPAGINATE_ITEM_REQUEST, searchPaginate),
    takeEvery(types.PAGINATE_ITEM_REQUEST, paginate)]