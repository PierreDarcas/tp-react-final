import React from "react";
import * as PropTypes from "prop-types";


const ExchangeRates = ({ file }) => (
  <p>{file.base} {file.date} 
  {file.rates}
  </p>
);

ExchangeRates.propTypes = {
  file: PropTypes.shape({
    rates: PropTypes.array.isRequired,
    base: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })
};

// ExchangeRates.defaultProps = {
//   rates: [],
// }

export default ExchangeRates;
