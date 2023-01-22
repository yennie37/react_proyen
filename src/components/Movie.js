/** Moive component */
import PropTypes from "prop-types";
//Link : 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트
// => 더 빠르게 반응하는 것처럼 보임
import {Link} from "react-router-dom"; 

function Movie({id, coverImg, title, summary, genres}) {
    return (
        <div>
            <img src={coverImg} alt={title}/>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {/** 제공하는 api에서 genrnes가 없는 영화가 존재
                 * => 없는 property에서 map을 호출하게되어 에러 발생. 
                 * => genres가 있는지 먼저 체크한 후 map()
                 */}
                {genres && genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

Movie.proTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;