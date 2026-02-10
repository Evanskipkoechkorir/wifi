import { useState } from "react";
import styles from "./connected.module.css";

export default function Connected({ code, setHome }) {
 
  const access = () => {
    setHome("allowed");
  };

  const [input, setInput] = useState(code);

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <div className={styles.connectedContainer}>
      <p className={styles.connectedP}>
        your code is <br /> <b className={styles.connectedB}>{code}</b>
      </p>
      <input
        className={styles.connectedInput}
        type="number"
        value={input}
        onChange={handleChange}
      />
      <button className={styles.connectedButton} onClick={access}>
      
        Connect
      </button>
    </div>
  );
}
