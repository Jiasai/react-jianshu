
import { combineReducers } from "redux";
import { reducer as headerReducer} from '../common/header/store'
import {reducer as homeReducer} from '../view/home/store'

//使用combineReducers 拆分数据管理

export default combineReducers({
    header : headerReducer,
    home : homeReducer
})