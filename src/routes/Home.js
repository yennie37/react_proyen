/** App component 전체를 가지고 있는 홈 라우트 */
import {Link} from "react-router-dom"; 
import styles from "./Home.module.css";

document.body.style.backgroundColor = "rgb(226, 223, 243)";

function Home() {
  return (
    <div>
      <h1 className={styles.mainTitle}>Menu</h1> 
      <div className={styles.buttons}>        
        <button><Link to="/movieHome/">Movie로 이동</Link></button>
      </div>

      <div className={styles.buttons}>        
        <button><Link to="/testPage/hooks1">Hooks10(1)로 이동</Link></button>
      </div>

      <div className={styles.buttons}>        
        <button><Link to="/testPage/hooks2">Hooks10(2)로 이동</Link></button>
      </div>

      <div className={styles.buttons}>        
        <button><Link to="/testPage/hooks3">Hooks10(3)로 이동</Link></button>
      </div>
    </div>
  );
}

export default Home;