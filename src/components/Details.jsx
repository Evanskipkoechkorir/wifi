import styles from "./details.module.css";
import { useState } from "react";

export default function Details({ data, setHome, setCode }) {
  if (!data) return null;

  const [phone, setPhone] = useState("");

  const handleBuy = () => {
    if (!isValidKenyanNumber(phone)) return;

    setHome("connected");
    setCode(codes);
  };

  const isValidKenyanNumber = (number) => {
    const regex = /^(?:\+254|0|)(7|1)\d{8}$/;
    return regex.test(number);
  }

  function generateCode() {
    return Math.floor(100000 + Math.random() * 900000);
  }

  const codes = generateCode();

  return (
    <div className={styles.detailsContainer}>

      <h2 className={styles.detailsHeader}>Enter your phone number</h2>
      <input
      className={styles.detailsInput}
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter phone number"
      />
      <button className={styles.detailsButton} onClick={handleBuy}>Buy</button>
    </div>
  );
}
