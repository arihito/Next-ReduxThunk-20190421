export default <style jsx>{`
@import url('https://fonts.googleapis.com/css?family=Heebo:400,700|Noto+Sans+JP');
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
  font-family: 'Heebo','Noto Sans JP', 'M PLUS Rounded 1c', -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Yu Gothic", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
  font-size: 1.4rem;
  color: #333;
  line-height: 1;
  background: linear-gradient(#fff,#ccc);
  min-height: 100%;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Heebo';
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
.btn:link,.btn:hover,.btn:visited,.btn:active,.btn:focus,.btn:focus-ring {
  ontline: none;
}
/*************************/
.wrapper {
  width: 1000px;
  margin: auto;
  position: relative;
}
.glHeader {
  display: flex;
  padding: 20px 0 15px;
  border-bottom: 1px dotted #ccc;
}
.title {
  margin-right: 10px;
  width: 150px;
}
.subtitle {
  margin-right: 115px;
}
.mainImg {
  mix-blend-mode: screen;
  width: 100%;
}
.btn {
  padding: 10px 30px;
  border-radius: 3px;
  background: linear-gradient(#fff, #eee);
  box-shadow: 0 0 3px #ccc;
  position: relative;
  top: -1px;
}
.btn:link,.btn:hover,.btn:visited,.btn:active,.btn:focus {outline: 0;}
.btn:hover {
  background: linear-gradient(#f6f6f6, #efefef);
}
.total {
  font-size: 24px;
}
.inputtext {
  padding: 8px 10px 8px;
  border: 1px solid #ccc;
  outline: none;
  font-size: 16px;
  border-radius: 3px;
  box-shadow: 0 0 3px #ccc inset;
}
.lists {
  border-bottom: 1px dotted #666;
}
.lists th, .lists td {
  padding: 4px 10px;
  font-size: 16px;
}
footer {
  color: #aaa;
  font-size: 10px;
  text-align: left;
  border-top: 1px dotted #aaa;
  margin: 50px 0;
  padding: 10px 0;
}
p {
  margin: 0;
  color: #669;
  font-size: 16px;
}
.firetable {
  width: 100%;
}
.firetable tr {
  border-bottom: 1px dotted #999;
}
.firetable th,.firetable td {
  padding: 20px;
  font-size: 18px;
}
.firetable th {
  color: #999;
  font-size: 15px;
}
.firetable tr:nth-child(even) td {
  background-color: #eee;
}
.account {
  border: 1px dashed #ccc;
  padding: 3px 30px;
  border-radius: 3px;
  color: #999;
  font-size: 12px;
  font-weight: bold;
  position: absolute;
  top: 80px;
  right: 0px;
  background: linear-gradient(#efefef,#fff);
}
.username {
  color: #c66;
  font-weight: bold;
  font-size: 18px;
}
.listTitle {
  display: inline-block;
  width: 80px;
}
.list p {
  border-bottom: 1px dotted #ccc;
  margin-bottom: 5px;
  padding-bottom: 5px;
}
.adslist {
  cursor: pointer;
}
.adstitle {
  font-size: 16px;
  border-bottom: 1px dotted #ccc;
  margin: 15px 0;
  padding: 15px 5px;
  background: linear-gradient(90deg, #eee, #fff)
}
.adstitle::before {
  content: "■";
  color: #333;
  margin-right: 5px;
}
.firetable tr.adslist:hover td {
  background-color: rgba(222,222,222,.6);
  font-weight: bold;
}
`}</style>