import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1>
        <Link to="/">영단어고급</Link>
      </h1>
      <div className="menu">
        <Link to="/create_word" className='link'>단어 추가</Link>
        <a href="#x" className='link'>데이 추가</a>
      </div>
    </div>
  );
};

export default Header;