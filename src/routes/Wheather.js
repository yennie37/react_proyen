/** App component 전체를 가지고 있는 홈 라우트 */
import {useEffect, useState} from "react";
import styles from "./Wheather.module.css";

function Wheather() {
  const [loading, setLoading] = useState(true);
  const [today, setToday] = useState([]);
  const [forecast, setForecast] = useState([]);

  const getForecast = async() => {
    const json = await (await fetch(
      "http://goweather.herokuapp.com/weather/Seoul"
    )).json();

    //console.log(json);
    setToday(json);
    setForecast(json.forecast);
    setLoading(false); // 로딩완료시 제거
  }

  useEffect(() => {
    getForecast();   
  }, []);

  // 현재 날짜 생성
  const currentDate = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div>      
      {loading ? (
        <div className={styles.loader}>          
          <h1>서울 날씨를 읽는 중 :3</h1>
        </div>
      ) : (        
        <div>
          <h1 className={styles.title}>{currentDate} 날씨</h1>       

          <h2 className={styles.annotation}></h2>
          <h3 className={styles.annotation}>기온은 {today.temperature} 입니다.</h3>        
          <h3 className={styles.annotation}>풍속은 {today.wind} 입니다.</h3>  
          <h3 className={styles.annotation}>날씨는 {today.description} 입니다.</h3>  
          
          <div className={styles.container}>
            <div className={styles.days}>
              {forecast.map((cast) => (
                <div>
                  <h3>{cast.day}일 후</h3>
                  <h3>{cast.temperature}</h3>
                  <h3>{cast.wind}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}      
    </div>
  );
}

export default Wheather;