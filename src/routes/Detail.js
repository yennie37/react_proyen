/** 영화 상세페이지를 보여줄 화면 */
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const {id} = useParams();
    const getMovie = async() => {
        const json = await(
            //await 는 async 함수 내부에 있지않으면 사용할 수 없음.
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
    }
    
    useEffect(() => {
        /*
        const json = await(
            //await 는 async 함수 내부에 있지않으면 사용할 수 없음. 아래처럼 따로 만들어줘서 호출할 것.
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        */
       getMovie();
    }, []);
    return <h1>Detail</h1>;
}

export default Detail; 