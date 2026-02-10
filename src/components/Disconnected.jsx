import styles from "./disconnected.module.css";

export default function Disconnected({ setHome }) {
  const handleReset = () => {
    setHome("home");
  };
  return (
    <div className={styles.disconnectedContainer}>
      <h1 className={styles.disconnectedH1}>You have been disconnected from the internet</h1>
      <h2 className={styles.disconnectedH2}>
        Click <span className={styles.disconnectedSpan} onClick={handleReset}>here</span> to sign in to network
      </h2>
    </div>
  );
}
