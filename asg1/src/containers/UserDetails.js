import React, { Component } from 'react';

class UserDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: this.props.user,
            showAddress: false,
            showCompany: false
        };
    }
    expandAddress= () =>{
        if (!this.state.showAddress)
        this.setState({showAddress: true});
        else 
        this.setState({showAddress: false});

    }
    
    expandCompany= ()=>{
         if (!this.state.showCompany)
            this.setState({showCompany: true});
        else 
            this.setState({showCompany: false});
    }
    render(){
        return(
            <div>
                <article className="card panel">
                    <div className="panel-heading is-fullwidth">
                        {this.state.user.name}
                    </div>
                    <div className="card panel">
                        <div className="panel-block">
                            <strong>UserName: </strong> <small>@{ this.state.user.username }</small>
                        </div>
                        <div className="panel-block">
                            <strong>Email: </strong> { this.state.user.email }
                        </div>
                        <div className="panel-block">
                            <strong>Phone: </strong>{ this.state.user.phone }
                        </div>
                        <div className="panel-block">
                            <strong>Website: </strong>{ this.state.user.website }
                        </div>
                    </div>
                </article>
                <article className="card panel">
                    <div className="  panel-heading is-fullwidth has-text-left button is-info is-marginless level" onClick={this.expandCompany}>
                        <span className="level-left">Company details </span>
                        <span className="fas fa-arrows-alt-v level-right is-size-5 is-vertical-center is-marginless" />
                    </div>
                  { this.state.showCompany?

                    <div className="card panel">
                        <div className="panel-block">
                            <strong>Company name:</strong> &nbsp;{ this.state.user.company.name }
                        </div>
                        <div className="panel-block">
                            <strong>Catchphrase: </strong> &nbsp;{ this.state.user.company.catchPhrase }
                        </div>
                        <div className="panel-block">
                                <strong>Slogan: </strong> &nbsp;{ this.state.user.company.bs }
                        </div>
                        <div className="panel-block">
                            <strong>Website: </strong>&nbsp;{ this.state.user.website }
                        </div>
                    </div>
                    :null
                  }
                </article>
                <article className="card panel">
                    <div className="  panel-heading is-fullwidth has-text-left button is-info is-marginless level" onClick={this.expandAddress}>
                        <span className="level-left">User address details </span>
                        <span className="fas fa-arrows-alt-v level-right is-marginless"/>
                    </div>
                  { this.state.showAddress?

                    <div className="card panel">
                        <div className="panel-block">
                            <strong>Street:</strong> &nbsp;{ this.state.user.address.street }
                        </div>
                        <div className="panel-block">
                            <strong>Suite:</strong> &nbsp;{ this.state.user.address.suite }
                        </div>
                        <div className="panel-block">
                            <strong>City:</strong>&nbsp; { this.state.user.address.city }
                        </div>
                        <div className="panel-block">
                            <strong>Zipcode:</strong>&nbsp; { this.state.user.address.zipcode }
                        </div>
                        <div className="panel-block">
                            <strong>Geolocation:</strong> &nbsp;{ this.state.user.address.geo.lat }, { this.state.user.address.geo.lng }
                        </div>
                    </div>
                    :null
                  }
                </article>
            </div>
        );
    }
}
export default UserDetails;
