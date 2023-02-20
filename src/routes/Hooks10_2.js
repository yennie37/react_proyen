/** App component 전체를 가지고 있는 홈 라우트 */
import {useEffect, useState, useRef} from "react";
import styles from "./Hooks10.module.css";

// 2-1
const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);

  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = title;
  }

  useEffect(updateTitle, [title]);
  return setTitle;
};

// 2-2
// 터미널에 warning 뜨는건 왜뜨는걸까
const useClick = (onClick) => {  
  const element = useRef();

  useEffect(() => {
    // componentDidMount 일때 동작(mount될때)
    if(element.current) {
      element.current.addEventListener("click", onClick);
    } 

    // componentWillUnMount가 될때 addEventListener를 지워주기(mount되지 않을때)
    return () => {
      if(element.current) {
        element.current.removeEventListener("click", onClick);
      }  
    };
  }, [onClick]);

  if(typeof onClick !== "function") {
    return;
  }

  return element;
};

// 2-3 useConfirm
const useConfirm = (message = "", onConfirm, onCancel) => {
  // onConfirm이 없거나 function이 아니면 리턴
  if(!onConfirm || typeof onConfirm !== "function") {
    return;
  }

  // onCancel이 있는데 function이 아니면 리턴
  if(onCancel && typeof onCancel !== "function") {
    return;
  }

  const confirmAction = () => {
    if(window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  }
  return confirmAction;
};

//2-3 usePreventLeave
const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = ""; //안넣으면 크롬에서 이벤트 안먹음
  };

  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () => window.removeEventListener("beforeunload", listener);

  return {enablePrevent, disablePrevent};
}


function Hooks10_2() {  
  // 2-0
  const sayHello = () => console.log("Hello");

  const [number, setNumber] = useState(0);
  const [anumber, setAnumber] = useState(0);  

  // 2-1 
  const titleUpdater = useTitle("로딩중... ");
  setTimeout(() => titleUpdater("TestPage2"), 3000); // 3초뒤 타이틀 바뀜

  // 2-2 
  // reference 는 기본적으로 component의 어떤 부분을 선택할 수 있는 방법
  const tmpRef = useRef();
  setTimeout(() => tmpRef.current.focus(), 4000);

  const title = useClick(sayHello);

  // 2-3 useConfirm
  const deleteWorld = () => console.log("세상을 지우는중 ;( ");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("R U sure?", deleteWorld, abort);

  //2-3 usePreventLeave
  const {enablePrevent, disablePrevent} = usePreventLeave();

  return (    
    <div>
      <h1 className={styles.title}>Hooks 테스트 페이지 2</h1>      
      
      <div>
        <h2>2-0. useEffect</h2>               
        <button onClick={() => setNumber(number + 1)}>{number}</button>
        <button onClick={() => setAnumber(anumber + 1)}>{anumber}</button>
      </div>
      <hr/>

      <div>
        <h2>2-1. useTitle</h2>                               
      </div>
      <hr/>

      <div>
        <h2>2-2. useClick - What is Reference ? </h2>         
        <input ref={tmpRef} placeholder="lalala" />
      </div>
      <hr/>

      <div>
        <h2>2-2. useClick</h2>                     
        {/* warning 수정하려다가, 클릭이벤트가 안먹게되서 우선은 패스하고 Hooks 배우는데 집중하기로 함. */}
        <h3 ref={title}>누르면 인사를 해요~! </h3>          
      </div>
      <hr/>

      <div>
        {/* usePreventLeave => 저장하지 않고 나가려는걸 막아주는 알럿 */}
        <h2>2-3. useConfirm & usePreventLeave </h2>         
        <button onClick={confirmDelete}>Delete the world</button>
        <br></br>
        <button onClick={enablePrevent}>Protect</button>
        <button onClick={disablePrevent}>Unprotect</button>
      </div>
      <hr/>
      
    </div>
  );
}

export default Hooks10_2;