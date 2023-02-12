/** App component 전체를 가지고 있는 홈 라우트 */
import {useState} from "react";
import styles from "./Hooks10.module.css";

const useInput = (initalValue, validator) => {
  const [value, setValue] = useState(initalValue);
  //console.log(value);
  const onChange = event => {
    const {
      target: {value}
    } = event;

    //console.log(event.target);

    let willUpdate =  true;
    //console.log(typeof validator);

    if(typeof validator === "function") {
      willUpdate = validator(value);
      console.log(willUpdate);
    }

    // 두번째 인자가 true이면 밸류를 세팅.
    if(willUpdate) {
      setValue(value);
      console.log(value);
    }
  };
  
  return {value, onChange};
};

// 1-3
const content = [
  {
    tab: "Section 1",
    content: "I am the content of the Section 1."
  },
  {
    tab: "Section 2",
    content: "I am the content of the Section 2."
  }
];

// 1-3
const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  
  if(!allTabs || !Array.isArray(allTabs)) {
    return; // 배열이 아닐때 리턴
  }

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

function Hooks10_1() {  
  // 1-1
  const maxLen = value => value.length <= 10;
  const name = useInput("Ms.", maxLen);
  
  // 1-2 @를 포함하고 있으면 true
  const exceptStr = value => value.includes("@");
  const email = useInput("@", exceptStr);

  // 1-3
  const {currentItem, changeItem} = useTabs(0, content); 

  return (
    <div>
      <h1 className={styles.title}>Hooks 테스트 페이지 1</h1>     
      <div>
        <h2>1-1. useInput part1</h2>       
        {/* value={name.value} onChange={name.onChange} 를 {...name}으로 줄여서 사용 가능. */}
        <input className={styles.input} placeholder="이름을 입력하세요1 " value={name.value} onChange={name.onChange}/>
        <input className={styles.input} placeholder="이름을 입력하세요2 " {...name}/>        

        {/* validation */}
        <h2>1-2. useInput part2</h2>       
        <input className={styles.input} placeholder="이메일을 입력하세요 " {...email}/>        

        <h2>1-3. useTabs</h2>       
        <div>
          {content.map((section, index) => (
            <button key={index} onClick={() => changeItem(index)}>{section.tab}</button>
          ))}
          <div>
            {currentItem.content}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hooks10_1;