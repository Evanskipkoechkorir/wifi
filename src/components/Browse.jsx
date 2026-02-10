import styles from "./browser.module.css";
import { useEffect } from "react";

export default function Browse({ setHome }) {
      useEffect(() => {
    const timer = setTimeout(() => {
      setHome("expired");
    }, 10000); 

    return () => clearTimeout(timer);
  }, [setHome]);

  return (
    <div className={styles.browseContainer}>
      <h1 className={styles.browseH}>You are connected</h1>
    </div>
  );
}
