import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home/Home';
import Header from './Header';
import Footer from './Footer';
import HotelList from './hotellisting/listingApi';
import HoteldetailApi from './hoteldetails/hoteldetailApi';
import Booking from './booking/booking';
import ViewBooking from './booking/viewBooking';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/list/:id" component={HotelList}/>
                    <Route exact path="/details/:id" component={HoteldetailApi}/>
                    <Route exact path="/booking/:id" component={Booking}/>
                    <Route exact path="/viewBooking" component={ViewBooking}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Routing;