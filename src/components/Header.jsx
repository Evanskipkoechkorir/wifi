import styles from "./header.module.css";
import wifiIcon from "../public/images/wifi-signal-icon-blue-color.jpeg";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src="/public/images/wifi-signal-icon-blue-color.jpg"
          alt=" Company Icon"
        />
      </div>
      <h2> Hall Wi-Fi limited </h2>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src="/public/images/wifi-signal-icon-blue-color.jpg"
          alt="Company Icon"
        />
      </div>
    </div>
  );
}
