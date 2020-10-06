import React,{Component} from 'react';

const url = "http://localhost:5000/api/auth/userinfo";

class Profile extends Component{
    constructor(){
        super()

        this.state={
            user:''
        }
    }

    handleLogout=()=> {
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('rtk')
        this.props.history.push('/login')
    }

    render(){
        if(sessionStorage.getItem('ltk')==null){
            this.props.history.push('/login')
        }
        sessionStorage.setItem('rtk',this.state.user.role)
        return(
            <div className="panel panel-primary">
                <div class="panel-heading">
                    <h3>User Profile</h3>
                </div>
                <div className="panel-body">
                    <h1>Hi {this.state.user.name}</h1>
                    <h2>Your Email Id is {this.state.user.email}</h2>
                    <h2>Your Role is {this.state.user.role}</h2>
                </div>
                <button className="btn btn-danger"
                onClick={this.handleLogout}>
                    Logout
                </button>

            </div>

        )

    }

    componentDidMount(){
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                user:data
            })
        })
    }

    
}


export default Profile;