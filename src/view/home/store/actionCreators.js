
//引入constants
import { constants } from './index';



//改变search搜索的value值
export const getSearchValueChangeAction=(value)=>{
    return{
        type:constants.CHANGE_SEARCH_VALUE,
        value
    }
}


