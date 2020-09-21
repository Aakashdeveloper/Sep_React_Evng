import React,{Component} from 'react';
import QuickDisplay from './QuickDisplay';

var quickUrl = "https://developerfunnel.herokuapp.com/booking";

class QuickSearch extends Component{
    constructor(){
        super()

        this.state={
            tripType:''
        }
    }

    render(){
        return(
            <div>
               <QuickDisplay tripData={this.state.tripType}/>
            </div>
        )
    }

    componentDidMount(){
        fetch(quickUrl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({tripType:data})
        })
    }
}

export default QuickSearch;