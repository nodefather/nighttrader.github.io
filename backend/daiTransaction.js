// backend/daiTransaction.js
const Web3 = require('web3');
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

const daiABI = [/* DAI ABI Array */];
const daiAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F';

async function sendDAI(fromAddress, privateKey, toAddress, amount) {
    const daiContract = new web3.eth.Contract(daiABI, daiAddress);
    const data = daiContract.methods.transfer(toAddress, web3.utils.toWei(amount, 'ether')).encodeABI();

    const tx = {
        from: fromAddress,
        to: daiAddress,
        gas: 2000000,
        data,
    };

    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
    return web3.eth.sendSignedTransaction(signedTx.rawTransaction);
}

module.exports = { sendDAI };
