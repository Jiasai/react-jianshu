import axios from 'axios';

//引入actionTypes
import { CHANGE_INPUT_VALUE, CHANGE_LIST_DATA, DELETE_LIST_ITEM, RES_LIST_DATA ,CHANGE_SEARCH_VALUE,CHANGE_SEARCH_TRANSITION} from './actionTypes';

//修改input值改变
export const getInputChangeAction = (inputValue) => {
    return {
        type: CHANGE_INPUT_VALUE,
        inputValue
    }
}

//修改list数据
export const getListChangeAction = () => {
    return {
        type: CHANGE_LIST_DATA
    }
}

//删除list中 一项
export const getDeleteItemAction = (index) => {
    return {
        type: DELETE_LIST_ITEM,
        index
    }
}


//使用thunk中间件实现Ajax异步请求获取list数据

//使用了thunk中间件，可以return函数,
//在这个函数中，可以发送请求，定义对象action , dispatch派发action通知store做事

export const getTodolistData = () => {
    return (dispatch) => {
        axios.get('http://www.dell-lee.com/react/api/list.json?id=1').then(res => {
            const action = {
                type: RES_LIST_DATA,
                data: res.data.data
            }
            dispatch(action); //在这里派发action,让store修改
        });
    }
}

//改变search搜索的value值
export const getSearchValueChangeAction=(value)=>{
    return{
        type:CHANGE_SEARCH_VALUE,
        value
    }
}

//改变search搜索的动画
export const getSearchTransitionAction=()=>{
    return{
        type:CHANGE_SEARCH_TRANSITION
    }
}











