//引入constants
import {constants} from './';


const defaultState = {
    menu:[{path:'/#',title:'首页'},{path:'/download',title:'App下载'},{path:'/IT',title:'IT技术'}],
    currentPage:'首页',
    currentTitle:'简书-创作你的创作',
    searchValue: '',
    searchTransition:false,
    serachList:[],
    page:0,
    totalPage:1
};


const reducer = (state = defaultState, action) => {
    switch (action.type) {   
        //改变search搜索的value值
        case constants.CHANGE_SEARCH_VALUE:
            if(true){
                const newState = JSON.parse(JSON.stringify(state));
                newState.searchValue = action.value;
                return newState;
            }
            break;
        //改变search搜索的Transition动画
        case constants.CHANGE_SEARCH_TRANSITION:
            if(true){
                const newState = JSON.parse(JSON.stringify(state));
                newState.searchTransition = action.value;
                return newState;
            }
            break;
        //改变serach搜索提示的list数据
        case constants.SEARCH_LIST_DATA:
            if(true){
                const newState = JSON.parse(JSON.stringify(state));
                newState.serachList = action.data;
                newState.totalPage = Math.ceil(action.data.length / 6);
                return newState;
            }
            break;
        //改变serach搜索的page
        case constants.CHANGE_SEARCH_PAGE:
            if(true){
                const newState = JSON.parse(JSON.stringify(state));
                newState.page = action.value;
                return newState;
            }
            break;
        default:
            return state;
    }

}

export default reducer;