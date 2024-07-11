document.addEventListener('DOMContentLoaded', function() {
    const themeSwitcher = document.querySelector('.theme-switcher');
    const body = document.body;

    themeSwitcher.addEventListener('click', function(e) {
        if (e.target.closest('.theme-option')) {
            const themeOption = e.target.closest('.theme-option');
            const theme = themeOption.dataset.theme;

            document.querySelectorAll('.theme-option').forEach(option => {
                option.classList.remove('active');
            });

            themeOption.classList.add('active');
            body.setAttribute('data-theme', theme);
        }
    });

    const copyButton = document.querySelector('.copy-button');
    const addressValue = document.querySelector('.address-value');

    copyButton.addEventListener('click', function() {
        const tempInput = document.createElement('input');
        tempInput.value = addressValue.textContent;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        copyButton.querySelector('.copy-text').textContent = 'Copied!';
        setTimeout(() => {
            copyButton.querySelector('.copy-text').textContent = 'Copy';
        }, 2000);
    });

    const assetSelector = document.querySelector('.asset-selector');
    const assetName = document.querySelector('.asset-name');
    const assetIcon = document.querySelector('.asset-icon');

    assetSelector.addEventListener('click', function() {
        // This is where you would typically open a dropdown or modal
        // For this example, we'll just cycle through a few predefined assets
        const assets = [
            { name: 'Bitcoin', icon: 'bitcoin-icon.png' },
            { name: 'Ethereum', icon: 'ethereum-icon.png' },
            { name: 'Litecoin', icon: 'litecoin-icon.png' }
        ];

        let currentAsset = assets.findIndex(asset => asset.name === assetName.textContent);
        currentAsset = (currentAsset + 1) % assets.length;

        assetName.textContent = assets[currentAsset].name;
        assetIcon.src = assets[currentAsset].icon;
    });

    // Simulating data fetching for recent deposits
    function fetchRecentDeposits() {
        // This would typically be an API call
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([
                    { date: 'February 19, 2024', time: '16:20', txout: 'fh65nd7mv5lf:1', amount: '100.000000', liquid: '+9.1545641635', reserve: '100.00000', usd: '$10.00', status: 'PENDING' },
                    { date: 'February 19, 2024', time: '16:20', txout: 'fh65nd7mv5lf:1', amount: '50.000000', liquid: '+9.1545641635', reserve: '0.51561156', usd: '$10.00', status: 'PENDING' },
                    { date: 'February 19, 2024', time: '16:20', txout: 'fh65nd7mv5lf:1', amount: '100.000000', liquid: '+9.1545641635', reserve: '100.00000', usd: '$10.00', status: 'DEPOSITED' },
                    { date: 'February 19, 2024', time: '16:20', txout: 'fh65nd7mv5lf:1', amount: '50.000000', liquid: '+9.1545641635', reserve: '0.51561156', usd: '$10.00', status: 'DEPOSITED' },
                    { date: 'February 19, 2024', time: '16:20', txout: 'fh65nd7mv5lf:1', amount: '100.000000', liquid: '+9.1545641635', reserve: '100.00000', usd: '$10.00', status: 'DEPOSITED' },
                ]);
            }, 1000);
        });
    }

    function renderRecentDeposits(deposits) {
        const tableBody = document.querySelector('.deposits-table tbody');
        tableBody.innerHTML = '';

        deposits.forEach(deposit => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${deposit.date}</td>
                <td>${deposit.time}</td>
                <td>${deposit.txout}</td>
                <td>${deposit.amount}</td>
                <td>${deposit.liquid}</td>
                <td>${deposit.reserve}</td>
                <td>${deposit.usd}</td>
                <td class="status-${deposit.status.toLowerCase()}">${deposit.status}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    fetchRecentDeposits().then(renderRecentDeposits);
});
