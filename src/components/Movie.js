/** Moive component */
import PropTypes from "prop-types";
import {Link} from "react-router-dom"; 
import styles from "./Movie.module.css";

function Movie({id, coverImg, title, summary, genres}) {
    return (
        <div className={styles.movie}>
            <img src={coverImg} alt={title}/>
                        
            <h2 className={styles.title}>
                <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link>
            </h2>
                
            <ul className={styles.movie__genres}>        
                {genres && genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>

            {/** summary가 200자 이상이면 summary를 ' ' 공백으로 나누고, 처음부터 30개의 단어를 추출하여 그대로 출력 */}
            {summary.length < 200 ? (
                <p>{summary}</p>
                ) : (
                <p>{summary.split(' ').slice(0, 30).join(' ')}...</p>
            )}
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