document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".link"); // 観光地リンクを取得

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // デフォルトのページ遷移を無効化
            const url = link.href; // クリックしたリンクのURLを取得
            const iframe = link.nextElementSibling; // 次の要素（iframe）を取得

            if (iframe.style.display === "block") {
                iframe.style.display = "none"; // もう一度押したら iframe を隠す
                iframe.removeAttribute("src"); // srcを削除して不要なリクエストを防ぐ
            } else {
                iframe.src = url; // iframeのURLをセット
                iframe.style.display = "block"; // iframe を表示
            }
        });
    });
});

// ハンバーガーメニューの表示/非表示を切り替える関数
function toggleMenu() {
    const menu = document.getElementById('menu'); // メニュー要素を取得
    menu.classList.toggle('visible'); // クラスを切り替えて表示/非表示を変更
}


