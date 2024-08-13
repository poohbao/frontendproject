import React from "react";
import styles from "./topNavigationBar.module.css";
import { Link } from "react-router-dom";

export const TopNavigationBar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/">
          <div className={styles.logo}>
            <img src="/images/emptylogo.png" alt="logo" />
          </div>
        </Link>
        <Link to="/">
          <div className={styles.input_wrap}>
            <h1 className={styles.bigtitle}>소호 아카데미</h1>
          </div>
        </Link>
        <nav className={styles.navbar}>
          <ul>
            <li>
              <Link to="/About"><span>학원소개</span></Link>
            </li>
            <li>
              <Link to="/Gallery"><span>갤러리</span></Link>
            </li>
            <li>
              <Link to="/Location"><span>오시는 길</span></Link>
            </li>
            <li>
              <Link to="/Contact"><span>문의사항</span></Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.menu}>
        <Link to="/cart">
          <div className={styles.shopping_cart}>
            <img src="/images/icon-shopping-cart.svg" alt="cart" />
            <span>장바구니</span>
          </div>
        </Link>
        <Link to="/login">
          <div className={styles.mypage}>
            <img src="/images/icon-user.svg" alt="user" />
            <span>로그인</span>
          </div>
        </Link>
      </div>
    </header>
  );
};
