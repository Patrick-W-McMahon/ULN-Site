import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchCryptoPrice } from './action';
import HomeView from './view';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchCryptoPrice, price} = this.props;
    const { BNBUSDT, ETHUSDT } = price;
    if(BNBUSDT <= 0.00) {
      fetchCryptoPrice('BNBUSDT');
    }
    if(ETHUSDT <= 0.00) {
      fetchCryptoPrice('ETHUSDT');
    }
  }

  render() {
    const { loading, price } = this.props;
    const { BNBUSDT, ETHUSDT } = price;
    return <HomeView token_supply={20000000} token_price={0.25} reg_price={100} crypto_BNB={BNBUSDT} crypto_ETH={ETHUSDT} />;
  }
}

const mapStateToProps = state => {
  const { loading, price: { BNBUSDT, ETHUSDT } } = state.Home;
  return { loading, price: { BNBUSDT, ETHUSDT } };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchCryptoPrice: (keypair) => dispatch(fetchCryptoPrice(keypair))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);