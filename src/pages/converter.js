import React from "react";
import "./converter.css";
import Input from "../components/Input/input";

class Converter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      to_convert: 0
    };
  }

  render(){
    const { to_convert } = this.state;
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
                <div className="input-field col s12">
                  <h5>Résultat : 0</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }

}

export default Converter;
