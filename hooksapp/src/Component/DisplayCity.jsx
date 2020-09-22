import React from 'react';

function DisplayCity(props){

    const renderlist = ({citydata}) => {
        if(citydata){
            return citydata.map((item) => {
                return(
                    <div>
                        <h2>{item.name} | {item.city_name}</h2>
                    </div>
                )
            })
        }
    }

    return(
        <div>
            <center>
                <h2>City List</h2>
            </center>
            {renderlist(props)}
        </div>
    )
}

export default DisplayCity;