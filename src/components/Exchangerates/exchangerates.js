import React from "react";
import * as PropTypes from "prop-types";


const ExchangeRates = ({ from,to, xr }) => (
  <p>from :{from} to:{to} xr:{xr}
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
