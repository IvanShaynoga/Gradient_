import React from "react";
import "../style/header.scss";

const Header = () => {
  return (
    <div className="header">
      <img
        className="box logo"
        src="/media/front/444.png"
        alt="img logo errors"
      />
      <div className="box info">
        <div className="head head-name">агент: Григорий Громовик</div>
        <div className="head head-phone">+7 (962) 902 19 19</div>
      </div>
    </div>
  );
};

export default Header;
