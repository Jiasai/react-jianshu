import {useState,useEffect} from "react";

//文章 list 数据
const useListState = ()=>{ //这里面不可以直接定义变量，必须要写函数 才行
       const [articleList,setArticleList] = useState([]);
       const [recommentList,setRecommentList] = useState([]);
        const [topicList,setTopicList] = useState([]);
        const [writerList,setWriterList] = useState([]);
       //假定发送http请求，得到listData、recommentList 、topic数据
        const getListData =() =>{
            return [
                {
                    id:1,
                    title:"社会上有哪些潜规则让你细思恐极？",
                    abstract:"1、给别人带零食、早餐这些小价钱物品时，别人要给你转钱，你就老实把钱收下，不要觉得对方会认为你抠，你不收他才难受。 没人缺这几块钱，更没人愿意为... ",
                    imgUrl:""
                },
                {
                    id:2,
                    title:"我有十几部中篇小说在等",
                    abstract:"早些年，我写了十几部中篇小说，一部也没有出过书，其中《去年失恋》《小创业》在简书连载过，《做布女》《燕泥香》在知乎连载过，还有近十部中篇小说没有.",
                    imgUrl:"https://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/7eaa8bd8fc72d4f536c17be887df8238.png"
                },
                {
                    id:3,
                    title:"被精致穷拖垮的年轻人",
                    abstract:"以前有三个同事，都是售前客服，公司在那年的业绩都不算好，他们到手工资大概只有四千出头。 但他们，一个买了十四万左右的新车，另一个也买了几万块的二...",
                    imgUrl:"https://lupic.cdn.bcebos.com/20210629/25788051_14.jpg"
                },
                {
                    id:4,
                    title:"产品经理如何应对内卷的环境？",
                    abstract:"「内卷」越来越多的出现在官方和非官方的渠道里，伴随着互联网红利的消失，内卷在行业内也成为越来越高频的词汇，「我要卷死各位，或者被各位卷死」也成为...",
                    imgUrl:""
                },
                {
                    id:5,
                    title:"别了，北京曾经的家",
                    abstract:"2021年6月23日  星期三  晴 我在北京租的房子就要到期了，明天就要退房，今晚是我最后一晚在这里住了，明天就要搬到北医继教处给我们访问学者...",
                    imgUrl:"https://lupic.cdn.bcebos.com/20191203/3016479351_14.jpg"
                }
    
            ]
        }
        const getRecommentData=()=>{
            return[
                {id:1,imgUrl:"/images/01.png"},
                {id:2,imgUrl:"/images/02.png"},
                {id:3,imgUrl:"/images/03.png"},
                {id:4,imgUrl:"/images/04.png"}
            ]
        }
        const getTopicData=()=>{
            return[
                {
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
        }
        const getWriterData =()=>{
            return[
                {id:1,name:"卢璐说",imgUrl:"https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg",introduce:"写了747.1k字 · 25.3k喜欢"},{id:2,name:"野狐狸",imgUrl:"https://upload.jianshu.io/users/upload_avatars/6652326/21cbdf91-a930-45d2-ad61-4f91df1e9709.jpg",introduce:"写了747.1k字 · 25.3k喜欢"},{id:3,name:"吴晓布",imgUrl:"https://upload.jianshu.io/users/upload_avatars/3343569/6940ee65-036f-4b7a-9935-5915d9b67d14.jpg",introduce:"写了747.1k字 · 25.3k喜欢"},{id:4,name:"简书钻首席小管家",imgUrl:"https://upload.jianshu.io/users/upload_avatars/14715425/e0668349-8c75-43db-8a9d-c388e5f00d0d.jpg",introduce:"写了747.1k字 · 25.3k喜欢"},{id:5,name:"Hobbit霍比特人",imgUrl:"https://upload.jianshu.io/users/upload_avatars/7133325/f4370cf6-cf4d-4839-9b54-87beaa767d48?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",introduce:"写了747.1k字 · 25.3k喜欢"},
            ]
        }
        useEffect(()=>{   
            //修改数据
            setArticleList(getListData());     
            setRecommentList(getRecommentData());
            setTopicList(getTopicData());
            setWriterList(getWriterData())
        },[])
    return { articleList,setArticleList,recommentList,setRecommentList,topicList,setTopicList,writerList,setWriterList}
}

export { useListState }