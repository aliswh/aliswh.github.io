document.addEventListener('click', function (e) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    var link = e.target.closest('a.button_link');
    if (!link) return;
    e.preventDefault();
    document.body.style.opacity = 0;
    window.setTimeout(function () {
        window.location.href = link.href;
    }, 150);
});
