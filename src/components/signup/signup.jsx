import React from 'react';
import styles from './signup.module.css';

const Signup = () => {

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>회원가입</h1>
      </header>
      <section className={styles.joinForm}>
        <form className={styles.inputForm} action="submit">
          <div className={styles.intArea}>
            <input
              type="text"
              name="id"
              id="id"
              autoComplete="off"
              placeholder="email주소"
              className={styles.input}
            />
          </div>
          <div className={styles.intArea}>
            <input
              type="password"
              name="pw"
              id="pw"
              autoComplete="off"
              placeholder="비밀번호"
              className={styles.input}
            />
          </div>
          <div className={styles.intArea}>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              placeholder="이름"
              className={styles.input}
            />
          </div>
          <div className={styles.intArea}>
            <input
              type="text"
              name="birth"
              id="birth"
              autoComplete="off"
              placeholder="생년월일 8자리"
              className={styles.input}
            />
          </div>
          <div className={styles.intArea}>
            <input
              type="text"
              name="phone"
              id="phone"
              autoComplete="off"
              placeholder="휴대전화번호"
              className={styles.input}
            />
          </div>

          <div className={styles.btnArea}>
            <button type="button" className={styles.submitButton}>
              회원가입
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Signup;
