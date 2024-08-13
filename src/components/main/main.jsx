import styles from "./main.module.css";
import { EventBanner } from "../eventBanner/eventBanner";
import { Product } from "../products/product";

export const Main = () => {
  return (
    <>
     <header className={styles.header}>
        
       
      </header>
      <EventBanner />
      <div className={styles.filter}>
      
      </div>
      <main className={styles.flex_wrap}>
        <Product />
      </main>
    </>
  );
};
