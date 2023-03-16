/** App component 전체를 가지고 있는 홈 라우트 */
import {useNavigate} from "react-router-dom"; 
import { Helmet } from 'react-helmet';
import styles from "./Home.module.css";

function Home() {  
  const navigate = useNavigate();
  
  return (
    <div>
      <Helmet>        
        <title>연리둥절</title>
      </Helmet>
      
      <h1 className={styles.mainTitle}>Menu</h1> 
  
      <div className={styles.buttons}>        
        <button onClick={() => navigate('/movieHome')}>Movie List</button>
      </div>

      <div className={styles.buttons}>      
        <button onClick={() => navigate('/testPage/')}>Test Main</button>  
      </div>
    </div>
  );
}

export default Home;