import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const url = "https://developerfunnel.herokuapp.com/hotelsdetails"

class HotelDetails extends Component{
    constructor(){
        super()
        this.state={
            hotel:{
                "type":[
                    {
                        "name":""
                    },
                    {
                        "name":""
                    },
                    {
                        "name":""
                    }
                ]
            },
            tripid: sessionStorage.getItem('tripid')
        }
    }

    render(){
        var {hotel} = this.state
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>{hotel.name}</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-12">
                                <img className="img-responsive" src={hotel.thumb} 
                                style={{width:1500,height:400}}/>
                            </div>
                            <div className="col-md-12">
                                <h3>{hotel.name}</h3>
                                <h3>{hotel.locality}</h3>
                                <h3>{hotel.address}</h3>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="container">
                        <Tabs>
                            <TabList>
                                <Tab>OverView</Tab>
                                <Tab>Contact</Tab>
                            </TabList>
                        
                            <TabPanel>
                                <h2>About The Place</h2>
                                <br/>
                                <h3>Type</h3>
                                <h4>{hotel.type[0].name} | {hotel.type[1].name} | {hotel.type[2].name}</h4>
                                <h3>Cost Per Night : Rs. {hotel.cost}</h3>
                                
                            </TabPanel>
                            <TabPanel>
                                <h2>Contact Us</h2>
                                <h4>Phone : 84467856565</h4>
                                <div>{hotel.locality}</div>
                            </TabPanel>
                            <br/>
                            <Link to={`/list/${this.state.tripid}`} className="btn btn-danger btn-lg">Back</Link>
                            &nbsp;
                            <Link to={`/booking/${this.props.match.params.id}`} className="btn btn-success btn-lg">Place Order</Link>
                            <br/>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }

    async componentDidMount(){
        let hotelid = this.props.match.params.id;
        let response = await axios.get(`${url}/${hotelid}`)
        this.setState({hotel:response.data[0]})
    }

    /*componentDidMount(){
        let hotelid = this.props.match.params.id;
        axios.get(`${url}/${hotelid}`)
        .then((response) => {this.setState({hotel:response.data})})
    }*/
}


export default HotelDetails