import axios from 'axios';

const API_URL = 'http://localhost:8080/api/login';

const login = async (username, password) => {
  try {
    const response = await axios.post(API_URL, { username, password }); // POST 메서드 사용
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error('로그인 요청에 실패했습니다.');
    }
  }
};

export { login };
