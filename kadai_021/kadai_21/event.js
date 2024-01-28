// button id="btn"というidを持つHTML要素を取得、定数に代入
const btn = document.getElementById("btn");
const text = document.getElementById("text");

// クリックされたときにイベント処理を実行
btn.addEventListener("click", () => {
  setTimeout(function(){text.textContent = "クリックされました";}
  ,2000)});

  function count() {
    console.log("2秒経過しました。");
}

// 2000ミリ秒（＝2秒）後にcountを実行
setTimeout(count, 2000);