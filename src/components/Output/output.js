import React from "react";


class Output extends React.Component{
  render(){ 
    const { output} = this.props;
    return (
    <div className="input-field col s12">
      <h5>Résultat : {output}</h5>
    </div>)
  }
}

export default Output;