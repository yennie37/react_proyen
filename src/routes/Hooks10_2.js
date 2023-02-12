/** App component 전체를 가지고 있는 홈 라우트 */
import {useState} from "react";
import styles from "./Hooks10.module.css";

function Hooks10_2() {  
  return (
    <div>
      <h1 className={styles.title}>Hooks 테스트 페이지 2</h1>     
      <div>
        <h2>2-1. useTitle</h2>               
        <input className={styles.input} placeholder="이름을 입력하세요2 " {...name}/>        
      </div>

    </div>
  );
}

export default Hooks10_2;