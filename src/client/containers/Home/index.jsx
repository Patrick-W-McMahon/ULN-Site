import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { fetchCryptoPrice, fetchStaticData } from './action';
import HomeView from './view';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDatasheetModal: false
    };
  }

  componentDidMount() {
    const { fetchCryptoPrice, fetchStaticData, price, staticData } = this.props;
    const { BNBUSDT, ETHUSDT } = price;
    const { TOKEN, TEAM, TIMELINE } =  staticData;
    if(BNBUSDT <= 0.00) {
      fetchCryptoPrice('BNBUSDT');
    }
    if(ETHUSDT <= 0.00) {
      fetchCryptoPrice('ETHUSDT');
    }
    if(TOKEN.token_supply == 0) {
      fetchStaticData('TOKEN');
    }
    if(TEAM.length == 0) {
      fetchStaticData('TEAM');
    }
    if(TIMELINE.length == 0) {
      fetchStaticData('TIMELINE');
    }
  }

  setDatasheetModal = (event, value) => {
    console.log('event', event);
    console.log('value', value);
    this.setState({ showDatasheetModal: value });
  }

  render() {
    const { loading, price, staticData, authentication } = this.props;
    const { BNBUSDT, ETHUSDT } = price;
    const { TOKEN, TEAM, TIMELINE } =  staticData;
    const { token_price, token_supply, reg_price, circulating } = TOKEN;
    if( loading ) {
      return <div>Loading</div>;
    }
    const workingData = {
      token_supply, 
      token_price, 
      reg_price, 
      crypto_BNB: BNBUSDT, 
      crypto_ETH: ETHUSDT,
    };
    return <HomeView token_supply={token_supply} token_price={token_price} reg_price={reg_price} circulating={circulating} crypto_BNB={BNBUSDT} crypto_ETH={ETHUSDT} team={TEAM} timeline={TIMELINE} />;
  }
}

const mapStateToProps = state => {
  const { loading, price: { BNBUSDT, ETHUSDT }, staticData: { TOKEN, TEAM, TIMELINE, CIRCULATING } } = state.Home;
  return { loading, price: { BNBUSDT, ETHUSDT }, staticData: { TOKEN, TEAM, TIMELINE, CIRCULATING } };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchCryptoPrice: (keypair) => dispatch(fetchCryptoPrice(keypair)),
    fetchStaticData: key => dispatch(fetchStaticData(key))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);