// backend/btcTransaction.js
const bitcoin = require('bitcoinjs-lib');
const axios = require('axios');

async function createBitcoinTransaction(fromWIF, toAddress, amount) {
    const keyPair = bitcoin.ECPair.fromWIF(fromWIF);
    const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
    const network = bitcoin.networks.bitcoin;
    const txb = new bitcoin.TransactionBuilder(network);

    const utxos = await axios.get(`https://blockchain.info/unspent?active=${address}`);
    let balance = 0;
    utxos.data.unspent_outputs.forEach((utxo) => {
        txb.addInput(utxo.tx_hash_big_endian, utxo.tx_output_n);
        balance += utxo.value;
    });

    const fee = 10000;
    const sendAmount = amount * 100000000;
    if (balance < sendAmount + fee) throw new Error('Insufficient balance');

    txb.addOutput(toAddress, sendAmount);
    txb.addOutput(address, balance - sendAmount - fee);
    utxos.data.unspent_outputs.forEach((_, index) => {
        txb.sign(index, keyPair);
    });

    return txb.build().toHex();
}

module.exports = { createBitcoinTransaction };
