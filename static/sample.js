﻿単行本「React超入門」 掲載リスト




▼リスト1-1
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>React</title>
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
</head>
<body>
    <h1>React</h1>
    <div id="root">wait...</div>
</body>
</html>




▼リスト1-2
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>React</title>
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
</head>
<body>
    <h1>React</h1>
    <div id="root">wait...</div>
    <script>
    let dom = document.querySelector('#root');
    let element = React.createElement(
      'p', {}, 'Hello React!'
    );
    ReactDOM.render(element, dom);
    </script>
</body>
</html>




▼リスト1-3
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>React</title>
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <style>
    #root {
        cursor: pointer;
        font-size:20pt;
        background-color:lightblue;
        padding:1px 20px;
    }
    </style>
</head>
<body>
    <h1>React</h1>
    <div id="root" onclick="doCount();">wait...</div>
    <script>
    let counter = 0;
    let dom = document.querySelector('#root');
    doCount();


    function doCount(){
        counter++;
        let element = React.createElement(
            'p', {}, "count: " + counter
        );
        ReactDOM.render(element, dom);
    }
    </script>
</body>
</html>




▼リスト2-1
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>React</title>
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
</head>
<body>
    <h1>React</h1>
    <div id="root">wait...</div>
    <script>
    let dom = document.querySelector('#root');
    let element = React.createElement(
      'p', {}, 'Hello React!'
    );
    ReactDOM.render(element, dom);
    </script>
</body>
</html>




▼リスト2-2
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>React</title>
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
</head>
<body>
    <h1>React</h1>
    <div id="root">wait...</div>
    <script src="./script.js"></script>
</body>
</html>




▼リスト2-3
let dom = document.querySelector('#root');
let element = React.createElement(
  'p', {}, 'Hello React Application!'
);
ReactDOM.render(element, dom);




▼リスト2-4
let dom = document.querySelector('#root');
let element = React.createElement(
    'div', {}, [
        React.createElement(
            'h2', {}, "Hello!"
        ),
        React.createElement(
            'h3', {}, "React sample page."
        ),
        React.createElement(
            'ul', {}, [
                React.createElement(
                    'li', {}, "First item."
                ),
                React.createElement(
                    'li', {}, "Second item."
                ),
                React.createElement(
                    'li', {}, "Third item."
                ),
            ]
        ),
    ]);


ReactDOM.render(element, dom);




▼リスト2-5
<script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>




▼リスト2-6
<body>
    <h1>React</h1>
    <div id="root">wait...</div>


    <script type="text/babel">
    let dom = document.querySelector('#root');


    let el = (
        <div>
            <h2>JSX sample</h2>
            <p>This is sample message.</p>
        </div>
    );


    ReactDOM.render(el, dom);
    </script>
</body>




▼リスト2-7
<script type="text/babel">
let dom = document.querySelector('#root');


let title = "新タイトル";
let message = "新しいメッセージです。";


let el = (
    <div>
        <h2>{title}</h2>
        <p>{message}</p>
    </div>
);


ReactDOM.render(el, dom);
</script>




▼リスト2-8
<script type="text/babel">
let dom = document.querySelector('#root');


let message = "新しいメッセージです。";
let link = "http://google.com";


let el = (
    <div>
        <p>{message}</p>
        <p><a href={link}>this is link!</a></p>
    </div>
);


ReactDOM.render(el, dom);
</script>




▼リスト2-9
<script type="text/babel">
let dom = document.querySelector('#root');


let message = "新しいメッセージです。";


const msg_s = {
    fontSize:"20pt",
    color:"red",
    border:"1px solid blue"
}


let el = (
    <div>
        <p style={msg_s}>{message}</p>
    </div>
);


ReactDOM.render(el, dom);
</script>




▼リスト2-10
<script type="text/babel">
let dom = document.querySelector('#root');


let message = "メッセージを表示します。";


const msg = {
    fontSize:"20pt",
    fontWeight: "bold",
    color:"red",
    border:"2px solid green"
}


let printMsg = function(msg, size, color){
    const style = {
        fontSize: size + "pt",
        fontWeight:'700',
        color: color,
        border: "1px solid " + color
    };
    return <p style={style}>{msg}</p>;
}


let el = (
    <div>
        {printMsg('最初のメッセージ', 30, '#ddd')}
        {printMsg('次のメッセージです.', 20, '#aaa')}
        {printMsg('最後のメッセージでした.', 14, '#333')}
    </div>
);
ReactDOM.render(el, dom);
</script>




▼リスト2-11
<script type="text/babel">
let dom = document.querySelector('#root');


let message = "メッセージを表示します。";


const msg = {
    fontSize:"20pt",
    fontWeight: "bold",
    color:"red",
    border:"2px solid green"
}


let flg = true; // ★


let el = (
    <div>
    {flg &&
        <p style={msg}>{message}</p>
    }
    </div>
);
ReactDOM.render(el, dom);
</script>




▼リスト2-12
<script type="text/babel">
let dom = document.querySelector('#root');


let message_true = "メッセージを表示します。";
let message_false = "メッセージはありません……";


const msg_true = {
    fontSize:"20pt",
    fontWeight: "bold",
    color:"red",
    border:"2px solid green"
}
const msg_false = {
    fontSize:"16pt",
    fontWeight: "plain",
    color:"white",
    backgroundColor:"blue",
}


let flg = true; // ★


let el = (
    <div>
    {flg ?
        <p style={msg_true}>{message_true}</p>
    :
        <p style={msg_false}>{message_false}</p>
    }
    </div>
);


ReactDOM.render(el, dom);
</script>




▼リスト2-13
<script type="text/babel">
let dom = document.querySelector('#root');


const list = {
    fontSize: "18pt",
    padding: "5px 50px",
}


let data = [
    <li>One</li>,
    <li>Two</li>,
    <li>Three</li>
];


let el = (
    <div>
        <ul style={list}>
        {data}
        </ul>
    </div>
);


ReactDOM.render(el, dom);
</script>




▼リスト2-14
<script type="text/babel">
let dom = document.querySelector('#root');


const table = {
    fontSize: "16pt",
    padding: "5px 50px",
}
const th = {
    color:'white',
    backgroundColor:'#006',
    padding:'5px 15px',
}
const td = {
    color:'black',
    padding:'5px 15px',
    border:'1px solid gray',
}


let data = [
    {name:'Taro', mail:'taro@yamada', age:45},
    {name:'Hanako', mail:'hanako@flower', age:37},
    {name:'Sachiko', mail:'sachiko@happy', age:29}
];


let el = (
    <div>
        <table style={table}>
        <tr>
            <th style={th}>name</th>
            <th style={th}>mail</th>
            <th style={th}>age</th>
        </tr>
        {data.map((value) =>(
        <tr>
            <td style={td}>{value.name}</td>
            <td style={td}>{value.mail}</td>
            <td style={td}>{value.age}</td>
        </tr>
        ))}
        </table>
    </div>
);


ReactDOM.render(el, dom);
</script>




▼リスト2-15
<script type="text/babel">
let dom = document.querySelector('#root');


const dfn = {
    fontSize: "20pt",
    padding: "10px",
}
const dt = {
    fontSize: "16pt",
    color:'white',
    backgroundColor:'#006',
    padding:'10px',
}
const dd = {
    color:'black',
    padding:'10px',
}


let data = {
    url:'http://google.com',
    title:'Google',
    caption:'※Googleの検索サイトです。'
};


let el = (
<div>
    {(()=>
    <dl>
        <dt style={dt}><dfn style={dfn}>
            {data.title}
        </dfn></dt>
        <dd style={dd}>
            {data.caption}
        </dd>
        <dd style={dd}>
            <a href={data.url}>※{data.title}に移動</a>
        </dd>
    </dl>
    )()}
</div>
);


ReactDOM.render(el, dom);
</script>



▼リスト2-16
<script type="text/babel">
let dom = document.querySelector('#root');


const p = {
    fontSize: "20pt",
    padding: "10px",
};


var counter = 0;


setInterval(() => {
    counter++;
    let el = (
        <div>
            <p style={p}>count: {counter}</p>
        </div>
    );
    ReactDOM.render(el, dom);
}, 1000);


</script>




▼リスト2-17
<script type="text/babel">
let dom = document.querySelector('#root');


const p = {
    fontSize: "20pt",
    padding: "10px",
};


var counter = 0;


let el = (
    <div>
        <p style={p}>count: {counter}</p>
    </div>
);


setInterval(() => {
    counter++;
    ReactDOM.render(el, dom);
}, 1000);
</script>




▼リスト2-18
<script type="text/babel">
let dom = document.querySelector('#root');


const p = {
    fontSize: "20pt",
    padding: "10px",
    backgroundColor:"blue",
    color:"white",
    cursor:"pointer"
};


var counter = 0;


let doAction = (event)=>{
    counter++;
    let el = (
        <div>
            <p onClick={doAction} style={p}>
                count: {counter}
            </p>
        </div>
    );
    ReactDOM.render(el, dom);
};


doAction();
</script>




▼リスト2-19
<script type="text/babel">
let dom = document.querySelector('#root');


const p = {
    fontSize: "20pt",
    padding: "10px",
};
const input = {
    fontSize: "16pt",
    padding: "5px 10px",
}


let message = 'お名前をどうぞ：';
let in_val = '';


let doChange = (event)=>{
    in_val = event.target.value;
    message = 'こんにちは, ' + in_val + 'さん!!';
};


let doAction = (event)=>{
    let el = (
    <div>
        <p style={p}>{message}</p>
        <div>
            <input type="text" id="input" style={input}
                onChange={doChange} />
            <button  onClick={doAction} style={input}>
                Click
            </button>
        </div>
    </div>
    );
    ReactDOM.render(el, dom);
};


doAction();
</script>




▼リスト3-1
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>React</title>
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
</head>


<body>
    <h1>React</h1>
    <div id="root">wait...</div>
    <script type="text/babel">
    let dom = document.querySelector('#root');


    const msg = {
        fontSize: "20pt",
        fontWeight:"bold",
        padding: "10px",
        color:"white",
        backgroundColor:"darkblue"
    };


    // これが関数コンポーネント
    function Welcome(props) {
        return <p style={msg}>Hello React!!</p>;
    }


    // 表示するJSX
    let el = (
    <div>
        <Welcome />
    </div>
    );
    ReactDOM.render(el, dom);
    </script>
</body>


</html>




▼リスト3-2
<script type="text/babel">
let dom = document.querySelector('#root');


const msg1 = {
    fontSize: "20pt",
    padding: "10px",
    border: "double 5px magenta"
};


const msg2 = {
    fontSize: "16pt",
    fontWeight: "bold",
    padding: "10px",
    backgroundColor:"cyan"
};


function Welcome(props) {
    return <p style={props.style}>Hello, {props.name}!!</p>;
}


let el = (
<div>
    <Welcome name="Taro" style={msg1} />
    <Welcome name="Hanako" style={msg2} />
</div>
);
ReactDOM.render(el, dom);
</script>




▼リスト3-3
<script type="text/babel">
let dom = document.querySelector('#root');


const msg = {
    fontSize: "16pt",
    fontWeight: "bold",
    padding: "10px",
    color:"white",
    backgroundColor:"darkblue"
};


function Calc(props) {
    let total = 0;
    for(let i = 1;i <= props.number;i++){
        total += i;
    }
    return <p style={msg}>１から{props.number}までの
        合計は、「{total}」です。</p>;
}


let el = (
<div>
    <Calc number="100" />
    <Calc number="200" />
    <Calc number="300" />
</div>
);
ReactDOM.render(el, dom);
</script>




▼リスト3-4
<script type="text/babel">
let dom = document.querySelector('#root');


const msg = {
    fontSize: "20pt",
    fontWeight: "bold",
    padding: "10px",
    border: "solid 5px yellow"
};


class Hello extends React.Component {


    constructor(props){
        super(props);
    }


    render(){
        return <p style={msg}>Hello!!</p>;
    }
}


let el = (
<div>
    <Hello />
</div>
);


ReactDOM.render(el, dom);
</script>




▼リスト3-5
<script type="text/babel">
let dom = document.querySelector('#root');


class Rect extends React.Component {
    x = 0;
    y = 0;
    width = 0;
    height = 0;
    color = "white";
    style = {};


    constructor(props){
        super(props);
        this.x = props.x;
        this.y = props.y;
        this.width = props.w;
        this.height = props.h;
        this.color = props.c;
        this.style = {
            backgroundColor:this.color,
            position:"absolute",
            left:this.x + "px",
            top:this.y + "px",
            width:this.width + "px",
            height:this.height + "px"
        }
    }


    render(){
        return <div style={this.style}></div>;
    }
}


let el = (
<div>
    <Rect x="100" y="100" w="100" h="100" c="cyan" />
    <Rect x="150" y="150" w="100" h="100" c="magenta" />
</div>
);


ReactDOM.render(el, dom);
</script>




▼リスト3-6
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
    <title>React App</title>
  </head>
  <body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <div id="root"></div>
  </body>
</html>




▼リスト3-7
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();




▼リスト3-8
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


export default App;




▼リスト3-9
import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render(){
    return <div>
      <h1>React</h1>
      <p>This is sample component.</p>
      <p>これはサンプルのコンポーネントです。</p>
  </div>;
  }
}


export default App;




▼リスト3-10
body {
  margin:10px;
}
h1 {
  font-size:72pt;
  font-weight:bold;
  text-align:right;
  letter-spacing:-8px;
  color:#f0f0f0;
  margin:-40px 0px;
}
p {
    margin:0px;
    color:#666;
    font-size:16pt;
}




▼リスト3-11
import React, { Component } from 'react';
import './App.css';


class App extends Component {


  constructor(props){
    super();
    this.title = props.title;
    this.message = props.message;
  }
  render(){
    return <div>
      <h1>{this.title}</h1>
      <p>{this.message}</p>
  </div>;
  }
}


export default App;




▼リスト3-12
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
    <App title="App" message="This is App Component!" />,
    document.getElementById('root')
);




▼リスト3-13
import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render(){
    return <div>
      <h1>React</h1>
      <Rect x="50" y="50" w="150" h="150" c="cyan" />
      <Rect x="150" y="100" w="150" h="150" c="magenta" />
      <Rect x="100" y="150" w="150" h="150" c="black" />
    </div>;
  }
}


class Rect extends Component {
  x = 0;
  y = 0;
  width = 0;
  height = 0;
  color = "white";
  style = {};


  constructor(props){
      super(props);
      this.x = props.x;
      this.y = props.y;
      this.width = props.w;
      this.height = props.h;
      this.color = props.c;
      this.style = {
          backgroundColor:this.color,
          position:"absolute",
          left:this.x + "px",
          top:this.y + "px",
          width:this.width + "px",
          height:this.height + "px"
      }
  }


  render(){
      return <div style={this.style}></div>;
  }
}


export default App;




▼リスト3-14
ReactDOM.render(
    <App />, document.getElementById('root')
);




▼リスト3-15
import React, { Component } from 'react';


class Rect extends Component {
  x = 0;
  y = 0;
  width = 0;
  height = 0;
  color = "white";
  style = {};


  constructor(props){
    super(props);
    this.x = props.x;
    this.y = props.y;
    this.width = props.w;
    this.height = props.h;
    this.color = props.c;
    this.radius = props.r;
    this.style = {
        backgroundColor:this.color,
        position:"absolute",
        left:this.x + "px",
        top:this.y + "px",
        width:this.width + "px",
        height:this.height + "px",
        borderRadius:this.radius + "px"
    }
  }


  render(){
      return <div style={this.style}></div>;
  }
}


export default Rect;




▼リスト3-16
import React, { Component } from 'react';
import Rect from './Rect';
import './App.css';


class App extends Component {
  render(){
    return <div>
      <h1>React</h1>
      <Rect x="50" y="50" w="150" h="150" c="#6ff9" r="50" />
      <Rect x="150" y="100" w="150" h="150" c="#f6f9" r="75" />
      <Rect x="100" y="150" w="150" h="150" c="#6669" r="25" />
    </div>;
  }
}


export default App;




▼リスト3-17
import React, { Component } from 'react';
import Rect from './Rect';
import './App.css';


class App extends Component {


  msgStyle = {
    fontSize:"24pt",
    color:"#900",
    margin:"20px 0px",
    padding: "5px",
    borderBottom:"2px solid #900"
  }


  constructor(props){
    super(props);
    this.state = {
      msg:'Hello Component.',
    };
  }


  render(){
    return <div>
      <h1>React</h1>
      <p style={this.msgStyle}>{this.state.msg}</p>
      <p style={this.msgStyle}>{this.props.msg}</p>
    </div>;
  }
}


export default App;




▼リスト3-18
ReactDOM.render(
    <App msg="Hello App." />, document.getElementById('root')
);




▼リスト3-19
import React, { Component } from 'react';
import Rect from './Rect';
import './App.css';


class App extends Component {


  msgStyle = {
    fontSize:"24pt",
    color:"#900",
    margin:"20px 0px",
    padding: "5px",
    borderBottom:"2px solid #900"
  }
  btnStyle = {
    fontSize:"20pt",
    padding:"0px 10px"
  }


  constructor(props){
    super(props);
    this.state = {
      msg:'Hello',
    };
    let timer = setInterval(()=>{
      this.setState((state)=>({
        msg: state.msg + "!"
      }));
    }, 10000);
  }


  render(){
    return <div>
      <h1>React</h1>
      <p style={this.msgStyle}>{this.state.msg}</p>
      <p style={this.msgStyle}>{this.props.msg}</p>
    </div>;
  }


}


export default App;




▼リスト3-20
import React, { Component } from 'react';
import Rect from './Rect';
import './App.css';


class App extends Component {


  msgStyle = {
    fontSize:"24pt",
    color:"#900",
    margin:"20px 0px",
    padding: "5px",
    borderBottom:"2px solid #900"
  }
  btnStyle = {
    fontSize:"20pt",
    padding:"0px 10px"
  }


  constructor(props){
    super(props);
    this.state = {
      counter:0,
      msg:'count start!',
    };
    this.doAction = this.doAction.bind(this);
  }


  doAction(e){
    this.setState((state)=> ({
      counter: state.counter + 1,
      msg: 'count: ' + state.counter
    }));
  }

  render(){
    return <div>
      <h1>React</h1>
      <p style={this.msgStyle}>{this.state.msg}</p>
      <button style={this.btnStyle} onClick={this.doAction}>Click</button>
    </div>;
  }


}


export default App;




▼リスト3-21
ReactDOM.render(
    <App />, document.getElementById('root')
);




▼リスト3-22
import React, { Component } from 'react';
import Rect from './Rect';
import './App.css';


class App extends Component {


  msgStyle1 = {
    fontSize:"24pt",
    color:"#900",
    margin:"20px 0px",
    padding: "5px",
    borderBottom:"2px solid #900"
  }
  msgStyle2 = {
    fontSize:"20pt",
    color:"white",
    backgroundColor:"#900",
    margin:"20px 0px",
    padding: "5px",
    borderBottom:"2px solid #900"
  }
  btnStyle = {
    fontSize:"16pt",
    pading:"10px"
  }


  constructor(props){
    super(props);
    this.state = {
      counter:0,
      msg:'count start!',
      flg:true,
    };
    this.doAction = this.doAction.bind(this);
  }


  doAction(){
    this.setState((state)=> ({
      counter: state.counter + 1,
      msg: state.counter,
      flg: !state.flg
    }));
  }

  render(){
    return <div>
      <h1>React</h1>
      {this.state.flg ?
        <p style={this.msgStyle1}>count: {this.state.msg}</p>
      :
        <p style={this.msgStyle2}>{this.state.msg}です。</p>
      }
      <button style={this.btnStyle} onClick={this.doAction}>Click</button>
    </div>;
  }


}


export default App;




▼リスト3-23
import React, { Component } from 'react';
import Rect from './Rect';
import './App.css';


class App extends Component {
  data = [];


  msgStyle = {
    fontSize:"20pt",
    color:"#900",
    margin:"20px 0px",
    padding: "5px",
  }
  area = {
    width:"500px",
    height:"500px",
    border:"1px solid blue"
  }


  constructor(props){
    super(props);
    this.state = {
      list:this.data
    };
    this.doAction = this.doAction.bind(this);
  }


  doAction(e){
    let x = e.pageX;
    let y = e.pageY;
    this.data.push({x:x, y:y});
    this.setState({
      list:this.data
    });
  }


  draw(d){
    let s = {
      position:"absolute",
        left:(d.x - 25) + "px",
        top:(d.y - 25) + "px",
        width:"50px",
        height:"50px",
        backgroundColor:"#66f3",
      };
      return <div style={s}></div>;
  }

  render(){
    return <div>
      <h1>React</h1>
      <h2 style={this.msgStyle}>show rect.</h2>
      <div style={this.area} onClick={this.doAction}>
        {this.data.map((value)=>this.draw(value))}
      </div>
    </div>;
  }


}


export default App;




▼リスト3-24
import React, { Component } from 'react';
import Rect from './Rect';
import './App.css';


class App extends Component {
  data = [
    "This is list sample.",
    "これはリストのサンプルです。",
    "配列をリストに変換します。"
  ];


  msgStyle = {
    fontSize:"20pt",
    color:"#900",
    margin:"20px 0px",
    padding: "5px",
  }


  constructor(props){
    super(props);
    this.state = {
      list:this.data
    };
  }


  render(){
    return <div>
      <h1>React</h1>
      <h2 style={this.msgStyle}>show list.</h2>
      <List title="サンプル・リスト" data={this.data} />
    </div>;
  }
}


class List extends Component {
  number = 1;


  title = {
    fontSize:"20pt",
    fontWeight:"bold",
    color:"blue",
  };


  render(){
    let data = this.props.data;
     return (
      <div>
       <p style={this.title}>{this.props.title}</p>
        <ul>
          {data.map((item) =>
            <Item number={this.number++} value={item}
              key={this.number} />
          )}
        </ul>
      </div>
    );
  }
}


class Item extends Component {
  li = {
    listStyleType:"square",
    fontSize:"16pt",
    color:"#06",
    margin:"0px",
    padding: "0px",
  }
  num = {
    fontWeight:"bold",
    color:"red"
  }


  render(){
    return (
      <li style={this.li}>
        <span style={this.num}>[{this.props.number}] </span>
          {this.props.value}
      </li>
    );
  }
}


export default App;




▼リスト3-25
import React, { Component } from 'react';
import Rect from './Rect';
import './App.css';


class App extends Component {
  input = '';


  msgStyle = {
    fontSize:"20pt",
    color:"#900",
    margin:"20px 0px",
    padding: "5px",
  }


  constructor(props){
    super(props);
    this.state = {
      message:'type your name:'
    };
    this.doChange = this.doChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this);
  }


  doChange(event) {
    this.input = event.target.value;
  }


  doSubmit(event) {
    this.setState({
      message: 'Hello, ' + this.input + '!!'
    });
    event.preventDefault();
  }
  render(){
    return <div>
      <h1>React</h1>
      <Message title="Children!">
        これはコンポーネント内のコンテンツです。
        マルでテキストを分割し、リストにして表示します。
        改行は必要ありません。
      </Message>
    </div>;
  }


}


class Message extends Component {
  li = {
    fontSize:"16pt",
    color:"#06",
    margin:"0px",
    padding: "0px",
  }


  render(){
    let content = this.props.children;
    let arr = content.split('。');
    let arr2 = [];
    for(let i = 0;i < arr.length;i++){
      if (arr[i].trim() != ''){
        arr2.push(arr[i]);
      }
    }
    let list = arr2.map((value,key)=>(
      <li style={this.li} key={key}>{value}.</li>)
    );
    return <div>
      <h2>{this.props.title}</h2>
      <ol>{list}</ol>
    </div>
  }
}


export default App;




▼リスト3-26
import React, { Component } from 'react';
import Rect from './Rect';
import './App.css';


class App extends Component {
  input = '';


  msgStyle = {
    fontSize:"20pt",
    color:"#900",
    margin:"20px 0px",
    padding: "5px",
  }
  inputStyle = {
    fontSize:"12pt",
    padding:"5px"
  }


  constructor(props){
    super(props);
    this.state = {
      message:'type your name:'
    };
    this.doChange = this.doChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this);
  }


  doChange(event) {
    this.input = event.target.value;
  }


  doSubmit(event) {
    this.setState({
      message: 'Hello, ' + this.input + '!!'
    });
    event.preventDefault();
  }
  render(){
    return <div>
      <h1>React</h1>
      <h2>{this.state.message}</h2>
      <form onSubmit={this.doSubmit}>
        <label>
          <span style={this.inputStyle}></span>Message:
          <input type="text" style={this.inputStyle} onChange={this.doChange} />
        </label>
        <input type="submit" style={this.inputStyle} value="Click" />
      </form>
    </div>;
  }


}


export default App;




▼リスト3-27
<input type="text" style={this.inputStyle}
  onChange={this.doChange}
  required pattern="[A-Za-z _,.]+" />




▼リスト3-28
input:invalid {
  border: 2px dashed red;
}


input:valid {
  border: 1px solid blue;
}




▼リスト3-29
import React, { Component } from 'react';
import Rect from './Rect';
import './App.css';


class App extends Component {
  input = '';


  msgStyle = {
    fontSize:"20pt",
    color:"#900",
    margin:"20px 0px",
    padding: "5px",
  }


  constructor(props){
    super(props);
    this.state = {
      message:'type your name:'
    };
    this.doCheck = this.doCheck.bind(this);
  }


  doCheck(event) {
    alert(event.target.value +
      "は長すぎます。(最大10文字)");
  }


  render(){
    return <div>
      <h1>React</h1>
      <h2>{this.state.message}</h2>
      <Message maxlength="10" onCheck={this.doCheck} />
    </div>;
  }


}


class Message extends Component {
  inputStyle = {
    fontSize:"12pt",
    padding:"5px"
  }


  constructor(props){
    super(props);
    this.doChange = this.doChange.bind(this);
  }


  doChange(e){
    if (e.target.value.length > this.props.maxlength){
      this.props.onCheck(e);
      e.target.value =
        e.target.value.substr(0,this.props.maxlength);
    }
  }


  render(){
    return <input type="text" style={this.inputStyle}
      onChange={this.doChange} />
  }
}


export default App;




▼リスト3-30
import React, { Component } from 'react';
import Rect from './Rect';
import './App.css';


let data = {title:'Title',
  message:'this is sample message.'};


const SampleContext = React.createContext(data);


class App extends Component {


  render() {
    return (
      <div>
        <h1>Context</h1>
        <Title />
        <Message />
      </div>
    );
  }
}


class Title extends Component {
  static contextType = SampleContext;


  render(){
    return (
      <div>
        <h2>{this.context.title}</h2>
      </div>
    );
  }
}


class Message extends Component {
  static contextType = SampleContext;


  render(){
    return (
      <div>
        <p>{this.context.message}</p>
      </div>
    );
  }
}


export default App;




▼リスト3-31
import React, { Component } from 'react';
import Rect from './Rect';
import './App.css';


let data = {title:'Title',
  message:'this is sample message.'};


const SampleContext = React.createContext(data);


class App extends Component {
  newdata = {title:'新しいタイトル',
    message:'これは新しいメッセージです。'};


  render() {
    return (
      <div>
        <h1>Context</h1>
        <Title />
        <Message />
        <SampleContext.Provider value={this.newdata}>
          <Title />
          <Message />
        </SampleContext.Provider>
        <Title />
        <Message />
      </div>
    );
  }
}


class Title extends Component {
  static contextType = SampleContext;


  render(){
    return (
      <div>
        <h2>{this.context.title}</h2>
      </div>
    );
  }
}


class Message extends Component {
  static contextType = SampleContext;


  render(){
    return (
      <div>
        <p>{this.context.message}</p>
      </div>
    );
  }
}


export default App;




▼リスト3-32
import React, { Component } from 'react';
import Rect from './Rect';
import './App.css';


let theme = {
  light:{
    backgroundColor:"#eef",
    color:"#006",
    padding:"10px",
  },
  dark:{
    backgroundColor:"#006",
    color:"#eef",
    padding:"10px",
  }
};


const ThemeContext = React.createContext(theme.light); //★


class App extends Component {
  static contextType = ThemeContext;


  render() {
    return (
      <div style={this.context}>
        <Title value="Content page" />
        <Message value="This is Content sample." />
        <Message value="※これはテーマのサンプルです。" />
      </div>
    );
  }
}


class Title extends Component {
  static contextType = ThemeContext;


  render(){
    return (
      <h2 style={this.context}>{this.props.value}</h2>
    );
  }
}


class Message extends Component {
  static contextType = ThemeContext;


  render(){
    return (
        <p  style={this.context}>{this.props.value}</p>
    );
  }
}


export default App;




▼リスト3-33
import React, { Component } from 'react';
import Rect from './Rect';
import './App.css';


let theme = {
  light:{
    backgroundColor:"#eef",
    color:"#006",
    padding:"10px",
  },
  dark:{
    backgroundColor:"#006",
    color:"#eef",
    padding:"10px",
  }
};


const ThemeContext = React.createContext(theme.light); //★


class App extends Component {
  static contextType = ThemeContext;


  render() {
    return (
      <div style={this.context}>
        <Title value="Content page" />
        <Message value="This is Content sample." />
        <Message value="※これはテーマのサンプルです。" />
      </div>
    );
  }
}


class Title extends Component {
  static contextType = ThemeContext;


  render(){
    return (
      <h2 style={this.context}>{this.props.value}</h2>
    );
  }
}


class Message extends Component {
  static contextType = ThemeContext;


  render(){
    return (
        <p  style={this.context}>{this.props.value}</p>
    );
  }
}


export default App;




▼リスト4-1
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';


// ステートの値
let state_value = {
    counter:0,
    message:"COUNTER"
}


// レデューサー
function counter(state = state_value, action) {
    switch (action.type) {
        case 'INCREMENT':
        return {
            counter:state.counter + 1,
            message:"INCREMENT"
        };
        case 'DECREMENT':
        return {
            counter:state.counter - 1,
            message:"DECREMENT"
        };
        default:
        return state;
    }
}


// ストアを作成
let store = createStore(counter);


// 表示をレンダリング
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);




▼リスト4-2
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


// ステートのマッピング
function mappingState(state) {
  return state;
}


// Appコンポーネント
class App extends Component {


  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Redux</h1>
        <Message />
        <Button />
      </div>
    );
  }
}
// ストアのコネクト
App = connect()(App);


// メッセージ表示のコンポーネント
class Message extends Component {
  style = {
    fontSize:"20pt",
    padding:"20px 5px"
  }

  render(){
    return (
      <p style={this.style}>
        {this.props.message}: {this.props.counter}
      </p>
    );
  }
}
// ストアのコネクト
Message = connect(mappingState)(Message);


//
class Button extends Component {
  style = {
    fontSize:"16pt",
    padding:"5px 10px"
  }

  constructor(props){
    super(props);
    this.doAction = this.doAction.bind(this);
  }

  // ボタンクリックでディスパッチを実行
  doAction(e){
    if (e.shiftKey){
      this.props.dispatch({ type:'DECREMENT' });
    } else {
      this.props.dispatch({ type:'INCREMENT' });
    }
  }


  render(){
    return (
      <button style={this.style}
          onClick={this.doAction}>
        click
      </button>
    );
  }
}
// ストアのコネクト
Button = connect()(Button);


export default App;




▼リスト4-3――index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import MemoStore from './memo/Store'


// 表示をレンダリング
ReactDOM.render(
    <Provider store={MemoStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);




▼リスト4-4――App.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Memo from './memo/Memo';
import AddForm from './memo/AddForm';
import FindForm from './memo/FindForm';
import DelForm from './memo/DelForm';


// Appコンポーネント
class App extends Component {
  td = {
    width:"250px"
  }


  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Memo</h1>
        <AddForm />
        <hr />
        <table><tbody><tr>
          <td style={this.td}><FindForm /></td>
          <td style={this.td}><DelForm /></td>
        </tr></tbody></table>
        <Memo />
      </div>
    );
  }
}


export default connect()(App);




▼リスト4-5
import { createStore } from 'redux';

const initData = {
  data:[{message:'sample data', created:new Date()}],
  message:'please type message:',
  mode:'default',
  fdata:[]
};

// レデューサー
export function memoReducer(state = initData, action) {
  switch (action.type) {
    case 'ADD':
      return addReduce(state, action);

    case 'DELETE':
      return deleteReduce(state, action);

    case 'FIND':
      return findReduce(state, action);

    default:
      return state;
  }
}

// レデュースアクション

// メモ追加のレデュース処理
function addReduce(state, action){
  let data = {
    message:action.message,
    created:new Date()
  };
  let newdata = state.data.slice();
  newdata.unshift(data);
  return {
    data:newdata,
    message:'Added!',
    mode:'default',
    fdata:[]
  };
}

// メモ検索のレデュース処理
function findReduce(state, action){
  let f = action.find;
  let fdata = [];
  state.data.forEach((value)=>{
    if (value.message.indexOf(f) >= 0){
      fdata.push(value);
    }
  });
  return {
    data:state.data,
    message:'find "' + f + '":',
    mode:'find',
    fdata:fdata
  };
}

// メモ削除のレデュース処理
function deleteReduce(state, action){
  let newdata = state.data.slice();
  newdata.splice(action.index, 1);
  return {
    data:newdata,
    message:'delete "' + action.index + '":',
    mode:'delete',
    fdata:[]
  }
}

// アクションクリエーター

// メモ追加のアクション
export function addMemo(text) {
  return {
    type: 'ADD',
    message:text
  }
}

// メモ削除のアクション
export function deleteMemo(num) {
  return {
    type: 'DELETE',
    index:num
  }
}

// メモ検索のアクション
export function findMemo(text) {
  return {
    type: 'FIND',
    find:text
  }
}

// ストアを作成
export default createStore(memoReducer);




▼リスト4-6
import React, { Component } from 'react';
import { connect } from 'react-redux';


import Item from './Item';


class Memo extends Component {


  render(){
    let data;
    let n = 0;
    switch (this.props.mode){
      case 'default':
      data = this.props.data.map((value)=>(
        <Item key={value.message} value={value} index={n++} />
      ));
      break;

      case 'find':
      data = this.props.fdata.map((value)=>(
        <Item key={value.message} value={value} index={n++}/>
      ));
      break;


      case 'delete':
      data = this.props.data.map((value)=>(
        <Item key={value.message} value={value} index={n++} />
      ));
      break;


      default:
      data = this.props.data.map((value)=>(
        <Item key={value.message} value={value} index={n++} />
      ));
    }
    return (
      <table><tbody>{data}</tbody></table>
    );
  }
}
export default connect((state)=>state)(Memo);




▼リスト4-7
import React, { Component } from 'react';
import { connect } from 'react-redux';


class Item extends Component {
  th = {
    fontSize:"14pt",
    backgroundColor:"blue",
    color:"white",
    padding:"5px 10px",
    width:"50px"
  }
  td = {
    fontSize:"14pt",
    backgroundColor:"white",
    color:"darkblue",
    padding:"5px 10px",
    border:"1px solid lightblue",
    minWidth:"300px"
  }
  date = {
    fontSize:"14pt",
    backgroundColor:"white",
    color:"darkblue",
    padding:"5px 10px",
    border:"1px solid lightblue",
    width:"80px"
  }

  render(){
    let d = this.props.value.created;
    let f = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    return (
    <tr><th style={this.th}>No, {this.props.index}</th>
      <td style={this.td}>{this.props.value.message}</td>
      <td style={this.date}>{f}</td>
    </tr>
    );
  }
}
export default connect()(Item);




▼リスト4-8
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMemo } from './Store';


class AddForm extends Component {
  input = {
    fontSize:"16pt",
    color:"#006",
    padding:"1px",
    margin:"5px 0px"
  }
  btn = {
    fontSize:"14pt",
    color:"#006",
    padding:"2px 10px"
  }

  constructor(props){
    super(props);
    this.state = {
      message:''
    }
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }


  doChange(e){
    this.setState({
      message: e.target.value
    });
  }


  doAction(e){
    e.preventDefault();
    let action = addMemo(this.state.message);
    this.props.dispatch(action);
    this.setState({
      message: ''
    });
  }


  render(){
    return (
      <div>
        <p style={this.message}>{this.props.message}</p>
        <form onSubmit={this.doAction}>
        <input type="text" size="40" onChange={this.doChange}
          style={this.input} value={this.state.message} required />
        <input type="submit" style={this.btn} value="Add"/>
        </form>
      </div>
    );
  }
}
export default connect((state)=>state)(AddForm);




▼リスト4-9
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteMemo } from './Store';


class DelForm extends Component {
  input = {
    fontSize:"12pt",
    color:"#006",
    padding:"1px",
    margin:"5px 0px"
  }
  btn = {
    fontSize:"10pt",
    color:"#006",
    padding:"2px 10px"
  }

  constructor(props){
    super(props);
    this.state = {
      number:0
    }
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }


  doChange(e){
    this.setState({
      number: e.target.value
    });
  }


  doAction(e){
    e.preventDefault();
    let action = deleteMemo(this.state.number);
    this.props.dispatch(action);
    this.setState({
      number: 0
    });
  }


  render(){
    let n = 0;
    let items = this.props.data.map((value)=>(
      <option key={n} value={n++}>{value.message.substring(0,10)}</option>
    ));
    return (
      <div>
        <form onSubmit={this.doAction}>
        <select onChange={this.doChange}
          defaultValue="-1" style={this.input}>
          {items}
        </select>
        <input type="submit" style={this.btn} value="Del"/>
        </form>
      </div>
    );
  }
}
export default connect((state)=>state)(DelForm);




▼リスト4-10
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findMemo } from './Store';


class FindForm extends Component {
  input = {
    fontSize:"14pt",
    color:"#006",
    padding:"0px",
  }
  btn = {
    fontSize:"12pt",
    color:"#006",
    padding:"1px 10px",
  }

  constructor(props){
    super(props);
    this.state = {
      find:''
    }
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }


  doChange(e){
    this.setState({
      find: e.target.value
    });
  }


  doAction(e){
    e.preventDefault();
    let action = findMemo(this.state.find);
    this.props.dispatch(action);
  }


  render(){
    return (
      <form onSubmit={this.doAction}>
        <input type="text" size="10" onChange={this.doChange}
          style={this.input} value={this.state.message} />
        <input type="submit" style={this.btn} value="Find"/>
      </form>
    );
  }
}
export default connect((state)=>state)(FindForm);




▼リスト4-11
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import './index.css';
import App from './App';


// ステートの値
let state_value = {
    counter:0,
    message:"COUNTER"
}


// レデューサー
function counter(state = state_value, action) {
    switch (action.type) {
        case 'INCREMENT':
        return {
            counter:state.counter + 1,
            message:"INCREMENT"
        };
        case 'DECREMENT':
        return {
            counter:state.counter - 1,
            message:"DECREMENT"
        };
        case 'RESET':
        return {
            counter:0,
            message:"RESET"
        };
        default:
        return state;
    }
}


// Redux Persistの設定
const persistConfig = {
    key: 'root',
    storage,
}


// パーシストレデューサーの作成
const persistedReducer = persistReducer(persistConfig, counter)


// ストア、パーシスターの作成
let store = createStore(persistedReducer)
let pstore = persistStore(store)


// 表示をレンダリング
ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={<p>loading...</p>}
                persistor={pstore}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);




▼リスト4-12
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


// Appコンポーネント
class App extends Component {


  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Redux</h1>
        <Message />
        <Button />
      </div>
    );
  }
}
// ストアのコネクト
App = connect()(App);


// メッセージ表示のコンポーネント
class Message extends Component {
  style = {
    fontSize:"20pt",
    padding:"20px 5px"
  }

  render(){
    return (
      <p style={this.style}>
        {this.props.message}: {this.props.counter}
      </p>
    );
  }
}
// ストアのコネクト
Message = connect((state)=>state)(Message);


// ボタンのコンポーネント
class Button extends Component {
  style = {
    fontSize:"16pt",
    padding:"5px 10px"
  }

  constructor(props){
    super(props);
    this.doAction = this.doAction.bind(this);
  }

  // ボタンクリックでディスパッチを実行
  doAction(e){
    if (e.shiftKey){
      this.props.dispatch({ type:'DECREMENT' });
    } else if (e.ctrlKey){
      this.props.dispatch({ type:'RESET' });
    } else {
      this.props.dispatch({ type:'INCREMENT' });
    }
  }


  render(){
    return (
      <button style={this.style}
          onClick={this.doAction}>
        click
      </button>
    );
  }
}
// ストアのコネクト
Button = connect()(Button);


export default App;




▼リスト4-13
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './App';
import MemoStore, { memoReducer } from './memo/Store';


// Redux Persistの設定
const persistConfig = {
    key: 'memo',
    storage,
};


// パーシストレデューサーの作成
const persistedReducer = persistReducer(persistConfig, memoReducer);


// ストア、パーシスターの作成
let store = createStore(persistedReducer);
let pstore = persistStore(store);


// 表示をレンダリング
ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={<p>loading...</p>}
                persistor={pstore}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);


export default pstore;




▼リスト4-14
function addReduce(state, action){
  let d = new Date();
  let f = d.getHours() + ':' + d.getMinutes()
    + ':' + d.getSeconds();
  let data = {
    message:action.message,
    created:f
  };
  let newdata = state.data.slice();
  newdata.unshift(data);
  return {
    data:newdata,
    message:'Added!',
    mode:'default',
    fdata:[]
  };
}




▼リスト4-15
render(){
  return (
  <tr><th style={this.th}>No, {this.props.index}</th>
    <td style={this.td}>{this.props.value.message}</td>
    <td style={this.date}>{this.props.value.created}</td>
  </tr>
  );
}


▼リスト4-16
const initData = {
  data:[], // ★
  message:'please type message:',
  mode:'default',
  fdata:[]
};




▼リスト4-17
const persistConfig = {
    key: 'memo',
    storage:storage,
};




▼リスト4-18
const persistConfig = {
    key: 'memo',
    storage:storage,
    blacklist: ['message', 'mode', 'fdata'],
    whitelist: ['data']
};




▼リスト4-19
import React, { Component } from 'react';
import { connect } from 'react-redux';
import pstore from '../index';


class PersistForm extends Component {
  check = {
    margin:"5px 0px"
  }
  label = {
    fontSize:"12pt",
    color:"#006",
    padding:"2px 10px"
  }

  constructor(props){
    super(props);
    this.state = {
      check:'on',
    }
    this.doChange = this.doChange.bind(this);
  }


  doChange(e){
    let f = e.target.checked;
    this.setState({
      check: f ? 'on' : ''
    });
    if (f){
      pstore.persist();
      pstore.flush();
    } else {
      pstore.pause();
    }
  }


  render(){
    return (
      <div>
        <label style={this.label}>
        <input type="checkbox" id="check" size="40" onChange={this.doChange}
          style={this.check} checked={this.state.check} />
        Persist</label>
      </div>
    );
  }


}
export default connect((state)=>state)(PersistForm);




▼リスト4-20
// import PersistForm from './memo/PersistForm'; を追記しておく


render() {
  return (
    <div>
      <h1>Memo</h1>
      <AddForm />
      <hr />
      <table><tbody><tr>
        <td style={this.td}><FindForm /></td>
        <td style={this.td}><DelForm /></td>
        <td style={this.td}><PersistForm /></td>
      </tr></tbody></table>
      <Memo />
    </div>
  );
}




▼リスト5-1
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start",
    "export": "next export"
  }
}




▼リスト5-2
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start",
    "export": "next export"
  },
  "dependencies": {
    "next": "^7.0.2",
    "react": "^16.6.3",
    "react-dom": "^16.6.3"
  }
}




▼リスト5-3
export default () =><div>
  <h1>Next.js</h1>
  <div>Welcome to next.js!</div>
</div>




▼リスト5-4
module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  }
}




▼リスト5-5
<!DOCTYPE html>
<html>


<head>
  <meta charSet="utf-8" class="next-head" />
  <link rel="preload" href="…略…/index.js" as="script" />
  <link rel="preload" href="…略…/_app.js" as="script" />
  <link rel="preload" href="…略…/_error.js" as="script" />
  <link rel="preload" href="…略….js" as="script" />
  <link rel="preload" href="…略…/commons.…略….js" as="script" />
  <link rel="preload" href="…略…/main-…略….js" as="script" />
</head>


<body>
  <div id="__next">
    <div data-reactroot="">
      <h1>Next.js</h1>
      <div>Welcome to next.js!</div>
    </div>
  </div>


  <script>__NEXT_DATA__ = {
    "props": { "pageProps": {} },
    "page": "/",
    "query": {},
    "buildId": "…略…",
    "nextExport": true };
   __NEXT_LOADED_PAGES__ = [];
   __NEXT_REGISTER_PAGE = function (r, f) {
   __NEXT_LOADED_PAGES__.push([r, f])
  }</script>
  <script async="" id="__NEXT_PAGE__/" src="…略…/index.js"></script>
  <script async="" id="__NEXT_PAGE__/_app" src="…略…/_app.js"></script>
  <script async="" id="__NEXT_PAGE__/_error" src="…略…/_error.js"></script>
  <script src="…略…/webpack-…略….js" async=""></script>
  <script src="…略…/commons.…略….js" async=""></script>
  <script src="…略…/main-…略….js" async=""></script>
</body>


</html>




▼リスト5-6
const h1 = {
  fontSize:'72pt',
  fontWeight:'bold',
  textAlign:'right',
  letterSpacing:'-8px',
  color:'#f0f0f0',
  margin:'-40px 0px'
}


const p = {
  margin:'0px',
  color:'#666',
  fontSize:'16pt'
}


export default () =><div>
  <h1 style={h1}>Next.js</h1>
  <p style={p}>Welcome to next.js!</p>
</div>




▼リスト5-7
export default () =><div>
  <style jsx>{`
  h1 {
    font-size:68pt;
    font-weight:bold;
    text-align:right;
    letter-spacing:-8px;
    color:#f0f0f0;
    margin:-32px 0px;
  }
  p {
      margin:0px;
      color:#666;
      font-size:16pt;
  }
  `}</style>
  <h1>Next.js</h1>
  <p>Welcome to next.js!</p>
  <p>これはビルトインCSSによるスタイルです。</p>
</div>




▼リスト5-8――index.js
import Link from 'next/link';


const h1 = {……略……}
const p = {……略……}


export default () =><div>
  <h1 style={h1}>Next.js</h1>
  <p style={p}>Welcome to next.js!</p>
  <hr />
  <div>
    <Link href="/other">
      <a>Go to Other page &gt;&gt;</a>
    </Link>
  </div>
</div>




▼リスト5-9――other.js
import Link from 'next/link'


const h1 = {……略……}
const p = {……略……}


export default () =><div>
  <h1 style={h1}>Next.js</h1>
  <p style={p}>This is Other page.</p>
  <hr/>
  <div>
    <Link href="/">
      <a>&lt;&lt; Back to Index page</a>
    </Link>
  </div>
</div>




▼リスト5-10
export default <style>{`
  body {
    margin:10px;
  }
  h1 {
    font-size:68pt;
    font-weight:bold;
    text-align:right;
    letter-spacing:-8px;
    color:#f0f0f0;
    margin:-32px 0px;
  }
  p {
      margin:0px;
      color:#666;
      font-size:16pt;
  }
`}</style>;




▼リスト5-11
import Link from 'next/link';
import style from '../static/Style';


export default () =><div>
  {style}
  <h1>Next.js</h1>
  <p>Welcome to next.js!</p>
  <hr />
  <div>
    <Link href="/other">
      <button>Go to Other page &gt;&gt;</button>
    </Link>
  </div>
</div>




▼リスト5-12
import React, { Component } from 'react';


export default class Counter extends Component {
  msgStyle = {
    fontSize:"16pt",
    backgroundColor:"#eef",
    padding:"5px"
  }


  constructor(props){
    super(props);
    this.state = {
      counter:0,
      msg:'counter: 0',
    };
    this.doAction = this.doAction.bind(this);
  }


  doAction(){
    this.setState((state)=>{
      const num = state.counter + 1;
      return ({
        counter: num,
        msg: "counter: " + num
      });
    });
  }


  render(){
    return <p onClick={this.doAction}
        style={this.msgStyle}>
      {this.state.msg}
    </p>;
  }
}




▼リスト5-13
import Counter from '../components/Counter';
import style from '../static/Style';


export default () =><div>
  {style}
  <h1>Next.js</h1>
  <p>Welcome to next.js!</p>
  <hr />
  <Counter />
</div>




▼リスト5-14
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import style from '../static/Style';


class Layout extends Component {

  render() {
    return (<div>
      {style}
      <Header header={this.props.header}
        title={this.props.title} />
      {this.props.children}
      <Footer footer="copyright SYODA-Tuyano."/>
    </div>);
  }


}
export default Layout;




▼リスト5-15
import React, { Component } from 'react';


class Header extends Component {

  render() {
    return (<header>
      <div>{this.props.header}</div>
      <h1>{this.props.title}</h1>
    </header>);
  }
}
export default Header;




▼リスト5-16
import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (<footer>
      <div>{this.props.footer}</div>
    </footer>);
  }
}
export default Footer;



▼リスト5-17
import css from 'styled-jsx/css';


export default <style>{`
  body {
    margin:10px;
    padding:5px;
    color:#669;
  }
  header {
    font-size:64pt;
    font-weight:bold;
    text-align:right;
    letter-spacing:-8px;
    color:#ddddff;
    margin:-32px 5px;
  }
  footer {
    color:#99c;
    font-size:12pt;
    text-align:right;
    border-bottom:1px solid #99c;
    margin:50px 0px 10px 0px;
    position: relative;
    bottom: 10px;
    right: 10px;
    left: 10px;
  }
  h1 {
    font-size:22pt;
    font-weight:bold;
    text-align:left;
    letter-spacing:0px;
    color:#77a;
    margin:-50px 0px 50px 0px;
  }
  p {
      margin:0px;
      color:#669;
      font-size:16pt;
  }
`}</style>;




▼リスト5-18――index.js
import Link from 'next/link';
import Layout from '../components/Layout';


export default () =>(
  <Layout header="Next" title="Top page.">
    <p>Welcome to next.js!</p>
    <hr/>
    <Link href="./other"><button>
      go to Other &gt;&gt;
    </button></Link>
  </Layout>
);




▼リスト5-19――other.js
import Link from 'next/link'
import Layout from '../components/Layout';


export default () =>(
  <Layout header="Other" title="Other page.">
    <p>This is Other page.</p>
    <hr/>
    <div>
      <Link href="/">
        <button>&lt;&lt; Back to Top</button>
      </Link>
    </div>
  </Layout>
)




▼リスト5-20
import React, { Component } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import style from '../static/Style';


class Layout extends Component {

  render() {
    return (<div>
      <Head>
        <title>{this.props.title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport'
          content='initial-scale=1.0, width=device-width' />
      </Head>
      {style}
      <Header header={this.props.header}
        title={this.props.title} />
      {this.props.children}
      <Footer footer="copyright SYODA-Tuyano."/>
    </div>);
  }


}
export default Layout;




▼リスト5-21
import React, { Component } from 'react';


class Image extends Component{


  constructor(props){
    super(props);
    this.fname = "./static/" + props.fname;
    this.size = props.size + "px";
  }


  render(){
    return (
      <img width={this.size} border="1"
        src={this.fname} />
    );
  }
}
export default Image;




▼リスト5-22
import Link from 'next/link';
import Layout from '../components/Layout';
import Image from '../static/Image';


export default () =>(
  <Layout header="Next" title="Top page.">
    <p>Welcome to next.js!</p>
    <Image fname="image.jpg" size="250"/>
    <hr/>
    <Link href="./other"><button>
      go to Other &gt;&gt;
    </button></Link>
  </Layout>
);




▼リスト5-23
import { Component } from 'react';
import {initStore} from '../store';


const isServer = typeof window === 'undefined'
const _NRS_ = '__NEXT_REDUX_STORE__'


function getOrCreateStore (initialState) {
  if (isServer) {
    return initStore(initialState)
  }


  if (!window[_NRS_]) {
    window[_NRS_] = initStore(initialState)
  }
  return window[_NRS_]
}


export default (App) => {
  return class AppWithRedux extends Component {


    static async getInitialProps (appContext) {
      const reduxStore = getOrCreateStore()
      appContext.ctx.reduxStore = reduxStore
      let appProps = {}
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext)
      }
      return {
        ...appProps,
        initialReduxState: reduxStore.getState()
      }
    }


    constructor (props) {
      super(props)
      this.reduxStore = getOrCreateStore(props.initialReduxState)
    }


    render () {
      return <App {...this.props}
        reduxStore={this.reduxStore} />
    }
  }
}




▼リスト5-24
import App, {Container} from 'next/app';
import React from 'react';
import withReduxStore from '../lib/redux-store';
import { Provider } from 'react-redux';


class _App extends App {
  render () {
    const {Component, pageProps, reduxStore} = this.props
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}




▼リスト5-25
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';


// ステート初期値
const initial = {
  message:'START',
  count: 0
}


// レデューサー
function counterReducer (state = initial, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        message: 'INCREMENT',
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        message: 'DECREMENT',
        count: state.count - 1
      };
    case 'RESET':
      return {
        message: 'RESET',
        count: initial.count
      };
    default:
      return state;
  }
}


// initStore関数（redux-store.jsで必要）
export function initStore(state = initial) {
  return createStore(counterReducer, state,
    applyMiddleware(thunkMiddleware))
}




▼リスト5-26
import React, {Component} from 'react';
import { connect } from 'react-redux';


class Counter extends Component {
  style = {
    fontSize:"12pt",
    padding:"5px 15px"
  }


  constructor(props) {
    super(props);
    this.doAction = this.doAction.bind(this);
    this.reset = this.reset.bind(this);
  }


  doAction(e){
    if (e.shiftKey){
      return this.props.dispatch({ type:'DECREMENT' });
    } else {
      return this.props.dispatch({ type:'INCREMENT' });
    }
  }


  reset() {
    return this.props.dispatch({ type:'RESET' });
  }


  render () {
    return (
      <div>
        <p>{this.props.message}: {this.props.count}</p>
        <button style={this.style} onClick={this.doAction}>
          Count</button>
        <button style={this.style} onClick={this.reset}>
          Reset</button>
      </div>
    )
  }
}


Counter = connect((state)=> state)(Counter);
export default Counter;




▼リスト5-27――index.js
import Link from 'next/link';
import Layout from '../components/Layout';
import Counter from '../components/Counter';


export default () =>(
  <Layout header="Next" title="Top page.">
    <Counter/>
    <hr/>
    <Link href="./other"><button>
      go to Other &gt;&gt;
    </button></Link>
  </Layout>
);




▼リスト5-28――other.js
import Link from 'next/link';
import Layout from '../components/Layout';
import Counter from '../components/Counter';


export default () =>(
  <Layout header="Other" title="Other page.">
    <Counter/>
    <hr/>
    <div>
      <Link href="/">
        <button>&lt;&lt; Back to Top</button>
      </Link>
    </div>
  </Layout>
);




▼リスト5-29
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'


// ステート初期値
const initial = {
  message:'START',
  data:[],
  number:[],
  result:0
}


// レデューサー
function calcReducer(state = intitial, action) {
  switch (action.type) {
    // 計算実行
    case 'ENTER':
      let data2 = state.data.slice();
      let s = action.value;
      data2.unshift(s);
      let num = s.replace(/[^0-9]/g,"");
      let number2 = state.number.slice();
      number2.unshift(num);
      let result = (state.result * 1) + (num * 1);
      return {
        message:'ENTER',
        data:data2,
        number:number2,
        result:result
      };
    // リセット
    case 'RESET':
      return {
        message:'RESET',
        data:[],
        number:[],
        result:0
      };
    // デフォルト
    default:
      return state;
  }
}


// initStore関数
export function initStore(state = initial) {
  return createStore(calcReducer, state,
    applyMiddleware(thunkMiddleware))
}




▼リスト5-30
import React, {Component} from 'react'
import { connect } from 'react-redux'


class Calc extends Component {
  style = {
    fontSize:"12pt",
    padding:"5px 10px"
  }


  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.doAction = this.doAction.bind(this);
    this.reset = this.reset.bind(this);
  }


  onChange(e){
    this.setState({
      input: e.target.value
    });
  }


  onKeyPress(e){
    if (event.keyCode == 13) {
      this.doAction(e);
    }
  }


  doAction(e){
    this.setState({
      input: '',
    });
    return this.props.dispatch({ type:'ENTER',
      value:this.state.input });
  }


  reset() {
    this.setState({
      input: '',
    });
    return this.props.dispatch({ type:'RESET' });
  }


  render () {
    let result = [];
    let n = this.props.data.length;
    for(let i = 0;i < n;i++){
      result.push(<tr key={i}>
        <th>{this.props.data[i]}</th>
        <td>{this.props.number[i]}</td>
      </tr>);
    }
    return (
      <div>
        <p>TOTAL: {this.props.result}</p>
        <input type="text" style={this.style} size="40"
          value={this.state.input}
          onChange={this.onChange} onKeyPress={this.onKeyPress} />
        <button style={this.style} onClick={this.doAction}>
          Enter</button>
        <button style={this.style} onClick={this.reset}>
          Reset</button>
          <hr />
          <table>
            <tbody>{result}</tbody>
          </table>
          <p>{this.props.message}</p>
      </div>
    )
  }
}

Calc = connect((state)=> state)(Calc);
export default Calc;




▼リスト5-31
import Link from 'next/link';
import Layout from '../components/Layout';
import Calc from '../components/Calc';


export default () =>(
  <Layout header="Calc" title="calculator">
    <Calc />
    <hr />
    <div>
      <Link href="/">
        <button>&lt;&lt; Back to Top</button>
      </Link>
    </div>
    </Layout>
);




▼リスト5-32
import css from 'styled-jsx/css';


export default <style>{`
  body {……略……}
  header {……略……}
  footer {……略……}
  h1 {……略……}
  p {
      margin:0px;
      color:#669;
      font-size:16pt;
  }
  hr {
    margin:25px 0px;
  }
  tr {
    margin:0px;
  }
  th {
    font-size:14pt;
    font-weight:plain;
    text-align:left;
    padding:0px 20px;
    margin:0px;
    border-bottom:1px solid gray;
  }
  td {
    font-size:14pt;
    font-weight:plain;
    text-align:right;
    padding:0px 20px;
    margin:0px;
    border-bottom:1px solid gray;
  }
`}</style>;




▼リスト6-1
<script src="https://www.gstatic.com/firebasejs/バージョン/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: " APIキー ",
    authDomain: "プロジェクト.firebaseapp.com",
    databaseURL: "https://プロジェクト.firebaseio.com",
    projectId: "プロジェクト",
    storageBucket: "プロジェクト.appspot.com",
    messagingSenderId: " ID番号 "
  };
  firebase.initializeApp(config);
</script>




▼リスト6-2
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// 表示をレンダリング
ReactDOM.render(
    <App />,
    document.getElementById('root')
);




▼リスト6-3
th {
  font-size:14pt;
  text-align:left;
  padding:5px 20px;
  margin:0px;
  border-bottom:1px solid gray;
}
td {
  font-size:14pt;
  font-weight:plain;
  text-align:left;
  padding:5px 20px;
  margin:0px;
  border-bottom:1px solid gray;
}




▼リスト6-4
import React, { Component } from 'react';
import './App.css';
import Sampledata from './fire/SampleData';
import firebase from "firebase";


// Firebaseの設定
var config = {
  apiKey: " APIキー ",
  authDomain: "プロジェクト.firebaseapp.com",
  databaseURL: "https://プロジェクト.firebaseio.com",
  projectId: "プロジェクト",
  storageBucket: "プロジェクト.appspot.com",
  messagingSenderId: " ID番号 "
};


// Firebaseの初期化
firebase.initializeApp(config);


// Appコンポーネント
class App extends Component {


  render() {
    return (
      <div>
        <h1>Fire</h1>
        <h2>Sample data.</h2>
        <Sampledata />
      </div>
    );
  }
}


export default App;




▼リスト6-5
import React, {Component} from 'react'
import firebase from "firebase";
import "firebase/storage";


class Sampledata extends Component {
  style = {
    fontSize:"12pt",
    padding:"5px 10px"
  }


  constructor(props) {
    super(props);
    this.state = {
      data:[]
    }
    this.getFireData();


  }


  // Firebaseからのデータ取得
  getFireData(){
    let db = firebase.database();
    let ref = db.ref('sample/');
    let self = this;
    ref.orderByKey()
      .limitToFirst(10)
      .on('value', (snapshot)=>{
        self.setState({
          data:snapshot.val()
        });
    });
  }


  // データ表示の生成
  getTableData(){
    let result = [];
    if (this.state.data == null || this.state.data.length == 0){
      return [<tr key="0"><th>NO DATA.</th></tr>];
    }
    for(let i in this.state.data){
      result.push(<tr key={i}>
        <th>{this.state.data[i].ID}</th>
        <td>{this.state.data[i].name}</td>
        <td>{this.state.data[i].message}</td>
      </tr>);
    }
    return result;
  }


  render(){
    if (this.state.data.length == 0){
      this.getFireData();
    }
    return (
      <table><tbody>
        {this.getTableData()}
      </tbody></table>
    )
  }
}


export default Sampledata;




▼リスト6-6
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import firebase from "firebase";

// Firebaseの初期化
var config = {
  apiKey: " APIキー ",
  authDomain: "プロジェクト.firebaseapp.com",
  databaseURL: "https://プロジェクト.firebaseio.com",
  projectId: "プロジェクト",
  storageBucket: "プロジェクト.appspot.com",
  messagingSenderId: " ID番号 "
};

var fireapp;
try {
  firebase.initializeApp(config);
} catch (error) {
  console.log(error.message);
}
export default fireapp;

// ステート初期値
const initial = {
}

// レデューサー（ダミー）
function fireReducer(state = intitial, action) {
  switch (action.type) {
    // ダミー
    case 'TESTACTION':
      return state;
    // デフォルト
    default:
      return state;
  }
}

// initStore関数
export function initStore(state = initial) {
  return createStore(fireReducer, state, 
    applyMiddleware(thunkMiddleware))
}




▼リスト6-7
import Link from 'next/link';
import Layout from '../components/Layout';
import Sampledata from '../components/Sampledata';


export default () =>(
  <Layout header="Fire" title="Sample data.">
    <Sampledata />
  </Layout>
);




▼リスト6-8
import Layout from '../components/Layout';
import Firefind from '../components/Firefind';


export default () =>(
  <Layout header="Fire" title="Sample data.">
    <Firefind />
  </Layout>
);




▼リスト6-9
import React, {Component} from 'react'
import firebase from "firebase";
import "firebase/storage";


class Firefind extends Component {
  style = {
    borderBottom:"1px solid gray"
  }


  // 初期化。ステートとイベント用メソッドの設定
  constructor(props) {
    super(props);
    this.state = {
      input:'',
      data:[]
    }
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }


  // 入力フィールドに入力時の処理
  doChange(e){
    this.setState({
      input:e.target.value
    })
  }


  // ボタンクリック時の処理
  doAction(e){
    this.findFireData(this.state.input);
  }


  // 検索の実行
  findFireData(s){
    let db = firebase.database();
    let ref = db.ref('sample/');
    let self = this;
    ref.orderByKey()
      .equalTo(s)
      .on('value', (snapshot)=>{
        self.setState({
          data:snapshot.val()
        });
    });
  }


  // テーブルの内容の作成
  getTableData(){
    let result = [];
    if (this.state.data == null || this.state.data.length == 0){
      return [<tr key="0"><th>NO DATA.</th></tr>];
    }
    for(let i in this.state.data){
      result.push(<tr key={i}>
        <th>{this.state.data[i].ID}</th>
        <th>{this.state.data[i].name}</th>
        <td>{this.state.data[i].message}</td>
      </tr>);
    }
    return result;
  }


  // レンダリング
  render(){
    return (<div>
      <input type="text" onChange={this.doChange}
        style={this.style} value={this.state.input} />
      <button onClick={this.doAction}>Find</button>
      <hr />
      <table><tbody>
        {this.getTableData()}
      </tbody></table>
    </div>)
  }
}


export default Firefind;




▼リスト6-10
import Layout from '../components/Layout';
import Fireadd from '../components/Fireadd';


export default () =>(
  <Layout header="Fire" title="add data.">
    <Fireadd />
  </Layout>
);




▼リスト6-11
import React, {Component} from 'react'
import firebase from "firebase";
import Router from 'next/router';
import "firebase/storage";


class Fireadd extends Component {
  style = {
    fontSize:"12pt",
    padding:"5px 10px"
  }


  // 初期化処理
  constructor(props) {
    super(props);
    this.state = {
      name_str:'',
      msg_str:'',
      lastID:-1,
      data:[]
    }
    this.getLastID(); // 最後のIDのチェック
    this.doChangeName = this.doChangeName.bind(this);
    this.doChangeMsg = this.doChangeMsg.bind(this);
    this.doAction = this.doAction.bind(this);
  }


  doChangeName(e){
    this.setState({
      name_str:e.target.value
    })
  }
  doChangeMsg(e){
    this.setState({
      msg_str:e.target.value
    })
  }


  doAction(e){
    this.addFireData();
    Router.push('/fire');
  }


  // 最後のIDを取得
  getLastID(){
    let db = firebase.database();
    let ref = db.ref('sample/');
    let self = this;
    ref.orderByKey()
      .limitToLast(1)
      .on('value', (snapshot)=>{
        let res = snapshot.val();
        for(let i in res){
          self.setState({
            lastID:i
          });
          return;
        }
    });
  }


  // データを追加する
  addFireData(){
    if (this.state.lastID == -1){
      return;
    }
    let id = this.state.lastID * 1 + 1;
    let db = firebase.database();
    let ref = db.ref('sample/' + id);
    ref.set({
      ID: id,
      message: this.state.msg_str,
      name: this.state.name_str
    });
  }


  // レンダリング
  render(){
    if (this.state.lastID == -1){
      this.getLastID();
    }
    return (<div>
      {(this.state.lastID == -1)
      ?
      <p>please wait...</p>
      :
      <table>
      <tbody>
        <tr>
          <th className="label">name</th>
          <td><input type="text" placeholder="your name."
            onChange={this.doChangeName}
            value={this.state.name_str} /></td>
        </tr>
        <tr>
          <th className="label">message</th>
          <td><input type="text" size="40"
            placeholder="type message..."
            onChange={this.doChangeMsg}
            value={this.state.msg_str} /></td>
        </tr>
        <tr><th></th><td>
        <button onClick={this.doAction}>Add</button>
        </td></tr>
      </tbody>
      </table>
      }
    </div>)
  }
}


export default Fireadd;




▼リスト6-12
import Layout from '../components/Layout';
import Firedelete from '../components/Firedelete';


export default () =>(
  <Layout header="Fire" title="delete data.">
    <Firedelete />
  </Layout>
);




▼リスト6-13
import React, {Component} from 'react'
import firebase from "firebase";
import Router from 'next/router';
import "firebase/storage";


class Firedelete extends Component {
  style = {
    fontSize:"12pt",
    padding:"5px 10px"
  }


  // 初期化処理
  constructor(props) {
    super(props);
    this.state = {
      id_str:'',
    }
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }


  doChange(e){
    this.setState({
      id_str:e.target.value
    })
  }


  doAction(e){
    this.deleteFireData();
    Router.push('/fire');
  }


  // 項目の削除
  deleteFireData(){
    let id = this.state.id_str;
    let db = firebase.database();
    let ref = db.ref('sample/' + id);
    ref.remove();
  }


  // レンダリング
  render(){
    return (<div>
      <table>
      <tbody>
        <tr>
          <th className="label">ID:</th>
          <td><input type="text" placeholder="delete ID:"
            onChange={this.doChange}
            value={this.state.id_str} /></td>
        </tr>
        <tr><th></th><td>
        <button onClick={this.doAction}>Delete</button>
        </td></tr>
      </tbody>
      </table>
    </div>)
  }


}


export default Firedelete;




▼リスト6-14
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import firebase from "firebase";


// Firebase設定
var config = {
  apiKey: " APIキー ",
  authDomain: "プロジェクト.firebaseapp.com",
  databaseURL: "https://プロジェクト.firebaseio.com",
  projectId: "プロジェクト",
  storageBucket: "プロジェクト.appspot.com",
  messagingSenderId: " ID番号 "
};


// Firebase初期化
var fireapp;
try {
  fireapp = firebase.initializeApp(config);
} catch (error) {
  console.log(error.message);
}
export default fireapp;


// ステート初期値
const initial = {
  login:false,
  username:'(click here!)',
  email:'',
  data:[],
  items:[]
}


// レデューサー
function fireReducer(state = intitial, action) {
  switch (action.type) {
    // ダミー
    case 'UPDATE_USER':
      return action.value;
    // デフォルト
    default:
      return state;
  }
}


// initStore関数
export function initStore(state = initial) {
  return createStore(fireReducer, state,
    applyMiddleware(thunkMiddleware))
}




▼リスト6-15
import React, {Component} from 'react';
import { connect } from 'react-redux';
import firebase from "firebase";


class Account extends Component {
  style = {
    fontSize:"12pt",
    padding:"5px 10px"
  }


  constructor(props) {
    super(props);
    //this.login_check();
    this.login_check = this.login_check.bind(this);
  }


  // ログイン処理
  login(){
    let provider = new firebase.auth.GoogleAuthProvider();
    var self = this;
    firebase.auth().signInWithPopup(provider)
      .then((result)=>{
        this.props.dispatch({
          type:'UPDATE_USER',
          value:{
            login:true,
            username: result.user.displayName,
            email: result.user.email,
            data:this.props.data,
            items:this.props.items
          }
        });
        this.props.onLogined();
    });
  }


  // ログアウト処理
  logout(){
    console.log("logout");
    firebase.auth().signOut();
    this.props.dispatch({
      type:'UPDATE_USER',
      value:{
        login:false,
        username: '(click here!)',
        email: '',
        data:[],
        items:[]
      }
    });
    this.props.onLogouted();
  }


  // login,loguoutの✓
  login_check(){
    if (this.props.login == false){
        this.login();
    } else {
      this.logout();
    }
  }


  // レンダリング
  render() {
    return (
      <p className="login">
        <span  className="account"
          onClick={this.login_check}>
          LOGINED: {this.props.username}
        </span>
      </p>
    );
  }
}


Account = connect((state)=> state)(Account);
export default Account;




▼リスト6-16
import Link from 'next/link';
import Layout from '../components/Layout';


import Address from '../components/Address';


export default () =>(
  <Layout header="Address" title="address book.">
    <Address />
    <hr/>
    <div>
      <Link href="/address_add">
        <button>add</button>
      </Link>
    </div>
  </Layout>
);




▼リスト6-17
import React, {Component} from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import firebase from "firebase";
import Lib from '../static/address_lib';
import Account from '../components/Account';


class Address extends Component {
  style = {
    fontSize:"12pt",
    padding:"5px 10px"
  }


  constructor(props) {
    super(props);
    this.logined = this.logined.bind(this);
  }


  // login,logout処理
  logined(){
    this.getFireData();
  }
  logouted(){
    Router.push('/address');
  }


  // Firebaseからデータを取得
  getFireData(){
    if (this.props.email == undefined ||
      this.props.email == ''){ return; }
    let email = Lib.encodeEmail(this.props.email);
    let db = firebase.database();
    let ref = db.ref('address/');
    let self = this;
    ref.orderByKey()
      .equalTo(email)
      .on('value', (snapshot)=>{
        let d = Lib.deepcopy(snapshot.val());
        this.props.dispatch({
          type:'UPDATE_USER',
          value:{
            login:this.props.login,
            username: this.props.username,
            email: this.props.email,
            data:d,
            items:self.getItem(d)
          }
        });
    });
  }


  // dataを元に表示項目を作成
  getItem(data){
    if (data == undefined){ return; }
    let res = [];
    for (let i in data){
      for(let j in data[i]){
        let email = Lib.decodeEmail(j);
        let s = data[i][j]['name'];


        res.push(<li key={j} data-tag={email}
          onClick={this.go.bind(null, email)}>
          {data[i][j]['check'] == true ?
            <b>✓</b> : ''}{s} ({email})
        </li>);
      }
      break;
    }
    return res;
  }


  // データ表示ページの移動
  go(email){
    Router.push('/address_show?email=' + email);
  }


  // レンダリング
  render(){
    return (
      <div>
        <Account onLogined={this.logined}
          onLogouted={this.logouted} />
        <ul>
          {this.props.items == []
          ?
          <li key="0">no item.</li>
          :
          this.props.items
          }
        </ul>
      </div>
    )
  }
}


Address = connect((state)=> state)(Address);
export default Address;




▼リスト6-18
import Link from 'next/link';
import Layout from '../components/Layout';


import AddressAdd from '../components/AddressAdd';
import firebase from "firebase";


export default () =>(
  <Layout header="Address" title="address create.">
    <AddressAdd />
    <hr />
    <div>
      <Link href="/address">
        <button>back</button>
      </Link>
    </div>
  </Layout>
);




▼リスト6-19
import React, {Component} from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import firebase from "firebase";
import Lib from '../static/address_lib';
import Account from '../components/Account';


class AddressAdd extends Component {
  style = {
    fontSize:"12pt",
    padding:"5px 10px"
  }


  constructor(props) {
    super(props);
    if (this.props.login == false){
      Router.push('/address');
    }
    this.state = {
     name:'',
     email:'',
     tel:'',
     memo:'',
     message:'データを入力して下さい。'
    }
    this.logined = this.logined.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeTel = this.onChangeTel.bind(this);
    this.onChangeMemo = this.onChangeMemo.bind(this);
    this.doAction = this.doAction.bind(this);
  }


  // login,logout処理
  logined(){
    console.log('logined.');
  }
  logouted(){
    Router.push('/address');
  }


  // フィールド入力処理
  onChangeName(e){
    this.setState({name:e.target.value});
  }
  onChangeEmail(e){
    this.setState({email:e.target.value});
  }
  onChangeTel(e){
    this.setState({tel:e.target.value});
  }
  onChangeMemo(e){
    this.setState({memo:e.target.value});
  }


  // データの登録処理
  doAction(e){
    let key = this.state.email;
    let data = {
      name:this.state.name,
      tel:this.state.tel,
      memo:this.state.memo
    }
    let db = firebase.database();
    let ref = db.ref('address/'
      + Lib.encodeEmail(this.props.email) + '/'
      + Lib.encodeEmail(this.state.email));
    console.log(ref);
    ref.set(data);
    this.setState({
      name:'',
      email:'',
      tel:'',
      memo:'',
      message:'※登録しました。'
    })
  }


  // レンダリング
  render(){
  return (
    <div>
      <Account self={this} onLogined={this.logined}
        onLogouted={this.logouted} />
      <hr/>
      <p>{this.state.message}</p>
      {this.props.login
      ?
      <table>
        <tbody>
          <tr>
            <th>name:</th>
            <td><input type="text" size="30"
              value={this.state.name}
              onChange={this.onChangeName}/></td>
          </tr>
          <tr>
            <th>email:</th>
            <td><input type="text" size="30"
              value={this.state.email}
              onChange={this.onChangeEmail} /></td>
          </tr>
          <tr>
            <th>tel:</th>
            <td><input type="text" size="30"
              value={this.state.tel}
              onChange={this.onChangeTel} /></td>
          </tr>
          <tr>
            <th>memo:</th>
            <td><input type="text" size="30"
              value={this.state.memo}
              onChange={this.onChangeMemo} /></td>
          </tr>
          <tr>
            <th></th>
            <td><button onClick={this.doAction}>
              Add</button></td>
          </tr>
        </tbody>
      </table>
      :
      <p>please login...</p>
      }
    </div>
    );
  }
}


AddressAdd = connect((state)=> state)(AddressAdd);
export default AddressAdd;




▼リスト6-20
import Link from 'next/link';
import Layout from '../components/Layout';
import AddressShow from '../components/AddressShow';
import firebase from "firebase";


export default () =>(
  <Layout header="Address" title="address book.">
    <AddressShow />
    <hr/>
    <div>
      <Link href="/address">
        <button>back</button>
      </Link>
    </div>
  </Layout>
);




▼リスト6-21
import React, {Component} from 'react'
import { connect } from 'react-redux'
import firebase from "firebase";
import Lib from '../static/address_lib';
import Account from '../components/Account';


import Router from 'next/router';


class AddressShow extends Component {
  style = {
    fontSize:"12pt",
    padding:"5px 10px"
  }


  constructor(props) {
    super(props);
    if (this.props.login == false){
      Router.push('/address');
    }
    this.state = {
      last:-1,
      input:'',
      email:Router.query.email,
      address:null,
      message:Router.query.email + 'のデータ'
    }
    this.logined = this.logined.bind(this);
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }


  // login,logout処理
  logined(){
    console.log('logined');
  }
  logouted(){
    Router.push('/address');
  }


  // アドレスデータの検索
  getAddress(email){
    let db = firebase.database();
    let ref0 = db.ref('address/'
      + Lib.encodeEmail(this.props.email)
      + '/' + Lib.encodeEmail(email) + '/check');
    ref0.set(false);
    let ref = db.ref('address/'
      + Lib.encodeEmail(this.props.email));
    let self = this;
    ref.orderByKey()
      .equalTo(Lib.encodeEmail(email))
      .on('value', (snapshot)=>{
        for(let i in snapshot.val()){
          let d = Lib.deepcopy(snapshot.val()[i]);
          self.setState({
            address:d
          });
          break;
        }
      });
  }


  // フィールド入力
  doChange(e){
    this.setState({
      input:e.target.value
    });
  }


  // メッセージ送信処理
  doAction(){
    let from = Lib.encodeEmail(this.props.email);
    let to = Lib.encodeEmail(this.state.email);
    let db = firebase.database();
    let d = new Date().getTime();
    let ref = db.ref('address/' + from + '/' + to
      + '/messages/' + d);
    ref.set('to: ' + this.state.input);
    let ref2 = db.ref('address/' + to + '/' + from
      + '/messages/' + d);
    ref2.set('from: ' + this.state.input);
    let ref3 = db.ref('address/' + to + '/' + from
      + '/check/');
    ref3.set(true);
    this.setState({ input:''})
  }


  // レンダリング
  render(){
    if (this.state.address == null){
      this.getAddress(Router.query.email);
    }
    let items = [];
    if (this.state.address != null){
      for(let n in this.state.address.messages){
        items.unshift(<li key={n}>
          {this.state.address.messages[n]}
        </li>);
      }
    }
    return (
      <div>
        <Account onLogined={this.logined}
          onLogouted={this.logouted} />
        <p>{this.state.message}</p>
        <hr/>
        {this.state.address != null
        ?
        <table>
          <tbody>
            <tr>
              <th>NAME</th>
              <td>{this.state.address.name}</td>
            </tr>
            <tr>
              <th>MAIL</th>
              <td>{this.state.email}</td>
            </tr>
            <tr>
              <th>TEL</th>
              <td>{this.state.address.tel}</td>
            </tr>
            <tr>
              <th>MEMO</th>
              <td>{this.state.address.memo}</td>
            </tr>
          </tbody>
        </table>
        :
        <p>no-address</p>
        }
        <hr />
        <fieldset>
          <p>Message:</p>
          <input type="text" size="40"
            value={this.state.input}
            onChange={this.doChange} />
          <button onClick={this.doAction}>send</button>
        </fieldset>
        {this.state.address != null &&
          this.state.address.messages != null
        ?
        <div>
        <p>※{this.state.address.name}さんとのメッセージ</p>
        <ul>{items}</ul>
        </div>
        :
        <p>※メッセージはありません。</p>
        }
      </div>
    );
  }


}
AddressShow = connect((state)=> state)(AddressShow);
export default AddressShow;




▼リスト6-22
class Lib{
  static deepcopy(val){
    return JSON.parse(JSON.stringify(val));
  }


  static encodeEmail(val){
    return val.split(".").join("*");
  }
  static decodeEmail(val){
    return val.split("*").join(".");
  }
}


export default Lib;




▼リスト6-23
import css from 'styled-jsx/css';


export default <style>{`
  ……中略……
  tr {
    margin:0px;
  }
  th {
    font-size:14pt;
    font-weight:plain;
    text-align:left;
    padding:0px 20px;
    margin:0px;


  }
  td {
    font-size:14pt;
    font-weight:plain;
    text-align:left;
    padding:0px 20px;
    margin:0px;
  }
  .label {
    font-size:14pt;
    margin:20px 5px;
  }
  .login {
    text-align:right;
  }
  .account {
    cursor:pointer;
    font-size:12pt;
    padding:5px 10px;
    color:gray;
    border:2px solid lightgray;
  }
  fieldset {
    margin:0px 0px 30px 0px;
  }
  input {
    border: 0px solid white;
    border-bottom:1px solid gray;
    font-size:14pt;
  }
  button {
    font-size:14pt;
    padding: 0px 20px;
  }
  li {
    font-size:14pt;
    cursor:pointer;
  }
`}</style>;




▼リスト6-24
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}




▼リストA-1
<!DOCTYPE html>
<html lang="ja">
<head><title>Sample</title></head>
<body>
<h1>Index</h1>


<script>
function hello(name){
    document.write('<p>こんにちは、' + name + 'さん！</p>');
}


hello('たろう');
hello('花子');
</script>


</body>
</html>




▼リストA-2
function a(){
    return "hello";
}


let b = a;
let c = a();




▼リストA-3
<script>
function hello(getName, name){
    document.write('<p>こんにちは、' + getName(name) + 'さん！</p>');
}


hello((name)=>{ return '<b>' + name + '</b>'; }, 'たろう');
hello((name)=>'<<<' + name + '>>>', '花子');
</script>




▼リストA-4
<!DOCTYPE html>
<html lang="ja">
<head><title>Sample</title></head>
<body>
<h1>Index</h1>


<script>
let ob = {red:255, green:125, blue:0};
document.write('<p>RED: ' + ob.red + '</p>');
document.write('<p>GREEN:' + ob.green + '</p>');
document.write('<p>BLUE: ' + ob.blue + '</p>');
</script>


</body>
</html>




▼リストA-5
let ob = {
    red:255, green:125, blue:0,

    print: function(){
      document.write('<p>RED: ' + this.red + '</p>');
      document.write('<p>GREEN:' + this.green + '</p>');
      document.write('<p>BLUE: ' + this.blue + '</p>');
    }
};


ob.print();




▼リストA-6
let ob = {
    red:255, green:125, blue:0,

    print(){
        ……略……
    }
};
document.write(ob.print());




▼リストA-7
class MyObj {
    constructor(r, g, b){
        this.red = r;
        this.green = g;
        this.blue = b;
    }


    get hex(){
        return '#' + ('00' + this.red.toString(16)).substr(-2)
            + ('00' + this.blue.toString(16)).substr(-2)
            + ('00' + this.green.toString(16)).substr(-2);
    }


    get startP(){
        return '<p style="background-color:'
            + this.hex + '">';
    }


    get endP(){
        return '</p>';
    }


    print(){
        document.write(this.startP);
        document.write('RED:  ' + this.red + '<br/>');
        document.write('GREEN:' + this.green + '<br/>');
        document.write('BLUE: ' + this.blue + '<br/>');
        document.write(this.endP);
    }
};


let ob = new MyObj(255,200,200);
ob.print();


let ob2 = new MyObj(0, 150, 200);
ob2.print();




▼リストA-8
<script>
class MyObj {
    constructor(r, g, b){
        this.red = r;
        this.green = g;
        this.blue = b;
    }


    get hex(){
        return '#' + ('00' + this.red.toString(16)).substr(-2)
            + ('00' + this.blue.toString(16)).substr(-2)
            + ('00' + this.green.toString(16)).substr(-2);
    }


    ……途中、省略……

};


class UltraMyObj extends MyObj {


    get startP(){
        return '<style>'
            + 'th { border:1px solid gray;padding:5px 20px; }'
            + 'td { border:1px solid gray;padding:5px 20px; }'
            + '</style><table>';
  }


    get header(){
        return '<tr><th style="background-color:'
              + this.hex + '">' + this.hex + '</th></tr>';
    }


    body(){
        document.write('<tr><td>RED:  '
              + this.red + '</td></tr>');
        document.write('<tr><td>GREEN:'
              + this.green + '</td></tr>');
        document.write('<tr><td>BLUE: '
              + this.blue + '</td></tr>');
    }


    get endP(){
        return '</table>';
    }


    print(){
        document.write(this.startP);
        document.write(this.header);
        this.body();
        document.write(this.endP);
    }
}


let ob = new MyObj(255,200,200);
ob.print();


let ob2 = new UltraMyObj(0, 150, 200);
ob2.print();
</script>




▼リストA-11
export class MyObj {


    constructor(r, g, b){
        this.red = r;
        this.green = g;
        this.blue = b;
    }


    printData(){
        return '<p>RED: ' + this.red + '</p>'
            + '<p>GREEN:' + this.green + '</p>'
            + '<p>BLUE: ' + this.blue + '</p>';
    }
};




▼リストA-12
<body>
<h1>Index</h1>
<div id="stage"></div>


<script type="module">
import {MyObj} from './script.js';


let ob = new MyObj(255, 200, 100);
document.getElementById("stage").innerHTML = ob.printData();
</script>
</body>