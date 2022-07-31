import { useState } from "react";
import "./styles.css";

export default function App() {
  const [status, setStatus] = useState();
  const [value, setValue] = useState();
  const [amount, setAmont] = useState(0);

  const deposit = (e) => {
    if (value > 0) {
      setAmont(Number(value) + amount);
    } else {
      alert("enter valid amount");
    }
  };

  const withdraw = (e) => {
    if (value < amount) {
      setAmont(amount - Number(value));
    } else {
      alert("invalid amount");
    }
  };
  return (
    <>
      <h2>ATM Process</h2>
      <select onChange={(e) => setStatus(e.target.value)}>
        <option></option>
        <option>deposit</option>
        <option>withdraw</option>
      </select>
      <br />
      <br />
      <br />
      {status === "deposit" ? (
        <div>
          <label>deposit</label>
          <input type="number" onChange={(e) => setValue(e.target.value)} />
          <input type="submit" onClick={deposit} disabled={!value} />
        </div>
      ) : null}
      {status === "withdraw" ? (
        <div>
          <label>withdraw</label>
          <input type="number" onChange={(e) => setValue(e.target.value)} />
          <input type="submit" onClick={withdraw} disabled={!value} />
        </div>
      ) : null}
      <h1>Balance is:{amount}</h1>
    </>
  );
}
