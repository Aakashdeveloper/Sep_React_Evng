import React,{Component} from 'react';
import BaseButton from '../component/BaseButton';

class Home extends Component{
    
    render(){
        return(
            <React.Fragment>
               <p>Home Page</p>
               <BaseButton/>
            </React.Fragment>
        )
    }
}


export default Home;


/*class Home extends Component{
    componentDidMount(){
        this.props.dispatch(latestNews());
        this.props.dispatch(articleNews());
        this.props.dispatch(galleryNews())
    }
    render(){
        return(
            <React.Fragment>
                <LatestDisplay ldata={this.props.datalist.latestNews}/>
                <ArticleDisplay adata={this.props.datalist.articleNews}/>
                <GalleryDisplay gdata={this.props.gallist.galleryNews}/>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        datalist:state.article,
        gallist:state.gallery
      
    }
}

Home.protoTypes={
    dispatch:PropTypes.func
}

export default connect(mapStateToProps)(Home)
*/