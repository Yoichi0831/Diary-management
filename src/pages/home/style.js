import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0px auto; //top bottom 0px left right align centre

`;

export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    .banner_img {
        width: 625px;
        height: 270px;
        object-fit: fill;
    }
`;

export const HomeRight = styled.div`
    width: 240px;
    float: right;
    background: blue;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    margin-left: 18px;
    padding-right: 10px;
    margin-bottom: 10px;
    background: #f7f7f7;
    font-size: 14px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    color: #000;
    .topic-pic {
        padding-right: 5px;
        display: block;
        float: left;
        width: 32px;
        height: 32px;
    }
`

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        display: block;
        width: 125px;
        height: 100px;
        float:right;
        border-radius: 10px;;
    }

`

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .description {
    line-height: 18px;
    font-size: 13px;
    color: #999;
    }
`

export const WritterWrapper = styled.div`
    width: 278px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    height: 300px;
    line-height: 300px;
    text-align: center;
`

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #a5a5a5;
    margin: 30px 0;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`