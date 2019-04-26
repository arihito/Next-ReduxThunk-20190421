export default <style jsx>{`
html {
  /* 初期基本フォント */
  font-family: sans-serif;
  /* remのフォント基準単位(10px) ブラウザのサイズ設定に対応する%で指定 */
  font-size: 62.5%;
  /* スマホ横位置の文字サイズ変更なし */
  -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
  /* OSXのSafari/Chromeの文字のアニメーション時のチラツキ解除*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* html以下全ての要素に対して */
  height: 100%;
  * {
    /* padding/border差し引きなし */
    box-sizing: border-box;
    /* 内外余白を削除 */
    margin: 0;
    padding: 0;
  }
}
body {
  font-family: 'Noto Sans JP', 'M PLUS Rounded 1c', -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Yu Gothic", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
  /* 基本の文字サイズ */
  font-size: 1.4rem;
  /* 黒の文字色はコントラストが強いのでやや濃いグレー */
  color: #333;
  /* 全ての文字の上下の行間余白を削除 */
  line-height: 1;
  /* 全体背景色(上色,下色) */
  background: linear-gradient(#fff,#ccc);
  min-height: 100%;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: normal;
  line-height: 1;
  font-family: $themeFont;
  @media screen and (max-width: 768px) {
    /* スマホ時は改行を除去 */
    br {
      display: none;
    }
  }
}
p {
  line-height: 2.4;
  /* 字詰め */
  font-feature-settings: "palt" 1;
  /* 両端揃え */
  text-align: justify;
}
ul,ol {
  li {
    list-style-type: none;
    &.active {
      background-color: #eee;
    }
  }
}
/* 画像の表示崩れを調整 */
img {
  /* 画像の下の隙間を取り除く */
  display: block;
  height: auto;
  /* 親要素からのはみ出しを防ぐ */
  max-width: 100%;
  border: 0;
  /* 比率の差から出る余った領域をトリミング */
  object-fit: cover;
  /* x軸0%左揃え100%右揃え y軸0%上揃え100%下揃え */
  object-position: 50% 20%;
}
a {
  background: transparent;
  text-decoration: none;
  color: #333;
  &:hover {
    color: #333;
  }
}
:hover {
  // ホバーに滑らかなアニメーション
  transition: all ease 0.4s;
}
table {
  border-collapse: collapse;
  width: 100%;
}
th {
  text-align: left;
  vertical-align: top;
}
/*************************/

header {
  font-size: 64px;
  font-weight: bold;
  text-align: right;
  letter-spacing: -8px;
  color: #ddf;
  margin: -32px 5px;
}

footer {
  color: #99c;
  font-size: 12px;
  text-align: right;
  border-bottom: 1px solid #99c;
  margin: 50px 0 10px 0;
  position: relative;
  bottom: 10px;
  right: 10px;
  left: 10px;
}
h1 {
  font-size: 22px;
  font-weight: bold;
  text-align: left;
  letter-spacing: 0px;
  color: #77a;
  margin: 0 0 50px 0;
}
p {
  margin: 0;
  color: #669;
  font-size: 16px;
}
`}</style>