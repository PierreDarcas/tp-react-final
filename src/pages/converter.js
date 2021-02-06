import React from "react";
import "./converter.css";
import Input from "../components/Input/input";
import Output from "../components/Output/output";
import CurrencySelector from "../components/CurrencySeletor/currencySelector";
import Spinner  from "../components/Spinner/index";
import ValueDisplay from "../components/Exchangerates/exchangerates";

const BASE_URL = 'https://api.exchangeratesapi.io/latest';

class Converter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      to_convert:null,
      xRates:null,
      base_currency:"EUR",
      exchange_currency:"USD",
    };
  }

  componentDidMount() {
    this.apiCall();
  };
  // componentDidUpdate() {
  //   this.apiCall();
  // };


  setBaseCurrency=(e)=>{
    const {exchange_currency} = this.state;
    if(e.target.value !== exchange_currency){
      this.setState({base_currency: e.target.value});
    }
    this.apiCall();
  }
  setExchangeCurrency=(e)=>{
    const {base_currency} = this.state;
    if(e.target.value !== base_currency){
      this.setState({exchange_currency: e.target.value});
    }
    this.apiCall();
  }
  setValueInput=(e)=>{
    if(!isNaN(e.target.value) && e.target.value != 0){
      this.setState({to_convert: e.target.value});
    }else{
      this.setState({to_convert:null});
    }
    this.apiCall();
  }

  apiCall(){
    const {base_currency} = this.state;
    const {exchange_currency} = this.state;
    fetch(`${BASE_URL}?base=${base_currency}&symbols=${exchange_currency}`)
      .then((res) => res.json())
      .then((resJsonBis) => this.setState({ xRates:resJsonBis.rates[exchange_currency]}));
  }


  componentWillUnmount(){
    const {base_currency} = this.state;
    const {exchange_currency} = this.state;
    const abortController = new AbortController();
    console.log('coucou');
    const {signal} = abortController;
    fetch(`${BASE_URL}?base=${base_currency}&symbols=${exchange_currency}`,{signal})
      .then(response => {console.log(`Request 1 is complete!`);})
      .catch(e => {console.warn(`Fetch 1 error: ${e.message}`);

    abortController.abort();
  });
    
  };


  resetValue=(e)=>{
    this.setState({to_convert:""});
  }

  render(){
    const { to_convert } = this.state;
    const { xRates } = this.state;
    const {base_currency} = this.state;
    const {exchange_currency} = this.state;
    console.log("apiCall base:"+base_currency+", symbol :"+exchange_currency);
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
              {/* <Spinner /> */}
              <div className="row">
                <Input value={to_convert} onChange={this.setValueInput} onClick={this.resetValue}/>
                <Output file={xRates} montant ={to_convert}/>
                {/* <ValueDisplay from={base_currency} to ={exchange_currency} xr={xRates}/> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }

}

export default Converter;
