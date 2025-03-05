document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu"); // メニューの要素を取得
    const hamburger = document.querySelector(".hamburger"); // ハンバーガーボタンを取得
    const addItemButton = document.querySelector("button"); // 追加ボタンを取得
    const input = document.getElementById("item-input"); // 入力フィールドを取得
    const list = document.getElementById("items-list"); // 持ち物リストを取得

    // ハンバーガーメニューをクリックしたときの処理
    hamburger.addEventListener("click", () => {
        menu.classList.toggle("visible"); // メニューの表示/非表示を切り替え
        hamburger.classList.toggle("active"); // ハンバーガーアイコンのアニメーションを切り替え
    });

    // 持ち物を追加するボタンのクリック処理
    addItemButton.addEventListener("click", () => {
        if (input.value.trim() !== "") { // 空白でない場合のみ処理を実行
            const li = document.createElement("li"); // 新しいリストアイテムを作成
            li.textContent = input.value; // 入力値を設定
            li.addEventListener("click", removeItem); // クリック時に削除するイベントを設定
            list.appendChild(li); // リストに追加
            input.value = ""; // 入力フィールドをクリア
        }
    });

    // 持ち物リストのアイテムをクリックしたときに削除する処理
    function removeItem(event) {
        if (confirm("本当に削除しますか？")) { // 確認ダイアログを表示
            event.target.remove(); // クリックした要素を削除
        }
    }
});




