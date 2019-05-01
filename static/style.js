export default <style jsx>{`
html {
  font-family: sans-serif;
  font-size: 62.5%;
  -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
  height: 100%;
}
html * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Noto Sans JP', 'M PLUS Rounded 1c', -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Yu Gothic", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
  font-size: 1.4rem;
  color: #333;
  line-height: 1;
  background: linear-gradient(#fff,#ccc);
  min-height: 100%;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: normal;
  line-height: 1;
  font-family: $themeFont;
}
p {
  line-height: 2.4;
  font-feature-settings: "palt" 1;
  text-align: justify;
}
ul li {
  list-style-type: none;
}
img {
  display: block;
  height: auto;
  max-width: 100%;
  border: 0;
  object-fit: cover;
  object-position: 50% 20%;
}
a {
  background: transparent;
  text-decoration: none;
  color: #333;
}
a:hover {
  color: #333;
}
:hover {
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
.wrapper {
  width: 80vw;
  margin: auto;
}
.glHeader {
  display: flex;
  padding: 20px 0 15px;
  border-bottom: 1px dotted #ccc;
}
.title {
  margin-right: 10px;
}
.btn {
  padding: 10px 30px;
  border-radius: 3px;
  background: linear-gradient(#fff, #eee);
  box-shadow: 0 0 3px #ccc;
}
.btn:hover {
  background: linear-gradient(#fafafa, #efefef);
}
footer {
  color: #aaa;
  font-size: 10px;
  text-align: center;
  border-top: 1px dotted #aaa;
  margin: 50px 0;
  padding: 10px 0;
}

p {
  margin: 0;
  color: #669;
  font-size: 16px;
}
`}</style>