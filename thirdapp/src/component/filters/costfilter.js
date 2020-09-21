import React,{Component} from 'react';
import axios from 'axios';

const curl = "https://developerfunnel.herokuapp.com/hotellist";

class CostFilter extends Component{

    costFilter = (event) => {
        let cost = (event.target.value).split(',');
        let lcost = Number(cost[0]);
        let hcost = Number(cost[1]);
        let tripType = sessionStorage.getItem('tripid');
        let costurl;
        if(event.target.value==' '||event.target.value==''){
            costurl=`${curl}/${tripType}`
        }else{
            costurl=`${curl}/${tripType}?hcost=${hcost}&lcost=${lcost}`
        }

        axios.get(costurl)
        .then((response) => {this.props.roomperCost(response.data)})
    }
    render(){
        return(
            <React.Fragment>
                <center>Cost Filter</center>
                <div onChange={this.costFilter}>
                    <label className="radio">
                        <input type="radio" value="" name="room"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1000,3000" name="room"/>Rs 1000-3000
                    </label>
                    <label className="radio">
                        <input type="radio" value="3001,6000" name="room"/>Rs 3001-6000
                    </label>
                    <label className="radio">
                        <input type="radio" value="6001,12000" name="room"/>Rs 6001-12000
                    </label>
                    <label className="radio">
                        <input type="radio" value="12001,18000" name="room"/>Rs 12001-18000
                    </label>
                </div>
            </React.Fragment>
        )
    }
}


export default CostFilter;