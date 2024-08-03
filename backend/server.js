// backend/server.js
const express = require('express');
const { createBitcoinTransaction } = require('./btcTransaction');
const { sendDAI } = require('./daiTransaction');

const app = express();
app.use(express.json());

app.post('/api/btc/send', async (req, res) => {
    const { fromWIF, toAddress, amount } = req.body;
    try {
        const txHex = await createBitcoinTransaction(fromWIF, toAddress, amount);
        res.json({ success: true, txHex });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

app.post('/api/dai/send', async (req, res) => {
    const { fromAddress, privateKey, toAddress, amount } = req.body;
    try {
        const receipt = await sendDAI(fromAddress, privateKey, toAddress, amount);
        res.json({ success: true, receipt });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
