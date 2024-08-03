document.addEventListener('DOMContentLoaded', function() {
    // Theme switcher
    const themeSwitcher = document.querySelector('.theme-switch-container');
    const darkOption = themeSwitcher.querySelector('.theme-option:first-child');
    const lightOption = themeSwitcher.querySelector('.theme-option:last-child');

    darkOption.addEventListener('click', () => setTheme('dark'));
    lightOption.addEventListener('click', () => setTheme('light'));

    function setTheme(theme) {
        document.body.className = theme;
        darkOption.classList.toggle('theme-option-active', theme === 'dark');
        lightOption.classList.toggle('theme-option-active', theme === 'light');
        localStorage.setItem('theme', theme);
    }

    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    // Navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(i => i.classList.remove('nav-item-active'));
            item.classList.add('nav-item-active');
        });
    });

    // Market overview
    function updateMarketData() {
        const marketItems = document.querySelectorAll('.market-item');
        marketItems.forEach(item => {
            const changeElement = item.querySelector('.change-value');
            const change = (Math.random() * 2 - 1).toFixed(2);
            changeElement.textContent = `${change}%`;
            changeElement.classList.toggle('change-positive', change >= 0);
            changeElement.classList.toggle('change-negative', change < 0);
        });
    }

    setInterval(updateMarketData, 5000);
    updateMarketData();

    // Trading form
    const buyTab = document.querySelector('.tab-active');
    const sellTab = document.querySelector('.tab-inactive');
    const formAction = document.querySelector('.form-action');

    buyTab.addEventListener('click', () => switchTab('buy'));
    sellTab.addEventListener('click', () => switchTab('sell'));

    function switchTab(action) {
        buyTab.classList.toggle('tab-active', action === 'buy');
        buyTab.classList.toggle('tab-inactive', action !== 'buy');
        sellTab.classList.toggle('tab-active', action === 'sell');
        sellTab.classList.toggle('tab-inactive', action !== 'sell');
        formAction.textContent = action.toUpperCase() + ' BTC';
        formAction.style.backgroundColor = action === 'buy' ? '#00cea9' : '#ff5166';
    }

    const quantityOptions = document.querySelectorAll('.quantity-option');
    quantityOptions.forEach(option => {
        option.addEventListener('click', () => {
            quantityOptions.forEach(o => o.classList.remove('quantity-option-active'));
            option.classList.add('quantity-option-active');
        });
    });

    // Chart
    const timeOptions = document.querySelectorAll('.time-option');
    timeOptions.forEach(option => {
        option.addEventListener('click', () => {
            timeOptions.forEach(o => o.classList.remove('time-option-active'));
            option.classList.add('time-option-active');
        });
    });

    // Order book
    const orderBookTabs = document.querySelectorAll('.order-book-tab');
    orderBookTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            orderBookTabs.forEach(t => t.classList.remove('order-book-tab-active'));
            tab.classList.add('order-book-tab-active');
        });
    });

    function updateOrderBook() {
        const orderItems = document.querySelectorAll('.order-item');
        orderItems.forEach(item => {
            const totalBar = item.querySelector('.total-bar');
            const randomWidth = Math.floor(Math.random() * 100) + 1;
            totalBar.style.width = `${randomWidth}%`;
        });
    }

    setInterval(updateOrderBook, 3000);
    updateOrderBook();

    // Trade history
    const tradeHistoryTabs = document.querySelectorAll('.trade-history-tab');
    tradeHistoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tradeHistoryTabs.forEach(t => t.classList.remove('trade-history-tab-active'));
            tab.classList.add('trade-history-tab-active');
        });
    });

    function updateTradeHistory() {
        const tradeItems = document.querySelectorAll('.trade-history-item, .trade-history-item-alt');
        tradeItems.forEach(item => {
            const typeElement = item.querySelector('.trade-history-value:first-child');
            const type = Math.random() < 0.5 ? 'Buy' : 'Sell';
            typeElement.textContent = type;
            typeElement.className = `trade-history-value trade-type-${type.toLowerCase()}`;
        });
    }

    setInterval(updateTradeHistory, 4000);
    updateTradeHistory();

    // Tooltips
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach(tooltip => {
        const tooltipText = tooltip.querySelector('.tooltiptext');
        tooltip.addEventListener('mouseover', () => {
            tooltipText.style.visibility = 'visible';
            tooltipText.style.opacity = '1';
        });
        tooltip.addEventListener('mouseout', () => {
            tooltipText.style.visibility = 'hidden';
            tooltipText.style.opacity = '0';
        });
    });

    // Modal
    const modal = document.getElementById('tradeModal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementsByClassName('close')[0];

    openModalBtn.onclick = function() {
        modal.style.display = 'block';
        modal.classList.add('fade-in');
        modal.querySelector('.modal-content').classList.add('slide-in');
    }

    closeModalBtn.onclick = function() {
        modal.style.display = 'none';
        modal.classList.remove('fade-in');
        modal.querySelector('.modal-content').classList.remove('slide-in');
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            modal.classList.remove('fade-in');
            modal.querySelector('.modal-content').classList.remove('slide-in');
        }
    }

    // Scrollable content
    const scrollableContents = document.querySelectorAll('.scrollable-content');
    scrollableContents.forEach(content => {
        content.addEventListener('scroll', () => {
            if (content.scrollTop + content.clientHeight >= content.scrollHeight) {
                // Load more content here
                console.log('Reached end of scrollable content');
            }
        });
    });

    // Error handling
    function handleError(error) {
        console.error('An error occurred:', error);
        const errorElement = document.createElement('div');
        errorElement.className = 'error';
        errorElement.textContent = 'An error occurred. Please try again later.';
        document.body.appendChild(errorElement);
        setTimeout(() => errorElement.remove(), 5000);
    }

    // Example of error handling
    try {
        // Some operation that might throw an error
        throw new Error('Example error');
    } catch (error) {
        handleError(error);
    }

    // Loading state
    function showLoading(element) {
        const loadingElement = document.createElement('div');
        loadingElement.className = 'loading';
        loadingElement.textContent = 'Loading...';
        element.appendChild(loadingElement);
        return loadingElement;
    }

    function hideLoading(loadingElement) {
        loadingElement.remove();
    }

    // Example of loading state
    const exampleElement = document.querySelector('.market-overview');
    const loadingElement = showLoading(exampleElement);
    setTimeout(() => hideLoading(loadingElement), 2000);

    // No data state
    function showNoData(element) {
        const noDataElement = document.createElement('div');
        noDataElement.className = 'no-data';
        noDataElement.textContent = 'No data available';
        element.appendChild(noDataElement);
    }

    // Example of no data state
    const noDataExample = document.querySelector('.trade-history-list');
    if (noDataExample.children.length === 0) {
        showNoData(noDataExample);
    }
});
