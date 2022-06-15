import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = () => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  // useNavigate 페이지 이동
  const navigate = useNavigate();
  const goTologin = () => {
    navigate("/login");
  };
  const search = (e) => {
    if (e.key === "Enter") {
      // 입력한 검색어를 읽어와서 ui를 변경해준다.
      // input안에 있는 값을 읽어 오고 싶을때는 ? e.target.value 리액트에서는 읽어오는 값이 event 안에 들어있따(js에서는 value를 이용했었음.)
      let keyword = e.target.value;
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div>
      <div className="login-button" onClick={goTologin}>
        <div>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <span>Login</span>
      </div>
      <div className="nav-section">
        <Link to="/">
          <img
            className="logo"
            src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg"
            alt="logo"
          />
        </Link>
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className="menu-search">
          <FontAwesomeIcon icon={faSearch} className="icon" />
          {/* Enter 입력시 이벤트 호출 함수 onKeyPress */}
          <input
            type="text"
            placeholder="제품 검색"
            onKeyPress={(e) => search(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
