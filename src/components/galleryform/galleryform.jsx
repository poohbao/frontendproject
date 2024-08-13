import React, { useState } from 'react';
import styles from './galleryform.module.css';

const GalleryForm = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // FormData 객체 생성
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (image) {
      // 원본 파일을 가져오기 위해 `input`에서 파일을 직접 읽어야 함
      const fileInput = document.getElementById('image');
      formData.append('image', fileInput.files[0]);
    }

    // 서버에 데이터 전송
    fetch('http://localhost:8080/api/gallery', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <label htmlFor="image">사진 첨부:</label>
        <input type="file" id="image" accept="image/*" onChange={handleImageChange} />
      </div>
      {image && <img src={image} alt="미리보기" className={styles.preview} />}
      <div className={styles.inputGroup}>
        <label htmlFor="title">제목:</label>
        <input 
          type="text" 
          id="title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          required 
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="description">내용:</label>
        <textarea
          id="description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        ></textarea>
      </div>
      <button className={styles.gfbutton} type="submit">등록</button>
      <button className={styles.gfbutton} type="reset" onClick={() => { setImage(null); setTitle(''); setDescription(''); }}>취소</button>
    </form>
  );
};

export default GalleryForm;
