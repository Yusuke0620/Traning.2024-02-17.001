// HTMLの初期文書が読み込まれたら
document.addEventListener('DOMContentLoaded', () => {
    // 定数itemsにitemクラスを代入し
    const items = document.querySelectorAll('.item'); 

    // itemが複数あるためNodeListオブジェクトに対しforEachを使用する
    // documentから選択されたDOM要素の集合に対して繰り返し処理を行う
    items.forEach(item => {
        // imgタグにホバーした場合、CSSのhover-effectを追加する
        item.querySelector('img').addEventListener('mouseenter', () => {
            item.classList.add('hover-effect');
            console.log("カーソルが画像に乗りました");
        });
        // imgタグからカーソルが離れた時、CSSのhover-effectを削除する
        item.querySelector('img').addEventListener('mouseleave', () => {
            item.classList.remove('hover-effect');
            console.log("カーソルが画像から離れました");
        });
        // pタグにホバーした場合、CSSのhover-effectを追加する
        item.querySelector('p').addEventListener('mouseenter', () => {
            item.classList.add('hover-effect');
            console.log("カーソルが段落に乗りました");
        });
        // pタグからカーソルが離れた時、CSSのhover-effectを削除する
        item.querySelector('p').addEventListener('mouseleave', () => {
            item.classList.remove('hover-effect');
            console.log("カーソルが段落から離れました");
        });
    });
});


