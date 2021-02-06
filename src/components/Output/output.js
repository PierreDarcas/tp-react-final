import React from "react";


const Output = ({ file,montant }) => (
<div className="input-field col s12">
      <h5>Résultat : {file*montant }</h5>
    </div>
);

export default Output;