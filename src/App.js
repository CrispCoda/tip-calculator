import { useState } from "react";
import "./App.css";

function App() {
  const [bill, setBill] = useState(0);
  const [myTip, setMyTip] = useState(20);
  const [myFriendsTip, setMyFriendsTip] = useState(20);

  return (
    <div className="App">
      <BillForm
        bill={bill}
        setBill={setBill}
        myTip={myTip}
        setMyTip={setMyTip}
        myFriendsTip={myFriendsTip}
        setMyFriendsTip={setMyFriendsTip}
      />
      <BillTotal bill={bill} myTip={myTip} myFriendsTip={myFriendsTip} />
    </div>
  );
}

const BillForm = ({
  bill,
  setBill,
  myTip,
  setMyFriendsTip,
  setMyTip,
  myFriendsTip,
}) => {
  return (
    <div>
      <div>
        How much was the Bill?
        <input
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
          type="number"
        ></input>
      </div>
      <div>
        How did you like your service?
        <select
          value={myTip}
          onChange={(e) => setMyTip(Number(e.target.value))}
        >
          <option value={20}>It was amazing (20%)</option>
          <option value={10}>It was good (10%)</option>
          <option value={5}>It was okay (5%)</option>
          <option value={0}>I didn't enjoy it (0%)</option>
        </select>
      </div>
      <div>
        How did your friend like the service?
        <select
          value={myFriendsTip}
          onChange={(e) => setMyFriendsTip(Number(e.target.value))}
        >
          <option value={20}>It was amazing (20%)</option>
          <option value={10}>It was good (10%)</option>
          <option value={5}>It was okay (5%)</option>
          <option value={0}>I didn't enjoy it (0%)</option>
        </select>
      </div>
    </div>
  );
};

const BillTotal = ({ bill, myTip, myFriendsTip }) => {
  const tip = (bill * (myTip + myFriendsTip)) / 2 / 100; // Calculating percentage

  return (
    <div>
      <h2>{`You pay £${tip + bill} (£${bill} + £${tip} tip)`}</h2>
    </div>
  );
};

export default App;
