import React, { props } from 'react';
import SampleServices from './Services';
import Homepage from './ConnectWallet.js';
import BlockchainHelper from "./BlockchainHelper.js";

export default class Landing extends React.Component {
	constructor() {
		super(props)
		this.network = new BlockchainHelper();
		this.state = {
			web3Initiated: false
		}
	}

	componentDidMount() {
		window.addEventListener('load', () => this.handleWindowLoad());
		let web3Initiated = this.handleWindowLoad();
	}

	handleWindowLoad() {
		// this.network.initialize().then().catch(err => {
		// 	console.error(err);
		// })
		this.network.initialize().then(value => {
			console.log('promise value in landing.js', value);
			this.setState({ web3Initiated: value });
		})

	}

	render() {
		console.log('window.web3', this.state.web3Initiated);
		if(this.state.web3Initiated){console.log('web3',web3)}
		return (
			<React.Fragment>
				{(typeof web3 !== 'undefined') ? <SampleServices /> : <Homepage />}
			</React.Fragment>
		)
	}
}
