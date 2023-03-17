/** 메인 js */
import {
  //BrowserRouter : 일반적인 웹사이트처럼 생긴 URL.
  //HashRouter : 포트번호와 Route사이에 /#/이 들어감.
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";
import TestHome from "./routes/TestHome";
import Hooks10_1 from "./routes/Hooks10_1";
import Hooks10_2 from "./routes/Hooks10_2";
import Hooks10_3 from "./routes/Hooks10_3";
import MovieHome from "./routes/MovieHome";
import Wheather from "./routes/Wheather";

function App() {
  // 기존에 영화목록 보여줬었는데, 이제는 router를 render할 것.
  // router란 URL을 보고있는 component임.
  return (
    <Router>
      {/** Switch가 하는 일 ? Route를 찾아서 컴포넌트를 랜더링. */}
      {/** Switch => 버전6부터 Routes로 바뀜 */}
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home/>}/>          
        {/** ':'를 빼놓지말고 꼭 써야함! 안그럼 단순 string으로 id가 출력됨 */}
        <Route path={`${process.env.PUBLIC_URL}/testPage/hooks1`} element={<Hooks10_1/>}/>     
        <Route path="/testPage/hooks2" element={<Hooks10_2/>}/>   
        <Route path="/testPage/hooks3" element={<Hooks10_3/>}/>
        <Route path="/testPage/" element={<TestHome/>}/>         

        <Route path={`${process.env.PUBLIC_URL}/wheather/`} element={<Wheather/>}/>
        <Route path={`${process.env.PUBLIC_URL}/movieHome/`} element={<MovieHome/>}/>
        <Route path={`${process.env.PUBLIC_URL}`+'/movie/:id'} element={<Detail/>}/>
        <Route path={`${process.env.PUBLIC_URL}/about-us`} element={<h1>Hello</h1>}/>
      </Routes>
    </Router>
  );
}

export default App;
