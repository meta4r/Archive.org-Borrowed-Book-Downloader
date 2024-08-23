javascript:(function() {
    const imgs = document.querySelectorAll('img');
    let found = false;
    imgs.forEach(img => {
        const src = img.src;
        if (src.toLowerCase().includes('0001.jp2')) {
            window.open(src, '_blank');
            found = true;
        }
    });
    if (!found) {
        alert('No image with "0001.jp2" found on this page.');
    }
})();
