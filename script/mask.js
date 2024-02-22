const mask = document.querySelector("#mask");
const toggleBtn = document.querySelector(".toggle_btn");

// トグルボタンがクリックされた時のイベント追加
toggleBtn.addEventListener("click", () => {
    mask.classList.add("openMask");
    console.log("クリックされました→maskの色変更");
    // フッターにもクラスを追加する例
    footer.classList.toggle("testFooter");
    console.log("クリックされました→footerの色変更");
  

});
