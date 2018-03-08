import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


class Home extends Component {
    render (){
        return (
            <article className="section columns">
                <div className="column card">
                    <figure className="image is-4by3">
                        <img src=" https://placeimg.com/640/480/people/grayscale" alt="Portfolio" />
                    </figure>
                <div className="card-content">
                    <div className="media">
                          <div className="media-content">
                            <p className="subtitle is-6">Browse the users in the system.</p>
                            <br/>
                            <NavLink to="/users" className="button is-primary is-fullwidth" >View Users.</NavLink>
                          </div>
                    </div>
                </div>
                </div>
                <div className="column card">
                    <figure className="image is-4by3">
                        <img src="https://placeimg.com/640/480/tech/grayscale" alt="Stocks" />
                    </figure>
                <div className="card-content">
                    <div className="media">
                          <div className="media-content">
                            <p className="subtitle is-6">Browse the stocks in our system</p>
                            <br/>
                            <NavLink  to={ {pathname: "/stocks" }} className="button is-primary is-fullwidth" >View Stocks.</NavLink>
                          </div>
                    </div>
                </div>
                </div>
                <div className="column card">
                    <figure className="image is-4by3">
                        <img src="https://placeimg.com/640/480/arch/grayscale" alt="About us" />
                    </figure>
                <div className="card-content">
                    <div className="media">
                          <div className="media-content">
                            <p className="subtitle is-6">Find out more about the system</p>
                            <br/>
                            <NavLink to="/aboutus" className="button is-primary is-fullwidth" >About us.</NavLink>
                          </div>
                    </div>
                </div>
                </div>
            </article>
            
        );
    }
}

export default Home;