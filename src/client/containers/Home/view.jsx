import React, { Fragment } from 'react';
import Block from '../../components/Block';
import { Row, Col, Container, Card } from 'react-bootstrap';

const showCashPool = false;

const formatNumber = (price, dec) => price.toLocaleString("en-US", {
    minimumFractionDigits: dec || 0,
    maximumFractionDigits: dec || 0,
});

const HomeView = ({ token_supply, token_price, reg_price, crypto_BNB, crypto_ETH, team }) => (
    <Fragment>
        <Block title={'header'} showTitle={false} className={"img-bg"} >
            <h1>ULN</h1>
            <sub>Universal Linking Network</sub>
            <Row className="briz-col briz-primary justify-content-md-center">
            <Col xs lg="2">
                <header>Total Supply</header>
                <div>{formatNumber(token_supply)}</div>
                {showCashPool ? <sub>${formatNumber((crypto_BNB * token_price * token_supply), 2)}</sub> : null}
            </Col>
            <Col xs lg="2">
                <header>ICO Sales Price</header>
                <div>{token_price}BNB</div>
                <sub>${formatNumber((crypto_BNB * token_price), 2)} USD</sub>
            </Col>
            <Col xs lg="2">
                <header>Registration Key Price</header>
                <div>{reg_price} ULN Tokens</div>
                <sub>${formatNumber(reg_price * (crypto_BNB * token_price), 2)} USD</sub>
            </Col>
            </Row>
        </Block>
        <Block title={'intro'} showTitle={false}>
            <Container>
            <Row>
                <Col>
                <section>
                    <h1>Infrastructure that stays out of the way</h1>
                    <sub>Blockchain infrastructure for the world without limitations.</sub>
                </section>
                </Col>
                <Col>
                <section>
                    <i className="fab fa-bitcoin"></i>
                    <h2>No Native Coin</h2>
                    <p>Without the need of a native coin all tokens and assets on the network are first class citizens. All transaction fees are paid with the token that is used. </p>
                </section>
                <section>
                    <i className="fas fa-balance-scale"></i>
                    <h2>Self Regulation</h2>
                    <p>Solid foundation for clean transactions and automated garbage collection for trash tokens.  The network self regulates to remove trash tokens using the ideologies of a true open market. </p>
                </section>
                </Col>
                <Col>
                <section>
                    <i className="fas fa-car-battery"></i>
                    <h2>Regulated POS</h2>
                    <p>Built to supply the world with a fast, energy efficient network to transition older cryptocurrencies from aging networks to a modern effective network.</p>
                </section>
                <section>
                    <i className="fas fa-cog"></i>
                    <h2>User Friendly Settings</h2>
                    <p>No longer is it needed to be a programmer to build a token or crypto asset. A simple user friendly UI lets users build Cryptocurrencies with in depth configuration options without needing to touch a line of code.</p>
                </section>
                </Col>
            </Row>
            </Container>
        </Block>
        <Block title={'get-it'} showTitle={false} className={"img-bg"}>
            <Container>
            <h1>How to get ULN Tokens</h1>
            <h2>Step 1: Create a Wallet</h2>
            <p>Download Trust Wallet or MetaMask. Keep your wallet phrase a secrete. Never share it and save it in a secure way.</p>
            <h2>Step 2: Add UNL Token to the Wallet</h2>
            <p>For Trust Wallet Search for UNL Token and if it doesn't show up use "Add Custom Token" to include it into your wallet. For MetaMask select "Add Token" and include UNL Token to your wallet.</p>
            <h2>Step 3: Switch to "Binance Smart Chain" (BSC)</h2>
            <p>For Trust Wallet select "Smart Chain" on the main screen. For MetaMask you will first need to connect to the BNB network before adding the token to your wallet.</p>
            <h2>Step 4: Swap BSC for ULN Tokens</h2>
            <p>After your transaction of BSC clears, you can go to PancakeSwap with Trust Wallet or MetaMask to exchange your BSC for ULN Tokens. For more information on how to use PancakeSwap you can review this tutorial.</p>
            </Container>
        </Block>
        <Block title={"node-options"} showTitle={false}>
            <Container>
            <h1>Node Operation</h1>
            <sub>Choosing  a path to profit</sub>
            <Row className="justify-content-md-center">
                <Col xs lg="4" className="outline-primary">
                <h1>ULN</h1>
                <h2>${formatNumber((reg_price * (crypto_BNB * token_price)), 2)}</h2>
                <sub>Cost Per Node</sub>
                <ul>
                    <li className="fas fa-check-circle">Great ROI</li>
                    <li className="fas fa-check-circle">Affordable Node Cost</li>
                    <li className="fas fa-check-circle">Basket of Currencies</li>
                    <li className="fas fa-check-circle">Native Exchange</li>
                    <li className="fas fa-check-circle">Energy Efficient Network</li>
                    <li className="fas fa-check-circle">Fast Affordable Transactions</li>
                    <li className="fas fa-check-circle">Regulated POS Network</li>
                    <li className="fas fa-check-circle">Simple Build Tool</li>
                </ul>
                </Col>
                <Col xs lg="1"></Col>
                <Col xs lg="4" className="outline-primary">
                <h1>ETH 2.0</h1>
                <h2>${formatNumber((crypto_ETH * 32), 2)}</h2>
                <sub>Cost Per Node</sub>
                <ul>
                    <li className="fas fa-times-circle">Long ROI</li>
                    <li className="fas fa-times-circle">Cost limits Nodes to the rich</li>
                    <li className="fas fa-minus-circle">Profit is limited to Eth</li>
                    <li className="fas fa-check-circle">Many De-Fi Exchanges</li>
                    <li className="fas fa-minus-circle">Energy Efficient Network (soon)</li>
                    <li className="fas fa-minus-circle">Fast Affordable Transactions</li>
                    <li className="fas fa-minus-circle">POS Network (soon)</li>
                    <li className="fas fa-check-circle">Mature Programming Language</li>
                </ul>
                </Col>
            </Row>
            </Container>
        </Block>
        <Block title={'linking-nodes'} showTitle={false} className={"img-bg"}>
            <Container className="fade-box">
            <header><i className="fas fa-link"></i></header>
            <h1>Power of linking nodes</h1>
            <p>With the power of linking nodes; we wrap coins from any network into a more effective network removing the downfalls of older networks. </p>
            </Container>
        </Block>
        <Block title={'project-timeline'} showTitle={false}>
            <h1>Project Timeline</h1>
            <Container>
            <Row>
                <Col xs lg="7">
                <ul>
                    <li className="fas fa-highlighter">
                    <header><span>01.</span> ICO sale</header>
                    <p>The sale of the ULN Token will fund the development and marketing.</p>
                    </li>
                    <li className="fas fa-highlighter">
                    <header><span>02.</span> Beta Test Net </header>
                    <p>We will let users with the needed ULN Tokens  generate RegKeys for the Beta Test Network.</p>
                    </li>
                    <li className="fas fa-highlighter">
                    <header><span>03.</span>Stable Main Network</header>
                    <p>Main Net goes live alongside the conversion widget that will let users buy RegKeys for the network using ULN Tokens. </p>
                    </li>
                    <li className="fas fa-highlighter">
                    <header><span>04.</span> Linking Major Networks</header>
                    <p>Linking Nodes will be established to all Blockchains. With each new Linking Node the network will grow in assets and profitability for node operators. </p>
                    </li>
                    <li className="fas fa-highlighter">
                    <header><span>05.</span> Integrated Exchange</header>
                    <p>The integrated Exchange will go live; giving users and node operators the ability to convert all currencies and assets on the network.</p>
                    </li>
                    <li className="fas fa-highlighter">
                    <header><span>06.</span> User Friendly Builder</header>
                    <p>The best part of the network is removing the need for extensive programming skills to develop a crypto-asset. With the builder tool we will open the world to blockchain assets. </p>
                    </li>
                </ul>
                </Col>
                <Col xs lg="1"><i className="fas fa-layer-group icon-big"></i></Col>
            </Row>
            </Container>
        </Block>
        <Block title={'team'} showTitle={false} className={"img-bg"}>
            <Container>
                <h1>Meet Our Talented Team Members</h1>
                <Row>
                    {team.map((person, index) => {
                        return (
                            <Card key={index} style={{ width: '18rem' }}>
                                <Card.Img variant="top" alt={person.name} src={`./img/team/${person.img}`} />
                                <Card.Body>
                                    <Card.Title>{person.name}</Card.Title>
                                    <Card.Text>{person.title}</Card.Text>
                                </Card.Body>
                            </Card>
                        );
                    })}
                </Row>
            </Container>
        </Block>
    </Fragment>
);

export default HomeView;