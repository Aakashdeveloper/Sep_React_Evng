import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {latestNews,articleNews,galleryNews} from '../actions';
import LatestDisplay from '../component/Home/LatestDisplay';

class Home extends Component{
    componentDidMount(){
        this.props.dispatch(latestNews());
        this.props.dispatch(articleNews());
        this.props.dispatch(galleryNews())
    }
    render(){
        return(
            <React.Fragment>
                <LatestDisplay/>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        datalist:state.article,
      
    }
}

Home.protoTypes={
    dispatch:PropTypes.func
}

export default connect(mapStateToProps)(Home)