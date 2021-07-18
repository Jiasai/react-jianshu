import React,{Fragment} from "react";

import Topic from "./components/Topic";
import List from "./components/List";
import Recomment from "./components/Recomment";
import Writer from "./components/Writer";

import Hello from "./hook/reactDemo";


import bannerImg from '../../assets/images/20760323-d6f98ab09910ae02.jpg'


import "./home.scss";

const page = "这是首页";

const Home = () =>{
    return(
    <Fragment>
        <div className='wrapper home'>
            <div className="home_left">
                <div className='home_left_banner'>
                    <img src={bannerImg} alt='banner' />
                </div>
                <Topic page={page} />
                <List />

            </div>
            <div className='home_right'>
                <Recomment />
                <Writer />
                <hr />
                <Hello pageTitle="这是Hello组件" />
            </div>
        </div>
        
    </Fragment>
    )
}

export default Home;