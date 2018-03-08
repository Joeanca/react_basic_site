import React from 'react';
import { NavLink } from 'react-router-dom'
import stockData from '../stocks.json';

// Displays the information for a single stock element
const SingleStock = (props)=> {
        // Reads the information from the match and displays stock requested accordingly if not null
        let stock = stockData.filter((element)=> element.symbol === props.match.params.id)[0];
        if (!stock) {return null;}
            else return (
            <article className="section">                
                <nav className="breadcrumb" aria-label="breadcrumbs">
                  <ul>
                    <li><NavLink to={"/" }>Home</NavLink></li>
                    <li ><NavLink to={"/stocks" }><span >&nbsp;</span>Stocks</NavLink></li>
                    <li className="is-active"><span >&nbsp;&nbsp;</span>{stock.name}</li>

                  </ul>
                </nav>
                {/* https://bulma.io/documentation/components/card/*/}
                <div className="card columns is-vcentered is-marginless is-paddingless">
                    <div className="card-image box is-marginless column">
                        <div className="container logo">
                            <figure className="image image is-3by2">
                                {/* https://stackoverflow.com/questions/44154939/load-local-images-in-react-js */}
                              <img src={process.env.PUBLIC_URL + '/logos/'+ stock.symbol+ '.svg'} alt={stock.symbol} />
                            </figure>
                        </div>
                    </div>
                    <div className=" panel column is-paddingless is-two-thirds-desktop">
                        <div className="singleStockTitle content is-fullwidth"><h1>{stock.name}</h1></div>
                        <div className="panel-block is-fullwidth">
                        <strong>Symbol:</strong> &nbsp;{ stock.symbol }
                        </div>
                        <div className="panel-block is-fullwidth">
                            <strong>Sector:</strong> &nbsp;{ stock.sector }
                        </div>
                        <div className="panel-block is-fullwidth">
                            <strong>Sub-Industry:</strong>&nbsp; { stock.subIndustry }
                        </div>
                        <div className="panel-block is-fullwidth">
                            <strong>Address:</strong>&nbsp; { stock.address }
                        </div>
                    </div>

                </div>
            </article>
        );
};

export default SingleStock;