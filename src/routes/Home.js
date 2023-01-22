/** App component 전체를 가지고 있는 홈 라우트 */
import {useEffect, useState} from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async() => {
    const json = await (await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.9&sort_by=year"
    )).json();

    setMovies(json.data.movies);
    setLoading(false); // 로딩완료시 제거
  }
  
  useEffect(() => {
    getMovies();   
  }, []);

  return (
    <div>    
      <h1>영화목록({movies.length})</h1> 
      {loading ? (
        <h1>로딩중</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            //props로 Component에 전달
            <Movie 
              key={movie.id} // key : map안에서 component들을 render할 때 사용
              coverImg={movie.medium_cover_image} 
              title={movie.title} 
              summary={movie.summary} 
              gernes={movie.gernes}
            />
          ))}
        </div>
      )}      
    </div>
  );
}

export default Home;