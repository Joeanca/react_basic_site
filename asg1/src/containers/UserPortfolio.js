import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import stockData from '../stocks.json';
import StockPortfolio from '../userStockPortfolio.json';
class UserPortfolio extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentUserId: this.props.id,
        };
    }
    // Wait for component to mount and data to load to sort stocks.
    componentDidMount=()=>{
        this.sortStocksName(stockData);
    }
    // then sort the stocks by name and set the state to the sorted stocks 
    sortStocksName= ()=>{
        let singleUserStockPortfolio =  StockPortfolio.filter((element)=> element.userId === this.state.currentUserId);
        this.setState({userStockPortfolio:singleUserStockPortfolio});
        let userPortFolioFound =[];
        for (let singleStock of singleUserStockPortfolio){
            //search for the symbol of singleStock.symbol in the stockData array 
            // eslint-disable-next-line
            stockData.find((element)=>{if(singleStock.symbol === element.symbol){userPortFolioFound.push({symbol:element.symbol,amount:singleStock.amount,stockName:element.name})}});
        }
        userPortFolioFound = userPortFolioFound.sort((a,b)=>{let result =0; if (a.stockName <b.stockName)result=-1;else if(b.stockName<a.stockName)result=1;return result;});
        this.setState({userPortfolio:userPortFolioFound});
    }
    // Sort by columns, I could have done just the one with a switch but didn't have the time to put into this.
    sortColumn= (modder)=>{
        let sorted = [];
        let amountCol = document.querySelector("#amountCol");
        let nameCol = document.querySelector("#nameCol");
        let symbolCol = document.querySelector("#symbolCol");
        //amount
        if(modder==='amount' && amountCol.classList.contains("ascending")){
            sorted = this.state.userPortfolio.sort((a,b)=>{let result =0;if (a.amount <b.amount)result=1;else if(b.amount<a.amount)result=-1;return result;});
            amountCol.classList.remove("ascending");
            amountCol.classList.add("descending");
        }else if(modder==='amount' && amountCol.classList.contains("descending")){
            sorted = this.state.userPortfolio.sort((a,b)=>{let result =0;if (a.amount <b.amount)result=-1;else if(b.amount<a.amount)result=1;return result;});
            amountCol.classList.remove("descending");
            amountCol.classList.add("ascending");
        }
        //name
         if(modder==='name' && nameCol.classList.contains("ascending")){
            sorted = this.state.userPortfolio.sort((a,b)=>{let result =0;if (a.stockName <b.stockName)result=1;else if(b.stockName<a.stockName)result=-1;return result;});
            nameCol.classList.remove("ascending");
            nameCol.classList.add("descending");
        }else if(modder==='name' && nameCol.classList.contains("descending")){
            sorted = this.state.userPortfolio.sort((a,b)=>{let result =0;if (a.stockName <b.stockName)result=-1;else if(b.stockName<a.stockName)result=1;return result;});
            nameCol.classList.remove("descending");
            nameCol.classList.add("ascending");
        }
        //symbol
         if(modder==='symbol' && symbolCol.classList.contains("ascending")){
            sorted = this.state.userPortfolio.sort((a,b)=>{let result =0;if (a.symbol <b.symbol)result=1;else if(b.symbol<a.symbol)result=-1;return result;});
            symbolCol.classList.remove("ascending");
            symbolCol.classList.add("descending");
        }else if(modder==='symbol' && symbolCol.classList.contains("descending")){
            sorted = this.state.userPortfolio.sort((a,b)=>{let result =0;if (a.symbol <b.symbol)result=-1;else if(b.symbol<a.symbol)result=1;return result;});
            symbolCol.classList.remove("descending");
            symbolCol.classList.add("ascending");
        }
        this.setState({userPortfolio:sorted});
    }
    render(){
        return(
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth is-narrow-mobile">
                    <tbody>
                    <tr className="thead  amountDown nameDown symbolDown is-narrow-mobile" id="sortTracker">
                        <th onClick={()=>this.sortColumn("symbol")} ><span className="media"><a className="button is-text media-content	is-narrow-mobile">Symbol</a><span className="icon media-right"><i className="fas fa-arrows-alt-v ascending" id='symbolCol'></i></span></span></th>
                        <th onClick={()=>this.sortColumn("name")} ><span className="media"><a className="button is-text media-content	is-narrow-mobile">name</a><span className="icon media-right"><i className="fas fa-arrows-alt-v ascending" id='nameCol'></i></span></span></th>
                        <th onClick={()=>this.sortColumn("amount")}><span className="media"><a className="button is-text media-content	is-narrow-mobile">amount</a><span className="icon media-right"><i className="fas fa-arrows-alt-v ascending" id='amountCol'></i></span></span></th>
                        </tr>
                        {/*  check state and render if/when available */}
                        {this.state.userPortfolio?
                            this.state.userPortfolio.map((stock, ind) => {
                                return(
                                    <tr key={ind}>
                                    <td>
                                        <NavLink to={"/stocks/" + stock.symbol} stock={stock} key={ind}>{stock.symbol}</NavLink>
                                    </td>
                                    <td><NavLink to={"/stocks/" + stock.symbol} key={ind}>{stock.stockName}</NavLink></td>
                                    <td>{stock.amount}</td>
                                    </tr>
                                );
                            }):null
                        }
                    </tbody>

            </table>        
        );
    }
}
export default UserPortfolio;