import react, { Component, useEffect } from 'react'
import { connect } from 'react-redux'
import { DetailWrapper, HeaderWrapper, Content } from './style'
import { actionCreators } from './store'
import { useParams } from 'react-router-dom';


// actions describe what happend
// but reducer state what to do with the actions
// reducer is function that accepts state and action as arg, and returns the next state of the application
// (previousState, action) => newState
const Detail = (props) => {
    const { id } = useParams();
    console.log("detail, props: ", props)
    useEffect(()=>{
        props.getDetail(id);
    }, [id, props])

    console.log(id)
    return (
        <DetailWrapper>
            <HeaderWrapper>{props.title}</HeaderWrapper>
            <Content dangerouslySetInnerHTML={{__html:props.content}}/>
        </DetailWrapper>
    )
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail','content'])
})

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id))
    }
})
export default connect(mapState, mapDispatch)(Detail);