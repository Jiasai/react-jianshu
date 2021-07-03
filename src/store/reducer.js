//引入actionTypes
import { CHANGE_INPUT_VALUE, CHANGE_LIST_DATA, DELETE_LIST_ITEM,RES_LIST_DATA,CHANGE_SEARCH_VALUE ,CHANGE_SEARCH_TRANSITION} from './actionTypes';


const defaultState = {
    menu:[{path:'/#',title:'首页'},{path:'/download',title:'App下载'},{path:'/IT',title:'IT技术'}],
    currentPage:'首页',
    currentTitle:'简书-创作你的创作',
    searchValue: '',
    searchTransition:false
};

//reducer 可以接收state,但是绝不能直接修改state
//reducer是纯函数，纯函数指的是给固定的输入，就一定会有固定的输出，而且不会有任何副作用

const reducer = (state = defaultState, action) => {
    //state上一次store之中所有数据state , action 本次触发action的行为和数据
    //console.log(state,action);
    switch (action.type) {
        //创建修改inputValue的操作
        case CHANGE_INPUT_VALUE:
            if (true) {
                const newState = JSON.parse(JSON.stringify(state));
                //用JSON方案，深拷贝state数据
                newState.inputValue = action.inputValue;
                return newState;
            }
            break;
        //创建修改list的操作
        case CHANGE_LIST_DATA:
            if (true) {
                const newState = JSON.parse(JSON.stringify(state));
                const id = newState.list.length+1;
                newState.list.push({id,title:newState.inputValue});
                newState.inputValue = '';
                return newState;
            }
            break;
        //删除item 的操作
        case DELETE_LIST_ITEM:
            if (true) {
                const newState = JSON.parse(JSON.stringify(state));
                newState.list.splice(action.index, 1);
                return newState;
            }
            break;
        //发送请求获取List数据
        case RES_LIST_DATA:
            if(true){
                const newState = JSON.parse(JSON.stringify(state));
                newState.list = action.data;
                return newState;
            }
            break;
        //改变search搜索的value值
        case CHANGE_SEARCH_VALUE:
            if(true){
                const newState = JSON.parse(JSON.stringify(state));
                newState.searchValue = action.value;
                return newState;
            }
            break;
        //改变search搜索的Transition动画
        case CHANGE_SEARCH_TRANSITION:
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