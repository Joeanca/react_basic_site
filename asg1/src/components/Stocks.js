import React from 'react';
import stockData from '../stocks.json';
import { NavLink } from 'react-router-dom';

const Stocks = ()=>{
    // Sorts through the array of the imported stocks and displays logo and name with a clickable link to a single stock
    // eslint-disable-next-line
    stockData.sort((a,b)=>{a.stockName - b.stockName});
    return(
        <div className="section">
            <nav className="breadcrumb is-12" aria-label="breadcrumbs">
              <ul>
                <li><NavLink to={"/" }>Home</NavLink></li>
                <li className="is-active"><span >&nbsp;&nbsp;</span>Stocks</li>
              </ul>
            </nav>
            <div className="card-table">
                <div className="content">
                  <div className="table">
                    <div  className="box tbody panel">
                    {/* uses the map function to output individual stocks*/}
                    {stockData.map((stock, ind)=>{return(
                      <div className="is-fullwidth columns panel-block " key={ind}>
                        <NavLink to={"/stocks/" + stock.symbol} className="columns  column is-12">
                            <div  className=" column  is-3 is-centered	" >
                                    <figure className="image box  is-marginless is-128x128 is-centered">
                                        {/* https://stackoverflow.com/questions/44154939/load-local-images-in-react-js */}
                                      <img src={process.env.PUBLIC_URL + '/logos/'+ stock.symbol+ '.svg'} alt={stock.symbol} />
                                    </figure>
                            </div>
                            <div  className=" column is-9  ">
                                <h1 className="">{stock.name}</h1>
                            </div>
                        </NavLink>
                      </div>
                );})}
                </div>
            </div>
        </div>
      </div>
        </div>
    );

};
export default Stocks;