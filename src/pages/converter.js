import React, { useEffect, useState } from "react";
import "./converter.css";
import Input from "../components/Input/input";
import Output from "../components/Output/output";
import CurrencySelector from "../components/CurrencySeletor/currencySelector";
import ExchangeRates from "../components/Exchangerates/exchangerates";

const searchChanged = (value) => () => ({
  search: value || ""
});

const BASE_URL = 'https://api.exchangeratesapi.io/latest';

class Converter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      to_convert:null,
      xRates:null,
      base_currency:"EUR",
      exchange_currency:"USD",
      reconst_url:""
    };
  }

  // componentDidMount() {
  //   fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
  //     .then((res) => res.json())
  //     .then((resJsonBis) => this.setState({ xRates:resJsonBis}))
  //     .then((resJsonBisRates) => this.setState({aRates:resJsonBisRates.rates}));
  // };

  componentDidMount() {
    this.apiCall();
    // fetch("https://api.exchangeratesapi.io/latest?base=EUR&symbols=USD")
    //   .then((res) => res.json())
    //   .then((resJsonBis) => this.setState({ xRates:resJsonBis.rates["USD"]}));
  };
  // componentDidUpdate() {
  //   const {exchange_currency} = this.state
  //   fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
  //     .then((res) => res.json())
  //     .then((resJsonBis) => this.setState({ xRates:resJsonBis.rates[{exchange_currency}]}));
  // };

  setBaseCurrency=(e)=>{
    this.setState({base_currency: e.target.value});
    this.apiCall();
  }
  setExchangeCurrency=(e)=>{
    this.setState({exchange_currency: e.target.value});
    this.apiCall();
  }
  setValueInput=(e)=>{
    this.setState({to_convert: e.target.value});
    this.apiCall();
  }

  apiCall(){
    const {base_currency} = this.state;
    const {exchange_currency} = this.state;
    this.setState({reconst_url: `${BASE_URL}?base=${base_currency}&symbols=${exchange_currency}` });
    fetch(`${BASE_URL}?base=${base_currency}&symbols=${exchange_currency}`)
    //fetch("https://api.exchangeratesapi.io/latest?base=EUR&symbols=MXN")
      .then((res) => res.json())
      .then((resJsonBis) => this.setState({ xRates:resJsonBis.rates["USD"]}));
      //.then((resJsonBis) => this.setState({ xRates:resJsonBis.rates[{exchange_currency}]}));
  }

  resetValue=(e)=>{
    this.setState({to_convert:""});
  }

  render(){
    const { to_convert } = this.state;
    const { xRates } = this.state;
    const {base_currency} = this.state;
    const {exchange_currency} = this.state;
    const {reconst_url} = this.state;
    return(
      <main>
        <div className="container">
          <div className="row">
            <h3>Convertisseur</h3>
            <div className="col s8">
              <div className="row">
                <CurrencySelector value={base_currency} onChange={this.setBaseCurrency}/>
                <CurrencySelector value={exchange_currency} onChange={this.setExchangeCurrency}/>
              </div>
              <div className="row">
                <Input value={to_convert} onChange={this.setValueInput} onClick={this.resetValue}/>
                <Output file={xRates} montant ={to_convert}/>
                <ExchangeRates from={base_currency} to ={exchange_currency} xr={xRates}/>
              </div>
              <p>{reconst_url}</p>
            </div>
          </div>
        </div>
      </main>
    )
  }

}

export default Converter;
