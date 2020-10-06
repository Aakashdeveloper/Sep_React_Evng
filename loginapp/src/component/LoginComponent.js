import React,{Component} from 'react';

const loginUrl = "http://localhost:5000/api/auth/login";

class Login extends Component{
    constructor(){
        super()

        this.state={
            email:'',
            password:''
        }
    }

   
    handleChangeEmail = (event) => {
        this.setState({email:event.target.value})
    }
    handleChangePassword = (event) => {
        this.setState({password:event.target.value})
    }


    handleSubmit = () => {
        var data={
            "email":this.state.email,
            "password":this.state.password
        }

       fetch(loginUrl,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
          })
          .then((res) => res.json())
          .then((data) => {
            sessionStorage.setItem('ltk',data.token)
            this.props.history.push('/profile?message"loginSuccess"')
          })
          
    }

    render(){
        return(
            <div className="container">
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h4>Login Page</h4>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" name="email" value={this.state.email} className="form-control" onChange={this.handleChangeEmail}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="text" name="password" value={this.state.password} className="form-control" onChange={this.handleChangePassword}/>
                        </div>
                        <button  className="btn btn-success" onClick={this.handleSubmit}>Login</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default Login;