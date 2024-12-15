// 選取首頁圖片元素
const homepageImage = document.querySelector('.homepage-image');

// 主函數：切換內容並滾動
function updateContent(title, content) {
    applyAnimation(); // 執行漸隱與縮小動畫
    setTimeout(() => {
        const contentElement = document.getElementById('content');
        if (contentElement) {
            contentElement.innerHTML = `
                <h1>${title}</h1>
                ${content}
            `;
        }
        setTimeout(() => {
            scrollToTop(); // 確保內容更新完成後再滾動
        }, 50); // 延遲滾動，確保 DOM 完全更新
    }, 800); // 與動畫時長一致
}

// 滾動到頂部
// 確保滾動到頂部
function scrollToTop() {
    // 使用 scrollTop 或 scrollTo 方法，視容器情況而定
    window.scrollTo({ top: 0, behavior: 'smooth' }); // 針對 window
    document.documentElement.scrollTop = 0; // 部分瀏覽器兼容性
    document.body.scrollTop = 0; // 如果 body 可滾動
}

function scrollToContainerTop(selector) {
    const container = document.querySelector(selector);
    if (container) {
        container.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function scrollToContainerTop(selector) {
    const container = document.querySelector(selector);
    if (container) {
        container.scrollTo({ top: 0, behavior: 'smooth' });
    }
}


// 應用動畫效果
function applyAnimation() {
    if (homepageImage) {
        homepageImage.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        homepageImage.style.opacity = '0'; // 淡出
        homepageImage.style.transform = 'scale(0.8)'; // 縮小
        setTimeout(() => {
            homepageImage.style.opacity = '1'; // 回到原始狀態
            homepageImage.style.transform = 'scale(1)';
        }, 800); // 與動畫時長一致
    }
}

// 切換到 "介紹" 頁面
function showIntro() {
    const introContent = `
        <p>壽喜燒是一道日本傳統火鍋料理，具有悠久的歷史和獨特的味道。</p>
        <div class="text-block">
            <h3>什麼時候吃壽喜燒</h3>
            <ul>
                <li>過年過節、有好事發生的時候</li>
                <li>日本人回老家想吃的食物第一名</li>
                <li>一般被視為一種冬季傳統料理，常在忘年會上食用</li>
            </ul>
        </div>
    `;
    updateContent('介紹', introContent);
}

// 切換到 "歷史" 頁面
function showHistory() {
    const historyContent = `
        <p>壽喜燒起源於日本江戶時代，最早的形式是一種簡單的烹調方式。</p>
        <div class="text-block">
            <p>壽喜燒是一道日本傳統火鍋料理，具有悠久的歷史和獨特的味道。</p>
            <p>使用<span class="highlight">「鍬」</span>為容器，將肉煮熟後吃（魚、豆腐）。</p>
            <p>sukiyaki 的名稱來自於「鍬」（suki）等農具的金屬部分。</p>
        </div>
    `;
    updateContent('歷史', historyContent);
}

// 切換到 "醬汁評比" 頁面
function showReviews() {
    const reviewsContent = `
        <p>各種壽喜燒醬汁的評比結果如下：甜鹹口味最受歡迎。</p>
        <ul>
            <li>甜味醬汁：適合喜歡清爽口感的人</li>
            <li>鹹味醬汁：濃厚且適合搭配牛肉</li>
        </ul>
    `;
    updateContent('醬汁評比', reviewsContent);
}

// 回到首頁
function goToHome() {
    const homeContent = `
        <h4>歡迎來到壽喜燒的世界</h4>
        <p>點擊左側選單以瀏覽更多內容。</p>
        <img src="images/sukiyaki.png" alt="壽喜燒圖片" class="homepage-image">
    `;
    updateContent('首頁', homeContent);
}
