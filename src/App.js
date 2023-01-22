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
        <Route path="/movie/:id" element={<Detail/>}/>
        <Route path="/about-us"element={<h1>Hello</h1>}/>
      </Routes>
    </Router>
  );
}

export default App;
