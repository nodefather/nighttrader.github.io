document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('light-mode');
    });

    const assetSelector = document.querySelector('.asset-selector');
    const assetName = document.querySelector('.asset-name');
    const assetIcon = document.querySelector('.asset-icon');

    const assets = [
        { name: 'Bitcoin', icon: 'bitcoin-icon.svg' },
        { name: 'Ethereum', icon: 'ethereum-icon.svg' },
        { name: 'Litecoin', icon: 'litecoin-icon.svg' }
    ];

    let currentAssetIndex = 0;

    assetSelector.addEventListener('click', function() {
        currentAssetIndex = (currentAssetIndex + 1) % assets.length;
        const currentAsset = assets[currentAssetIndex];
        assetName.textContent = currentAsset.name;
        assetIcon.src = currentAsset.icon;
    });

    const quantityInput = document.querySelector('.quantity-input input');
    const maxButton = document.querySelector('.max-button');
    const balance = parseFloat(document.querySelector('.balance-amount .amount').textContent);

    maxButton.addEventListener('click', function() {
        quantityInput.value = balance.toFixed(8);
    });

    const submitButton = document.querySelector('.submit-button');
    const receiverInput = document.querySelector('.receiver-input input');

    submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        const quantity = parseFloat(quantityInput.value);
        const receiver = receiverInput.value;

        if (isNaN(quantity) || quantity <= 0 || quantity > balance) {
            alert('Invalid quantity');
            return;
        }

        if (!receiver) {
            alert('Please enter a receiver address');
            return;
        }

        // Here you would typically send the withdrawal request to your server
        console.log(`Withdrawal request: ${quantity} ${assets[currentAssetIndex].name} to ${receiver}`);
        alert('Withdrawal request submitted');
    });

    const withdrawalRows = document.querySelectorAll('.table-row, .table-row-alt');
    withdrawalRows.forEach(row => {
        row.addEventListener('click', function() {
            const txout = this.querySelector('div:nth-child(3)').textContent;
            console.log(`Transaction details for: ${txout}`);
            // Here you would typically open a modal or navigate to a page with transaction details
        });
    });
});
