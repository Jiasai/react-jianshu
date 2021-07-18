import {useState,useEffect} from "react";

//文章 list 数据
const useListState = ()=>{
    const [articleList,setArticleList] = useState([]);

    useEffect(()=>{   

        //假定发送http请求，得到listData 数据
        const listData = [
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

        ];

        //修改articleList
        setArticleList(listData);
        
    },[])

    return articleList;
}

export { useListState }