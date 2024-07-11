document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('light-theme');
            body.classList.remove('dark-theme');
        } else {
            body.classList.add('dark-theme');
            body.classList.remove('light-theme');
        }
    });

    const tabs = document.querySelectorAll('.tab-item');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active-tab'));
            tab.classList.add('active-tab');

            const tabId = tab.getAttribute('data-tab');
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                }
            });
        });
    });

    const toggleSwitches = document.querySelectorAll('.toggle-switch');

    toggleSwitches.forEach(toggle => {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active-toggle');
            const status = toggle.querySelector('.toggle-status');
            status.textContent = toggle.classList.contains('active-toggle') ? 'On' : 'Off';
        });
    });

    const editButtons = document.querySelectorAll('.edit-icon');

    editButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const field = event.target.closest('.form-field');
            const fieldValue = field.querySelector('.field-value');
            const currentValue = fieldValue.textContent;

            const input = document.createElement('input');
            input.type = 'text';
            input.value = currentValue;
            input.classList.add('edit-input');

            fieldValue.replaceWith(input);
            input.focus();

            input.addEventListener('blur', () => {
                const newValue = input.value;
                fieldValue.textContent = newValue;
                input.replaceWith(fieldValue);
            });

            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    input.blur();
                }
            });
        });
    });

    const logoutButton = document.querySelector('.logout-button');

    logoutButton.addEventListener('click', () => {
        // Add logout functionality here
        console.log('Logout clicked');
    });
});
