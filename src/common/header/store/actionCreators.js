
import axios from 'axios';

//引入constants
import { constants } from './index';



//改变search搜索的value值
export const getSearchValueChangeAction=(value)=>{
    return{
        type:constants.CHANGE_SEARCH_VALUE,
        value
    }
}

//改变search搜索的动画
export const getSearchTransitionAction=(value)=>{
    return{
        type:constants.CHANGE_SEARCH_TRANSITION,
        value
    }
}






//使用thunk中间件实现Ajax异步请求获取list数据

//使用了thunk中间件，可以return函数,
//在这个函数中，可以发送请求，定义对象action , dispatch派发action通知store做事

export const getSearchListAction = () => {
    return (dispatch) => {
        if(sessionStorage.getItem(constants.SEARCH_LIST_DATA)){
            const action = {
                type: constants.SEARCH_LIST_DATA,
                data: JSON.parse(sessionStorage.getItem(constants.SEARCH_LIST_DATA))
            }
            dispatch(action); //在这里派发action,让store修改
            return;
        }
        axios.get('/api/headerList.json').then(res => {
            //存储本地
            sessionStorage.setItem(constants.SEARCH_LIST_DATA,JSON.stringify(res.data.data));
            const action = {
                type: constants.SEARCH_LIST_DATA,
                data: res.data.data
            }
            dispatch(action); //在这里派发action,让store修改
        });

    }
}








