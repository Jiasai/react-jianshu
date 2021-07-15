//引入constants
import {constants} from './';


const defaultState = {
    topicList:[{
        id:1,
        title:"自然科普",
        imgUrl:"https://upload.jianshu.io/collections/images/76/12.jpg"
    },
    {
        id:2,
        title:"手绘",
        imgUrl:"https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg"
    },
    {
        id:3,
        title:"互联网",
        imgUrl:"https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg"
    },
    {
        id:4,
        title:"读书",
        imgUrl:"https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg"
    },{
        id:5,
        title:"产品",
        imgUrl:"https://upload.jianshu.io/collections/images/264569/2.pic.jpg"
    },
    {
        id:6,
        title:"旅行在路上",
        imgUrl:"https://upload.jianshu.io/collections/images/13/%E5%95%8A.png"
    },
    {
        id:7,
        title:"程序员",
        imgUrl:"https://upload.jianshu.io/collections/images/16/computer_guy.jpg"
    }
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