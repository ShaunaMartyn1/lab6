import React from "react";
import {Books} from './books';
import axios from "axios";

export class Read extends React.Component{

    // reads in data from URL   
    componentDidMount() {
        //Change to new URL - books array using axios 
        axios.get('http://localhost:4000/api/books')
        .then((response)=> {
            this.setState({books:response.data.myBooks})//change to myBooks
        })
        .catch((error)=>{
            console.log(error);//log errors to console
        });
    }
    // Empty array of books  
    state = {
        books:[]
            
    }

     
    render()
    {
        return(
            <div>
                <h3>Hello from Read Component</h3>
                <Books books={this.state.books}></Books>
            </div>
        );
    }
}
