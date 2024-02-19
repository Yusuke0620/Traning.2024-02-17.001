// 1 ハンバーガーメニューがクリックされると全画面の色が変わる
// 2 ハンバーガーメニューがクリックされるとメニューアイコンの形状変更
// 3 ハンバーガーメニューがクリックされるとメニューバーが白色に変更

/* 
HTMLの初期文書が読み込まれたら
定数menuに.hamburger_menuセレクタを代入
定数bodyにbodyを代入
*/
document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".hamburger_menu");
    const body = document.querySelector("body");  
  
    /* 
    ハンバーガーメニューがクリックされたら
    定数menuにactiveセレクタを代入
    定数bodyにbackcolorセレクタを代入
    */
    menu.addEventListener("click", () => {
      menu.classList.toggle("active"); // メニューアイコンの形状変更
      body.classList.toggle("backcolor"); //背景色変更
  
      /* 
      spanは複数あるためNodeListオブジェクトに対しforEachを使用する
      span要素の集合に対して繰り返し処理を行う
      */
      const menuSpan = document.querySelectorAll(".hamburger_menu span");
      menuSpan.forEach(span => {
  
        /* 
        メニューがクリックされclassListが追加されたら
        #fff(true)、削除されたら#333(false)
        メニューバーの色を切り替える
        */     
        span.style.backgroundColor = menu.classList.contains("active") ? "#fff" : "#333333";
      });
    });
  })