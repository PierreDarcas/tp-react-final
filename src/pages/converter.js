import React from "react";
import "./converter.css";
import Input from "../components/Input/input";
import Output from "../components/Output/output";

class Converter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      to_convert: 12,
      just_converted:0
    };
  }

  componentDidMount() {
    var { to_convert } = this.state;
    fetch("https://exchangeratesapi.io/")
      .then((res) => res.json())
      .then(({ data }) => this.setState({ just_converted: data.rates["CHF"] * to_convert }));
  }

  // .then(data => (!isNaN(amount))?setResult(data.rates[toCurrency] * amount):setResult(0))

  render(){
    var { to_convert } = this.state;
    var { just_converted } = this.state;
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
                <Output output= {just_converted}/>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }

}

export default Converter;
