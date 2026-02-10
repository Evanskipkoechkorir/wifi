import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
         <h1>Contact <span>0123456789</span> <b>/ </b> <span>0712345678</span></h1>
        
      </div>

      <div className={styles.footerBottom}>
        © {new Date().getFullYear()} WiFi Project. All rights reserved.
      </div>
    </div>
  );
}

