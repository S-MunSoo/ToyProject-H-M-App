import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import Navbar from "./component/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

// json-server --watch db.json --port 4000
// 유저는 메뉴와 상품들을 볼 수 있다.
// 유저는 로그인을 할 수 있다.
// 유저는 상품디테일을 보기 위해 로그인을 해야한다.
// 로그인한 유저는 상품디테일정보를 볼 수 있다.
// 유저는 상품을 검색할 수 있다.
// 유저는 로그아웃할 수 있다.

// 1. 전체상품 페이지 , 로그인 페이지 , 상품 상세페이지 제작(리액트 라우터 설치) npm install react-router-dom@6 : 완료
// 1-1 네비게이션 바 만들기(서치) 페이지내 그대로 유지하기!!
// 2. 전체 상품페이지 에서는 전체 상품 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다(SNS연동)
// 4. 상품디테일을 눌렸으나 , 로그인이 안되어 있을 경우 로그인 페이지가 먼저 나온다(private Route)
// 5. 로그인이 되어 있을 경우에는 상품 디테일 페이지를 볼 수 있다.
// 6. 로그아웃 버튼을 클릭하면 로그아웃이 된다
// 7. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다 , 다시 로그인 페이지가 나타난다
// 8. 로그아웃 <-> 로그잇
// 9. 상품 검색

function App() {
  // 로그인 됬는지 안됬는지 알 수 있도록 state를 만든다

  const [authenticate, setAuthenticate] = useState(false); // state가 true이면 로그인됨 , false이면 안됨
  useEffect(() => {
    console.log("AAA", authenticate);
  }, [authenticate]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />}></Route>
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        ></Route>
        {/*Restful Route 규칙  */}
        <Route
          path="/Product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
