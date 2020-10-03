import React from 'react';
import {Link} from 'react-router-dom';
import './listing.css';
import Pagination from "react-js-pagination";


const renderList = (props, data) => {
    if(data){
        if(data.length>0){
            var limit = props.limit;
            var page = props.activePage;
            data = data.slice((page - 1) * limit, (page - 1) * limit + limit);
            console.log(">>>>data",data)
            return data.map((item) => {
                return(
                    <div className="item" id={item.id}>
                            <div className="row">
                                <div className="col-sm-5">
                                    <img className="Image" src={item.thumb} />
                                </div>
                                <div className="col-sm-6">
                                    <div className="hotel_name">
                                    <Link to={`/details/${item._id}`}>{item.name}</Link></div>
                                    <div className="city_name">{item.city_name}</div>
                                    <div className="address-text">{item.locality}</div>
                                    <div className="address-text">{item.address}</div>
                                </div>
                            </div>
                            <hr/>
                            <div class="row">
                                <div class="col-sm-3">
                                    <div class="CUISINES-COST-FOR-TWO">Room Type</div>
                                    <div class="CUISINES-COST-FOR-TWO">COST FOR Night</div>
                                </div>
                                <div class="col-sm-9">
                                    <div class="Bakery-700">
                                        {item.type[0].name},{item.type[1].name},{item.type[2].name}</div>
                                    <div class="Bakery-700">Rs {item.cost}</div>
                                </div>
                            </div>
                            <hr/>
                            <hr/>
                    </div>
                )
            })
        }else{
            return(
                <div>
                    <center>
                        <p>No Data Found </p>
                    </center>
                </div>
            )
        }
       
    }else{
        return(
            <div>
                <img src="/images/loader.gif"/>
            </div>
        )
    }
}

const handlePageChange = (props, pageNumber) => {
    props.pageNumber(pageNumber);
    var data = props.listData;
    renderList(props, data);
}



const ListingDisplay = (props) => {
    
    console.log(props)
    return(
        <div className="container-fluid">
            <div className="main-heading">
                <div className="row">
                    <div className="col-md-12">
                        {renderList(props, props.listData)}
                    </div>
                </div>
            </div>
            <center>
            <Pagination
                        activePage={props.activePage}
                        itemsCountPerPage={3}
                        totalItemsCount={props.totalNoOfItems}
                        pageRangeDisplayed={6}
                        itemClass="page-item"
                        linkClass="page-link"
                        onChange={(pageNumber) => { handlePageChange(props, pageNumber) }}
                    />
            </center>
        </div>
    )
}

export default ListingDisplay;