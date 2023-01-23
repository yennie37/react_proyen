/** App component 전체를 가지고 있는 홈 라우트 */
import {useEffect, useState} from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async() => {
    const json = await (await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.9&sort_by=year"
    )).json();

    //console.log(json.data.movies);
    setMovies(json.data.movies);
    setLoading(false); // 로딩완료시 제거
  }
  

  useEffect(() => {
    getMovies();   
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Movie Lists ({movies.length})</h1> 
      {loading ? (
        <div className={styles.loader}>
          <h1>영화목록을 가져오는 중 :9</h1>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.movies}>
            {movies.map((movie) => (
              //props로 Component에 전달
              <Movie 
                key={movie.id} // key : map안에서 component들을 render할 때 사용
                id={movie.id} 
                coverImg={movie.medium_cover_image} 
                title={movie.title} 
                summary={movie.summary} 
                genres={movie.genres}
              />
            ))}
          </div>
        </div>
      )}      
    </div>
  );
}

export default Home;