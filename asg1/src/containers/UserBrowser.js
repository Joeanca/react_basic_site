import React, { Component } from 'react';
import axios from 'axios';
import UserListItem from './UserListItem.js';
import { NavLink } from 'react-router-dom';


class UserBrowser extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: []
        };
        this.handleSelect = this.handleSelect.bind(this);
    } 
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            this.setState({users:response.data.sort((a,b)=>{ let result  =0; if(a.name>b.name){result=1;}else if(b.name>a.name){result=-1;} return result;})});
        })
        .catch(function (error){
            alert('Error with api call ... error=' + error);
        });
    }
    
    handleSelect(key){
        this.setState({ currentUserId: key});
    }
    
    render (){
        if (! this.state.users || this.state.users.length === 0){
            return null;
        }else{
            return (
                <article className="section">
                    <nav className="breadcrumb" aria-label="breadcrumbs">
                      <ul>
                        <li><NavLink to={"/" }>Home</NavLink></li>
                        <li className="is-active"><span >&nbsp;&nbsp;</span>Users</li>
                      </ul>
                    </nav>
                    <div className=" columns">
                    <section className="column">
                        <nav className="panel">
                            <h3 className="panel-heading">Users</h3>
                            {
                                this.state.users.map( (user, ind) => {
                                  return (
                                    <UserListItem key={user.id} index={ind}
                                        identifier={user.id}
                                        >{user.name}</UserListItem>
                                  );
                                })
                            }
                        </nav>
                    </section>
                    </div>
                </article>
            );
        }
    }
}

export default UserBrowser;