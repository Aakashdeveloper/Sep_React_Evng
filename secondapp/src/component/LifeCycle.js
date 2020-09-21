//Get Initial State
//Set Initial State
//Before Get Created
//Render
//After Get Created
//After loose focus

import React,{Component} from 'react';

class LifeCycle extends Component{

    //1 get initial state
    constructor(props){
        super(props)

        //2 Set Initial state
        this.state={
            title:'LifeCycle'
        }

        console.log(">>>>inside constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log(">>>>inside getDerivedStateFromProps")
    }

    //Before Get Created
    componentWillMount(){
        console.log(">>>>inside componentWillMount")
    }

    componentWillUpdate(){
        console.log(">>>>inside componentWillUpdate")
    }

    componentDidUpdate(){
        console.log(">>>>inside componentDidUpdate")
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log(">>>>inside shouldComponentUpdate")
        if(nextState.title === this.state.title){
            return false
        }else{
            return true
        }
    }

    //4 Render
    render(){
        console.log(">>>>inside render")
        return(
            <div>
                <h1>{this.state.title}</h1>
                <button className="btn btn-success" onClick={() => {this.setState({title:'Something Else'})}}>
                    Click Me
                </button>
            </div>

        )
    }

    componentDidMount(){
        console.log(">>>>inside componentDidMount")
    }

    componentWillUnmount(){
        alert("You are leaving a component")
    }

}

export default LifeCycle