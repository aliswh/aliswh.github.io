(function () {
    function currentTheme() {
        return document.documentElement.classList.contains('light-mode') ? 'light' : 'dark';
    }
    function setIcon(btn) {
        var theme = currentTheme();
        btn.textContent = theme === 'light' ? '🌙' : '☀️';
        btn.setAttribute('aria-label', theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
    }
    document.addEventListener('DOMContentLoaded', function () {
        var btn = document.getElementById('theme-toggle');
        if (!btn) return;
        setIcon(btn);
        btn.addEventListener('click', function () {
            var next = currentTheme() === 'light' ? 'dark' : 'light';
            document.documentElement.classList.toggle('light-mode', next === 'light');
            localStorage.setItem('journalTheme', next);
            setIcon(btn);
        });
    });
})();
