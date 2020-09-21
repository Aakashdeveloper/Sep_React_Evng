import React,{Component} from 'react';
import axios from 'axios';
import BookingDisplay from './bookingDisplay';

const burl="https://developerfunnel.herokuapp.com/allBooking";

class Booking extends Component{
    constructor(){
        super()

        this.state={
            booking:''
        }
    }

    render(){
        return(
            <div className="container">
                <BookingDisplay bookdata={this.state.booking}/>
            </div>
        )
    }

    async componentDidMount(){
        let response = await axios.get(`${burl}`)
        this.setState({booking:response.data})
    }
}

export default Booking;