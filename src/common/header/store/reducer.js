//引入constants
import {constants} from './';


const defaultState = {
    menu:[{path:'/#',title:'首页'},{path:'/download',title:'App下载'},{path:'/IT',title:'IT技术'}],
    currentPage:'首页',
    currentTitle:'简书-创作你的创作',
    searchValue: '',
    searchTransition:false
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
                newState.searchTransition = !newState.searchTransition;
                return newState;
            }
            break;
        default:
            return state;
    }

}

export default reducer;