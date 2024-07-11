document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', function(e) {
        if (e.target.closest('.theme-option')) {
            const themeOptions = themeToggle.querySelectorAll('.theme-option');
            themeOptions.forEach(option => {
                option.classList.remove('active-theme');
                option.classList.add('inactive-theme');
            });
            e.target.closest('.theme-option').classList.remove('inactive-theme');
            e.target.closest('.theme-option').classList.add('active-theme');

            if (e.target.closest('.theme-option').querySelector('.theme-text').textContent === 'Dark') {
                body.classList.remove('light-theme');
                body.classList.add('dark-theme');
            } else {
                body.classList.remove('dark-theme');
                body.classList.add('light-theme');
            }
        }
    });

    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(i => i.classList.remove('active-menu-item'));
            this.classList.add('active-menu-item');
        });
    });

    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(i => i.classList.remove('active-nav-item'));
            this.classList.add('active-nav-item');
        });
    });

    function formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
    }

    function updateBalances() {
        const totalBalance = document.querySelector('.total-balance');
        const availableBalance = document.querySelector('.available-balance');
        const ordersBalance = document.querySelector('.orders-balance');

        fetch('/api/balances')
            .then(response => response.json())
            .then(data => {
                totalBalance.textContent = formatCurrency(data.total);
                availableBalance.textContent = formatCurrency(data.available);
                ordersBalance.textContent = formatCurrency(data.orders);
            })
            .catch(error => console.error('Error fetching balances:', error));
    }

    function updateAssetTable() {
        const assetTableBody = document.querySelector('.asset-table-body');

        fetch('/api/assets')
            .then(response => response.json())
            .then(assets => {
                assetTableBody.innerHTML = '';
                assets.forEach(asset => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td class="asset-info">
                            <img src="${asset.icon}" alt="${asset.name}" class="asset-icon">
                            <span class="asset-name">${asset.name}</span>
                        </td>
                        <td class="asset-value">${asset.sum}</td>
                        <td class="asset-value">${formatCurrency(asset.usdValue)}</td>
                        <td class="asset-value">${asset.tradeReady}</td>
                        <td class="asset-value">${asset.orders}</td>
                        <td class="asset-value">${asset.depositing}</td>
                        <td class="asset-actions">
                            <button class="asset-action action-deposit">Deposit</button>
                            <button class="asset-action action-send">Send</button>
                        </td>
                    `;
                    assetTableBody.appendChild(row);
                });
            })
            .catch(error => console.error('Error fetching assets:', error));
    }

    updateBalances();
    updateAssetTable();

    setInterval(updateBalances, 60000);
    setInterval(updateAssetTable, 60000);

    const depositButton = document.querySelector('.deposit-button');
    const withdrawButton = document.querySelector('.withdraw-button');
    const quickChangeButton = document.querySelector('.quick-change-button');

    depositButton.addEventListener('click', function() {
        console.log('Deposit button clicked');
    });

    withdrawButton.addEventListener('click', function() {
        console.log('Withdraw button clicked');
    });

    quickChangeButton.addEventListener('click', function() {
        console.log('Quick change button clicked');
    });
});
