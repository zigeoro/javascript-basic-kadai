// button id="btn"というidを持つHTML要素を取得、定数に代入
const btn = document.getElementById("btn");

// クリックされたときにイベント処理を実行
btn.addEventListener("click", () => {
  setTimeout(function(){text.textContent = "クリックされました";}
  ,2000)});

  function count() {
    console.log("3秒経過しました。");
}

// 3000ミリ秒（＝3秒）後にcountを実行
setTimeout(count, 3000);