/** App component 전체를 가지고 있는 홈 라우트 */
import {useEffect, useState} from "react";
import styles from "./Hooks10.module.css";

function Hooks10_2() {  
  const sayHello = () => console.log("Hello");

  // useEffect : 2개의 인자가 있음.
  // 1st Argument : function으로써의 effect 
  // 2st Argument : dependency(deps) - effect는 deps리스트에 있는 값일때만 값이 변하도록 활성화

  //useEffect는 componentDidMount, componentWillUpdate 

  //useEffect(sayHello, []); // 처음 렌더링될때만 sayHello 호출
  //useEffect(() => {
  // sayHello();
  //});

  const [number, setNumber] = useState(0);
  const [anumber, setAnumber] = useState(0);
  
  //useEffect(sayHello, [number]); // 랜더링될때와 number가 바뀔때만 sayHello 호출
  //useEffect(sayHello, [anumber]); // 랜더링될때와 anumber가 바뀔때만 sayHello 호출

  return (
    <div>
      <h1 className={styles.title}>Hooks 테스트 페이지 2</h1>     
      <div>
        <h2>2-0. useEffect</h2>               
        <button onClick={() => setNumber(number + 1)}>{number}</button>
        <button onClick={() => setAnumber(anumber + 1)}>{anumber}</button>
      </div>

      <div>
        <h2>2-1. useTitle</h2>                               
      </div>

    </div>
  );
}

export default Hooks10_2;