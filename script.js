// ページトップに戻るボタンの制御
document.addEventListener('DOMContentLoaded', function() {
    const pageTopButton = document.getElementById('pageTopButton');
    
    // スクロール位置に応じてボタンの表示/非表示を切り替え
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            pageTopButton.classList.remove('hidden');
        } else {
            pageTopButton.classList.add('hidden');
        }
    });
    
    // ボタンクリック時にページトップにスクロール
    pageTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
