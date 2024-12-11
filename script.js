function showContent(id) {
    // 隱藏所有內容
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));

    // 顯示所選內容
    const selectedContent = document.getElementById(id);
    selectedContent.classList.add('active');
}
