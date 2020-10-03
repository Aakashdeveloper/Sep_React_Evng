import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay';
import RoomFilter from '../filters/roomfilter';
import CostFilter from '../filters/costfilter';
import SuggestBlock from './SuggestBlock';

const url = "https://developerfunnel.herokuapp.com/hotellist"

var limit = 3;

class Listing extends Component{
    constructor(){
        super()

        this.state={
            hotellist:'',
            activePage: 1,
            totalNoOfItems: 1,
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
                        <ListingDisplay listData={this.state.hotellist} activePage={this.state.activePage} limit={limit} totalNoOfItems={this.state.totalNoOfItems}
                        pageNumber={(data) => { this.setState({ activePage: data }) }} />
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        var tripid = parseInt(this.props.match.params.id);
        sessionStorage.setItem('tripid',tripid);
        axios.get(`${url}/${tripid}`)
        fetch((`${url}/${tripid}`))
        .then((res) => res.json())
        .then((data) => {
            console.log()
            this.setState({
                hotellist: data.slice(0, data.length - 1),
                totalNoOfItems:data.length - 1
            })
        })
    }
}

export default Listing;