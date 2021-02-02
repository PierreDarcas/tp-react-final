import React from "react";

const Input = ({...props}) => (
    <div className="input-field col s12">
    <input id="amount" type="text" className="" {...props} />
    <span
      className="helper-text"
      data-error="Erreur"
      data-success="Valide"
    ></span>
    <label htmlFor="amount">Montant</label>
  </div>
);
  
  export default Input;
