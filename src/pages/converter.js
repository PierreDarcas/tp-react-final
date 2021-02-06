import React from "react";
import "./converter.css";
import Input from "../components/Input/input";
import Output from "../components/Output/output";
import ExchangeRates from "../components/Exchangerates/exchangerates";

class Converter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      to_convert: 12,
      just_converted:null,
      xRates:[],
      aRates:[]      
    };
  }

  // componentDidMount() {
  //   fetch("https://api.exchangeratesapi.io/latest?base=USD&symbols=MXN")
  //     .then((res) => res.json())
  //     .then((resJsonBis) => this.setState({ xRates:resJsonBis}))
  //     .then((resJsonBisRates) => this.setState({aRates:resJsonBisRates.rates}));
  // };
  componentDidMount() {
    fetch("https://api.exchangeratesapi.io/latest?base=USD&symbols=MXN")
      .then((res) => res.json())
      .then((resJsonBis) => this.setState({ xRates:resJsonBis.rates["MXN"]}));
  };

  render(){
    const { to_convert } = this.state;
    const { xRates } = this.state;
    const {aRates} = this.state;
    return(
      <main>
        <div className="container">
          <div className="row">
            <h3>Convertisseur</h3>
            <div className="col s8">
              <div className="row">
                <div className="col s6">
                  <select
                    defaultValue="EUR"
                    className="browser-default"
                    name="inputDevises"
                    id="inputDevises"
                  >
                    <option value="EUR">EUR</option>
                    <option value="CHF">CHF</option>
                    <option value="GBP">GBP</option>
                    <option value="USD">USD</option>
                  </select>
                </div>
                <div className="col s6">
                  <select
                    defaultValue="EUR"
                    className="browser-default"
                    name="outputDevises"
                    id="outputDevises"
                  >
                    <option value="EUR">EUR</option>
                    <option value="CHF">CHF</option>
                    <option value="GBP">GBP</option>
                    <option value="USD">USD</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <Input value={to_convert}/>
                <Output output= {aRates}/>
                <ExchangeRates file={xRates} montant ={to_convert}/>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }

}

export default Converter;
