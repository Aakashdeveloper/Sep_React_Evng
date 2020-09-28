import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import superagent from 'superagent';


const furl = "https://github.com/login/oauth/authorize?client_id=841775ffdee13afd7f4f";
const surl = "https://github.com/login/oauth/access_token"

class Header extends Component{

    constructor(props){
        super()

        this.state={
            username:''
        }
    }
 
        renderHeader=()=>{
            console.log("in render",sessionStorage.getItem('username'))
            if(sessionStorage.getItem('username') === null || sessionStorage.getItem('username') === undefined){
                return(
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="https://github.com/login/oauth/authorize?client_id=841775ffdee13afd7f4f">
                            Login With Github
                        </a></li>
                    </ul>
                 )
            }
            else{
                return(
                    <ul class="nav navbar-nav navbar-right">
                    <li><a href="#"><span class="glyphicon glyphicon-user"> </span> Welcome {sessionStorage.getItem('username')}</a></li>
                    </ul>
                )
            }
        }
    
    render(){
        return( 
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Developer Funnel</a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/viewBooking">Booking</Link></li>
                        </ul>
                        {this.renderHeader()}
                        </div>

                    </div>
                </nav>
            </div>
        )
    }

    componentDidMount(){
        const code = (this.props.location.search).split('=')[1]
        console.log(code)
        if(code){
            var requestData = {
                code:code
            }
    
            fetch('http://localhost:9800/oauth', {
                method: "POST",
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(requestData)
              })
                .then(response => response.json())
                .then(data => {
                   var result = data.login
                   sessionStorage.setItem('username',result)
                   this.setState({username:result})
            })
        }
        
    }
}

export default withRouter(Header);