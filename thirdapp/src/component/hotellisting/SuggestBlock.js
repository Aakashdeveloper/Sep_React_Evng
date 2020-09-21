import React,{Component} from 'react';
import axios from 'axios';
import SuggestDisplay from './suggestDisplay'

var url =" https://developerfunnel.herokuapp.com/hotels?city="

class SuggestBlock extends Component {
    constructor(){
        super()

        this.state={
            suggestion:''
        }
    }

    render(){
        return(
            <div>
                <SuggestDisplay sudata={this.state.suggestion}/>
            </div>
        )
    }
    

    componentDidMount(){
        let weather = sessionStorage.getItem('currentWeather')
        weather = Number(weather)
        let surl
        if(weather > 30){
            surl = `${url}6`
        }else{
            surl = `${url}5`
        }
        console.log("surl",surl)
        axios.get(`${surl}`)
        .then((response) => {this.setState({suggestion:response.data})})
    }
}


export default SuggestBlock;