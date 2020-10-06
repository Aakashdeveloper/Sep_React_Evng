import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

const client = new ApolloClient({
    uri:`http://localhost:8660/graphql`
})


const GET_PRODUCTS=gql`
    query product($id:Int){
        product(id:$id){
            name,
            rating_text
        }
    }
`

class ProductDetails extends Component{
    constructor(){
        super()

        this.state={
            id:3
        }
    }

    render(){
        return(
            <div>
                <Query query={GET_PRODUCTS} client={client} variables={{id:this.state.id}}>
                    {({loading,err,data}) => {
                        if(loading) return <p>Loading....</p>
                        if(err) return <p>Error....</p>
                        return(
                            <div>
                                <h2>{data.product.name}</h2>
                                <h2>{data.product.rating_text}</h2>
                            </div>
                        )
                    }}
                </Query>
            </div>
        )
    }
}

ReactDOM.render(<ProductDetails/>,document.getElementById('root'))