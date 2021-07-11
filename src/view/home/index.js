import React,{Fragment} from "react";

import Topic from "./components/Topic";
import List from "./components/List";
import Recomment from "./components/Recomment";
import Writer from "./components/Writer";



import bannerImg from '../../assets/images/20760323-d6f98ab09910ae02.jpg'


import "./home.scss";

const Home = () =>{
    return(
    <Fragment>
        <div className='wrapper home'>
            <div className="home_left">
                <div className='home_left_banner'>
                    <img src={bannerImg} alt='banner' />
                </div>
                <Topic />
                <List />

            </div>
            <div className='home_right'>
                <Recomment />
                <Writer />
            </div>
        </div>
    </Fragment>
    )
}

export default Home;