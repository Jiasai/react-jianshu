//引入constants
import {constants} from './';


const defaultState = {
    topicList:[
]
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
        default:
            return state;
    }

}

export default reducer;