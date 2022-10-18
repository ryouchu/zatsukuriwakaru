// 1.関数の定義
function setHeight() {
  let vh = document.documentElement.clientHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// 2.初期化
setHeight();

// 3.ブラウザのサイズが変更された時・画面の向きを変えた時に再計算する
window.addEventListener('resize', setHeight);


