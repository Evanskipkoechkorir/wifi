import styles from "./home.module.css";

export default function Home({ setHome, setData }) {
  const plan = [
    { time: "1 hour", price: "Ksh 10" },
    { time: "2 hours", price: "Ksh 20" },
    { time: "3 hours", price: "Ksh 30" },
    { time: "5 hours", price: "Ksh 50" },
    { time: "24 hours", price: "Ksh 100" },
  ];

  const handleClick = (index) => {
    setData(plan[index]);
    setHome("details");
  };

  const handleCode = () => {
    setHome("connected");
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.each}>
        <h3> Enter  Code Directly</h3>

        <button className={styles.code} onClick={() => handleCode()}>
          <i>Enter</i>
        </button>
      </div>
      <div className={styles.each}>
        <h3>
          Price : <b>Ksh 10</b>
        </h3>
        <h3>
          Time : <b>1 Hour</b>
        </h3>
        <button onClick={() => handleClick(0)}>Select</button>
      </div>
      <div className={styles.each}>
        <h3>
          Price : <b>Ksh 20</b>
        </h3>
        <h3>
          Time : <b>2 Hours</b>
        </h3>
        <button onClick={() => handleClick(1)}>Select</button>
      </div>
      <div className={styles.each}>
        <h3>
          Price : <b>Ksh 30</b>
        </h3>
        <h3>
          Time : <b>3 Hours</b>
        </h3>
        <button onClick={() => handleClick(2)}>Select</button>
      </div>
      <div className={styles.each}>
        <h3>
          Price : <b>Ksh 50</b>
        </h3>
        <h3>
          Time : <b>5 Hours</b>
        </h3>
        <button onClick={() => handleClick(3)}>Select</button>
      </div>
      <div className={styles.each}>
        <h3>
          Price : <b>Ksh 100</b>
        </h3>
        <h3>
          Time : <b>24 Hours</b>
        </h3>
        <button onClick={() => handleClick(4)}>Select</button>
      </div>
    </div>
  );
}
