document.addEventListener("DOMContentLoaded", () => {
    // ハンバーガーメニューの要素を取得
    const hamburger = document.querySelector(".hamburger"); // ハンバーガーメニューのボタン
    const menu = document.getElementById("menu"); // ナビゲーションメニュー
    const iframe = document.querySelector("iframe"); // Googleマップの埋め込み要素
    
    // メニューの開閉を切り替える関数
    function toggleMenu() {
        menu.classList.toggle("visible"); // メニューの表示・非表示を切り替え
        
        // メニューが開いている場合はマップの操作を無効化
        if (menu.classList.contains("visible")) {
            iframe.style.pointerEvents = "none"; // マップのクリックを無効化
        } else {
            iframe.style.pointerEvents = "auto"; // メニューを閉じたらマップの操作を有効化
        }
    }
    
    // ハンバーガーメニューがクリックされたらメニューを開閉
    hamburger.addEventListener("click", toggleMenu);
    
    // 画面のどこかをクリックした際にメニューを閉じる処理
    document.addEventListener("click", (event) => {
        // クリックされた要素がメニューまたはハンバーガーボタンでない場合
        if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
            menu.classList.remove("visible"); // メニューを閉じる
            iframe.style.pointerEvents = "auto"; // マップの操作を有効化
        }
    });

    // メニュー内のリンクがクリックされたらメニューを閉じる
    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("visible"); // メニューを閉じる
            iframe.style.pointerEvents = "auto"; // マップの操作を有効化
        });
    });
});
