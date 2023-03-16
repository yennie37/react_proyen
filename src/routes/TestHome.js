/** App component 전체를 가지고 있는 홈 라우트 */
import {Link, useNavigate} from "react-router-dom"; 
//import {useEffect} from "react";
import styles from "./Home.module.css";

function TestHome() {
  // Link 사용시 이벤트가 안먹거나 약간 딜레이되는 경우 있음.
  // => useNavigate 사용(React Router v6 이상만 가능)
  const navigate = useNavigate();
  
  // 만약 v6 미만의 버전인 경우 useLocation, useHistory을 사용
  // useLocation
  /*
  const location = useLocation();
  */

  // useHistory
  // React Router v6에서는 useHistory hook이 삭제되어 사용불가.
  /*
  const history = useHistory();

  const handleClick = () => {
    history.push('/testPage/hooks2');
  };
  */

  return (
    <div>
      <h1 className={styles.mainTitle}>Test Home</h1> 
      
      <div className={styles.buttons}>        
        <button onClick={() => navigate(`${process.env.PUBLIC_URL}`)}>Return to Main</button>
      </div>

        {/* Link 
        <div className={styles.buttons}>        
          <button><Link to="/testPage/hooks1">Hooks10(1)로 이동</Link></button>
        </div>
        */}
        <div className={styles.buttons}>   
          <button onClick={() => navigate('/testPage/hooks1')}>Hooks10(1)로 이동</button>
        </div>

        {/* React Router v6에서는 useHistory hook이 삭제되어 사용불가 !!!
        <div className={styles.buttons}>        
          <button onClick={handleClick}>Hooks10(2)로 이동</button>
        </div>
        */}
        {/* 뒤로가기 하면 오류남 왜지? Movie로 이동 버튼은 오류안나는데.... */}
        <div className={styles.buttons}>        
          <button onClick={() => navigate('/testPage/hooks2')}>Hooks10(2)로 이동</button>
        </div>
        
        {/* useLocation 
        <div className={styles.buttons}>        
          <button onClick={() => location.pathname='/testPage/hooks3'}>Hooks10(3)로 이동</button>
        </div>
        */}
        <div className={styles.buttons}>      
          <button onClick={() => navigate('/testPage/hooks3')}>Hooks10(3)로 이동</button>  
        </div>
      
    </div>
  );
}

export default TestHome;