import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // 스타일링을 위한 CSS 파일 (선택 사항)

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/about">학원소개</Link>
        </li>
        <li>
          <Link to="/gallery">갤러리</Link>
        </li>
        <li>
          <Link to="/location">오시는 길</Link>
        </li>
        <li>
          <Link to="/contact">문의사항</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
