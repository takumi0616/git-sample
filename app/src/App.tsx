import React ,{ Fragment,useState , useEffect ,useMemo} from 'react';

//変数の宣言
const message: string = 'こんにちは React!!'
const num: number = 3;
const bool:boolean = true;
const numArr: number[] = [10,20,30];
const strArr: string[] = ["りんご","メロン"];

//変数同士の計算
const num1: number = num + numArr[1];
const message1: string = message + strArr[1];

//変数にHTMLのコードを入れられる
const element = <h1 title="hello">Hello JSX!</h1>;

//アロー関数
const returnStrings = () => {
  return 'アロー関数で返された文字列です'
};
const returnSt = <h2>{returnStrings()}</h2>;

//function
function returnStrings1(){
  return 'functionで返された文字列です'
}
const returnSt1 = <h2>{returnStrings1()}</h2>;

//繰り返し文
const  forproducts = () => {
    const numArr1 = [];
    for (let i = 0; i < 5; i++) {
      numArr1.push(<p>{i}</p>);
    }
    return numArr1;
};

//if文-書き方1　三項演算子
const ifproducts = () => {
  return (
    <Fragment>
      <div>{ bool ? 'hello world0' : 'Not hello world' }</div>
    </Fragment>
  );
};
//if文-書き方2　&&を使う
const ifproducts1 = () => {
  const isFlag = true;
  return (
    <Fragment>
      <div>{ isFlag && bool && "hello world1" }</div>
    </Fragment>
  );
};

//オブジェクト型定義1
type Person = {
  firstName: string,
  lastName: string,
  age:number | undefined,
  isStudent: boolean
};
//
const person1 : Person = {
  firstName :'takasuka',
  lastName : 'takumi',
  age: undefined,
  isStudent : true
};
//オブジェクトの型に変数を使うこともできる
const age1 = 'age';
//オブジェクトの型定義2
let person2: {
  name:string;
  [age1]: number;
} = {
  name: 'alice',
  age: 25,
};

//Buttonの表示、alertでHelloが出る
const Button1 = () => {
  function greeting() {
    alert("Hello!");
  }

return (
    <div>
      <button onClick={greeting}>Click me!</button>
    </div>
  );
};

//React Hooks
function Counter() {
  const [count, setCount] = useState(1);
  // const [text, setText] = useState<string>('');
  const text = useMemo(()=>{
    return `${count} 回目`
  },[count])
  //useStateだけが再レンダリングの手段
  //setCountが走った時にレンダリング
  //型を示さなくていい
  function handleClick() {
    setCount(count + 1);
    setCount(count * 2);//を増やすとこっちに確定する
    console.log(count);//一個前のやつが反映
  }
  //useEffect
  // useEffect(() => {
  //   // 副作用処理を記述
  //   console.log(count);
  //   setText(`${count} 回目`);//テンプレートリテラル
  // }, [count]);
  //関数を実行するタイミングをレンダリング後まで遅らせる
  return (
    <button onClick={handleClick}>
       {text}
    </button>
  );
}
//usecallbackはuseMemoの関数版
//useContextログイン状態とかに使う




// export const TestUseState = () => {
//   const [email, setEmail] = useState()

//   useEffect(() => {
//     setEmail('test@example.com')
//   }, [])

//   return (
//     <div className="m-3 col-4">
//       <div>useStateのテスト</div>
//       <div className="card">
//         <div className="card-body">
//           <div>メールアドレス：{email}</div>
//         </div>
//       </div>
//     </div>
//   )
// }

//export default TestUseState


//Hello,world表示,変数の表示
function App() {
  return (
    <div>
      {Counter()}
      {element}
    {returnSt}
    {returnSt1}
    <h1>Hello,world!</h1>
    <p>{message}</p>
    <p>{num}</p>
    <p>{bool}</p>
    <p>{numArr[0]}</p>
    <p>{numArr[1]}</p>
    <p>{numArr[2]}</p>
    <p>{strArr[0]}</p>
    <p>{strArr[1]}</p>
    <p>{num1}</p>
    <p>{message1}</p>
    <p>It`s {num}</p>
    <p>{num + numArr[1]}</p>
    {forproducts()}
    {ifproducts()}
    {ifproducts1()}
    <p>{person1.firstName}</p>
    <p>{person2.name}</p>
    {Button1()}

    </div>
  );
}

export default App;




//import logo from './logo.svg';
//import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           編集 <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
