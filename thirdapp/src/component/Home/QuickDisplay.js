import React from 'react';
import './QuickSearch.css';
import {Link} from 'react-router-dom';

const QuickDisplay = (props) => {

    const listTrip = ({tripData}) => {
        if(tripData){
            return tripData.map((item,index) => {
                return(
                    <Link to={`/list/${item.trip}`} key={index}>
                        <div className="tileContainer">
                            <div className="tileComponent1">
                                <img src={item.image}/>
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    {item.name}
                                </div>
                                <div className="componentSubHeading">
                                    Start your trip in {item.name} style
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }

    return(
        <div>
            <div className="quickSearchContainer">
                <p className="quickSearchHeding">
                    Quick Search
                </p>
                <p className="quickSearchSubHeding">
                    Discover Trip By Type
                </p>
                <br/>
                {listTrip(props)}
            </div>
        </div>

    )
}

export default QuickDisplay;