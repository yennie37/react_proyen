/** 영화 상세페이지를 보여줄 화면 */
//import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Detail.module.css";

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState(""); 

    useEffect(() => {
        const getMovie = async() => {
            const json = await(
                //await 는 async 함수 내부에 있지않으면 사용할 수 없음.
                await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();

            //console.log(json.data.movie);
            setMovie(json.data.movie);
            setLoading(false);
        }    

        getMovie();
    }, [id]);

    // 오직 한 개의 태그만 리턴 가능 => 하나의 div 안에 작성
    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loader}>
                    <h1>영화정보를 불러오는 중 :3</h1>
                </div>
            ) : (  
                <div>
                    <h1 className={styles.center}>{movie.title_long}</h1>      
                    <div className={styles.center}>
                        <img src={movie.medium_cover_image} alt={movie.title_long}/>                    
                    </div>
                    <h3 className={styles.right}>{movie.genres[0]}</h3>
                    {movie.runtime === 0 ? null : (
                        <p className={styles.right}><b>{movie.runtime} Mins</b></p>
                    )}
                    <p>{movie.description_full}</p>      
                </div>
            )}
        </div>
        
    );
}

export default Detail; 