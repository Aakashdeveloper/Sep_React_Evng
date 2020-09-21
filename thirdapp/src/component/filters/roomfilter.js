import React,{Component} from 'react';
import axios from 'axios';

const rurl = "https://developerfunnel.herokuapp.com/hotellist";

class RoomFilter extends Component{

    roomFilter = (event) => {
        let roomType = event.target.value;
        let tripType = sessionStorage.getItem('tripid');
        let roomurl;
        if(roomType==''){
            roomurl=`${rurl}/${tripType}`
        }else{
            roomurl=`${rurl}/${tripType}?roomtype=${event.target.value}`
        }

        axios.get(roomurl)
        .then((response) => {this.props.roomperType(response.data)})
    }
    render(){
        return(
            <React.Fragment>
                <center>Room Type</center>
                <div onChange={this.roomFilter}>
                    <label className="radio">
                        <input type="radio" value="" name="room"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1" name="room"/>Deluxe Room
                    </label>
                    <label className="radio">
                        <input type="radio" value="2" name="room"/>Premium Room
                    </label>
                    <label className="radio">
                        <input type="radio" value="3" name="room"/>Travel Room
                    </label>
                    <label className="radio">
                        <input type="radio" value="4" name="room"/>Semi Deluxe Room
                    </label>
                </div>
            </React.Fragment>
        )
    }
}


export default RoomFilter;