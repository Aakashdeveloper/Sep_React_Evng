import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {handleLikes} from '../actions';


class LikeCounter extends Component{
    addLikes = (userClick) => {
        const newLikes = (userClick)==="Add"?[this.props.likes+1,this.props.dislikes]:[this.props.likes,this.props.dislikes+1]
        console.log(newLikes)
        this.props.dispatch(handleLikes(newLikes,this.props.articleId))
    }

    render(){
        return(
            <div className="addlikes-wrapper">
                <h3>How About Article</h3>
                <div className="addlikes-container">
                    <div className="btn btn-likes"
                    onClick={() => this.addLikes('Add')}>
                        <div className="hits">
                            {this.props.likes}
                        </div>
                        <div className="icon">
                            <i className="fa fa-thumbs-up"/>
                        </div>
                    </div>
                    <div className="btn btn-dislikes"
                    onClick={() => this.addLikes('Remove')}>
                        <div className="hits">
                            {this.props.dislikes}
                        </div>
                        <div className="icon">
                            <i className="fa fa-thumbs-down"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

LikeCounter.protoTypes={
    dispatch:PropTypes.func
}

export default connect()(LikeCounter);