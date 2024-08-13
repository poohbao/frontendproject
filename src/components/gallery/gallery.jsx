import {useState, useEffect} from 'react';
import styles from './gallery.module.css';
import { Link } from "react-router-dom";
// src/components/gallery/gallery.jsx
import { getAllImages } from '../../api/galleryApi';


const Gallery = () => {
  // 상태 변수 설정
  const [images, setImages] = useState([]);

  // 컴포넌트가 마운트될 때 데이터 가져오기
  useEffect(() => {
    // API로부터 데이터 가져오기
    const fetchImages = async () => {
      try {
        // API 요청
        const response = await getAllImages();
        // 데이터를 상태에 저장
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchImages();
  }, []); // 빈 배열을 넣으면 컴포넌트가 마운트될 때만 실행됨

  return (
    <>
      <header className={styles.header}>
        <h1>갤러리</h1>
        <Link to="/GalleryForm"><span>등록</span></Link>
      </header>
      <div>
        <span>초등부</span>
        <span>중.고등부</span>
        <span>성인부</span>
      </div>
      {/* 갤러리 이미지 표시 부분 */}
      <div className={styles.part_wrap}>
        {images.map(gallery => (
          <div key={gallery.id} className={styles.item}>
            <a href={gallery.imageUrl} target="_blank" rel="noopener noreferrer">
              <img src={gallery.imageUrl} alt={gallery.imageUrl} className={styles.img} />
              <p>{gallery.description}</p>
            </a>
          </div>
        ))}
      </div>
      {/* 다른 내용을 추가할 수 있는 부분 */}
      <div className={styles.bbs}>
        {/* 추가적인 내용 */}
      </div>
    </>
  );
};

export default Gallery;
