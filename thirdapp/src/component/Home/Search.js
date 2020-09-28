import React,{Component} from 'react';
import './Search.css';

const lurl = "https://developerfunnel.herokuapp.com/location"
const hurl= "https://developerfunnel.herokuapp.com/hotels?city="

class Search extends Component{
    constructor(){
        super()

        this.state={
            location:'',
            hotels:''
        }
    }

    handleCity = (event) => {
        var data  = (event.target.value).split(',')
        console.log(data)
        var cityId = data[0];
        var cityName = data[1];
        sessionStorage.setItem('CityName',cityName)
        fetch(`${hurl}${cityId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({hotels:data})
        })
        var url =`http://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
        fetch(`${url}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            sessionStorage.setItem('currentWeather',data.list[0].temp.day)
        })
    }

    renderCity= (data) =>{
        if(data){
            return data.map((item,index) => {
                return(
                    <option  value={`${item.city},${item.city_name}`} key={index}>
                        {item.city_name}
                    </option>
                )
            })
        }
    }

    renderHotel= (data) =>{
        if(data){
            return data.map((item) => {
                return(
                    <option  value={item._id}>
                        {item.name}|{item.city_name}
                    </option>
                )
            })
        }
    }

    handleRestaurent = (event) => {
        this.props.hid(Number(event.target.value))
    }

    render(){
        return(
            <header>
                <div className="imageContainer">
                    <div id="logo">
                        <b>D!</b>
                    </div>
                    <div className="heading">
                        Plan Your Trip
                    </div>
                    <div className="locationSelector">
                        <select className="locationDropDown" onChange={this.handleCity}>
                            <option>----SELECT YOUR CITY-----</option>
                            {this.renderCity(this.state.location)}
                        </select>
                        <select className="reataurantsinput" onChange={this.handleRestaurent}>
                            <option>----SELECT YOUR HOTEL-----</option>
                            {this.renderHotel(this.state.hotels)}
                        </select>
                    </div>

                </div>
            </header>
        )
    }

    componentDidMount(){
        fetch(lurl,{method:'GET'})
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data)
            this.setState({location:data})
        })
    }
}

export default Search;