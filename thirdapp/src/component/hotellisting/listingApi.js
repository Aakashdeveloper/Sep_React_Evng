import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay';
import RoomFilter from '../filters/roomfilter';
import CostFilter from '../filters/costfilter';
import SuggestBlock from './SuggestBlock';

const url = "https://developerfunnel.herokuapp.com/hotellist"

class Listing extends Component{
    constructor(){
        super()

        this.state={
            hotellist:''
        }
    }

    setDataPerFilter(sortedData){
        this.setState({hotellist:sortedData})
    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-2">
                       <RoomFilter roomperType={(data) => {this.setDataPerFilter(data)}}/>
                       <CostFilter roomperCost={(data) => {this.setDataPerFilter(data)}}/>
                    </div>
                    <div className="col-md-10">
                        <SuggestBlock/>
                        <ListingDisplay listData={this.state.hotellist} />
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        var tripid = parseInt(this.props.match.params.id);
        sessionStorage.setItem('tripid',tripid);
        axios.get(`${url}/${tripid}`)
        .then((response) => {this.setState({hotellist:response.data})})
    }
}

export default Listing;