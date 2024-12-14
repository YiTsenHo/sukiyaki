const homepageImage = document.querySelector('.homepage-image');

// 切換到 "介紹" 頁面
function showIntro() {
    applyAnimation(); // 執行漸隱與縮小動畫

    setTimeout(() => {
        document.getElementById('content').innerHTML = `
            <h1>介紹</h1>
            <p>壽喜燒是一道日本傳統火鍋料理，具有悠久的歷史和獨特的味道。</p>
        `;
    }, 800); // 與動畫時長一致
}

// 切換到 "歷史" 頁面
function showHistory() {
    applyAnimation();

    setTimeout(() => {
        document.getElementById('content').innerHTML = `
            <h1>歷史</h1>
            <p>壽喜燒起源於日本江戶時代，最早的形式是一種簡單的烹調方式。</p>
        `;
    }, 800);
}

// 切換到 "醬汁評比" 頁面
function showReviews() {
    applyAnimation();

    setTimeout(() => {
        document.getElementById('content').innerHTML = `
            <h1>醬汁評比</h1>
            <p>各種壽喜燒醬汁的評比結果如下：甜鹹口味最受歡迎。</p>
        `;
    }, 800);
}

// 切換回主頁
function goToHome() {
    // 顯示主頁內容
    document.getElementById('content').innerHTML = `
        <h4>歡迎來到壽喜燒的世界</h4>
        <p>點擊左側選單以瀏覽更多內容。</p>
        <img src="images/sukiyaki.png" alt="壽喜燒圖片" class="homepage-image">
    `;

    // 加入漸顯與放大動畫
    const image = document.querySelector('.homepage-image');
    image.classList.remove('fade-out-scale');
    image.classList.add('fade-in-scale');
}

function animateImage(animationClass) {
    const image = document.querySelector('.homepage-image');
    if (image) {
        image.classList.remove('fade-in', 'fade-out');
        image.classList.add(animationClass);
    }
}

function applyAnimation() {
    const image = document.querySelector('.homepage-image');
    if (image) {
        image.classList.remove('fade-in-scale');
        image.classList.add('fade-out-scale');
    }
}