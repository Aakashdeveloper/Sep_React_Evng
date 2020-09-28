import React from 'react';
import Search from './Search';
import QuickSearch from './QuickSearch';

const Home = (props) => {

    
    const handleHotel = (data) => {
        props.history.push(`/details/${data}`)
    }
    return(
        <div>
            <Search hid={(data) => {handleHotel(data)}}/>
            <QuickSearch/>
        </div>
    )


}

export default Home;