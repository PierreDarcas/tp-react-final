import React from "react";

const CurrencySelector = ({...props}) => (
    <div className="col s6">
    <select
      className="browser-default"
      {...props}
    >
      <option value="EUR">EUR</option>
      <option value="CHF">CHF</option>
      <option value="GBP">GBP</option>
      <option value="USD">USD</option>
    </select>
  </div>
);
  
export default CurrencySelector;
