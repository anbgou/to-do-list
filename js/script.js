document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.querySelector('#dark-mode-toggle');
    const app = document.querySelector('.app');

    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            app.classList.add('dark-mode');
        } else {
            app.classList.remove('dark-mode');
        }
    });
});
