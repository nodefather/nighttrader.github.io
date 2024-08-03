// frontend/sendTransaction.js
async function sendBitcoinTransaction() {
    const response = await fetch('/api/btc/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            fromWIF: 'Your_WIF_Key',
            toAddress: 'Receiver_BTC_Address',
            amount: 0.001,
        }),
    });
    const result = await response.json();
    console.log(result);
}

async function sendDAITransaction() {
    const response = await fetch('/api/dai/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            fromAddress: 'Your_ETH_Address',
            privateKey: 'Your_Private_Key',
            toAddress: 'Receiver_DAI_Address',
            amount: 100,
        }),
    });
    const result = await response.json();
    console.log(result);
}
