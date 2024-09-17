import react, { Component } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';

import {
    HomeWrapper ,
    HomeLeft ,
    HomeRight
} from './style';
import bannerImg from '../../statics/Opera_house.png';

class Home extends Component {
    render() {

        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner_img' src={bannerImg} alt="yeah image" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>

        )
    }
}
export default Home;