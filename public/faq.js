document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // フォーム送信を防ぐ

    // フォームの入力値を取得
    const formData = {
        text: document.querySelector("input[name='text']").value,
        note: document.querySelector("textarea[name='note']").value
    };

    fetch("http://localhost:3000/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json" // JSON形式で送信
        },
        body: JSON.stringify(formData) // JSONデータとして送信
    })
    .then(response => response.json()) // JSONで受け取る
    .then(data => {
        if (data.success) {
            document.getElementById("responseMessage").style.display = "block";
            document.getElementById("contactForm").reset();
        } else {
            alert("送信に失敗しました: " + data.message);
        }
    })
    .catch(error => {
        alert("エラーが発生しました: " + error.message);
    });
});

// ハンバーガーメニューの開閉処理
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("visible");
}