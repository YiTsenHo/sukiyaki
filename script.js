// script.js

// 顯示壽喜燒歷史
function showHistory() {
    const infoBox = document.getElementById('info');
    infoBox.style.display = 'block'; // 顯示內容
    infoBox.innerHTML = `
        <h3>壽喜燒的歷史</h3>
        <p>壽喜燒起源於日本明治時期，當時西方飲食文化傳入日本，牛肉成為主要食材。</p>
        <p>壽喜燒這個名字來自於「燒烤」和「醬汁」，逐漸演變成今天的煮鍋形式。</p>
    `;
}

// 顯示壽喜燒評比
function showReviews() {
    const infoBox = document.getElementById('info');
    infoBox.style.display = 'block'; // 顯示內容
    infoBox.innerHTML = `
        <h3>壽喜燒評比</h3>
        <ul>
            <li>和牛壽喜燒 - 5顆星 🌟🌟🌟🌟🌟</li>
            <li>經典壽喜燒 - 4.5顆星 🌟🌟🌟🌟✨</li>
            <li>素食壽喜燒 - 4顆星 🌟🌟🌟🌟</li>
        </ul>
    `;
}