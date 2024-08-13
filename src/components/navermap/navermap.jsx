import React, { useEffect } from 'react';
import styles from './navermap.module.css';

const NaverMap = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=zp8mylayt1`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      const mapOptions = {
        center: new window.naver.maps.LatLng(35.1457268, 126.8818274), // 소호아카데미의 위도와 경도
        zoom: 18,
        zoomControl: true,
        zoomControlOptions: {
          position: window.naver.maps.Position.RIGHT_CENTER,
        },
      };

      const map = new window.naver.maps.Map('map', mapOptions);

      const markerOptions = {
        position: new window.naver.maps.LatLng(35.1457268, 126.8818274), // 소호아카데미의 위도와 경도
        map: map,
        icon: {
          url: 'https://navermaps.github.io/maps.js/docs/img/example/pin_default.png', // 원하는 마커 아이콘 URL로 변경
          size: new window.naver.maps.Size(24, 37),
          origin: new window.naver.maps.Point(0, 0),
          anchor: new window.naver.maps.Point(12, 37),
        },
      };

      new window.naver.maps.Marker(markerOptions);
    };
  }, []);

  return (
    <>
    <header className={styles.header}>
        <h1>오시는 길</h1>
    </header>
    <div>
      <div className={styles.minimap} id="map" style={{ width: '100%', height: '500px' }}></div>
      <h1>소호아카데미 위치</h1>
      <p>광주 광역시 서구 화운로 63</p>
      <p>(광주 서구 화정동 628-10)</p>
    </div>
    </>
     
  );
};

export default NaverMap;
