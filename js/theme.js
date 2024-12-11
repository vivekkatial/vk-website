// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    const checkbox = document.querySelector('.theme-switch input');
    
    if (checkbox.checked) {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    }
}

// Initialize theme based on saved preference or system preference
function initializeTheme() {
    const checkbox = document.querySelector('.theme-switch input');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        checkbox.checked = true;
    } else if (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.setAttribute('data-theme', 'dark');
        checkbox.checked = true;
    }
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        const checkbox = document.querySelector('.theme-switch input');
        checkbox.checked = e.matches;
        if (e.matches) {
            document.body.setAttribute('data-theme', 'dark');
        } else {
            document.body.removeAttribute('data-theme');
        }
    }
});

// Initialize theme when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeTheme);