$(document).ready(function () {
    const apiUrl = 'https://api.coingecko.com/api/v3/simple/price';
    const currencies = ['bitcoin', 'ethereum', 'litecoin', 'dai'];
    const vsCurrency = 'usd';

    async function fetchRates() {
        try {
            const response = await fetch(`${apiUrl}?ids=${currencies.join(',')}&vs_currencies=${vsCurrency}`);
            const data = await response.json();
            updateRatesUI(data);
        } catch (error) {
            console.error('Error fetching rates:', error);
        }
    }

    function updateRatesUI(rates) {
        $('#btcRate').text(`BTC to USD: ${rates.bitcoin.usd}`);
        $('#ethRate').text(`ETH to USD: ${rates.ethereum.usd}`);
        $('#ltcRate').text(`LTC to USD: ${rates.litecoin.usd}`);
        $('#daiRate').text(`DAI to USD: ${rates.dai.usd}`);
    }

    // Initial fetch
    fetchRates();

    // Refresh rates every 30 seconds
    setInterval(fetchRates, 30000);
});
