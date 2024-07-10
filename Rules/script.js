function checkStrings() {
    // フォームから入力された値を取得
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;

    // 入力された文字列を結合
    var combined = input1 + input2;

    // 判定
    if (combined === "abcd") {
        document.getElementById("result").innerText = "正解です";
    } else {
        document.getElementById("result").innerText = "不正解です";
    }
}
