// src/components/login/Login.jsx
import React, { useState } from 'react';
import styles from './login.module.css';
import { login } from '../../api/usersApi'; // 'login' 함수 import
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); //useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password); // 'login' 함수 호출
      alert('로그인 성공');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignup = () => {
    navigate('/signup'); // 회원가입 페이지로 이동
  };

  return (
    <div className={styles['login-container']}>
      <h2 className={styles['h2']}>로그인</h2>
      <form action="/api/login" method="post" onSubmit={handleSubmit} className={styles['form']}>
        <div className={styles['div']}>
          <label className={styles['label']}>사용자 이름:</label>
          <input 
            type="text" 
            name="username"
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
            className={styles['input']}
          />
        </div>
        <div className={styles['div']}>
          <label className={styles['label']}>비밀번호:</label>
          <input 
            type="password"
            name="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className={styles['input']}
          />
        </div>
        {error && <p className={styles['p']}>{error}</p>}
        <button type="submit" className={styles['button']}>로그인</button>
        <button type="button" className={styles['button']} onClick={handleSignup}>회원가입</button>
      </form>
    </div>
  );
};

export default Login;
