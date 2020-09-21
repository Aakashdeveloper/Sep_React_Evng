import React from 'react';
import {Link} from 'react-router-dom';
import './suggestblock.css';

const ListingDisplay = (props) => {

    const renderList =({sudata}) => {
        if(sudata){
            return sudata.map((item) => {
                return(
                   
                         <div className='card col-md-2'>
                                <h3><Link to={`/details/${item._id}`}>{item.name}</Link></h3>
                                <img className='card-img-top' src={item.thumb}/>
                                <div className='card-body'>
                                    <h4 className='card-title'>{item.locality}</h4>
                                    <p className='card-text'>
                                        <p>Cost: {item.cost}</p>
                                    </p>
                                </div>
                        </div>
                )
            })
        }

    }
    return(
        <div className="container">
             <h3>Weather of Your city is {sessionStorage.getItem('currentWeather')} °C. Some Suggestion For You</h3>
            <div className="row">
                {renderList(props)}
            </div>
            <hr/>
        </div>
    )
}

export default ListingDisplay;