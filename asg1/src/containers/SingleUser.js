import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import UserDetails from './UserDetails.js';
import UserPortfolio from './UserPortfolio.js';

class SingleUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentUserId: this.props.id,
            user: [],
            showAddress: false,
            showCompany: false
        };
    }
    // Request to get resources from axios json request
    componentDidMount(){
        let currentUserId = this.props.match.params.id;
        axios.get('https://jsonplaceholder.typicode.com/users/' + currentUserId)
            .then(response => {this.setState({user:response.data});})
            .catch(function (error){
               alert('Error retrieving information, error= ' + error) 
            });
    }
    // Tab handler to show details
    activateDetails =()=>{
        let details= document.querySelector("#details");
        if (!details.classList.contains("is-active")){
            details.classList.add("is-active");
            document.querySelector("#portfolio").classList.remove("is-active");
            document.querySelector("#detailsSection").classList.remove("is-hidden");
            document.querySelector("#portfolioSection").classList.add("is-hidden");
        }

    }
    // Tab handler to show portfolio
    activatePortfolio = ()=>{
        let portfolio = document.querySelector("#portfolio");
        if (!portfolio.classList.contains("is-active")){
            portfolio.classList.add("is-active");    
            document.querySelector("#details").classList.remove("is-active");
            document.querySelector("#detailsSection").classList.add("is-hidden");
            document.querySelector("#portfolioSection").classList.remove("is-hidden");
        }
    }
    
    
    render(){
        if (! this.state.user || this.state.user.length === 0){
            return null;
        }else{
        return (
            <div className="section ">
                <nav className="breadcrumb" aria-label="breadcrumbs">
                  <ul>
                    <li><NavLink to={"/" }>Home</NavLink></li>
                    <li ><NavLink to={"/Users" }><span >&nbsp;</span>Users</NavLink></li>
                    <li className="is-active"><span >&nbsp;&nbsp;</span>{this.state.user.name}</li>

                  </ul>
                </nav>
                <div className="tabs is-boxed is-fullwidth is-marginless">
                    <ul>
                        <li className="is-active" id="details"><a onClick={()=>this.activateDetails()} >Details</a></li>
                        <li id="portfolio"><a onClick={()=>this.activatePortfolio()}>Portfolio</a></li>
                    </ul>
                </div>
                <div className="box is-radiusless	singleUserBox">
                    <div id="detailsSection" className=""><UserDetails user={this.state.user} /></div>
                    <div className="is-hidden" id="portfolioSection"><UserPortfolio id={this.state.user.id} /></div>
                </div>
                
            </div>

        );
        
    }
    }
}

export default SingleUser;