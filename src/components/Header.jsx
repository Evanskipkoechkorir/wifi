import styles from "./header.module.css";
import wifiIcon from "../assets/images/wifi-signal-icon-blue-color.jpg";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={wifiIcon} alt=" Company Icon" />
      </div>
      <h2> Hall Wi-Fi limited </h2>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={wifiIcon} alt="Company Icon" />
      </div>
    </div>
  );
}
