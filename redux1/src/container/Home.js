import React,{Component} from 'react';
import {connect} from 'react-redux';
import {MoviesList} from '../action';
import {bindActionCreators} from 'redux';

class Home extends Component{
    componentDidMount(){
        this.props.MoviesList()
    }

    render(){
        return(
            <div>
                <h1>Redux</h1>
            </div>
        )
    }
}

///TO Recive state from store
function mapStateToProps(state){
    console.log(state)
}

//To Dispatch the actaion
function mapDispatchToProps(dispatch){
    return bindActionCreators({MoviesList},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)