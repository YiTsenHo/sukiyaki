// 切換到 "介紹" 頁面
function showIntro() {
    document.getElementById('content').innerHTML = `
        <h1>介紹</h1>
        <p>壽喜燒是一道日本傳統火鍋料理，具有悠久的歷史和獨特的味道。</p>
    `;
}

// 切換到 "歷史" 頁面
function showHistory() {
    document.getElementById('content').innerHTML = `
        <h1>歷史</h1>
        <p>壽喜燒起源於日本江戶時代，最早的形式是一種簡單的烹調方式。</p>
    `;
}

// 切換到 "醬汁評比" 頁面
function showReviews() {
    document.getElementById('content').innerHTML = `
        <h1>醬汁評比</h1>
        <p>各種壽喜燒醬汁的評比結果如下：甜鹹口味最受歡迎。</p>
    `;
}

// 切換回主頁
function goToHome() {
    document.getElementById('content').innerHTML = `
        <h1>歡迎來到壽喜燒的世界</h1>
        <p>點擊左側選單以瀏覽更多內容。</p>
        <img src="images/sukiyaki.png" alt="壽喜燒圖片" class="homepage-image">
    `;
}
