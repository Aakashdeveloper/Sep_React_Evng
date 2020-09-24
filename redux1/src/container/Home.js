import React,{Component} from 'react';
import {connect} from 'react-redux';
import {MoviesList} from '../action';
import {bindActionCreators} from 'redux';
import DisplayMovies from '../component/display';

class Home extends Component{
    componentDidMount(){
        this.props.MoviesList()
    }

    render(){
        return(
            <div>
                <DisplayMovies moviesdata={this.props.datalist}/>
            </div>
        )
    }
}

///TO Recive state from store
function mapStateToProps(state){
    console.log(state)
    return {
        datalist:state.movies 
    }

}

//To Dispatch the actaion
function mapDispatchToProps(dispatch){
    return bindActionCreators({MoviesList},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)