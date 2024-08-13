import styles from "./introduce.module.css";
import React from "react";

export const Introduce = () => {

    return (
       <>
        <header className={styles.header}>
        <h1>학원소개</h1>
        </header>
        <div className={styles.container}> {/* 필요한 스타일 적용 */}
            <div className={styles.section}>
                <div className={styles.imageBox}>image box</div>
                <div className={styles.text}>text</div>
            </div>
            <div className={styles.section}>
                <div className={styles.text}>text</div>
                <div className={styles.imageBox}>image box</div>
            </div>
        </div>
        </>
    );
};
